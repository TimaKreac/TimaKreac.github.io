const getData = () => {
  const goodsWrapper = document.querySelector(".goods");
  return fetch("db.json")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Данные не были получены ${response.status}`);
      }
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      console.warn(err);
      goodsWrapper.innerHTML =
        '<div style="font-size: 40px;">Упс..Что-то пошло не так!Данные с сервера не были получены</div>';
    });
};

export default getData;
