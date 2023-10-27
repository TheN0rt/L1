// Вывод функций в поледовательности с помощью цикла  
const callFunctions = (arr) => {
   for(let i in arr){
      arr[i]()
      console.log("Функция №" + i)
   }
}

// Вызов функция рекурсий с использованием замыкания
const callFunctionsRec = (arr) => {
   let index = 0

   const callNextFunction = (index) => {
      // Вызов функции самой себя будет происходить до тех пор, пока индекс будет меньше длины массива
      if(index < arr.length){
         arr[index]()
         console.log("Функция №" + i)
         index++
         callNextFunction(index)
      }
   }

   callNextFunction(index)
}

const functions = [
   function() { console.log(1); },
   function() { console.log(2); },
   function() { console.log(3); }
 ];

//  callFunctions(functions)
callFunctionsRec(functions)