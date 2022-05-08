//Programming with JavaScript Assignment
//PROBLEM 1
//You are provided with a number, "N". Find its factorial.
//Answer:
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}
let num = 5;
console.log("Factorial of " + num + " is " + factorial(num));

// PROBLEM 2
// You are given with a number "N", find its cube
//Answer:
var n = 2;
var cube;
cube = n * n * n;
console.log(cube);


// PROBLEM 3
// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the
// triangle. You are provided with the side "a". Find the area of the equilateral triangle
// Answer:
function area(side) {
    let area;
    return Math.sqrt(3) / 4 * side * side;
}
let Area = area(20).toFixed(2);
console.log(Area);


// PROBLEM 4
// You will be provided with a number. Print the number of days in the month
// corresponding to that number.
// Answer:
var getDaysInMonth = function(month, year) {
    return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(8, 2021));

// PROBLEM 5
// You are given with a number A i.e. the temperature in Celcius. Write a program to
// convert this into Fahrenheit. 
// Answer:
const celsius = 12;
const fahrenheit = (celsius * 1.8) + 32
console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`)


// PROBLEM 6
// Write a code to get an integer N and print the sum of values from 1 to N.
// Answer:
const number = 10;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log('sum of values:', sum);

// PROBLEM 7
// You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25,
// 36, 49, 64, 81, .......
// Answer:
let series = (s) => {
    if (s > 1) {
        console.log(s * s);
    } else if (s == 0) {
        console.log(0);
    } else if (s < 1) {
        console.log("Error")
    }
}
series(18);


// PROBLEM 8 
// Let "A" be a string. Remove all the whitespaces and find it's length.
// (Print "Error" if N = negative value and 0 if N = 0).
// Answer:
function STR(str) {
    var output1;
    output1 = str.split(" ").join("").length;
    return output1;

}
console.log(STR("Lorem Ipsum"));



// PROBLEM 9
// You are given the coefficients of a quadratic equation in order A, B & C.
// Answer:

var a = 1;
var b = 5;
var c = 6;

var root_part = Math.sqrt(b * b - 4 * a * c);
var discriminant = 2 * a;
var root_part_1 = (-b + root_part) / discriminant;
var root_part_2 = (-b - root_part) / discriminant;

var x1 = root_part_1.toFixed(2);
var x2 = root_part_2.toFixed(2);
console.log(x1);
console.log(x2);


// PROBLEM 10 
// Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements 
// in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed 
// are the odd and sorted are the even’. Loki manages to decode the clue which translates 
// to “sort the even positioned elements of an array, starting from the element at index 0, 
// in ascending order”. Manipulate the array so as to help Loki steal the tesseract
// Answer:
function sort(n, arr) {
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (j % 2 == 0) {
                if (arr[j] >= arr[j + 2]) {
                    let temp;
                    temp = arr[j]
                    arr[j] = arr[j + 2]
                    arr[j + 2] = temp
                }
            }
        }
    }
    console.log(arr)
}
let n = 4
let arr = [5, 3, 3, 4, 4, 7, 8]
sort(n, arr)


// PROBLEM 11 
// Given an array of N elements.find the number of occurences of each character and 
// print it in the decreasing order of occurences, if 2 or more number occurs the same 
// number of times, print the numbers in decreasing order.
// Answer:
function sortByFreq(arr, n) {
    var maxE = -1;
    for (var i = 0; i < n; i++) {
        maxE = Math.max(maxE, arr[i]);
    }
    var freq = new Array(maxE + 1).fill(0);
    for (var i = 0; i < n; i++) {
        freq[arr[i]]++;
    }
    var cnt = 0;
    for (var i = 0; i <= maxE; i++) {

        if (freq[i] > 0) {
            var value = 100000 - i;
            arr[cnt] = 100000 * freq[i] + value;
            cnt++;
        }
    }
    return cnt;
}


function printSortedArray(arr, cnt) {

    for (var i = 0; i < cnt; i++) {
        var frequency = parseInt(arr[i] / 100000);
        var value = 100000 - (arr[i] % 100000);
        for (var j = 0; j < frequency; j++) {
            console.log(value + " ");
        }
    }
}

var arr = [5, 3, 3, 4, 4, 7, 8];
var n = arr.length;
var cnt = sortByFreq(arr, n);
arr.sort((a, b) => b - a);
printSortedArray(arr, cnt);


// PROBLEM 12 
// Simi is learning about palindromic numbers. Her teacher gave him the task to count 
// all palindromic numbers present in that range.Simi has told you about this and want 
// your help. You design an algorithm in order to help simi.
// Answer:
function nDigitPalindromes(n) {
    return (9 * Math.pow(10, parseInt((n - 1) / 2)));
}
console.log(nDigitPalindromes(5));



// PROBLEM 13 
// Ajay is given a series(In example).he gone through the series but unable to understand 
// it properly,he has hired you.Your task is to understand the series and print the series 
// 2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.
// Answer:
function Aseries(num6) {
    //n*n+n//
    return (Math.pow(num6, 2) + num6);
}

console.log(Aseries(5));


// PROBLEM 14 
// You are given with an array. Your task is to print the left rotated array after k 
// opearations. Time:O(n) Extra Space: O(1)
// Answer:
function leftRotate(arr, d, n) {
    for (i = 0; i < d; i++)
        leftRotatebyOne(arr, n);
}

function leftRotatebyOne(arr, n) {
    var i, temp;
    temp = arr[0];
    for (i = 0; i < n - 1; i++)
        arr[i] = arr[i + 1];
    arr[n - 1] = temp;
}


function printArray(arr, n) {
    for (i = 0; i < n; i++)
        console.log(arr[i] + " ");
}



var arr = [1, 2, 3, 4, 5, 6, 7];
leftRotate(arr, 3, 7);
printArray(arr, 7);

// PROBLEM 15 
// You are given a postfix expression. Evaluate the given expression and print the result.
// Answer:
function evaluatePostfix(exp) {
    let stack = [];


    for (let i = 0; i < exp.length; i++) {
        let c = exp[i];


        if (!isNaN(parseInt(c)))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));


        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}

let exp = "531*+9-";
console.log("postfix evaluation: " + evaluatePostfix(exp));