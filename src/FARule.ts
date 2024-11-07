class FARule {
    constructor(
        private state: number,
        private character: string,
        private next_state: number
    ) {}

    appliesTo(state: number, character: string): boolean {
        return this.state === state && this.character === character;
    }

    follow(): number {
        return this.next_state;
    }

    toString(): string {
        return `<FARule ${this.state} --${this.character}--> ${this.next_state}>`;
    }
}

export default FARule;