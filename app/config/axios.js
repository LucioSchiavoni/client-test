import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "http://localhost/api-auth/controllers/userController.php"
    
});

export default clienteAxios;