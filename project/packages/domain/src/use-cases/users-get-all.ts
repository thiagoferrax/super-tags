import { User } from "../models/user";
import {
	IUserRepository,
} from "../services";
import { IUseCase } from "..";

export class GetAllUsers implements IUseCase<void, User[]> {
	constructor(
		private readonly userRepository: IUserRepository,
	) { }

	async Execute(): Promise<User[]> {
		return await this.userRepository.GetAll()
	}
}
