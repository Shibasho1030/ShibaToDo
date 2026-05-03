// JSONファイル(DB代替)との通信を行うタスク関連のAPI関数

const API_URL = "http://localhost:8000/tasks";

export async function getTasksApi(userId) {
  try {
    const where = encodeURIComponent(
      JSON.stringify({ userId: { eq: userId } }),
    );
    const res = await fetch(`${API_URL}?_where=${where}&_sort=order`);
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

export async function createTaskApi(newTask) {
  try {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw Error("タスクの作成に失敗しました");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
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
    if (!res.ok) throw Error("タスクの更新ができませんでした");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function updateTasksApi(tasks) {
  try {
    const updatedTasks = await Promise.all(
      tasks.map(async (task) => {
        const res = await fetch(`${API_URL}/${task.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        });

        if (!res.ok) throw Error("タスクの更新に失敗しました");

        return await res.json();
      }),
    );

    return updatedTasks;
  } catch (err) {
    console.error(err.message);
  }
}

export async function deleteTaskApi(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw Error("タスクの削除ができませんでした");
    return true;
  } catch (err) {
    console.error(err.message);
  }
}
