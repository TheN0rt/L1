function checkStorageLength() {
   const limit = 5 * 1024 * 1024; // Предел размера localStorage (5 MB)
   let usedSpace = 0;
   // Пробегаемя по хранилищу и подсчитываем место
   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = localStorage.getItem(key);
      usedSpace += data.length;
   }
   console.log("Данные пользователя: " + usedSpace / 1024 / 1024, "Всего места на локальном хранилище" + limit)
}