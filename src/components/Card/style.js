import styled, {css} from 'styled-components';

export const Container  = styled.div`
    position: relative; 
    border-radius: 5px; 
    margin-bottom: 5px; 
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(192,208,230,0.8);
    border-top: 20px solid rgba(230,236,245,0.3);
    cursor: grabbing;
    
    header{
        position:absolute;
        top: -15px;    
    }

    img {
        display: block;
        max-width: 25px;
        border-radius: 50%
    }
    ${props => props.isDragging && css`
        background: transparent;
        border: 3px dashed lightgray; 
        box-shadow: none;
        cursor: grabbing;
        padding-top: 20px;

        p, img, header {
            opacity: 0;
            
        }
    `}
`;

export const Label = styled.span`
    background: ${props => props.color};
    width: 7px; 
    height: 7px;
    border-radius: 50%;
    
   
`;

export default Container