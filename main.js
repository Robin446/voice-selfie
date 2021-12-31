var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function recog(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start()
}
Recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
}

function speak(){
    var synth = window.speechSynthesis;
    var speakData = document.getElementById("textbox").value;
    var utterthis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterthis);
    Webcam.attach('#camera')
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
