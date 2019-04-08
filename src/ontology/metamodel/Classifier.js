export class Classifier {
    constructor (type) {
        this.type = type;
    }

    static fromJson (raw) {
        return new Classifier(raw.type);
    }
}
