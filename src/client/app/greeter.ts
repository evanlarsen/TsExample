function greeter(person: string) {
    return "Hello, " + person;
}

var canvas = <HTMLCanvasElement>document.getElementById('canvas');
canvas.width = 200;
canvas.height = 200;

var ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect(10, 10, 55, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect(30, 30, 55, 50);