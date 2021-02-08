import React, { useRef, useState, useEffect } from 'react'; // useEffect guarda os dados no store para ser usado em outros componentes
import { useSelector, useDispatch } from 'react-redux'; // useSelector busca dados store, useDispatch faz uma chamada para action
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'
import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon,
} from 'react-feather';

import { getNotifications } from '../../../../actions/notificationsActions';

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon,
};

const useStyles = makeStyles((theme) => ({
    icon: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText
    }
}));

function Notifications() {

    const classes = useStyles();

    const account = useSelector(state => state.account);
    const notifications = useSelector(state => state.notifications.notifications);
    const isAuthenticated = !!account.user;
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        dispatch(getNotifications());
    }, [dispatch]);

    console.log(notifications);

    return (
        isAuthenticated && (
            <React.Fragment>
                <IconButton ref={ref} onClick={handleOpen}>
                    <SvgIcon>
                        <BellIcon />
                    </SvgIcon>
                </IconButton>
                <Popover
                    onClose={handleClose}
                    open={isOpen}
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box p={2}>
                        <Typography variant="h6" color="textPrimary">
                            Notificações
                        </Typography>
                    </Box>

                    <List>
                        {
                            notifications.map((notification) => {
                                const Icon = iconsMap[notification.type]
                                return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar className={classes.icon}>
                                            <SvgIcon> 
                                                <Icon />                                            
                                            </SvgIcon>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={notification.title} primaryTypographyProps={{ variant: 'subtitle2', color: 'textPrimary' }} secondary={notification.description} />
                                </ListItem>
                                )
                            })
                        }
                    </List>
                </Popover>
            </React.Fragment>
        )
    )
}

export default Notifications;