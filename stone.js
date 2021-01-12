class Stone{
    constructor(x,y,radius){
        var options = {
            'restitution': 0.5,
            'density': 1,
            'friction': 0.5,
            isStatic: true
        }
        this.body = Bodies.ellipse(x,y,radius,options);
        this.radius = radius
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y);
    }
}