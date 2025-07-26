declare module 'react-lazy-load-image-component' {
  import { ComponentType, ImgHTMLAttributes } from 'react';

  export interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    afterLoad?: () => void;
    beforeLoad?: () => void;
    delayMethod?: 'debounce' | 'throttle';
    delayTime?: number;
    effect?: string;
    placeholder?: React.ReactNode;
    threshold?: number;
    useIntersectionObserver?: boolean;
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    wrapperProps?: Record<string, any>;
  }

  export const LazyLoadImage: ComponentType<LazyLoadImageProps>;
  export const trackWindowScroll: <P extends object>(
    Component: ComponentType<P>
  ) => ComponentType<P>;
} 