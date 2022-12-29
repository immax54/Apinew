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

  @ManyToOne(() => Subject, (Subjects) => Subjects.name)
  @Column("integer")
  @JoinColumn({
    name: "subjectId",
  })
  Subjects: Subject;

  @ManyToOne(() => Places, (Place) => Place.name)
  @Column("integer")
  @JoinColumn({
    name: "placeId",
  })
  Place: Places;

  @ManyToOne(() => Department, (Departments) => Departments.name)
  @Column("integer")
  @JoinColumn({
    name: "departmetId",
  })
  Departments: Department;
}
