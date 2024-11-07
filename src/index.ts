import { DFA } from './DFA';
import DFARulebook from './DFARulebook';
import FARule from './FARule';

let rulebook = new DFARulebook([
    new FARule(1, 'a', 2),
    new FARule(1, 'b', 1),
    new FARule(2, 'a', 2),

    new FARule(2, 'b', 3),
    new FARule(3, 'a', 3),
    new FARule(3, 'b', 3),
]);

let dfa = new DFA(1, [1, 3], rulebook);
dfa.readString('baaab');
console.log(dfa.accepting());