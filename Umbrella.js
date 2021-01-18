class Umbrella {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        var options = {
            isStatic: true,
            restitution: 0.3
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
        World.add(world, this.body);
        batman.addAnimation("walking", walk);
        batman.setAnimation("walking");
    }
    update() {
        if (this.body.position.x > 800) {
            this.body.position.x = 0;
        }
        this.body.position.x += 1;
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        batman.x = 0;
        batman.y = 0;
        //fill('white');
        //rect(0, 0, 100, 140);
        drawSprites();
        pop();
    }
}