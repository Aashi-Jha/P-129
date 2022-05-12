song1="";
song2="";
score_leftWrist=0;
status_song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song1=loadSound("Unstoppable(PagalWorld).mp3");
    song2=loadSound("Harry Potter Theme Ringtone.mp3")
    }

    function setup(){
        canvas=createCanvas(500,400);
        canvas.center();
    
        video=createCapture(VIDEO);
        video.hide();

        poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log("PoseNet is Initialized!");
    }
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            score_leftWrist=results[0].pose.keypoints[9].score;
            console.log("score left wrist= "+score_leftWrist);

            leftWristX= results[0].pose.leftWrist.x;
            leftWristY= results[0].pose.leftWrist.y;
            console.log("Left Wrist X= "+leftWristX+"Left Wrist Y= "+leftWristY);
    
            righttWristX= results[0].pose.rightWrist.x;
            rightWristY= results[0].pose.rightWrist.y;
            console.log("Right Wrist X= "+righttWristX+"Right Wrist Y= "+rightWristY);
        }
    }
    
    function draw(){
        image(video,0,0,500,400);

    fill("blue");
    stroke("blue");

    song_unstoppable=song1.isPlaying();
    console.log(song_unstoppable);
    
    if(score_leftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(song_unstoppable == false){
            song1.play();
        }
            else{
                document.getElementById("song").innerHTML="Song :Unstoppable "; 
            }
        }
    }
    