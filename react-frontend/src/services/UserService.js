import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/u1/users";

class UserService{
    
    getUser(){
        return axios.get(USER_API_BASE_URL);
    }
    
    createUser(user){
        return axios.post(USER_API_BASE_URL, user)
    }

    getUserById(user_id){
        return axios.get(USER_API_BASE_URL + '/' + user_id);
    }

    updateUser(user, user_id){
        return axios.put(USER_API_BASE_URL + '/' + user_id, user);
    }

    deleteUser(user_id){
        return axios.delete(USER_API_BASE_URL + '/' + user_id);
    }
    
}

export default new UserService();