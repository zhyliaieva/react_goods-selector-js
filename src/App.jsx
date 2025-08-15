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
  const [value, setValue] = useState('Jam');

  return (

  <main className="section container">
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>

    <h1 className="title is-flex is-align-items-center">
      Jam is selected
      <button data-cy="ClearButton" type="button" className="delete ml-3" />
    </h1>

    <table className="table">
      <tbody>
        {goods.map(n => (
          <tr data-cy="Good">
            <td>
              ------------------------------
              <button
                data-cy="AddButton"
                type="button"
                key={n}
                className={classNames({ active: n === value })}
                onClick={() => setValue(n)}
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {n}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </main>
 );
};
