const fs = require('fs')
const readline = require('readline')
const google = require('googleapis')
const googleAuth = require('google-auth-library')

let SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
let TOKEN_PATH = 'sheets.googleapis.com-nodejs-quickstart.json';
  
exports.readSheet = (sheetID, callback) => {

  // Load client secrets from a local file.
  fs.readFile('client_secret.json', processClientSecrets = (err, content) => {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Google Sheets API.
    authorize(JSON.parse(content), readMultipleRange);
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   *
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  authorize = (credentials, callback) => {
    let clientSecret = credentials.installed.client_secret;
    let clientId = credentials.installed.client_id;
    let redirectUrl = credentials.installed.redirect_uris[0];
    let auth = new googleAuth();
    let oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) {
        getNewToken(oauth2Client, callback);
      } else {
        oauth2Client.credentials = JSON.parse(token);
        callback(oauth2Client);
      }
    });
  }

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   *
   * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback to call with the authorized
   *     client.
   */
  getNewToken = (oauth2Client, callback) => {
    let authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oauth2Client.getToken(code, (err, token) => {
        if (err) {
          console.log('Error while trying to retrieve access token', err);
          return;
        }
        oauth2Client.credentials = token;
        storeToken(token);
        callback(oauth2Client);
      });
    });
  }

  /**
   * Store token to disk be used in later program executions.
   *
   * @param {Object} token The token to store to disk.
   */
  storeToken = (token) => {
    try {
      fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
      if (err.code != 'EEXIST') {
        throw err;
      }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token));
    console.log('Token stored to ' + TOKEN_PATH);
  }

  /**
   * Print the names and majors of students in a sample spreadsheet:
   * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
   */



  let readMultipleRange = (auth) => {

    const sheets = google.sheets('v4');
    let request = {
      spreadsheetId: sheetID,
      auth: auth,
      ranges: [`Data!A1:Z`, `Data!A2:Z`],
    };

    sheets.spreadsheets.values.batchGet(request, (err, response) => {
     if (err) {
      console.error(err);
      return;
    }
    
    let rows = response.valueRanges;
      if (rows.length == 0) {
        console.log('No data found.');
      } else {

        let getKeys = rows[0].values;
        let keys = getKeys[0];
        keys = keys.map(name => name.split(" ").join("-").toLowerCase());
        
        // gets the value after the column title
        let values = rows[1].values;

        let data = values.map(value => {
          let result = {};
          keys.forEach((key, index) => result[key] = value[index]);
          return result;
        });

        let obj = {
          content: data
        };
        callback(null, obj);
      }
  });
  }

} // end of function readSheet
