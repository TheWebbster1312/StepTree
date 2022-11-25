let base_id = 0;

class Bubble
{
    constructor(name)
    {
        this.id = base_id++;
        this.colour = "#EF4F1F";
        this.name = name;
        this.description = "";
        this.parent = parent;
        this.children = [];
        this.checked = false;
        this.group = null;

        this.x;
        this.y;
        this.width = 60;
        this.height = 20;
        this.avatar = new Square(this.x, this.y, this.width, this.height);
        this.avatar.fill_colour = this.colour;
    }

    set_coords(x, y)
    {
        this.x = x;
        this.y = y;
        this.avatar.x = x;
        this.avatar.y = y;
    }

    add_child(child)
    {
        if(typeof(child) != Bubble)
        {
            return false;
        }

        child.parent.remove_child(child.id);
        child.parent = this;
        this.children.push(child);
        return true;
    }

    print()
    {
        output = "";
        output += "ID: " + this.id + "\n";
        output += "Name: " + this.name + "\n";
        output += "Description: " + this.description + "\n";
        output += "Parent: ID: " + this.parent.id + ", Name: " + this.parent.name + "\n";
        output += "Number of child nodes: " + this.children.length + "\n";
    }

    get_children()
    {
        return this.children;
    }
}

class Avatar
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
        this.visable;

        
    }
}

let x = new Bubble("sean");

x.set_coords(20, 20);
x.avatar.draw()