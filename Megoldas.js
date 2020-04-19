"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const Lotto_1 = tslib_1.__importDefault(require("./Lotto"));
class Megoldas {
    constructor(forrás) {
        this.Lottok = [];
        fs_1.default.readFileSync(forrás)
            .toString()
            .split("\n")
            .forEach(i => {
            const aktSor = i.trim();
            if (aktSor.length > 0)
                this.Lottok.push(new Lotto_1.default(aktSor));
        });
    }
    get hanyadik() {
        return this.Lottok;
    }
    get nemvoltszam() {
        let j = 1;
        let tarol = "";
        for (const i of this.Lottok) {
            if (i.szam1 == j || i.szam2 == j || i.szam3 == j || i.szam4 == j || i.szam1 == j) {
                j++;
                return "Van";
            }
            else {
                j++;
                tarol = "Nincs";
            }
        }
        return tarol;
    }
    get paratlan() {
        let db;
        db = 0;
        for (const i of this.Lottok) {
            if (i.szam1 % 2 != 0) {
                db++;
            }
            if (i.szam2 % 2 != 0) {
                db++;
            }
            if (i.szam3 % 2 != 0) {
                db++;
            }
            if (i.szam4 % 2 != 0) {
                db++;
            }
            if (i.szam5 % 2 != 0) {
                db++;
            }
        }
        return db;
    }
    get nyolcas() {
        let db;
        db = 0;
        let j = 1;
        let tarol = "";
        for (let j = 1; j < 90; j++) {
            for (const i of this.Lottok) {
                if (i.szam1 == j) {
                    db++;
                }
                if (i.szam2 == j) {
                    db++;
                }
                if (i.szam3 == j) {
                    db++;
                }
                if (i.szam4 == j) {
                    db++;
                }
                if (i.szam5 == j) {
                    db++;
                }
            }
            if (j % 15 == 0) {
                tarol += db + "\n";
            }
            else {
                tarol += db + "";
            }
        }
        return tarol;
    }
    get primszamok() {
        let j = 0;
        let prim = 0;
        let primek = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89];
        for (const i of this.Lottok) {
            if (i.szam1 == primek[j] || i.szam2 == primek[j] || i.szam3 == primek[j] || i.szam4 == primek[j] || i.szam1 == primek[j]) {
                j++;
            }
            else {
                j++;
                prim = primek[j];
            }
        }
        return prim;
    }
}
exports.default = Megoldas;
//# sourceMappingURL=Megoldas.js.map