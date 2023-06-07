import axios from 'axios';

const turistAxios = axios.create({
    baseURL: "http://localhost/php-pdo/controllers/turistController.php"
    
});

export default turistAxios;