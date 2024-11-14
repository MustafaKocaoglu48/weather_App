import React, { useState } from "react";
import "./App.css";
import usersData from "./users.json"; // JSON dosyasını import ediyoruz

function App() {
  // State değişkenlerini tanımlıyoruz
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller

    // JSON dosyasındaki kullanıcıları kontrol ediyoruz
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert(`Başarıyla giriş yaptınız! Hoş geldiniz ${user.username}!`);
      // Kullanıcı rolüne göre yönlendirme yapabiliriz
      // React Router yerine window.location.href kullanarak yönlendirme
      window.location.href = "/App.html"; // App.html sayfasına yönlendirme
    } else {
      alert("Yanlış kullanıcı adı veya şifre!");
    }
  };

  return (
    <div className="App">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;
