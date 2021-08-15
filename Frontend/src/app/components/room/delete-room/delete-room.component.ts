import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../room.model';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {

  id_room = '';

  room: Room = {
    id: '',
    name: '',
    date: '',
    startHour: '',
    endHour: '',
  }

  constructor(
    private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_room = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.roomService.findById(this.id_room).subscribe(response => {
      this.room = response;
    }) 
  }

  deleteRoom(): void {
    this.roomService.deleteRoom(this.room.id).subscribe(() => {
      this.roomService.showMessage('Meeting-room deletado com sucesso!');
      this.router.navigate(['/rooms']);
    })
    }

    cancel(): void {
      this.router.navigate(['/rooms']);
    }
  }
