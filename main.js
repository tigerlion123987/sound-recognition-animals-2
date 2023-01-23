//https://teachablemachine.withgoogle.com/models/bOPcVYA50/
 function Startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true, video:false
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bOPcVYA50/model.json",modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_color_r=Math.floor(Math.random()*255)+1;
        random_color_g=Math.floor(Math.random()*255)+1;
        random_color_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - "+(results[0].confidence*100).toFixed(2)+ "%";
        document.getElementById("result_label").style.color="rgb("+ random_color_r+','+ random_color_g+','+ random_color_b+")";
        document.getElementById("result_confidence").style.color="rgb("+ random_color_r+','+ random_color_g+','+ random_color_b+")";
    }
}