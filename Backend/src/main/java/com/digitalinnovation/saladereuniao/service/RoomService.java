package com.digitalinnovation.saladereuniao.service;

import com.digitalinnovation.saladereuniao.Util.MessageUtils;
import com.digitalinnovation.saladereuniao.exception.ResourceNotFoundException;
import com.digitalinnovation.saladereuniao.model.Room;
import com.digitalinnovation.saladereuniao.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    @Transactional(readOnly = true)
    public List<Room> findAll() {
        return roomRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Room findById(Long id) {
        return verifyIfExists(id);
    }

    @Transactional
    public Room create ( Room room) {
        return roomRepository.save(room);
    }

    @Transactional
    public Room update (Long id, Room obj) {
       Room oldObj =  verifyIfExists(id);

       oldObj.setName(obj.getName());
       oldObj.setDate(obj.getDate());
       oldObj.setStartHour(obj.getStartHour());
       oldObj.setEndHour(obj.getEndHour());

       return roomRepository.save(oldObj);
    }

    @Transactional
    public void delete (Long id) {
        verifyIfExists(id);
        roomRepository.deleteById(id);
    }



    public Room verifyIfExists(Long id) {
        return roomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(MessageUtils.ROOM_NOT_FOUND));
    }

}
