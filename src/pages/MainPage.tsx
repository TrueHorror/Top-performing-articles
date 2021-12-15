import ArticleTable from "../components/Table/ArticleTable"
import { MainContentWrapper } from "./styles/MainPage.styled";
import Modal from "../components/Modal/Modal"
import { useState } from "react";

const MainPage = () => {

    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [updateList, setUpdateList] = useState<boolean>(false);

    return(
        <>
        <MainContentWrapper>
            <ArticleTable displayModal={displayModal} setDisplayModal={setDisplayModal} updateList={updateList} setUpdateList={setUpdateList}/>
        </MainContentWrapper>
        {displayModal ? <Modal displayModal={displayModal} setDisplayModal={setDisplayModal} setUpdateList={setUpdateList}/>: null}
        </>
    );
}


export default MainPage;