function Box(x, y, w, h, options) {
    //messing around
    var options = {
        friction: 0.1,
        restitution: 0.35,
    }
 //CREATINGGGGGGG the body
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;

    World.add(world, this.body);
 
    this.show = function () {
        //making life easier one step at a time
        var pos = this.body.position;
        var angle = this.body.angle;
 //Idont really understand push and translate but it basically means rectangles dont live on mars
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        //RECATNGLES DONT GO FLYINGGGGGGGGG!!!!!
        rectMode(CENTER);
        //MAke it look cleaaaannnnn!
        stroke("black");
        fill("purple");
        //creating the rectangle
        rect(0, 0, this.w, this.h);

        //makes the game work
        pop(); 
        
    }
}