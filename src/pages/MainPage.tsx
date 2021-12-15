import ArticleTable from "../components/Table/ArticleTable"
import { MainContentWrapper } from "./styles/MainPage.styled";
import Modal from "../components/Modal/Modal"
import { useState } from "react";

const MainPage = () => {

    const [displayModal, setDisplayModal] = useState<boolean>(false);

    return(
        <>
        <MainContentWrapper>
            <ArticleTable displayModal={displayModal} setDisplayModal={setDisplayModal}/>
        </MainContentWrapper>
        {displayModal ? <Modal displayModal={displayModal} setDisplayModal={setDisplayModal}/>: null}
        </>
    );
}


export default MainPage;