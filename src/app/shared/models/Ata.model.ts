import { Requisicao } from './Requisicao.model';
export interface Ata {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  requisicao: Requisicao;
}
