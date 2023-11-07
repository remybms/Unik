import React from 'react';
import { auth } from '../../config/firebase';
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from 'next/link';

const Signup = (req, res) => {

    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)
    const [validatePassword, setValidatePassword] = React.useState(null)
    const [error, setError] = React.useState(null)

    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault()

        if (password != validatePassword) {
            setError('Les mots de passe ne sont pas identiques')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    router.push("/");
                })
                .catch((error) => {
                    const codeError = error.code;
                    if (codeError == 'auth/email-already-in-use') {
                        setError("Email déjà utilisée")
                    } else if (codeError == "auth/weak-password") {
                        setError('Mot de passe trop faible')
                    }
                });
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleLogin}>
                    <h1>Inscription</h1>
                    <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Mot de passe" 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Confirmer mot de passe" 
                        onChange={e => setValidatePassword(e.target.value)} 
                    />
                    <div>
                        <button type="submit">S'inscrire</button>
                    </div>
                    <div>
                        <Link href="/Auth/Login">Déjà un compte ?</Link>
                        <Link href='/'>Retour au menu principal</Link>
                    </div>
                    {error && <span>{error}</span>}
                </form>
            </div>
        </div>
    )
}

export default Signup