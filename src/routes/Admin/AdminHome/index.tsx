import { useEffect, useState } from 'react';
import './styles.css';
import { UserDTO } from '../../../models/user';
import * as userService from '../../../services/user-service';

export default function AdminHome() {

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findMe()
            .then(response => {
                setUser(response.data);
            })
    }, [])

    return (
        <main>
            <section id="admin-home-section" className="dsc-container">
                <div className="dsc-home-page-message">
                    <h3>Bem-vindo à área administrativa {user?.name}</h3>
                </div>
            </section>
        </main>
    );
}