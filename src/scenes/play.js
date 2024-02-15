// Creamos la escena que cargará la lógica de nuestro juego

class Play extends Phaser.Scene {
    constructor () {
        super('Play'); // Constructor del Padre (Phaser.Scene)
    }
    
    preload() {
        console.log('Escena play');
    }

}

export default Play; // Esto seria un modulo