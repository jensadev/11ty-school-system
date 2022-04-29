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
    magenta: 'rgb(221, 8, 144)',
    ultraviolett: 'rgb(75, 0, 130)',
    turkosmint: 'rgb(13, 225, 236)',
    ultramarin: 'rgb(32, 12, 156)',
    granit: 'rgb(240, 240, 240)',
    kol: 'rgb(34, 34, 34)',
};

let colorTokens = {};

for (const [key, val] of Object.entries(config)) {
    const color = Color(val);
    colorTokens[key] = color.hex();
    let light = color.desaturate(0.2).lighten(0.45).hex();
    console.log(key, Color(light).isDark());
    if (Color(light).isDark()) {
        light = color.lighten(0.45).hex();
    }
    colorTokens[`${key}_light`] = light;
    colorTokens[`${key}_dark`] = Color(val).darken(0.4).hex();
}

console.log(colorTokens)

let exportTokens = [];

for (const [key, val] of Object.entries(colorTokens)) {
    exportTokens.push({
        name: key.replace(/_/g, '-'),
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
