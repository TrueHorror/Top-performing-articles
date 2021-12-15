import React, { Dispatch, SetStateAction } from 'react'
import { TableOperationsContainer } from './styles/TableOperations.styled';
import AddIcon from '@material-ui/icons/Add';
import { AddArticleButton } from './styles/AddArticleButton.styled';


const TableOperations = (props: {displayModal: boolean, setDisplayModal: Dispatch<SetStateAction<boolean>>}) => {

    const openCloseModal = () => {
        props.setDisplayModal(!props.displayModal)
    }

    return (
        <TableOperationsContainer>
            <AddArticleButton onClick={() => openCloseModal()}><AddIcon fontSize="small"/><span>Create new</span></AddArticleButton>
        </TableOperationsContainer>
    )
}
export default TableOperations;