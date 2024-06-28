import { BcryptAdapter } from "@repo/infra-cryptography";
import { IHashComparer, IHasher } from "@repo/domain";

function makeBcrypt(): BcryptAdapter {
    return new BcryptAdapter(12)
}

export function MakeHasher(): IHasher {
    return makeBcrypt()
}

export function MakeHashComparer(): IHashComparer {
    return makeBcrypt()
}