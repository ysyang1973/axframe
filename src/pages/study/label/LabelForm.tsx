import * as React from "react";
import styled from "@emotion/styled";
import { Button, ColorPicker, Form, Input } from "antd";

interface Props {}

export function LabelForm({}: Props) {
  const [form] = Form.useForm();
  return (
    <Container>
      <Form
        form={form}
        layout={"vertical"}
        validateMessages={{
          required: "'${label}' is required!",
        }}
        onFinish={() => {
          console.log("onFinish", form.getFieldsValue());
        }}
      >
        <Form.Item
          label={"라벨명"}
          name={"label"}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"설명"} name={"desc"}>
          <Input />
        </Form.Item>
        <Form.Item label={"색상"} name={"color"}>
          <ColorPicker showText />
        </Form.Item>

        <Button htmlType={"submit"}>저장</Button>
      </Form>
      <Button onClick={() => form.submit()}>저장</Button>
    </Container>
  );
}

const Container = styled.div``;
