import * as React from "react";
import styled from "@emotion/styled";
import { PageLayout } from "../../../styles/pageStyled";
import { ProgramTitle } from "../../../@core/components/common";
import { Button } from "antd";
import { AXFIRevert } from "@axframe/icon";
import { useI18n } from "../../../@core/hooks";
import { LabelList } from "recharts";
import { ILabel, LabelView } from "./LabelView.tsx";

interface Props {}

export default function App({}: Props) {
  const { t } = useI18n();
  const [isNew, setIsNew] = React.useState(false);
  const [list, setList] = React.useState<ILabel[]>([]);

  return (
    <Container stretch role={"page-container"}>
      <Header>
        <ProgramTitle title={"라벨"}>
          <Button icon={<AXFIRevert />} size='small' type={"text"}>
            {t.button.reset}
          </Button>
        </ProgramTitle>
      </Header>
      <Body>
        {!isNew && <Button onClick={() => setIsNew(true)}>추가</Button>}
        {isNew && (
          <LabelView
            label={{
              label: "PREVIEW",
            }}
            edit={true}
            onChangeEdit={(edit) => {
              setIsNew(edit);
            }}
          />
        )}

        <LabelList
          data={list}
          onChange={(data) => {
            setList(data);
          }}
        />
      </Body>
    </Container>
  );
}

const Container = styled(PageLayout)``;
const Header = styled(PageLayout.Header)``;
const ButtonGroup = styled(PageLayout.ButtonGroup)``;
const Body = styled(PageLayout.Body)``;
