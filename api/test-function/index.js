const custom_module = require('custom-module');
const get_random_number = custom_module.cwrap('get_random_number', 'number', []);

module.exports = async function (context, req) {
    context.res = {
        body: get_random_number()
    };
}