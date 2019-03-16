export class Relation {
    constructor (type) {
        this.type = type;
        this.labels = [];
        this.arrowStart = null;
        this.arrowEnd = null;
    }

    static fromJson (raw) {
        const relation = new Relation(raw.type);
        relation.bind = raw.bind;
        relation.arrowStart = raw['arrow-start'];
        relation.arrowEnd = raw['arrow-end'];
        raw.labels.forEach(label => relation.labels.push(label));
        return relation;
    }
}
