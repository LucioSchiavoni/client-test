import axios from 'axios';

const restaurantAxios = axios.create({
    baseURL: "http://localhost/php-pdo/controllers/restaurantController.php"
    
});

export default restaurantAxios;