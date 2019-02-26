export class Text {
    constructor (type) {
        this.type = type;
        this.regex = '.+';
    }

    static fromJson (raw) {
        const text = new Text(raw.type);
        if (raw.regex) {
            text.regex = raw.regex;
        }
        return text;
    }
}
