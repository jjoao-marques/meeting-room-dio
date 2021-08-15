package com.digitalinnovation.saladereuniao.controller;

import com.digitalinnovation.saladereuniao.model.Room;
import com.digitalinnovation.saladereuniao.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/api/v1/rooms")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @GetMapping()
    public ResponseEntity<List<Room>> findAll() {
        List<Room> list = roomService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Room> findById(@PathVariable Long id) {
        return ResponseEntity.ok().body(roomService.findById(id));
    }

    @PostMapping()
    public ResponseEntity<Room> create(@Valid @RequestBody Room room) {
        Room newObj = roomService.create(room);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newObj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Room> update (@Valid @PathVariable Long id, @RequestBody Room obj) {
        obj = roomService.update(id, obj);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable  Long id) {
        roomService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
