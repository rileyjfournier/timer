const args = process.argv.slice(2);

const timer = function(args) {
  for (let i = 0; i < args.length; i++) {
    let x = 1000;
    if (args[i] > 0) {
      setTimeout(() => process.stdout.write('\x07'), x * args[i]);
    }
  }
};

timer(args);