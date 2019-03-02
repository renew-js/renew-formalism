export class Relation {
    constructor (type) {
        this.type = type;
        this.labels = [];
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
