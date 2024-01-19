import React, { Component } from 'react';
import BoardService from '../service/BoardService';


class ListBoardComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            boards: []
        }
    }

    componentDidMount() {
            BoardService.getBoards().then((res) => {
                this.setState({ boards: res.data});
            });

    render
}


