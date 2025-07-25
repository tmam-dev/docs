import { ComponentProps } from "react";
import NextImage, { StaticImageData } from "next/image";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

type ImageProps = Omit<ComponentProps<typeof NextImage>, 'src' | 'alt' | 'width' | 'height'> & {
  src: string | StaticImageData;
  alt?: string;
  width?: Width;
  height?: Height;
};

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  ...props
}: ImageProps) {
  if (!src) return null;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      quality={40}
      {...props}
    />
  );
}
