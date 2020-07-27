import React, { useState } from 'react';
import { Tabs } from 'antd';
import Mode from '../components/useAPI/Mode'
import TestRepeat from '../components/useAPI/TestRepeat'
import UpdateTiming from '../components/useAPI/UpdateTiming'
import Request from '../components/useAPI/Request'
const { TabPane } = Tabs;

export default () => {
  const [active, setActive] = useState('mode')
  
  return (
    <Tabs activeKey={active} onChange={key => setActive(key)}>
      <TabPane tab="mode" key="mode">
        <Mode />
      </TabPane>
      <TabPane tab="repeat" key="repeat">
        <TestRepeat />
      </TabPane>
      <TabPane tab="updateTiming" key="updateTiming">
        <UpdateTiming />
      </TabPane>
      <TabPane tab="request" key="request">
        <Request />
      </TabPane>
    </Tabs>
  );
};
