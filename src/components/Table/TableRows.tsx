import React from 'react'
import { TableBody } from './styles/TableBody.styled';
import { Column } from './Table';

type TableRowsProps<T, K extends keyof T> = {
    data: Array<T> | null | undefined;
    columns: Array<Column<T, K>>
}

const TableRows = <T, K extends keyof T>({data, columns}: TableRowsProps<T, K>): JSX.Element => {
    const rows = data?.map((row, index) => {
        return (
            <tr className="table-row" key={`row-${index}`}>
                {columns.map((column, index2) => {
                    return (
                        <td className="table-cell" key={`cell-${index2}`}>
                            {row[column.key]}
                        </td>
                    )
                })}
            </tr>
        )
    })

    return (
        <TableBody>
            {rows}
        </TableBody>
    )
}

export default TableRows;
