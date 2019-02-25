export class ArrowHeadStyle {
    constructor (targetType) {
        this.targetType = targetType;
    }

    static fromJson (ontologyStyle) {
        const arrowHeadStyle = new ArrowHeadStyle(ontologyStyle['target-type']);
        arrowHeadStyle.representation = ontologyStyle['representation'];
        return arrowHeadStyle;
    }
}
