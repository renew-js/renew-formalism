export class TextStyle {
    constructor (targetType) {
        this.targetType = targetType;
        this.orientation = {
            position: 'center',
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }
        };
    }

    static fromJson (ontology) {
        const textStyle = new TextStyle(ontology['target-type']);
        if (ontology.orientation) {
            textStyle.orientation = ontology.orientation;
        }
        return textStyle;
    }
}
