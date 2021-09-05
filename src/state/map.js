/** @module state/map */
import { makeObservable, observable, action } from 'mobx';
import Tile from './tile';
import DefaultMap from '../assets/data/maps/default.json';

/**
* @description mobx store for map state
*/
class MapStore {
    id = null;

    height = 500;

    width = 1000;

    tileHeight = 20;

    tileWidth = 20;

    background = 'grey';

    tiles = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            id: observable,
            height: observable,
            width: observable,
            tileHeight: observable,
            tileWidth: observable,
            tiles: observable,
            background: observable,
            init: action,
            setId: action,
            setBackground: action,
            setHeight: action,
            setWidth: action,
            setTileHeight: action,
            setTileWidth: action,
            setTiles: action,
        });
        this.init(DefaultMap);
    }

    init = (mapDef) => {
        if (mapDef.id) this.id = mapDef.id;
        if (mapDef.background) this.background = mapDef.background;
        if (mapDef.tiles) this.tiles = mapDef.tiles.map((t) => new Tile(this.rootStore, t));
    }

    setId = (id) => {
        this.id = id;
    }

    setBackground = (bg) => {
        this.background = bg;
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

    setTiles = (tiles) => {
        this.tiles = tiles;
    }

    isInBounds = ([x, y]) => {
        const xBoundary = this.height - this.tileHeight;
        const yBoundary = this.width - this.tileWidth;
        if (x <= xBoundary && x >= 0 && y <= yBoundary && y >= 0) return true;
        return false;
    }

    conflictsWith = (shape) => this.tiles.filter((tile) => tile.conflictsWith(shape));
}

export default MapStore;
