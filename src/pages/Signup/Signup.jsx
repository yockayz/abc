import "./signup.css";
import api from "../../config/axios"
import { useState, useEffect } from "react"


const Signup = () => {
    const [newUser, setNewUser] = useState({nome: '', sobrenome: '', email: '', senha: '', confirma_senha: ''})

    const postNewUser = async(e) => {
        try {
            e.preventDefault()
            const result = await api.post('/auth/cadastrar', newUser)
            
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        console.log(newUser)
    }, [newUser])
    return(
        <div className="right">
            <div className="right-box">
                <img src="src\img\Logo.svg" alt="Logo da GymRats" id="flogo"/>
                <h2 id="ftitle">Crie sua conta agora mesmo</h2>
                <form method="post" onSubmit={(e)=>postNewUser(e)} id="cadastro">
                    <div className="ent">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" id="nome" placeholder="Digite seu nome"
                        onChange={(e) => setNewUser({...newUser, nome: e.target.value}) }/>
                    </div>
                    <div className="ent">
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <input type="text" name="sobrenome" id="sobrenome" placeholder="Digite seu sobrenome" onChange={(e) => setNewUser({...newUser, sobrenome: e.target.value}) }/>
                    </div>
                    <div className="ent">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu email"  onChange={(e) => setNewUser({...newUser, email: e.target.value}) }/>
                    </div>
                    <div className="ent">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Digite sua senha" onChange={(e) => setNewUser({...newUser, senha: e.target.value}) }/>
                    </div>
                    <div className="ent">
                        <label htmlFor="confirm">Confirme a senha</label>
                        <input type="password" name="confirm" id="confirm" placeholder="Digite sua senha novamente" onChange={(e) => setNewUser({...newUser, confirma_senha: e.target.value}) }/>
                    </div>
                    <hr />
                <p>Já tem uma conta? <a href="#" className="cor-3" id="link-form">Clique aqui</a></p>
                <button type="submit" value="Submit" form="cadastro">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;