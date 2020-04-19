export default class SMS {
    private _nap;
    private _sorszam;
    private _ut;
    private _fizetes;
    constructor(sor: string);
    get nap(): number;
    get sorszam(): number;
    get ut(): number;
    get fiz(): number;
    fizetesMegallapitas(utHossza: number): number;
}
