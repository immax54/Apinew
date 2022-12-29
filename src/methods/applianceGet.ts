import type { DataSource } from "typeorm";
import type { ServerResponse } from "http";
import { Appliance } from "../entities/Devices";

export async function applianceGet(
  AppDataSource: DataSource,
  res: ServerResponse
): Promise<void> {
  function writeend(data: string): void {
    res.write(data);
    res.end();
  }
  const TempcontrolRepository = AppDataSource.getRepository(Appliance);
  TempcontrolRepository.createQueryBuilder("Appliance")
    .leftJoin("Appliance.ConnectionSubjectPlace", "ConnectionSubjectPlaces")
    .leftJoin("ConnectionSubjectPlaces.Subjects", "Subject")
    .addSelect(["Subject.name"])
    .leftJoin("ConnectionSubjectPlaces.Place", "Places")
    .addSelect(["Places.name"])
    .leftJoin("ConnectionSubjectPlaces.Departments", "Department")
    .addSelect(["Department.name"])
    .getMany()
    .then((data) => writeend(JSON.stringify(data)))
    .catch((error) => res.write(error));
}
