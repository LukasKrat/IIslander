/** Class representing auto response data. */
export default class ResponseDto {
    /**
     * Create new auto response data.
     * @param {String[]} trigger - The regex to trigger.
     * @param {boolean} isRegex - If the trigger is a regular expression
     * @param {String} response - What to respond with or the image location.
     * @param {String} title - What to put as the title of the response.
     */
    constructor(trigger = [''], isRegex = false, response = '', title = '') {
        this.trigger = trigger;
        this.isRegex = isRegex;
        this.response = response;
        this.title = title;
    }

    /**
     * Serializes the auto response object.
     * @returns {object} A JSON representation of the auto response.
     */
    toJSON() {
        return {
            trigger: this.trigger,
            isRegex: this.isRegex,
            response: this.response,
            title: this.title,
        };
    }

    /**
     * Deserialize JSON data.
     * @param {object} object - The object to deserialize.
     * @returns {ResponseDto} The auto response object from the JSON.
     */
    static fromJSON(object) {
        return new ResponseDto(object.trigger, object.isRegex, object.response, object.title);
    }
}
