class Side
{
    constructor(x,y,w,h)
{
    
    let loptions = {
        isStatic:true
    }

   

   
    this.body = Bodies.rectangle(x,y,w,h,loptions)
    this.w = w
    this.h = h
    World.add(world,this.body)

    
}

show(){
    var pos = this.body.position
    rectMode(CENTER)
    stroke(200)
    fill(190)
    rect(pos.x, pos.y, this.w, this.h);
    

    
}
    
}






