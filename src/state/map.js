/** @module state/map */
import { makeObservable, observable, action } from 'mobx';

/**
* @description mobx store for map state
*/
class MapStore {
    height = 500;

    width = 1000;

    tileHeight = 20;

    tileWidth = 20;

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            height: observable,
            width: observable,
            tileHeight: observable,
            tileWidth: observable,
            setHeight: action,
            setWidth: action,
            setTileHeight: action,
            setTileWidth: action,
        });
    }

    setHeight = (height) => {
        this.height = height;
    }

    setWidth = (width) => {
        this.width = width;
    }

    setTileHeight = (height) => {
        this.tileHeight = height;
    }

    setTileWidth = (width) => {
        this.tileWidth = width;
    }
}

export default MapStore;
