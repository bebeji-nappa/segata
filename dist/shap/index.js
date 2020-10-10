"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shap = void 0;
exports.shap = (data) => {
    const dataArray = data.split('&');
    const map = new Map();
    for (const val of dataArray) {
        const mapData = val.split('=');
        map.set(mapData[0], decodeURIComponent(mapData[1]));
    }
    const text = map.get('text');
    return text;
};
