import React, { useState } from 'react'
import { Tabs, Button, Spin } from 'antd'
import { useAPI, clearResponseCache } from '../../models/rapper'

const TabContent = (props: { type: number }) => {
  const [data, { isPending, request, errorMessage }] = useAPI['GET/useAPI/multiple-tab'](
    { type: props.type }
  );
  const doRequest = () => {
    request();
  };
  const clearData = () => {
    clearResponseCache['GET/useAPI/multiple-tab']();
  };
  return (
    <div>
      <div>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={doRequest}>
          点击发送请求
        </Button>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={clearData}>
          点击清空数据
        </Button>
      </div>
      <Spin spinning={isPending}>
        <div>
          {errorMessage ? (
            `错误信息: ${errorMessage}`
          ) : (
            <pre>{JSON.stringify(data, null, '  ')}</pre>
          )}
        </div>
      </Spin>
    </div>
  )
}

export default () => {
  const [active, setActive] = useState('1')
  return (
    <div>
      <Tabs activeKey={active} onChange={key => setActive(key)}>
        <Tabs.TabPane tab='1' key='1' forceRender={true}>
          <TabContent type={1} />
        </Tabs.TabPane>
        <Tabs.TabPane tab='2' key='2' forceRender={true}>
          <TabContent type={2} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}