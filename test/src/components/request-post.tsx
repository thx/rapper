import React from 'react';
import { Button, Spin } from 'antd';
import { fetch, useResponse, clearResponseCache } from '../models/rapper';

const RequestPost = () => {
  const [data, { isPending }] = useResponse['POST/testPost']();
  const doRequest = () => {
    fetch['POST/testPost']({ id: '11' });
  };
  const clearData = () => {
    clearResponseCache['POST/testPost']();
  };

  const code = `fetch['POST/testPost']({ id: '11' });`;
  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>post 请求</span>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={doRequest}>
          点击发送请求
        </Button>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={clearData}>
          点击清空数据
        </Button>
      </div>
      <Spin spinning={isPending}>
        <div>
          <div style={{ margin: '20px 0' }}>{code}</div>
          <div style={{ overflow: 'auto' }}>
            <pre>{JSON.stringify(data, null, '  ')}</pre>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default RequestPost;
