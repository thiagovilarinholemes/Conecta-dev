import axios from '../utils/axios';

class AuthService{

    // Faz login
    signIn = (email, password) => {
        return new Promise((resolve, reject) => {
          axios
            .post('/api/home/login', { email, password })
            .then((response) => {
              if (response.data.user) {
                this.setToken('JWT');
                resolve(response.data.user);
              } else {
                reject(response.data.error);
              }
            })
            .catch((error) => {
              reject(error);
            });
        });
      };

    // Gerando Token
    signInWithToken = () => {
        return new Promise((resolve, reject) => {
          axios
            .post('/api/home/me') // envio o token pelo header
            .then((response) => {
              if (response.data.user) {
                resolve(response.data.user);
              } else {
                reject(response.data.error);
              }
            })
            .catch((error) => {
              reject(error);
            });
        });
      };
    
    // Seta o token
    setToken = (token) => {
        localStorage.setItem("accessToken", token); 
    }

    // Busca o token
    getToken = () => localStorage.getItem("accessToken");

    // Remove token
    removeToken = () => localStorage.removeItem("accessToken");
    
    // Verifica se está autenticado
    isAuthenticated = () => !!this.getToken();

    // Faz signout
    signOut = () => {
      this.removeToken();
    }
}

const authService = new AuthService();

export default authService;

/* Anotações */

// Armazena no navegador
    // setUser = (user) => {
    //     localStorage.setItem("user", JSON.stringify(user)); // JSON.stringify(user) passa o objeto para JSON
    // }

    // getUser = () => {
    //     const user = localStorage.getItem("user");

    //     if(user){
    //         try {
    //             return JSON.parse(user)
    //         } catch (error) {
    //             console.log(`Não foi possivel converter: ${error}`)
    //         }
    //     }
    //     return user;
    // }