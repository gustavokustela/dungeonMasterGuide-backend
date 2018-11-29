import { SistemasVO } from './sistemas';

export class PessoaVO {
    constructor(
        // public id?: number,
        public nome?: string,
        public sobrenome?: string,
        public userName?: string,
        // public dataNascimento?: Date,
        // public tipoUsuario?: number, // 2:mestre - 1:jogador - 3:eventMaker
        // public dataCriacao?: Date,
        public userEmail?: string,
        public tipoJogador?: string,
        public userId?: string,
        public imgPerfil?: string
        // public generosFavoritos?: string,
        // public sistemasFavoritos?: SistemasVO,
    ) {}
}
