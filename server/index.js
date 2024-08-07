const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser")
const serveStatic = require('serve-static')
const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({path:'./.env'})

let port = process.env.SERVER_PORT
const app = express();

app.use(cors({
  origin: 'http://localhost:2025', // Allow requests only from this origin
  methods: 'GET,POST',             // Allow only GET and POST requests
}));

// Redirect HTTP to HTTPS
if (process.env.HTTPS == "true") {
  port = 443
  app.use((req, res, next) => {
    if (!req.secure) {
      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  });
}
else {
  
}

//app.use(cors())
//app.use(cors({
//  origin: '*'
//}));
/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
*/

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));



if (process.env.STAGE == 'dev') {
    // -- dev --
    app.use('/avatars', serveStatic(__dirname + '/public/avatars'))
    app.use('/images', serveStatic(__dirname + '/public/images'))
    app.use('/photos', serveStatic(__dirname + '/public/photos'))
    app.use('/icons', serveStatic(__dirname + '/public/icons'))
    app.use('/comments', serveStatic(__dirname + '/public/comments'))
  
  }
  else {
  // production 
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
}


if (process.env.HTTPS == "true") {
  var fs = require('fs')
  var https = require('https');
  var https_options = {
    key: fs.readFileSync(path.join(__dirname,'ssl/mysites.key')),
    cert: fs.readFileSync(path.join(__dirname,'ssl/mysites.crt')),
    ca: fs.readFileSync(path.join(__dirname,'ssl/DigiCertCA.crt'))
  };
  var server = https.createServer( https_options , app );
}

const verifyToken = (req, res, next) => {
  console.log('verify..',req.params.action)
  const noVerifyActions = [
    'login','getuser','getsite','loadsites',
    'getphoto_id','getMarker','getphotobysiteid',
    'getphoto_info','getcctv', 'eventlog',
    'getgpsphotos','getlayers'
  ]
  if (noVerifyActions.includes(req.params.action)) {
    next()
  }
  else {
    const token = req.headers["authorization"]
    console.log('verify token',req.headers)
    if (!token) {
      return res.status(401).json({ message: 'Token not provided' });
    }
    jwt.verify(token, process.env.SECRETKEY , (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = decoded;
      console.log('verify ok',decoded)
      next();
    });
  }
}

app.post('/:action', verifyToken, cors(), require('./server.js'))
//app.post('/:action', require('./server.js'))

if (process.env.HTTPS == "true") {
  server.listen( 443, function () {
    console.log( 'Hello IREALLYHOST listening on port ' + server.address().port );
  });
}
else {
  app.listen(port, () => {
    console.log(`Server start listening at ${port}`);
  });
}
/*
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/


