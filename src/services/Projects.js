import database from '../firebase/firebase';

const create = project => new Promise((resolve, reject) => {
  database.ref('projects').push().set(project, (error) => {
    if (error) {
      reject(error);
    } else {
      resolve({
        success: true,
        project
      });
    }
  });
});

const getList = () => new Promise((resolve, reject) => {
  database.ref('projects').once('value').then((projectsSnapshot) => {
    const list = [];
    projectsSnapshot.forEach((childSnapshot) => {
      list.push(childSnapshot.val());
    });
    resolve(list);
  })
    .catch((error) => {
      reject(error);
    });
});

const Projects = {
  create,
  getList,
};

export default Projects;
