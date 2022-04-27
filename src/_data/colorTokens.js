const Color = require('color');

// const config = {
//     magenta: '#dd0890',
//     ultraviolett: '#4b0082',
//     turkosmint: '#0de1ec',
//     ultramarin: '#200c9c',
//     granit: '#f0f0f0',
//     kol: '#222222',
// };

const config = {
    magenta: '#dd0890',
    ultraviolett: '#4b0082',
    turkosmint: '#0de1ec',
    ultramarin: '#200c9c',
    granit: '#f0f0f0',
    kol: '#222222',
};

let colorTokens = {};

for (const [key, val] of Object.entries(config)) {
    colorTokens[key] = Color(val).hex();
    colorTokens[`${key}_light`] = Color(val).lighten(0.45).hex();
    colorTokens[`${key}_dark`] = Color(val).darken(0.4).hex();
}

let exportTokens = [];

for (const [key, val] of Object.entries(colorTokens)) {
    let name = key.replace(/_/g, '-');
    exportTokens.push({
        name: name,
        color: val,
    });
}

module.exports = exportTokens;

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
