import { isHomePage } from "./base";
import { year } from "./updateDate";
import { month } from "./updateDate";
import { months } from "./updateDate";
import { currDay } from "./updateDate";

const calendarRow = ` 
    <tr>
        <td class="calendar__cell">&nbsp;</td>
        <td class="calendar__cell">&nbsp;</td>
        <td class="calendar__cell">&nbsp;</td>
        <td class="calendar__cell">&nbsp;</td>
        <td class="calendar__cell">&nbsp;</td>
        <td class="calendar__cell">&nbsp;</td>
        <td class="calendar__cell">&nbsp;</td>
    </tr>`;

if(isHomePage) {

    // Get the DOM Element
    const calenderBody = document.querySelector(".calendar__body");

    // Get the first day of the curr month
    const firstDay = new Date(year, months.indexOf(month), 0).getDay()
    const monthLength = calculateMonthLength()

   // Create the array of days
    let daysArray = []
    for (let i = 0 ; i < monthLength + firstDay; i++) {
        if(i<firstDay) daysArray.push("&nbsp;")
        else daysArray.push(i-firstDay+1)        
    }

    // Create the rows and cells for the calendar
    const rowsNumb = Math.ceil((monthLength + firstDay) / 7)
    for (let i = 0; i < rowsNumb; i++) calenderBody.insertAdjacentHTML("afterbegin", calendarRow)

    // Insert the days into the calendar
    const cells = Array.from(document.querySelectorAll(".calendar__cell"))
    for (let i = 0; i < daysArray.length; i++) {
        cells[i].innerHTML = daysArray[i];
        if(cells[i].innerHTML === currDay) cells[i].classList.add("current")
    }
    // Disable hover on empty cells
    cells.forEach(cell => {
        if(cell.innerHTML == "&nbsp;") cell.classList.add("empty")
    });
    
}

function calculateMonthLength() {
    // Apr Jun Sep Nov
    const shortMonths = ["Apr", "Jun", "Sep", "Nov"];
    if(shortMonths.includes(month)) return 30
    else if(month==="Feb") {
        if(year === 2024 || year===2028) return 29
        else return 28
    }
    else return 31
}