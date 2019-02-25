export class Relation {
    constructor (type) {
        this.type = type;
    }

    static fromJson (raw) {
        const relation = new Relation(raw.type);
        relation.bind = raw.bind;
        return relation;
    }
}
