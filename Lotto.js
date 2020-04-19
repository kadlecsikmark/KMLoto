"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lotto {
    constructor(sor) {
        const m = sor.split(" ");
        this._szam1 = parseInt(m[0]);
        this._szam2 = parseInt(m[1]);
        this._szam3 = parseInt(m[2]);
        this._szam4 = parseInt(m[3]);
        this._szam5 = parseInt(m[4]);
    }
    get szam1() {
        return this._szam1;
    }
    get szam2() {
        return this._szam2;
    }
    get szam3() {
        return this._szam3;
    }
    get szam4() {
        return this._szam4;
    }
    get szam5() {
        return this._szam5;
    }
}
exports.default = Lotto;
//# sourceMappingURL=Lotto.js.map