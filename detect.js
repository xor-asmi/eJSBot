const botCreds = require('./keys');
const testagentCred = botCreds.authCredentials;
var user;
// console.log("testagentCred.project_id-------------", testagentCred.project_id);

function talk() {
  console.log("in talk");
  user = document.getElementById("write-message").value;
  document.getElementById("conversation").innerHTML += "<div class='showRight'>"+user+"</div></br>";
  runSample();
  response();
}

function response(){
  document.getElementById("write-message").value = "Mr. Bot is typing....";
  setTimeout(function(){
    var op="Sorry,I don't understand...I am still learning";
    document.getElementById("write-message").value = "";
    document.getElementById("conversation").innerHTML += "<div><div class='user-photo img' style='width:30px; float:left;'><img src='ana.JPG'></div>"+"<div class='showLeft' style='float:left;'>"+result+"</div></div></br>"; 
  },2000);
}

async function runSample(projectId = testagentCred.project_id) {
  // console.log("project ID: ",projectId );
  const dialogflow = require('dialogflow');
  const sessionId = 'jhassajh14231466';
  const sessionClient = new dialogflow.SessionsClient({
    credentials: testagentCred,
  });
  // console.log("sessionClient",sessionClient);
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  // console.log("sessionPath-----",sessionPath);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: user,
        languageCode: 'en',
      },
    },  
  };
  console.log( "request-----", request);
  sessionClient.detectIntent(request)
  .then(responses => {
    result = responses[0].queryResult.fulfillmentText;
    // console.log('Response:',result);
  });

}

