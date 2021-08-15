import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl: String = environment.baseUrl;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'OK', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']
    });
  }

  findAll(): Observable<Room[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Room[]>(url);
  }

  findById(id: any): Observable<Room> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Room>(url);
  }

  createRoom(room: Room): Observable<Room> {
    const url = `${this.baseUrl}`;
    return this.http.post<Room>(url, room)
  }

  updateRoom(room: Room): Observable<Room> {
    const url = `${this.baseUrl}/${room.id}`;
    return this.http.put<Room>(url, room);
  }

  deleteRoom(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }


}
