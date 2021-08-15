import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room.model';
import { RoomService } from './../room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id_room = '';

  room: Room = {
    name: '',
    date: '',
    startHour: '',
    endHour: '',
  }

  constructor(
    private roomService: RoomService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_room = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.roomService.findById(this.id_room).subscribe(response => {
      this.room = response;
    }) 
  }

  updateRoom(): void {
    this.roomService.updateRoom(this.room).subscribe(() => {
      this.roomService.showMessage('Sala de reunião atualizada com sucesso!');
      this.router.navigate(['/rooms']);
    })
  }

  cancel(): void {
    this.router.navigate(['/rooms'])
  }

}
