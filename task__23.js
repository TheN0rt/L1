const checkPass = (pass) => {
   // Массив сложности пароля
   const strengthOfPass = ['Очень слабый', 'Слабый', 'Средний', 'Сильный']
   // Регулярные выражения для проверки сложности пароля
   const numbers = /(?=.*[0-9])/
   const lowerLetters = /(?=.*[a-z])/
   const upperLetters = /(?=.*[A-Z])/
   const unicSymbols = /(?=.*[!@#$%^&*])/
   
   // Массив, который содержит группы элементов(если пароль содержит цифры, то в массив добавляется элемент "numbers")
   const contains = []

   // Проверка на содержание в пароле символов, если есть, то в массив contains добавляется нужный элемент
   numbers.test(pass) ? contains.push('numbers') : ''
   lowerLetters.test(pass) ? contains.push('lowerLetters') : ''
   upperLetters.test(pass) ? contains.push('upperLetters') : ''
   unicSymbols.test(pass) ? contains.push('unicSymbols') : ''

   // Строка советов для улучшения пароля
   let str = '';

   // Проверки на сложность пароля
   if(pass.length < 6){
      str = 'Чтобы улучшить пароль, используйте символы верхнего и нижнего регистра, цифры и спец. символы, такие как "! @ $ % ^ & *". Сделайте длину пароля больше 10'
      // Возвращаем объект, в котором содержится строка совета, сложность пароля
      return {
         advice: str, 
         strength: strengthOfPass[0] 
      }
   } else{

      if(pass.length <= 10){
         if(contains.length < 2){
            str = 'Чтобы улучшить пароль, используйте символы верхнего и нижнего регистра, цифры и спец. символы, такие как "! @ $ % ^ & *". Сделайте длину пароля больше 10'
            return {
               advice: str,
               strength: strengthOfPass[1]
            }
         }

         if(contains.length < 4){
            str = 'Чтобы улучшить пароль, используйте символы верхнего и нижнего регистра, цифры и спец. символы, такие как "! @ $ % ^ & *". Сделайте длину пароля больше 10'
            return {
               advice: str,
               strength: strengthOfPass[2]
            }
         }
      }
      
      if(pass.length > 10){
         if(pass.length > 20) {
            str = ''
            return {
               advice: str,
               strength: strengthOfPass[3]
            }
         }

         if(contains.length < 4){
            str = 'Чтобы улучшить пароль, используйте символы верхнего и нижнего регистра, цифры и спец. символы, такие как "! @ $ % ^ & *". Сделайте длину пароля больше 10'
            return {
               advice: str,
               strength: strengthOfPass[2]
            }
         }

         if(contains.length >= 4){
            str = ''
            return {
               advice: str,
               strength: strengthOfPass[3]
            }
         }
      }

   }
}