import { useState } from "react";
import { createTaskApi, updateTaskApi } from "../../services/apiTasks";
import Button from "../../ui/Button";
import { createTask, finishEdit, updateTask } from "./tasksSlice";
import { useDispatch, useSelector } from "react-redux";

function TaskForm({ task }) {
  const [formData, setFormData] = useState({
    id: task ? task.id : null,
    title: task ? task.title : "",
    description: task ? task.description : "",
    completed: task ? task.completed : false,
    priority: task ? task.priority : "medium",
    category: task ? task.category : "study",
    dueDate: task ? task.dueDate : "",
  });

  const { editingTaskId } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title.trim()) return;

    if (editingTaskId) {
      dispatch(updateTask(formData));
      updateTaskApi(formData);
      dispatch(finishEdit());
    } else {
      dispatch(createTask(formData));
      createTaskApi(formData);
    }
  }

  // 以下、AIにより追加
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-3xl border border-[#9DB2BF]/40 bg-white/70 p-6 shadow-[0_20px_60px_rgba(39,55,77,0.12)] backdrop-blur-sm"
    >
      <div>
        <h2 className="text-xl font-bold tracking-tight text-[#27374D]">
          {editingTaskId ? "タスクを編集" : "新しいタスクを追加"}
        </h2>
        <p className="mt-1 text-sm text-[#526D82]">
          必要な情報を入力して、タスクを管理しましょう
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#27374D]">
            タイトル
          </label>
          <input
            type="text"
            placeholder="例: Reactの課題を進める"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] placeholder:text-[#9DB2BF] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#27374D]">
            説明
          </label>
          <textarea
            placeholder="例: Reduxの処理まで実装する"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows="4"
            className="w-full resize-none rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] placeholder:text-[#9DB2BF] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#27374D]">
              優先度
            </label>
            <select
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
              className="w-full rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            >
              <option value="low">低</option>
              <option value="medium">中</option>
              <option value="high">高</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#27374D]">
              カテゴリ
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            >
              <option value="study">学習</option>
              <option value="work">仕事</option>
              <option value="personal">個人</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#27374D]">
              締切日
            </label>
            <input
              type="date"
              value={formData.dueDate ? formData.dueDate.slice(0, 10) : ""}
              onChange={(e) =>
                setFormData({ ...formData, dueDate: e.target.value })
              }
              className="w-full rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            />
          </div>

          {editingTaskId && (
            <div>
              <label className="mb-2 block text-sm font-medium text-[#27374D]">
                ステータス
              </label>
              <select
                value={String(formData.completed)}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    completed: e.target.value === "true",
                  })
                }
                className="w-full rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
              >
                <option value="false">未完了</option>
                <option value="true">完了</option>
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <Button type="submit">{editingTaskId ? "更新する" : "追加する"}</Button>
      </div>
    </form>
  );
}

export default TaskForm;
