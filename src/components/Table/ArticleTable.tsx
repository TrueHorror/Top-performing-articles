import { useEffect, useMemo, useState } from "react";
import { Article } from "../../models/Article.model";
import { Paths } from "../../utils/Endpoints";
import { TableContainer } from "./styles/ArticleTable.styled";
import Table, { Column } from "./Table";

const ArticleTable = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);

  useEffect(() => {
    //Get articles from server each time component renders
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch(Paths.Articles).then((res) => res.json());

    setArticles(response);
  };

  const columns: Column<Article, keyof Article>[] = [
    {
      key: "title",
      header: "Title",
    },
    {
      key: "published",
      header: "Published",
    },
    {
      key: "site",
      header: "Site",
    },
    {
      key: "adGroup",
      header: "Ad group",
    },
    {
      key: "bids",
      header: "Bids",
    },
    {
      key: "spending",
      header: "Spending",
    },
    {
      key: "winRate",
      header: "Win rate",
    },
    {
      key: "impressions",
      header: "Impressions",
    },
    {
      key: "clicks",
      header: "CLicks",
    },
    {
      key: "ctr",
      header: "CTR",
    },
  ];

  return (
    <TableContainer>
        
      <Table data={articles} columns={columns} />
    </TableContainer>
  );
};

export default ArticleTable;
