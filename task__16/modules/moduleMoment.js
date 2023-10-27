// Жалуется на импорт, не знаю как исправить
import moment from 'moment';

const workWithDate = (date) => {
   // вызываем метод формат для отображения даты, какой мы хотим и возвращаем
   return moment(date).format('DD-MM-YYYY')
}

export default workWithDate