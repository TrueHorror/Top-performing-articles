import ArticleTable from "../components/ArticleTable"
import { MainContentWrapper } from "./styles/MainPage.styled";

const MainPage = () => {
    return(
        <MainContentWrapper>
            <ArticleTable />
        </MainContentWrapper>
    );
}

export default MainPage;