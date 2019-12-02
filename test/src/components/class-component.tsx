import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import { connect } from 'react-redux';
import { fetch, rapperSelector, ResponseTypes, clearResponseCache } from '../models/rapper';

type ComponentProps = {
  colorData?: ResponseTypes['GET/testGet'];
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
    const { colorData, isPending } = this.props;

    const code = `fetch['GET/testGet']();`;
    return (
      <div>
        <div>
          <span style={{ color: 'red' }}>class component 使用示例，rapperSelector</span>
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
          </div>
        </Spin>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const [colorData, { isPending }] = rapperSelector['GET/testGet'](state);
  return {
    colorData,
    isPending,
  };
}
export default connect(mapStateToProps)(ClassComponentView);
