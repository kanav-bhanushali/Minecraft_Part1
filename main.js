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





