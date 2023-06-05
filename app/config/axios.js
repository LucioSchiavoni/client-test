import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: "http://localhost/php-api/controllers/userController.php"
    
});

export default clienteAxios;