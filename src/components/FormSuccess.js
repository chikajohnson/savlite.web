import React from 'react';

export default function ({message}) {
  if (message) {
    return <>
      <div className="alert alert-success" role="alert">
        {message}
      </div>
    </>
  } else {
    return null;
  }
}