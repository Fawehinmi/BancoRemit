

const labels = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Firday',
    'Saturday'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [65, 59, 80, 81, 56, 55, 40],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};
