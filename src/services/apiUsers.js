// JSONファイル(DB代替)との通信を行うユーザー関連のAPI関数

const API_URL = "http://localhost:8000/users";

// 2026/4/29現状不使用
export async function getUsersApi() {
  try {
    const res = await fetch(`${API_URL}`);
    if (!res.ok) throw Error("ユーザーリストの取得に失敗しました");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getUserApi(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw Error("ユーザー情報の取得に失敗しました");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
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
    if (!res.ok) throw Error("ユーザーの登録に失敗しました");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

// 2026/4/29現状不使用
export async function updateUserApi(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error("ユーザー情報の更新ができませんでした");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

// 2026/4/29現状不使用
export async function deleteUserApi(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw Error("ユーザー情報の削除ができませんでした");
    return true;
  } catch (err) {
    console.error(err.message);
  }
}
