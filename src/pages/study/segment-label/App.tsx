import styled from "@emotion/styled";
import { Button, Form, Divider } from "antd";
import { ProgramTitle } from "@core/components/common";
import React, { useRef, useState } from "react";
import { AXFIRevert, AXFIWriteForm } from "@axframe/icon";
import { PageLayout } from "styles/pageStyled";
import { useI18n } from "@core/hooks/useI18n";
import { errorHandling } from "utils/errorHandling";
import LabelList from "./LabelList";
import LabelForm from "./LabelForm";
import { ILabel, labelSamples } from "./LabelData";

interface Props {}

const newLabel: ILabel = {
  id: 0,
  name: "새 라벨명",
  description: "새 설명",
  color: "",
};

function App({}: Props) {
  const [isNew, setIsNew] = React.useState(false);
  const [labels, setlabels] = React.useState<ILabel[]>(labelSamples);
  const { t } = useI18n();

  return (
    <Container stretch={false} role={"page-container"}>
      <Header>
        <ProgramTitle>
          <Button icon={<AXFIWriteForm />} size='small' type={"text"}>
            {t.button.reset}
          </Button>
        </ProgramTitle>
        <ButtonGroup compact>
          <Button>{t.button.search}</Button>
          <Button onClick={() => setIsNew(true)}>{t.button.addNew}</Button>
        </ButtonGroup>
      </Header>
      <Body>
        {isNew && (
          <div>
            <br />
            <LabelForm
              label={newLabel}
              edit={true}
              onChangeEdit={(edit) => {
                setIsNew(edit);
              }}
              onAdd={(label) => {
                setlabels([...labels, ...[label]]);
                setIsNew(false);
              }}
            />
            <br />
          </div>
        )}
        <LabelList labels={labels} />
      </Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;
const Body = styled(PageLayout.Body)``;

export default App;
