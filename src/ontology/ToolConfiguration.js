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

    getToolMappings () {
        return Object.values(this.toolMappings);
    }

    getContextMappings () {
        return Object.values(this.contextToolMappings);
    }

    /**
     *
     * @param {Object} ontology
     * @return {ToolConfiguration}
     */
    static fromJson (ontology) {
        const config = new ToolConfiguration();

        if (ontology['tool-name']) {
            config.toolName = ontology['tool-name'];
        }

        if (ontology['target-model']) {
            config.targetModel = ontology['target-model'];
        }

        if (ontology['file-description']) {
            config.fileDescription = ontology['file-description'];
        }

        if (ontology['file-extension']) {
            config.fileExtension = ontology['file-extension'];
        }

        if (ontology['tool-mappings']) {
            ontology['tool-mappings'].forEach((mapping) => {
                const toolMapping = ToolMapping.fromJson(mapping);
                config.toolMappings[toolMapping.targetType] = toolMapping;
            });
        }

        if (ontology['context-tool-mappings']) {
            ontology['context-tool-mappings'].forEach((mapping) => {
                const toolMapping = ContextToolMapping.fromJson(mapping);
                config.contextToolMappings[toolMapping.targetType] = toolMapping;
            });
        }

        return config;
    }
}
