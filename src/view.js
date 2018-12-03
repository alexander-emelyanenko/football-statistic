const getView = (data, titles) => {
    let output = data.map((row, index) => {
        let object = {};
        row.forEach((cell, index) => {
            object[titles[index]] = cell;
        });
        return object;
    });

    console.table(output);
};

module.exports = getView;