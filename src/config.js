const paths = require('./paths');

const config = {
    tables: {
        selector  : '.table',
        selected  : {
            0: 'Место',
            3: 'Команда',
            4: 'Игры',
            5: 'Победы',
            6: 'Ничьи',
            7: 'Поражения',
            8: 'Мячи',
            9: 'Очки',
        },
        countries : {...paths.tables},
    },
    forwards: {
        selector  : '.b-table-sortlist',
        selected  : {
            0: 'Место',
            2: 'Игрок',
            3: 'Команда',
            4: 'Амплуа',
            5: 'Голы',
            6: 'С пенальти',
            9: 'Игры',
        },
        countries : {...paths.forwards},
    },
    assistants: {
        selector  : '.b-table-sortlist',
        selected  : {
            0: 'Место',
            2: 'Игрок',
            3: 'Команда',
            4: 'Амплуа',
            5: 'Передачи',
            6: 'Игры',
        },
        countries : {...paths.assistants},
    }
};

module.exports = config;