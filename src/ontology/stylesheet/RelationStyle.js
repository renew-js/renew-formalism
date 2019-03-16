export class RelationStyle {
    constructor (targetType) {
        this.targetType = targetType;
    }

    static fromJson (ontologyStyle) {
        const relationStyle = new RelationStyle(ontologyStyle['target-type']);
        return relationStyle;
    }
}
