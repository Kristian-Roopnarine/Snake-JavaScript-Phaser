class Snake extends Phaser.Physics.Arcade.Image{
    constructor(scene,x,y){
        super(scene,"body");
        this.x = x
        this.y = y 
        this.xdir = 1
        this.ydir = 0
        this.time = 0
        this.moveTime = 5
        this.speed = 20
        this.length = 0
        this.body = scene.physics.add.group()
        this.head = scene.physics.add.image(x,y,"body")
        this.tail = new Phaser.Geom.Point(x,y)
    }

    createBody(x,y){
        if (this.xdir == 1){
            this.body.create(x-20,y,"body")
        }
        else if (this.xdir == -1)
        {
            this.body.create(x+20,y,"body")
        }
        else if (this.ydir == 1)
        {
            this.body.create(x,y-20,"body")
        }
        else if (this.ydir == -1)
        {
            this.body.create(x,y+20,"body")
        }
        
        this.length++
    }

    moveHead(){
        this.head.x += this.speed * this.xdir
        this.head.y += this.speed * this.ydir
    }
    moveBody(){
        if (this.length > 0){
            Phaser.Actions.ShiftPosition(this.body.getChildren(), this.head.x , this.head.y , 1, this.tail)
        }
    }
    changeDirection(xdir,ydir){
        this.xdir = xdir
        this.ydir = ydir
    }
    isAlive(){
        if (snake.head.x >= config.width || snake.head.y >= config.height || snake.head.x < 0 || snake.head.y < 0){
            return true
        }
    }
}

