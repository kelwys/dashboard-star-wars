import React from 'react';
import { Chart } from 'react-google-charts';
import { ContainerChart } from './styles';

export function PieChart({ infosChart, options }) {
  return (
    <ContainerChart>
      <Chart
        width="300px"
        height="375px"
        chartType="PieChart"
        data={infosChart}
        options={options}
      />
    </ContainerChart>
  );
}
