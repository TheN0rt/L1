// Создаём асинхронную функцию, которая принимает url
const asyncFunc = async (url) => {
   // Используем fetch-запрос, который вернёт нам promise
   const response = await fetch(`${url}`)
   
   // Преобразуем ответ в формат json
   const data = await response.json()

   return data
}

// Пример использования
// const data = asyncFunc('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data))