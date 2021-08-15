import { DetailsRoomComponent } from './../details-room/details-room.component';
import { DeleteRoomComponent } from './../delete-room/delete-room.component';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from '../room.model';
import { RoomService } from './../room.service';

@Component({
  selector: 'app-room-read',
  templateUrl: './room-read.component.html',
  styleUrls: ['./room-read.component.css']
})
export class RoomReadComponent implements AfterViewInit {

  rooms: Room[] = [];



  displayedColumns: string[] =  ['id', 'name', 'date', 'startHour', 'endHour', 'action'];
  dataSource = new MatTableDataSource<Room>(this.rooms)


  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private roomService: RoomService, public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.findAll();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DetailsRoomComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  findAll(): void {
    this.roomService.findAll().subscribe((response) => {
      this.rooms = response;
      this.dataSource = new MatTableDataSource<Room>(this.rooms);
      this.dataSource.paginator = this.paginator;
    })
  }

}
