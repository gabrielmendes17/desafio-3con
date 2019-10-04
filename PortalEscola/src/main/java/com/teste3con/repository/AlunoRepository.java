package com.teste3con.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.teste3con.model.Aluno;

public interface AlunoRepository  extends JpaRepository<Aluno, Long>{
	
	// select * from aluno  where alu_nome like '%Ana Ter%' and alu_ano = 2007 order by alu_ano, alu_nome, alu_materia;
	
	@Query(value = " select * from aluno a where a.alu_nome like %:nome% and a.alu_ano = :ano  order by a.alu_ano, a.alu_nome, a.alu_materia ", 
			  nativeQuery = true)
	List<Aluno> listarPorNomeAno(@Param("nome") String nome, @Param("ano") Integer ano);
	
	@Query(value = " select * from aluno a where a.alu_nome like %:nome% order by a.alu_ano, a.alu_nome, a.alu_materia ", 
	  nativeQuery = true)
	List<Aluno> listarPorNome(@Param("nome") String nome);
	
}
