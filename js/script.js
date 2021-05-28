//Task #1

//Реализовать рекурсивную функцию которая находит факториал переданного в нее числа

//getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

function getFactorial(n){
    if (n === 1){
        return 1;
    }
    else{
         
        return n * getFactorial(n - 1);
    }
}
let  result = getFactorial(3); 
console.log(result); 

//Task #2

// Task #2

// Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию

// pow(num, degree)

function movePow(k, i){
 
}

let barelyUndestand = movePow(5);
  console.log(barelyUndestand);