import * as React from "react";
import styled from "@emotion/styled";
import { PageLayout } from "../../../styles/pageStyled";
import { Button, ColorPicker, Form, Input, Row, Col } from "antd";
import { useI18n } from "../../../@core/hooks";
import { ILabel } from "./LabelData";
import { ConsoleSqlOutlined } from "@ant-design/icons";

interface Props {
  label: ILabel;
  edit: boolean;
  onChangeEdit?: (edit: boolean) => void;
  onAdd?: (label: ILabel) => void;
}

function LabelForm({ label, edit, onChangeEdit, onAdd }: Props) {
  const { t } = useI18n();
  const [form] = Form.useForm<ILabel>();

  const handleAdd = React.useCallback(() => {
    const data = form.getFieldsValue();
    onAdd?.({
      ...data,
    });
  }, [form, onAdd]);

  return (
    <Container>
      <LabelItemStyle>
        <Form<ILabel>
          form={form}
          layout={"vertical"}
          validateMessages={{ required: "'${label}' is required!" }}
          onFinish={handleAdd}
        >
          <Row gutter={[8, 16]}>
            <Col xs={8} sm={4}>
              <Form.Item label={"라벨명"} name={"name"} rules={[{ required: true }]}>
                <Input placeholder={label.name} />
              </Form.Item>
            </Col>
            <Col xs={8} sm={8}>
              <Form.Item label={"설명"} name={"description"}>
                <Input placeholder={label.description} />
              </Form.Item>
            </Col>
            <Col xs={8} sm={4}>
              <Form.Item label={"색상"} name={"color"} rules={[{ required: true }]} initialValue={"#ff3300"}>
                <ColorPicker showText />
              </Form.Item>
            </Col>
            <Col xs={12} sm={8}>
              <div>
                <ButtonGroup compact align='flex-end'>
                  <Button size='small' onClick={() => onChangeEdit?.(false)}>
                    {t.button.cancel}
                  </Button>
                  <Button size='small' onClick={() => form.submit()}>
                    {t.button.save}
                  </Button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
        </Form>
      </LabelItemStyle>
    </Container>
  );
}

const ButtonGroup = styled(PageLayout.ButtonGroup)``;
const Container = styled.div``;
const LabelItemStyle = styled.div`
  background: white;
  padding: 16px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 5px 5px 5px 5px;
`;
export default LabelForm;
