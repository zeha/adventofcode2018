//const input_data = 'dabAcCaCBAcCcaDA'; //(require("./puzzle05_data")).trim();
const input_data = (require("./puzzle05_data")).trim();

function reduce_once_for(du, inp) {
    let out = '';
    for (let pos = 0; pos < inp.length; pos++) {
        const char = inp.charAt(pos);
        const nextChar = inp.charAt(pos+1);
        if (char !== nextChar && char.toLowerCase() == nextChar.toLowerCase()) {
            // console.log(inp.length, char, nextChar, out.length, out.substring(0, 10));
            pos++;
            continue;
        }
        // console.log(inp.length, char, nextChar);
        out += char;
    }
    return out;
}

function reduce_once_regex(du, inp) {
    // const du = find_distinct_units(inp);
    const re_str = du.map(unit => {
        return (unit + unit.toUpperCase()) + '|' + (unit.toUpperCase() + unit);
    }).join('|');
    return inp.replace(new RegExp(re_str, 'g'), '');

    // let out = '';
    // for (let pos = 0; pos < inp.length; pos++) {
    //     const char = inp.charAt(pos);
    //     const nextChar = inp.charAt(pos+1);
    //     if (char !== nextChar && char.toLowerCase() == nextChar.toLowerCase()) {
    //         // console.log(inp.length, char, nextChar, out.length, out.substring(0, 10));
    //         pos++;
    //         continue;
    //     }
    //     // console.log(inp.length, char, nextChar);
    //     out += char;
    // }
    // return out;
}

function reduce_once(du, inp) {
    return reduce_once_regex(du, inp);
}

function reduce_fully(du, inp) {
    let reduced = inp;
    while (true) {
        let newly_reduced = reduce_once(du, reduced);
        if (reduced != newly_reduced) {
            reduced = newly_reduced;
            continue;
        }
        break;
    }
    return reduced;
}

function find_distinct_units(inp) {
    let chrs = [];
    for (let pos = 0; pos < inp.length; pos++) {
        const char = inp.charAt(pos).toLowerCase();
        if (chrs.indexOf(char) === -1) {
            chrs.push(char);
        }
    }
    return chrs;
}

let distinct_units = find_distinct_units(input_data);

let partone_reduced = reduce_fully(distinct_units, input_data);
console.log('part one answer:', partone_reduced.length);

distinct_units = find_distinct_units(input_data);
let best_removed = {
    unit: null,
    length: null,
};
distinct_units.forEach(unit => {
    console.log('trying unit', unit);
    let this_input = partone_reduced.replace(new RegExp(unit, 'gi'), '');
    let reduced = reduce_fully(distinct_units, this_input);
    if (best_removed.length === null || reduced.length < best_removed.length) {
        best_removed.length = reduced.length;
        best_removed.unit = unit;
    }
});

console.log('part two answer:', best_removed);
