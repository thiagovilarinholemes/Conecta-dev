import React, { useCallback, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; // É necessário instalar o pacote
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useDropzone } from 'react-dropzone'
import { PostContext } from '../../../../context/PostContext'; // Importando o Context

import Title from './Title';

const useStyles = makeStyles((theme) => ({
    
    image: {
        height: 100
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
    
}));

const arrayTags = [
    { title: 'react.js' },
    { title: 'java' },
    { title: 'node.js' },
    { title: 'webdev' }
]

function PostEditor() {

    const ctx = useContext(PostContext); // Instanciando o Context

    const {image, setImage, tags, setTags, markdownText, setMarkdownText} = ctx;

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
    }, [setImage]);

    const { getRootProps, getInputProps, } = useDropzone({
        onDrop, // passa a função acima
        multiple: false, // Se vai enviar mais de um arquivo
        accept: "image/*", // Tipos de arquivos permitidos
    });

    const classes = useStyles();

    return (
        <>
            <Box {...getRootProps()} mb={1}>
                        <input {...getInputProps()} />
                        <Button>Carregar imagem</Button>
                    </Box>
                    {
                        image && 
                        (
                            <Box mb={2}> 
                                <img className={classes.image} src={image} alt="background" />
                            </Box>
                        )
                        
                    }
                    <Box mb={2}>
                        <Title />
                    </Box>
                    <Box mb={2}>
                        <Autocomplete
                            multiple
                            id="tags-standard"
                            options={arrayTags}
                            getOptionLabel={(option) => option.title}
                            value={tags}
                            onChange={setTags}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    placeholder="tags"
                                />
                            )}
                        />
                    </Box>
                    <textarea onChange={setMarkdownText} value={markdownText} className={classes.textArea}></textarea>
        </>
    );
}

export default PostEditor;