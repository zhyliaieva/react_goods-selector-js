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
            <tr
              data-cy="Good"
              className ={classNames('is-flex', 'is-align-items-center', {
                'has-background-success-light': n === selectedGood,
              })}>
              <td>
               {n !== selectedGood ? (
               <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setValue(n)}
                >
                  +
                </button>
                ) : (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button"
                  onClick={() => setValue(n)}
                >
                  -
                </button>
                )
              }
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {selectedGood === n ? (
                  <h1 className = "title">
                    {n}
                  </h1>
                    ) : (
                      {n}
                )
              }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
