import FARule from './FARule';

class DFARulebook {
    constructor(private rules: FARule[]) {}

    nextState(state: number, character: string): number {
        return this.ruleFor(state, character).follow();
    }

    ruleFor(state: number, character: string): FARule {
        const rule = this.rules.find(rule => rule.appliesTo(state, character));
        if (!rule) {
            throw new Error(`No rule found for state ${state} and character ${character}`);
        }
        return rule;
    }
}

export default DFARulebook;