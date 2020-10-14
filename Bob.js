class Bob
{
    constructor(x,y,radius)
    {
        var option = {
            isStatic : false,
            'restitution':1.1,
            'friction':0,
            'density':0.8
        }

        this.body = Bodies.circle(x,y,radius/2,option)
        this.radius = radius;
        this.x = x;
        this.y = y;
        World.add(world,this.body)
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y)
        
        strokeWeight(2);
        stroke("black");
        fill("pink");
       ellipse( 0, 0, this.radius, this.radius);
        pop()
    }
} 