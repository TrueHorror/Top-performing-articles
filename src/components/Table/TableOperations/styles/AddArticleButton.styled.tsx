import styled from "styled-components"

export const AddArticleButton = styled.div`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    margin: 5px;

    &:hover{
      background: black;
      color: white;
      cursor: pointer;  
    }

    border: solid 2px black;
`