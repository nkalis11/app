import React, {useState } from "react";

import { api } from "~/utils/api";
<<<<<<< HEAD
import { TaskCreateInput, TaskDeleteInput } from "~/server/api/routers/tasks";


const Maintenance = () => {
  const { data } = api.tasks.getAll.useQuery();
  const createTaskMutation = api.tasks.createTask.useMutation();
  const deleteTaskMutation = api.tasks.deleteTask.useMutation();

  const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [assigneeId, setAssigneeId] = useState("");

    const handleCreateTask = () => {
        const input = TaskCreateInput.parse({
          title,
          content,
          assigneeId,
        });
      
        createTaskMutation.mutate({ input });
      };
      
      const handleDeleteTask = (id: string) => {
        const input = TaskDeleteInput.parse({ id });
      
        deleteTaskMutation.mutate({ input });
      };
      

=======

type NewTask = {
  title: string;
  content: string;
  assigneeId: string;
};

const Maintenance = () => {
  const { data, refetch } = api.tasks.getAll.useQuery();
>>>>>>> past

  return (
    <>
      {data?.map((task) => (
        <div
          key={task.id}
          className="max-w-sm rounded overflow-hidden shadow-lg mb-4 flex flex-row bg-slate-200"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{task.title}</div>
            <p className="font-light text=gray-700 text-base">{task.content}</p>
            <h2>Assigned to: {task.assigneeId}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default Maintenance;


