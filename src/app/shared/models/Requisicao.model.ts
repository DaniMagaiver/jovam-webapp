import { Secretaria } from './Secretaria.model';
export interface Requisicao {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  secretaria: Secretaria;
}
