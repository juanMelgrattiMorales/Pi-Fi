interface Mission {
    mission_id: string;
    informador: string;
    faccion: string;
    aventureros_en_espera: string[];
    aventureros_en_mision: string[];
    cupo_maximo: number;
    dificultad: number;
    materiales?: {
      nombre: string;
      cantidad: number;
    }[];
    recompensa: {
      experiencia: number;
      oro: number;
    };
    letalidad: boolean;
    probabilidad_exito: number;
    estado: "en espera" | "en curso" | "finalizada";
}
  