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

  @ManyToOne(() => Profession, (Profession) => Profession.id)
  @Column("integer")
  @JoinColumn({
    name: "professionId",
  })
  Profession: Profession;

  @ManyToOne(() => User, (User) => User.id)
  @Column("integer")
  @JoinColumn({
    name: "userId",
  })
  User: User;
  @OneToMany(
    () => Appliance,
    (Appliance) => Appliance.name,
    {
      cascade: true,
    }
  )
  Appliance: Appliance;
}
