import * as React from "react";
import styled from "@emotion/styled";
import { useI18n } from "../@core/hooks";
import { Button } from "antd";

interface Props {}

export default function App({}: Props) {
  const { t } = useI18n();

  return (
    <Container>
      App 1232 {t.appName}
      <Button>{t.button.save}</Button>
    </Container>
  );
}

const Container = styled.div``;
