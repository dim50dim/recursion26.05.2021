//Task #1

//Реализовать рекурсивную функцию которая находит факториал переданного в нее числа

//getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

function fact(n){
    if (n === 1){
        return 1;
    }
    else{
         
        return n * fact(n - 1);
    }
}
let  result = fact(3); 
console.log(result); 

//Task #2

// Task #2

// Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию

// pow(num, degree)
function pow(x, n){
    if(n === 1){
        return x;
    }else{
        return x * pow(x,n - 1);
    }
}
console.log(pow(3, 4));






// HERE  we can use recursion instead of loop while
let a = 1;

function rec(){
    a = a + 1;
    console.log(a);
    if(a > 11){
        return a;
    }
    rec();
   
}
rec();








