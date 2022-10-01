import React from 'react';
import { useTable } from 'react-table';
import s from './Table.module.css';

function Table(){
  const data = React.useMemo(
    () => [
      {
        col1: 'Ветер и искры',
        col2: 'Пехов',
        col3: '2006',
        col4: '310'
      }
    ],
    [],
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Назва книги',
        accessor: 'col1',
      },
      {
        Header: 'Автор',
        accessor: 'col2',
      },
      {
        Header: 'Рік',
        accessor: 'col3',
      },
      {
        Header: 'Стор.',
        accessor: 'col4',
      },

    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });



  return (
      <table className={s['body']} {...getTableProps()} >
        <thead  className={s['tHeadThumb']}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} className={s['tHeadThumb']}>
            {headerGroup.headers.map(column => (
              <th className={s['tHead']} {...column.getHeaderProps()} >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
        </thead>
          <tbody {...getTableBodyProps()} className={s['row']}>
          {rows.map(row => {
            prepareRow(row);
            return (

              <tr {...row.getRowProps()} className={s['tR']}>
                {row.cells.map(cell => {
                  return (
                    <td className={s['tD']} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          </tbody>
      </table>
  );
}


export default Table;


