import React from 'react';
import appError from '../assets/App-Error.png';
import error404 from '../assets/error-404.png';

const ErrorPage = ({errorType}) => {

  return (
    <div className='flex justify-center items-center h-[80vh]'>
      {
        errorType === 'error404' && <img src={error404} alt="appError" /> ||
        errorType === 'appError' && <img src={appError} alt="appError" />
      }
    </div>
  );
};

export default ErrorPage;