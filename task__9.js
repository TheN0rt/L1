// С использованием встроенных методов
const JSONToString = (json) => {
   return JSON.stringify(json)
}

// Без использования встроенных методов. Недостаток - массив объектов преобразовывает в объект с вложенными объектами
const toString = (json) => {
   // Проверяем тип аргумента
   if(typeof json === "object"){
      let string = '{'
      // Переключатель, нужен для расставления запятых после вложенных объектов(в JSON формате после последнего вложенного объекта или свойства запятая не ставится)
      let isFirstProperty = true

      // пробегаемся по объектам внутри json
      for(let key in json){
         if(json.hasOwnProperty(key)){
            if(!isFirstProperty){
               string += ','
            }

            string += `${key}: ${toString(json[key])}`
            isFirstProperty = false
         }
      }

      string += '}'
      return string
   }
   // Если аргумент является строкой, мы его возвращаем, оборачивая в кавычки
   else if(typeof json === "string"){
      return `${json}`
   // Иначе мы пользуемся функцией-конструктором и превращаем аргумент в строку 
   } else{
      return String(json)
   }
}

const json = [
   {
      name: "Вася",
      age: 24
   },
   {
      name: "Маша",
      age: 23
   },
   {
      name: "Иван",
      age: 33
   },
]

console.log(toString(json))