var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;

var player_x=10;
var player_y=10;

var player_objects="";

function player_update() {
    fabric.image.fromURL("player.png",function(Img) {
        player_objects=Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleTohHeight(150);
        player_objects.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_objects);
    });
}
function new_image(get_image) {
    fabric.image.fromURL(get_image,function(Img) {
        block_objects=Img;
        block_objects.scaleToWidth(block_image_width);
        block_objects.scaleTohHeight(block_image_height);
        block_objects.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_objects);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    
    if(e.shiftkey && keypressed=='80'){
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
                }

                if(e.shiftkey && keypressed=='77'){
                    block_image_width=block_image_width-10;
                    block_image_height=block_image_height-10;
                    document.getElementById("current_width").innerHTML=block_image_width;
                    document.getElementById("current_height").innerHTML=block_image_height;
                }

   if(keypressed == '38'){
       up();
   }
   if(keypressed == '37'){
    left();
}

if(keypressed == '40'){
    down();
}

if(keypressed == '39'){
    up();
}

if(keypressed == '87'){
    new_image('wall.jpg');
}

if(keypressed == '71'){
    new_image('ground.png');
}

if(keypressed == '76'){
    new_image('light_green.png');
}

if(keypressed == '84'){
    new_image('trunk.jpg');
}

if(keypressed == '82'){
    new_image('roof.jpg');
}

if(keypressed == '89'){
    new_image('yellow_wall.jpg');
}

if(keypressed == '68'){
    new_image('dark_green.png');
}

if(keypressed == '85'){
    new_image('unique.png');
}

if(keypressed == '67'){
    new_image('cloud.jpg');
}
}


