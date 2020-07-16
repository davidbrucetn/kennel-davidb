const remoteURL = "http://localhost:5002"

export default {
  delete(id, basetable) {
    return fetch(`${remoteURL}/${basetable}/${id}`, {
      method: "DELETE"
    }).then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject({ status: result.status, statusText: result.statusText })
      }
    })
  },
  get(id, basetable) {
    return fetch(`${remoteURL}/${basetable}/${id}`).then(result => {
      return result.json();

    })
  },
  getWithAnimals(id, basetable) {
    return fetch(`${remoteURL}/${basetable}/${id}?_embed=animals`)
      .then(result => result.json())
  },
  getWithEmployees(id, basetable) {
    return fetch(`${remoteURL}/${basetable}/${id}?_embed=employees`)
      .then(result => result.json())
  },
  getWithExpandedLocation(id, basetable) {
    return fetch(`${remoteURL}/${basetable}/${id}?_expand=location`).then(result => {
      return result.json();
    })
  },
  getAll(basetable) {
    return fetch(`${remoteURL}/${basetable}`).then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject({ status: result.status, statusText: result.statusText })
      }
    })
  },
  getAllWithExpandedLocation(basetable) {
    return fetch(`${remoteURL}/${basetable}?_expand=location`).then(result => result.json())
  },
  post(newObjEntry, basetable) {
    return fetch(`${remoteURL}/${basetable}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObjEntry)
    }).then(data => data.json())
  },
  update(editedObject, basetable) {
    return fetch(`${remoteURL}/${basetable}/${editedObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObject)
    }).then(data => data.json());
  },
  // Add this method to the AnimalManager object
  getRandomId(basetable) {
    return fetch(`${remoteURL}/${basetable}`)
      .then(result => result.json())
      .then(basetable => {
        const randomIndex = Math.floor(Math.random() * basetable.length);
        const randomAnimal = basetable[randomIndex];
        return randomAnimal.id;
      })
  }
}