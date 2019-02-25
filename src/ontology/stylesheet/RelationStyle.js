export class RelationStyle {
    constructor (targetType) {
        this.targetType = targetType;
        this.arrowStart = null;
        this.arrowEnd = null;
    }

    static fromJson (ontologyStyle) {
        const relationStyle = new RelationStyle(ontologyStyle['target-type']);
        return relationStyle;
    }
}
