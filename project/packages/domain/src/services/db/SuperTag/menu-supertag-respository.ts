import { MenuSuperTag } from "../../../models";

export interface IMenuSuperTagRepository {
  Add(MenuSuperTag: MenuSuperTag): Promise<void>;
  Edit(MenuSuperTag: MenuSuperTag): Promise<void>;
  GetById(id: number): Promise<MenuSuperTag | undefined>;
}
