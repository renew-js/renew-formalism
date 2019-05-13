export class Text {

    constructor (type) {
        this.type = type;
        this.default = '';
        this.regex = '.+';
        this.targets = '*';
    }

    static fromJson (raw) {
        const text = new Text(raw.type);
        if (raw.default) {
            text.default = raw.default;
        }
        if (raw.regex) {
            text.regex = raw.regex;
        }
        if (raw.targets) {
            text.targets = raw.targets;
        }
        return text;
    }

}
