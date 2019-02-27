export class Classifier {
    constructor (type) {
        this.type = type;
        this.labels = [];
    }

    static fromJson (raw) {
        const classifier = new Classifier(raw.type);
        classifier.labels = raw.labels;
        return classifier;
    }
}
