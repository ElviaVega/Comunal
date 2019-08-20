import { changeHash } from "../view-controller/firestore.js";
import { sendToUsers } from "../controller/functions.js";

export const registerVisitor = () => {
    
    const tmplRegisterVisitor = `
    <div>
        <h1>Comunal</h1>
        <input type="text" id="dni" placeholder ='DNI o Carnet de Extranjeria'>
        <p>DNI o Carnet de Extranjeria</p>
        <input type="text" id="nombre" placeholder ='Nombre Completo' > <span><button>+</button><button>-</button></span>
        <p>Nombre completo</p> 
        <input type='email' id='email' placeholder ='Email'>
        <p>Correo electrónico</p>
        <input type="text" id="empresa" placeholder ='Empresa'>
        <p>Empresa</p>
        
        <form>
        <input type="search" name="busquedamodelos" list="listamodelos">
        <datalist id="listamodelos">
             <option value="Elvia Vega">
             <option value="Day">
             <option value="Nadia Gabriela">
             <option value="Andrea Ux">
             <option value="Alejandra">
             <option value="Susana">
        </datalist>
        <p>Anfitrión(a)</p>
       </form>
       
       <form>
        <input type="search" name="busquedamodelos" list="proposito">
        <datalist id="proposito">
             <option value="Reunión">
             <option value="Entrevista">
             <option value="Amigos y familia">
             <option value="Otros">
        </datalist>
        <p> Próposito de visita </p>
       </form>
        <a href="#/camera"> Cam </a>
        <button type="button" id="register-visitor">Registrar visita</button>
    </div>
    `;

    const sectionRegister = document.createElement('section');
    sectionRegister.innerHTML = tmplRegisterVisitor;

    const dni = sectionRegister.querySelector('#dni');
    const nombre = sectionRegister.querySelector('#nombre');
    const email = sectionRegister.querySelector('#email');
    const empresa = sectionRegister.querySelector('#empresa'); 
    const host = sectionRegister.querySelector('#host')
    //const proposito = sectionRegister.querySelector('#purposeOfVisit')

    
     
    sectionRegister.querySelector('#register-visitor').addEventListener('click', () => {
        sendToUsers(nombre.value, dni.value, email.value, empresa.value, host.value )
        
        return changeHash('#/welcome')
    })

    return sectionRegister;
}