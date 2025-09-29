// Week 6: JavaScript Practice Workshop
// INFO 153A/253A - UC Berkeley

// ============================================
// SAMPLE DATA FOR PRACTICE
// ============================================

// Arrays for practice exercises
const numbers = [5, 12, 8, 20, 3, 15, 7];
const colors = ["red", "green", "blue", "yellow"];
const names = ["Alice", "Bob", "Charlie", "Diana"];

console.log("✅ JavaScript Practice Workshop Loaded!");
console.log("📚 Follow README.md for step-by-step exercises");
console.log("💡 Open browser console (F12) to see your output");
console.log("");

// ============================================
// EXERCISE 1: FUNCTION BASICS
// ============================================
// Practice writing functions with parameters and return values

// TODO: Exercise 1.1 - Write a greet(name) function
// Should return "Hello, [name]!"

function greet(name) {
    return "Hello, " + name + "!";
}


// TODO: Exercise 1.2 - Write math functions
// add(num1, num2) - returns sum
// multiply(num1, num2) - returns product
// calculateArea(width, height) - returns width * height

function add(num1, num2) {
    return num1 + num2 ;
}

function multiply(num1, num2) {
    return num1 * num2 ;
}

function calculateArea(width, height) {
    return width * height ;
}


// TODO: Exercise 1.3 - Write functions that call other functions
// square(num) - returns num * num
// sumOfSquares(num1, num2) - uses square() function

function square(num) {
    return num ** 2 ;
}

function sumOfSquares(num1, num2) {
    return square(num1) + square(num2);
}


// ============================================
// EXERCISE 2: CONTROL FLOW
// ============================================
// Practice if/else, switch statements, and ternary operators

// TODO: Exercise 2.1 - Write control flow functions
// checkAge(age) - returns "Adult" if >= 18, else "Minor"
// getGrade(score) - returns letter grade A-F based on score

function checkAge(age) {
    if (age >= 18) {
        return "Adult" ;
    } else {
        return "Minor" ;
    }
}

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B" ;
    } else if (score >= 70) {
        return "C" ;
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// TODO: Exercise 2.2 - Write switch statement functions
// getDayType(day) - returns "Weekday" or "Weekend"
// getSeasonEmoji(season) - returns emoji for each season

function getDayType(day) {
    switch(day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            return "Weekday";
        
        case "Saturday":
        case "Sunday":
            return "Weekend";
        
        default:
            return "Invalid day";
    }
}

function getSeasonEmoji(season) {
    switch(season) {
        case "Summer":
            return "☀️" ;
        case "Fall":
            return "🍁" ;
        case "Winter": 
            return "❄️" ;
        case "Spring":
            return "🌹" ;
        
        default:
            return "Invalid season" ;
    }
}

// TODO: Exercise 2.3 - Write ternary operator functions
// isEven(num) - returns "Even" or "Odd"
// getPassFail(score) - returns "Pass" if >= 60, else "Fail"

function isEven(num) {
    return (num % 2 === 0) ? "Even" : "Odd" ;
}

function getPassFail(score) {
    return (score >= 60) ? "Pass" : "Fail" ;
}


// ============================================
// EXERCISE 3: LOOPS
// ============================================
// Practice for loops, while loops, and for...of loops

// TODO: Exercise 3.1 - Basic for loops
// printNumbers(n) - logs numbers 1 to n
// sumNumbers(n) - returns sum of 1 to n
// countDown(n) - logs countdown from n to 1

function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

function sumNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1;
    }
    return sum ;
}

function countDown(n) {
    for (let i = n; i>= 1; i--) {
        console.log(i);
    }
    console.log("Blast off!");
}


// TODO: Exercise 3.2 - Loop through arrays
// findMax(arr) - returns largest number in array
// countEvens(arr) - returns count of even numbers

function findMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max;
}

function countEvens(arr) {
    let even = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++;
        }
    }
    return even;
}


// TODO: Exercise 3.3 - for...of loops
// sumArray(arr) - returns sum of all numbers in array
// printItems(arr) - logs each item in array

function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

function printItems(arr) {
    for (const item of arr) {
        console.log(item);
    }
}


// ============================================
// EXERCISE 4: ARRAY METHODS
// ============================================
// Practice forEach, filter, map, and reduce

// TODO: Exercise 4.1 - forEach practice
// Use forEach to log each color in the colors array
// Use forEach with index to log "0: red", "1: green", etc.

colors.forEach(
    function(color) {
        console.log(color);
    }
)

// another way
// colors.forEach(color => console.log(color))

colors.forEach(
    function(color, index){
        console.log(`${index}: ${color}`);
    }
)


