import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Room } from '../room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-details-room',
  templateUrl: './details-room.component.html',
  styleUrls: ['./details-room.component.css']
})
export class DetailsRoomComponent implements OnInit {

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

  
  backToList(): void {
    this.router.navigate(['/rooms'])
  }

}
