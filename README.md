#Heatmap of the Philippines Provinces Population
A webapp that use google map API to visualize heatmap and display the Philippines provinces population data that comes from google spreadsheet

Demo
http://ph-provinces-heatmap.openode.io/

How?

Getting Started

Github link for files and spreadsheet link here



Prerequisites
Node.js 
Google account for Google Credentials & Google SpreadSheet
Openode account
How To Use
Clone the repository  .. github link here
There are two project folder from the repository
PH HeatMap Local ( configured to run locally using node js )
PH HeatMap Openode ( configured to deploy online using the openode module )

Choose one folder from the repository
Inside the project folder run npm install  using command/terminal prompt.
Follow this Google documentation “ Step 1 ” to obtain a client_secret.json file.
Put the client_secret.json file inside the selected project folder.
Make a duplicate from this formated google spreadsheet 
Run & Test Locally
Open index.js and paste in the let sheetID  with the ID from your duplicated spreadsheet. ( need help with the ID? ) 
Run node index.js using command/terminal prompt.
Open browser and go to http://localhost:3000/ and see how the app work

 
Run & Deploy Online using Openode
You must have an openode account to deploy and run the web app.
Open app.js and paste in the let sheetID  with the ID from your duplicated spreadsheet. ( need help with the ID? ) 
Run openode deploy using command/terminal prompt.
The prompt will ask you to log in.
Log in with your openode credentials.
Type a link address for the openode to use for the web app.
Wait for the openode to deploy the web app and console log a “ success “ msg.
Log in to openode website and open the app to see how the app work.

Built with 
Express framework Module
CORS
Openode Module



Notes & References 
Express Documentation 
CORS Documentation 
Openode Documentation

