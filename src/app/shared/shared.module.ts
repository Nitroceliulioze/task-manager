import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    HttpClientModule,
  ],
})
export class SharedModule {}
