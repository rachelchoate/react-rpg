/** @module state/player */
import { makeObservable, action, observable } from 'mobx';

/**
* @description player data store
*/
class Player {
    x = 0;

    y = 0;

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            x: observable,
            y: observable,
            setPos: action,
        });
    }

    setPos = ([x, y]) => {
        this.x = x;
        this.y = y;
    }

    move = (direction) => {
        const newPos = Object.assign([], [this.x, this.y]);
        switch(direction) {
            case 'up':
                newPos[0] -= this.rootStore.map.tileHeight;
                break;
            case 'down':
                newPos[0] += this.rootStore.map.tileHeight;
                break;
            case 'left':
                newPos[1] -= this.rootStore.map.tileWidth;
                break;
            case 'right':
                newPos[1] += this.rootStore.map.tileWidth;
                break;
            default:
                break;
        }
        const xBoundary = this.rootStore.map.height - this.rootStore.map.tileHeight;
        const yBoundary = this.rootStore.map.width - this.rootStore.map.tileWidth;
        if (newPos[0] <= xBoundary && newPos[0] >= 0
            && newPos[1] <= yBoundary && newPos[1] >= 0) {
            this.setPos(newPos);
        }
    }
}

export default Player;
