class  Wall{
    constructor(x,y,height){
        this.x = this.x;
        this.y = this.y;
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,30,height,options);
    this.width = 30;
    this.height = height;
    World.add(world,this.body); 
    }
    
    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x, this.body.position.y, 30, this.height);
    }
}