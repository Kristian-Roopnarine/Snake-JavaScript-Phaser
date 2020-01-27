class Scene1 extends Phaser.Scene{
    constructor(){
        // calls super which makes the class inherit all the characteristics of its predecessor Scene from Phaser
        // bootGame will be the identifier for this scene
        super("bootGame");
    }
    preload(){
        this.load.image('body','body.png');
        this.load.image('food','food.png');
        cursors = this.input.keyboard.createCursorKeys();
    }
    create(){
        snake = new Snake(this,60,60)
        food = new Food(this)
        this.physics.add.overlap(food.spawned, snake.head, function(){
            food.newFood()
            snake.createBody(snake.head.x,snake.head.y)
        }, null, food)
        snake.head.setCollideWorldBounds(true)
        food.spawned.setCollideWorldBounds(true)
    }
    update(){
        //update position of head
        if (snake.time > snake.moveTime){
            snake.moveBody()
            snake.moveHead()
            snake.time = 0
        }
        snake.time++

        if (snake.isNotAlive()){
            game.destroy()
        }
        //change direction on key input
        if (cursors.left.isDown){
            snake.changeDirection(-1,0)
        } 
        else if (cursors.right.isDown){
            snake.changeDirection(1,0)
        }
        else if (cursors.down.isDown){
            snake.changeDirection(0,1)
        } 
        else if (cursors.up.isDown){
            snake.changeDirection(0,-1)
        }
    }
}