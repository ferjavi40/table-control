export interface Restauranteinterface {
    floors: { [key: string]: Floor };
    zones:  { [key: string]: Zone };
    tables: { [key: string]: Table };
}

export interface Floor {
    id_floor: string;
    id_map:   string;
    name:     string;
}

export interface Table {
    id_table:   number;
    name_table: string;
    id_zone:    string;
    x:          string;
    y:          string;
    max?:       string;
    min?:       string;
}

export interface Zone {
    id_zone: string;
    id_map:  string;
    name:    string;
    floor:   string;
}