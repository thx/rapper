import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useAPI } from '../../models/rapper';

export default () => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [id, setId] = useState(1)
  const [mode, setMode] = useState<"paramsMatch" | "notMatch" | "manual" | undefined>(undefined)

  const ModalComponent = () => {
    console.log('mode', mode)
    const [data2] = useAPI['GET/useAPI'](
      { id },
      { mode },
    );
    return <Modal
        title="Basic Modal"
        visible={true}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <pre>{JSON.stringify(data2, null, '  ')}</pre>
      </Modal>
  }

  return (
    <div>
      <div>
        <span style={{ color: 'red' }}>useAPI 重复发送，测试filter</span>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={() => {
          setMode(undefined)
          setModalVisible(true)
        }}>
          mode：默认，请求参数不变
        </Button>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={() => {
          setMode(undefined)
          setId(new Date().getTime())
          setModalVisible(true)
        }}>
          mode：默认，请求参数变化
        </Button>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={() => {
          setMode('notMatch')
          setModalVisible(true)
        }}>
          mode：notMatch，请求参数不变
        </Button>
        <Button type="primary" style={{ marginLeft: '20px' }} onClick={() => {
          setMode('notMatch')
          setId(new Date().getTime())
          setModalVisible(true)
        }}>
          mode：notMatch，请求参数变化
        </Button>
      </div>

      {isModalVisible && <ModalComponent />}
    </div>
  );
};
