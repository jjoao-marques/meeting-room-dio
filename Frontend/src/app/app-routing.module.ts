import { DetailsRoomComponent } from './components/room/details-room/details-room.component';
import { DeleteRoomComponent } from './components/room/delete-room/delete-room.component';
import { CreateRoomComponent } from './components/room/create-room/create-room.component';
import { RoomCrudComponent } from './views/room-crud/room-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UpdateRoomComponent } from './components/room/update-room/update-room.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "rooms",
    component: RoomCrudComponent
  },
  {
    path: "rooms/create",
    component: CreateRoomComponent
  },
  {
    path: "rooms/update/:id",
    component: UpdateRoomComponent
  },
  {
    path: "rooms/delete/:id",
    component: DeleteRoomComponent
  },
  {
    path: "rooms/details/:id",
    component: DetailsRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
