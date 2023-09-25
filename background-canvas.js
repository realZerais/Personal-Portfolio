console.log("test");

var canvas = document.getElementById('background-canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var x;
var y;
var xVelocity = 0; 
var yVelocity = 0; 
var color; 


var circleRadius;
var maxCircleRadius=40;
var minCircleRadius;


var circleArray = [];
var entNum = 100;


var setColor = false;

var mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove',   
    function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            //console.log(mouse);
    }
)

function spawn100(){
    for(var i = 0; i < entNum; i++){
            
            x = (Math.random() * window.innerWidth) + (circleRadius*2); //add margin to x- upon spawning
            y = (Math.random() * window.innerHeight) + (circleRadius*2); //add margin to y- upon spawning

            xVelocity = (Math.random() * 2) -1;
            yVelocity = (Math.random() * 2) -1;

            circleRadius = Math.floor(Math.random() * 5)+1;
            
            if(x >= window.innerWidth - (circleRadius*2)){ //add margin to x+ upon spawning
                    x -=(circleRadius*3);
            }
            if(y >= window.innerHeight - (circleRadius*2)){//add margin to y+ upon spawning
                    y -= (circleRadius*3);
            }
            color = "white";
            
            
            circleArray.push(new Circle(x,y, xVelocity, yVelocity, color, circleRadius));
    }
}

function Circle(x, y, xVelocity, yVelocity, color, circleRadius, _minCircleRadius){
    this.x = x;
    this.y = y;
    this.xVelocity = xVelocity;
    this.yVelocity = yVelocity;
    this.color = color;
    this.circleRadius = circleRadius;
    this.minCircleRadius = this.circleRadius;

    
    
    this.draw = function(){
            c.beginPath();
            c.arc(this.x, this.y, this.circleRadius, 0, Math.PI*2, false);
            c.fill();
            c.fillStyle = this.color;     
    }

    
   

    this.update = function(){
            
            this.draw();
    

            if(this.x >= window.innerWidth - circleRadius){ //if x+ hit the edge, go back // -30 = edge of the circle
                    this.xVelocity = -this.xVelocity; //negate xVelocity if hit the edge to go to opposite direction
                    
            }
            if(this.x<=0 + circleRadius){ //if x- hit the edge, go back // -30 = edge of the circle
                    this.xVelocity = -this.xVelocity;
            }
            this.x += this.xVelocity;


            if(this.y >= window.innerHeight - circleRadius){ //if y- hit the edge, go back // -30 = edge of the circle
                    this.yVelocity = -this.yVelocity;
            }
            if(this.y <= 0 + circleRadius){ //if y+ hit the edge, go back // -30 = edge of the circle
                    this.yVelocity = -this.yVelocity;
            }
            this.y += this.yVelocity;
            
            //console.log(xVelocity);
            //interactivity
            if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                    mouse.y - this.y < 50 && mouse.y - this.y > -50){//50 represents the distance of the mouse and the circle/object
                            
                    if(this.circleRadius < maxCircleRadius){
                            this.circleRadius +=1;
                    }
                    
                   
            }
            else if (this.circleRadius > this.minCircleRadius){
                    this.circleRadius -= 1;
            }
            
            // else{
            //         this.cir
            // }
            
    }

    


}


function animation(){

    requestAnimationFrame(animation);

      
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    
    for(var i = 0; i < circleArray.length; i++){
            circleArray[i].update();   
    }
    
 
}


animation();
spawn100();