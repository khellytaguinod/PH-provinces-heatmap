# Heatmap of the Philippines Provinces Population
A webapp that use google map API to visualize heatmap and display the Philippines provinces population data that comes from google spreadsheet

## Demo
http://ph-provinces-heatmap.openode.io/

## Getting Started
Github:
 https://github.com/khellytaguinod/PH-provinces-heatmap

SpreadSheet: https://docs.google.com/spreadsheets/d/1W5lUi8-h5EYgh3Jt5_8PLifutNuXz5yQzu5uJOovEDA/edit#gid=0

## Prerequisites
* Node.js 
* Google account for Google Credentials & Google SpreadSheet
* Openode account

## How To Use
1. Clone the [repository](https://github.com/khellytaguinod/PH-provinces-heatmap)  

There are two project folder from the repository
> PH HeatMap Local ( configured to run locally using node js )

> PH HeatMap Openode ( configured to deploy online using the openode module )

2. Choose one folder from the repository
3. Inside the project folder run `npm install`  using command/terminal prompt to install its dependencies.
4. Follow this [Google documentation](https://developers.google.com/sheets/api/quickstart/nodejs) **Step 1** to obtain a `client_secret.json` file.
5. Put the `client_secret.json` inside the selected project folder.
6. Make a duplicate from this [formated google spreadsheet](https://docs.google.com/spreadsheets/d/1W5lUi8-h5EYgh3Jt5_8PLifutNuXz5yQzu5uJOovEDA/edit?usp=sharing) 

## Run & Test Locally
1. Open `index.js` and paste the spreadsheetID with the ID from your duplicated spreadsheet. ([Need help with the ID?](https://developers.google.com/sheets/api/guides/concepts))
```js
let sheetID = "spreadsheetID";
```

2. Run `node index.js` using command/terminal prompt.
3. Open browser and go to http://localhost:3000/ and see how the app work

 
## Run & Deploy Online using Openode
1. You must have an openode account to deploy and run the web app.
2. Open `app.js` and  index.js and paste the spreadsheetID with the ID from your duplicated spreadsheet. ([Need help with the ID?](https://developers.google.com/sheets/api/guides/concepts))
```js
let sheetID = "spreadsheetID";
```

3. Run `openode deploy` using command/terminal prompt.
4. The first time you run the openode command, it will prompt you to authorize access.
5. Log in with your openode credentials.
6. Type a link address for the openode to use for the web app.
7. Wait for the openode to deploy the web app and console log a “ success “ msg.
8. Log in to openode website and open the app to see how the app work.

## Built with
- Express framework Module
- CORS
- Openode Module
- Google Maps & Google SpreadSheet API


## Notes & References 
- [Express Documentation](http://expressjs.com/en/starter/installing.html) 
- [CORS Documentation](https://github.com/expressjs/cors) 
- [Openode Documentation](https://openode.io/docs)
- [Google Sheet API](https://developers.google.com/sheets/api/quickstart/nodejs) & [Google Maps API](https://developers.google.com/maps/documentation/javascript/examples/)

