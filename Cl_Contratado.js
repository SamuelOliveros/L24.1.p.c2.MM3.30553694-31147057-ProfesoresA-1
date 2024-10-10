import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Contratado extends Cl_Profesor{
    constructor(nombre,bono,cnthoras){
        super(nombre,bono);
        this.cnthoras=cnthoras;
    }
    pago(){
        return this.bono+(this.cnthoras*10);
    }
}