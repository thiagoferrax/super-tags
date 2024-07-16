import { SuperTag } from "../../../models";

export interface ISuperTagRepository {
  Add(supertag: SuperTag): Promise<void>;
  Edit(supertag: SuperTag): Promise<void>;
  GetById(id: number): Promise<SuperTag>;
  GetByTitulo(titulo: string): Promise<SuperTag>;
}
