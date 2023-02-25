interface Adventurer {
    adventurer_id: string;
    nombre: string;
    afinidades_combate: string[];
    personalidad: string;
    enfermedades: string[];
    estadisticas: {
      combate: number;
      sigilo_acrobacia: number;
      resolucion_asertijos: number;
    };
    estado: "no disponible" | "disponible" | "preparandose para mision" | "en mision";
    equipamiento: {
      cabeza: {
        nombre: string;
        defensa: number;
      };
      torso: {
        nombre: string;
        defensa: number;
      };
      brazos: {
        nombre: string;
        defensa: number;
      };
      manos: {
        izquierda?: {
          nombre: string;
          daño: number;
          efecto?: string;
        };
        derecha: {
          nombre: string;
          daño: number;
        };
      };
      piernas: {
        nombre: string;
        defensa: number;
      };
      mochila: {
        volumen_maximo: number;
        items: {
          nombre: string;
          volumen: number;
          efecto?: string;
          cantidad?: number;
        }[];
      };
    };
}
  