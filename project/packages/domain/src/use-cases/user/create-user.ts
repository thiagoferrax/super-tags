import { User } from "../../models/user";
import { PasswordStrong } from "../../models/password-strong";
import {
  IAddUserRepository,
  IGetUserByEmailRepository,
  IHasher,
} from "../../services";
import { ValidationError } from "../../";

export type CreateUserParams = {
  name: string;
  email: string;
  password: string;
};

export class CreateUser {
  constructor(
    private readonly addUserRepository: IAddUserRepository,
    private readonly getUserByEmail: IGetUserByEmailRepository,
    private readonly hasher: IHasher
  ) {}

  async Execute(params: CreateUserParams): Promise<void> {
    new PasswordStrong(params.password);
    const hashedPassword = await this.hasher.Hash(params.password);
    const newUser = new User(null, params.name, params.email, hashedPassword);
    const foundUser = await this.getUserByEmail.GetByEmail(newUser.email.value);
    if (foundUser) {
      throw new ValidationError("CreateUser", null, "USER_ALREADY_EXISTS");
    }
    await this.addUserRepository.Add(newUser);
  }
}
