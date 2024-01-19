package com.demoReact.javaR.mapper;


import com.demoReact.javaR.domain.MainVO;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardMapper {

    public List<MainVO> getArticles();

    public int writeArticle(MainVO mainVO);
}
