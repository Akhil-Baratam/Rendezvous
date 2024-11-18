import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '@/Slices/userSlice';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
      }));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(login({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
      }));
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
        >
          Sign in
        </button>
      </form>
      <button
        onClick={handleGoogleSignIn}
        className="mt-4 w-full max-w-md p-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200"
      >
        Sign in with Google
      </button>
    </div>
  );
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: username,
      });
      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: username,
        photoUrl: userCredential.user.photoURL,
      }));
    } catch (error) {
      alert(error.message);
    }
  };
    
  return (
    <div className="flex justify-center">
      <form onSubmit={handleRegister} className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to Rendezvous</h1>
        <p className="text-lg text-gray-600">Please {isLogin ? 'sign in' : 'register'} to continue</p>
      </div>
      {isLogin ? <LoginForm /> : <Register />}
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="ml-2 text-black font-medium hover:underline focus:outline-none"
          >
            {isLogin ? 'Create an account' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;