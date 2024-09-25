/*
 * @Author: 刘利军
 * @Date: 2024-09-25 12:02:23
 * @LastEditors: 刘利军
 * @LastEditTime: 2024-09-25 15:30:42
 * @Description:
 * @PageName:
 */
import React from "react";
import { ProChat } from "@ant-design/pro-chat";
import styles from "./index.less";
import { Card, ConfigProvider, List } from "antd";
import { RightOutlined } from "@ant-design/icons";
const AntProChat: React.FC = () => {
  return (
    <ProChat
      style={{
        height: "100vh",
        width: "100vw",
      }}
      helloMessage={
        <ConfigProvider
          theme={{
            token: {
              paddingLG: 8,
            },
            components: {
              Card: {},
            },
          }}
        >
          <Card>
            <div className={styles.helloMsgTitle}>你好,</div>
            <div>我是订货助手，辅助你快速完成订货下单，你想为哪个售点进行下单呢？</div>
            <List
              dataSource={[
                "统一企业大楼",
                "711便利店",
                "红蜻蜓",
                "容么么直播",
                "博士大楼总部",
              ]}
              renderItem={(item) => (
                <List.Item actions={[<RightOutlined />]}>
                  <List.Item.Meta title={item} />
                </List.Item>
              )}
            />
          </Card>
        </ConfigProvider>
      }
      showTitle
      assistantMeta={{
        avatar: "https://retailsit.upbuy.com.cn/static/unif/common/appicon.png",
        title: "U-Order",
      }}
      userMeta={{
        avatar: "https://retailsit.upbuy.com.cn/static/unif/common/avatar.png",
        title: "刘利军",
      }}
      request={async (messages) => {
        console.log("messages", messages);
        const mockedData: string = `这是一段模拟的对话数据。本次会话传入了${messages.length}条消息`;
        return new Response(mockedData);
      }}
    />
  );
};

export default AntProChat;
