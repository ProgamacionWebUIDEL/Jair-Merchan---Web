'use client';
import {onsumit} from './hook.js'
import {onsumitPost} from './hook.js'
export function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }

  export function Tabla(){
    return(
      <table>
        <th>Tabla de Ejemplo</th>
        <tr>Es una Columna</tr>
      </table>
    );
  
  }
export function Botton() {
  return(
    <button type = "button" onClick={onsumit}>
      Enviar info
    </button>
  );
}

export function Botton1() {
  return(
    <button type = "button" onClick={onsumitPost}>
      Llamar Post 
    </button>
  );
}


  export default function componets(){
    return(
        <section>
            <Profile />
            <Profile />
            <Tabla/>
            <Botton />
            <Botton1 />
        </section>
    );
  }

