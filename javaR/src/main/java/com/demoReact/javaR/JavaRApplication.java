package com.demoReact.javaR;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import javax.sql.DataSource;

@SpringBootApplication
@MapperScan(basePackages = "com.demoReact.javaR.mapper")
public class JavaRApplication {

	public static void main(String[] args) {
		SpringApplication.run(JavaRApplication.class, args);
	}


	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource datasource) throws Exception{
		SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(datasource);
		sessionFactory.setTypeAliasesPackage("com.demoReact.javaR.mapper");
		Resource[] res = new PathMatchingResourcePatternResolver().getResources("classpath*:/mapper/*.xml");
		return sessionFactory.getObject();
	}
}
