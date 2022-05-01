import React from 'react';
import Image, { ImageProps } from 'next/image';
import {Title} from '@kilo-lab/web-design.title';
import styled from 'styled-components';
import {
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
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

export const Container = styled.div`
  width: 100%;
  minHeight: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const TitleGraphicContainer = styled(Container)(
  space,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
);

export interface StyleProps extends
  SpaceProps,
  TypographyProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  PositionProps,
  ShadowProps {}

export interface TitleGraphicProps extends StyleProps {
  src: string;
  title: React.ReactNode;
  imageProps?: ImageProps;
}

export const TitleGraphic: React.FC<TitleGraphicProps> = props => {
  
  const {
    src,
    title,
    imageProps,
    ...rest
  } = props;

  return (
    <TitleGraphicContainer {...rest}>
      <Image src={src} {...imageProps} />
      {typeof title === 'string' && (
        <Title fontSize={32} color="black">{title}</Title>
      )}
      {typeof title !== 'string' && (
        title
      )}
    </TitleGraphicContainer>
  );
}
