var last_position_of_x, last_position_of_y;
color = "black";
width_of_line - 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var width = screen.width;

new_width = screen.width - 70;
new_height - screen.height - 300;

         if (width < 992)
         {
         document.getElementById("myCanvas").width = new_witdh;
         document.getElementById("myCanvas").height = new_height;
         document.body, style.overFlow = "hidden"
         }

canvas.addEventListener("touchstart", my_touchstart);


function my_touchstart(e) {
    console, log("my_touchstart");
    color = document.getElementById("color").value;
    wuidth_of_line = document.getElementById("width_of_line").value;

    last_position_of_x = e.touches[0].clientX = canvas.offsetleft
    last_position_of_y = e.touches[0].clientY = canvas.offsetTop
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    console.log("my_mousemove")
    corrent_position_of_touch_x = e.touches[0].clientX - canvas.offsetleft;
    corrent_position_of_touch_y = e.touches[0].clientx - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidthw = width_of_line;

    console.log("Ultima posisión de coordenadas X y Y = ");
    console.log("x = " + last_position_of_mouse_x + "y = " + last_position_of_mouse_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Posición actual de cordenadas X y Y = ")
    console.log("x = " + corrent_position_of_touch_x + "y = " + corrent_position_of_touch_y);
    ctx.lineTo(corrent_position_of_touch_x, corrent_position_of_touch_y);
    ctx.stroke();


    last_position_of_x = current_position_of_touch_x;
    last_position_of_x = current_position_of_touch_y;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}