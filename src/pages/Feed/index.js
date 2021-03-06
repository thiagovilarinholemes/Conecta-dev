import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import PostCard from '../../components/PostCard';
import NavBar from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Thiago',
            username: 'Lemes',
            avatar: '/images/avatars/avatar.jpg'
        },
        title: 'Criando um app do zero',
        date: 'Abril 7 2020',
        description: 'Qual o framework prefido!!!',
        hashtags: 'java, php, donet',
        image: '/images/posts/post9.jpeg'
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Thiago',
            username: 'Lemes',
            avatar: '/images/avatars/avatar.jpg'
        },
        title: 'Criando um app do zero',
        date: 'Abril 7 2020',
        description: 'Qual o framework prefido!!!',
        hashtags: 'java, php, donet',
        image: '/images/posts/post2.png'
    },

]


function Feed() {

    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Box display="flex">
                <NavBar />
                <div className={classes.root}>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </Box>
        </Container>
    )
}

export default Feed;