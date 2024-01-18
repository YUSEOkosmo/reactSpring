package com.demoReact.javaR.controller;

import com.demoReact.javaR.domain.MainVO;
import com.demoReact.javaR.service.BoardService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;
import java.util.List;

@RestController
public class MainController {
    private final BoardService boardService;
    public MainController(BoardService boardService){
        this.boardService = boardService;
    }

    @GetMapping("/api/data")
    public String main(MainVO mainVo) throws SQLException {

        List<MainVO> resultList = boardService.getArticles();
        return "HELLLLLLLtLLLO";
    }
}