export interface Gremio {
    gremio_id: string;
    gremio_avatar_url: string;
    avatar_fundador: string;
    fundador: string;
    nombre: string;
    punto_fuerte?: string;
    capacidad_maxima: number;
    reputacion: number;
    oro: number;
    faccion_reino: string;
    items: any[];
    aventureros: any[];
    modulos?: any[];
}