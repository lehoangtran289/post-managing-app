import axios from 'axios';

const url = "https://post-managing-app.herokuapp.com/api"


class PostDataService {
    getAllPosts() {
        return axios.get(`${url}/post/list`);
    }

    deletePostById(id) {
        return axios.delete(`${url}/post/${id}`);
    }

    getPostById(id) {
        return axios.get(`${url}/post/${id}`);
    }

    updatePostById(id, post) {
        return axios.put(`${url}/post/${id}`, post);
    }

    createPost(post) {
        return axios.post(`${url}/post`, post);
    }

}

export default new PostDataService();