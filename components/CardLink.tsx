import React, { useState, useMemo } from 'react'
import styled from 'styled-components';
import {
  system,
  color,
  opacity,
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  ColorProps,
  OpacityProps,
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

export const CardLinkContainer = styled.a(
  system({
    transition: true,
  }),
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  opacity,
  color,
);

export interface CardLinkStyleProps extends
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  OpacityProps,
  ShadowProps {
    color?: string;
    transition?: string;
  }

export interface CardLinkProps extends CardLinkStyleProps {
  href: string;
  target?: string;
  children?: React.ReactNode;
  _hover?: CardLinkStyleProps;
}

export const CardLink: React.FC<CardLinkProps> = props => {
  const [hover, setHover] = useState(false);
  const {
    _hover = {},
  } = props;

  const $hoverProps = useMemo(() => {
    if (hover) return _hover;
    return {};
  }, [hover, _hover]);

  return (
    <CardLinkContainer
      color="white"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      background="rgba(0, 0, 0, 0,2)"
      borderRadius={5}
      boxShadow="0px 0px 2px grey"
      padding="5px"
      {...props}
      {...$hoverProps}
    />
  )
}
