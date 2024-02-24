import Snake from "../gameobjects/Snake.js"; // Importamos el objeto Snake

// Creamos la escena que cargará la lógica de nuestro juego

class Play extends Phaser.Scene {
    constructor () {
        super('Play'); // Constructor del Padre (Phaser.Scene)
    }
    
    preload() {
        console.log('Escena play');
        this.snake = new Snake(this); // Con this haremos referencia a Phaser.Scene
    }

}

export default Play; // Esto seria un modulo