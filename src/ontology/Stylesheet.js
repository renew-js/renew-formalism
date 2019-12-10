import { ArrowHeadStyle } from './stylesheet/ArrowHeadStyle';
import { ClassifierStyle } from './stylesheet/ClassifierStyle';
import { RelationStyle } from './stylesheet/RelationStyle';
import { TextStyle } from './stylesheet/TextStyle';


export class Stylesheet {
    constructor () {
        this.styles = {};
    }

    getStyle (type) {
        return this.styles[type];
    }

    /**
     *
     * @param {Object} ontology
     * @return {Stylesheet}
     */
    static fromJson (ontology) {
        const stylesheet = new Stylesheet();

        if (ontology['classifier-styles']) {
            ontology['classifier-styles'].forEach((style) => {
                const classifierStyle = ClassifierStyle.fromJson(style);
                stylesheet.styles[classifierStyle.targetType] = classifierStyle;
            });
        }

        if (ontology['relation-styles']) {
            ontology['relation-styles'].forEach((style) => {
                const relationStyle = RelationStyle.fromJson(style);
                stylesheet.styles[relationStyle.targetType] = relationStyle;
            });
        }

        if (ontology['arrow-head-styles']) {
            ontology['arrow-head-styles'].forEach((style) => {
                const arrowHeadStyle = ArrowHeadStyle.fromJson(style);
                stylesheet.styles[arrowHeadStyle.targetType] = arrowHeadStyle;
            });
        }

        if (ontology['text-styles']) {
            ontology['text-styles'].forEach((style) => {
                const textStyle = TextStyle.fromJson(style);
                stylesheet.styles[textStyle.targetType] = textStyle;
            });
        }

        return stylesheet;
    }
}
