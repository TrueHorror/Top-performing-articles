import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Article } from "../../models/Article.model";
import { Paths } from "../../utils/Endpoints";
import { ArticleTableContainer } from "./styles/ArticleTableContainer.styled";
import Table, { Column } from "./Table";
import TableOperations from "./TableOperations/TableOperations";

const ArticleTable = (props: {
  displayModal: boolean;
  setDisplayModal: Dispatch<SetStateAction<boolean>>;
  updateList: boolean;
  setUpdateList: Dispatch<SetStateAction<boolean>>;
}) => {
  const [articles, setArticles] = useState<Article[] | null | undefined>(null);
  const [unfilteredArticles, setUnfilteredArticles] = useState<
    Article[] | null | undefined
  >(articles);
  const [filterCommand, setFilterCommand] = useState<string | null>(
    "unselected"
  );

  useEffect(() => {
    //Get articles from server each time component renders or list should be updated
    fetchArticles();
    if (props.updateList) {
      console.log("updating setUpdateList to false");
      props.setUpdateList(false);
    }
  }, [props.updateList]);

  useEffect(() => {
    console.log(filterCommand);

    switch (filterCommand) {
      case "unselected":
        setArticles(unfilteredArticles);
        break;
      case "ascending":
        filterListAsc();
        break;
      case "descending":
        filterListDesc();
        break;
    }
  }, [filterCommand]);

  const filterListAsc = () => {
    setArticles(articles?.sort((a, b) => a.title.localeCompare(b.title)));
    //props.setUpdateList(true)
  };

  const filterListDesc = () => {
    setArticles(articles?.sort((a, b) => b.title.localeCompare(a.title)));
    //props.setUpdateList(true)
  };

  const fetchArticles = async () => {
    const response = await fetch(Paths.Articles).then((res) => res.json());

    setArticles(response);
    setUnfilteredArticles(response);
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
    <>
      <ArticleTableContainer>
        <h2>Articles</h2>
        <TableOperations
          displayModal={props.displayModal}
          setDisplayModal={props.setDisplayModal}
        />
        <Table
          data={articles}
          columns={columns}
          setFilterCommand={setFilterCommand}
        />
      </ArticleTableContainer>
    </>
  );
};

export default ArticleTable;
