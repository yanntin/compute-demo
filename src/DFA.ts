import DFARulebook from "./DFARulebook";

export class DFA {
    constructor(
        private currentState: number,
        private acceptStates: number[],
        private rulebook: DFARulebook
    ) {}

    accepting(): boolean {
        return this.acceptStates.includes(this.currentState);
    }

    readCharacter(character: string): void {
        this.currentState = this.rulebook.nextState(this.currentState, character);
    }

    readString(string: string): void {
        string.split('').forEach(character => {
            this.readCharacter(character);
        });
    }
}
