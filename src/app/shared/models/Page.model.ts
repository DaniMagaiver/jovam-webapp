export interface Page<T>{
    content:T[];
    empty:boolean;
    first:boolean;
    last:boolean;
    number:number;
    numberOfElements:number;
    pageable: string;
    size: number;
    sort: {
        empty:boolean;
        sorted:boolean;
        unsorted:boolean;
    }
    totalElements: number;
    totalPages:number;
}