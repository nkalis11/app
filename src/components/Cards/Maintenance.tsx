import React, {useState } from "react";

import { api } from "~/utils/api";
import type { TaskCreateInput, TaskDeleteInput } from "~/server/api/routers/tasks";

const Maintenance = () => {
  const { data } = api.tasks.getAll.useQuery();
  const createTaskMutation = api.tasks.createTask.useMutation();
  const deleteTaskMutation = api.tasks.deleteTask.useMutation();

  const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [assigneeId, setAssigneeId] = useState("");

    const handleCreateTask = () => {
        createTaskMutation.mutate({ input: { title, content, assigneeId } }, {
          onSuccess: () => {
            setTitle("");
            setContent("");
            setAssigneeId("");
          },
        });
      };
      const handleDeleteTask = (id: string) => {
        deleteTaskMutation.mutate({ id: id }, {
          onSuccess: () => {
            // handle success
          },
        });
      };

  return (
    <> 
    <div className="mb-4">
        <input className="mr-2" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input className="mr-2" type="text" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}/>
        <input className="mr-2" type="text" placeholder="Asignee" value={assigneeId} onChange={(e) => setAssigneeId(e.target.value)}/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateTask}>
            Add Task
        </button>
    </div>

      {data?.map((task) => (
        <div key={task.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4 flex flex-row bg-red-500">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{task.title}</div>
            <p className="font-light text=gray-700 text-base">{task.content}</p>
            <h2>Assigned to: {task.assigneeId}</h2>
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteTask(task.id)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Maintenance;


