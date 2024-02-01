/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { useContext, useState } from "react";
import ButtonPrimary from "../../../components/ButtonPrimary";
import * as authService from "../../../services/auth-service";
import * as forms from "../../../utils/forms";
import { useNavigate } from "react-router-dom";
import { ContextToken } from "../../../utils/context-token";
import FormInput from "../../../components/FormInput";

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);

    const navigate = useNavigate();

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })

    function handleSubmit(event: any) {
        event.preventDefault();
        authService.loginRequest(forms.toValues(formData))
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(error => {
                console.log("Erro no login", error);
            })
    }

    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value));
      }
    
      function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name));
      }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <form className="dsc-login-card" onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <div className="dsc-login-access-container">
                        <div>
                            <FormInput
                                {...formData.username}
                                className="dsc-login-input"
                                onTurnDirty={handleTurnDirty}
                                onChange={handleInputChange}
                            />
                            <div className="dsc-error-message"></div>
                        </div>
                        <div>
                            <FormInput
                                {...formData.password}
                                className="dsc-login-input dsc-margin-bottom"
                                onTurnDirty={handleTurnDirty}
                                onChange={handleInputChange}
                            />
                            <div className="dsc-error-message"></div>
                        </div>
                    </div>
                    <ButtonPrimary text='Entrar' />
                </form>
            </section>
        </main>
    );
}