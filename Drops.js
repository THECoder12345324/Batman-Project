class Drop {
    constructor(x, y, r) {
        var options = {
            mass: 0.5,
            restitution: 0.5
        }
        this.r = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
    }
    update() {
        if (this.body.position.y > height) {
            this.body.position.y = -10;
            this.body.position.x = random(0, width);
        }
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}