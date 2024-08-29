import { Propriedade } from "../../../models/propriedade";

export interface IPropriedadeRepository {
  Add(superTagId: number, propriedade: Propriedade): Promise<void>;
  Edit(superTagId: number, propriedade: Propriedade): Promise<void>;
  GetById(id: number): Promise<Propriedade | undefined>;
  GetBySuperTagId(id: number): Promise<Propriedade[] | undefined>;
}
