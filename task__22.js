// Счётчик не идёт, он выполняется сколько угодно раз
// document.write(document.write()) - должен записывать undefined, но из-за того, что выполняется бесконечно, происходит зависание страницы 
let i = 0
try{
   while(true){
      i++
      // document.open();
      document.write(document.write())
      // document.close()
   }
} catch(e){
   console.log(i)
}
