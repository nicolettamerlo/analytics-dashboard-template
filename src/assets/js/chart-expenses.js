import { legendPlugin } from './legend-plugin';
import { blue, blueTr, green, greenTr, yellow, yellowTr, red, redTr } from './colors';
import { isHomePage } from './base';


if(isHomePage){
  
  const expensesData = {
    datasets: [
      {
        type: 'line',
        label: 'marketing',
        data: [30, 37, 33, 28, 31, 26, 17, 24, 35, 19, 22, 16, 34, 23, 30, 19, 21, 27],
        borderColor: green,
        backgroundColor: greenTr,
        pointRadius:0,
        tension: .3,
        borderWidth:1,
        fill:true
      },
      {
        type: 'line',
        label: 'consulting',
        data: [14, 20, 19, 9, 14, 12, 17, 20, 14, 23, 12, 8, 12, 16, 14, 11, 12, 8],
        borderColor: blue,
        backgroundColor: blueTr,
        pointRadius:0,
        tension: .3,
        borderWidth:1,
        fill:true
      }, 
      {
        type: 'line',
        label: 'services',
        data: [14, 16, 18, 16, 17, 18, 16, 16, 17, 15, 15, 19, 19, 13, 15, 15, 16, 14],
        borderColor: yellow,
        backgroundColor: yellowTr,
        pointRadius:0,
        tension: .3,
        borderWidth:1,
        fill:true,
      },
      {
        type: 'line',
        label: 'other',
        data: [7, 6, 8, 5, 5, 9, 6, 7, 10, 6, 6, 7, 9, 9, 7, 6, 8, 5],
        borderColor: red,
        backgroundColor: redTr,
        pointRadius:0,
        tension: .3,
        borderWidth:1,
        fill:true,
      },
    ],
    labels: Array.from({length: 18}, (_, i) => i + 1)
  }
  
  const expensesChartConfig = {
    type: 'line',
    data:expensesData,
    options: {
      responsive:true,
      maintainAspectRatio:false,    
      scales: {
        x: {
          beginAtZero: true,
          display:false,
        },
        y: {
          ticks:{
            callback:function(value, index, ticks){
                return '$' + value + 'k';
            }
        }
        }
      },
      plugins: {
        title: {
          display: false,
          text:'Monthly Expenses by Category'
        },
        legend: {
          display:false
        }
      }
    },
    plugins: [legendPlugin] 
  }
  new Chart("expenses", expensesChartConfig);
} 


