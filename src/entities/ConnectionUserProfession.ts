import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Profession } from "./Professions";
import { Appliance } from "./Devices";

@Entity("ConnectionUserProfession")
export class ConnectionUserProfession {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Profession, (Professions) => Professions.id)
  @Column("integer")
  @JoinColumn({
    name: "professionId",
  })
  Professions: Profession;

  @ManyToOne(() => User, (Users) => Users.id)
  @Column("integer")
  @JoinColumn({
    name: "userId",
  })
  Users: User;

  @OneToMany(() => Appliance, (Appliances) => Appliances.name, {
    cascade: true,
  })
  Appliances: Appliance;
}
