export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const keyboardKeys = [
  { letter: 'Q', status: 'unused', row: 'first' },
  { letter: 'W', status: 'unused', row: 'first' },
  { letter: 'E', status: 'unused', row: 'first' },
  { letter: 'R', status: 'unused', row: 'first' },
  { letter: 'T', status: 'unused', row: 'first' },
  { letter: 'Y', status: 'unused', row: 'first' },
  { letter: 'U', status: 'unused', row: 'first' },
  { letter: 'I', status: 'unused', row: 'first' },
  { letter: 'O', status: 'unused', row: 'first' },
  { letter: 'P', status: 'unused', row: 'first' },
  { letter: 'A', status: 'unused', row: 'second' },
  { letter: 'S', status: 'unused', row: 'second' },
  { letter: 'D', status: 'unused', row: 'second' },
  { letter: 'F', status: 'unused', row: 'second' },
  { letter: 'G', status: 'unused', row: 'second' },
  { letter: 'H', status: 'unused', row: 'second' },
  { letter: 'J', status: 'unused', row: 'second' },
  { letter: 'K', status: 'unused', row: 'second' },
  { letter: 'L', status: 'unused', row: 'second' },
  { letter: 'Z', status: 'unused', row: 'third' },
  { letter: 'X', status: 'unused', row: 'third' },
  { letter: 'C', status: 'unused', row: 'third' },
  { letter: 'V', status: 'unused', row: 'third' },
  { letter: 'B', status: 'unused', row: 'third' },
  { letter: 'N', status: 'unused', row: 'third' },
  { letter: 'M', status: 'unused', row: 'third' }
];
