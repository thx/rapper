import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { ResponseTypes } from '../models/rapper';
import fetch from '../models/fetcher';

const RequestFormdata = () => {
  const [data, setData] = useState<ResponseTypes['GET/testGet'] | undefined>(undefined);

  const [isPending, setIsPending] = useState(false);

  const doRequest = () => {
    setIsPending(true);
    fetch['GET/testGet']({ id: 11, objectParams: { a: [1, 2] } }, { type: 'normal' })
      .then(response => {
        setData(response);
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  const clearData = () => {
    setData(undefined);
  };

  const code = `fetch['GET/testGet']({ id: 11, objectParams: { a: [1, 2] } }, { type: 'normal' });`;
  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>normal 请求</span>
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

export default RequestFormdata;
