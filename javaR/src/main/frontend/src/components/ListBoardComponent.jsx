import React, { Component } from 'react';
import BoardService from '../service/BoardService';
import { useNavigate } from 'react-router-dom';

class ListBoardComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            boards: []
        }

        this.writeNewBBS = this.writeNewBBS.bind(this);
    }

    componentDidMount() {
            BoardService.getBoards().then((res) => {
                this.setState({ boards: res.data});
            });
    }

    writeNewBBS() {
        const navigate = useNavigate();
        navigate('/newBBS/');
    }
    render() {
        return(
            <div>
                <h2 className="text-center">게시판</h2>
                <div className="row">
                    <button className="btn" onClick={this.writeNewBBS}>글쓰기</button>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>글번호</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>등록날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board =>
                                    <tr key = {board.bbs_NO}>
                                        <td>{board.bbs_NO}</td>
                                        <td>{board.title}</td>
                                        <td>{board.author}</td>
                                        <td>{board.wrote_DATE}</td>
                                    </tr>

                                )
                            }
                        </tbody>

                    </table>

                </div>

            </div>
        );
    }
}

export default ListBoardComponent;

