const input_data = require("./puzzle04_data");

/*
[1518-05-19 00:02] Guard #2749 begins shift
[1518-10-02 00:14] wakes up
[1518-03-02 00:11] falls asleep
*/

const shift_lines = input_data.split("\n").filter(shift_line => !!shift_line).sort();

function parseShiftLines(shift_lines) {
    let guards = {};
    let guard_id = null;
    let sleep_times = null;
    function store_guard() {
        console.log(`guard_id: ${guard_id}, sleep_times: ${sleep_times}`);
        if (sleep_times) {
            if (!guards[guard_id]) {
                guards[guard_id] = {sleep_times: []};
            }
            guards[guard_id].sleep_times.push(...sleep_times);
        }
    }
    for (let index = 0; index < shift_lines.length; index++) {
        let line = shift_lines[index];
        let m = line.match(/^\[(.*)\] Guard #(\d+) begins shift/);
        console.log(line);
        if (m) {
            store_guard();
            // console.log(m);

            guard_id = m[2];
            sleep_times = [];
            continue;
        }
        m = line.match(/^\[(.*):(\d+)\] wakes up/);
        if (m) {
            sleep_times.push(parseInt(m[2], 10));
            continue;
        }
        m = line.match(/^\[(.*):(\d+)\] falls asleep/);
        if (m) {
            sleep_times.push(parseInt(m[2], 10));
            continue;
        }
    }
    store_guard();
    return guards;
} 

let guard_shifts = parseShiftLines(shift_lines);

console.log(guard_shifts);

let best_guard = null;   // according to criteria of puzzle part one
let best_guard2 = null;  // according to criteria of puzzle part two

for (const guard of Object.entries(guard_shifts)) {
    let gd = guard[1];
    let start = null;
    let sleepy_minutes = new Array(60).fill(0);
    let total_sleep_minutes = 0;
    for (const minute of gd.sleep_times) {
        if (start !== null) {
            // wakes up
            for (let min = start; min < minute; min++) {
                sleepy_minutes[min]++;
                total_sleep_minutes++;
            }
            start = null;
        } else {
            start = minute;
        }
    }
    let most_sleepy_minute = 0;
    for (let min = 0; min < sleepy_minutes.length; min++) {
        if (sleepy_minutes[min] > sleepy_minutes[most_sleepy_minute]) {
            most_sleepy_minute = min;
        }
    }
    guard[1].sleepy_minutes = sleepy_minutes;
    guard[1].total_sleep_minutes = total_sleep_minutes;
    guard[1].most_sleepy_minute = most_sleepy_minute;
    if (!best_guard) {
        best_guard = guard;
    }
    if (guard[1].total_sleep_minutes > best_guard[1].total_sleep_minutes) {
        best_guard = guard;
    }

    if (!best_guard2) {
        best_guard2 = guard;
    }
    if (guard[1].sleepy_minutes[guard[1].most_sleepy_minute] > best_guard2[1].sleepy_minutes[best_guard2[1].most_sleepy_minute]) {
        best_guard2 = guard;
    }
}

console.log(`best_guard:`);
console.log(best_guard);
console.log('id * most_sleepy_minute = ', (parseInt(best_guard[0], 10) * best_guard[1].most_sleepy_minute));

console.log(`best_guard2:`);
console.log(best_guard2);
console.log('id * most_sleepy_minute = ', (parseInt(best_guard2[0], 10) * best_guard2[1].most_sleepy_minute));
