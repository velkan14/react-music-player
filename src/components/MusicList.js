import React from "react";
import { useTable, useSortBy } from "react-table";
import useMusicState from "./useMusicState";

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const MusicList = ({ history }) => {
  // eslint-disable-next-line
  const { tracks, isLoading } = useMusicState();

  const data = React.useMemo(() => tracks, [tracks]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Cover",
        accessor: "artworkUrl60", // accessor is the "key" in the data
        disableSortBy: true,
        Cell: ({ value }) => <img src={value} alt="Cover"></img>,
      },
      {
        Header: "Title",
        accessor: "trackName", // accessor is the "key" in the data
        disableSortBy: true,
      },
      {
        Header: "Artist",
        accessor: "artistName",
        disableSortBy: true,
      },
      {
        Header: "Album",
        accessor: "collectionName",
        disableSortBy: true,
      },
      {
        Header: "Release Date",
        accessor: "releaseDate",
        disableSortBy: true,
        Cell: ({ value }) => {
          const date = new Date(value).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          });
          return String(date);
        },
      },
      {
        Header: "Length",
        accessor: "trackTimeMillis",
        sortType: "basic",
        Cell: ({ value }) => {
          return value ? String(millisToMinutesAndSeconds(value)) : "";
        },
      },
      {
        Header: "Genre",
        accessor: "primaryGenreName",
        sortType: "basic",
      },
      {
        Header: "Price",
        accessor: "trackPrice",
        sortType: "basic",

        Cell: (table) => {
          if (table.value < 0) return "-";
          const price = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: table.row.original.currency,
          }).format(
            table.value ? table.value : table.row.original.collectionPrice
          );
          return String(price);
        },
      },
    ],
    []
  );

  const onRowClick = (row) => {
    if (row.original.trackId) history.push(`/music/${row.original.trackId}`);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  if (tracks.length === 0) {
    return <h3>Search at some music to start the grove!</h3>;
  }

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={() => onRowClick(row)}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MusicList;
