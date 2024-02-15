// Cuando perdamos el juego llamará esta Escena

class Gameover extends Phaser.Scene {
    constructor () {
        super('Gameover'); // Constructor del Padre (Phaser.Scene)
    }
    
    preload() {
        console.log('Soy Gameover');
    }

}

export default Gameover; // Esto seria un modulo