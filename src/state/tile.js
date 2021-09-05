/** @module state/tile */
import { makeObservable, action, observable } from 'mobx';
import { rectanglesIntersect } from '../utils/mapUtils';

/**
* @description mobx class for tile instance
*/
class Tile {
    id = null;

    top = 0;

    left = 0;

    height = 0;

    width = 0;

    walkable = false;

    background = '';

    constructor(rootStore, tileDef) {
        this.rootStore = rootStore;
        makeObservable(this, {
            id: observable,
            top: observable,
            left: observable,
            height: observable,
            width: observable,
            walkable: observable,
            background: observable,
            init: action,
            setId: action,
            setBoundaries: action,
            setWalkable: action,
            setBackground: action,
        });
        if (tileDef) this.init(tileDef);
    }

    init = (tileDef) => {
        if (tileDef.id) this.id = tileDef.id;
        if (tileDef.top) this.top = tileDef.top;
        if (tileDef.left) this.left = tileDef.left;
        if (tileDef.height) this.height = tileDef.height;
        if (tileDef.width) this.width = tileDef.width;
        if (tileDef.walkable) this.walkable = tileDef.walkable;
        if (tileDef.background) this.background = tileDef.background;
    }

    setId = (id) => {
        this.id = id;
    }

    setBoundaries = (boundaries) => {
        this.boundaries = boundaries;
    }

    setWalkable = (walkable) => {
        this.walkable = walkable;
    }

    setBackground = (background) => {
        this.background = background;
    }

    conflictsWith = (shape) => {
        return rectanglesIntersect({
            top: this.top,
            left: this.left,
            height: this.height,
            width: this.width,
        }, shape);
    }
}

export default Tile;
