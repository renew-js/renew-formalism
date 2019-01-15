export class MetaModel {
    constructor () {
        this.type = '';
        this.classifiers = [];
        this.relations = [];
    }

    /**
     *
     * @param {Object} metaModel
     * @return {MetaModel}
     */
    static fromJson (metaModel) {
        const model = new MetaModel();
        return model;
    }
}
