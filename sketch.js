var engine,world;
var ball,ground;





function setup(){
    createCanvas(3000,800);
    engine=Matter.Engine.create();
    world=engine.world;
    Matter.Engine.run(engine);
    ground=new Ground(600,700,1500,20)
    
  
   
    b3=new Blocks(600,100,70,70)
    b4=new Blocks(600,100,70,70)
    b5=new Blocks(600,100,70,70)
    b6=new Blocks(600,100,70,70)
    b7=new Blocks(800,100,70,70)
    b8=new Blocks(800,100,70,70)
    b9=new Blocks(800,100,70,70)
    b10=new Blocks(800,100,70,70)
    b11=new Blocks(800,100,70,70)
    b12=new Blocks(800,100,70,70)
    b13=new Blocks(600,100,70,70)
    b14=new Blocks(700,100,70,70)
    b15=new Blocks(700,100,70,70)
    b16=new Blocks(700,100,70,70)
    b17=new Blocks(700,100,70,70)
    
   ball=new Ball(200,200,80,80) 
rope=new Rope(ball.body,{x:400,y:50})
    

    
}
    



function draw(){
    background(0);
ground.display();
b3.display();
b4.display();

b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
ball.display();
rope.display();


}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})



}