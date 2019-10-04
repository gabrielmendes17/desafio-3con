package com.teste3con.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.teste3con.repository.AlunoRepository;

@ComponentScan(basePackages = "com.teste3con.*")
@EnableJpaRepositories(basePackageClasses= {AlunoRepository.class})
@EntityScan(basePackages = "com.teste3con.model")
@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
