const input = require("./puzzle01_data");

// console.log(input);

let seen_freqs = [];
let values = input.slice();
let freq = 0;

while(true) {
    if (values.length === 0) {
        values = input.slice();
        //console.log('values are now', values);
    }
    let value = values.shift();
    freq += value;

    if (seen_freqs.includes(freq)) {
        console.log('freq is', freq);
        break;
    }
    seen_freqs.push(freq);
    //console.log(value, freq);
}
