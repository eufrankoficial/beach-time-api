const enumCity = require('../enums/cities');
const api = require('../services/api')

module.exports = {
    async index(req, res) {
        const city = enumCity.city;
        const { data : { results } } = await api.get(`weather?woeid=${city}`);
        return res.json(results);
    }
}