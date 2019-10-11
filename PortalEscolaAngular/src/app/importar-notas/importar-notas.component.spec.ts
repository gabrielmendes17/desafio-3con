import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar } from '@angular/material';
import {
  MatSnackBarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
} from '@angular/material';

import { ImportarNotasComponent } from './importar-notas.component';

describe('ImportarNotasComponent', () => {
  let component: ImportarNotasComponent;
  let fixture: ComponentFixture<ImportarNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      declarations: [ ImportarNotasComponent ],
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should teste', () => {
    expect(component.teste('xls')).toBeTruthy();
  });

  it('should validate file extension', () => {
    component.inputFile = { name: 'arquivo.xls' };
    expect(component.extensaoArquivoValido()).toBeTruthy();

    component.inputFile = { name: 'arquivo.txt' };
    expect(component.extensaoArquivoValido()).toBeFalsy();

    component.inputFile = { name: 'arquivo.xlsx' };
    expect(component.extensaoArquivoValido()).toBeTruthy();
  });

   it('should display a message error when validation file extension  fails', (() => {
      const snackBar: MatSnackBar = TestBed.get(MatSnackBar);
      spyOn(snackBar, 'open');
      component.inputFile = { name: 'arquivo.txt' };
      expect(component.extensaoArquivoValido()).toBeFalsy();
      expect(snackBar.open).toHaveBeenCalledWith('Extensão não é valida !', 'ERROR', {duration: 5000});
    }));

    it('should not display a message when validation file extension succed', (() => {
      const snackBar: MatSnackBar = TestBed.get(MatSnackBar);
      spyOn(snackBar, 'open');
      component.inputFile = { name: 'arquivo.xlsx' };
      expect(component.extensaoArquivoValido()).toBeTruthy();
      expect(snackBar.open).toHaveBeenCalledTimes(0);
    }));
});
