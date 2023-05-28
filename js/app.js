
//x = +prompt("Введите х")
function app() 
{
    x = parseInt(document.getElementById("rost").value);
    y = parseInt(document.getElementById("ves").value);

    ind = y / ((x/100)**2)

    if (ind <= 16) {
        str = "Выраженный дефицит"
    }
    if (17,9 >= ind >= 16){
        str = "Дефицит"
    }
    if (24,99 >= ind >= 18,5){
        str = "Нормальный вес"
    }

    document.getElementById("result").innerText = str;
    document.getElementById("index").innerText = "Индекс массы: " + ind;
}
