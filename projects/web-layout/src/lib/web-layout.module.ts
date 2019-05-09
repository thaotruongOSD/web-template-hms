import { NgModule } from '@angular/core';
import { WebLayoutComponent } from './web-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WebLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    LoginComponent],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [WebLayoutComponent, HeaderComponent, LeftSidebarComponent, FooterComponent, LoginComponent]
})
export class WebLayoutModule { }
