const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  };
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!')
    process.exit();
  };
  if (parseInt(key) > 0 && parseInt(key) < 10) {
    let second = 1000
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), parseInt(key) * second);
  };
});
