// Задача о палиндроме: 
// напишите функцию, которая проверяет, является ли заданная строка палиндромом. 
// Палиндром — это строка, которая читается одинаково в обоих направлениях (например, «аргентина манит негра»).


// Более затратная функция с множеством циклов и без проверки на спец. символы(кроме пробела, который удаляется)
const isSimplePalindrom = (str) => {
   // удаляем пробелы из строки, каждый элемент переводим в нижний регистр
   const res = str.split('').filter(el => el != ' ').map(el => el.toLowerCase())
   return res.join('') == res.reverse().join('')
}

// isSimplePalindrom('аргентина манит негра') - работает, true
// isSimplePalindrom('Довод')  - работает, true
// isSimplePalindrom('Коту тащат уток.') - не работает, false

// Проверка на спец символ (спец символы должны быть равны в любом регистре)
const isSpecialSymbol = (char) => {
   return char.toLowerCase() === char.toUpperCase() 
}

// Функция, менее затратная, работает по методу двух указателей, пропускает спец. символы (т.к. мы проверяем на буквенный палиндром)
const isPalindrom = (str) => {
   // указатели для цикла 
   let startIndex = 0
   let endIndex = str.length - 1

   while(startIndex < endIndex){
      const startChar = str[startIndex]
      const endChar = str[endIndex]

      // Проверяем на спец. символ текущий 1 и последний элементы. Пропускает если элемент таковым является
      if(isSpecialSymbol(startChar)){
         startIndex++
         continue
      }

      if(isSpecialSymbol(endChar)){
         endIndex--
         continue
      }

      // Если символы не равны, функция возвращает false и перестаёт работать
      if(startChar.toLowerCase() !== endChar.toLowerCase()){
         return false
      }
      // Сдвигаем указатели для следующей проверки 
      startIndex++
      endIndex--
   }

   return true
}

// isPalindrom('аргентина манит негра') - работает, true
// isPalindrom('Довод')  - работает, true
// isPalindrom('Коту тащат уток.') - работает, true

