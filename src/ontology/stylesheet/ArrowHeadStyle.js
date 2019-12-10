export class ArrowHeadStyle {
    constructor (targetType) {
        this.targetType = targetType;
        this.ref = { x: 0, y: 0 }
    }

    static fromJson (ontologyStyle) {
        const arrowHeadStyle = new ArrowHeadStyle(ontologyStyle['target-type']);

        if (ontologyStyle['ref']) {
            arrowHeadStyle.ref = ontologyStyle['ref'];
        }

        if (ontologyStyle['representation']) {
            arrowHeadStyle.representation = ontologyStyle['representation'];
        }

        return arrowHeadStyle;
    }
}
