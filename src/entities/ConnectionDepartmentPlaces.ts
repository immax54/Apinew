import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Typedepartment } from "./Objects copy";
import { Places } from "./Places";

@Entity("ConnectionDepartmentPlaces")
export class ConnectionDepartmentPlaces
{
@PrimaryGeneratedColumn()
id!:number;


@ManyToOne(
    () =>Places,
    Place=> Place.place
    )

@Column('integer')
@JoinColumn({
    name:'placeId'
})
Place:Places


@ManyToOne(
    () =>Typedepartment,
    Typedepartment=> Typedepartment.department
    )
@Column('integer')
@JoinColumn({
    name:'departmentId'
})
Typedepartment:Typedepartment

@Column('text')
created!:string
}