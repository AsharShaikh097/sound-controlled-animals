//https://teachablemachine.withgoogle.com/models/RK2rO-1Mo/

function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RK2rO-1Mo/model.json',modleready);
}
function modleready(){
    classifier.classify(gotresults);
    
}
var dog=0;
var cat=0;
var lion=0;
function gotresults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = "i can hear - " + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + r + "," + g + "," + b + ")";
        img = document.getElementById("animal");
     
        if (results[0].label == "dog") {
            img.src = 'bark.gif';
           
        } else if (results[0].label == "cat") {
            img.src = 'cat.gif';
        }
        else if (results[0].label == "lion") {
            img.src = 'roar.gif';
        }
        else {
            img.src = 'listen.gif';
        }
    }
}