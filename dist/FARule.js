"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FARule {
    constructor(state, character, next_state) {
        this.state = state;
        this.character = character;
        this.next_state = next_state;
    }
    appliesTo(state, character) {
        return this.state === state && this.character === character;
    }
    follow() {
        return this.next_state;
    }
    toString() {
        return `<FARule ${this.state} --${this.character}--> ${this.next_state}>`;
    }
}
exports.default = FARule;
