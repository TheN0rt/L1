const getImgURL = (url) => {
   // Возврщаем промис
   return new Promise((resolve, reject) => {
      // создаём новый экземпляр Image 
      const img = new Image()

      // Передаём ему наш url
      img.src = url

      // При успешной загрузке изображения выполняется функция resolve()
      img.onload = () => {
         resolve(url)
      }

      // Если загрузка изображения не удалась, выполняется функция reject()
      img.onerror = () => {
         reject(new Error('Неправильная ссылка на изображение'))
      }
   })
}

const imgUrl = 'http:/path/image.jpg';

getImgURL(imgUrl).then(imgUrl => {
   console.log('Рабочая ссылка на изображение', imgUrl)
}).catch(error => {
   console.error(error)
})