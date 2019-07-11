import { Orientation } from './orientation/Orientation';

export class TextStyle {

    constructor (targetType) {
        this.targetType = targetType;
        this.boundingBox = {
            width: 150,
            height: 50,
        };
        this.orientation = new Orientation('center');
    }

    static fromJson (ontology) {
        const textStyle = new TextStyle(ontology['target-type']);
        if (ontology['bounding-box']) {
            textStyle.boundingBox = ontology['bounding-box'];
        }
        if (ontology.orientation) {
            textStyle.orientation = Orientation.fromJson(ontology.orientation);
        }
        return textStyle;
    }

}
