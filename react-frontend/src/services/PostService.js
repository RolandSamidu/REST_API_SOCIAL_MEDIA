import axios from "axios";

const POST_API_BASE_URL = "http://localhost:8080/api/p1/posts";

class PostService {

    getPost(){
        return axios.get(POST_API_BASE_URL);
    }

    createPost(post){
        return axios.post(POST_API_BASE_URL, post);
    }

    getPostById(post_id){
        return axios.get(POST_API_BASE_URL + '/' + post_id);
    }

    updatePost(post, post_id){
        return axios.put(POST_API_BASE_URL + '/' + post_id, post);
    }

    deletePost(post_id){
        return axios.delete(POST_API_BASE_URL + '/' + post_id);
    }

}

export default new PostService();