"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const url_1 = tslib_1.__importDefault(require("url"));
const Megoldas_1 = tslib_1.__importDefault(require("./Megoldas"));
class Content {
    content(req, res) {
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs_1.default.createReadStream("favicon.ico").pipe(res);
            return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Lotto</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        const megold = new Megoldas_1.default("lottosz.txt");
        res.write("1. feladat:\t");
        const params = url_1.default.parse(req.url, true).query;
        let szamok = params.szamok;
        res.write(`<p>\tAdd meg a Lottószámokat szóközzel válaszd el.!: <input type='number' name='szamok'  style='width:3em;' onChange='this.form.submit();'></p>`);
        const m = szamok.split(" ");
        let szam52het = [];
        szam52het.push(parseInt(m[0]));
        szam52het.push(parseInt(m[1]));
        szam52het.push(parseInt(m[2]));
        szam52het.push(parseInt(m[3]));
        szam52het.push(parseInt(m[4]));
        szam52het.sort();
        res.write("2. feladat:\t");
        res.write(`<p>\t52.Hét nyerőszámai: ${szam52het}</p>`);
        res.write("3. feladat:\t");
        const paramss = url_1.default.parse(req.url, true).query;
        let het = parseInt(paramss.szamok);
        res.write(`<p>\tAdd meg hányadik heti nyerőszámra vagy kiváncsi!: <input type='number' name='szamok'  style='width:3em;' onChange='this.form.submit();'></p>`);
        res.write("4. feladat:\t");
        let negyes = megold.hanyadik[het - 1];
        res.write(`<p>${negyes}\t<p>`);
        res.write("5. feladat:\t");
        res.write(`<p>${megold.nemvoltszam}\t<p>`);
        res.write("6. feladat:\t");
        res.write(`<p>${megold.paratlan}\t<p>`);
        res.write("7. feladat:\t");
        res.write("8. feladat:\t");
        res.write(`<p>${megold.nyolcas}\t<p>`);
        res.write("9. feladat:\t");
        res.write(`<p>${megold.primszamok}\t<p>`);
        res.write("</pre></form></body></html>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=Content.js.map