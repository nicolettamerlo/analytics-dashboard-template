import { isHomePage } from "./base";

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const monthsExtended = ["January","February","March","April","May","June","July","August","September","October","November","December"];


// TODAY
const today = new Date()
export const year = today.getFullYear()
export const month = today.toDateString().substring(4,7)
export const currDay = today.toDateString().substring(8,10)
export const currYear = today.toDateString().substring(13,15)
export const currMonth = monthsExtended[months.indexOf(month)]

// YESTERDAY
const yesterday = new Date(today.setDate(today.getDate() - 1))
const yesterdayDay = yesterday.toDateString().substring(8,10)
const yesterdayYear = yesterday.toDateString().substring(13,15)
const yesterdayMonth = yesterday.toDateString().substring(4,7)
// TWO DAYS AGO
const twoDaysAgo = new Date(yesterday.setDate(yesterday.getDate() - 1))
const twoDaysAgoDay = twoDaysAgo.toDateString().substring(8,10)
const twoDaysAgoYear = twoDaysAgo.toDateString().substring(13,15)
const twoDaysAgoMonth = twoDaysAgo.toDateString().substring(4,7)
// TOMORROW
const tomorrow = new Date(today.setDate(today.getDate() + 2))
const tomorrowDay = tomorrow.toDateString().substring(8,10)
const tomorrowYear = tomorrow.toDateString().substring(13,15)
const tomorrowMonth = tomorrow.toDateString().substring(4,7)
// IN 3 DAYS
const inThreeDays = new Date(today.setDate(today.getDate() + 3))
const inThreeDaysDay = inThreeDays.toDateString().substring(8,10)
const inThreeDaysYear = inThreeDays.toDateString().substring(13,15)
const inThreeDaysMonth = inThreeDays.toDateString().substring(4,7)

if(isHomePage) {

    // Dom Elements
    const currentDayElements = Array.from(document.querySelectorAll(".current-day"))
    const currentMonthElements = Array.from(document.querySelectorAll(".current-month"))
    const currentYearElements = Array.from(document.querySelectorAll(".current-year"))
    const currentDateElements = Array.from(document.querySelectorAll(".current-date"))
    const yesterdayDateElements = Array.from(document.querySelectorAll(".yesterday-date"))
    const twoDaysAgoDateElements = Array.from(document.querySelectorAll(".twodaysago-date"))
    const currentDateShortElements = Array.from(document.querySelectorAll(".current-date-short"))
    const yesterdayDateShortElements = Array.from(document.querySelectorAll(".yesterday-date-short"))
    const inThreeDaysDateShortElements = Array.from(document.querySelectorAll(".inthreedays-date-short"))
    const tomorrowDateShortElements = Array.from(document.querySelectorAll(".tomorrow-date-short"))

    // Update Dom Elements
    currentMonthElements.map(curr => curr.innerHTML = currMonth)
    currentYearElements.map(curr => curr.innerHTML = year)
    currentDateElements.map(curr => curr.innerHTML = [currDay, formatMonth(month), currYear].join("/"))
    yesterdayDateElements.map(curr => curr.innerHTML = [yesterdayDay, formatMonth(yesterdayMonth), yesterdayYear].join("/"))
    twoDaysAgoDateElements.map(curr => curr.innerHTML = [twoDaysAgoDay, formatMonth(twoDaysAgoMonth), twoDaysAgoYear].join("/"))
    currentDateShortElements.map(curr => curr.innerHTML = [currDay, formatMonth(month)].join("/"))
    yesterdayDateShortElements.map(curr => curr.innerHTML = [yesterdayDay, formatMonth(yesterdayMonth)].join("/"))
    inThreeDaysDateShortElements.map(curr => curr.innerHTML = [inThreeDaysDay, formatMonth(inThreeDaysMonth)].join("/"))
    tomorrowDateShortElements.map(curr => curr.innerHTML = [tomorrowDay, formatMonth(tomorrowMonth)].join("/"))
}

function formatMonth(month) {
    const monthDigit = months.indexOf(month) + 1;
    if(monthDigit<10) return `0${monthDigit}`;
    else return monthDigit
}

