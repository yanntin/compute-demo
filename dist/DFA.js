"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DFA = void 0;
class DFA {
    constructor(currentState, acceptStates, rulebook) {
        this.currentState = currentState;
        this.acceptStates = acceptStates;
        this.rulebook = rulebook;
    }
    accepting() {
        return this.acceptStates.includes(this.currentState);
    }
    readCharacter(character) {
        this.currentState = this.rulebook.nextState(this.currentState, character);
    }
    readString(string) {
        string.split('').forEach(character => {
            this.readCharacter(character);
        });
    }
}
exports.DFA = DFA;
