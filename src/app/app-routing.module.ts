import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { UsersComponent } from './users/users.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { SuperAdminGuard } from './super-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminAccessGuard } from './admin-access.guard';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { UnsavedGuard } from './unsaved.guard';
import { ResolverGuard } from './resolver.guard';
import { LoanTypeComponent } from './loan-type/loan-type.component';

const routes: Routes = [
  {path:'loantype', component: LoanTypeComponent },
  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard, AdminGuard] },

  //can Deactivate
  { path: 'search', component: SearchComponent, canDeactivate: [UnsavedGuard] },

  { path: 'users/:id', component: UsersComponent },
  { path: 'users/:userid/photos/:photoid', component: UsersComponent },

  //can Activate
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },

  // canActiveChild
  {
    path: 'admin', canActivate: [SuperAdminGuard],
    children: [
      { path: '', component: AdminComponent },
      {
        path: '', canActivateChild: [AdminAccessGuard],
        children: [
          { path: 'manage', component: AdminManageComponent },
          { path: 'edit', component: AdminEditComponent },
          { path: 'delete', component: AdminDeleteComponent },
        ]
      },
    ]
  },

  // canLoad
  {
    path: 'preferences',
     canLoad: [PreferencesCheckGuard],
    loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule)
  },

  // {path: '', redirectTo:'add', pathMatch:'full' },
  // {path:'add', component:AddContactComponent},

  // {path : 'newuser', redirectTo:"users"},
  // {path: 'users' , component: UsersComponent},

  // {  path: "users",  
  //   children:[ 
  //    { path: 'add', component: AddContactComponent},
  //   ] 
  //  },

  // {path:'users', component: UsersComponent },

  // resolver
  { path: "add", component: AddContactComponent,
    resolve:{
      data: ResolverGuard
    }
   },

  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },

   
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
