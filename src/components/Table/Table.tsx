import React from 'react'
import { TableContainer } from './styles/TableContainer.styled'
import TableHeader from './TableHeader'
import TableRows from './TableRows'


export type Column<T, K extends keyof T> = {
    key: K;
    header: string;
}

type TableProps<Article, K extends keyof Article> = {
    data: Array<Article> | null | undefined;
    columns: Array<Column<Article, K>>;
  }

const Table = <T, K extends keyof T>({data, columns}: TableProps<T, K>): JSX.Element => {
    return (
        <TableContainer>
            <TableHeader columns={columns}/>
            <TableRows data={data} columns={columns}/>
        </TableContainer>
    ) 
}

export default Table;