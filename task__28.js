const cloneElementWithTemplate = (id, parentNode) => {
   // Берём template с помощью его id
   const template = document.querySelector(`#${id}`)

   try{
      // Берём содержимое шаблона и клонируем его
      const newElement = template.content.cloneNode(true)
      // Заносим в родительский элемент 
      parentNode.appendChild(newElement)
   } catch(e){
      alert(e)
   }

}

// cloneElementWithTemplate('el', document.body)