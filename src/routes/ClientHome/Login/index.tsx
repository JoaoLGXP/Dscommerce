/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css';
import { useState } from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service';

export default function Login() {

    const [formData, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(formData)
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
            })
            .catch(error => {
                console.log("Erro no login", error)
            })
    }

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value});
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <form className="dsc-login-card" onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <div className="dsc-login-access-container">
                        <div>
                            <input
                                name="username"
                                value={formData.username}
                                className="dsc-login-input"
                                type="text"
                                placeholder="Email"
                                onChange={handleInputChange}
                            />
                            <div className="dsc-error-message"></div>
                        </div>
                        <div>
                            <input
                                name="password"
                                value={formData.password}
                                className="dsc-login-input dsc-margin-bottom"
                                type="password"
                                placeholder="Senha"
                                onChange={handleInputChange}
                            />
                            <div className="dsc-error-message"></div>
                        </div>
                    </div>
                    <ButtonPrimary text='Entrar'/>
                </form>
            </section>
        </main>
    );
}