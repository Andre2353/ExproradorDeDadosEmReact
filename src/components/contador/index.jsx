import { useState } from "react";
import"./estilo.css"

export default function contador(){
    const [contador,setcontador]= useState(0);
    const[passo, setpasso]= useState(1);

    function incrementar(){
        setcontador(valorAnterior => valorAnterior + passo);
    }
    function decrementar(){
        setcontador(valorAnterior=> valorAnterior - passo);
    }
    function resetar(){
        setcontador(0)
    }
    return(
        <div className="card-exeplo">
            <div className="card-header">
                <span className="badge">1. estado numerico</span>
                <h3>contador co passo Costumizado </h3>
            </div>
             <div className="contador-Display">
                <span className="numero-Contador">{contador}</span>
             </div>
             <div className="passo-conteiner">
                <label htmlFor="passo-input">passo do incremento </label>
                <input type="number" min='1' max='10' value={passo}
                id="passo-input"
                onChange={(e) => setpasso(Number(e.target.value))}              />
             </div>
             <div className="botoes-grupo">
                <button className="btn btn-decrementar" onClick={decrementar}>-{passo}</button>
                <button className="btn-resetar" onClick={resetar}>zerar</button>
                <button className="btn-incrementar" onClick={incrementar} >+{passo}</button>
             </div>
             <div className="explicacao-box">
                <code>const [contador,setcontador]= useState(0);</code>
                <p>o estado armazena um valor numerico que é renderizado a cada alteração</p>
             </div>

        </div>
        
    );

}