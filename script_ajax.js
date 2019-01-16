var xmlHttp = createXMLHttpRequestObject();
function createXMLHttpRequestObject(){
  if(window.ActiveXObject){
    try{
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(e){
      xmlHttp = false;
    }
  }else {
    try{
      xmlHttp = new XMLHttpRequest();
    }catch(e){
      xmlHttp = false;
    }
  }
  if(!xmlHttp){
    alert("could not get a response");
  }
  else{
    return xmlHttp;
  }
}

function process(){
    if(xmlHttp.readyState == 0 || xmlHttp.readyState == 4){
      xmlHttp.open('GET', 'https://randomuser.me/api/?results=10', true);
      xmlHttp.onreadystatechange = handleServerResponse;
      xmlHttp.send(null);

    }else{
      setTimeout('process()', 1000);
    }
}

function handleServerResponse(){

  if(xmlHttp.readyState == 4){

      if(xmlHttp.status == 200){
        var randomUserResult = JSON.parse(xmlHttp.responseText);
        randomUserResult = randomUserResult.results[0];
        var first = randomUserResult.name["first"];
        var last = randomUserResult.name["last"];
        var lgPhoto = "<img src='" + randomUserResult.picture["thumbnail"] + "'>"
            function transformToTitleCase(word){
              if(word.charAt(0)!= word.charAt(0).toUpperCase()){
              var firstLetter = (word.charAt(0).toUpperCase());
              return word.replace(word.charAt(0), firstLetter);
              }
            }
        firstName = transformToTitleCase(first);
        lastName = transformToTitleCase(last);
        $('#fName').html(first);
        $('#lName').html(last);
        $('#photo').html(lgPhoto);
      }
  }
}
