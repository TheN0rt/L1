// Реализовать аналог библиотеки Math (можно назвать MathX) с базовым набором функций, используя замыкания:
// вычисление N-го числа в ряду Фибоначчи Ф
// вычисление всех чисел в ряду Фибоначчи до числа N
// вычисление N-го просто числа
// вычисление всех простых чисел до числа N

// Будет плюсом, если задумаетесь и об оптимизации.
// Если мы создаём аналог, то по логике мы не должны использовать саму библиотеку Math, тогда:

// код без использования библиотеки Math
const MathX = (() => {
   let findFibOfNumber = function(n){
      return n < 2 ? n : findFibOfNumber(n-1) + findFibOfNumber(n-2)
    }

   let findAllFibNumbers = function(n){
      // Создаём массив, вкотором будут лежать числа в ряду Фибоначчи
      const arrOfFib = [1, 1]

      for(let i = 2; i < n; i++){
         // Берём 2 последних числа из массива и проверяем, равна ли их сумма с текущим числом. Если да, то текущее число добавляем в массив
         const arr = [...arrOfFib]
         if(i === arr.pop() + arr.pop()){
            arrOfFib.push(i)
         }
      }
      // Возвращаем массив в виде строки
      return arrOfFib.join(' ')
   }

   // Функция проверяет, простое ли число
   let isPrime = (n) => {
      if(n <= 1) {
         return false;
       }
       for(let i = 2; i < n; i++){
         if (n % i === 0) {
           return false;
         }
       }
       return true;
   }

   // Если бы использовали библиотеку Math, то можно было бы оптимизировать так:
   // let isPrime = (n) => {
   //    if (n <= 1) {
   //       return false;
   //     }
   //     for (let i = 2; i < Math.floor(Math.sqrt(n)); i++) { // Решето Эратосфена, нам необязательно проверять всё число, а только его корень т.к. n = sqrt(n) * sqrt(n)
   //       if (n % i === 0) {
   //         return false;
   //       }
   //     }
   //     return true;
   // }

   let findAllPrimes = function(n){
      const result = [];
      // Проверяем в цикле, простое ли число. Если да, то добавляем в массив простых чисел
      for(let i = 2; i <= n; i++){
        if (isPrime(i)) {
          result.push(i);
        }
      }
      // Возвращаем массив простых чисел в виде строки
      return result.join(' ');
   }

   let findPrimeOfNumber = function(n){
      // Заводим счётчик простых чисел до заданного числа, текущее простое число и число, которое мы будем проверять на простоту
      let count = 0;
      let currentPrime = 1;
      let i = 1;
      
      // В цикле проверяем на простоту, увеличиваем счётчик и присваиваем текущее простое число к текущему числу, которое проверяли
      while(count < n){
         if(isPrime(i)){
            count += 1
            currentPrime = i
         }

         i++
      }

      return currentPrime
   }
   // Возвращаем объект, в котором будут методы MathX
   return {
      findFibOfNumber: findFibOfNumber, 
      findAllFibNumbers: findAllFibNumbers, 
      findPrimeOfNumber: findPrimeOfNumber,
      findAllPrimes: findAllPrimes
   }
})()

const mathX = MathX()