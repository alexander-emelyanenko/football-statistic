const request   = require('request');
const { JSDOM } = require('jsdom');
const config    = require('./config'); 

const getPage = async (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            resolve(body);
        });
    });
};

const getData = async ({url, selector, selected, limit}) => {
    const page = await getPage(url);
    const dom = new JSDOM(page);
    const table = dom.window.document.querySelector(selector);
    const rows = limit ? [...table.getElementsByTagName('tr')].slice(1, limit + 1) : [...table.getElementsByTagName('tr')].slice(1);
    const object = rows.map(row => {
        return [...row.getElementsByTagName('td')]
            .map(cell => cell.textContent)
            .filter((cell, index) => {
                return Object.keys(selected).map(key => Number(key)).indexOf(index) !== -1;
            });
    }); 
    
    return object;
}

const getTable = ({country, limit}) => {
    return getData({
        url      : config.tables.countries[country],
        selector : config.tables.selector,
        selected : config.tables.selected,
        limit
    });
};

const getForwards = ({country, limit}) => {
    return getData({
        url      : config.forwards.countries[country],
        selector : config.forwards.selector,
        selected : config.forwards.selected,
        limit
    });
};

const getAssistants = ({country, limit}) => {
    return getData({
        url      : config.assistants.countries[country],
        selector : config.assistants.selector,
        selected : config.assistants.selected,
        limit
    });
};

module.exports = { getTable, getForwards, getAssistants };