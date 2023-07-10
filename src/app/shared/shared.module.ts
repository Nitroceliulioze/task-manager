import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent, ButtonComponent],
})
export class SharedModule {}
