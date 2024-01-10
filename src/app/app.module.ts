import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NewPostFormComponent } from './components/template/new-post-form/new-post-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { NewPostCardComponent } from './components/template/new-post-card/new-post-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NewPostActionsComponent } from './components/template/new-post-actions/new-post-actions.component';
import { PostsComponent } from './views/posts/posts.component';
import { PostsButtonComponent } from './views/posts-button/posts-button.component';
import { AboutComponent } from './components/template/about/about.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidenavInfoComponent } from './components/template/sidenav-info/sidenav-info.component';
import { UpdatePostFormComponent } from './components/template/update-post-form/update-post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostFormComponent,
    NewPostCardComponent,
    NewPostActionsComponent,
    PostsComponent,
    PostsButtonComponent,
    AboutComponent,
    SidenavInfoComponent,
    UpdatePostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
