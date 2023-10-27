// Аргументы - родительский элемент, название дочернего элемента, объект стилей для нового элемента
const addElement = (parentElement = document.querySelector('body'), nameOfElement, styles) => {
   // Создаём новый элемент
   const element = document.createElement(`${nameOfElement}`)

   // Копируем свойства переданного объекта syles в объект style нового элемента
   Object.assign(element.style, styles)

   // Вставляем новый элемент в родительский
   parentElement.appendChild(element)
}