import React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

function Icon(props: any) {
  const { size = 32, color = "#000", ...rest } = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 32 32"
      {...rest}
    >
      <G clipPath="url(#clip0_1005_302)">
        <Path
          fill={color}
          d="M18.828 16L31.414 3.415A2 2 0 0028.585.586L16 13.172 3.415.586a2 2 0 10-2.829 2.83L13.172 16 .586 28.585a2 2 0 102.83 2.83L16 18.827l12.585 12.586a2 2 0 002.83-2.829L18.827 16z"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1005_302">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Icon;
