const  { dbClient, ObjectId,
    findDB,
    aggregateDB,
    updateOneDB,
    updateManyDB,
    addOneDB,
    deleteOneDB,
    deleteManyDB,
} = require('./dbutils')
const path = require('path')
const sharp = require('sharp')
const ExifParser = require('exif-parser');
const fs = require('fs')
const formidable = require('formidable')
const { format } = require('path')
const jwt = require('jsonwebtoken');
const axios = require('axios')
const { xml2js } = require('xml-js');
const nodemailer = require('nodemailer');

const secretKey = process.env.SECRETKEY;
const dbName = process.env.DBNAME
const fullpath =  process.env.FULLPATH
const fullpathphoto =  process.env.FULLPATHPHOTO
const moment = require('moment-timezone')
const { featureCollection, point, centroid, nearestPoint } = require('@turf/turf')

const getSite = async (req, res) => {
  console.log('get site function')
  const results = await findDB(dbName,'sites',{ },{ code: 1})
 
  res.status(200).json({ results })
}

const getMap = async (req, res) => {
    const { data } = req.body
    const results = await findDB(dbName,'maps',{ site_id: parseInt(data.site_id) },{ code: 1})
    res.status(200).json({ results })
}

const getPoint = async (req, res) => {
    const { data } = req.body
    //console.log('get point from map id',data.map_id)
    if (data.map_id == undefined) {
        res.status(200).json({
        status: 200,
        results: []
        })
    }
    else {
        const condition = [
        {
            '$match': {
            'id':  data.map_id
            }
        }, {
            '$lookup': {
            'from': 'points', 
            'localField': 'id', 
            'foreignField': 'map_id', 
            'as': 'point'
            }
        }, {
            '$unwind': {
            'path': '$point'
            }
        }, {
            '$lookup': {
            'from': 'photos', 
            'localField': 'point.id', 
            'foreignField': 'point_id', 
            'as': 'photos'
            }
        }
        ]
        //console.log('get point condition', condition)
        const results = await aggregateDB(dbName,'maps',condition)
        //console.log(results)
        res.status(200).json({ results: results })
    }
}

const addPoint = async (req, res) => {
  const form = formidable({ multiples: false });
  console.log('add point -----> ')
  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }
    const { data } = fields;
    const form = JSON.parse(data)
    const file = JSON.parse(JSON.stringify(files))
    let inputFile = ''
    console.log('add/edit point', form, file)
    if (file.pointPhoto != undefined) {
      inputFile  = file[Object.keys(files)].filepath
    }
    if (form.edit) {
      console.log( 'edit point',form.point.id)
      const newData = { $set: {
          no: parseInt(form.point.no),
          name: form.point.name,
          x: parseInt(form.point.x),
          y: parseInt(form.point.y),
          timestamp: new Date(),
          postby: form.point.postby
        } 
      }
      const results = await updateOneDB(dbName,'points', { id: form.point.id }, newData) 
    }
    else {
      console.log( 'add point',form.code)

      const results = await addOneDB(dbName,'points', {
        id: form.point.id,
        map_id: form.point.map_id,
        no: parseInt(form.point.no),
        name: form.point.name,
        x: parseInt(form.point.x),
        y: parseInt(form.point.y),
        timestamp: new Date(),
        postby: form.point.postby
      })

    }

    // upload file
    if (inputFile.length > 0) {
      const pointDir = `${fullpath}/${form.site_id}/${form.point.map_id}/${form.point.id}`
      console.log('point dir', inputFile, pointDir)
      ImagetoTiles(inputFile, pointDir, form)
      res.status(200).json({ results: form }) 
    }
    else {
      res.status(200).json({ results:'fail' }) 
    }
  })
}

const updatePoint = async (req, res) => {
    const { data } = req.body
    console.log('update points', data)
    const condition = data.condition
    
    console.log('condition', condition)
    
    const newpoint = { $set: {
        no: parseInt(data.newpoint.no),
        name: data.newpoint.name,
        x: parseInt(data.newpoint.x),
        y: parseInt(data.newpoint.y),
        timestamp: new Date(),
        modifiedBy: data.newpoint.modifiedBy
      } 
    }
    const results = await updateOneDB(dbName,'points', condition, newpoint)    
    res.status(200).json({ results })
}

const deletePoint = async (req,res) => {
    const { data } = req.body
    console.log('delete points', data.point.id)
    await deleteManyDB(dbName,'photos', { point_id: data.point.id})
    await deleteManyDB(dbName,'markers', { point_id: data.point.id})  
    await deleteManyDB(dbName,'comments', { point_id: data.point.id})       
    await deleteOneDB(dbName,'points', { id: data.point.id })   
    
    //remove all images of this point
    const pointDir = `${fullpath}/${data.site_id}/${data.point.map_id}/${data.point.id}`
    console.log('delete all files in', pointDir)
    if (fs.existsSync(pointDir)) {
      deleteFilesRecursive(pointDir)
    }

    res.status(200).json({ results: {
        id:data.point.id,
        msg: 'Delete point done'
      }  
    })
}

const loadSites = async(req, res) => {
    //console.log('load site')
    const { data } = req.body
    const condition = [
        {
          '$match': {
            'id': parseInt(data.site)
          }
        }, {
          '$lookup': {
            'from': 'maps', 
            'localField': 'id', 
            'foreignField': 'site_id', 
            'as': 'maps'
          }
        }, {
          '$lookup': {
            'from': 'points', 
            'localField': 'maps.id', 
            'foreignField': 'map_id', 
            'as': 'points'
          }
        }, {
          '$lookup': {
            'from': 'photos', 
            'localField': 'points.id', 
            'foreignField': 'point_id', 
            'as': 'photos'
          }
        }
      ]
    //console.log(condition)
    const results = await aggregateDB(dbName,'sites',condition)
    //console.log(results)
    res.status(200).json({ results: results })
}

const addSite = async(req, res) => {
  let id =  Math.floor(Date.now() / 1000)
  const form = formidable({ multiples: false });
  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }

    const { data } = fields;
    const form = JSON.parse(data)
    const file = JSON.parse(JSON.stringify(files))
    let inputFile = ''
    console.log('add/edit site', form, file)
    if (file.coverPhoto != undefined) {
      inputFile  = file[Object.keys(files)].filepath
    }
   
    if (form.edit) {
      console.log( 'edit site',form.code)
      id = form.id
      const newData = { $set: {
            code: form.code,
            name: form.name,
            province: form.province,
            province_en: form.province_en,
            postby: form.postby,
            modified: new Date()
          } 
        }
      const results = await updateOneDB(dbName,'sites', { id: form.id }, newData)  
    }
    else {
      console.log( 'add site',form.code)
      const results = await addOneDB(dbName,'sites',{
        id,
        code: form.code,
        name: form.name,
        province: form.province,
        province_en: form.province_en,
        postby: form.postby,
        modified: new Date()
      })
    }

    // upload file
    if (inputFile.length > 0) {
      // create site directory
      const siteDir = `${fullpath}/${id}`
      if (!fs.existsSync(siteDir)) {
        fs.mkdirSync(siteDir, { recursive: true });
        console.log(siteDir, 'directory does not exists, create ')
      }
      else {
        console.log(siteDir, 'directory is exists')
      }

      // resize cover 
      const targetWidth = 380
      outputFile = `${siteDir}/cover.jpg`
      sharp(inputFile)
      .resize(targetWidth)
      .toFile(outputFile)
      .then(() => {
        console.log('Image resized successfully!');
      })
      .catch((error) => {
        console.error('Error resizing image:', error);
      });
    }
    
    res.status(200).json({ results: 
      {
        id,
        code: form.code,
        name: form.name,
        postby: form.postby,
      }
    })
  })
}

const deleteSite = async(req, res) => {
  const { data } = req.body
  console.log('delete site', data)

  const maps =  await findDB(dbName,'maps',{ site_id: data.id }, {})
  maps.map( async(m) => {
    const points =  await findDB(dbName,'points',{ map_id: m.id }, {})
    points.map(async(p) => {
      await deleteManyDB(dbName,'comments', { point_id: p.id})     
      await deleteManyDB(dbName,'markers', { point_id: p.id})  
      await deleteManyDB(dbName,'photos', { point_id: p.id})
      await deleteOneDB(dbName,'points', { id: p.id })   
    })
  })
  
  await deleteManyDB(dbName,'maps',{ site_id: data.id,})
  const results = await deleteOneDB(dbName,'sites',{ id: data.id,})
  const siteDir = `${fullpath}/${data.id}`
  deleteFilesRecursive(siteDir)
  res.status(200).json({ results: results })
}

