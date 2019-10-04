package com.teste3con.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import com.teste3con.model.Aluno;
import com.teste3con.repository.AlunoRepository;

@Service
public class AlunoService implements IAlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;
	private XSSFWorkbook workbook;
	
	
	@Override
	@Transactional
	public List<Aluno> extractAndSaveFromXls(MultipartFile excelFile) {
		try {
			List<Aluno> cadatroNotas = alunoRepository.findAll();
				if (cadatroNotas.isEmpty()) {
					List<Aluno> alunos = new ArrayList<Aluno>();
					workbook = new XSSFWorkbook(excelFile.getInputStream());
					XSSFSheet worksheet = workbook.getSheetAt(0);
					
					for(int i=1;i<worksheet.getPhysicalNumberOfRows() ;i++) {
						Aluno aluno = new Aluno();
						
						XSSFRow row = worksheet.getRow(i);
						System.out.println(i);
						
						aluno.setNome(row.getCell(0).getStringCellValue());
						aluno.setAno((int) row.getCell(1).getNumericCellValue());
						aluno.setMateria(row.getCell(2).getStringCellValue());
						aluno.setNotaP1((row.getCell(3) != null) ? (int) row.getCell(3).getNumericCellValue() : 0);
						aluno.setNotaP2((row.getCell(4) != null) ? (int) row.getCell(4).getNumericCellValue() : 0);
						aluno.setNotaP3((row.getCell(5) != null) ? (int) row.getCell(5).getNumericCellValue() : 0);
						
						alunos.add(aluno);
					}
					return alunoRepository.saveAll(alunos);
				}
				return cadatroNotas;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Aluno> recuperarNotas(String nome, Integer ano) {
		return (ano != 0 ? alunoRepository.listarPorNomeAno(nome, ano) : alunoRepository.listarPorNome(nome));
	}

}
