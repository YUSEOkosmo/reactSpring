import axios from 'axios;

const BOARD_MAIN_URL = "http://localhost:8080/api/data";

class BoardService {

    getBoards(){
        return axios.get(BOARD_MAIN_URL);
    }
}

export default new BoardService();


