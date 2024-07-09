import { SuperTag } from "../../../models";

export interface ISuperTagRepository {
    Add(supertag: SuperTag): Promise<void>
    Edit(supertag: SuperTag): Promise<void>
    GetById(id: number): Promise<SuperTag>
    GetByName(name: string): Promise<SuperTag>
}