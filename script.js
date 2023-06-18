// Good Luck 💪🏾
function brokenKeys(Sax, khalad) {
    let brokenKeys = [];
    for (let i = 0; i < Sax.length; i++) {
      if (Sax[i] !== khalad[i]) {
        if (!brokenKeys.includes(Sax[i])) {
          brokenKeys.push(Sax[i]);
        }
      }
    }
    return brokenKeys;
  }
  console.log(brokenKeys("fikrcamp bootcamp", "fikrcomp boorcamp")); // ["a","t"]
  console.log(brokenKeys("good night", "gppd night")) // ["o"]








  