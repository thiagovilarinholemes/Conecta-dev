// Utilizado para não perder o usuário logado
import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setUserData } from '../../actions/accountActions'
import authService from '../../services/authService';

function Auth({children}) {
    const dispatch = useDispatch();

    // Função para verificar se o usuário  está autenticado
    const initAuth = useCallback(async () => {
        await dispatch(setUserData());
    }, [dispatch])

    useEffect(() => {
        initAuth();
    }, [initAuth])

    return children;    
}

export default Auth;