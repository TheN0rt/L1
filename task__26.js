// Функция принимает стартовый элемент и функцию-callback
const recDOM = (startingEl, callback) => {

   // Циклом проходимся по дочерним элементам стартового элемента
   for(let i = 0; i < startingEl.children.length; i++){
      // Выполняем вызов callback'a с этим элементом
      callback(startingEl.children[i])

      // Вызываем эту функцию рекурсивно для других элементов(Обход в длину)
      recDOM(startingEl.children[i], callback)
   }
}

// Пример использования
// recDOM(document.querySelector('body'), (el) => {
//    console.log(el)
// })