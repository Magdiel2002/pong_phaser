class Palas extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        scene.add.existing(this);
        scene.physics.world.enablde(this);
        this.body.immovable = true;
        this.body.setColliderWorldBounds(true);
    }
}

export default Palas;