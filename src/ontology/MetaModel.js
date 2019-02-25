import { ArrowHead } from './metamodel/ArrowHead';
import { Classifier } from './metamodel/Classifier';
import { Relation } from './metamodel/Relation';
import { Text } from './metamodel/Text';


export class MetaModel {
    constructor () {
        this.type = '';
        this.classifiers = [];
        this.relations = [];
        this.arrowHeads = [];
        this.texts = [];
    }

    getElements () {
        return this.classifiers.concat(this.relations).concat(this.texts);
    }

    /**
     * @param {Object} metaModel
     * @return {MetaModel}
     */
    static fromJson (metaModel) {
        const model = new MetaModel();
        model.type = metaModel.type;
        model.classifiers = (metaModel.classifiers || []).map((raw) => {
            return Classifier.fromJson(raw);
        });
        model.relations = (metaModel.relations || []).map((raw) => {
            return Relation.fromJson(raw);
        });
        model.arrowHeads = (metaModel['arrow-heads'] || []).map((raw) => {
            return ArrowHead.fromJson(raw);
        });
        model.texts = (metaModel.texts || []).map((raw) => {
            return Text.fromJson(raw);
        });
        return model;
    }
}
