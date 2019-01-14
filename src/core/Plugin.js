/**
 * @abstract
 */
export class Plugin {

    /**
     * @abstract
     * @returns MetaModel
     */
    getMetaModel () { return null; }

    /**
     * @abstract
     * @returns Stylesheet
     */
    getStylesheet () { return null; }

    /**
     * @abstract
     * @returns ToolConfiguration
     */
    getToolConfiguration () { return null; }

}
