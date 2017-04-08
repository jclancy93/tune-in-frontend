'use strict';
/** Module dependencies. */
const express      = require('express');
const logger       = require('morgan');
const mongoose     = require('mongoose');

// define the schema for our song model
var songSchema = mongoose.Schema({

    song            : {
        id        : mongoose.Schema.Types.ObjectId,

        spotifydInfo  : {
           id: String,
           url: String,
        },

        soundcloudInfo  : {
           id: String,
           url: String,
        },

        artistId    :mongoose.Schema.Types.ObjectId,

        name: String,

        timeStamp: {type: Date},
    }
});

const Song = mongoose.model('Song', songSchema);

// configure the express server
const app = express();

app.set('port', (process.env.PORT || 8000));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var options = {
  user: "dev",
  pass: "unIs11?",
  auth: {
    authdb: 'tune_in'
  }
}

mongoose.connect('mongodb://35.185.52.231/tune_in', options,  function(err) {
    if (err) throw err;
});

app.get('/api/songs', (req, res, next) => {
  Song.find({}, function(err, docs) {
      if (!err){ 
        res.json(docs);
      } else {
        res.json("error, please try again later")
      }
  });
})

// Start her up, boys
app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
