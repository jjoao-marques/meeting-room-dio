import { Router } from '@angular/router';
import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = {
    name: '',
    date: '',
    startHour: '',
    endHour: '',
  }

  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createRoom(): void {
    this.roomService.createRoom(this.room).subscribe(() => {
      this.roomService.showMessage('Meeting room created successfully!');
      this.router.navigate(['/rooms'])
    }, err => {
      console.log(err);
    })
  }

  cancel(): void {
    this.router.navigate(['/rooms'])
  }


}
