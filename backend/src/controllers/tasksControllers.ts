import { Request, Response } from 'express';

let tasks: string[] = [];

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const addTask = (req: Request, res: Response) => {
  const { task } = req.body;
  if (!task || typeof task !== 'string') {
    return res.status(400).json({ error: 'Invalid task' });
  }
  tasks.push(task);
  res.status(201).json({ message: 'Task added', task });
};
