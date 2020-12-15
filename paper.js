class Paper{
      constructor(x,y,r){
          var options={
              isStatic:false,
              restitution:0,
              friction:0,
              density:3.2
          }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2,options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);

      }

    display(){

       var pos=this.body.position;
       var angle = this.body.angle;

       fill("white");
       rotate(angle);
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,50,50);
       
       
    }

}
