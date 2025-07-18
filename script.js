let arr = ['Dhaka','Tangail','Chittagong','Sylhet','Khulna','Rajshahi','Barisal','Rangpur','Mymensingh'];
arr.forEach((city) => {
    console.log(city);
})
//...............................................................
//forEach Method
let arr = [2, 4, 6, 8, 10];
arr.forEach((num) => {
   console.log(num * num);
})
//...............................................................
// Callback Function 
let arr = [1, 2, 3, 4, 5];
let calSqt = (num) => {
  console.log(num * num);
}
arr.forEach(calSqt);
//...............................................................
// Map Method
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((num) => {
  return num * num;
})
console.log(newArr);
//...............................................................
// Filter Method
let arr = [ 2,5,8,10,12,14,16,18,20];
let newArr = arr.filter((val) => {
  return val % 2 === 0;
})
console.log(newArr);
//...............................................................
// Reduce Method
let arr = [12, 3, 5, 7, 9, 11, 13, 15, 17, 9];

let newArr = arr.reduce((previousValue, currentValue) => {
   return previousValue > currentValue ? previousValue : currentValue;
})
console.log(newArr);
//...............................................................
// Sum of all numbers from 1 to n using reduce method
let n = prompt('enter a number');
let arr = [];
for(let i =1 ; i <=n ; i++){
    arr[i-1] = i; // 1(i-1) = 1, 2(i-1) = 2, 3(i-1) = 3 
}
console.log(arr);
let newAr = arr.reduce((prev , curr) => {
  return prev + curr;
})
console.log(`Sum of all numbers is: ${newAr}`);

let factorial = arr.reduce((prev , curr) => {
  return prev * curr;
})
console.log(`Factorial is: ${factorial}`);
