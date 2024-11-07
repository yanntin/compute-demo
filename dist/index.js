"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DFA_1 = require("./DFA");
const DFARulebook_1 = __importDefault(require("./DFARulebook"));
const FARule_1 = __importDefault(require("./FARule"));
let rulebook = new DFARulebook_1.default([
    new FARule_1.default(1, 'a', 2),
    new FARule_1.default(1, 'b', 1),
    new FARule_1.default(2, 'a', 2),
    new FARule_1.default(2, 'b', 3),
    new FARule_1.default(3, 'a', 3),
    new FARule_1.default(3, 'b', 3),
]);
let dfa = new DFA_1.DFA(1, [1, 3], rulebook);
dfa.readString('baaab');
console.log(dfa.accepting());
