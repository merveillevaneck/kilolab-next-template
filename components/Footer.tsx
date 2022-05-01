import React from 'react'
import styled from 'styled-components';
import {
  system,
  compose,
  display,
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
  DisplayProps,
} from 'styled-system';

export interface FooterStyleProps extends
  DisplayProps,
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

const styleProps = compose(
  system({
    transition: true,
  }),
  display,
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

export const FooterContainer = styled.footer<FooterStyleProps>(
  styleProps,
);

export const FooterContent = styled.div(
  styleProps,
)

export interface FooterProps extends FooterStyleProps {
  children?: React.ReactNode;
  _hover?: FooterStyleProps;
  logo: React.ReactNode;
  _content?: FooterStyleProps;
}

export const Footer: React.FC<FooterProps> = props => {
  const {
    logo,
    children,
    _content = {},
    ...rest
  } = props;

  return (
    <FooterContainer
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      height="250px"
      alignItems="center"
      {...rest}
    >
      {logo}
      <FooterContent {..._content}>
        {children}
      </FooterContent>
    </FooterContainer>
  )
}
