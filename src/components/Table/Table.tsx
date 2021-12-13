import React from 'react'
import { Article } from '../../models/Article.model'
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
        <table>
            <TableHeader columns={columns}/>
            <TableRows data={data} columns={columns}/>
        </table>
    ) 
}

export default Table;