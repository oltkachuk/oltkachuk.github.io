var text = prompt("Введіть через пробіл масив елементів")
var arr = text.split(" "); 
var arr2 = []; //новий порожній масив
var j = 0;
var random = 0;
var leng = arr.length; 
for (j = 0; j < leng; j++){
    while (true) {  // вічний цикл для визначення рандомного числа
        random = Math.round(Math.random() * 10);
        if (random < arr.length) {  
            break
        }
    }
    arr2[j] = arr[random];
    remove = arr.splice(random, 1); // видалення числа який уже вставили в ноий масив
  }
console.log("New array = " + arr2)

