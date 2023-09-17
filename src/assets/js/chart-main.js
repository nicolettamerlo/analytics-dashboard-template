import { legendPlugin } from './legend-plugin'
import { blueTr, blue, greenTr, green, red, redTr, yellow, yellowTr, sharkGray, cloudyGray } from './colors'
import { isHomePage } from './base'
import { month, months } from './updateDate'


if(isHomePage){

    const monthsArranged = months.slice(months.indexOf(month)).concat(months.slice(0, months.indexOf(month))).reverse()

    const mainData = {
        incomeOnline: {
            type: 'bar',
            label: 'online sales',
            data: [45, 53, 50, 48, 39, 60, 54, 47, 41, 32, 46, 39],
            borderColor: blue,
            backgroundColor: blueTr,
            borderWidth:1,
            stack: 'Stack 0',
        },
        incomeInStore: {
            type: 'bar',
            label: 'in store-sales',
            data: [33, 36, 45, 39, 43, 51, 41, 29, 39, 25, 37, 31],
            borderColor: green,
            backgroundColor: greenTr,
            borderWidth:1,
            stack: 'Stack 0',
        },
        expenses: {
            type: 'bar',
            label: 'expenses',
            data: [25, 29, 21, 15, 18, 33, 34, 37, 41, 49, 43, 22],
            borderColor: red,
            backgroundColor: redTr,
            borderWidth:1,
        },
        profit: {
            type: 'line',
            label: 'profit',
            data: [53, 60, 74, 72, 64, 78, 61, 39, 39, 8, 40, 48],
            pointStyle: 'star',
            pointRadius: 6,
            pointHoverRadius: 7,
            borderColor: yellow,
            backgroundColor: yellowTr,
            tension:0.2,
            borderWidth:1, 
    
        },
        profitGoal: {
            type: 'line',
            label:'profit goal',
            data: [55, 63, 70, 68, 69, 67, 65, 42, 35, 12, 44, 46],
            pointStyle: 'star',
            pointRadius: 6,
            pointHoverRadius: 7,
            borderColor: sharkGray,
            backgroundColor: cloudyGray,
            tension:0.2,
            borderWidth:1,
            fill:'-1'
        },

        labels: monthsArranged
    }

    const mainChartData = {
        labels: mainData.labels,
        datasets: [
            mainData.incomeOnline,
            mainData.incomeInStore,
            mainData.expenses,
            mainData.profit,
            mainData.profitGoal  
        ],
    }
    const mainChartConfig = {
        data: mainChartData,
        options: {
            plugins: {
                title: {
                    display: false,
                    text: 'Sales and Expenses - Last 12 Months'
                },
                legend: {
                    display:false
                },
                tooltip: {
                    callbacks: {
                        label: function(context){
                            return context.dataset.label + ': ' + '$' + context.formattedValue + 'mil';
                        },
                        title:function(context) {
                            return months[context[0].label];
                        }
                    }
                },
            },
            responsive:true,
            maintainAspectRatio:false,
            scales: {
                y: {
                    title: {
                        display:true,
                        text:'$ dollars',
                        beginAtZero: true
                    },
                    ticks:{
                        callback:function(value, index, ticks){
                            return '$' + value + 'mil';
                        }
                    }
                },
            },
        },
        plugins: [legendPlugin] 
    }
    new Chart("mainChart", mainChartConfig);    
}



