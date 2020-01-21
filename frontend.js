// var user;
know = {
    "hello" : "Hi,how can I help you?",
    "Hello" : "Hi,how can I help you?",
    "hi" : "Hello,how can I help you?",
    "Hi" : "Hello,how can I help you?",
    "what is your name?" : "My name is Mr.Bot.",
    "how are you?" : "Good",
    "ok" : ":)",
    "Thanks" : ":)",
    "thanks": ":)",
    "bye" : "Bye",
    "Hey" : "Hello,how can I help you?"

};

function talk() {
    // console.log("in talk");
    var user = document.getElementById("write-message").value;
    
    document.getElementById("conversation").innerHTML += "<div class='showRight'>"+user+"</div></br>";
    response();
    /*  if (user in know) {
        document.getElementById("conversation").innerHTML += know[user]+"<br>";
    } else {
        document.getElementById("conversation").innerHTML += "Sorry,I don't understand...<br>";
    }*/
}
// )(module.exports);

function response(){
    var user = document.getElementById("write-message").value;
    document.getElementById("write-message").value = "Mr. Bot is typing....";
    setTimeout(function(){
    //var user = document.getElementById("write-message").value;
    var op="Sorry,I don't understand...I am still learning";
    //var delay=3000;
    document.getElementById("write-message").value = "";
    if (user in know) {
        //setTimeout(function(){response},delay);
        document.getElementById("conversation").innerHTML += "<div class='showLeft'>"+know[user]+"</div></br>";
    } else {
        document.getElementById("conversation").innerHTML += "<div class='showLeft'>"+op+"</div></br>";
    }
},2000);

}
 
