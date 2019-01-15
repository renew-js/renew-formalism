export class MetaModel {
    constructor () {
        this.type = '';
        this.classifiers = [];
        this.relations = [];
    }

    /**
     * @param {Object} metaModel
     * @return {MetaModel}
     */
    static fromJson (metaModel) {
        const model = new MetaModel();
        model.type = metaModel.type;
        model.classifiers = metaModel.classifiers;
        model.relations = metaModel.relations;
        model.texts = metaModel.texts;
        return model;
    }
}
