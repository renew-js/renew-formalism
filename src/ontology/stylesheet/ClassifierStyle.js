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

        if (ontologyStyle['default-dimension']) {
            classifierStyle.setDimension(
                ontologyStyle['default-dimension'].width,
                ontologyStyle['default-dimension'].height
            );
        }

        if (ontologyStyle['representation']) {
            classifierStyle.representation = ontologyStyle['representation'];
        }

        if (ontologyStyle['background-color']) {
            classifierStyle.backgroundColor = ontologyStyle['background-color'];
        }

        if (ontologyStyle['line-color']) {
            classifierStyle.lineColor = ontologyStyle['line-color'];
        }

        if (ontologyStyle['line-style']) {
            classifierStyle.lineStyle = ontologyStyle['line-style'];
        }

        return classifierStyle;
    }
}
