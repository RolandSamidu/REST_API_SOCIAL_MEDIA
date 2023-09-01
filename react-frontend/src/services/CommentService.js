import axios from 'axios';

const COMMENT_API_BASE_URL = "http://localhost:8080/api/p1/c1/comments";

class CommentService {
    
    getComments(){
        return axios.get(COMMENT_API_BASE_URL);
    }

    createComments(comment){
        return axios.post(COMMENT_API_BASE_URL, comment);
    }

    getComentById(comment_id){
        return axios.get(COMMENT_API_BASE_URL + '/' + comment_id);
    }

    updateComment(comment, comment_id){
        return axios.put(COMMENT_API_BASE_URL+ '/' + comment_id, comment);
    }

    deleteComment(comment_id){
        return axios.delete(COMMENT_API_BASE_URL + '/' + comment_id);
    }
}

export default new CommentService();