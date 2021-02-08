import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { ListItem, ListItemText, ListSubheader } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: '100%'
    }
}));

const tags = [
    {id: 1, name: 'ReactJS'},
    {id: 2, name: 'Java'},
    {id: 3, name: 'PHP'},
    {id: 4, name: 'Scrum'},
    {id: 5, name: 'Spring Boot'},
    {id: 6, name: 'NextJS'},
]

function NavBar() {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Gratis</Button>
            <ListSubheader>Tags em alta</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`}></ListItemText>
                    </ListItem>
                ))
            }
            <ListItem button>Exibir mais tags</ListItem>
        </Paper>
    )
}

export default NavBar;