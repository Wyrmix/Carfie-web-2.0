import React from "react";
import { useTable } from 'react-table'; 

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups if your table have groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function need to called for each row before getting the row props)
  } = useTable({
    columns,
    data
  });

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    <style jsx global> {`
     @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  table{
    font-family: 'Raleway', sans-serif;
    color: #878787;
  }

  thead tr:nth-child(2) {
    display: none;
  }

  th, td{
    text-align:left;
    padding: 8px;
    width: 20rem;
  }

  tbody {
    padding: 0.3em;
  }

  tbody tr{
    background-color: white; 
    transition: 0.1s;
  }

  tbody tr:nth-child(2n){
    background-color: ghostwhite; 
  }

  tbody tr:hover {
    background-color: silver;
    color: white;
  }
  
     `}
    </style>
    </>
  );
}