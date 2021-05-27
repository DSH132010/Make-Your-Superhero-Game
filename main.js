var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 100;
block_image_height = 100;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}


    // Placing Images By Control's

    //Total = 19


	//1
    if(keyPressed == '87')
	{
		new_image('captain_america_left_hand.png'); 
		console.log("w");
	}

    //2
	if(keyPressed == '71')
	{
		new_image('hulk_face.png'); 
		console.log("g");
	}

    //3
	if(keyPressed == '76')
	{
		new_image('hulk_left_hand.png'); 
		console.log("l");
	}

    //4
	if(keyPressed == '84')
	{
		new_image('hulk_legs.png'); 
		console.log("t");
	}


    //5
	if(keyPressed == '82')
	{
		new_image('hulk_right_hand.png'); 
		console.log("r");
	}

    //6
	if(keyPressed == '89')
	{
		new_image('hulk_body.png'); 
		console.log("y");
	}

    //7
	if(keyPressed == '68')
	{
		new_image('ironman_body.png'); 
		console.log("d");
	}

    //8
	if(keyPressed == '85')
	{
		new_image('ironman_face.png'); 
		console.log("u");
	}

    //9
	if(keyPressed == '67')
	{
		new_image('ironman_left_hand.png'); 
		console.log("c");
	}
    
    //10
    if(keyPressed == '66') {
        new_image('ironman_legs.png'); 
        console.log("b");
    }

    //11
    if(keyPressed == '72') {
        new_image('ironman_right_hand.png'); 
        console.log("h");
    }

    //12
    if(keyPressed == '70') {
        new_image('spiderman_body.png'); 
        console.log("f");
    }

    //13
    if(keyPressed == '65') {
        new_image('spiderman_face.png'); 
        console.log("a");
    }

    //14
    if(keyPressed == '88') {
        new_image('spiderman_left_hand.png'); 
        console.log("x");
    }

    //15
    if(keyPressed == '86') {
        new_image('spiderman_legs.png'); 
        console.log("v");
    }

    //16
    if(keyPressed == '83') {
        new_image('spiderman_right_hand.png'); 
        console.log("s");
    }

    //17
    if(keyPressed == '80') {
        new_image('thor_face.png'); 
        console.log("p");
    }

    //18
    if(keyPressed == '81') {
        new_image('thor_left_hand.png'); 
        console.log("q");
    }

    //19
    if(keyPressed == '75') {
        new_image('thor_right_hand.png'); 
        console.log("k");
    }
}
