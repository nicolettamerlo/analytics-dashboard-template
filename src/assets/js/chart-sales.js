import { blueTr, blue, green, greenTr} from './colors'
import { legendPlugin } from './legend-plugin';
import { isHomePage } from './base';

if(isHomePage){
  const salesData = {
    labels: ['Italy', 'Germany', 'UK', 'Spain', 'France', 'Portugal', 'other'],
    datasets: [
      {
        label: 'monthly online sales',
        data:[123, 92, 70, 65, 44, 33, 22],
        backgroundColor:blueTr,
        borderColor:blue,
        borderWidth: 1,
        stack: true
      },
      {
        label: 'monthly in store sales',
        data: [89, 62, 41, 35, 28, 14, 12],
        backgroundColor: greenTr,
        borderColor:green,
        borderWidth: 1,
        stack: true
      }
    ]
  };

  const salesConfig = {
      type: 'bar',
      data: salesData,
      options: {
        indexAxis: 'y',
          responsive:true,
          maintainAspectRatio:false,
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
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
          // // text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
          text:"Monthly Sales per Country",
          },
          legend: {
              display:false,
          },
          tooltip: {
              callbacks: {
                label: function(context){
                    const label = context.dataset.label.replace('monthly ', '').replace(' sales', '');
                    return `${label}: $${context.formattedValue}k`;
                },
                title:function(context){
                  return context[0].label + ' - monthly sales'
                }
              }
          },
      },
      },
      plugins: [legendPlugin] 
  };

  new Chart("sales", salesConfig);  
}




