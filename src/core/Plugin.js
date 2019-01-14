/**
 * @abstract
 */
export class Plugin {

    /**
     * @abstract
     * @returns object
     */
    getMetaModel () {
        return {};
    }

    /**
     * @abstract
     * @returns object
     */
    getStylesheet () {
        return {};
    }

    /**
     * @abstract
     * @returns object
     */
    getToolConfiguration () {
        return {};
    }

}
