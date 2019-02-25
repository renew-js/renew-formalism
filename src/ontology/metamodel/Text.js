export class Text {
    constructor (type) {
        this.type = type;
    }

    static fromJson (raw) {
        return new Text(raw.type);
    }
}
