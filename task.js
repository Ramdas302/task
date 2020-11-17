function Difference(arr) {
    arr = arr.sort((a,b) => a-b);
    let diff = Infinity ;
    for(let i=0; i<arr.length; i++) {
      if(arr[i+1] - arr[i] < diff) {
        diff = arr[i+1] - arr[i];
      }
    }
    return diff;
  }

  let arr = [983,995,992,653,424,829];
  console.log(Difference(arr));



function squarepattern() {
    for (var i = 1; i <= 7; i++) {
        var s = "";
        for (var j = 1; j <= 20; j++) {
            if ((i == 1 || i == 7 || j == 1 || j == 20)

        ) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }

}
squarepattern();




var inputData = [
  ["you", "we"],
  ["have", "are"],
  ["sleep", "eat", "drink"],
];
function Recursive(input) {
    
  for (i = 0; i < input[0].length; i++) {
  
    for (var j = 0; j < input[1].length; j++) {
        
      for (var l = 0; l < input[2].length; l++) {
        
        console.log(input[0][i] + " " + input[1][j] + " " + input[2][l]);
      }
    }
  }
  
}
Recursive(inputData);
