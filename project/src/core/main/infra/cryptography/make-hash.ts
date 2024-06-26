import { BcryptAdapter } from "@/core/Infra";
import { IHashComparer, IHasher } from "@/core/domain";

function makeBcrypt(): BcryptAdapter {
	return new BcryptAdapter(12)
}

export function MakeHasher(): IHasher {
	return makeBcrypt()
}

export function MakeHashComparer(): IHashComparer {
	return makeBcrypt()
}