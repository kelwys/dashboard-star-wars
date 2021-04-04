import {api} from './api';

export const getQtdDashboard = async () => {
  const [{ data: peoples }, { data: planets }, { data: starships }, { data: vehicles }] = await Promise.all([
    api.get(`/people/`),
    api.get(`/planets/`),
    api.get(`/starships/`),
    api.get(`/vehicles/?page=2`)
  ])
  const dataChart = [["Planetas", "População"]]
  vehicles.results.map((vehicle) => (
    dataChart.push([vehicle.name, Number(vehicle.passengers)])
  ));
  return {
    chart: dataChart,
    qtdPeople: peoples.count,
    qtdPlanets: planets.count,
    qtdStarships: starships.count
  };
};

export const getFilms = async () => {
  const response = await api.get(`/films/`)
  return response.data;
};
