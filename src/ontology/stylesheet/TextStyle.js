export class TextStyle {
    constructor (targetType) {
        this.targetType = targetType;
        this.position = 'center';
    }

    static fromJson (ontology) {
        const textStyle = new TextStyle(ontology['target-type']);
        if (ontology.position) {
            textStyle.position = ontology.position;
        }
        return textStyle;
    }
}
