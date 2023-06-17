import Image from 'next/image';

export interface BWImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const BWImage: React.FC<BWImageProps> = ({ src, alt, width, height }) => (
  <div className="filter grayscale hover:grayscale-0 transition-all duration-500">
    <Image src={src} alt={alt} width={width} height={height} quality={100} />
  </div>
);

export default BWImage;
