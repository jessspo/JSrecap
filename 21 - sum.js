// create a function sum, that will receive a number as a parameter and return the sum of the numbers previous to it.
// i.e: sum(4)
// 6
// which is 0 + 1 + 2 + 3

const sum = (number) => {
    if (number === 0) {
        return 0;
    }
     return number - 1 + sum (number - 1);
     // return number + number - 1;
 
 }
 
 console.log(sum(4));