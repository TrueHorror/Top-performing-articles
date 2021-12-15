import React from "react";
import { TableHead } from "./styles/TableHeader.styled";
import { Column } from "./Table";

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<Column<T, K>>;
};

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((col, index) => {
    return (
        <th className="table-cell" key={`col-${index}`}>
            {col.header}
        </th>

    ) 
  });

  return (
    <TableHead>
      <tr className="table-head-row">{headers}</tr>
    </TableHead>
  );
};

export default TableHeader;
