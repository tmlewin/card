// There is a file contains the digital number characters:


// _   _   _
// |_| |_  | |
// |_| |_| |_|
// Each digital number contains 3x3 characters, read this file and output the int type number: 8 6 0

// write the code here


  const symbols = [
    ' _ ',
    '| |',
    '|_|',
    '   '
    ];

    const numbers = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 1, 0],
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 1]
    ];

    const getNumber = (symbols) => {
        const number = [];
        for (let i = 0; i < symbols.length; i++) {
            const symbol = symbols[i];
            if (symbol === '   ') {
                number.push(0);
            } else if (symbol === ' _ ') {
                number.push(1);
            } else {
                number.push(2);
            }
        }
        return number;
    };

    const getNumberFromString = (string) => {
        const symbols = string.split('\n');
        return getNumber(symbols);
    }

    const getNumberFromFile = (file) => {
        const string = file.split('\n').join('');
        return getNumberFromString(string);
    }



    console.log(getNumberFromFile(` _   _   _ ` + '\n' + `|_| |_  | |` + '\n' + `|_| |_| |_|` + '\n'));



