function deleteFilesRecursive(directory) {
  if (fs.existsSync(directory)) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        deleteFilesRecursive(filePath);
      } else {
        fs.unlinkSync(filePath);
      }
    }
    fs.rmdirSync(directory);
  }
}

/*
async function resizeAndCopyImage(res, sourcePath, destinationPath, width, height) {
    const sharpObj = sharp(sourcePath);
    if (height > 0) {
      sharpObj.resize({ width, height})
    }
    else {
      sharpObj.resize({ width });
    }

    sharpObj.toBuffer(async(err, buffer) => {
      if (err) {
        console.error(`Error resizing image: ${err}`);
        return;
      }
  
      // Ensure that the destination directory exists
      const destinationDir = destinationPath.substring(0, destinationPath.lastIndexOf('/'));
      console.log('upload map')
  
      if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
        console.log('directory does not exists, create ',destinationDir)
      }
  
      fs.writeFile(destinationPath, buffer, async(err) => {
        if (err) {
          console.error(`Error writing file: ${err}`);
          res.status(401).json({ results: 'Error to upload' })
          return;
        }
        console.log(`Image resized and copied to ${destinationPath}`);
        res.status(200).json({ results: 'Upload completed' })
      }) 
    
      // create thumbnail for photo
      if (height > 0) {
        const { name } = path.parse(destinationPath);
        const w = 2048
        const h = 1536
        const left = (width-w)/2
        const top = (height-h)/2
        sharp(sourcePath)
        .extract({ width: w, height: h, left: 2440, top: 1070 })
        .toFile(destinationDir+'/'+ name +'_s.jpg', (err, info) => {
          if (err) {
            console.error(err);
          } else {
            console.log(info);
          }
        });
      }
    });  
}
*/
const makeCover = (inputImagePath, outputDirectory) => {
  sharp(inputImagePath)
  .jpeg({ quality: 25 })
  .toFile(outputDirectory+'/low.jpg', (err) => { 
    if (err) { console.error(err); }
    console.log('Reduced-size image created successfully.');
  });
}

const makeThumbnail = (inputImagePath, outputDirectory, width, height) => {
  // create thumbnail for photo
  console.log('size=',width, height)
  const w = Math.round(parseInt(width)/4)
  console.log('w=',w)
  const h = Math.round(parseInt(height)/2)
  console.log('h=',h)
  const left = Math.round(3/2*w)
  console.log('left=',left)
  const top =  Math.round(parseInt(height)/4)
  console.log('top=',top)
  sharp(inputImagePath)
  .extract({ width: w, height: h, left, top })
  .toFile(outputDirectory+'/thumbnail.jpg', { quality: 10 },  (err, info) => {
    if (err) { console.error(err) } else { console.log(info) }
  })
}

const makeTiles = (inputImagePath, outputDirectory) => {
  // create tiles
  sharp(inputImagePath)
  .metadata()
  .then((metadata) => {
    console.log('--->', metadata)
    const { width, height } = metadata;
    makeThumbnail(inputImagePath, outputDirectory, width, height)

    const tileSize = Math.round(width/16)
    for (let y = 0; y < height; y += tileSize) {
      for (let x = 0; x < width; x += tileSize) {
        const tileFilename = `${Math.floor(x / tileSize)}_${Math.floor(y / tileSize)}.jpg`;
        const outputFilePath = path.join(outputDirectory, tileFilename);

        sharp(inputImagePath)
          .extract({
            left: x,
            top: y,
            width: tileSize,
            height: tileSize
          })
          .toFile(outputFilePath, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            console.log(`Tile saved: ${tileFilename}`);
          });
      }
    }
  })
  .catch((err) => {
    console.error(err);
  });
}

const ImagetoTiles = async(inputImagePath, pointDirectory, form) => {
  // get image informaiton and save to db 
  fs.readFile(inputImagePath, async (err, data) => {
    if (err) {
      console.error('Error reading image:', err);
      return -1;
    }

    // Create an instance of ExifParser and parse the EXIF data
    const exifParser = ExifParser.create(data);
    const result = exifParser.parse();
    const exifData = result.tags;
    
    const photo_id = (exifData.ModifyDate) ? exifData.ModifyDate :
                      (exifData.DateTimeOriginal) ? exifData.DateTimeOriginal : Math.floor(Date.now() / 1000)
    
    const outputDirectory = pointDirectory+'/'+photo_id.toString()  
    
    // create site/map/point directory
    if (!fs.existsSync(pointDirectory)) {
      fs.mkdirSync(pointDirectory);
    }

    // create site/map/point/photo directory
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }

    const outputImagePath = `${outputDirectory}/original.jpg`
    fs.copyFile(inputImagePath, outputImagePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
        return -1;
      }
      console.log('File copied successfully.',inputImagePath,outputImagePath);
    });

    sharp(inputImagePath)
    .metadata()
    .then((metadata) => {
      console.log('--->', metadata)
      const { width, height } = metadata;
      const pointData = {
        id: photo_id,
        point_id: form.point.id,
        postby: form.point.postby,
        gps: exifData,
        size: {
          width,
          height
        },
        timestamp: new Date()
      }
      
      console.log('upload point photo:', pointData)
      addOneDB(dbName, 'photos', pointData)    // add db
      makeCover(inputImagePath, outputDirectory) // make thumbnail and low.jpg
      makeTiles(inputImagePath, outputDirectory) // make tiles
      console.log('upload done')
      return pointData
    })
  })
}

const addMap = async(req, res) => {
  let id =  Math.floor(Date.now() / 1000)
  const form = formidable({ multiples: false });
  
  form.parse(req, async(err, fields, files) => {
    console.log('addmap--')
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }
    const { data } = fields;
    const form = JSON.parse(data)
    const file = JSON.parse(JSON.stringify(files))
    let inputFile = ''
    console.log('add/edit map', form, file)
    if (file.mapPhoto != undefined) {
      inputFile  = file[Object.keys(files)].filepath
    }
    if (form.edit) {
      console.log( 'edit map',form.code)
      id = form.id
      const newData = { $set: {
            code: form.code,
            name: form.name,
            postby: form.postby,
            modified: new Date()
          } 
        }
      const results = await updateOneDB(dbName,'maps', { id: form.id }, newData)  
    }
    else {
      console.log( 'add site',form.code)
      const results = await addOneDB(dbName,'maps',{
        id,
        site_id: form.site_id,
        code: form.code,
        name: form.name,
        postby: form.postby,
        modified: new Date()
      })
    }

    // upload file
    if (inputFile.length > 0) {
      // create site directory
      const mapDir = `${fullpath}/${form.site_id}/${id}`
      if (!fs.existsSync(mapDir)) {
        fs.mkdirSync(mapDir, { recursive: true });
        console.log(mapDir, 'directory does not exists, create ')
      }
      else {
        console.log(mapDir, 'directory is exists')
      }

      // resize cover 
      const targetWidth = 1024
      outputFile = `${mapDir}/map.jpg`
      sharp(inputFile)
      .resize(targetWidth)
      .toFile(outputFile)
      .then(() => {
        console.log('Image resized successfully!');
      })
      .catch((error) => {
        console.error('Error resizing image:', error);
      });
    }
    
    res.status(200).json({ results: {
      id,
      msg: 'add map done'}
     })
    
  })
}

const deleteMap = async(req, res) => {
  const { data } = req.body
  console.log('delete map', data)

  // delete photos
  const points =  await findDB(dbName,'points',{ map_id: data.id }, {})
  points.map( async(p) => {
    await deleteManyDB(dbName,'photos', { point_id: p.id})
    await deleteManyDB(dbName,'markers', { point_id: p.id})  
    await deleteManyDB(dbName,'comments', { point_id: p.id})   
  })
  // delete points
  await deleteManyDB(dbName,'points',{ map_id: data.id })
  // delete maps
  await deleteOneDB(dbName,'maps',{ id: data.id })
  
  // delete all files in directory
  deleteFilesRecursive(`${fullpath}/${data.site_id}/${data.id}`)
  res.status(200).json({ results: 'ok' })
}

