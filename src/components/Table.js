import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import useUsers from './User';

const Table = () => {
  const { status, data } = useUsers();
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        sortType: 'string',
      },
      {
        Header: 'Email',
        accessor: 'email',
        sortType: 'string',
      },
      {
        Header: 'Age',
        accessor: 'age',
        sortType: 'number',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data: data || [],
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  ); 

  return (
    <>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'success' && (
        <>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Table;