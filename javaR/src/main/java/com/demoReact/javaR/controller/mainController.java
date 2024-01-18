package com.demoReact.javaR.controller;

import com.demoReact.javaR.domain.mainVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLException;

@RestController
public class mainController {

    @GetMapping("/api/data")
    public String main(mainVO mainVo) throws SQLException {


        return "HELLLLLLLtLLLO";
    }
}