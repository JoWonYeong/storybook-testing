import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { within, expect, fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 실패 케이스
    // const button = canvas.getByRole('button', { name: /disableddisabled/i });
    const button = canvas.getByRole('button', { name: /Disabled/i });

    // 버튼이 비활성화 상태인지 확인
    expect(button).toBeDisabled();

    // 비활성화일 때 cursor 스타일 확인
    expect(button).toHaveStyle({ cursor: 'not-allowed' });

    // 투명도 낮아진 것도 확인
    expect(button).toHaveStyle({ opacity: '0.6' });
  },
};
export const Clickable: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    await button.click();

    expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