// TODO: Exercise 4.2 - filter practice
// Create function getLargeNumbers(arr) that returns numbers > 10
// Create function getEvens(arr) that returns only even numbers

function getLargeNumbers(arr) {
    let filtered_arr = [];
    for (const num of arr) {
        if (num > 10) {
            filtered_arr.push(num);
        }
    }
    return filtered_arr ;
}

const large = numbers.filter(
    function(num) {
        return num > 10;
    }
)

// another way
// const large = numbers.filter(num => num > 10);

const even = numbers.filter(num => num % 2 === 0) ;

function getEvens(arr) {
    let even_arr = [];

    for (const num of arr) {
        if (num % 2 === 0) {
            even_arr.push(num) ;
        }
    }
    return even_arr;
}

// TODO: Exercise 4.3 - map practice
// Create function doubleNumbers(arr) that doubles each number
// Create function uppercaseNames(arr) that converts names to uppercase

function doubleNumbers(arr) {
    let double_arr = [];
    for (const num of arr) {
        double_arr.push(num*2);
    }
    return double_arr;
}

const double = numbers.map(
    function(num) {
        return num * 2;
    }
);

// another way
// const doubled = numbers.map(num => num * 2);

function uppercaseNames(arr) {
    let upper_arr = [];

    for (const name of arr) {
        upper_arr.push(name.toUpperCase());
    }
}

const uppercase = names.map(name => name.toUpperCase());

// TODO: Exercise 4.4 - reduce practice (optional)
// Create function sumAll(arr) that returns sum using reduce
// Create function findProduct(arr) that returns product of all numbers

const sum = numbers.reduce(
    function(total, num) {
        return total + num;
    }, 0 // 0 is the starting value
);

// another way
// const sum = numbers.reduce((total, num) => total + num, 0);

const prod = numbers.reduce(
    function(total, num) {
        return total * num;
    }, 1
);

// another way
// const sum = numbers.reduce((total, num) => total * num, 1);

// TODO: Exercise 4.5 - Combine methods
// Create function processNumbers(arr) that:
// 1. Filters for even numbers
// 2. Doubles each number
// 3. Returns the sum of results

const processNum = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((total, num) => total + num, 0);

console.log(processNum);

// ============================================
// BONUS CHALLENGES
// ============================================
// Try these if you finish early!

// CHALLENGE 1: FizzBuzz
// Write a function fizzBuzz() that prints numbers 1-100
// For multiples of 3 print "Fizz"
// For multiples of 5 print "Buzz"
// For multiples of both print "FizzBuzz"

function fizzBuzz() {
    for (let i = 1; i <=100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz();


// CHALLENGE 2: Palindrome Checker
// Write function isPalindrome(str) that checks if a string
// reads the same forwards and backwards
// Example: isPalindrome("racecar") should return true

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]){
            return false;
        }

        start++;
        end--;
    }
    return true;
}

// gemini code
// function isPalindrome(str) {
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;
// }

// CHALLENGE 3: Find Duplicates
// Write function findDuplicates(arr) that returns
// array of duplicate values
// Example: [1, 2, 3, 2, 4, 3] should return [2, 3]

function findDuplicates(arr) {
    const frequencyMap = {};
    const duplicates = [];

    for (const value of arr) {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    }

    for (const value in frequencyMap) {
        if (frequencyMap[value] > 1) {
            duplicates.push(Number(value));
        }
    }

    return duplicates;
}

// ============================================
// TESTING AREA
// ============================================
// Write your own test code here!

console.log("=== Your Test Code Below ===");

// Example: Test a function you wrote
console.log("Test your Exercise 1 functions here:")
console.log(greet("Sarah"));
console.log(add(5, 3));
console.log(sumOfSquares(3, 4));

console.log("Test your Exercise 2 functions here:")
console.log(checkAge(25));
console.log(getGrade(85));
console.log(getDayType("Monday"));
console.log(getSeasonEmoji("Summer"));
console.log(isEven(4));

console.log("Test your Exercise 3 functions here:")
console.log(sumNumbers(10));
console.log(findMax(numbers));
console.log(sumArray([1, 2, 3, 4, 5]));

console.log("Test your Exercise 4 functions here:")
colors.forEach(color => console.log(color));
console.log(getLargeNumbers(numbers));
console.log(doubleNumbers([1, 2, 3, 4, 5]));

console.log("Challenge Problems")
fizzBuzz();
console.log(isPalindrome("hello"));
console.log(isPalindrome("helleh"));
console.log(findDuplicates([1, 2, 3, 2, 4, 3]));