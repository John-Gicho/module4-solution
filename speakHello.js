
(function speak(name) {
   var speakWord = "Hello";
  var helloSpeaker = {
    name : "speak"
  };
  helloSpeaker.speak = function (name, window){
    console.log(speakWord + " " + name);
  };
  window.helloSpeaker = helloSpeaker;
  
})();



