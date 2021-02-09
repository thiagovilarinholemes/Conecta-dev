import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useSelector} from 'react-redux';
import { PostContext } from '../../../../context/PostContext';


const useStyles = makeStyles((theme) => ({
    imagePreview: {
        width: '100%'
    },
    textArea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15
    },
    button: {
        marginRight: theme.spacing(2)
    },
    avatar: {
        marginRight: theme.spacing(1)
    }
}));

function PostPreview() {

    const classes = useStyles();
    const account = useSelector(state => state.account);
    
    const ctx = useContext(PostContext); // Instanciando o Context
    const {image, title, tags, markdownText} = ctx;


    return (
        <>
            <Box mb={2}>
                {image && <img className={classes.imagePreview} src={image} alt="background" />}
            </Box>
            <Box mb={2}>
                <Typography variant="h2">{title}</Typography>
            </Box>
            <Box display='flex' alignItems="center" mb={2}>
                <Box>
                    <Avatar className={classes.avatar} src={account.user?.avatar} />
                </Box>

                <Box>
                    <Typography variant="body1">{account.user?.name}</Typography>
                    <Typography variant="body2" color="textSecondary">10 meses</Typography>
                </Box>
            </Box>
            <Box mb={2}>
                <Typography variant="body1">{tags?.map(item => item.title).join(', ')}</Typography>
            </Box>
            <Divider />
            <Box mb={2}>
                <Markdown children={markdownText} />
            </Box>
        </>
    )
}

export default PostPreview