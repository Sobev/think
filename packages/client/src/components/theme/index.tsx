import { IconDesktop, IconMoon, IconSun } from '@douyinfe/semi-icons';
import { Button, Dropdown } from '@douyinfe/semi-ui';
import { Theme as ThemeState, ThemeEnum } from 'hooks/use-theme';
import React, { useCallback } from 'react';

export const Theme = () => {
  const { userPrefer, toggle } = ThemeState.useHook();
  const Icon = userPrefer === 'dark' ? IconSun : IconMoon;

  const setLight = useCallback(() => {
    toggle(ThemeEnum.light);
  }, [toggle]);

  const setDark = useCallback(() => {
    toggle(ThemeEnum.dark);
  }, [toggle]);

  const setSystem = useCallback(() => {
    toggle(ThemeEnum.system);
  }, [toggle]);

  return (
    <Dropdown
      position="bottomRight"
      trigger="click"
      showTick
      render={
        <Dropdown.Menu>
          <Dropdown.Item active={userPrefer === ThemeEnum.light} onClick={setLight}>
            <IconSun />
            亮色
          </Dropdown.Item>
          <Dropdown.Item active={userPrefer === ThemeEnum.dark} onClick={setDark}>
            <IconMoon />
            夜色
          </Dropdown.Item>
          <Dropdown.Item active={userPrefer === ThemeEnum.system} onClick={setSystem}>
            <IconDesktop />
            系统
          </Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <Button icon={<Icon style={{ fontSize: 20 }} />} theme="borderless"></Button>
    </Dropdown>
  );
};
