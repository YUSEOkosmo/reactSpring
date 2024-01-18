package com.demoReact.javaR.domain;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class mainVO {

    private int BBS_NO;

    private String TITLE;

    private String CONTENT;

    private String AUTHOR;

    private Date WROTE_DATE;
}
