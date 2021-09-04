/** @module state/dialogue */
import { makeObservable, action, observable } from 'mobx';

/**
* @description dialogue state
*/
class Dialogue {
    content = '';

    title = null;

    show = false;

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeObservable(this, {
            content: observable,
            title: observable,
            show: observable,
            setContent: action,
            setTitle: action,
            setShow: action,
        });
    }

    setContent = (content) => {
        this.content = content;
    }

    setTitle = (title) => {
        this.title = title;
    }

    setShow = (show) => {
        this.show = show;
    }
}

export default Dialogue;
