import { blueTr, greenTr, redTr, yellowTr, cloudyGray, sharkGray} from './colors'

export const legendPlugin = {
  id: 'legendPlugin',
  afterUpdate(chart, args, options, test) {
    const items = chart.options.plugins.legend.labels.generateLabels(chart);
    const id = chart.canvas.id;
    const ul = document.querySelector(`#${id}-legend`);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }
    // Create the legend
    items.forEach(item => {
      const li = document.createElement('li');
      li.classList.add("chart__legend__list__item");
      li.onclick = (e) => {
        const {type} = chart.config;
        if (type === 'pie' || type === 'doughnut') {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
        }
        
        chart.update();
      };
      // Color box
      const boxSpan = document.createElement('span');
      boxSpan.classList.add("chart__legend__list__item__span");
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      const colorClass = assignColorClass(item.fillStyle);
      boxSpan.classList.add(`chart__legend__list__item__span-${colorClass}`);
      if(item.hidden) {
        boxSpan.style.background = sharkGray;
        boxSpan.style.borderColor = sharkGray;
      } else {
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
      }


      // Text
      const textContainer = document.createElement('p');
      textContainer.classList.add("chart__legend__list__item__text");
      textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

      const text = document.createTextNode(item.text);
      textContainer.appendChild(text);

      li.appendChild(boxSpan);
      li.appendChild(textContainer);
      ul.appendChild(li);
    });
  }  
}

const assignColorClass = (rgbColor) => {
  if(rgbColor==blueTr) return 'blue'
  if(rgbColor==redTr) return 'red'
  if(rgbColor==greenTr) return 'green'
  if(rgbColor==yellowTr) return 'yellow'
  if(rgbColor==cloudyGray) return 'cloudyGray'
  else return rgbColor
}