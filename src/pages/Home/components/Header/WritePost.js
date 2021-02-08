import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function WritePost() {

    const navigate = useNavigate();
    const account = useSelector(state => state.account);
    const isAutenticated = !!account.user; // O !! verifica se o valor é verdadeiro

    const handleClick = () => {
        if(isAutenticated){
            navigate('/post/new');
        }
        else{
            navigate('/sign-in')
        }
    }

    return(
        <Button color="primary" variant="contained" onClick={handleClick}>
            Novo Post
        </Button>
        
    );
}

export default WritePost;