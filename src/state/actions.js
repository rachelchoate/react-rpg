/** @module state/actions */
import { makeObservable, action } from 'mobx';

/**
* @description handle user actions
*/
class Actions {
    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            handleKeyPress: action,
        });
    }

    handleKeyPress = (e) => {
        e.preventDefault();
        console.log(e);
        switch(e.code) {
            case 'KeyW':
            case 'ArrowUp':
                this.rootStore.player.move('up');
                break;
            case 'KeyS':
            case 'ArrowDown':
                this.rootStore.player.move('down');
                break;
            case 'KeyA':
            case 'ArrowLeft':
                this.rootStore.player.move('left');
                break;
            case 'KeyD':
            case 'ArrowRight':
                this.rootStore.player.move('right');
                break;
            default:
                break;
        }
    }
}

export default Actions;
