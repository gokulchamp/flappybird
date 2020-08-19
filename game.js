var bird;
var pipes=[];
function setup() {
    createCanvas(1000,600);
    console.log("flappy");
    bird= new Bird();
}


function draw() {
    background(0);
    for (var i = pipes.length-1; i >0 ; i--) {
        pipes[i].show();
        pipes[i].update();
        if (pipes[i].hits(bird)) {
            console.log("hit");
            pipes[i].show();
            pipes[i].update();
            // pipes[i].highlight=true;
            pipes[i].dash();
            
            noLoop();
            

        }

         if (pipes[i].x < -width) {
            pipes.splice(i, 1);
        }
        
    }

    if(bird.boundary()){
        noLoop();
    }
    bird.update();
    bird.show();
    if(frameCount %60==0){

        pipes.push(new Pipe());

    }
   
}
function keyPressed(){
    if (key == ' '){
       // console.log("space");
        bird.up();
                
    }
}
