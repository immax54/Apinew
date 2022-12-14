import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConnectionSubjectPlaces } from "./ConnectionSubjectPlaces";

@Entity("Places")
export class Places {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;

  @OneToMany(
    () => ConnectionSubjectPlaces,
    (ConnectionSubjectPlace) => ConnectionSubjectPlace.Place,
    {
      cascade: true,
    }
  )
  ConnectionSubjectPlace: ConnectionSubjectPlaces;
}
