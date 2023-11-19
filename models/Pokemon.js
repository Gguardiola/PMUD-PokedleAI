export class Pokemon {
    constructor({ name, type, imgPath, gen }, resists, weakTo) {
        this._name = name;
        this._type = type;
        this._imgPath = imgPath;
        this._gen = gen;
        if (resists !== undefined)
            this.setResists(resists);
        if (weakTo !== undefined)
            this.setWeakTo(weakTo);
    }
    setResists(resists) {
        this._resists = resists;
    }
    setWeakTo(weakTo) {
        this._weakTo = weakTo;
    }
    get name() { return this._name; }
    get type() { return this._type; }
    get imgPath() { return this._imgPath; }
    get gen() { return this._gen; }
    get resists() { return this._resists; }
    get weakTo() { return this._weakTo; }
}
//# sourceMappingURL=Pokemon.js.map