// how to configure the game
let width = 14
let height = 7
var config = {
    // type is the rendering context of the game
    type: Phaser.WEBGL,
    // properties of the canvas element it will create
    width:width*100,
    height:height*100,
    physics:{
        default:'arcade',
        arcade:{
            gravity:{y:0},
            debug:false,
            fps:60,
        }
    },
    backgroundColor:'rgb(128,128,128)',
    scene: [Scene1],
    pixelArt:true,
};

// create a new instance of 
var game = new Phaser.Game(config)
/*
var snakeHead;
var snakeHeadPosition;
var cursors;
var food;
var Snake = []
var snakeBody;
var moveTime = 5;
var time=0;
var xdir=1;
var ydir=0;
var speed=20;
var snakeTail;
var SCALE = 20;
var x = 10;
var y = 10;
*/
var snake;
var cursors;
var food;
function preload(){
    this.load.image('body','body.png');
    this.load.image('food','food.png');
}

function create (){
    //snake = new Snake(this,60,60)
    /*
    snakeHead = this.physics.add.sprite(x*6,x*6,'body')
    snakeBody = this.physics.add.group()
    snakeHead.setOrigin(0)
    food = this.physics.add.sprite(Math.floor(Math.random()*13)*100,Math.floor(Math.random()*6)*100,'food')
    food.setOrigin(0)
    snakeTail = new Phaser.Geom.Point(x,y)
    this.cameras.main.backgroundColor.setTo(128,128,128);
    this.physics.add.overlap(food, snakeHead, newFood,null,this)
    snakeHead.setCollideWorldBounds(true)
    food.setCollideWorldBounds(true)
    cursors = this.input.keyboard.createCursorKeys();
    */
}

function update(){
    /*
    if (time > moveTime){
        if (Snake.length >= 1){
            Phaser.Actions.ShiftPosition(snakeBody.getChildren(), snakeHead.x  , snakeHead.y , 1, snakeTail)
        }

        snakeHead.x += speed * xdir
        snakeHead.y += speed * ydir
        time = 0
        
        if (gameOver(snakeHead)){game.destroy()}
    }
    //detect key presses
    if (cursors.left.isDown){
        xdir = -1
        ydir=0
    } 
    else if (cursors.right.isDown){
        xdir = 1
        ydir=0
    }
    else if (cursors.down.isDown){
        ydir = 1
        xdir=0
    } 
    else if (cursors.up.isDown){
        ydir = -1
        xdir=0
    }


    time++
    */
}

/*
function newFood(food){
    food.setX(Math.floor(Math.random()*14) * 100)
    food.setY(Math.floor(Math.random()*7) * 100)
    addBody()
}

function addBody(){
    var body = snakeBody.create(snakeTail.x,snakeTail.y,'body')
    body.setOrigin(0)
    Snake.push(body)
}

function gameOver(snakeHead){
    if (snakeHead.x >= width*100 || snakeHead.x < 0 || snakeHead.y < 0 || snakeHead.y >= height * 100){
        return true;
    }
    
}*/