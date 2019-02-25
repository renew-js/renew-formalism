import { ClassifierStyle } from './stylesheet/ClassifierStyle';
import { RelationStyle } from './stylesheet/RelationStyle';


export class Stylesheet {
    constructor (props) {
        this.styles = {};
    }

    /**
     *
     * @param {Object} ontology
     * @return {Stylesheet}
     */
    static fromJson (ontology) {
        const stylesheet = new Stylesheet();
        ontology['classifier-styles'].forEach((style) => {
            const classifierStyle = ClassifierStyle.fromJson(style);
            stylesheet.styles[classifierStyle.targetType] = classifierStyle;
        });
        ontology['relation-styles'].forEach((style) => {
            const relationStyle = RelationStyle.fromJson(style);
            stylesheet.styles[relationStyle.targetType] = relationStyle;
        });
        return stylesheet;
    }
}
