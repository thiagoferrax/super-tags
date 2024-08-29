import { IMenuSuperTagRepository, MenuSuperTag } from "@repo/domain";
import { PrismaClient } from "../../generated/postgres";

export class MenuSuperTagRepositoryPostgres implements IMenuSuperTagRepository {
	_db: PrismaClient;
	constructor() {
		this._db = new PrismaClient();
	}

	// TO DO: buscar id do usuario logado

	_userId = 1;

	async GetAll(): Promise<MenuSuperTag[] | undefined> {
		const menuSuperTag = await this._db.superTag.findMany({
			where: {
				userId: this._userId,
			},
		});

		const ListaMenuSuperTag: MenuSuperTag[] = [];

		menuSuperTag.map((st) =>
			ListaMenuSuperTag.push(
				new MenuSuperTag(st.id, st.icon, st.titulo)
			)
		);

		return ListaMenuSuperTag ?? undefined;
	}

	async Add(menuSuperTag: MenuSuperTag): Promise<void> {
		await this._db.superTag.create({
			data: {
				conteudo: "",
				icon: menuSuperTag.emoji,
				titulo: menuSuperTag.titulo,
				userId: this._userId,
			}
		});
	}

	async Edit(menuSuperTag: MenuSuperTag): Promise<void> {
		await this._db.superTag.update({
			where: {
				id: menuSuperTag.id ? menuSuperTag.id : undefined,
			},
			data: {
				icon: menuSuperTag.emoji,
				titulo: menuSuperTag.titulo,
				userId: this._userId,
			},
		});
	}

	async GetById(id: number): Promise<MenuSuperTag | undefined> {
		const menuSuperTag = await this._db.superTag.findFirst({
			where: {
				id,
			},
		});

		return menuSuperTag
			? new MenuSuperTag(
				menuSuperTag.id,
				menuSuperTag.icon,
				menuSuperTag.titulo,
			)
			: undefined;
	}
}
