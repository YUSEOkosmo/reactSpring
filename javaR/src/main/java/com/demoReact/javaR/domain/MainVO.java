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

    private int BBS_NO;

    private String TITLE;

    private String CONTENT;

    private String AUTHOR;

    private Date WROTE_DATE;
}
