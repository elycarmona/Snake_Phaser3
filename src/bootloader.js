// Creamos la escena que será la encargada de cargar nuestros Assets

class Bootloader extends Phaser.Scene {
    constructor () {
        super('Bootloader'); // Constructor del Padre (Phaser.Scene)
    }
    
    preload() {
        console.log('Soy bootloader');
        this.scene.start('Play');
    }

}

export default Bootloader; // Esto ya seria un modulo