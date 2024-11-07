"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DFARulebook {
    constructor(rules) {
        this.rules = rules;
    }
    nextState(state, character) {
        return this.ruleFor(state, character).follow();
    }
    ruleFor(state, character) {
        const rule = this.rules.find(rule => rule.appliesTo(state, character));
        if (!rule) {
            throw new Error(`No rule found for state ${state} and character ${character}`);
        }
        return rule;
    }
}
exports.default = DFARulebook;
