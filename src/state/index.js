/** @module state */
import Map from './map';
import Player from './player';
import Actions from './actions';
import Dialogue from './dialogue';

/**
* @description mobx root store
*/
class RootStore {
    constructor() {
        this.map = new Map(this);
        this.player = new Player(this);
        this.actions = new Actions(this);
        this.dialogue = new Dialogue(this);
    }
}

const Store = new RootStore();

export default Store;
