/**
 * Week 7 midterm array examples.
 *
 * @category    Week 7
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @date        2020.03.03
 **/
let myArray = [];

myArray.push("Str1");

myArray.push("Str2");

myArray.push("Str3");

let myNumber1 = myArray.shift();

myArray.push(myNumber1);

myArray.unshift("Str4");

myNumber1 = myArray.pop();

myArray.unshift(myNumber1);

// console.log( myArray );
// console.log( myArray[1] );
// console.log( myArray.length );

let myArr2 = [];
for( let x = 0; x < 50; x++)
{
    myArr2.push(x);
}

console.log(myArr2);
console.log(myArr2.length);
console.log(myArr2[ 24 ]);

myArr2[myArr2.length] = "asdjofbadjifb";