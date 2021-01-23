var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var camera = document.getElementById("camera");

function start(){

    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        speak();
        console.log("Taking selfie");
    }
    
}

function speak(){

    var synth= window.speechSynthesis;
    //speak_data = document.getElementById("textbox").value;
    speak_data = "Taking your selfie in 5 seconds";
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
    }

function take_snapshot(){

    Webcam.snap(function(data_url){
        document.getElementById("selfie").innerHTML = "<img id='selfie_result' src= "+data_url+">"
    });
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 100
});

function save(){

    save_anchor = document.getElementById("link");
    selfie_img = document.getElementById("selfie_result").src;
    save_anchor.href = selfie_img;
    save_anchor.click();
}

