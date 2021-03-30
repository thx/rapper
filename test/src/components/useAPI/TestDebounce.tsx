import React from 'react';
import { Spin } from 'antd';
import { useAPI } from '../../models/rapper';

export default () => {
  const [dataSource, { isPending }] = useAPI['POST/test/debounce']({ id: 1 })

  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>useAPI 自动发送</span>
      </div>
      <Spin spinning={isPending}>
        <div>
          <div>
            <pre>{JSON.stringify(dataSource, null, '  ')}</pre>
          </div>

          <div>
            <ChildComponent />
          </div>
        </div>
      </Spin>
    </div>
  );
};

const ChildComponent = () => {
  // 请求参数相同时，不应该发请求
  const [dataSource] = useAPI['POST/test/debounce']({ id: 1 })
  // 请求参数不同时，应该发送请求
  const [dataSource2] = useAPI['POST/test/debounce']({ id: 2 })

  return (
    <div>
      子节点
      <pre>{JSON.stringify(dataSource, null, '  ')}</pre>
    </div>
  )
}