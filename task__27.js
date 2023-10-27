// Принимает элемент, свойство для анимирования, до какой позиции анимировать, скорость анимации
const animateFunc = (el, prop, targetValue, delay) => {
   // Превращаем свойство в строку
   prop = prop + ''
   // Берём текущую позицию элемента
   let pos = getComputedStyle(document.querySelector('#el'))[prop].slice(0, -2)
   
   // Анимация через интервал времени
   let id = setInterval(() => {
      animateEl(el, prop, pos)
   }, delay)

   const animateEl = () => {
      // Проверка, в какую сторону анимировать
      if(targetValue - pos < 0){
         pos--

         // Когда доходим до нужной позиции, отменяем анимацию
         if(pos === targetValue){
            clearInterval(id)
         }
      } else{
         pos++

         if(pos >= targetValue){
            clearInterval(id)
         }
      }

      // Записываем новую позицию в свойство
      el.style[prop] = pos + 'px'
      
   }
   
}

// animateFunc(document.querySelector('#el'), "width", 10, 20)