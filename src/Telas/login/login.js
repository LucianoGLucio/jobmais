import React from 'react';
import './login.css';



function login(){
    return (   
            <div class='telalogin'>
                <div class="menulogin">
                    <img src="C:\Users\smarcels\Documents\VirtualStudioCode\UC_Terca\jobmais\src\img\Jobmais.png" alt="logo jobmais" id="logo"/>
                    <div class="acessaconta">
                        <h3>Acessar Conta</h3>
                    </div>
                    <input type="text" placeholder="E-Mail" name="login" id="login"/>
                    <br/>
                    <input type="password" placeholder="Senha" name="senha" id="senha"/>
                    <br/>
                    <button class="botaoentrar"><strong>Entrar</strong></button>
                    <br/>
                    <div class="problemalogin">
                        <a href="/">Esqueci minha senha</a>
                        <br/>
                        <a href="/">Não tenho cadastro</a>
                    </div>
                </div>
            </div>       
    );
};

export default login;