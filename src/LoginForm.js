import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import usersData from "./users.json";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Kullanıcı adı gerekli";
    }
    if (!values.password) {
      errors.password = "Şifre gerekli";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const user = usersData.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );
      if (user) {
        alert(`Hoş geldiniz, ${user.username}!`);
        navigate("/weather"); // Hava durumu sayfasına yönlendir.
      } else {
        alert("Yanlış kullanıcı adı veya şifre!");
      }
    },
  });

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Kullanıcı adınızı girin"
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="error">{formik.errors.username}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Şifrenizi girin"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginForm;
