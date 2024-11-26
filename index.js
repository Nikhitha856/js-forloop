//for loop to print the numbers from 1 to 20
for(i=1;i<=20;i++){
    console.log(i);
}

// for loop (squares of numbers)
for(j=1;j<=10;j++){
    console.log(j*j);
}

//print first 10 multiples of 5
for(var k=1;k<=10;k++){
    console.log(k*5);
}
console.clear()
// Write a for loop to print numbers from 20 to 1 in reverse order.
for(var m=20;m>=1;m--){
console.log(m);
}
//first 10 even numbers in reverse order
for(var n=20;n>=2;n-=2){
    console.log(n);
}
//Print each element of the array
// arr=[10, 20, 30, 40, 50]
//  console.log([arr])
arr1=[10, 20, 30, 40, 50]
for(var b=0;b<=arr1.length-1;b++){
    console.log(arr1[b])
}
console.clear()
//to print index of each element along with its value
arr2=['apple', 'banana', 'cherry']
for(f=0;f<=arr2.length-1;f++){
console.log(`Index ${f}: ${arr2[f]}`)
}
arr3=['apple', 'banana', 'cherry']
for(h=0;h<=arr2.length-1;h++){
console.log('index',h,':',arr3[h])
}
