export class Relation {

    constructor (type) {
        this.type = type;
        this.arrowStart = null;
        this.arrowEnd = null;
    }

    static fromJson (raw) {
        const relation = new Relation(raw.type);
        relation.bind = raw.bind;

        if (raw['arrow-start']) {
            relation.arrowStart = raw['arrow-start'];
        }

        if (raw['arrow-end']) {
            relation.arrowEnd = raw['arrow-end'];
        }

        return relation;
    }

}
