/** @module state/actions */
import { makeObservable, action } from 'mobx';
import DefaultMapScript from '../assets/data/scripts/default';

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
            case 'Enter':
                break;
            default:
                break;
        }
    }

    loadMap = (mapScript) => {
        if (!mapScript) {
            this.rootStore.map.initScript(DefaultMapScript);
        } else {
            this.rootStore.map.initScript(mapScript);
        }
    }
}

export default Actions;
