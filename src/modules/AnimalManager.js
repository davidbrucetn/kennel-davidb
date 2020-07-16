

export default {

  getBreeds() {
    return fetch(`https://api.thedogapi.com/v1/breeds`).then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject({ status: result.status, statusText: result.statusText })
      }
    })
  }
}