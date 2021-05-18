const labels = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const data = {
    labels: labels,
    datasets: [
        {
          label: 'Тело кредита',
          data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
          backgroundColor: 'rgb(227, 172, 45)'
        },
        {
          label: 'Проценты',
          data: [65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10],
          backgroundColor: 'rgb(54, 162, 235)'
        },
        
      ],
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      plugins: {
        title: {
          display: true,
          text: 'График платежей по кредиту'
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  };

  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  const depdata = {
    labels: [
      'Сумма вклада',
      'Доходность'
    ],
    datasets: [{
      label: 'Депозит',
      data: [1000000, 55000],
      backgroundColor: [
        'rgb(227, 172, 45)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };
  // </block:setup>
  
  // <block:config:0>
  const depconfig = {
    type: 'doughnut',
    data: depdata,
  };
  // </block:config>

  var depositChart = new Chart(
    document.getElementById('depositChart'),
    depconfig
  );

var date = new Date(), 
  year = date.getFullYear(), 
  month = date.getMonth() + 1, 
  day = date.getDate();

if(day < 10) day = '0' + day;

if(month < 10) month = '0' + month;

date = year + '-' + month + '-' + day;

document.getElementById("ind_pass_date").setAttribute("max", date);
document.getElementById("ind_pass_date").value = date;
