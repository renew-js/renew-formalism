export class ClassifierStyle {
    constructor (targetType) {
        this.targetType = targetType;
        this.backgroundColor = 'white';
        this.lineColor = 'black';
        this.lineStyle = 'normal-line';
        this.defaultDimension = { width: 0, height: 0 };
    }

    setDimension (width, height) {
        this.defaultDimension = {
            width: width,
            height: height,
        };
    }

    static fromJson (ontologyStyle) {
        let classifierStyle = new ClassifierStyle(ontologyStyle['target-type']);
        classifierStyle.setDimension(
            ontologyStyle['default-dimension'].width,
            ontologyStyle['default-dimension'].height
        );
        classifierStyle.representation = ontologyStyle['representation'];
        classifierStyle.backgroundColor = ontologyStyle['background-color'];
        classifierStyle.lineColor = ontologyStyle['line-color'];
        classifierStyle.lineStyle = ontologyStyle['line-style'];
        return classifierStyle;
    }
}
