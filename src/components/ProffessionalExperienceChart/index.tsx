import { ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'

const experiencesChartData: ChartData<'bar', number[], string> = {
  labels: ['frontend', 'backend', 'mobile', 'desktop' ],
  datasets: [
    {
      label: 'Tempo de experiência profissional',
      borderWidth : 1,
      data: [6, 3, 1, 4],
      inflateAmount: 1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
      ]
    }
  ],
}

export const ProffessionalExperienceChart: React.FC = () => {

  return (
    <Bar
      data={experiencesChartData}
      options={{
        responsive: true,
        indexAxis: 'y',
        color: 'white',
        plugins: {
          legend: { display: false, position: 'top' },
          title: { display: true, text: 'EXPERIÊNCIA (anos)', color: '#fff', font: { size: 18 }},
        },
        scales: {
          x: {
            grid: {
              display: true,
            },
            ticks: {
              color: '#fff',
            },
          },
          y: {
            grid: {
              display: false,
              color: '#ffffff52',
            },
            ticks: {
              color: '#fff',
              display: true,
            },
          },
        },
      }}
    />
  )
}

