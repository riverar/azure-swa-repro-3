const module_factory = require('custom-module');

module.exports = async function (context, req) {
    const instance = await module_factory()
    const get_random_number = instance.cwrap('get_random_number', 'number', [])
    return {
        body: get_random_number()
    };
}