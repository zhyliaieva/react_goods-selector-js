import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

import React, { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setValue] = useState('Jam');
  let mainTitle = <p>No goods selected</p>;

  if (selectedGood && selectedGood.length > 0) {
    mainTitle = (
      <>
        <p>{selectedGood} selected</p>
        <button
          className="delete ml-3"
          data-cy="ClearButton"
          type="button"
          onClick={() => setValue('')}
        />
      </>
    );
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">{mainTitle}</h1>
      <table className="table">
        <tbody>
          {goods.map(n => (
            <tr
              data-cy="Good"
              className={classNames('is-flex', 'is-align-items-center', {
                'has-background-success-light': n === selectedGood,
              })}
            >
              <td className="is-vcentered">
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setValue(n)}
                >
                  +
                </button>
              </td>

              <td className="is-vcentered" data-cy="GoodTitle">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
