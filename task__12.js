const book = {
   // Делаем вид, что они приватные(нежелательные для прямого доступа к ним)
   _name: 'Старик и море',
   _author: 'Эрнест Хемингуэй',
   _year: 1952,

   // Методы, которые изменяют свойства данного объекта(принцип одинаковый)
   // Используя контекст, заменяем свойства данного объекта на переданный в метод
   setName(name){
      this._name = name
   },

   setAuthor(author){
      this._author = author
   },

   setYear(year){
      this._year = year
   },

   // Используя контекст, получаем свойства данного объекта
   getName(){
      return this._name
   },

   getAuthor(){
      return this._author
   },

   getYear(){
      return this._year
   }
}

// console.log(book.getAuthor())
