import { Secretaria } from './Secretaria.model';
export interface Professor {
  id: string;
  nome: string;
  cpf: string;
  secretarias: Secretaria[];
   
}
