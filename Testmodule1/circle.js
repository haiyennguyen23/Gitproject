class Circle{
    x;y;radius;color;
    constructor(x,y,radius,color){
        this._x=x;
        this._y=y;
        this._radius=radius;
        this._color=color
    }
    getX(){
        return this._x;
    }
    getY(){
        return this._y;
    }
    getRadius(){
        return this._radius;
    }
    getColor(){
        return this._color;
    }
    setX(x){
        this._x=x;
    }
    setY(y){
        this._y=y;
    }
    setRadius(radius){
        this._radius=radius;
    }
    setColor(color){
        this._color=color;
    }

    render(x,y,radius,color){
        let ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y,radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

    }
}