export class Stylesheet {
    constructor (props) {
        this.classifierStyles = [];
        this.relationStyles = [];
        this.textStyles = [];
    }

    /**
     *
     * @param {Object} stylesheet
     * @return {Stylesheet}
     */
    static fromJson (stylesheet) {
        const style = new Stylesheet();
        return style;
    }
}
