class Rope{
    constructor(bodyA,pointB){
        var op={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:200

        }
        this.s=Matter.Constraint.create(op)
        this.pointB=pointB;
        Matter.World.add(world,this.s)


    }
    display(){
        if(this.s.bodyA){
            var pa=this.s.bodyA.position
            var pb=this.pointB
         push()
         stroke("orange")
         strokeWeight(3)
            line(pa.x,pa.y,pb.x,pb.y)
            pop();
        }
    }
    
    

}