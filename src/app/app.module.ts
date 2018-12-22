import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopPanelComponent } from './comman/top-panel/top-panel.component';
import { FooterComponent } from './comman/footer/footer.component';
import { LeftPanelComponent } from './comman/left-panel/left-panel.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryButtonHoverDirective } from './directives/primary-button-hover.directive';

const appRoutes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    FooterComponent,
    LeftPanelComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PrimaryButtonHoverDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
