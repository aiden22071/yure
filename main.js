//https://teachablemachine.withgoogle.com/models/OAvFjdZQ4/

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OAvFjdZQ4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else {
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        console.log(random_number_r);

        random_number_g = Math.floor(Math.random() * 255) + 1;
        console.log(random_number_g);

        random_number_b = Math.floor(Math.random() * 255) + 1;
        console.log(random_number_b);

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;

        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2) + " %";

        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('cow');

        if(results[0].label == "barking"){
            img.src = 'dog gif.png';
            img1.src = 'cat.png';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
        }

        else if(results[0].label == "Background Noise"){
            img.src = 'dog.png';
            img1.src = 'cat.gif.png';
            img2.src = 'lion.png';
            img3.src = 'cow.png';
        }

        else if(results[0].label == "whistle"){
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'lion gif.png';
            img3.src = 'cow.png';
        }

        else{
            img.src = 'dog.png';
            img1.src = 'cat.png';
            img2.src = 'lion gif.png';
            img3.src = 'cow gif.png';
        }
    }
}