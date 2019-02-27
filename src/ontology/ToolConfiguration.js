import { ContextToolMapping } from './toolconfiguration/ContextToolMapping';
import { ToolMapping } from './toolconfiguration/ToolMapping';


export class ToolConfiguration {
    constructor () {
        this.toolName = '';
        this.targetModel = '';
        this.fileDescription = '';
        this.fileExtension = '';
        this.toolMappings = {};
        this.contextToolMappings = {};
    }

    /**
     *
     * @param {Object} ontology
     * @return {ToolConfiguration}
     */
    static fromJson (ontology) {
        const config = new ToolConfiguration();
        config.toolName = ontology['tool-name'];
        config.targetModel = ontology['target-model'];
        config.fileDescription = ontology['file-description'];
        config.fileExtension = ontology['file-extension'];
        ontology['tool-mappings'].forEach((mapping) => {
            const toolMapping = ToolMapping.fromJson(mapping);
            config.toolMappings[toolMapping.targetType] = toolMapping;
        });
        ontology['context-tool-mappings'].forEach((mapping) => {
            const toolMapping = ContextToolMapping.fromJson(mapping);
            config.contextToolMappings[toolMapping.targetType] = toolMapping;
        });
        return config;
    }
}
