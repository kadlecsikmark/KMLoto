"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SMS {
    constructor(sor) {
        const m = sor.split(" ");
        this._nap = parseInt(m[0]);
        this._sorszam = parseInt(m[1]);
        this._ut = parseInt(m[2]);
        this._fizetes = this.fizetesMegallapitas(this._ut);
    }
    get nap() {
        return this._nap;
    }
    get sorszam() {
        return this._sorszam;
    }
    get ut() {
        return this._ut;
    }
    get fiz() {
        return this._fizetes;
    }
    fizetesMegallapitas(utHossza) {
        let fizu = 0;
        if (utHossza > 0 && utHossza < 3) {
            fizu = 500;
        }
        else if (utHossza > 2 && utHossza < 6) {
            fizu = 700;
        }
        else if (utHossza > 5 && utHossza < 11) {
            fizu = 900;
        }
        else if (utHossza > 10 && utHossza < 21) {
            fizu = 1400;
        }
        else if (utHossza > 20 && utHossza < 31) {
            fizu = 2000;
        }
        return fizu;
    }
}
exports.default = SMS;
//# sourceMappingURL=SMS.js.map