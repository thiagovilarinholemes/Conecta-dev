import axios from '../utils/axios';

class AuthService{

    // Faz login
    signIn = (email, password) =>{
        return new Promise((resolve, reject) => {
            axios.post('/api/home/login', {email, password})
                .then(response => {
                    if(response.data.user){
                        // this.setUser(response.data.user)
                        resolve(response.data.user)
                    }
                    else{
                        reject(response.data.error)
                    }
                })
                .catch(error => reject(error))
        })
    }

    // Armazena no navegador
    setUser = (user) => {
        localStorage.setItem("user", JSON.stringify(user)); // JSON.stringify(user) passa o objeto para JSON
    }

    getUser = () => {
        const user = localStorage.getItem("user");

        if(user){
            try {
                return JSON.parse(user)
            } catch (error) {
                console.log(`Não foi possivel converter: ${error}`)
            }
        }
        return user;
    }

    isAuthenticated = () => !!this.getUser();
}

const authService = new AuthService();

export default authService;