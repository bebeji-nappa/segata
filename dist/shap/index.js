"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shap = void 0;
exports.shap = (data) => {
    let dataArray = data.split('&');
    let map = new Map();
    for (const val of dataArray) {
        let mapData = val.split('=');
        map.set(mapData[0], decodeURIComponent(mapData[1]));
    }
    console.log(map);
    const text = map.get('text');
    return text;
};
