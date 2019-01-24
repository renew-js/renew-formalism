import { ClassifierStyle } from './stylesheet/ClassifierStyle';
import { RelationStyle } from './stylesheet/RelationStyle';


export class Stylesheet {
    constructor (props) {
        this.classifierStyles = [];
        this.relationStyles = [];
        this.textStyles = [];
    }

    /**
     *
     * @param {Object} ontology
     * @return {Stylesheet}
     */
    static fromJson (ontology) {
        const stylesheet = new Stylesheet();
        ontology['classifier-styles'].forEach((style) => {
            stylesheet.classifierStyles.push(ClassifierStyle.fromJson(style));
        });
        ontology['relation-styles'].forEach((style) => {
            stylesheet.relationStyles.push(RelationStyle.fromJson(style));
        });
        return stylesheet;
    }
}
