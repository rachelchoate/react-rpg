/** @module assets/data/scripts/house */
import { rectanglesIntersect } from '../../../utils/mapUtils';
import DefaultMapScript from './default';
import HouseMap from '../maps/house.json';

const MAP_FEATURES = {
    frontDoor: HouseMap.tiles.filter((t) => t.id === 'frontDoor')[0],
};

class HouseMapScript {
    id = HouseMap.id;

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.rootStore.map.init(HouseMap);
    }

    execute = (args) => {
        /** exit house */
        if (rectanglesIntersect(MAP_FEATURES.frontDoor, args)) this.rootStore.map.initScript(DefaultMapScript);
    };
}

export default HouseMapScript;
