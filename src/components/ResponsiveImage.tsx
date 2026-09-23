import type { ImgHTMLAttributes } from 'react';

interface ImageAsset {
  basename: string;
  widths: number[];
  width: number;
  height: number;
}

const assets: Record<string, ImageAsset> = {
  '/images/portfolio/systems-hero.png': { basename: 'systems-hero', widths: [768, 1440], width: 1536, height: 1024 },
  '/images/portfolio/buildow-case-study.png': { basename: 'buildow-case-study', widths: [768, 1440], width: 1486, height: 1058 },
  '/images/portfolio/agentforge-intake.png': { basename: 'agentforge-intake', widths: [768, 1440], width: 2560, height: 2094 },
  '/images/portfolio/agentforge-integrations.png': { basename: 'agentforge-integrations', widths: [768, 1440], width: 2560, height: 2048 },
  '/images/portfolio/agentforge-review.png': { basename: 'agentforge-review', widths: [768, 1440], width: 2560, height: 2222 },
  '/images/portfolio/agentforge-workspace.png': { basename: 'agentforge-workspace', widths: [768, 1440], width: 2560, height: 2984 },
  '/images/portfolio/woody-hero.jpg': { basename: 'woody-hero', widths: [640, 1200], width: 1706, height: 2412 },
};

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height' | 'loading'> {
  src: string;
  priority?: boolean;
}

const sourceSet = (asset: ImageAsset, extension: 'avif' | 'webp') => asset.widths
  .map((width) => `/images/optimized/${asset.basename}-${width}.${extension} ${width}w`)
  .join(', ');

export default function ResponsiveImage({ src, alt, priority = false, sizes = '100vw', ...props }: ResponsiveImageProps) {
  const asset = assets[src];
  if (!asset) return <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" {...props} />;

  const largest = asset.widths[asset.widths.length - 1];
  const priorityAttributes = priority ? { fetchpriority: 'high' } : {};
  return (
    <picture className="responsive-image">
      <source type="image/avif" srcSet={sourceSet(asset, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={sourceSet(asset, 'webp')} sizes={sizes} />
      <img
        src={`/images/optimized/${asset.basename}-${largest}.webp`}
        alt={alt}
        width={asset.width}
        height={asset.height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...priorityAttributes}
        {...props}
      />
    </picture>
  );
}
