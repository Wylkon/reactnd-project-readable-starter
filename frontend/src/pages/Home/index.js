import React from 'react';

const removeLoader = () => {
  const loaderDiv = document.querySelector('.loader');
  loaderDiv.classList.add('removing');

  setTimeout(() => {
    loaderDiv.parentNode.removeChild(loaderDiv);
  }, 1000);
};

export const Home = () => {
  removeLoader();
  return (
    <React.Fragment>
      <p>teste</p>
    </React.Fragment>
  );
};
