import database from '../firebase/firebase';

const create = (project) => {
    return new Promise((resolve, reject) => {
      database.ref('projects').push().set(project, function(error) {
        if (error) {
          reject(error)
        }
        else{
          resolve({
            success: true,
            project: project
          })
        }
      })
    })
}

const getList = () => {
  return new Promise((resolve, reject) => {
    database.ref('projects').once('value').then((projectsSnapshot) => {
      let list = []
      projectsSnapshot.forEach((childSnapshot) => {
        list.push(childSnapshot.val())
      })
      resolve(list)
    })
    .catch(error => {
      console.log(error)
      reject(error)
    })
  })
}

const Projects = {
    create: create,
    getList: getList
}

export default Projects