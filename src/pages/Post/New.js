import React, { useState, useCallback, } from 'react';
import { useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; // É necessário instalar o pacote
import { useDropzone } from 'react-dropzone'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 'calc(100% - 70px)',
        overflow: 'scroll' // Caso ultrapasse o tamanho será inserido um scroll
    },
    image: {
        height: 100
    },
    imagePreview: {
        width: '100%'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
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

const arrayTags = [
    { title: 'react.js' },
    { title: 'java' },
    { title: 'node.js' },
    { title: 'webdev' }
]

function NewPost() {

    const classes = useStyles();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([{ title: 'react.js' }]);
    const [markdownTex, setMarkdownTex] = useState('');
    const account = useSelector(state => state.account);
    // Faz o upload da imagem
    // Utilizado para controlar o uso das funções, não fazer upload do mesmo arquivo
    const onDrop = useCallback(acceptedFiles => { // Está lendo o array
        const file = acceptedFiles[0]; // Está lendo o array na primeira posição
        const reader = new FileReader(); // Lendo arquivo
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        }
    }, []);

    const { getRootProps, getInputProps, } = useDropzone({
        onDrop, // passa a função acima
        multiple: false, // Se vai enviar mais de um arquivo
        accept: "image/*", // Tipos de arquivos permitidos
    });

    const handleTitleChange = (event) => {
        setTitle(event.currentTarget.value);
    }

    const handleTagsChange = (event, values) => {
        setTags(values)
    }

    const handleMarkdownChange = (event) => {
        setMarkdownTex(event.currentTarget.value);
    }

    return (
        <>
            <Box display='flex' className={classes.root}>

                {/* Box de edição do Post */}
                <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD"  >
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button>Carregar imagem</Button>
                    </div>

                    {image && <img className={classes.image} src={image} alt="background" />}

                    <TextField id="title" placeholder="Título" fullWidth value={title} onChange={handleTitleChange} />

                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={arrayTags}
                        getOptionLabel={(option) => option.title}
                        value={tags}
                        onChange={handleTagsChange}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="tags"
                            />
                        )}
                    />

                    <textarea onChange={handleMarkdownChange} className={classes.textArea}></textarea>
                </Box>


                {/* Box de Preview */}
                <Box width="50%" height="100%" padding={2}>
                    {image && <img className={classes.imagePreview} src={image} alt="background" />}
                    <Typography variant="h2">{title}</Typography>

                    <Box display='flex' alignItems="center">
                        <Box>
                            <Avatar className={classes.avatar} src={account.user?.avatar}/> 
                        </Box>

                        <Box>
                            <Typography variant="body1">{account.user?.name}</Typography>
                            <Typography variant="body2" color="textSecondary">10 meses</Typography>
                        </Box>
                    </Box>

                    <Typography variant="body1">{tags.map(item => item.title).join(', ')}</Typography>

                    <Divider />

                    <Markdown children={markdownTex}  />
                </Box>
            </Box>

            <AppBar position="fixed" color="inherit" className={classes.appBar}>
                <Toolbar>
                    <Button>Salvar rascunho</Button>
                    <Button color='secondary' variant='outlined'>Publicar</Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NewPost;