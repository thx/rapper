import React, { useState } from 'react';
import { Button, Spin } from 'antd';
import { useAPI, clearResponseCache } from '../../models/rapper';
import fetch from '../../models/fetcher';

export default () => {
  const [id, setId] = useState(1)
  const [data, { isPending, errorMessage }] = useAPI['GET/useAPI'](
    { id },
    { fetch },
  );
  const clearData = () => {
    clearResponseCache['GET/useAPI']();
  };

  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>useAPI 自动发送</span>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={() => setId(new Date().getTime())}>
          点击改变id
        </Button>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={clearData}>
          点击清空数据
        </Button>
      </div>
      <Spin spinning={isPending}>
        <div>
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
