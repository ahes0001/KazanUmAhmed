import Image, { ImageProps } from 'next/image';

// 1. Define the component's props by extending native Next.js ImageProps
interface CustomImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;                  // Forces src to be a string path
  alt: string;                  // Forces alt to be required for accessibility
  className?: string;           // Optional extra styling classes
}

// 2. Build the component using the typed props
export default function HeroImage({ src, alt, className, ...props }: CustomImageProps) {
  return (
    <div className="relative w-full h-full"> {/* Container required when using fill */}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className || ''}`}
        {...props} // Allows passing other native props like priority, placeholder, etc.
      />
    </div>
  );
}