class ToolMapping {
    constructor (targetType) {
        this.targetType = targetType;
        this.title = '';
        this.icon = '';
    }

    static fromJson (toolMapping) {
        let mapping = new ToolMapping(toolMapping['target-type']);
        mapping.title = toolMapping['tool-title'];
        mapping.icon = toolMapping['icon'];
        return mapping;
    }
}
