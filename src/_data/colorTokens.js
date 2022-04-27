const Color = require('color');

const config = {
    magenta: '#dd0890',
    ultraviolett: '#4b0082',
    turkosmint: '#0de1ec',
    ultramarin: '#200c9c',
    granit: '#f0f0f0',
    kol: '#222222',
};

// const colorTokens = config.map((key, val) => {

let colorTokens = {};

for(const [key, val] of Object.entries(config)) {
    // Object.defineProperty(colorTokens, key, {
    //     value: Color(val).hex()
    // });
    // Object.defineProperty(colorTokens, key + '-dark', {
    //     value: Color(val).blacken(0.4).hex()
    // });
    // Object.defineProperty(colorTokens, key + '-light', {
    //     value: Color(val).whiten(0.45).hex(),
    // });
    // Object.defineProperties(colorTokens, {
    //     [key]: {
    //         value: Color(val).hex(),
    //     },
    //     [key + '-dark']: {
    //         value: Color(val).blacken(0.4).hex(),
    //     },
    //     [key + '-light']: {
    //         value: Color(val).whiten(0.45).hex(),
    //     },
    // });
    const kl = `${key}-light`;
    const kd = `${key}-dark`;
    let temp = {
        [key]: Color(val).hex(),
        [ 'prop_' + (() => 42)()]: Color(val).whiten(0.45).hex(),
        [kd]: Color(val).blacken(0.4).hex(),
    }
    console.log(temp)
}
// });
console.log(colorTokens);

// console.log(colorTokens.magenta);
// console.log(colorTokens[magenta-light]);

module.exports = [{}];

// [
//     {
//         "name": "magenta",
//         "color": "#dd0890"
//     },
//     {
//         "name": "ultraviolett",
//         "color": "#4b0082"
//     },
//     {
//         "name": "granit",
//         "color": "#f0f0f0"
//     },
//     {
//         "name": "granit",
//         "color": "#f0f0f0"
//     },
//     {
//         "name": "kol",
//         "color": "#222222"
//     }
// ]
