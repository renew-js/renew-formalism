import { ToolMapping } from './toolconfiguration/ToolMapping';


export class ToolConfiguration {
    constructor () {
        this.toolName = '';
        this.targetModel = '';
        this.fileDescription = '';
        this.fileExtension = '';
        this.toolMappings = [];
    }

    /**
     *
     * @param {Object} toolConfiguration
     * @return {ToolConfiguration}
     */
    static fromJson (toolConfiguration) {
        const configuration = new ToolConfiguration();
        configuration.toolName = toolConfiguration['tool-name'];
        configuration.targetModel = toolConfiguration['target-model'];
        configuration.fileDescription = toolConfiguration['file-description'];
        configuration.fileExtension = toolConfiguration['file-extension'];
        try {
            toolConfiguration['tool-mappings'].forEach((mapping) => {
                configuration.toolMappings.push(ToolMapping.fromJson(mapping));
            });
        } catch (e) {
            console.error(e);
            console.log('no tool mappings');
        }
        return configuration;
    }
}
