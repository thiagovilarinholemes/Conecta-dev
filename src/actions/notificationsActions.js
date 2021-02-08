import axios from '../utils/axios';

export const GET_NOTIFICATIONS = '@notifications/GET_NOTIFICATIONS';

const getNotifications = () => {
    return async (dispatch) => {
        const notifications = await axios.get('/api/notifications'); // Busca as notificações na API

        dispatch({
            type: GET_NOTIFICATIONS,
            payload: {
                notifications: notifications.data.notifications // São as notificações buscadas na API
            }
        })
    }
};

export { getNotifications };