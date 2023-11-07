import React from "react";
import styled from "@emotion/styled";
import { Button, Col, Row } from "antd";
import { PageLayout } from "styles/pageStyled";
import { useI18n } from "@core/hooks/useI18n";
import LabelForm from "./LabelForm.tsx";
import { SMixinFlexColumn } from "../../../@core/styles/emotion";
import { css } from "@emotion/react";
import { isDark } from "../../../styles/palette/colorUtil.ts";

function LabelList({ labels, editId }) {
  const { t } = useI18n();
  const [editID, setEditID] = React.useState("");

  return (
    <div>
      <LabelHeaderStyle>{labels.length} Labels</LabelHeaderStyle>
      <div>
        {labels.map((label, key) =>
          editID === label.id ? (
            <LabelForm label={label} edit={false} />
          ) : (
            <LabelItemStyle key={key}>
              <Row gutter={[8, 16]}>
                <Col xs={12} sm={4}>
                  <LabelColorStyle color={label.color}>{label.name}</LabelColorStyle>
                </Col>
                <Col xs={12} sm={8}>
                  <div>{label.description}</div>
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
            </LabelItemStyle>
          ),
        )}
      </div>
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
  border-radius: 20px;
  ${SMixinFlexColumn("center", "center")};

  font-weight: bold;
  color: ${(p) => (isDark(p.color ?? "") ? "white" : "black")};

  ${({ color }) => {
    if (isDark(color ?? "")) {
      return css`
        color: white;
      `;
    }

    return css`
      color: black;
    `;
  }}
`;

export default LabelList;
