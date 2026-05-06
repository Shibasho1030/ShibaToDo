import { useEffect, useState } from "react";
import {
  createTaskApi,
  deleteTaskApi,
  updateTaskApi,
} from "../../services/apiTasks";
import Button from "../../ui/Button";
import { createTask, deleteTask, finishEdit, updateTask } from "./tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";

// 新規作成または、編集中の場合は編集フォームのUIコンポーネント
function TaskForm() {
  const { tasks } = useSelector((state) => state.tasks);
  const { currentUserId, isAuthenticated } = useSelector(
    (state) => state.users,
  );
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";
  const idFromParams = useParams().id;

  const editingTask = tasks.find((task) => idFromParams === task.id);
  const initialFormData = {
    id: "",
    userId: currentUserId,
    title: "",
    description: "",
    completed: false,
    priority: "",
    createdAt: "",
    dueDate: "",
    updatedAt: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch();

  // console.log(formatDate(new Date().toLocaleString()));

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title) return;
    if (idFromParams) {
      const updatedTask = {
        ...formData,
        updatedAt: new Date().toLocaleString("ja-JP"),
      };
      dispatch(updateTask(updatedTask));
      updateTaskApi(idFromParams, updatedTask);
      navigate("/tasks");
    }
    if (!idFromParams) {
      const updatedTask = {
        ...formData,
        createdAt: new Date().toLocaleString("ja-JP"),
        updatedAt: new Date().toLocaleString("ja-JP"),
      };
      dispatch(createTask(updatedTask));
      createTaskApi(updatedTask);
      navigate("/tasks");
    }
    idFromParams && dispatch(finishEdit());
  }

  async function handleDelete() {
    try {
      // console.log("confirm start");
      const confirmed = window.confirm("このタスクを本当に削除しますか？");
      if (!confirmed) return;
      await deleteTaskApi(idFromParams);
      dispatch(deleteTask(idFromParams));
      navigate("/tasks");
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(
    function () {
      if (!editingTask) return;
      setFormData(
        {
          ...editingTask,
          updatedAt: new Date().toLocaleString("ja-JP"),
        },
        // id: editingTask.id,
        // userId: editingTask.userId,
        // title: editingTask.title,
        // description: editingTask.description,
        // completed: editingTask.completed,
        // priority: editingTask.priority,
        // category: editingTask.category,
        // createdAt: editingTask.createdAt,
        // updatedAt: editingTask.updatedAt,
        // dueDate: editingTask.dueDate,
      );
    },
    [editingTask],
  );

  if (!isAuthenticated) return <Navigate to="/" replace />;

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
              <option value=""></option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
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
          {idFromParams && (
            <div>
              <label className="mb-2 block text-sm font-medium text-[#27374D]">
                ステータス
              </label>
              <select
                value={String(formData.completed)}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    completed: e.target.value === "true" ? true : false,
                  })
                }
                className="w-full rounded-2xl border border-[#9DB2BF] bg-[#F8FBFD] px-4 py-3 text-[#27374D] outline-none transition focus:border-[#526D82] focus:ring-4 focus:ring-[#9DB2BF]/30"
              >
                <option value="false">進行中</option>
                <option value="true">完了</option>
              </select>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        {idFromParams && (
          <Button
            type="button"
            onClick={handleDelete}
            className="inline-flex items-center rounded-2xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:-translate-y-0.5 hover:bg-rose-100 hover:shadow-md active:translate-y-0"
          >
            削除する
          </Button>
        )}
        <Button type="submit">
          {isSubmitting ? "送信中..." : idFromParams ? "更新する" : "追加する"}
        </Button>
      </div>
    </form>
  );
}

export default TaskForm;
