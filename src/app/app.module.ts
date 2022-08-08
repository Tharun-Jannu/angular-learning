import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { MatButtonModule } from '@angular/material/button'
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { LoanTypeComponent } from './loan-type/loan-type.component';
// import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UsersComponent, 
    ClientsComponent,
    SearchComponent,
    PageNotFoundComponent,
    LoanTypeComponent,
    // AdminComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    // MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



