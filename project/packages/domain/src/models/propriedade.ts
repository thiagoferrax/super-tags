import { NomeSimples } from "./nome-simples";
import { PropriedadeValor } from "./propriedade-valor";

export class Propriedade {
  public readonly id: number | null;
  public readonly chave: NomeSimples;
  public readonly value: PropriedadeValor;

  constructor(id: number | null, chave: NomeSimples, value: PropriedadeValor) {
    this.id = id;
    this.chave = chave;
    this.value = value;
  }
}
