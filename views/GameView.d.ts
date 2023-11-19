import { Pokemon } from '../models/Pokemon.js';
export declare class GameView {
    render(pokemon: Pokemon): void;
    failedAttempt(attempts: number): void;
    disableHints(): void;
    rerollGame(): void;
    triggerWin(pokemon: Pokemon): void;
    triggerGameOver(pokemon: Pokemon): void;
}
