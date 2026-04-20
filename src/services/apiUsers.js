const API_URL = "http://localhost:8000/users";

export async function getUsersApi() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw Error("ユーザーリストの取得に失敗しました");
  const data = await res.json();
  return data;
}

export async function getUserApi(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error("ユーザー情報の取得に失敗しました");
  const data = await res.json();
  return data;
}

export async function createUserApi(newUser) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("ユーザーの登録に失敗しました");
  }
}

export async function updateUserApi(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("ユーザー情報の更新ができませんでした");
  }
}

export async function deleteUserApi(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw Error();
    return true;
  } catch {
    throw Error("ユーザー情報の削除ができませんでした");
  }
}
