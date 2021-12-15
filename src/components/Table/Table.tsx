import React, { Dispatch, SetStateAction } from 'react'
import { TableContainer } from './styles/TableContainer.styled'
import TableHeader from './TableHeader'
import TableRows from './TableRows'


export type Column<T, K extends keyof T> = {
    key: K;
    header: string;
}

type TableProps<T, K extends keyof T> = {
    data: Array<T> | null | undefined;
    columns: Array<Column<T, K>>;
    setFilterCommand: Dispatch<SetStateAction<string | null>>;
  }

const Table = <T, K extends keyof T >({data, columns, setFilterCommand}: TableProps<T, K>): JSX.Element => {
    return (
        <TableContainer>
            <TableHeader columns={columns} setFilterCommand={setFilterCommand}/>
            <TableRows data={data} columns={columns} />
        </TableContainer>
    ) 
}

export default Table;