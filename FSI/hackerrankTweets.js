function processData(input) {
  //Enter your code here
  let data = input.split("\n");
  let counter = 0;
  for (let i = 1; i < data.length; i++) {
    let tweet = data[i].toLowerCase();
    if (tweet.indexOf("hackerrank") >= 0) {
      counter++;
    }
  }
  console.log(counter);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
