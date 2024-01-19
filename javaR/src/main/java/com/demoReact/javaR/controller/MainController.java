package com.demoReact.javaR.controller;

import com.demoReact.javaR.domain.MainVO;
import com.demoReact.javaR.service.BoardService;
import com.sun.tools.javac.Main;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {
    private final BoardService boardService;
    public MainController(BoardService boardService){
        this.boardService = boardService;
    }

    @GetMapping("/api/data")
    public List<MainVO> main(MainVO mainVo) throws SQLException {

        List<MainVO> resultList = boardService.getArticles();
        return resultList;
    }

    @PostMapping("/api/save")
    public int save(@RequestBody MainVO mainVO){

        return boardService.writeArticle(mainVO);
    }
}