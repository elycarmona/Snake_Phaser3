class Snake {
    constructor(scene) {
        this.scene = scene;
        this.cuerpo = this.scene.physics.add.image(10, 10, 'cuerpo'); // Dimensiones de x y  
    }
}

export default Snake;