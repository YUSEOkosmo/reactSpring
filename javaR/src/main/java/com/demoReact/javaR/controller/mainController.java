package com.demoReact.javaR.controller;

import domain.mainVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainController {

    @GetMapping("/api/data")
    public String main(mainVO mainVo){
        return "HELLLLLLLtLLLO";
    }
}