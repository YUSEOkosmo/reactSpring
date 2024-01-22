import React, { Component } from 'react';
import BoardService from '../service/BoardService';

class newBBSComponent extends Component{
    constructor(props) {
        super(props);

        this.state = {

        title: '',
        content: '',
        author: ''
        }

        this.setTitle = this.setTitle.bind(this)
        this.setContent = this.setContent.bind(this)
        this.setAuthor = this.setAuthor.bind(this)
    }

    setTitle = (event) => {
        this.setState({title: event.target.value});
    }
    setContent = (event) => {
        this.setState({content: event.target.value});
    }
    setAuthor = (event) => {
        this.setState({author: event.target.value});
    }

    writeNewBBS = (event) => {
        event.preventDefault();
        let board = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };

        console.log("글 : " + JSON.stringify(board));
        BoardService.writeNewBBS(board).then(res => {
            this.props.history.push('/save');
        });

    }

    cancel() {
        this.props.history.push('/save');
    }

    render() {
        return(
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">새글쓰기</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> 제목 </label>
                                        <input type="text" placeholder="제목" name="title" className="form-control" value={this.state.title} onChange={this.setTitle}/>
                                        <label> 내용 </label>
                                        <input type="text" placeholder="내용" name="title" className="form-control" value={this.state.content} onChange={this.setContent}/>
                                        <label> 글쓴이 </label>
                                        <input type="text" placeholder="글쓴이" name="title" className="form-control" value={this.state.author} onChange={this.setAuthor}/>

                                    </div>
                                    <button className="btn btn-success" onClick={this.writeNewBBS}>저장</button>
                                    <button className="btn" onClick={this.cancel.bind(this)}>취소</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}


export default newBBSComponent;