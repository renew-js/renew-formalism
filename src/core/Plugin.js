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
     * Get the corresponding serializer for the given format.
     * Serializers take export objects and turn them into string
     * representations.
     *
     * @abstract
     * @param  {string} format
     * @return {object}
     */
    getSerializer (format) {
        return null;
    }

    /**
     * Get the corresponding parser for the given format.
     * Parsers take a strings and turn them into importable objects.
     *
     * @abstract
     * @param  {string} format
     * @return {object}
     */
    getParser (format) {
        return null;
    }

}
