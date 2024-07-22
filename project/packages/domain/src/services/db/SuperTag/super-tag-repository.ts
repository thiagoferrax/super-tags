import { SuperTag } from "../../../models";

export interface ISuperTagRepository {
  Add(supertag: SuperTag): Promise<void>;
  Edit(supertag: SuperTag): Promise<void>;
  ClearAll(): Promise<void>;
  GetByUserId(): Promise<SuperTag[] | undefined>;
  GetById(id: number): Promise<SuperTag | undefined>;
  GetByTitulo(titulo: string): Promise<SuperTag | undefined>;
}
