import React from 'react';
import { useTable } from 'react-table';
import { TableBody, Td, Th } from './Table.styled';

function Table(){
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
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

      <TableBody {...getTableProps()} >
        <thead >
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Th{...column.getHeaderProps()} >
                {column.render('Header')}
              </Th>
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
                    <Td
                      {...cell.getCellProps()}
                      style={{
                        padding: '20px',
                      }}
                    >
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableBody>

  );
}


export default Table;


