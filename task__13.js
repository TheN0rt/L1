// Создаём родительский класс
class Shape {
   constructor() {
     this.name = 'Фигура';
   }
//  Методы, которые будут меняться в  подклассах
   calculateArea() {
   }
 
   calculatePerimeter() {
   }
}

// Создаём подклассы
class Rectangle extends Shape {
   constructor(width, height) {
      // Специальный метод наследнования, в данном случае нужен для переопределения(изменения) методов вычисления площади и периметра 
      super(); 
      this.name = 'Прямоугольник';
      this.width = width;
      this.height = height;
   }

   calculateArea() {
      return this.width * this.height;
   }

   calculatePerimeter() {
      return 2 * (this.width + this.height);
   }
}

class Circle extends Shape {
   constructor(radius) {
      super();
      this.name = 'Круг';
      this.radius = radius;
   }

   calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
   }

   calculatePerimeter() {
      return 2 * Math.PI * this.radius;
   }
}

class Triangle extends Shape {
   constructor(a, b, c) {
      super();
      this.name = 'Треугольник';
      this.a = a;
      this.b = b;
      this.c = c;
   }

   // Общая формула для расчёта площади треугольника
   calculateArea() {
      const semiPerimeter = (this.a + this.b + this.c) / 2;
      return Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
   }

   calculatePerimeter() {
      return this.a + this.b + this.c;
   }
}
 
 // Создаем экземпляр прямоугольника
 const rectangle = new Rectangle(5, 10);
 
 // Создаем экземпляр круга
 const circle = new Circle(3);
 
 // Создаем экземпляр треугольника
 const triangle = new Triangle(3, 4, 5);