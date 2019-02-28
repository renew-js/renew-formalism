export class Orientation {
    constructor (position) {
        this.position = position;
        if (position instanceof Object) {
            this.position = 'absolute';
            this.x = position.x;
            this.y = position.y;
        }
        this.margin = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        };
    }

    static fromJson (ontology) {
        const orientation = new Orientation(ontology.position);

        if (ontology.margin) {
            if (ontology.margin.top) {
                orientation.margin.top = ontology.margin.top;
            }
            if (ontology.margin.right) {
                orientation.margin.right = ontology.margin.right;
            }
            if (ontology.margin.bottom) {
                orientation.margin.bottom = ontology.margin.bottom;
            }
            if (ontology.margin.left) {
                orientation.margin.left = ontology.margin.left;
            }
        }
        if (ontology['margin-top']) {
            orientation.margin.top = ontology['margin-top'];
        }
        if (ontology['margin-right']) {
            orientation.margin.right = ontology['margin-right'];
        }
        if (ontology['margin-bottom']) {
            orientation.margin.bottom = ontology['margin-bottom'];
        }
        if (ontology['margin-left']) {
            orientation.margin.left = ontology['margin-left'];
        }


        if (ontology.x) {
            orientation.x = ontology.x;
        }
        if (ontology.y) {
            orientation.y = ontology.y;
        }
        if (ontology.dx) {
            orientation.dx = ontology.dx;
        }
        if (ontology.dy) {
            orientation.dy = ontology.dy;
        }

        if (ontology.direction) {
            orientation.direction = ontology.direction;
        }
        if (ontology.degree) {
            orientation.degree = ontology.degree;
        }

        return orientation;
    }
}
 