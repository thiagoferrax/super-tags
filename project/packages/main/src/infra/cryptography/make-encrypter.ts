import { BcryptAdapter, JwtAdapter } from "@repo/infra-cryptography";
import { IDecrypter, IEncrypter } from "@repo/domain";

function makeJwtAdapter(): JwtAdapter {
    return new JwtAdapter("some_secret")
}

export function MakeEncrypter(): IEncrypter {
    return makeJwtAdapter()
}

export function MakeDecrypter(): IDecrypter {
    return makeJwtAdapter()
}