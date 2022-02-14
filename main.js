function setup()
{
    video = createCapture(VIDEO);
    video.center();
    video.size(400, 400);
    canvas = createCanvas(400, 400);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}