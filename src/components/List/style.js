import styled, { css } from 'styled-components';
const Container  = styled.div`
    
    flex: 0 0 320px;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    overflow-y: hidden;

     & + div {
        border-left: 1px solid #e1e1e1;
     }

    header {
        display: flex;
        justify-content: space-between;

        button {
            background: #131ff4;
            border: none;
            border-radius: 8px;
            display: flex;
            cursor: pointer;
        }

    } 
 
    ul {
        margin-top: 30px;
    }
    ${props => props.done && css`
        opacity: 0.6;
    `}
`;
export default Container
