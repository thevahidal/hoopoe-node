const axios = require('axios');

const constants = require('./constants').default;
const utils = require('./utils');

class Hoopoe {
    constructor(args = {}) {
        if (!args.api_key) {
            throw new Error('API key is required');
        }

        if (args.version && !constants.VERSIONS.includes(parseInt(args.version))) {
            throw new Error('Invalid version');
        }

        const {
            api_key,
            version,
            base_url
        } = args

        this.api_key = api_key;
        this.base_url = `${base_url || constants.base_url}/v${version || 1}`;
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-API-Key': this.api_key
        };
    }

    async upupa(message, extra = {}, includeTraceBack = true) {
        if (!message) {
            throw new Error('Message is required');
        }

        const data = {
            message,
            extra
        };

        // include code trace back
        if (includeTraceBack) {
            const { stack } = utils.getThisLine();

            data.extra.trace_back = {
                "stack": stack
            }
        }
        const response = await axios.post(`${this.base_url}/upupa/`, data, { headers: this.headers });
        return response.data
    }

    async timestamp() {
        const response = await axios.get(`${this.base_url}/timestamp/`, { headers: this.headers });
        return response.data
    }
}

module.exports = Hoopoe;