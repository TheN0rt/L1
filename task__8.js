const functions = [
   function() { return 1; },
   function() { return 2; },
   function() { return 3; }
 ];

//  Функция возвращает функцию, которая выполняет поочерёдный вызов функций внутри массива и заносит их в результатирующий массив 
// Возврат массива происходит после вызова функции, которую возвращает функция-оболочка - вызовФункции()()
 const callFunc = (arr) => {
   // Результатирующий массив
   const res = []

   return () => {
      for(let index in arr){
         res.push(arr[index]())
      }

      return res
   }
 }

//  console.log(callFunc(functions)())