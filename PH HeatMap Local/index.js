const express = require('express'),
	  cors = require('cors'),
	  readSheet = require('./read').readSheet,
	  app = express()

let sheetID = '1W5lUi8-h5EYgh3Jt5_8PLifutNuXz5yQzu5uJOovEDA';


app.use(cors())
app.use(express.static('public'));
// app.use(express.static('coordinates'));

app.use('/centerCoordinates', express.static('centerCoordinates'))
app.use('/coords', express.static('coordinates'))
app.use('/file', express.static('file'))

app.get('/data.json', (req,res) => {
	readSheet(sheetID, (err,data) => {
		res.json(data);
	});
});

app.listen(3000, () => {
	console.log(`App listening on port 3000`);
})

