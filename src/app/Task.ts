export interface Task {
    id?: number; // el ? signnifica que podría no venir
    text: string;
    day: string;
    reminder: boolean;
}

/*la interfaz le da consistencia 
al mockup de task, ofreciendo 
las reglas que tiene que cumplir 
cada input a la hora de guardar 
información en la BBDD */