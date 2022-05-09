fetch('http://worldtimeapi.org/api/timezone/Asia/Manila', {
    method: 'GET',
}).then(function (res) {
    res.json()
        .then(function (data) {
            console.log(data);
        })
        .catch(function (e) {
            console.log(e);
        });
}).catch(function (e) {
    console.log(e);
});

