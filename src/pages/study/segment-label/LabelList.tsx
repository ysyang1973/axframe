import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { Button, Form, Row, Col, Divider } from "antd";
import { PageLayout } from "styles/pageStyled";
import { useI18n } from "@core/hooks/useI18n";

function LabelList({ labels }) {
  const { t } = useI18n();
  const LabelItem = ({ item }) => {
    return (
      <Row gutter={[8, 16]}>
        <Col xs={12} sm={4}>
          <LabelColorStyle color={item.color}>{item.name}</LabelColorStyle>
        </Col>
        <Col xs={12} sm={8}>
          <div>{item.description}</div>
        </Col>
        <Col xs={12} sm={12}>
          <div>
            <ButtonGroup compact align='flex-end'>
              <Button size='small'>{t.button.edit}</Button>
              <Button size='small'>{t.button.delete}</Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
    );
  };

  const LabelItemsDiv = labels.map((label) => (
    <LabelItemStyle key={label.id}>
      <LabelItem item={label} key={label.id} />
    </LabelItemStyle>
  ));

  return (
    <div>
      <LabelHeaderStyle>{labels.length} Labels</LabelHeaderStyle>
      <div>{LabelItemsDiv}</div>
    </div>
  );
}
const ButtonGroup = styled(PageLayout.ButtonGroup)``;
const Body = styled(PageLayout.Body)``;
const LabelItemStyle = styled.div`
  background: white;
  padding: 16px;
  border-left: 1px solid rgb(222, 222, 222);
  border-right: 1px solid rgb(222, 222, 222);
  border-bottom: 1px solid rgb(222, 222, 222);
  &:last-child {
    border-radius: 0px 0px 5px 5px;
  }
`;

const LabelHeaderStyle = styled.div`
  background: #ffff;
  padding: 10px 16px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid rgb(222, 222, 222);
  border: 1px solid rgb(222, 222, 222);
`;

const LabelColorStyle = styled.div<{
  color?: string;
}>`
  background: ${({ color = "red" }) => color};
  padding: 10px;
  border-radius: 15px 15px 15px 15px;
  border: 1px solid rgb(222, 222, 222);
`;

export default LabelList;
