"use strict";
// const year = document.getElementById('year');
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear
//1st variation
// const year = <HTMLSpanElement>document.getElementById('year');
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", (thisYear as unknown) as string)
// year.textContent = (thisYear as unknown) as string
//2nd variation
// let year: HTMLElement | null = document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear as unknown as string);
//   year.textContent = thisYear as unknown as string;
// }
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
