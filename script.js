function displayTime(data) {
    const dt = data.datetime
    const month = dt.split('-')[1]
    const date = dt.split('-')[2].split('T')[0]
    const year = dt.split('-')[0]

    const time = dt.split('-')[2].split('T')[1].split('.')[0]
    const hour = time.split(':')[0]
    const min = time.split(':')[1]
    const s = time.split(':')[3]

    const D1 = new Digit(1)
    const D2 = new Digit(2)
    const D3 = new Digit(3)
    const D4 = new Digit(4)
    const mdy = new MDY(month, date, year)

    D1.display(hour.split('')[0])
    D2.display(hour.split('')[1])
    D3.display(min.split('')[0])
    D4.display(min.split('')[1])
    mdy.getDate()
    mdy.getWeek()
}
setInterval(function () {
    fetch('https://worldtimeapi.org/api/timezone/Asia/Manila', {
        method: 'GET',
    }).then(function (res) {
        res.json()
            .then(function (data) {
                displayTime(data)
                // console.log(data.datetime)
            })
            .catch(function (e) {
                console.log(e);
            });
    }).catch(function (e) {
        console.log(e);
    });
}, 1000)



