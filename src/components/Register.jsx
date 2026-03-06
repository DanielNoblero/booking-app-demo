import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { register, loginWithGoogle, user } = useAuth();
    const navigate = useNavigate();

    // Redirección si el usuario ya está autenticado
    useEffect(() => {
        if (user && user.perfilCompleto) {
            navigate("/", { replace: true });
        }
    }, [user, navigate]);

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await register(email, password);
            navigate("/perfil", { replace: true });
        } catch (err) {
            // Traducimos el error específico
            setError(t('register.errorEmail'));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError("");
        setLoading(true);
        try {
            await loginWithGoogle();
            // Google SignIn maneja tanto el login como el registro inicial.
            // Redirigimos a la raíz, y PrivateRoute se encargará de enviarlo a /perfil si es nuevo o incompleto.
            navigate("/", { replace: true });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">
                    {t('register.titulo')}
                </h2>

                {/* Error Box */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-sm" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder={t('register.email')} // placeholder traducido
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        disabled={loading}
                    />
                    <input
                        type="password"
                        placeholder={t('register.password')}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        disabled={loading}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                    >
                        {loading ? t('register.btnRegistrando') : t('register.btnRegistrar')}
                    </button>

                    <div className="relative flex items-center justify-center my-4">
                        <span className="absolute bg-white px-2 text-gray-500 text-sm">{t('register.o')}</span>
                        <hr className="w-full border-gray-300" />
                    </div>

                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center border py-3 rounded-lg hover:bg-gray-100 transition"
                    >
                        {loading ? t('register.btnGoogleLoading') : t('register.btnGoogle')}
                    </button>
                </form>

                <p className="text-center text-sm mt-6 text-gray-600">
                    {t('register.yaTieneCuenta')}
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                        {t('register.iniciarSesion')}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
