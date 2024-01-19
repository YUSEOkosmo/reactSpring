package com.demoReact.javaR.service;

import com.demoReact.javaR.domain.MainVO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BoardService {
    public List<MainVO> getArticles();

    public int writeArticle(MainVO mainVO);
}
