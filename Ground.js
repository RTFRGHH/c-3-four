class Ground{
    constructor(x,y,w,h){
        var op={
            isStatic:true

        }
        this.ground=Matter.Bodies.rectangle(450,390,900,20,op)
        this.w=w;
        this.h=h;
        
        Matter.World.add(world,this.ground)
    }
    display(){
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}