import { blue, blueTr, green, greenTr, red, redTr,yellow, yellowTr } from './colors'
import { legendPlugin } from './legend-plugin'
import { isHomePage } from './base';
import { currMonth } from './updateDate';

if(isHomePage){
  // Invoices by Status
  const invoicesData = {
    labels: ["paid", "pending", "refunded", "cancelled"],
    values: [399, 120, 10, 15],
    barColors: [greenTr, blueTr, yellowTr, redTr],
    borderColors: [green,blue, yellow, red],
  }

  new Chart("invoices", {
    type: "doughnut",
    data: {
      labels: invoicesData.labels,
      datasets: [{
        backgroundColor: invoicesData.barColors,
        data: invoicesData.values
      }]
    },
      options: {
        responsive:true,
        maintainAspectRatio:false,   
        plugins: {
          legend: {
            display:false,
          },
          title: {
            display:false,
            text:'Invoices by Status'
          },
          tooltip: {
            callbacks: {
              label: function(context){
                  return `${context.label}: #${context.formattedValue}`;
              },
              title:function(){
                return `${currMonth} Invoices`
              }
            }
        },
      }  
    },
    plugins: [legendPlugin]
  });

  // add border to span
  let invoicesLegendBoxes = document.querySelector('#invoices-legend').querySelectorAll('span');
  for (let i = 0; i < invoicesLegendBoxes.length; i++) {
    invoicesLegendBoxes[i].style.borderColor = invoicesData.borderColors[i];
  }
}



