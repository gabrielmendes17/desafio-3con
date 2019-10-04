import { API_JAVA } from './../app.api';
import { HttpUtilService } from './../services/http-util.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-importar-notas',
  templateUrl: './importar-notas.component.html',
  styleUrls: ['./importar-notas.component.css']
})
export class ImportarNotasComponent implements OnInit {

  form: FormGroup;
  inputFile;

  constructor(private http: HttpClient,
   private fb: FormBuilder,
   private snackBar: MatSnackBar) {}
  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group(
      {
        arquivo: new FormControl()
      },
    );
  }

  onChangeFile(event) {
    console.log(event);
    this.inputFile = event.target.files[0];
    this.extensaoArquivoValido();
  }

  extensaoArquivoValido(): boolean {
    const pos = this.inputFile.name.toString().indexOf('.');
    const fileExtension = this.inputFile.name.toString().substr(pos).toUpperCase();
    console.log(fileExtension);
    if (fileExtension !== '.XLSX' && fileExtension !== '.XLS') {
      this.openSnackBar('Extensão não é valida !', 'ERROR');
      return false;
    }
    return true;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  enviarArquivo() {
    if (this.extensaoArquivoValido()) {
    console.log(this.inputFile);
    const formData = new FormData();
    formData.append('file', this.inputFile);
     this.http.post(`${API_JAVA}importarNotas`, formData)
    .subscribe(
      data  => {
        this.openSnackBar('Notas importadas com sucesso !', 'Sucess');
        console.log(data);
      },
      err => {
        this.openSnackBar('Ocorreu um erro na importação !', 'Error');
      });
    }
  }

}
