import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Navigate, useNavigate } from 'react-router-dom';
// import axios from '../../utils/axios';
import authService from '../../services/authService'; 
import { useSelector, useDispatch } from 'react-redux';

import  signIn  from '../../actions/accountActions'

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row', // Não é necessário devido o display flex é row - linha
        height: '100vh'
    },
    img: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover', // Adapta a imagem ao espaço
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    avatar: {
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1)
    },
    button: {
        marginTop: theme.spacing(1)
    },
    form: {
        margin: theme.spacing(2,4)
    }
    // left: {
    //     background: 'red',
    //     // flexGrow: 0, // Passa a ocupar todo o espaço se colocar 1 
    //     flexBasis: '58%',

    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // right: {
    //     background: 'yellow',
    //     // flexGrow: 0, // Passa a ocupar todo o espaço se colocar 1 
    //     flexBasis: '42%',
    // },
    // form: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     margin: '64px 32px',
    //     alignItems: 'center',
    // }
}));

function Copyright() {
    return (
      <Typography variant="body2" align="center">
        {'Copyright © '}
        <a
          color="inherit"
          href="https://www.youtube.com/channel/UCVE9-HO_GzLtDK4IGKVSYXA"
        >
          Thiago Lemes
        </a>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

function Signin() {

    const navigate = useNavigate();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errorMessage, setMessage] = useState()

    const dispatch = useDispatch();
    const account = useSelector(state => state);


    async function handleSignIn(){
        try {

            await dispatch(signIn(email, password));

            // await authService.signIn(email, password)  // axios.post('/api/home/login', {email: 'lemes@lemes', password:'admins'});
            navigate('/')

        } catch (error) {
            setMessage(error.response.data.message)
        }
    }

    

    return (

        <Grid container className={classes.root}>

            <Grid item container md={7} direction="column" justify='center' alignItems='center' className={classes.img}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px' }}>
                    <strong>
                        Simplificando a forma de conectar desenvolvedores de software!
                     </strong>
                </Typography>

                <Typography variant="body2" style={{ color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px', }}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </Grid>

            <Grid item md={5}>
                <Box display='flex' flexDirection='column' alignItems='center' mt={8}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>
                        Acesso
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            // error={Boolean(errors.email)}
                            // value={values.email}
                            // onChange={handleChange}
                            // helperText={errors.email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            // value={values.password}
                            // onChange={handleChange}
                            // error={Boolean(errors.password)}
                            // helperText={errors.password}
                        />
                        <Button fullWidth variant='contained' color='primary' 
                            className={classes.button} onClick={handleSignIn}>
                        Entrar
                    </Button>
                    {
                        errorMessage &&
                        <FormHelperText error>
                            {errorMessage}
                        </FormHelperText>
                    }
                    <Grid container>

                        <Grid item>
                            <Link>Esqueceu sua senha?</Link>
                        </Grid>

                        <Grid item>
                            <Link>Não tem conta? Registre-se</Link>
                        </Grid>
                    </Grid>
                    </form>
                    <Copyright />
                </Box>
            </Grid>

        </Grid>

        /* Flex Container */
        // <div className={classes.root}>

        //     {/* Flex Item */}
        //     <div className={classes.left}>
        //         <Typography style={{ color: '#fff', fontSize: 20, lineHeight: '45px' }}>
        //             <strong>
        //                 Simplificando a forma de conectar desenvolvedores de software!
        //             </strong>
        //         </Typography>

        //         <Typography variant="body2" style={{ color: 'rgb(255,255,255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px', }}>
        //             Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
        //         </Typography>
        //     </div>


        //     {/* Flex Item */}
        //     <div className={classes.right}>
        //         <form className={classes.form}>
        //             <h4>Acesso</h4>
        //             <input type="text" />
        //             <input type="text" />
        //         </form>
        //     </div>

        // </div>
    );
}

export default Signin;