import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';

import { PostContext } from '../../../../context/PostContext';

function Title() {

    const ctx = useContext(PostContext);
    const { title, setTitle } = ctx // Utilizando o Context
    return (
        <TextField id="title" placeholder="Título" fullWidth value={title} onChange={setTitle} />
    );
}

export default Title;