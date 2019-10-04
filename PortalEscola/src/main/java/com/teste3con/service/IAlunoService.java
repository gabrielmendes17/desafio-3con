package com.teste3con.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.teste3con.model.Aluno;

public interface IAlunoService {

	List<Aluno> extractAndSaveFromXls(MultipartFile excelFile);

	List<Aluno> recuperarNotas(String nome, Integer ano);

}
