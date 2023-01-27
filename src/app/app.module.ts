import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewCampaignFormComponent } from './shared/modules/campaigns/new-campaign-form/new-campaign-form.component';
import { CampaignDisplayListComponent } from './shared/modules/campaigns/campaign-list/campaign-display-list/campaign-display-list.component';
import { DefaultListComponent } from './shared/components/lists/default-list/default-list.component';
import { CurrentUserComponent } from './shared/components/users/current-user/current-user.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModalComponent } from './shared/components/modal/modal.component';
import { StandardTableTopForm } from './shared/modules/characters/character-sheet/standard-sheet/standard-sheet.component'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DefaultButton } from './shared/components/inputs/buttons/default-button/default-button.component';
import { CampaignsPage } from './shared/modules/campaigns/campaigns-page.component'
import { CampaignIndex } from './shared/modules/campaign-index/campaign-index.component'
import { HomePage } from './shared/modules/home/home.component'
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { AdminHome } from './shared/modules/admin-section/admin-home.component'

@NgModule({
  declarations: [
    AppComponent,
    CampaignsPage,
    CampaignIndex,
    HomePage,
    StandardTableTopForm,
    NewCampaignFormComponent,
    AdminHome,
    CampaignDisplayListComponent,
    DefaultListComponent,
    DefaultButton,
    CurrentUserComponent,
    UiModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    MatTableModule,
    MatRippleModule,
    MatDividerModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    UiModalComponent
  ],
})
export class AppModule { }
