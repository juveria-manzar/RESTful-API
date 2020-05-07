const mongoose = require('mongoose');
const Country = mongoose.model('Country')

getCountries = function(req, res, next) {
    Country.find((err, countries) => {
        if (err) { return res.json({ error: err }) }
        res.statusJson(200, {
            message: "Getting all countries",
            countries: countries
        });
    })
}

getCountryForm = function(req, res, next) {
    res.statusJson(200, { message: "Get Create Country form" });
}

createCountry = function({ body }, res, next) {
    if (!body.name) { return res.statusJson(400, { message: "Missing name for the country" }) }

    country = { name: body.name }
    Country.create(country, (err, newCountry) => {
        if (err) { return res.statusJson(404, { error: err }) }
        res.statusJson(201, {
            message: "Created new Country",
            newCountry: newCountry,
        })
    })
    res.statusJson(201, { message: "Create New Country" });
}

getCountry = function({ params }, res, next) {
    Country.findById(params.countryid, (err, country) => {
        if (err) { return res.json({ error: err }) }
        res.statusJson(200, {
            message: "Get Specified Country",
            country: country
        })
    })
    res.statusJson(200, { message: "Get Specific Country" });
}

getEditCountryForm = function(req, res, next) {
    res.statusJson(200, { message: "Get The Form For Editing A Country" });
}

editCountry = function({ body, params }, res, next) {
    if (!body.name) { return res.statusJson(400, { message: "Missing name for the country" }) }

    Country.findById(params.countryid, (err, country) => {
        if (err) { return res.json({ error: err }) }
        if (!country) { return statusJson(400, { message: "Could not find the country" }) }
        country.name = body.name
        country.save((err, updatedCountry) => {
            res.statusJson(201, {
                message: "Updated Country",
                country: updatedCountry,

            });
        })
    })
}

deleteCountry = function({ params }, res, next) {
    Country.findByIdAndRemove(params.countryid, (err, country) => {
        if (err) { return res.json({ error: err }) }
        if (!country) { return statusJson(400, { message: "Could not find the country" }) }

        res.statusJson(204, {
            message: "Delete Specific Country",
            country: country
        });
    })
}





module.exports = {
    getCountries,
    getCountryForm,
    createCountry,
    getCountry,
    getEditCountryForm,
    editCountry,
    deleteCountry
}