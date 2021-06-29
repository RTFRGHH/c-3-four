class Ball{
    constructor(x,y,w,h,angle){
        var op={
            
            frictionAir:0.005,
            density:1
            

        }
        this.body=Matter.Bodies.rectangle(x,y,w,h,op)
        this.w=w;
        this.h=h;
        Matter.World.add(world,this.body)
    }

    display(){
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        fill("purple");
        
        ellipse(0,0,this.w,this.h);
        pop()
    }
}
