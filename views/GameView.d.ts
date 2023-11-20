import { Pokemon } from '../models/Pokemon.js';
export declare class GameView {
    render(pokemon: Pokemon): void;
    failedAttempt(attempts: number): void;
    disableHints(): void;
    updateHints(hintCounter: number): void;
    rerollGame(): void;
    emptyModal(): void;
    updateModal(pokemon: Pokemon, hintCounter: number): void;
    triggerWin(pokemon: Pokemon): void;
    triggerGameOver(pokemon: Pokemon): void;
}
