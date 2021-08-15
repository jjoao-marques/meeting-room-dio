package com.digitalinnovation.saladereuniao.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;


@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Entity
public class Room {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "date", nullable = false)
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate date;

    @Column(name = "startHour", nullable = false)
    private String startHour;

    @Column(name = "endHour", nullable = false)
    private String endHour;
}
