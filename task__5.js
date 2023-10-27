// Разработайте функцию преобразования JSON в связный список. 
// На входе функция должна получать JSON, содержащий список объектов, на выходе объект, представляющий из себя односвязный список.

// Создаём класс, который описывает нашу node
class Node{
   constructor(value, next = null){
      this.value = value
      this.next = next
   }
}

const jsonToLinkedList = (json) => {
   // Парсируем JSON файл в массив объектов, создаём наш односвязный список и указатель на предыдущую node
   const jsonArr = JSON.parse(json);
   const linkedList = {};
   let prevNode = null;

   // Итерируемся по JSON файлу
   for(let data of jsonArr){
      const node = new Node(data);

   // Проверяем, есть ли в нашем списке head и tail(начальная и конечная node)
      if(!linkedList.head || !linkedList.tail){
         linkedList.head = node;
         linkedList.tail = node;
      } else{
         prevNode.next = node;
      }
   // Передавигаем указатель предыдущей node на текущую, также делаем и с tail 
      prevNode = node;
      linkedList.tail = node;
   }

   return linkedList
}

const json = '[{"value": "a"}, {"value": "b"}, {"value": "c"}]';
const linkedList = jsonToLinkedList(json)
console.log(linkedList.head.next.next.value)