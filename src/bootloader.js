// Creamos la escena que será la encargada de cargar nuestros Assets

class Bootloader extends Phaser.Scene {
    constructor () {
        super('Bootloader'); // Constructor del Padre (Phaser.Scene)
    }
    
    preload() {
        console.log('Soy bootloader');
        this.load.image('cuerpo', './assets/body.png');
        this.load.image('comida', './assets/food.png');
        this.load.image('tablero', './assets/tablero.png');

        // Cuando hayan cargado las imagenes llamamos a la escena Play
        this.load.on('complete', () => {
            this.scene.start('Play');
        });
    }

}

export default Bootloader; // Esto ya seria un modulo