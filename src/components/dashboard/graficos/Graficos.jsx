import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import "./Graficos.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const vendas = [
    {mes: 'Janeiro', valor: 65},
    {mes: 'Fevereiro', valor: 59},
    {mes: 'Março', valor: 80},
]

const data = {
    labels: vendas.map(venda => `${venda.mes}`),
    datasets: [
        {
          label: 'Vendas Mensais',
          data: vendas.map(venda => venda.valor),
          backgroundColor: ["rgba(32, 18, 230, 0.6)", "rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        }
    ]
}

// const charOptions = {
//     scales: {
//         x: {
//             type: 'linear',
//             position: 'bottom'
//         },
//         y: {
//             beginAtZero: true
//         }
//     }
// }

function Graficos() {
  return (
    <div className='grafico'>
      {/* <Bar data={data} options={charOptions}/> */}
      <Pie data={data}></Pie>
    </div>
  );
}

export default Graficos;