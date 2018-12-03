const config = require('./src/config');
const { getTable, getForwards, getAssistants } = require('./src/tables');
const getView  = require('./src/view');

const type    = process.argv[2],
      country = process.argv[3],
      limit   = Number(process.argv[4]);

switch (type) {
    case '--table':
    case '-t':
        getTable({country, limit})
            .then(data => getView(data, Object.values(config.tables.selected)));
        break;
    case '--forwards':
    case '-f':
        getForwards({country, limit})
            .then(data => getView(data, Object.values(config.forwards.selected)));
        break;
    case '--assistants':
    case '-a':
        getAssistants({country, limit})
            .then(data => getView(data, Object.values(config.assistants.selected)));
        break;
};