import React, { useState } from 'react';
import { Tabs } from 'antd';
import Mode from '../components/useAPI/Mode'
import TestRepeat from '../components/useAPI/TestRepeat'
import UpdateTiming from '../components/useAPI/UpdateTiming'
const { TabPane } = Tabs;

export default () => {
  const [active, setActive] = useState('1')
  
  return (
    <Tabs activeKey={active} onChange={key => setActive(key)}>
      <TabPane tab="mode" key="1">
        <Mode />
      </TabPane>
      <TabPane tab="repeat" key="2">
        <TestRepeat />
      </TabPane>
      <TabPane tab="updateTiming" key="3">
        <UpdateTiming />
      </TabPane>
    </Tabs>
  );
};
