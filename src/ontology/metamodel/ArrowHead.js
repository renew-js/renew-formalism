export class ArrowHead {
    constructor (type) {
        this.type = type;
    }

    static fromJson (raw) {
        return new ArrowHead(raw.type);
    }
}
