window.onload = () => {
  var evtSource = new EventSource('/stream');
  evtSource.onmessage = e => {
    let data = JSON.parse(e.data);
    document.getElementById('gas-conc').innerText = data.conc;
    document.getElementById('temperature').innerText = data.temperature;
    document.getElementById('humidity').innerText = data.humidity;
    // document.getElementById('t_stamp').innerText = `djodo`;
    let ts = document.getElementsByClassName('t_stamp');
    [].forEach.call(document.getElementsByClassName('t_stamp'), el => {
      el.innerText = `${new Date(data.time_stamp)}`;
    });
  };
};
FusionCharts.ready(function() {
  var fusioncharts = new FusionCharts({
    type: 'column2d',
    renderAt: 'chart-container',
    width: 0 - 20 + window.innerWidth / 2,
    height: '400',
    dataFormat: 'json',
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Countries With Most Oil Reserves [2017-18]',
        subCaption: 'In MMbbl = One Million barrels',
        xAxisName: 'Country',
        yAxisName: 'Reserves (MMbbl)',
        numberSuffix: 'K',
        theme: 'fusion'
      },
      // Chart Data
      data: [
        {
          label: 'Venezuela',
          value: '290'
        },
        {
          label: 'Saudi',
          value: '260'
        },
        {
          label: 'Canada',
          value: '180'
        },
        {
          label: 'Iran',
          value: '140'
        },
        {
          label: 'Russia',
          value: '115'
        },
        {
          label: 'UAE',
          value: '100'
        },
        {
          label: 'US',
          value: '30'
        },
        {
          label: 'China',
          value: '30'
        }
      ]
    }
  });
  fusioncharts.render();
});
