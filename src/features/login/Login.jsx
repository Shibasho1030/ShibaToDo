import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <p>ユーザー名を入力してください</p>
      <input placeholder="taro" value={userName} onChange={setUserName} />

      <p>メールアドレスを入力してください</p>
      <input placeholder="taro@example.com" value={email} onChange={setEmail} />
    </div>
  );
}

export default Login;
