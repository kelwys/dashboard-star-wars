import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  CardInfo,
  CardContainer,
  CardHeader,
  CardContentSeparate,
} from './styles';
import { getQtdDashboard, getFilms } from '../../services/starwars.service';
import persoganesImg from '../../assets/personagens-black.svg';
import planetasImg from '../../assets/planetas-black.svg';
import luasImg from '../../assets/luas-black.svg';
import naveImg from '../../assets/nave-black.svg';
import { FilmsTable } from '../../components/FilmsTable';
import { PieChart } from '../../components/PieChart';

export function Dashboard() {
  const [qtdPersonagens, setQtdPersonagens] = useState();
  const [qtdPlanetas, setQtdPlanetas] = useState();
  const [qtdNaves, setQtdNaves] = useState();
  const [infosChart, setInfosChart] = useState();
  const [films, setFilms] = useState([]);

  const loadFilms = async () => {
    const response = await getFilms();
    setFilms(response.results);
  };
  const loadInfosDashboard = async () => {
    const response = await getQtdDashboard();
    setInfosChart(response.chart);

    setQtdPersonagens(response.qtdPeople);
    setQtdPlanetas(response.qtdPlanets);
    setQtdNaves(response.qtdStarships);
  };

  useEffect(() => {
    loadInfosDashboard();
    loadFilms();
  }, []);

  return (
    <Container>
      <CardHeader>
        <Card>
          <CardContent>
            <CardInfo>
              <p>Personagens</p>
              <h2>{qtdPersonagens}</h2>
            </CardInfo>
            <img src={persoganesImg} alt="Imagem Personagens" />
          </CardContent>
        </Card>
        <Card>
          <CardContainer>
            <CardContentSeparate>
              <CardInfo>
                <p>Luas</p>
                <h2>35</h2>
              </CardInfo>
              <img src={luasImg} alt="Imagem Luas" />
            </CardContentSeparate>
            <CardContent>
              <CardInfo>
                <p>Planetas</p>
                <h2>{qtdPlanetas}</h2>
              </CardInfo>
              <img src={planetasImg} alt="Imagem Planetas" />
            </CardContent>
          </CardContainer>
        </Card>
        <Card>
          <CardContent>
            <CardInfo>
              <p>Naves</p>
              <h2>{qtdNaves}</h2>
            </CardInfo>
            <img src={naveImg} alt="Imagem Naves" />
          </CardContent>
        </Card>
      </CardHeader>
      <div className="container-body">
        <FilmsTable films={films} />
        <PieChart
          infosChart={infosChart}
          options={{
            title: 'Passageiros por veiculos',
            legend: 'none',
          }}
        />
      </div>
    </Container>
  );
}
