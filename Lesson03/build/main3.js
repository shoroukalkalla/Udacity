"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.add(3, 4));
console.log(lodash_1.default.dropRight([1, 2, 3, 4, 5], 2));
console.log(lodash_1.default.dropRight(['A', 'B', 'C', 'D', 'E'], 1));
