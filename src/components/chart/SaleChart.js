import { Line } from 'react-chartjs-2';

const SaleChart = ({ salesReport }) => {

  const barOptions = {
    data: {
      labels: salesReport?.map((or) => or.date),
      datasets: [
        {
          label: 'Sales',
          data: salesReport?.map((or) => or.total),
          borderColor: '#10B981',
          backgroundColor: '#10B981',
          borderWidth: 3,
          yAxisID: 'y',
        }
      ],
    },
    options: {
      responsive: true,
    },
    legend: {
      display: false,
    },
  };

  return (
    <Line {...barOptions} />
  );
};

export default SaleChart;
