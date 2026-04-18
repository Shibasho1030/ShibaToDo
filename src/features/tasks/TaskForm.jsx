import { useState } from "react";
import { createTaskApi, updateTaskApi } from "../../services/apiTasks";
import Button from "../../ui/Button";
import { createTask, finishEdit, updateTask } from "./tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router-dom";

function TaskForm({ task }) {
  const [formData, setFormData] = useState({
    id: task ? task.id : null,
    title: task ? task.title : "",
    description: task ? task.description : "",
    completed: task ? task.completed : false,
    priority: task ? task.priority : null,
    category: task ? task.category : null,
    dueDate: task ? task.dueDate : null,
  });
  const { editingTaskId } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.title) return;
    editingTaskId && dispatch(updateTask(formData)) && updateTaskApi(formData);
    !editingTaskId && dispatch(createTask(formData)) && createTaskApi(formData);
    editingTaskId && dispatch(finishEdit());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      {editingTaskId && (
        <select
          value={formData.completed}
          onChange={(e) =>
            setFormData({ ...formData, completed: e.target.value === "true" })
          }
        >
          <option value="true">完了</option>
          <option value="false">未完了</option>
        </select>
      )}

      <Button type="submit">{editingTaskId ? "完了" : "追加"}</Button>
    </form>
  );
}

export default TaskForm;
