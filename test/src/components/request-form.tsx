import React from 'react';
import { Button, Spin } from 'antd';
import { useResponse, clearResponseCache } from '../models/rapper';
import fetch from '../models/fetcher';

const RequestFormdata = () => {
  const [data, { isPending }] = useResponse['POST/testFormData']();
  const doRequest = () => {
    fetch['POST/testFormData'](
      { type: 'testform', role: 'admin' },
      { contentType: 'application/x-www-form-urlencoded' },
    );
  };
  const clearData = () => {
    clearResponseCache['POST/testFormData']();
  };

  const code = `fetch['POST/testFormData']({ type: 'testform', role: 'admin' });`;
  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>form data 请求</span>
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
