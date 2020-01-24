class Food extends Phaser.Physics.Arcade.Image{
    constructor(scene){

        super(scene,"food");
        this.x = Phaser.Math.Between(1,14) * 100
        this.y = Phaser.Math.Between(1,7) * 100
        this.spawned = scene.physics.add.image(this.x,this.y,"food")
    }

    newFood(){
        this.x = Phaser.Math.Between(2,14) * 100
        this.y = Phaser.Math.Between(2,7) * 100
        this.spawned.setX(this.x)
        this.spawned.setY(this.y)
    } 
}