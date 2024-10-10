import Cl_Profesor from "./Cl_Profesor.js";
import Cl_Contratado from "./Cl_Contratado.js";
import Cl_Fijo from "./Cl_Fijo.js";

let prof= new Cl_Profesor();
let fijo1=new Cl_Fijo("Carlos",25,100);
let fijo2=new Cl_Fijo("Carolina",40,90);

let salida=document.getElementById("Salida");

let mostrarprof = (prof) => {
    return `
      <tr>
          <td>${prof.nombre}</td>
          <td>${prof.bono}</td>
  
          <td>${prof.sueldo}</td>
          <td>$${prof.pago()}</td>
      </tr>
      `;
  };
  
  salida.innerHTML = `
  <table>
      <tr>
          <th>Nombre del Profesor Contratado</th>
          <th>Monto del Bono</th>
          <th>Monto del Sueldo</th>
          <th>Ingreso total del Profesor</th>
          
      </tr>
      ${mostrarprof(fijo1)}
      ${mostrarprof(fijo2)}
      
      
  </table>
  
  `;