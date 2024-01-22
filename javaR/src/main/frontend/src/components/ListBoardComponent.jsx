import React, {useEffect, useState, Component } from 'react';
import BoardService from '../service/BoardService';
import { useNavigate } from 'react-router-dom';

const ListBoardComponent = () => {
    const [boards, setBoards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        BoardService.getBoards().then((res) => {
            setBoards(res.data);
        });
    },[]);

    const writeNewBBS = () => {
        navigate('/newBBS/');
    };

    return(
        <div>
            <h2 className="text-center">게시판</h2>
            <div className="row">
                <button className="btn" onClick={writeNewBBS}>글쓰기</button>
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
                        {boards.map((board) => (
                            <tr key = {board.bbsNo}>
                                <td>{board.bbsNo}</td>
                                <td>{board.title}</td>
                                <td>{board.author}</td>
                                <td>{board.wroteDate}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    );

};

export default ListBoardComponent;

