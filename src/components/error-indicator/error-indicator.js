import React from 'react';

import './error-indicator.css';

import Spiner from '../spiner';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <h5 className="error-indicator__title">Что то пошло не так...</h5>
      <i class="error-indicator__icon fa fa-cloud-download" />
      <h6 className="error-indicator__subtitle">Скоро мы все починим :)</h6>
      <span className="error-indicator__text">Попробуйте начать с главной страницы, или повторите запрос позже.</span>
    </div>
  );
}

export default ErrorIndicator;