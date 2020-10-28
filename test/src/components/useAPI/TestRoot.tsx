/**
 * 测试请求、响应参数根节点不是object，是array的场景
 */
import React from 'react';
import { Button, Spin } from 'antd';
import { useResponse, fetch } from '../../models/rapper';

export default () => {
  const [data, { isPending, errorMessage }] = useResponse['POST/test/root']()

  const handleRequest = () => {
    fetch['POST/test/root']([{ id: '1' }])
  }

  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>useAPI 自动发送</span>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={handleRequest}>
          点击发送请求
        </Button>
      </div>
      <Spin spinning={isPending}>
        <div>
          <div style={{ margin: '20px 0' }}>fetch['POST/test/root']();</div>
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
