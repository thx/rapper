import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux';
import {
  rapperBaseSelector,
  rapperDataSelector,
  ResponseTypes,
  clearResponseCache,
} from '../models/rapper';
import fetch from '../models/fetcher';

type ComponentProps = {
  colorData?: ResponseTypes['GET/testGet'];
  colorDataFilter?: ResponseTypes['GET/testGet'];
  isPending: boolean;
};

class ClassComponentView extends Component<ComponentProps> {
  doRequest() {
    fetch['GET/testGet']();
  }

  clearData() {
    clearResponseCache['GET/testGet']();
  }

  render() {
    const { colorData, colorDataFilter, isPending } = this.props;

    const code = `fetch['GET/testGet']();`;
    return (
      <div>
        <div>
          <span style={{ color: 'red' }}>class component 使用示例，rapperBaseSelector</span>
          <Button type="primary" style={{ marginLeft: '20px' }} onClick={this.doRequest}>
            点击发送请求
          </Button>
          <Button type="primary" style={{ marginLeft: '20px' }} onClick={this.clearData}>
            点击清空数据
          </Button>
        </div>
        <Spin spinning={isPending}>
          <div>
            <div style={{ margin: '20px 0' }}>{code}</div>
            <div style={{ overflow: 'auto' }}>
              <pre>{JSON.stringify(colorData, null, '  ')}</pre>
            </div>
            <div style={{ overflow: 'auto' }}>
              <pre>{JSON.stringify(colorDataFilter, null, '  ')}</pre>
            </div>
          </div>
        </Spin>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const colorData = rapperDataSelector['GET/testGet'](state);
  const [colorDataFilter, { isPending }] = rapperBaseSelector['GET/testGet'](state);
  return {
    colorData,
    colorDataFilter,
    isPending,
  };
}
export default connect(mapStateToProps)(ClassComponentView);
