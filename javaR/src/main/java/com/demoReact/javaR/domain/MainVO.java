package com.demoReact.javaR.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Repository;

import java.sql.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class MainVO {

    private Integer bbsNo;

    private String title;

    private String content;

    private String author;

    private Date wroteDate;
}
