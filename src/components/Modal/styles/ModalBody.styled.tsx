import styled from "styled-components"

export const ModalBody = styled.div`
    border: solid 1px red;

    .form{
        display: flex;
        flex-direction: column;
    }

    .input{
        height: 25px;
    }

    

    .bottom-form{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;


        .numeric-container{
            display: flex;
            flex-direction: column;
        }
        .input{
            
        }
    }
    
`