import React from 'react';
import Header from 'src/components/Header';

import tasksApi from 'src/features/demoApi';

import './HomePage.css';

export type TasksType = {
  id: string;
  content: string;
  isComplete: boolean;
};

const HomePage: React.FC = () => {
  const [tasks, setTasks] = React.useState<unknown>([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      const apiResponse = await tasksApi.getApi();
      console.log(apiResponse.data);
      setTasks(apiResponse.data);
    };
    fetchAPI();
  }, []);

  return (
    <React.Fragment>
      <div className="home">
        <Header />
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>Dit me may</div>
        <div>
          {(tasks as TasksType[]).map((value: TasksType) => (
            <div key={value.id}>{(value as TasksType).content}</div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
