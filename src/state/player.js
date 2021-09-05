/** @module state/player */
import { makeObservable, action, observable } from 'mobx';

/**
* @description player data store
*/
class Player {
    x = 0;

    y = 0;

    height = 20;

    width = 20;

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            x: observable,
            y: observable,
            height: observable,
            width: observable,
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
        if (this.rootStore.map.isInBounds(newPos)) {
            const playerShape = {
                top: newPos[0],
                left: newPos[1],
                height: this.height,
                width: this.width,
                pos: newPos,
            };
            let conflicts = this.rootStore.map.conflictsWith(playerShape);
            conflicts = conflicts.filter((tile) => !tile.walkable);
            if (!conflicts.length) this.setPos(newPos);
            this.rootStore.map.script.execute(playerShape);
        }
    }
}

export default Player;
