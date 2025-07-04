// Button.tsx
import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: 'default' | 'primary';
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  variant = 'default',
  disabled = false,
  onClick,
}: Props) => {
  const className =
    variant === 'primary'
      ? 'background-color: green; color: white; padding: 8px; border-radius: 4px;'
      : 'background-color: lightgray; color: black; padding: 8px; border-radius: 4px;';

  return (
    <button
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={{
        ...styleFromString(className),
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}>
      {children}
    </button>
  );
};

// 문자열 스타일을 객체로 변환해주는 유틸 (간단한 형태)
const styleFromString = (str: string): React.CSSProperties => {
  const obj: Record<string, string> = {};
  str.split(';').forEach((line) => {
    const [key, value] = line.split(':').map((v) => v?.trim());
    if (key && value) obj[camelCase(key)] = value;
  });
  return obj;
};

const camelCase = (str: string) =>
  str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
