import Lotto from "./Lotto";
export default class Megoldas {
    Lottok: Lotto[];
    constructor(forrás: string);
    get hanyadik(): Lotto[];
    get nemvoltszam(): string;
    get paratlan(): number;
    get nyolcas(): string;
    get primszamok(): number;
}
