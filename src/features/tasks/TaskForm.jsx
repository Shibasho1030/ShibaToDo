import { useEffect, useState } from "react";
import { createTaskApi, updateTaskApi } from "../../services/apiTasks";
import Button from "../../ui/Button";
import { createTask, finishEdit, updateTask } from "./tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router-dom";

// 新規作成または、編集中の場合は編集フォームのUIコンポーネント
function TaskForm() {
  const { tasks, editingTaskId } = useSelector((state) => state.tasks);
  const navigation = useNavigation();
  const isSubmitting = navigation === "submitting";

  const editingTask = tasks.find((task) => editingTaskId === task.id);
  const initialFormData = {
    id: "",
    title: "",
    description: "",
    completed: false,
    priority: "low",
    category: "study",
    dueDate: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title) return;
    if (editingTaskId) {
      dispatch(updateTask(formData));
      updateTaskApi(formData);
    }
    if (!editingTaskId) {
      dispatch(createTask(formData));
      createTaskApi(formData);
    }
    editingTaskId && dispatch(finishEdit());
  }

  useEffect(
    function () {
      if (!editingTask) return;
      setFormData({
        id: editingTask.id,
        title: editingTask.title,
        description: editingTask.description,
        completed: editingTask.completed,
        priority: editingTask.priority,
        category: editingTask.category,
        dueDate: editingTask.dueDate,
      });
    },
    [editingTask],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-2xl flex-col gap-5 rounded-3xl border border-[#9DB2BF]/40 bg-white/70 p-6 shadow-[0_20px_60px_rgba(39,55,77,0.12)] backdrop-blur-sm"
    >
      <div className="flex flex-col gap-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#27374D]">
            タイトル
          </label>
          <input
            required
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
              期限
            </label>
            <input
              type="datetime-local"
              value={formData.dueDate ? formData.dueDate.slice(0, 16) : ""}
              onChange={(e) =>
                setFormData({ ...formData, dueDate: e.target.value })
              }
              className="w-full rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
          {/* <div> 見ずらくなるためカテゴリは削除
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
              <option value="health">健康</option>
              <option value="shopping">買い物</option>
              <option value="finance">お金</option>
              <option value="exercise">運動</option>
              <option value="family">家族</option>
              <option value="hobby">趣味</option>
              <option value="other">その他</option>
            </select>
          </div> */}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <Button type="submit">
          {isSubmitting ? "送信中..." : editingTaskId ? "更新する" : "追加する"}
        </Button>
      </div>
    </form>
  );
}

export default TaskForm;
