/*
MIT License

Copyright (c) 2021-present, Elastic NV

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

import {
  EuiButtonIcon,
  EuiButtonIconPropsForButton,
  EuiToolTip,
} from "@elastic/eui";
import React from "react";

const DEFAULT_DISABLED_TOOLTIP_CONTENT = "Cannot edit actions while recording.";
interface IActionControlButton {
  disabledToolTipContent?: string;
  // when disabled, display a tooltip explaining why
  hideToolTipWhenDisabled?: boolean;
  isVisible: boolean;
}

type Props = IActionControlButton & EuiButtonIconPropsForButton;

export function ActionControlButton({
  disabledToolTipContent,
  isDisabled,
  hideToolTipWhenDisabled,
  iconType,
  isVisible,
  onClick,
  ...rest
}: Props) {
  const button = (
    <EuiButtonIcon
      color="text"
      iconType={iconType}
      isDisabled={isDisabled}
      onClick={onClick}
      style={{
        visibility: isVisible ? "visible" : "hidden",
      }}
      {...rest}
    />
  );

  if (isDisabled && !hideToolTipWhenDisabled) {
    return (
      <EuiToolTip
        content={disabledToolTipContent || DEFAULT_DISABLED_TOOLTIP_CONTENT}
      >
        {button}
      </EuiToolTip>
    );
  }

  return button;
}
