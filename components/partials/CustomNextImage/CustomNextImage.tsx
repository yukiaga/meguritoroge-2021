import NextImage, { ImageProps } from 'next/image';
import { FC, memo } from 'react';

// なんか色々まとめて設定できるかなと思ったが特になかった
export const CustomNextImage: FC<ImageProps> = memo(({ ...props }) => {
  return <NextImage {...props} />;
});

CustomNextImage.displayName = 'CustomNextImage';
