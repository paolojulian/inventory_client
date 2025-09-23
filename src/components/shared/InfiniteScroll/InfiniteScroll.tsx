import cn from '@/utils/cn';
import { type ReactNode, useEffect, useRef, useCallback } from 'react';

type Props = {
  children: ReactNode;
  onLoadMore: () => void;
  hasNextPage?: boolean;
  isLoading?: boolean;
  threshold?: number;
  className?: string;
  loadingComponent?: ReactNode;
  useWindow?: boolean;
};

const InfiniteScroll = ({
  children,
  onLoadMore,
  hasNextPage = true,
  isLoading = false,
  threshold = 100,
  className,
  loadingComponent,
  useWindow = false,
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (isLoading || !hasNextPage) return;

    let isNearBottom = false;

    if (useWindow) {
      // Use window scroll
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      isNearBottom = scrollHeight - scrollTop - clientHeight < threshold;
    } else {
      // Use container scroll
      if (!scrollRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      isNearBottom = scrollHeight - scrollTop - clientHeight < threshold;
    }

    if (isNearBottom) {
      onLoadMore();
    }
  }, [isLoading, hasNextPage, threshold, onLoadMore, useWindow]);

  useEffect(() => {
    if (useWindow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll, useWindow]);

  return (
    <div
      data-testid='InfiniteScroll__container'
      ref={useWindow ? undefined : scrollRef}
      className={cn(useWindow ? '' : 'overflow-auto', className)}
    >
      {children}
      {isLoading && loadingComponent && (
        <div className='flex justify-center py-4'>{loadingComponent}</div>
      )}
    </div>
  );
};

export default InfiniteScroll;
