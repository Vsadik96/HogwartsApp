export interface Personaje {
    id?:                   string;
    personaje:            string;
    casa_hogwarts:        string
    fecha_nacimiento:     string;
    descripcion:          string
    progenitor?:           string
    hijos?:                string;
    imagen:               string;
}

export enum CasaDeHogwarts {
    Gryffindor = "Gryffindor",
    Ninguna = "ninguna",
    Ravenclaw = "Ravenclaw",
    Hufflepuff = "Hufflepuff",
    Slytherin = "Slytherin",
}
