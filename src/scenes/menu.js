// Mostrará el menu para iniciar el juego

class Menu extends Phaser.Scene {
    constructor () {
        super('Menu'); // Constructor del Padre (Phaser.Scene)
    }
    
    preload() {
        console.log('Soy Menu');
    }

}

export default Menu; // Esto seria un modulo