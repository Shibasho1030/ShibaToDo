const API_URL = "http://localhost:8000/tasks";

export async function getTasks() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw Error("タスクリストの取得に失敗しました");
  const data = await res.json();
  return data;
}

export async function getTask(id) {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw Error("タスクの取得に失敗しました");
  const data = await res.json();
  return data;
}

export async function createTask(newOrder) {
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
    throw Error("Failed creating your order");
  }
}

export async function updateTask(id, updateObj) {
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

export async function deleteTask(id) {
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
