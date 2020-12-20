class Rope{
    constructor(){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(400,400,200,10);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(400,400,200,10);
    }
}