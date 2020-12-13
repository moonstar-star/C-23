class Ground{
    constructor(x,y,width,height){
        var opt = {
            isStatic:true
        }
        this.width = width;
        this.height = height
        this.ground = Bodies.rectangle(x,y,width,height,opt)
        World.add(world,this.ground)
    }
    display(){
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height)
    }
}