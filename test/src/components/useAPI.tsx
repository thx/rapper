import React from 'react';
import { Button, Spin } from 'antd';
import { useAPI, clearResponseCache } from '../models/rapper';
import fetch from '../models/fetcher';

export default () => {
  const [data, { isPending, request, errorMessage }] = useAPI['GET/useAPI'](
    {},
    { fetch, mode: 'manual' },
  );
  const doRequest = () => {
    request({ id: 1 }, { query: { testQuery: [1, 2] } });
  };
  const clearData = () => {
    clearResponseCache['GET/useAPI']();
  };

  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>useAPI 自动发送</span>
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
            {errorMessage ? (
              `错误信息: ${errorMessage}`
            ) : (
              <pre>{JSON.stringify(data, null, '  ')}</pre>
            )}
          </div>
        </div>
      </Spin>
    </div>
  );
};
