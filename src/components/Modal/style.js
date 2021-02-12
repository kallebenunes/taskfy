import styled, { css } from 'styled-components';
export const Container  = styled.div`
    background: rgba(0,0,0,0.5);
    height: 100%; 
    width: 100%; 
    position: absolute;
    top: 0;
    display: none;
    justify-content: center; 
    align-items: center;

    .modal-content {
        position: relative;
        background: #f3f3f3;
        width: 40%;
        height: 70%;
        border-radius: 5px;

        input,textarea {
            display: block;
            width: 90%;
            outline: none;
            margin: 30px auto;
            border-radius: 5px;
            border: 2px solid #222222;
            padding: 10px;
            background: transparent;
        }

        input {
            height: 9%;
        }

        textarea{
            height: 40%;
            resize: none;
        }

        button.closeModal {
            position: absolute; 
            top: -10px; 
            right: -10px;
            background: red; 
            color: white; 
            width: 40px; 
            height: 40px;
            border: none;
            border-radius: 50%; 
            font-weight: 900; 
            font-size: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
    
    
    .select-area {
        width: 90%;
        margin: 20px auto; 
        display: flex;
        
    }
    
    ${props => props.active && css`
    display: flex;
    `}

    .selected {
        box-shadow: 0 0 5px 2px gray;
    }

    .error{
        width: 90%;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: -20px;
        padding:  10px;
        background: #f9b5c2; 
        border: 1px solid red; 
        border-radius: 5px;
        font-weight: 700;
        font-size: 1.2rem;
        color: red;
    }

    .edit-buttons{
        position: absolute;
        right: 3.2rem;
        bottom: 15px;

        button {
            border: none; 
            padding: 10px 15px;
            font-size: 1.5rem;
            cursor: pointer;
            color: #f3f3f3;
            border-radius: 5px;
        }
        button + button {
            margin-left: 10px;
        }

        .add-task{
            background: #7159C1;
        }

        .delete-task{
            background: #ff6266
        }
    }
    `;

export const Button = styled.div`
    background: ${props => props.bg};
    width: 35px;
    height: 35px;
    margin: 0 6px;
    border-radius: 5px;
    cursor: pointer;
    `