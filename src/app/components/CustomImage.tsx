import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: string;
};

export default function CustomImage({ src, alt, priority }: Props) {
  const prty = priority ? true : false;

  return (
    <div>
      <Image
        className="custom--image"
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority={prty}
      />
    </div>
  );
}
