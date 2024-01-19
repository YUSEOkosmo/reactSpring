import axios from 'axios';

const BOARD_MAIN_URL = "http://localhost:8080/api/data";
const BOARD_SAVE_URL = "http://localhost:8080/api/save";

class BoardService {

    getBoards(){
        return axios.get(BOARD_MAIN_URL);
    }

    writeNewBBS(board){
        return axios.post(BOARD_SAVE_URL, board);
    }
}

export default new BoardService();


