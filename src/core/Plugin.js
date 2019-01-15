/**
 * @abstract
 */
export default class Plugin {
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
}
