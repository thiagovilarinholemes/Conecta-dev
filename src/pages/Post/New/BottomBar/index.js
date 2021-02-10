import React from 'react';

function BottomBar() {
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <Button>Salvar rascunho</Button>
                <Button color='secondary' variant='outlined'>Publicar</Button>
            </Toolbar>
        </AppBar>
    );
}

export default BottomBar;