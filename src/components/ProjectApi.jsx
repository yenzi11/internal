import Project from "./Project";
const baseURL = "http://localhost:4000";
const url = `${baseURL}/projects`;

const translateSatusToErrorMessage = (status) => {
  switch (status) {
    case 401:
      return "Please Login again";
    case 403:
      return "You dont have a permission to view the projects";
    default:
      return "There was an error retrieving the project. please try again";
  }
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error : ${JSON.stringify(httpErrorInfo)}`);

    let errorMsg = translateSatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMsg);
  }
};

const parseJSON = (response) => {
  return response.json();
};

const delay = (ms) => {
  return (x) => {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
};

const convertToProjectModels = (data) => {
  let projects = data.map(convertToProjectModel);
  return projects;
};

const convertToProjectModel = (item) => {
  return new Project(item);
};

const projectAPI = {
  get(page, limit = 20) {
    return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=naame`)
      .then(delay(600))
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToProjectModels)
      .catch((error) => {
        console.log("Log client error" + error);
        throw new Error(
          "there was an error retrieving the projects.please try again"
        );
      });
  },

  put(project) {
    return fetch(`${url}/${project.id}`, {
      method: "PUT",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON)
      .catch((error) => {
        console.log("Log client error" + error);
        throw new Error(
          "There was an error retrieving the projects. please try again"
        );
      });
  },

  find(id) {
    return fetch(`${url}/${id}`)
      .then(checkStatus)
      .then(parseJSON)
      .then(convertToProjectModel);
  },
};

export { projectAPI };
