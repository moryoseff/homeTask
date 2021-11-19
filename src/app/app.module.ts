import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { AuthGuard } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { CsvDataInputsComponent } from './csv-data-inputs/csv-data-inputs.component';
import { WebsiteIDPipe } from './pipes/website-id.pipe';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { NgxPaginationModule } from 'ngx-pagination';


const appRoutes: Routes = [
  {
    path: '', component: HomeScreenComponent, pathMatch: 'full'
  },
  {
    path: 'getData', component: CsvDataInputsComponent, canActivate: [AuthGuard]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    CsvDataInputsComponent,
    WebsiteIDPipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
