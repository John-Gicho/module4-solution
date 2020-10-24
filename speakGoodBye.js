
(function speak(name) {
  var speakWord = "Good Bye";
  var byeSpeaker = {
    name : "speak"
  };
  byeSpeaker.speak = function(name, window){
    console.log(speakWord + " " + name);
  };
  window.byeSpeaker = byeSpeaker;
})();

