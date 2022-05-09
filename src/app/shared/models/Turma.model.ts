import { Professor } from './Professor.model';
import { Aluno } from './Aluno.model';
export interface Turma{
    idTurma:string;
    alunos:Aluno[];
    professor:Professor;
}