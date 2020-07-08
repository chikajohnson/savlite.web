import React from 'react';

export default function ({ error }) {
  if (error) {
    return <>
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </>
  } else {
    return null;
  }
}