// JSONファイル(DB代替)との通信を行うタスク関連のAPI関数

const API_URL = "http://localhost:8000/tasks";

export async function getTasksApi() {
  try {
    const res = await fetch(`${API_URL}`);
    if (!res.ok) throw Error("タスクリストの取得に失敗しました");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getTaskApi(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw Error("タスクの取得に失敗しました");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function createTaskApi(newOrder) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error("タスクの作成に失敗しました");
  }
}

export async function updateTaskApi(id, updateObj) {
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
    throw Error("タスクの更新ができませんでした");
  }
}

export async function deleteTaskApi(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw Error();
    return true;
  } catch {
    throw Error("タスクの削除ができませんでした");
  }
}
