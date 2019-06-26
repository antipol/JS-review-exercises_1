//Review exercises

//1. Number of spaces
const numOfSpaces = str => str.split(" ").length - 1;
console.log(numOfSpaces("The quick brown fox jumped over the lazy dogs."));
//8
//number of elements (words) minus 1 to calculate spaces


//2. How many loops
for (let i = 0; i > 10; ++i) {
  console.log(i);
}
//0
//i is 0, but the loop will only run when i is larger than 10. And then it will run forever


//3. Output of code
var str = "CANTALOUPE";
for (let i = str.length - 1; i >= 0; i -= 2) {
  console.log(str[i]);
}
//nothing, s is supposed to be str
//if corrected, i = 9 (last index), will run as long as i is larger than or equal to 0, will decrement 2 each loop (= print every other letter in reverse order)
//E //U //L //T //A


//4. Remove all 0s
const removeZeros = str => str.split("0").join("");
console.log(removeZeros("In 10 years the year is 2029"));


//5. Return minimum
const minimum = (num1, num2) => num1 < num2 ? num1 : num2;
console.log(minimum(10, -2));
//-2


//6. Sum every third
const sumEveryThird = numArray => {
  let result = 0;
  for (let i = 2; i < numArray.length; i += 3) {
    result += numArray[i];
  }
  return result
}
console.log(sumEveryThird([1,2,3,4,5,6,7,8,9]));
//18
console.log(sumEveryThird([4,9,1,3,8,1]));
//2


//7. Find longest word
const findLongestWord = wordArray => Math.max(...wordArray.map(word => word.length));
console.log(findLongestWord(['dog', 'cat', 'bat', 'octopus']));
//7


//8. Tip calculator
const tipCalculator = (totalBill, percentage, people) => totalBill * percentage / people;
console.log(tipCalculator(500, .15, 10));
//7.5


//9. Repeat a string n times
const repeatStr = (str, repeat = 1) => str.repeat(repeat);
console.log(repeatStr("Ha!"));
//Ha!


//10. Print sequence
let sum = 1;
for (let i = 0; i < 14; i++) {
  sum += i;
  console.log(sum);
}
//1,2,4,7,11,16,22,29,37,46,56,67,79,92


//11. Anagram checker
const anagramChecker = (str1, str2) => {
  const sortStr1 = [...str1].sort().join("");
  const sortStr2 = [...str2].sort().join("");
  return sortStr1 === sortStr2;
}
console.log(anagramChecker("listen", "silent"));
//true
//split("") to make array with each letter as its own element
//sort() to sort alphabetically
//join("") to join letters to string in order to compare


//12. Max array slice sum
const maxSliceSum = arr => {
  let sum = 0;
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    //if current number is 0 or more, add this number to the sum / total
    if (arr[i] >= 0) {
      sum += arr[i];
    }
    //as soon as current number is less than 0, push sum to max array and reset sum to 0 before loop starts over
    else if (arr[i] < 0) {
      max.push(sum);
      sum = 0;
    }
  }
  //find the highest value of the sums in the max array
  return Math.max(...max);
}
console.log(maxSliceSum([1, 12, -20, 4, 15, -10]));
//19
