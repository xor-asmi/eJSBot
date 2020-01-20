
/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */

const botCreds = require('./keys');
const testagentCred = botCreds.authCredentials;

console.log("testagentCred.project_id-------------", testagentCred.project_id);
// const projectId = testagentCred.project_id;

// const dialogflow = require('dialogflow');
// const uuid = require('uuid');

async function runSample(projectId = testagentCred.project_id) {
  // console.log("project ID: ",projectId );
  // A unique identifier for the given session
  const dialogflow = require('dialogflow');
  const sessionId = 'jhassajh14231466';
  // const sessionClient = new dialogflow.SessionsClient();
  const sessionClient = new dialogflow.SessionsClient({
    credentials: testagentCred,
  });
  console.log("sessionClient",sessionClient);
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  console.log("sessionPath-----",sessionPath);

  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: 'hello',
        // The language used by the client (en-US)
        languageCode: 'en',
      },
    },  
  };
  console.log( "request-----", request);
  // Send request and log result
  sessionClient.detectIntent(request)
  .then(responses => {
    console.log("responses_______________", responses);
    // console.log('Detected intent');
    // const result = responses[0].queryResult;
    // console.log(`  Query: ${result.queryText}`);
    // console.log(`  Response: ${result.fulfillmentText}`);
    // if (result.intent) {
    //   console.log(`  Intent: ${result.intent.displayName}`);
    // } else {
    //   console.log(`  No intent matched.`);
    // }
  });

}

runSample();