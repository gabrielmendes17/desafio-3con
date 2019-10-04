package com.teste3con.resource;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.teste3con.model.Aluno;
import com.teste3con.service.IAlunoService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
@PropertySource("classpath:messages.properties")
public class AlunoResource {
	
	@Autowired
	private IAlunoService alunoService;
	
	@PostMapping("/importarNotas")
	@ApiOperation(value = "${msg.info.swagger.endpoint.aluno.importarNotas}", response = Aluno[].class)
	public ResponseEntity<List<Aluno>> importarNotas(@RequestParam("file") MultipartFile excelFile) throws IOException {
		return ResponseEntity.status(HttpStatus.CREATED).body(alunoService.extractAndSaveFromXls(excelFile));
	}
	
	@GetMapping("recuperarNotasAula")
	@ApiOperation(value = "${msg.info.swagger.endpoint.aluno.recuperarNotasAula}", response = Aluno[].class)
	public List<Aluno> recuperarNotasAula(@RequestParam(required = false, defaultValue = "0") Integer ano,
			@RequestParam(required = false, defaultValue = "") String nome) {
		 return alunoService.recuperarNotas(nome, ano);
		
	}
	
	@GetMapping(path = "/hello")
	public String sayHello() {
		InetAddress ip = null;
		try {
			ip = InetAddress.getLocalHost();
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return "Hello " + ip;
	}
	
}
