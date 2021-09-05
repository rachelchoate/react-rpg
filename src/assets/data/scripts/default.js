/** @module assets/data/scripts/default */
import { rectanglesIntersect } from '../../../utils/mapUtils';
import HouseMapScript from './house';
import DefaultMap from '../maps/default.json';

const MAP_FEATURES = {
    doorToHouse: DefaultMap.tiles.filter((t) => t.id === 'door')[0],
};

class DefaultMapScript {
    id = DefaultMap.id;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.rootStore.map.init(DefaultMap);
    }

    execute = (args) => {
        /** enter house */
        if (rectanglesIntersect(MAP_FEATURES.doorToHouse, args)) this.rootStore.map.initScript(HouseMapScript);
    }
}

export default DefaultMapScript;
