// pages/Register.tsx
import React, { useState } from 'react';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { MdPersonOutline, MdOutlineMail, MdKey, MdCheck } from 'react-icons/md';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [theme, setTheme] = useState('light'); // Estado para controlar o tema

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Define o tema no HTML root
  };

  const handleRegister = () => {
    // Lógica de validação
    if (!name) {
      setNameError('Nome é um campo obrigatório.');
    } else {
      setNameError('');
    }

    if (!email.includes('@')) {
      setEmailError('Insira um e-mail válido.');
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Senha fraca. A senha deve ter pelo menos 6 caracteres.');
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Senhas não coincidem.');
    } else {
      setConfirmPasswordError('');
    }

    // Lógica para envio dos dados para o backend, se todos os campos forem válidos
  };

  return (
    <div className={`bg-${theme === 'light' ? 'white' : 'gray-800'} border border-gray-900 flex flex-col w-1/2 gap-10 p-10 rounded-lg transition-colors duration-300`}>
      <div className="flex justify-end">
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-md text-${theme === 'light' ? 'gray-900' : 'white'} font-semibold transition-colors duration-300 
            ${theme === 'light' ? 'bg-gray-300 hover:bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>

      <h1 className={`text-2xl text-center text-${theme === 'light' ? 'gray-900' : 'white'} font-bold`}>Cadastre-se</h1>

      <div className="flex flex-col gap-8">
        <CustomInput
          label="Nome"
          placeholder="Insira seu nome"
          icon={MdPersonOutline}
          errorMessage={nameError}
          value={name}
          onChange={setName}
        />

        <CustomInput
          label="E-mail"
          placeholder="Insira seu e-mail"
          icon={MdOutlineMail}
          errorMessage={emailError}
          value={email}
          onChange={setEmail}
        />

        <CustomInput
          label="Senha"
          placeholder="Insira sua senha"
          icon={MdKey}
          errorMessage={passwordError}
          value={password}
          onChange={setPassword}
        />

        <CustomInput
          label="Confirmação de senha"
          placeholder="Confirme sua senha"
          icon={MdCheck}
          errorMessage={confirmPasswordError}
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
      </div>

      <CustomButton text="Registrar" onClick={handleRegister} />
    </div>
  );
};

export default Register;
