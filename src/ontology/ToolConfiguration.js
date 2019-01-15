export class ToolConfiguration {

    constructor () {
        this.modelingToolDefinitions = {
            toolName: '',
            targetModel: '',
            fileDescription: '',
            fileExtension: ''
        };
        this.toolMappings = [];
    }

    /**
     *
     * @param {Object} toolConfiguration
     * @return {ToolConfiguration}
     */
    static fromJson (toolConfiguration) {
        let configuration = new ToolConfiguration();
        return configuration;
    }

}
