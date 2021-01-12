const express = require('express');
const app = express();


// Make sure to put this directly after you define your app
// dont change if you want http -> https
// if you want https -> http change !req.secure to req.secure and https to http
app.set('trust proxy', true); // <- required
app.use((req, res, next) => {
  if(!req.secure) return res.redirect('https://' + req.get('host') + req.url);
  next();
});

// rest of this is just a demo
app.use((req, res, next) => {
  res.send(`HTTPS: ${req.secure}`); 
  next();
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Demo app listening on ' + listener.address().port);
});
