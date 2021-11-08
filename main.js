var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) 
{
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if(Content =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5, 4, 3, 2, 1";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("your_selfie").src ;
    link.href = image;
    link.click();
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="your_selfie" src="'+data_uri+'">';
    });
}