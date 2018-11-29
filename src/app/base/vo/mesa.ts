import { PessoaVO } from './pessoa';

export class MesaVO {
    constructor(
        public id?: number,
        public idMestre?: string,
        public nomeMesa?: string,
        public tituloMesa?: string,
        public sistemaMesa?: string,
        public generoMesa?: string,
        public personagensJogadores?: string,
        public jogadores?: Array<PessoaVO>,
        public personagens?: string,
        public historia?: string
    ) {}
}