const editMap = async(req, res) => {
  const { data } = req.body
  console.log('edit map', data)
  const results = await updateOneDB(dbName,'maps',{ "id": data.id }, {
    $set: {
      code: data.code,
      name: data.name,
      timestamp: new Date(),
      modifiedBy: data.modifiedBy
    }
   })
  
   res.status(200).json({ results })
}

const deletePhoto = async(req, res) => {
  const { data } = req.body

  console.log('delete Photo',data)
  const condition = {
    id: data.id
  }
  const results = await deleteOneDB(dbName,'photos', condition)   

  const directoryPath =  `${fullpath}/${data.site_id}/${data.map_id}/${data.point_id}/${data.id}`
  deleteFilesRecursive(directoryPath)

  /*
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
  
    files.forEach(file => {
      if (file.startsWith(data.photo_id)) {
        const filePath = path.join(directoryPath, file);
        fs.unlink(filePath, err => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`photo ${filePath} deleted`);
        });
      }
    });
  });
  */
  res.status(200).json({ results:
    {
      id: data.id,
      msg: 'Delete photo done'
    } 
  })
}

const updatePhotoById = async(req, res) => {
  const { data } = req.body
  const condition = {
    id: parseInt(data.id)
  }
  
  const newData = { $set: {
      position: data.position,
      zoom: data.zoom
    }
  } 
  console.log('update Photo', condition, newData)

  const results = await updateOneDB(dbName,'photos', condition, newData)    
  res.status(200).json({ results })
}

const getPhotoById = async (req, res) => {
  const { data } = req.body
  //console.log('get photo', data)
  const results = await findDB(dbName,'photos',{ id: parseInt(data.id) },{})
  //console.log(results)
  res.status(200).json({ results: results[0] })
}

const addPhoto = async (req, res) => {
  const form = formidable({ multiples: false });

  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }
    const { data } = fields;
    const form = JSON.parse(data)
    const file = JSON.parse(JSON.stringify(files))
    let inputFile = ''
    console.log('add photo to point', file)
    /*
    for (const key in file) {
      if (file.hasOwnProperty(key)) {
        const value = file[key];
        const inputFile=value.filepath
        const pointDir = `${fullpath}/${form.site_id}/${form.point.map_id}/${form.point.id}` 
        console.log('point dir', inputFile, pointDir, form)
        ImagetoTiles(res, inputFile, pointDir, form)
      }
    }
    */
    const promises = Object.entries(file).map(([key, value]) => {
      if (file.hasOwnProperty(key)) {
        const inputFile = value.filepath;
        const pointDir = `${fullpath}/${form.site_id}/${form.point.map_id}/${form.point.id}`;
        return ImagetoTiles(inputFile, pointDir, form);
      }
    });

    const results = await Promise.all(promises);
    res.status(200).json({ results })
  })
}

const addMarker = async (req, res) => {
  const { data } = req.body
  console.log('add maker', data)
  await addOneDB(dbName, 'markers', data)
  
  res.status(200).json({ results: data })
}

const getMarker = async (req, res) => {
  const { data } = req.body
  //console.log('getMarker',data)
  //let results = []
  let results = await findDB(dbName,'markers',{ point_id: parseInt(data.point_id) },{})
  // if allphoto and only photo_id
  results = results.filter(m => m.allphoto == true || m.photo_id == data.photo_id)
  //console.log('markers', results)
  // find comments 
  const commentMarkers = await findDB(dbName,'comments',{ point_id: parseInt(data.point_id) },{}) 
  let addcomments = commentMarkers.map(c => {
    if (c.marker){
      return {
        id:c.marker.id,
        position: { 
          pitch: c.marker.position.pitch, 
          yaw: c.marker.position.yaw 
        },
        size: { width: 120, height: 120 },
        imageLayer: '/icons/commentMarker.png',
        orientation: 'vertical',
        opacity: .5,
        tooltip:'comment-'+c.id
      }
    }
    else {
      return null
    }
  })
  
  addcomments = addcomments.filter(c=> c != null)
  console.log(addcomments)
  results.push(...addcomments)
  results = results.map(m=> ({
    ...m,
    anchor: 'top center'
  }))
  
  res.status(200).json({ results  })
}

const deleteMarker = async(req, res) => {
  const { data } = req.body
  console.log('delete marker', data)
  await deleteOneDB(dbName,'markers',{ id: data.id })
  res.status(200).json({ results: 'ok' })
}

const updateMarker = async(req, res) => {
  const { data } = req.body
  console.log('data for update', data)

  const condition = {
    id: parseInt(data.id)
  }
  
  const newData = { $set: {
      allphoto: data.allphoto,
      imageLayer: data.imageLayer,
      opacity: data.opacity,
      orientation: data.orientation,
      position: data.position,
      size: data.size,
      to_point_id:data.to_point_id,
      tooltip: data.tooltip,
      type: data.type,
      content: data.content,
      title: data.title
    }
  }

  const results = await updateOneDB(dbName,'markers', condition, newData)  

  /*
  let results
  if (data.type.id == 'hotspot') {
    const newData = { $set: {
        allphoto: data.allphoto,
        imageLayer: data.imageLayer,
        opacity: data.opacity,
        orientation: data.orientation,
        position: data.position,
        size: data.size,
        to_point_id:data.to_point_id,
        tooltip: data.tooltip,
        type: data.type
      }
    }
    results = await updateOneDB(dbName,'markers', condition, newData)  
  }
  else if (data.type.id == 'note') {
    const newData = { $set: {
        text: data.text,
        tooltip: data.tooltip
      }
    }  
    results = await updateOneDB(dbName,'markers', condition, newData)   
  }
  else if (data.type.id == 'link') {
    const newData = { $set: {
        url: data.url,
        tooltip: data.tooltip
      }
    } 
    results = await updateOneDB(dbName,'markers', condition, newData)  
  }
  */
  //console.log('update marker', condition, newData)
   
  res.status(200).json({ results })
}


const login = async(req, res) => {
  const { data } = req.body
  if (await isEGATUser( data.username, data.password ) || process.env.BYPASSLOGIN == 'true' ) { // check egat authorized
    // if first user
    let users = await findDB(dbName,'users',{},{})
    console.log('users',users)
    if (users.length == 0) { // empty users
      const userEGAT = await getHRInfo(data.username)
      if (process.env.BYPASSLOGIN == 'true') {
          await downloadPersonImage(data.username);
        }

        const userData = {
          username: data.username,
          isAdmin: true,
          userEGAT,
          modified: new Date()
        }
        // add first users
        await addOneDB(dbName,'users', userData)
        const payload = {
          user: data.username,
          isAdmin: true
        }
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' })
        res.status(200).json({ results:{ authorized: true, token, user:[userData] }})
    }
    else {
      // if user exist
      const user = await findDB(dbName,'users', { username: data.username }, {})
      if (user.length > 0) {
        const payload = {
          user: user[0].username,
          isAdmin: user[0].isAdmin
        }
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' })
        res.status(200).json({ results:{ authorized: true, token, user }})
      }
      else {
        res.status(200).json({ results: { authorized: false }})
      }
    }
  }
  else {
    res.status(200).json({ results: { authorized: false } })
  }
}

const checkAuthorized = async(req, res) => {
  console.log('check user', req.user)
  const user = await findDB(dbName,'users', { username: req.user.user }, {})
  const payload = {
    user: user[0].username, 
    isAdmin: user[0].isAdmin
  }
  console.log('check authorized payload',payload)
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' })
  res.status(200).json({ 
    results:{
      authorized: true,
      token,
      user
    }
 })
}

const getHRInfo = (empn) => {

  console.log('apitoken: ' + process.env.HRAPI)
  if (process.env.BYPASSLOGIN == 'false') {
    return axios.get('https://hrapi.egat.co.th/api/v1/persons',
        {
          params: {
            'filter[ContainPersonCode]': empn,
          },
          headers: {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'Bearer '+ process.env.HRAPI
          }
        })
        .then( async(res) => {
          if (res.status == 200) {
            if (res.data.data.length > 0) {
              return res.data.data[0]
            }
          }
          else {
            return {}
          }
        })
  }
  else {
    return {}
  }
}

