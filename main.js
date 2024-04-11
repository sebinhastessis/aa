var xd=window.webkitSpeechRecognition;
var xD=new xd();
function a(){
document.getElementById ("fachero").innerHTML="";
xD.start();
}
xD.onresult=function(pi){
console.log(pi);
var Xd=pi.results[0][0].transcript;
document.getElementById("fachero").innerHTML=Xd;
if(Xd=="carita fachera facherita"){
    speak();console.log("u")
}
}
function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    webcam.attach(camarafachera)
}
function XD(){
    Webcam.snap(function(data_uri) { document.getElementById("resultado").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>'; });
}
camarafachera=document.getElementById("camara")
Webcam.set({
width:500,height:200,image_format:"png",png_quality:100
})