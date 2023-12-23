"use client";

import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Samples Received',
    },
  },
};

const labels = ['May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [320, 330, 400, 90],
      backgroundColor: 'rgba(54, 162, 235)',
    },
  ],
};

const GraphCard5 = () => {

  return (
    <div className={styles.container}>
      <Bar options={options} data={data} />
    </div>
  )
}

export default GraphCard5