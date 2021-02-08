import React, { useRef, useState, useEffect } from 'react'; // useEffect guarda os dados no store para ser usado em outros componentes
import { useSelector, useDispatch } from 'react-redux'; // useSelector busca dados store, useDispatch faz uma chamada para action
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { Bell } from 'react-feather';
import { getNotifications } from '../../../../actions/notificationsActions';

function Notifications() {

    const account = useSelector(state => state.account);
    const notifications = useSelector(state => state.notifications);
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
                        <Bell />
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
                    The content of the Popover.
                </Popover>
            </React.Fragment>
        )
    )
}

export default Notifications;