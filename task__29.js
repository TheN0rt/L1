// Принимаем event формы, чтобы взять саму форму, и callback
const getDataFromForm = (e, callback) => {
   // Останавливаем отправку формы
   e.preventDefault()

   // Берём данные из формы
   const formData = new FormData(e.target)

   // Для каждого поля из формы вызываем callback 
   for(let [name, value] of formData) {
      callback(name, value)
    }
}

// Пример функции callback
const logData = (name, value) => {
   console.log(name, value)
}

// Пример работы с функцией
document.querySelector('#formElem').addEventListener('submit', (e) => {
   getDataFromForm(e, logData)
   console.log(e)
})