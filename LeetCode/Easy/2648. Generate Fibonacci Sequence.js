const input = require("./example");

const fibGenerator = function* () {
  let prev1 = 0;
  let prev2 = 1;

  while (true) {
    yield prev1;

    const tmpPrev = prev1;
    prev1 = prev2;
    prev2 = tmpPrev + prev2;
  }
};

const gen = fibGenerator();

for (let i = 0; i < input; i++) {
  console.log(gen.next().value);
}
