import React from 'react';
import { useTable } from 'react-table';
import s from './Table.module.css';

function Table(){
  const data = React.useMemo(
    () => [
      {
        col1: 'Ветер и искраы',
        col2: 'Алексей Пехов',
        col3: '2006',
        col4: '315',
      },
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
      {
        width: 300,
        Header: " ",
        Cell: ({ cell }) => (
          <button value={cell.row.values.name}>
            Button
          </button>
        )
      }
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
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th className={s['tHead']} {...column.getHeaderProps()} >
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody {...getTableBodyProps()}>
      {rows.map(row => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td className={s['tD']}
                    {...cell.getCellProps()}
                    style={{
                      padding: '20px',
                    }}
                >
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


