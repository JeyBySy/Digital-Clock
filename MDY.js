class MDY {
    constructor(month, date, year) {
        var dt = new Date();

        this.month = month
        this.date = date
        this.year = year
        this.week = dt.getDay()
    }
    getDate() {
        const mdy = document.querySelector(`[data-date="date"]`)
        mdy.textContent = `${alphaMonth(this.month)} ${this.date}, ${this.year}`
    }
    getWeek() {
        const weeks = document.querySelector(`[data-week="week"]`)
        const week = weeks.children
        for (let i = 1; i <= week.length; i++) {
            if (i === this.week) {
                week[this.week].classList.add('today')
            }
        }
    }
}
function alphaMonth(month) {
    var m = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    return m[Math.round(month)]
}