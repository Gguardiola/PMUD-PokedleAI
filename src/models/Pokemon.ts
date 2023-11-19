type PokemonType = "GRASS" | "STEEL" | "ROCK" | "FIRE" | 
                   "WATER" | "ELECTRIC" | "GROUND" | "NORMAL" | 
                   "POISON" | "GHOST" | "ICE" | "FLYING" | "FAIRY" |
                   "FIGHTING" | "BUG" | "DARK" | "DRAGON" | "PSYCHIC";

type GenType = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII" | "VIII" | "IX";

interface PokemonInfo{
    name: string;
    type : PokemonType[];
    imgPath: string;
    gen: GenType;
    resists? : PokemonType[] | unknown;
    weakTo? : PokemonType[] | unknown;
}

export class Pokemon implements PokemonInfo{

    private _name: string;
    private _type : PokemonType[];
    private _imgPath: string;
    private _gen: GenType;
    private _resists? : PokemonType[] | unknown;
    private _weakTo? : PokemonType[] | unknown;

    constructor({name, type, imgPath, gen} : PokemonInfo, resists? : PokemonType[] | unknown, weakTo? : PokemonType[] | unknown) {
        this._name = name;
        this._type = type;
        this._imgPath = imgPath;
        this._gen = gen;
        if(resists !== undefined) this.setResists(resists);
        if(weakTo !== undefined) this.setWeakTo(weakTo);
    }

    //setters (opcional)
    setResists(resists : PokemonType[] | unknown): void{
        this._resists = resists;
    }

    setWeakTo(weakTo : PokemonType[] | unknown): void{
        this._weakTo = weakTo;
    }

    //getters
    get name(): string { return this._name}
    get type(): PokemonType[] { return this._type}
    get imgPath(): string { return this._imgPath}
    get gen(): GenType { return this._gen}
    get resists() : PokemonType[] | unknown {return this._resists}
    get weakTo() : PokemonType[] | unknown {return this._weakTo}

}
