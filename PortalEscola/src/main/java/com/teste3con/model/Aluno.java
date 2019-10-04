package com.teste3con.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name = "ALUNO")
public class Aluno implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ALU_ID")
	private Long id;
	
	@NotNull
	@Column(name = "ALU_NOME")
	private String nome;
	
	@NotNull
	@Column(name = "ALU_ANO")
	private int ano;

	@NotNull
	@Column(name = "ALU_MATERIA")
	private String materia;
	
	@Column(name = "ALU_NOTAP1")
	private int notaP1;
	
	@Column(name = "ALU_NOTAP2")
	private int notaP2;
	
	@Column(name = "ALU_NOTAP3")
	private int notaP3;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getAno() {
		return ano;
	}

	public void setAno(int ano) {
		this.ano = ano;
	}

	public String getMateria() {
		return materia;
	}

	public void setMateria(String materia) {
		this.materia = materia;
	}

	public int getNotaP1() {
		return notaP1;
	}

	public void setNotaP1(int notaP1) {
		this.notaP1 = notaP1;
	}

	public int getNotaP2() {
		return notaP2;
	}

	public void setNotaP2(int notaP2) {
		this.notaP2 = notaP2;
	}

	public int getNotaP3() {
		return notaP3;
	}

	public void setNotaP3(int notaP3) {
		this.notaP3 = notaP3;
	}
	
}
