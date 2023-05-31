import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export default function EmptyTextarea() {
  

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
  `,
  );

  return (
    <StyledTextarea
      maxRows={4}
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua."
    />
  );
}