const express = require('express'),
	  cors = require('cors'),
	  readSheet = require('./read').readSheet,
	  app = express();

let sheetID = '1W5lUi8-h5EYgh3Jt5_8PLifutNuXz5yQzu5uJOovEDA';

app.use(cors());

app.use(express.static('public'));
app.use('/centerCoordinates', express.static('centerCoordinates'));
app.use('/coords', express.static('coordinates'));

app.use('/sheetData', (req,res) => {
	readSheet(sheetID, (err,data) => {
		res.json(data);
	});
});

module.exports = app;