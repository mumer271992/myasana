import database from '../firebase/firebase';

const create = task => new Promise((resolve, reject) => {
  database.ref('tasks').push().set(task, (error) => {
    if (error) {
      reject(error);
    } else {
      resolve({
        success: true,
        task,
      });
    }
  });
});

const getList = projectId => new Promise((resolve) => {
  const taskRef = database.ref('tasks');
  taskRef.orderByChild('project_uuid').equalTo(projectId).on('value', (snapshot) => {
    const list = [];
    snapshot.forEach((childSnapshot) => {
      list.push({ ...childSnapshot.val(), fbKey: childSnapshot.key });
    });
    resolve(list);
  });
});

const update = (taskId, data) => new Promise((resolve, reject) => {
  const params = { ...data };
  delete params.fbKey;
  database.ref(`tasks/${taskId}`).update(params, (error) => {
    if (error) {
      // The write failed...
      reject(error);
    } else {
      resolve({ success: true });
    }
  });
});

const Tasks = {
  create,
  getList,
  update

};

export default Tasks;
