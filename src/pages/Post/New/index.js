import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


import PostEditor from './Editor';
import PostPreview from './Preview';
import { PostProvider } from '../../../context/PostContext'; // Fica entre {} pq não foi dado um export default

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100% - 70px)',
        overflow: 'scroll' // Caso ultrapasse o tamanho será inserido um scroll
    },
    
}));

const arrayTags = [
    { title: 'react.js' },
    { title: 'java' },
    { title: 'node.js' },
    { title: 'webdev' }
]

function NewPost() {

    const classes = useStyles();

    return (
        <PostProvider>
            <Box display='flex' className={classes.root}>
                {/* Box de edição do Post */}
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD"  >
                    <PostEditor />
                </Box>
                {/* Box do Preview */}
                <Box width="50%" height="100%" padding={2}>
                    <PostPreview />   
                </Box>
            </Box>
        </PostProvider>
    )
}

export default NewPost;