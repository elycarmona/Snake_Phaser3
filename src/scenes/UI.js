// Escena encargada de las puntuaciones

class UI extends Phaser.Scene {
    constructor () {
        super('UI'); // Constructor del Padre (Phaser.Scene)
    }
    
    preload() {
        console.log('Soy UI');
    }

}

export default UI; // Esto seria un modulo