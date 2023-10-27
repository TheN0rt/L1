const calculateLocalStorageQuota = () => {
   // Создём переменную, в которую будем заносить результат вычисления
   let data = '';
   // Используем конструкцию try/catch, где код в блоке try будет выполняться до появления ошибки
   try {
      // Записываем в строку символы, в сумме которые дают нам 1 мб
      const oneMbString = '1'.repeat(1024 * 1024);

      // Бесконечный цикл(закончится, когда отловится ошибка)
      while (true) {
      data += oneMbString;
      // записываем в localStorage
      localStorage.setItem('testData', data);
      }
   } catch (e) {
      // Проверяем имя ошибки, которая нам нужна
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
         // Должно выдать нам кол-во добавленных строк в data
         const quotaInMb = Math.floor(data.length / (1024 * 1024));
         console.log(`Максимальный объем данных в localStorage: ${quotaInMb} Мб`);
      } 
      // Отлавливаем остальные ошибки, если ои возникнут
      else {
         console.error('Произошла ошибка:', e);
      }
   }
}

calculateLocalStorageQuota();