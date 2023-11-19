type PokemonType = "GRASS" | "STEEL" | "ROCK" | "FIRE" | "WATER" | "ELECTRIC" | "GROUND" | "NORMAL" | "POISON" | "GHOST" | "ICE" | "FLYING" | "FAIRY" | "FIGHTING" | "BUG" | "DARK" | "DRAGON" | "PSYCHIC";
type GenType = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII" | "IX";
interface PokemonInfo {
    name: string;
    type: PokemonType[];
    imgPath: string;
    gen: GenType;
    resists?: PokemonType[] | unknown;
    weakTo?: PokemonType[] | unknown;
}
export declare class Pokemon implements PokemonInfo {
    private _name;
    private _type;
    private _imgPath;
    private _gen;
    private _resists?;
    private _weakTo?;
    constructor({ name, type, imgPath, gen }: PokemonInfo, resists?: PokemonType[] | unknown, weakTo?: PokemonType[] | unknown);
    setResists(resists: PokemonType[] | unknown): void;
    setWeakTo(weakTo: PokemonType[] | unknown): void;
    get name(): string;
    get type(): PokemonType[];
    get imgPath(): string;
    get gen(): GenType;
    get resists(): PokemonType[] | unknown;
    get weakTo(): PokemonType[] | unknown;
}
export {};
