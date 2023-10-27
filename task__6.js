// Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
// Напишите код, который сортирует этот массив по возрастанию 	возраста, а при равных возрастах сортирует по алфавиту по полю name.

const arr = [
   {
      name: 'Иван',
      age: 22
   },
   {
      name: 'Вика',
      age: 19
   },
   {
      name: 'Вася',
      age: 19
   },
]

// Сортировка с использованием существующего метода sort у массивов
const sortedArr = (arr) => {
   arr.sort((a, b) => {
   if(a.age !== b.age){
      // Сортировка по возрастанию возраста
      return a.age - b.age
   } else{
      // сортировка по алфавиту 
      return a.name.localeCompare(b.name)
   }
})

   return arr
}

// Не рабочий вариант быстрой сортировки(дублирует некоторые элементы массива)
const quickSort = (arr) => {
   if (arr.length <= 1) {
     return arr;
   }
 
   const pivotIndex = Math.floor(arr.length / 2);
   const pivot = arr[pivotIndex];
   const less = [];
   const greater = [];
 
   for (let obj of arr) {

      if(obj.age === pivot.age){
         if (obj.name < pivot.name) {
            less.push(obj);
          } else {
            greater.push(obj);
          }
      }

     if (obj.age < pivot.age) {
       less.push(obj);
     } else if (obj.age > pivot.age) {
       greater.push(obj);
     }
   }
 
   return [...quickSort(less), pivot, ...quickSort(greater)];
 }

// Алгоритм сортировки пузырьком
function sortArrayOfObjects(arr) {
   // цикл проходит по всем элементам массива
   for (let i = 0; i < arr.length - 1; i++) {
      // цикл для сравнения текущего элемента с последующим
     for (let j = 0; j < arr.length - i - 1; j++) {
       if (arr[j].age > arr[j + 1].age || (arr[j].age === arr[j + 1].age && arr[j].name.localeCompare(arr[j + 1].name) > 0)) {
         // меняем местами элементы 
         let temp = arr[j];
         arr[j] = arr[j + 1];
         arr[j + 1] = temp;
       }
     }
   }
 
   return arr;
 }

//  console.log(sortArrayOfObjects(arr))