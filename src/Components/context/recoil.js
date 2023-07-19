import { atom } from 'recoil';


const newsCnn = atom({
    key: 'newsCnn', // unique ID (with respect to other atoms/selectors)
    default: {}, // default value (aka initial value)
});

const newsCategory = atom({
    key: 'terbaru', // unique ID (with respect to other atoms/selectors)
    default: 'terbaru', // default value (aka initial value)
});

export {newsCnn,newsCategory}