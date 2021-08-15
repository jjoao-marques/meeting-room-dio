import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { RoomCrudComponent } from './views/room-crud/room-crud.component';
import { RoomReadComponent } from './components/room/room-read/room-read.component';
import { HomeComponent } from './views/home/home.component';
import { CreateRoomComponent } from './components/room/create-room/create-room.component';
import { UpdateRoomComponent } from './components/room/update-room/update-room.component';
import { DeleteRoomComponent } from './components/room/delete-room/delete-room.component';
import { DetailsRoomComponent } from './components/room/details-room/details-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    RoomCrudComponent,
    RoomReadComponent,
    HomeComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    DeleteRoomComponent,
    DetailsRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
