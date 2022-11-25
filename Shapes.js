class Square
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.fill_colour = "ffffff";
        this.edge_colour = "";
    }

    draw()
    {
        ctx.fillStyle = this.fill_colour;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}