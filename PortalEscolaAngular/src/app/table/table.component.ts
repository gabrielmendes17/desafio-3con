import { API_JAVA } from './../app.api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TableItem } from './table-datasource';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

   form = this.fb.group({
    ano: ['', Validators.required],
    nome: ['', Validators.required],
  });

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'ano', 'materia', 'notaP1', 'notaP2', 'notaP3', 'media'];

  anos = [];
  nomes = [];

  hasUnitNumber = false;

  ngOnInit() {
    this.consultaNotasAlunos();
    this.pupolarCombo();
    console.log(this.form);
    this.dataSource.paginator = this.paginator;
    this.form.valueChanges.subscribe(c => console.log(c));
  }

  consultaNotasAlunos() {
    this.preparefilter();
    const notasAlunos = this.http.get(`${API_JAVA}recuperarNotasAula?ano=${this.ano.value}&nome=${this.nome.value}`);
    notasAlunos.subscribe(items => this.dataSource.data = this.convertToDataTableObject(items));
    this.paginator.firstPage();
  }

  retornaMedia(item) {
    if (item.notaP1 && item.notaP2 && item.notaP3) {
      return Number((item.notaP1 + item.notaP2 + item.notaP3) / 3).toFixed(2);
    }
  }

  alunoEmRecuperacao(media) {
    return Number(media) < 50;
  }

  preparefilter() {
    if (!this.nome.value) { this.nome.setValue(''); }
    if (!this.ano.value) { this.ano.setValue(''); }
  }

  convertToDataTableObject(items: any): TableItem[] {
    const tableItems: TableItem[] = [];
    items.map((item, index) => {
    let row: TableItem;
    row = { ...item };
    row.media = this.retornaMedia(item);
    tableItems.splice(index, 1, row);
    });
    return tableItems;
  }

  pupolarCombo() {
    const result = this.http.get(`${API_JAVA}recuperarNotasAula?ano=&nome=`);
    result.subscribe(items => {
      this.popularComboNomes(items);
      this.popularComboData(items);
    });
  }

  popularComboData(items) {
    const anosSet = new Set();
    items.map(data => anosSet.add(data.ano));
    this.anos = Array.from(anosSet);
    console.log(this.anos);

  }

  popularComboNomes(items) {
    const nomesSet = new Set();
    items.map(data => nomesSet.add(data.nome));
    console.log(nomesSet);
    this.nomes = Array.from(nomesSet);
    console.log(this.nomes);
  }

  onSubmit() {
    this.consultaNotasAlunos();
  }

  get ano() {
    return this.form.get('ano');
  }

  get nome() {
    return this.form.get('nome');
  }
}
