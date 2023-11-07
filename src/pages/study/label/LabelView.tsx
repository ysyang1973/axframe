import * as React from "react";
import styled from "@emotion/styled";
import { LabelPreview } from "./LabelPreview.tsx";
import { LabelForm } from "./LabelForm.tsx";
import { useEffect } from "react";
import { Button } from "antd";

export interface ILabel {
  label?: string;
  desc?: string;
  color?: string;
}

interface Props {
  label: ILabel;
  edit: boolean;
  onChangeEdit?: (edit: boolean) => void;
}

export function LabelView({ label, edit, onChangeEdit }: Props) {
  const fna = React.useCallback(function () {}, []);

  return (
    <Container>
      <Button onClick={() => onChangeEdit?.(false)}>취소</Button>
      <LabelPreview />
      {edit && <LabelForm />}
    </Container>
  );
}

const Container = styled.div``;
