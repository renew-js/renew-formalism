/**
 * @abstract
 */
export default class Plugin {

    constructor () {
        this.type = null;
    }

    /**
     * @abstract
     * @return {MetaModel}
     */
    getMetaModel () {
        return null;
    }

    /**
     * @abstract
     * @return {Stylesheet}
     */
    getStylesheet () {
        return null;
    }

    /**
     * @abstract
     * @return {ToolConfiguration}
     */
    getToolConfiguration () {
        return null;
    }

    /**
     * @abstract
     * @param  {string} format
     * @return {string}
     */
    getSerializer (format) {
        return null;
    }

    /**
     * @abstract
     * @param  {string} format
     * @return {object}
     */
    getParser (format) {
        return null;
    }

}
