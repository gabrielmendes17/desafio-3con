import { HomeComponent } from './home/home.component';
import { ApplicationErrorHandler } from './app.error-handler';
import { ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatCardModule, MatSidenavModule,
 MatAutocompleteModule, MatDatepickerModule,
  MatNativeDateModule, MatMenuModule, MatIconModule, MatExpansionModule, MatDialogModule,
   MatProgressSpinnerModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatInputModule,
MatFormFieldModule, MatRadioModule, MatToolbarModule } from '@angular/material';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ImportarNotasComponent } from './importar-notas/importar-notas.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MenuComponent,
    ImportarNotasComponent,
    HomeComponent,
    TesteComponent
  ],
  imports: [
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatRadioModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule
  ],
  exports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    HttpClientModule,
  { provide: ErrorHandler, useClass: ApplicationErrorHandler },
  { provide: LOCALE_ID, useValue: 'pt-PT'},
  { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
