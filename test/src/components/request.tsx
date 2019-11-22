import React from 'react';
import Button from 'antd/es/button';
import fetch from '../models/fetcher';

const Request = () => {
  const doRequest = () => {
    fetch['GET/example/1565269104015']();
  };

  return (
    <div>
      <div>
        <span>普通redux请求</span>
        <Button type="primary" onClick={doRequest}>
          点击发送请求
        </Button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default Request;
