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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { HeaderService } from './header/header.service';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { TransactionTableHeaderComponent } from './transaction-table/transaction-table-header/transaction-table-header.component';
import { TransactionTableItemComponent } from './transaction-table/transaction-table-item/transaction-table-item.component';
import { TransactionTableService } from './transaction-table/transaction-table.service';
import { ModalComponent } from './modal/modal.component';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderBrandComponent,
    HeaderItemsComponent, 
    HeaderItemComponent,
    HamburgerMenuComponent,
    SideDrawerComponent,
    HomeComponent,
    ToastMessageComponent,
    TransactionTableComponent,
    TransactionTableHeaderComponent,
    TransactionTableItemComponent,
    ModalComponent,
    ClickStopPropagationDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    AppRoutingModule, 
    HeaderComponent,
    ToastMessageComponent,
    TransactionTableComponent,
    ModalComponent,
    ClickStopPropagationDirective
  ],
  providers: [
    HeaderService,
    TransactionTableService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
