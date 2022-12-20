import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Subject } from "./Objects";
import { Places } from "./Places";
import { Department } from "./Department";

@Entity("ConnectionSubjectPlaces")
export class ConnectionSubjectPlaces {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Subject, (Subject) => Subject.name)
  @Column("integer")
  @JoinColumn({
    name: "subjectId",
  })
  Subject: Subject;

  @ManyToOne(() => Places, (Places) => Places.name)
  @Column("integer")
  @JoinColumn({
    name: "placeId",
  })
  Places: Places;

  @ManyToOne(() => Department, (Department) => Department.name)
  @Column("integer")
  @JoinColumn({
    name: "departmetId",
  })
  Department: Department;
}
