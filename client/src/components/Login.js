import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = React.useState({ username: '', password: '' });

  const handleChanges = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('/login', form)
      .then(res => {
        console.log('POST', res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        setForm({ username: '', password: '' })
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={login}>
          <input
            required
            type='text'
            name='username'
            placeholder='UserName'
            onChange={handleChanges}
            value={form.username} />
          <input
            required
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChanges}
            value={form.password} />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
