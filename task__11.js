// Создаём функцию оболочку
const returnOtherFunc = () => {
   // Создаём переменную внутри данной функции
   let perem = 1

   // Возвращаем другую функцию, которая имеет доступ к переменной, и возвращает переменную
   return () => {
      return perem
   }
}

// ----- getPerem указывает на область, где лежит функция, которая вернула нам функция-оболочка
//  В переменной лежит функция, которая вернулась от выполнения функции-оболочки
const getPerem = returnOtherFunc()
// console.log(perem())