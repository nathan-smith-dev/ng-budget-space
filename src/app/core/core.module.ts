import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './containers/header/header.component';
import { HeaderBrandComponent } from './containers/header/header-brand/header-brand.component';
import { HeaderItemsComponent } from './containers/header/header-items/header-items.component';
import { HeaderItemComponent } from './containers/header/header-items/header-item/header-item.component';
import { HamburgerMenuComponent } from './containers/header/header-items/hamburger-menu/hamburger-menu.component';
import { SideDrawerComponent } from './containers/header/header-items/side-drawer/side-drawer.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ToastMessageComponent } from './containers/toast-message/toast-message.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
import { HeaderService } from './containers/header/header.service';
import { TransactionTableComponent } from './containers/transaction-table/transaction-table.component';
import { TransactionTableHeaderComponent } from './containers/transaction-table/transaction-table-header/transaction-table-header.component';
import { TransactionTableItemComponent } from './containers/transaction-table/transaction-table-item/transaction-table-item.component';
import { TransactionTableService } from './containers/transaction-table/transaction-table.service';
import { ModalComponent } from './components/modal/modal.component';
import { ButtonComponent } from './components/button/button.component';
import { FloatingActionComponent } from './components/floating-action/floating-action.component';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

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
    ButtonComponent,
    FloatingActionComponent,
    LoadingSpinnerComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule, HttpClientModule],
  exports: [
    HeaderComponent,
    ToastMessageComponent,
    TransactionTableComponent,
    ModalComponent,
    ButtonComponent,
    FloatingActionComponent,
    LoadingSpinnerComponent
  ],
  providers: [
    HeaderService,
    TransactionTableService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule {}
