// кількість слів
//var text = " World \"is\" after the, - \" empty \" ! ";
var text = prompt("Введіть речення", ' ')
var arr = text.split(" ");
var calcSpecil = 0; 
var culcAllWord = 0;
// рахуємо кількість спеціальних символів які не є реченням але можуть бути відділені пробілом)
    for (i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case "":
                    calcSpecil++
                    break;
                case " ":
                    calcSpecil++
                    break;
                case "\"":
                    calcSpecil++
                    break;
                case "!":
                    calcSpecil++
                    break;
                case "-":
                    calcSpecil++
                    break;
                case "?":
                    calcSpecil++
                    break;
                case ".":
                    calcSpecil++
                    break;
                case ",":
                    calcSpecil++
                    break;
                case ":":
                    calcSpecil++
                    break;    
                default:
                    break;
            }     
        culcAllWord += arr[i].length;
    }
    var culcSentence = arr.length - calcSpecil;

console.log("Кількість слів = " + culcSentence)
//кількість всіх символів
console.log("Кількість символів = " + culcAllWord)