const downloadPersonImage = async (username) => {
  const fileUrl = `https://hrapi.egat.co.th/api/images/${username}`
  const fileName = path.basename(fileUrl) + '.jpg';
  const localFilePath = `${process.env.AVATARPATH}/${fileName}`
  console.log('----------->',fileUrl, localFilePath, fileName)
  try {
    const response = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Authorization' : 'Bearer ' + process.env.HRAPI,
      }
    });

    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    w.on('finish', () => {
      console.log('local path',localFilePath)
      console.log('Successfully downloaded file!');
    });
  } catch (err) {
    console.log(err)
  }
};

const isEGATUser = (loginName, loginPassword) => {
  return true
  console.log('--->',process.env.BYPASSLOGIN)
  //return true
  if (process.env.BYPASSLOGIN == 'false') {
    const url = 'http://webservices.egat.co.th/authentication/au_provi.php'
    const soapAction = 'urn:comparewsdl#validate_user'
    const xmlRequest = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" 
                        xmlns:urn="urn:comparewsdl">
        <soapenv:Header/>
        <soapenv:Body>
          <urn:validate_user>
            <a>${loginName}</a>
            <b>${loginPassword}</b>
          </urn:validate_user>
        </soapenv:Body>
      </soapenv:Envelope>
    `;

    const headers = {
      'Content-Type': 'text/xml',
      'SOAPAction': soapAction
    };

    return axios.post(url, xmlRequest, { headers })
      .then(response => {
        const xmlResponse = response.data;
        const jsonResponse = xml2js(xmlResponse, { compact: true, spaces: 4 });
        const status = jsonResponse['soap:Envelope']?.['soap:Body']?.['validate_userResponse']?.['status']._text;
        console.log('Status:', jsonResponse['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:validate_userResponse']['status']['_text']);
        return jsonResponse['SOAP-ENV:Envelope']['SOAP-ENV:Body']['ns1:validate_userResponse']['status']['_text'] == 'true' ? true:false
      })
      .catch(error => {
        console.error('An error occurred:', error);
        return false
      });
  }
  else {
    return true
  }
}

const getCCTV = async (req, res) => {
  const { data } = req.body
  const results = await findDB(dbName,'cctv',{ site_id: parseInt(data.site_id) },{})
  res.status(200).json({ results: results[0] })
}

const getUsers = async (req, res) => {
  const results = await findDB(dbName,'users',{},{})
  res.status(200).json({ results })
}

const addUser = async (req, res) => {
  const { data } = req.body
  console.log('add',data)
  const results = await findDB(dbName,'users',{ username: data.username},{})
  if (results.length > 0) {
    res.status(200).json({ results: false })
  }
  else {
    const userEGAT = await getHRInfo( data.username)
    if (userEGAT) {
      const userData = {
        username: data.username,
        isAdmin: false,
        userEGAT,
        modified: new Date()
      }
      // add users
      await addOneDB(dbName,'users', userData)

      // download images
      await downloadPersonImage(data.username);
      
      res.status(200).json({ results: userData })
    }
    else {
      res.status(200).json({ results: false })
    }
  }
}

const deleteUser = async (req, res) => {
  const { data } = req.body
  console.log('delete users',data)
  data.map( async(user) => {
    await deleteOneDB(dbName,'users',{ username: user.username })
  })

  res.status(200).json({ results: 'ok' })
}

const updateIsAdmin = async (req, res) => {
  const { data } = req.body
  console.log('update users',data)
  const results = await updateOneDB(dbName,'users', 
        { username: data.username }, 
        { $set: { isAdmin: data.isAdmin } } )  

  res.status(200).json({ results })
}

const pointInfo = async(point_id) => {
  const condition = [
    {
      '$match': {
        'id': parseInt(point_id)
      }
    }, {
      '$lookup': {
        'from': 'maps', 
        'localField': 'map_id', 
        'foreignField': 'id', 
        'as': 'map'
      }
    }, {
      '$lookup': {
        'from': 'sites', 
        'localField': 'map.site_id', 
        'foreignField': 'id', 
        'as': 'site'
      }
    }
  ]
  const results = await aggregateDB(dbName,'points',condition)
  return results
}

const localDateString = (timestamp) => {
  const dateObject = moment.unix(parseInt(timestamp)).tz('Asia/Bangkok');
  return dateObject.format('YYYY-MM-DD HH:mm:ss');
}

const sendMail = async(comment) =>{
  let mails
  if(comment.text.includes('@All')) {
    const users = await findDB(dbName,'users',{},{})
    mails = users.map(u => u.username)
  }
  else {
    const regex = /@[^()]+\((\d+)\)\s/g;
    const matches = comment.text.match(regex);
    mails = matches ? matches.map(match => match.match(/\((\d+)\)/)[1]) : [];
  }

  console.log('to', mails)

  if (mails.length > 0) {
    let text = comment.text
    const tag = comment.tag
    const imageFilePath = `${process.env.FULLPATH}/${comment.site_id}/${comment.map_id}/${comment.point_id}/${comment.photo_id}/thumbnail.jpg`  
    let imageDataUrl
    let attachPhotoUrl
    if (fs.existsSync(imageFilePath)) {
      const imageFile = fs.readFileSync(imageFilePath);
      imageDataUrl = `data:image/jpeg;base64,${imageFile.toString('base64')}`;
    }
    const poster = await findDB(dbName,'users',{ username: comment.postby },{})
    const comments = await getCommentById(comment.point_id)
    const point = await pointInfo(comment.point_id)
    const pointName = point[0].name
    const mapName = point[0].map[0].name
    const siteName = point[0].site[0].name
    const uniqueMails = [...new Set(mails)];
    console.log('uniqueMails',uniqueMails)
    console.log('point',pointName,mapName,siteName)
    const tos = uniqueMails.map(m => `${m}@egat.co.th`)
    console.log('mail to', tos)  
    const transporter = nodemailer.createTransport({
      host: 'mail.egat.co.th',
      port: 465,      // or the appropriate port number
      secure: 'TLS',  // set to true if using a secure connection (e.g., SSL/TLS)
      auth: {
        user: '539953',
        pass: 'Gearmangearman2@',
      },
    });
    
    // Define the HTML content of the email
    text = text.replace(/\n/g, "<br>");
    let htmlContent = `
      <h4>${poster[0].userEGAT.person_eng_name} mentions you:</h4>
      <div>${text}</div>
    `
    const attachPhotoPath = `${process.env.COMMENTPATH}/${comment.id}/cover.jpg`
    if (fs.existsSync(attachPhotoPath)) {
      const attachPhoto = fs.readFileSync(attachPhotoPath);
      attachPhotoUrl = `data:image/jpeg;base64,${attachPhoto.toString('base64')}`;
      htmlContent += `<br/><img src="${attachPhotoUrl}" alt="Embedded Image">`
    }

    if (comment.tag) {
      htmlContent += `<div><b>Tag:</b> ${comment.tag.toUpperCase()}</div>`
    }
    
    htmlContent += `
      <div><b>Reply:</b><a href="http://mysites.egat.co.th/${comment.site_id}/${comment.map_id},${comment.point_id},${comment.photo_id}">Click to mySitesVision</a></div>
      <div><b>Site:</b> ${siteName}</div>
      <div><b>Map:</b> ${mapName}</div>
      <div><b>Point:</b> ${pointName}</div>
    `
    htmlContent += `
      <hr/>
      <div><b>Comments:</b></div>
    `
    htmlContent += '<ul'
    comments.map( c => {
      const postDate = localDateString(c.id)
      const commentText = c.text.replace(/\n/g, "<br>");
      htmlContent += `
      <li><b>${postDate} ${c.users[0].userEGAT.person_thai_name}</b>:<div style="word-wrap: break-word;">${commentText}</div>
      `
      if (c.tag) {
        htmlContent += `<div><b>${c.tag.toUpperCase()}</b></div>`
      }
      
      const attachPhotoPath = `${process.env.COMMENTPATH}/${c.id}/cover.jpg`
      if (fs.existsSync(attachPhotoPath)) {
        const attachPhoto = fs.readFileSync(attachPhotoPath);
        attachPhotoUrl = `data:image/jpeg;base64,${attachPhoto.toString('base64')}`;
        htmlContent += `<br/><img src="${attachPhotoUrl}" alt="Embedded Image"></li>`
      }
      else {
        htmlContent += `</li>`
        console.log('no attach photo')
      }
    })

    htmlContent += '</ul>'

    //if (imageDataUrl) {
    //  htmlContent += `<img style="width: 540px;" src="${imageDataUrl}" alt="Embedded Image">`;
    //}

    const mailOptions = {
        //from: `${poster[0].username}@egat.co.th`,
        from: `539953@egat.co.th`,
        to: tos,
        cc: ['539953@egat.co.th',`${poster[0].username}@egat.co.th`],
        subject: `Message from "${siteName}"`,
        html: htmlContent
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error occurred:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }
}

const addComment = async(req, res) => {
  const form = formidable({ multiples: false });
  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }

    const { data } = fields;
    const form = JSON.parse(data)
    const file = JSON.parse(JSON.stringify(files))
    let inputFile = ''

    // add comment
    let commentData = {
      ...form,
    }

    //console.log('add comments', commentData)

    //sendMail(commentData)

    // if has attach photo
    if (file.commentPhoto != undefined) {  
      const commentDir = `${process.env.COMMENTPATH}/${form.id}`
      outputFile = `${commentDir}/${form.id}.jpg`
      inputFile  = file[Object.keys(files)].filepath
      commentData = {
        ...commentData,
        attachPhoto: true
      }
      
      await addOneDB(dbName,'comments', commentData)

      // make directory
      if (!fs.existsSync(commentDir)) {
        fs.mkdirSync(commentDir, { recursive: true });
      }

      // save file 
      fs.copyFile(inputFile, outputFile, (error) => {
        if (error) {
          console.error('Error copying file:', error);
        } 
        else {
          console.log('File copied successfully!');
          // resize cover 
          coverFile = `${commentDir}/cover.jpg`
          const targetWidth = 180
          sharp(inputFile)
          .resize(targetWidth)
          .toFile(coverFile)
          .then(() => {
            console.log('Image resized successfully!');
            res.status(200).json({ results: commentData })
          })
          .catch((error) => {
            console.error('Error resizing image:', error);
          });
        }
      })

      setTimeout(function() {
        sendMail(commentData)
        console.log("send mail after a delay.");
      }, 3000);
     
    }
    else {
      // add comment
      await addOneDB(dbName,'comments', commentData)
      await addOneDB(dbName,'logging',{
        postby: commentData.postby,
        action: "comment: "+ commentData.text,
        modified: new Date()
      })
      sendMail(commentData)
      res.status(200).json({ results: commentData })
    }
  })   
}

const updateComment = async(req, res) => {
  const form = formidable({ multiples: false });
  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }

    const { data } = fields;
    let commentData = JSON.parse(data)
    sendMail(commentData)
    const file = JSON.parse(JSON.stringify(files))    
    const commentDir = `${process.env.COMMENTPATH}/${commentData.id}`
    outputFile = `${commentDir}/${commentData.id}.jpg`
    
    const condition = {
      id: commentData.id
    }

    // has upload new photo
    if (file.commentPhoto != undefined) { 
      console.log('update comment: change photo') 
      inputFile  = file[Object.keys(files)].filepath
      await updateOneDB(dbName,'comments', condition, {
        $set: {
          ...commentData,
          attachPhoto: true,
        }
      })
      
      if (!fs.existsSync(commentDir)) {
        fs.mkdirSync(commentDir, { recursive: true });
        console.log(commentDir, 'directory does not exists, create ')
      }

      // save file 
      fs.copyFile(inputFile, outputFile, (error) => {
        if (error) {
          console.error('Error copying file:', error);
        } 
        else {
          console.log('File copied successfully!');
          // resize cover 
          coverFile = `${commentDir}/cover.jpg`
          const targetWidth = 180
          sharp(inputFile)
          .resize(targetWidth)
          .toFile(coverFile)
          .then(() => {
            console.log('Image resized successfully!');
            res.status(200).json({ results: {
              ...commentData,
              attachPhoto: true,
            }})
          })
          .catch((error) => {
            console.error('Error resizing image:', error);
          });  
        }
      })
    }
    else {
      // delete photo
      if (commentData.attachPhoto == false) {
        console.log('update comment : delete photo')
        await updateOneDB(dbName,'comments', condition, {
          $set : {
            ...commentData,
            attachPhoto: false,
          }
        })
        if (fs.existsSync(commentDir)) {
          deleteFilesRecursive(commentDir)
          console.log('remove directory', commentDir)
        }
        res.status(200).json({ results: {
          ...commentData,
          attachPhoto: false
        }})
      }
      else {
        console.log('update comment')
        await updateOneDB(dbName,'comments', condition, {
          $set : {
            ...commentData,
          }
        })
        res.status(200).json({ results: {
            ...commentData,
          } 
        })
      }
    }
  })   
}

const getCommentById = async (point_id) => {
  const condition = [
    {
      '$match': {
        point_id
      }
    }, {
      '$lookup': {
        'from': 'users', 
        'localField': 'postby', 
        'foreignField': 'username', 
        'as': 'users'
      }
    }
  ]
 
  const results = await aggregateDB(dbName,'comments',condition)
  
  return results
} 

const getComment = async (req, res) => {
  const { data } = req.body
  //console.log('get comment', data.id)
  //const results = await findDB(dbName,'comments',{ point_id: parseInt(data.id) },{})
  const condition = [
    {
      '$match': {
        'point_id': data.id
      }
    }, {
      '$lookup': {
        'from': 'users', 
        'localField': 'postby', 
        'foreignField': 'username', 
        'as': 'users'
      }
    }
  ]
  console.log(condition)
  const results = await aggregateDB(dbName,'comments',condition)

  res.status(200).json({ results })
}

const deleteComment = async (req, res) => {
  const { data } = req.body
  console.log('delete comment', data.id)
  const results = await findDB(dbName,'comments',{ id: parseInt(data.id) },{})
  await deleteOneDB(dbName,'comments', { id: data.id })
  
  if (results[0].attachPhoto) {
    //const commentDir = results[0].attachPhoto
    const commentDir = `${process.env.COMMENTPATH}/${results[0].id}/`
    if (fs.existsSync(commentDir)) {
      deleteFilesRecursive(commentDir)
    }
  }
  
  res.status(200).json({ results })
}

const getNotification = async (req, res) => {
  const { data } = req.body;
  //console.log('get Notification', data);

  const now = new Date();
  const lastWeekStart = Math.floor(now.getTime() / 1000) - 7 * 24 * 60 * 60;
  //const lastWeekStart = Math.floor(now.getTime() / 1000) - 1 * 60 * 60;
  const lastWeekEnd = Math.floor(now.getTime() / 1000);

  const condition = [
    {
      '$match': {
        'id': parseInt(data.site_id)
      }
    }, {
      '$lookup': {
        'from': 'comments', 
        'localField': 'id', 
        'foreignField': 'site_id', 
        'as': 'comments'
      }
    }, {
      '$unwind': {
        'path': '$comments'
      }
    },
    {
      $match: {
        'comments.id': {
          $gte: lastWeekStart,
          $lt: lastWeekEnd,
        }
      }
    },
    {
      '$sort': {
        'comments.id': -1
      }
    },
//    {
//      '$limit': 8
//   },
    {
      '$lookup': {
        'from': 'users', 
        'localField': 'comments.postby', 
        'foreignField': 'username', 
        'as': 'postby'
      }
    }, {
      '$lookup': {
        'from': 'points', 
        'localField': 'comments.point_id', 
        'foreignField': 'id', 
        'as': 'points'
      }
    }, {
      '$project': {
        'comment': '$comments', 
        'postby': '$postby', 
        'point': '$points'
      }
    }
  ]

  const results = await aggregateDB(dbName,'sites',condition)
  //console.log(condition)
  res.status(200).json({ results: results })

/*
 //let comments =[];
  for (const p of data.points) {
    const comment = await findDB(dbName, 'comments', { point_id: p.id }, { _id: -1 });
    comments = comments.concat(comment);
  }
  const currentTimestamp = Math.floor(Date.now() / 1000)
  const oneWeekAgo = currentTimestamp - 7 * 24 * 60 * 60; // 7 days
  //console.log('---->',comments[0].id)
  comments = comments.filter(comment => comment.id >= oneWeekAgo);
  comments.sort((a, b) => b.id - a.id);
  comments = comments.slice(0, 10);
  res.status(200).json({ results: comments });
*/
};

const upload360 = async (req, res) => {
  console.log('upload360')
  const form = formidable({ multiples: false })
  
  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }
    const { site_id, map_id } = fields;
    //const pointData = JSON.parse(data)
    //const file = JSON.parse(JSON.stringify(files))   
    console.log(fields)
    
    const fileName = Object.keys(files)[0]; // Get the file name ('2.jpg' in this case)
    const filePath = files[fileName].filepath; // Get the file path
    const fileSize = files[fileName].size; // Get the file size
    const mimeType = files[fileName].mimetype; // Get the file MIME type

    console.log('File Name:', fileName);
    console.log('File Path:', filePath);
    console.log('File Size:', fileSize);
    console.log('MIME Type:', mimeType);

    const point_id =  Math.floor(Date.now() / 1000)

    fs.readFile(filePath, async(err, data) => {
      if (err) {
        console.error('Error reading image:', err);
        return;
      }
  
      // Create an instance of ExifParser and parse the EXIF data
      const exifParser = ExifParser.create(data);
      const result = exifParser.parse();
      const exif = result.tags;

      const point = await findDB(dbName, 'points', { map_id: parseInt(map_id) }, { id: -1 })
      console.log(point)
      const results = {
        site_id: parseInt(site_id),
        map_id: parseInt(map_id),
        point_id,
        exif,
        lastpoint: (point.length) ? parseInt(point[0].no) + 1 : 1
      }

      console.log(results)
  
      res.status(200).json({ results });
    })

    

    //res.status(200).json({ results: 'ok' });
    //const form = JSON.parse(data)
    //const file = JSON.parse(JSON.stringify(files))
    //let inputFile = ''
    //console.log('add photo to point', form, file)
  })  
  //res.status(200).json({ results: 'ok' });
  
}

const getPhotoInfo = async (req, res) => {
  const { data } = req.body;
  //const photos = data.p.slice(0,10)
  const photos = data.p
  const resultsp = photos.map(async(id) => { 
    const condition = [
      {
        '$match': {
          id: parseInt(id.id)
        }
      }, {
        '$lookup': {
          'from': 'points', 
          'localField': 'point_id', 
          'foreignField': 'id', 
          'as': 'point'
        }
      }, {
        '$unwind': {
          'path': '$point'
        }
      }, {
        '$lookup': {
          'from': 'maps', 
          'localField': 'point.map_id', 
          'foreignField': 'id', 
          'as': 'map'
        }
      }, {
        '$unwind': {
          'path': '$map'
        }
      },{
        '$lookup': {
          'from': 'users', 
          'localField': 'postby', 
          'foreignField': 'username', 
          'as': 'user'
        }
      }, {
        '$unwind': {
          'path': '$user'
        }
      }
    ]
    //console.log('------>',id)
    return await aggregateDB(dbName,'photos',condition)
  })
  const results = await Promise.all(resultsp)
  //console.log('getphoto info ---> ', results)
  res.status(200).json({ results });
}

const getPhotoBySiteId = async (req, res) => {
  const { data } = req.body;
  
  const condition = [
    {
      '$match': {
        'site_id': parseInt(data.site_id)
      }
    }, {
      '$lookup': {
        'from': 'points', 
        'localField': 'id', 
        'foreignField': 'map_id', 
        'as': 'points'
      }
    }, {
      '$unwind': {
        'path': '$points'
      }
    }, {
      '$lookup': {
        'from': 'photos', 
        'localField': 'points.id', 
        'foreignField': 'point_id', 
        'as': 'photos'
      }
    }, {
      '$unwind': {
        'path': '$photos'
      }
    }, {
      '$project': {
        'photo_id': '$photos.id', 
        'point_id': '$points.id', 
        'point_no': '$points.no', 
        'map_id': '$points.map_id', 
        'site_id': '$site_id', 
        'point_name': '$points.name', 
        'gps': '$photos.gps', 
        'postby': '$postby'
      }
    }, {
      '$lookup': {
        'from': 'maps', 
        'localField': 'map_id', 
        'foreignField': 'id', 
        'as': 'map'
      }
    }, {
      '$unwind': {
        'path': '$map'
      }
    }, {
      '$lookup': {
        'from': 'users', 
        'localField': 'postby', 
        'foreignField': 'username', 
        'as': 'user'
      }
    }, {
      '$unwind': {
        'path': '$user'
      }
    }, {
      '$project': {
        'photo_id': '$photo_id', 
        'point_id': '$point_id', 
        'point_no': '$point_no', 
        'map_id': '$map_id', 
        'site_id': '$site_id', 
        'point_name': '$point_name', 
        'map_name': '$map.name', 
        'gps': '$gps', 
        'user': {
          'empn': '$user.username', 
          'name': '$user.userEGAT.person_thai_name', 
          'dept': '$user.userEGAT.main_org_thai_name_reverse_path'
        }
      }
    }
  ]
  console.log('get photoos', condition)
  const results =  await aggregateDB(dbName,'maps',condition)
  res.status(200).json({ results });
}

const getGeoPhotoBySiteId = async (req, res) => {
  const { data } = req.body;
  
  const condition = [
      {
      '$match': {
        'site_id': parseInt(data.site_id)
        }
      }, {
        '$lookup': {
          'from': 'users', 
          'localField': 'postby', 
          'foreignField': 'username', 
          'as': 'user'
        }
      }, {
        '$unwind': {
          'path': '$user'
        }
      }, {
        '$project': {
          'photo_id': '$id', 
          'site_id': '$site_id',
          'exif': '$exif', 
          'filename': '$filename', 
          'user': {
            'empn': '$user.username', 
            'name': '$user.userEGAT.person_thai_name', 
            'dept': '$user.userEGAT.main_org_thai_name_reverse_path'
          }
        }
      }
  ]
  console.log('get photos', condition)
  const results =  await aggregateDB(dbName,'geophotos',condition)
  res.status(200).json({ results });

} 
const getPhotoBySiteId2 = async (site_id) => {
  const condition = [
    {
      '$match': {
        'site_id': parseInt(site_id)
      }
    }, {
      '$lookup': {
        'from': 'points', 
        'localField': 'id', 
        'foreignField': 'map_id', 
        'as': 'points'
      }
    }, {
      '$unwind': {
        'path': '$points'
      }
    }, {
      '$lookup': {
        'from': 'photos', 
        'localField': 'points.id', 
        'foreignField': 'point_id', 
        'as': 'photos'
      }
    }, {
      '$unwind': {
        'path': '$photos'
      }
    }, {
      '$project': {
        'photo_id': '$photos.id', 
        'point_id': '$points.id', 
        'map_id': '$points.map_id', 
        'site_id': '$site_id', 
        'point_name': '$points.name', 
        'gps': '$photos.gps', 
        'postby': '$postby'
      }
    }, {
      '$lookup': {
        'from': 'maps', 
        'localField': 'map_id', 
        'foreignField': 'id', 
        'as': 'map'
      }
    }, {
      '$unwind': {
        'path': '$map'
      }
    }, {
      '$lookup': {
        'from': 'users', 
        'localField': 'postby', 
        'foreignField': 'username', 
        'as': 'user'
      }
    }, {
      '$unwind': {
        'path': '$user'
      }
    }, {
      '$project': {
        'photo_id': '$photo_id', 
        'point_id': '$point_id', 
        'map_id': '$map_id', 
        'site_id': '$site_id', 
        'point_name': '$point_name', 
        'map_name': '$map.name', 
        'gps': '$gps', 
        'user': {
          'empn': '$user.username', 
          'name': '$user.userEGAT.person_thai_name', 
          'dept': '$user.userEGAT.main_org_thai_name_reverse_path'
        }
      }
    }
  ]
  const results =  await aggregateDB(dbName,'maps',condition)
  return results
}

const getPhotoPath = async(id) => {
  const condition = [
    {
      '$match': {
        id: parseInt(id)
      }
    }, {
      '$lookup': {
        'from': 'points', 
        'localField': 'point_id', 
        'foreignField': 'id', 
        'as': 'point'
      }
    }, {
      '$unwind': {
        'path': '$point'
      }
    }, {
      '$lookup': {
        'from': 'maps', 
        'localField': 'point.map_id', 
        'foreignField': 'id', 
        'as': 'map'
      }
    }, {
      '$unwind': {
        'path': '$map'
      }
    },{
      '$lookup': {
        'from': 'users', 
        'localField': 'postby', 
        'foreignField': 'username', 
        'as': 'user'
      }
    }, {
      '$unwind': {
        'path': '$user'
      }
    }
  ]
  const results = await aggregateDB(dbName,'photos',condition)
  const p = results[0]
  console.log('getPath',p)
  return  `${fullpath}/${p.map.site_id}/${p.map.id}/${p.point_id}/${id}`
}

const deletePhotos = async (req, res) => {
  const { data } = req.body
  console.log('delete photos')
  data.ids.map(async(id) => {
    console.log(id)
    const directoryPath = await getPhotoPath(id)
    console.log(directoryPath)
    if (fs.existsSync(directoryPath)) {
      deleteFilesRecursive(directoryPath)
    }
    const results = await deleteOneDB(dbName,'photos', { id })  
  })

  res.status(200).json({ results:'ok' });
}


const deleteGeoPhotos = async (req, res) => {
  const { data } = req.body
  console.log('delete geo photos -> ', data.ids[0])
  const photo = await findDB(dbName, 'geophotos', { id: parseInt(data.ids[0]) }, { id: -1 })
  const site_id = photo[0].site_id
  console.log('site_id', site_id)
  data.ids.map(async(id) => {
    console.log(id)
    const directoryPath = `${fullpathphoto}/${site_id}/${id}`
    console.log(directoryPath)
    
    if (fs.existsSync(directoryPath)) {
      deleteFilesRecursive(directoryPath)
    }
    const results = await deleteOneDB(dbName,'geophotos', { id })  
  })

  res.status(200).json({ results:'ok' });
}

const updateGPS = async (req, res) => {
  const { data } = req.body
  console.log('update gps',data)


  const results = await updateOneDB(dbName,'geophotos', 
        { id: data.id }, 
        { $set: { 
           'exif.GPSLatitude' : data.lat,
           'exif.GPSLongitude' : data.lng, 
        } 
      })  
  

  res.status(200).json({ results })
}
const getMapsOptions = async (req, res) => {
  const { data } = req.body;
  const condition = [
    {
      '$match': {
        'site_id': parseInt(data.site_id)
      }
    }, {
      '$lookup': {
        'from': 'points', 
        'localField': 'id', 
        'foreignField': 'map_id', 
        'as': 'points'
      }
    }, {
      '$project': {
        'map_id': '$id', 
        'map_name': '$name', 
        'points': '$points'
      }
    }
  ]
  console.log('get maps', condition)
  const results =  await aggregateDB(dbName,'maps',condition)

  res.status(200).json({ results });
}

const movePhotos = async (req, res) => {
  const { data } = req.body
  //console.log('move photos',data.photos)
  //console.log('to',data.point)
  data.photos.map(async(p) => {
    const sourcePath = await getPhotoPath(p)
    const destinationPath = `${fullpath}/${data.site}/${data.map.value}/${data.point.value}/${p}`
    console.log('--', sourcePath)
    console.log('->', destinationPath)
    fs.rename(sourcePath, destinationPath, async(err) => {
      if (err) {
        console.error('Error moving directory:', err);
      } else {
        await updateOneDB(dbName,'photos', 
        { id: p }, 
        { $set: { 
          point_id: data.point.value,
          postby: data.postby,
          timestamp: new Date(),
        }})  
        console.log('Directory moved successfully.');
      }
    })
  })
 
  res.status(200).json({ results: true })
}
/*
const uploadBulk =  async (req, res) => {
  console.log('upload bulk')
  
  const form = formidable({ multiples: false })
  
  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }
   
    const { site_id, postby } = fields;

    const photos = await getPhotoBySiteId2( site_id )
    const photoCollection  = featureCollection(photos.map(position => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [position.gps.GPSLongitude, position.gps.GPSLatitude] // [longitude, latitude]
      },
      properties: {
        info: position, // Assign a unique identifier to each marker
      },
    })))

    const fileName = Object.keys(files)[0]; // Get the file name ('2.jpg' in this case)
    const filePath = files[fileName].filepath; // Get the file path
    const fileSize = files[fileName].size; // Get the file size
    const mimeType = files[fileName].mimetype; // Get the file MIME type

    console.log('File Name:', fileName);
    console.log('File Path:', filePath);
    console.log('File Size:', fileSize);
    console.log('MIME Type:', mimeType);
    fs.readFile(filePath, async(err, data) => {
      if (err) {
        console.error('Error reading image:', err);
        return;
      }
      // Create an instance of ExifParser and parse the EXIF data
     
      //const exifParser = ExifParser.create(data);
      //const result = exifParser.parse();
      //const exif = result.tags;
      //console.log('exif',exif)
      //console.log('all photos',site_id, photoCollection)
      //const givenLocation = point([exif.GPSLongitude, exif.GPSLatitude])
      //const nearest  = nearestPoint(givenLocation,photoCollection)
      //console.log('givenlocation', givenLocation)
      //console.log('nearest', nearest)
     
      try {
        const exifData = ExifParser.create(data).parse().tags;
        console.log('EXIF Data:', exifData);
    
        const givenLocation = point([exifData.GPSLongitude, exifData.GPSLatitude]);
        console.log('Given Location:', givenLocation);
    
        if (photoCollection.features.length === 0) {
          console.log('No photos available.');
          return;
        }
    
        const nearest = nearestPoint(givenLocation, photoCollection);
        console.log('Nearest Photo:', nearest);
        const newPoint = {
          point: {
            id : nearest.properties.info.point_id,
            postby
          }
        }
        const pointDir = `${fullpath}/${nearest.properties.info.site_id}/${nearest.properties.info.map_id}/${nearest.properties.info.point_id}`;
        const results = await ImagetoTiles(filePath, pointDir, newPoint);      
        
        res.status(200).json({ results: true });
      } catch (error) {
        console.error('Error parsing EXIF data:', error);
      }
    })
  })
}
*/
/*
const ImagetoTiles = async(inputImagePath, pointDirectory, form) => {
  // get image informaiton and save to db 
  fs.readFile(inputImagePath, async (err, data) => {
    if (err) {
      console.error('Error reading image:', err);
      return -1;
    }

    // Create an instance of ExifParser and parse the EXIF data
    const exifParser = ExifParser.create(data);
    const result = exifParser.parse();
    const exifData = result.tags;
    
    const photo_id = (exifData.ModifyDate) ? exifData.ModifyDate :
                      (exifData.DateTimeOriginal) ? exifData.DateTimeOriginal : Math.floor(Date.now() / 1000)
    
    const outputDirectory = pointDirectory+'/'+photo_id.toString()  
    
    // create site/map/point directory
    if (!fs.existsSync(pointDirectory)) {
      fs.mkdirSync(pointDirectory);
    }

    // create site/map/point/photo directory
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }

    const outputImagePath = `${outputDirectory}/original.jpg`
    fs.copyFile(inputImagePath, outputImagePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
        return -1;
      }
      console.log('File copied successfully.',inputImagePath,outputImagePath);
    });

    sharp(inputImagePath)
    .metadata()
    .then((metadata) => {
      console.log('--->', metadata)
      const { width, height } = metadata;
      const pointData = {
        id: photo_id,
        point_id: form.point.id,
        postby: form.point.postby,
        gps: exifData,
        size: {
          width,
          height
        },
        timestamp: new Date()
      }
      
      console.log('upload point photo:', pointData)
      addOneDB(dbName, 'photos', pointData)    // add db
      makeCover(inputImagePath, outputDirectory) // make thumbnail and low.jpg
      makeTiles(inputImagePath, outputDirectory) // make tiles
      console.log('upload done')
      return pointData
    })
  })
}
*/
const uploadPhoto = async(files, fields, exifData) => {
  const {site_id, postby } = fields
  const fileName = Object.keys(files)[0]; // Get the file name ('2.jpg' in this case)
  const filePath = files[fileName].filepath; // Get the file path
  const fileSize = files[fileName].size; // Get the file size
  const mimeType = files[fileName].mimetype; // Get the file MIME type

  console.log('File Name:', fileName);
  console.log('File Path:', filePath);
  console.log('File Size:', fileSize);
  console.log('MIME Type:', mimeType);
  
  fs.readFile(filePath, async (err, data) => {
    if (err) {
      console.error('Error reading image:', err);
      return -1;
    }

    const photoDir = `${fullpathphoto}/${site_id}`;
    //const photo_id = Math.floor(Date.now() / 1000)        
    const photo_id = exifData.DateTimeOriginal
    const outputDirectory = photoDir+'/'+photo_id.toString()  

    if (!fs.existsSync(photoDir)) {
      fs.mkdirSync(photoDir);
    }
    if (!fs.existsSync(outputDirectory)) {
      fs.mkdirSync(outputDirectory);
    }
    // copy original photo 
    const outputImagePath = `${outputDirectory}/original.jpg`

    fs.copyFile(filePath, outputImagePath, (err) => {
      if (err) {
        console.error('Error copying file:', err);
        return -1;
      }
      console.log('File copied successfully.', filePath, outputImagePath);
    });

    // reduce photo quality
    sharp(filePath)
     .jpeg({ quality: 25 })
     .toFile(outputDirectory+'/low.jpg', (err) => { 
       if (err) { console.error(err); }
       console.log('Reduced-size image created successfully.');
     });

    const photoData = {
      id: photo_id,
      site_id: parseInt(site_id),
      postby,
      exif: exifData,
      filename: fileName,
      filesize: fileSize,
      mimetype: mimeType,
      type: (exifData.ExifImageWidth/exifData.ExifImageHeight == 2) ? '360':'normal',
      timestamp: new Date()
    }
    addOneDB(dbName, 'geophotos', photoData)  

    // if 360 photo
    if (exifData.ExifImageWidth/exifData.ExifImageHeight == 2 ) {
      console.log('image to tiles')  
      makeTiles(filePath, outputDirectory) // make tiles
    }

    console.log('return ', photoData)
  })


}

const uploadBulk =  async (req, res) => {
  console.log('upload bulk')
  
  const form = formidable({ multiples: false })
  
  form.parse(req, async(err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      res.sendStatus(500);
      return;
    }
   
    const { site_id, postby } = fields 

    const fileName = Object.keys(files)[0]; // Get the file name ('2.jpg' in this case)
    const filePath = files[fileName].filepath; // Get the file path
    const fileSize = files[fileName].size; // Get the file size
    const mimeType = files[fileName].mimetype; // Get the file MIME type

    console.log('File Name:', fileName);
    console.log('File Path:', filePath);
    console.log('File Size:', fileSize);
    console.log('MIME Type:', mimeType);
    
    fs.readFile(filePath, async(err, data) => {
      if (err) {
        console.error('Error reading image:', err);
        return;
      }
      try {
        const exifData = ExifParser.create(data).parse().tags;
        console.log('EXIF Data:', exifData);

        //const results = await ImagetoTiles(filePath, pointDir, newPoint);      
        if (typeof exifData.GPSLatitude === 'number' && exifData.GPSLatitude != 0 && !isNaN(exifData.GPSLatitude)) {
          if (exifData.ExifImageWidth/exifData.ExifImageHeight == 2 ) {
            console.log('3D photo')
            const results = await uploadPhoto(files, fields, exifData); 
            res.status(200).json({ 
                results: {
                  msg: `${fileName} (3D) is uploaded.`,
                  status: true 
                }
              })
          }
          else {
            console.log('2D photo')
            const results = await uploadPhoto(files, fields, exifData);  
            console.log('upload results', results)
            res.status(200).json({
                results: { 
                  msg: `${fileName} (2D) Uploaded.`,
                  status: true 
                }
            })
          }
        }
        else {
          res.status(200).json({ 
            results: {
              msg: `${fileName} Not found GPS information`,
              status: false 
            }
          });
        }
      } catch (error) {
        console.error('Error parsing EXIF data:', error);
        res.status(200).json({ 
          results: {
            filename: fileName,
            msg: `${fileName} Error parsing EXIF data.`,
            status: false 
          }
         });
      }
      
    })
  })
  
}

const eventLog = async (req, res) => {
  const { data } = req.body
  const results = await addOneDB(dbName,'logging',{
    postby: data.userId,
    action: data.action,
    modified: new Date()
  })
  res.status(200).json({ results })
}

const getEventLog = async (req, res) => {
  const condition = [
    {
      '$lookup': {
        'from': 'users', 
        'localField': 'postby', 
        'foreignField': 'username', 
        'as': 'user'
      }
    }, {
      '$sort': {
        'modified': -1
      }
    }
  ]
  console.log('get logging', condition)
  const results =  await aggregateDB(dbName,'logging',condition)

  res.status(200).json({ results });

}

const getGPSPhotos = async (req, res) => {
  const { data } = req.body
  const results = await findDB(dbName,'geophotos',{ site_id: parseInt(data.site_id) }, { id: 1 })
  res.status(200).json({ results })
}

const addGeoJSON = async (req, res) => {
  let { data } = req.body
  data = {
    ...data,
    timestamp: new Date()
  }
  console.log('add geojson', data)
  
  await addOneDB(dbName, 'layers', data)
  
  res.status(200).json({ results: data })
}

const getLayers = async (req, res) => {
  const { data } = req.body
  const results = await findDB(dbName,'layers',{ site_id: parseInt(data.site_id) },{ timestamp: 1})
  
  res.status(200).json({ results })
  
  //let  content = JSON.parse(results.content)
  //
  /*
  const ret = results.map(r => {
      let  content = JSON.parse(r.content)
      
      return {
        site_id: r.site_id,
        name: r.name,
        content: content,
        modified: r.modified,
        postby: r.postby,
        timestamp: r.timestamp
      }
    }
  )
  console.log(ret)

  res.status(200).json({ results: ret  })
  */
}

const deleteLayers = async (req, res) => {
  const { data } = req.body
  console.log('delete layers')
  data.ids.map(async(item) => {
    console.log(item)
    await deleteOneDB(dbName,'layers', { _id: new  ObjectId(item.id) })  
  })

  res.status(200).json({ results:'ok' });
}

/// Main //////////=========================================
// Register functions
const functions = {
    "getmap": getMap,
    "getpoint": getPoint,
    "addpoint": addPoint,
    "updatepoint": updatePoint,
    "deletepoint": deletePoint,
    "loadsites": loadSites,
    "getsite": getSite,
    "addsite": addSite,
    "deletesite": deleteSite,
    "addmap": addMap,
    "deletemap": deleteMap,
    "editmap": editMap,
    "deletephoto": deletePhoto,
    "updatephoto_id": updatePhotoById,
    "getphoto_id": getPhotoById,
    "addphoto": addPhoto,
    "addMarker": addMarker,
    "getMarker": getMarker,
    "deleteMarker": deleteMarker,
    "updateMarker": updateMarker,
    "login": login,
    "checkAuthorized": checkAuthorized,
    "getcctv": getCCTV,
    "getuser": getUsers,
    "adduser": addUser,
    "deleteuser": deleteUser,
    "updateisadmin": updateIsAdmin,
    "addcomment": addComment,
    "getcomment": getComment,
    "deletecomment": deleteComment,
    "updatecomment": updateComment,
    "getnotification": getNotification,
    "upload360": upload360,
    "getphoto_info": getPhotoInfo,
    "addgeojson": addGeoJSON,
    "getlayers": getLayers,
    "deletelayers": deleteLayers,

    "getphotobysiteid": getPhotoBySiteId,
    "getgeophotobysiteid": getGeoPhotoBySiteId,
    "deletephotos": deletePhotos,
    "deletegeophotos": deleteGeoPhotos,
    "updategps": updateGPS,
    "getmapsoptions": getMapsOptions,
    "movephotos": movePhotos,
    "uploadbulk": uploadBulk,
    "eventlog": eventLog,
    "geteventlog": getEventLog,
    "getgpsphotos": getGPSPhotos
  }

const handleAction = async (req, res) => {
    try {
        //const { action } = req.body
        const { upload, site_id, map_id, pid, userid } = req.headers
        const { q, p_site_id, p_map_id, p_point_id, p_name, postby} = req.query
        const { action } = req.params
        
        console.log('action =', action)
        if (action !== undefined) {
          functions[action](req,res)
        }
        else {
          res.status(400).json({ results: "bad request" })
        }      
    }
    catch (err) {
      res.status(500).json({ results: "server error" })
      console.log(err)
    }
}

module.exports = handleAction
/** Hi-End */
