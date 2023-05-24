function preload() {
    song = loadSound("Best of Me.mp3" , "Destiny.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose', gotPoses);

}

function draw() {
    image(video, 0, 0, 600, 500)

    fill('#FF0000')
    stroke("FF0000")

}

function modelLoaded() {
    console.log("Pose Net Is Initialized!!")
}