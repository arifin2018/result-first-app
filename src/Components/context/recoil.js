import { atom } from 'recoil';


const newsCnn = atom({
    key: 'newsCnn', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

export {newsCnn}