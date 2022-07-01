class Player {

    constructor (name, color) {

        this.name = name;
        this.color = color;
        this.score = 0;

        this.x = 600;
        this.y = 300;
        this.radius = 40;

    }

    render () {

        stroke(BACKGROUND_COLOR);
        strokeWeight(4);
        fill(this.color);
        circle(this.x, this.y, this.radius);

    }

    inform () {

        noStroke();
        fill(ACCENT_2);
        textFont(defaultFont, 15);
        textAlign(CENTER, BOTTOM)
        text(this.name, this.x, this.y - this.radius / 1.5);

    }

}