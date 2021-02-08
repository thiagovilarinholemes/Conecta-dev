import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Routes, Route } from 'react-router';

import Header from './components/Header';
import NewPost from '../Post/New';
import Feed from '../Feed/';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },

    main: {
        height: '100vh',
        padding: 24
    },
    toolbar: {
        minHeight: 64
    }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Header />

            <div className={classes.toolbar}></div>

            <main className={classes.main}>
                <Routes>
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/post/new" element={<NewPost />} />
                    <Route path="*" element={<h1>Not found 404</h1>} />
                </Routes>
            </main>

        </div>
    );
}

export default Home;