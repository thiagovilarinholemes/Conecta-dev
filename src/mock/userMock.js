import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'lemes',
//     'email': 'lemes@lemes'
// });

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data);
    // console.log(email, password);

    if (email !== 'lemes@lemes' || password !== 'admin') {
        return [400, { message: 'Email ou senha incorretos!!!' }]
    }

    const user = {
        'id': 1,
        'username': 'lemes',
        'email': 'lemes@lemes'
    }

    return [200, {user}]
})