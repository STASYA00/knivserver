"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_keys = get_keys;
exports.get_listkeys = get_listkeys;
exports.onlyUnique = onlyUnique;
function get_keys(en, value) {
    return [...Object.values(en)]
        .filter((v) => v.toLowerCase() === value.toLowerCase())
        .map((k) => k);
}
function get_listkeys(en, value) {
    return [...en.entries()]
        .filter(({ 1: v }) => v.map((k) => k.toLowerCase()).includes(value.toLowerCase()))
        .map(([k]) => k);
}
function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}
