import React from 'react';
import { Button, Spin } from 'antd';
import { useResponse, useAllResponse, clearResponseCache, fetch } from '../models/rapper';
// import fetch from '../models/fetcher';

const Request = () => {
  const [data, { isPending }] = useResponse['GET/testGet']();
  const allData = useAllResponse['GET/testGet']();
  if (allData.length) {
    // const { id, request, response } = allData[0];
  }
  const doRequest = () => {
    fetch['GET/testGet']({ id: 1 }, { query: { testQuery: [1, 2] } });
  };
  const clearData = () => {
    clearResponseCache['GET/testGet']();
  };

  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>普通redux请求</span>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={doRequest}>
          点击发送请求
        </Button>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={clearData}>
          点击清空数据
        </Button>
      </div>
      <Spin spinning={isPending}>
        <div>
          <div style={{ margin: '20px 0' }}>fetch['GET/testGet']();</div>
          <div>
            <pre>{JSON.stringify(data, null, '  ')}</pre>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default Request;
