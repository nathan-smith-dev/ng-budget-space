import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeaderBrandComponent } from './header/header-brand/header-brand.component';
import { HeaderItemsComponent } from './header/header-items/header-items.component';
import { HeaderItemComponent } from './header/header-items/header-item/header-item.component';
import { HamburgerMenuComponent } from './header/header-items/hamburger-menu/hamburger-menu.component';
import { SideDrawerComponent } from './header/header-items/side-drawer/side-drawer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ToastMessageComponent } from './toast-message/toast-message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBrandComponent,
    HeaderItemsComponent, 
    HeaderItemComponent,
    HamburgerMenuComponent,
    SideDrawerComponent,
    HomeComponent,
    ToastMessageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule, 
    HeaderComponent,
    ToastMessageComponent
  ]
})
export class CoreModule { }
