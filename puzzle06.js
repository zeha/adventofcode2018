'use strict';

let input_data = (require("./puzzle06_data")).trim();
// input_data = "1, 1\n" +
//     "1, 6\n" +
//     "8, 3\n" +
//     "3, 4\n" +
//     "5, 5\n" +
//     "8, 9\n".trim();

let input_lines = input_data.split("\n");

let coords = input_lines.map( (s, index) => {
    const split = s.split(", ");
    let name = '';
    if (input_lines.length > 26) {
        if (index >= 26) {
            index -= 26;
            name = 'B' + String.fromCharCode('A'.charCodeAt(0) + index);
        } else {
            name = 'A' + String.fromCharCode('A'.charCodeAt(0) + index);
        }
    } else {
        name = String.fromCharCode('A'.charCodeAt(0) + index);
    }
    return {
        x: parseInt(split[0], 10),
        y: parseInt(split[1], 10),
        bounded_right: false,
        bounded_top: false,
        bounded_left: false,
        bounded_bottom: false,
        fields: 0,
        name: name,
    };
});

let placeholder = '.';
if (input_lines.length > 26) {
    placeholder = '..';
}

let maxX=0;
let maxY=0;

// let minX = 0;
// let minY = 0;
// let maxX;
// let maxY;
//
// for (let i = 0; i < coords.length; i++) {
//     const coord = coords[i];
//     if (minX > coord[0])
//         minX = coord[0];
//     if (!maxX || maxX < coord[0])
//         maxX = coord[0];
//     if (minY > coord[1])
//         minY = coord[1];
//     if (!maxY || maxY < coord[1])
//         maxY = coord[1];
// }
//
// const field = Array((maxX - minX + 1) * (maxY - minY + 1)).fill(0);

for (let i = 0; i < coords.length; i++) {
    const coord = coords[i];
    if (coord.x > maxX) {
        maxX = coord.x;
    }
    if (coord.y > maxY) {
        maxY = coord.y;
    }
    if (coord.bounded_right && coord.bounded_left && coord.bounded_bottom && coord.bounded_top) {
        continue;
    }

    for (let j = 0; j < coords.length; j++) {
        const other = coords[j];
        if (other.x > coord.x && other.y > coord.y) {
            coord.bounded_bottom = true;
            coord.bounded_right = true;
        }
        if (other.x < coord.x && other.y < coord.y) {
            coord.bounded_top = true;
            coord.bounded_left = true;
        }

        // if (other.x === coord.x) {
        //     // doesnt help us
        // } else if (other.x > coord.x) {
        //     coord.bounded_right = true;
        //     other.bounded_left = true;
        // // } else if (other.x < coord.x) {
        // //     coord.bounded_left = true;
        // //     other.bounded_right = true;
        // }
        //
        // if (other.y === coord.y) {
        //     // doesnt help us
        // } else if (other.y > coord.y) {
        //     coord.bounded_bottom = true;
        //     other.bounded_top = true;
        // // } else if (other.y < coord.y) {
        // //     coord.bounded_top = true;
        // //     other.bounded_bottom = true;
        // }
    }
}

for (let y = 0; y < maxY+1; y++) {
    let line = '';

    for (let x = 0; x < maxX+1; x++) {
        let closest_coord = null;
        let closest_distance = null;
        let closest_dupe = false;

        for (let i = 0; i < coords.length; i++) {
            const coord = coords[i];
            // if (!coord.bounded_right && !coord.bounded_left && !coord.bounded_bottom && !coord.bounded_top) {
            //     continue;
            // }

            let distance = Math.abs(coord.x - x) + Math.abs(coord.y - y);
            if (distance === 0) {
                closest_coord = coord;
                closest_distance = 0;
                closest_dupe = false;
                break;
            }

            if (closest_distance === null || distance < closest_distance) {
                closest_distance = distance;
                closest_coord = coord;
                closest_dupe = false;
            } else if (distance === closest_distance) {
                // same distance as some other coord -> discard
                // closest_distance = null;
                // closest_coord = null;
                closest_dupe = true;
                // break;
            }
        }

        if (closest_dupe) {
            closest_coord = null;
        }

        if (closest_coord !== null) {
            closest_coord.fields++;
            if (closest_distance > 0) {
                line += closest_coord.name.toLowerCase();
            } else {
                line += closest_coord.name;
            }
        } else {
            line += placeholder;
        }

        // console.log(`${x} ${y}  closest: ${closest_coord ? closest_coord.name : ''}`);
        // line += `${closest_coord ? closest_coord.name : '.'}`;
    }
    console.log(line);
}

coords = coords.sort((a,b) => a.fields > b.fields ? 1 : a.fields < b.fields ? -1 : 0)

console.log (coords);

/*
GOOD:
aaaaa.cccc
aAaaa.cccc
aaaddecccc
aadddeccCc
..dDdeeccc
bb.deEeecc
bBb.eeee..
bbb.eeefff
bbb.eeffff
bbb.ffffFf
 */
/*
aaaaa.ccc
aAaaa.ccc
aaaddeccc
aadddeccC
..dDdeecc
bb.deEeec
bBb.eeee.
bbb.eeeff
bbb.eefff
bbb.ffffF
 */

//realdata: 5475 is TOO HIGH (not bounded!)
// correct: 5035 = x:213,y:291
