package com.demoReact.javaR.service;

import com.demoReact.javaR.domain.MainVO;
import com.demoReact.javaR.mapper.BoardMapper;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BoardServiceImpl implements BoardService {
    private final BoardMapper boardMapper;

    public BoardServiceImpl(BoardMapper boardMapper){
        this.boardMapper = boardMapper;
    }


    @Override
    public List<MainVO> getArticles() {
        return boardMapper.getArticles();
    }

    @Override
    public int writeArticle(MainVO mainVO) {
        return boardMapper.writeArticle(mainVO);
    }
}
