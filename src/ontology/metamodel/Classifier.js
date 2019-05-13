export class Classifier {

    constructor (type) {
        this.type = type;
    }

    static fromJson (raw) {
        const classifier = new Classifier(raw.type);
        return classifier;
    }

}
