btnGetRateValute.addEventListener('click', getRateValute, false)

const BASEURL = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=";
const ONEDAY = 24 * 60 * 60 * 1000;

async function getRateValute(e) {
    arrRate = [];
    arrDate = [];
    let arrNBU_Date = getArrayDateFromNBU();
    let i;
    let URI;
    for (i = 0; i < arrDate.length; i++){
        URI = GenerateURIFromNBU(arrNBU_Date[i]);
        try{
        let res = await fetch(URI)
        let data = await res.json()
        arrRate.push(data[0].rate)
        }
        catch{
            console.error('Error')
        }finally{
            console.log("Finnaly...")
        }
    }
    await  
    Highcharts.chart('result', {
        chart: {
            type: 'spline'
        },
        title: {
            text: `UAH/${val.value} Exchange Rate`
        },
        subtitle: {
            text: 'Source: bank.gov.ua'
        },
        xAxis: {
            categories: arrDate
        },
        yAxis: {
            title: {
                text: 'rate UAH'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: `UAH/${val.value}`,
            data: arrRate
        }]
    });
}

function getArrayDateFromNBU(){
    let startDate = new Date(document.getElementById('sdate').value);
    let endDate = new Date(document.getElementById('ndate').value);
    if (startDate > new Date() || endDate > new Date()){ 
        return confirm("Valide Date")
    }
    if (startDate > endDate){
        return confirm('Vallid Date')
    }
    let diffDate = (endDate - startDate)/ONEDAY;
    let i = 0;
    let curDate;
     while (i <= diffDate){
         curDate = new Date (startDate.valueOf() + i * ONEDAY);
         i++;
         if ((curDate.getDay() === 6) || (curDate.getDay() === 0)){
             continue
         }
         arrDate.push(dateToStringNBU(curDate));
        
    }
    return arrDate;
}

function GenerateURIFromNBU (date){
    var valute = document.getElementById('val')
    return `${BASEURL}${valute.value}&date=${date}&json`
}

function dateToStringNBU(dateObj) {
    function add0(value) {
        return (value.toString().length < 2) ? `0${value}` : value.toString();
    }
    if (dateObj instanceof Date) {
        return `${dateObj.getFullYear()}${add0(dateObj.getMonth() + 1)}${add0(dateObj.getDate())}`;
    }
    return false;
}
