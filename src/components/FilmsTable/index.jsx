import React from 'react';
import moment from 'moment';

import { ContainerTable } from './styles';

export function FilmsTable({ films }) {
  return (
    <ContainerTable>
      <h5>Últimos filmes</h5>
      <p>Saiba os últimos lançamentos da marca</p>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Estréia</th>
            <th>Diretor</th>
            <th>Episódio</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <tr key={film.episode_id}>
              <td>{film.title}</td>
              <td>{moment(film.release_date).format('DD/MM/YYYY')}</td>
              <td>{film.director}</td>
              <td>{film.episode_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerTable>
  );
}
