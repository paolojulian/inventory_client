import { AppText } from '@/components/shared';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@/components/shared/icons';
import cn from '@/utils/cn';

interface AppPagerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showPageNumbers?: boolean;
  maxVisiblePages?: number;
}

const AppPager = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  showPageNumbers = true,
  maxVisiblePages = 5,
}: AppPagerProps) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);

    let start = Math.max(1, currentPage - halfVisible);
    let end = Math.min(totalPages, currentPage + halfVisible);

    // Adjust if we're near the edges
    if (currentPage - halfVisible < 1) {
      end = Math.min(totalPages, maxVisiblePages);
    }
    if (currentPage + halfVisible > totalPages) {
      start = Math.max(1, totalPages - maxVisiblePages + 1);
    }

    // Add first page and ellipsis if needed
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push('...');
    }

    // Add visible pages
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add last page and ellipsis if needed
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div
      className={cn(
        'flex items-center justify-between gap-2 bg-white border-t border-gray-100',
        className
      )}
    >
      <div className='flex items-center gap-2'>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className='flex items-center gap-2 group p-2 cursor-pointer text-gray-400 hover:text-foreground'
        >
          <ArrowLongLeftIcon className='w-5 h-5' />
          <AppText>Previous</AppText>
        </button>
      </div>

      {showPageNumbers && (
        <div className='flex items-center gap-1 h-10'>
          {visiblePages.map((page, index) => (
            <div key={index} className='h-full'>
              {page === '...' ? (
                <span className='px-2 py-1 text-gray-500'>...</span>
              ) : (
                <button
                  onClick={() => onPageChange(page as number)}
                  className={cn(
                    'min-w-[32px] aspect-square h-full cursor-pointer border-t-2',
                    page === currentPage
                      ? 'text-accent border-accent'
                      : 'text-gray-500 hover:bg-gray-100 border-transparent'
                  )}
                >
                  <AppText>{page}</AppText>
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      <div className='flex items-center gap-2'>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className={cn(
            'flex items-center gap-2 text-gray-400 hover:text-foreground p-2 cursor-pointer'
          )}
        >
          <AppText>Next</AppText>
          <ArrowLongRightIcon className='w-5 h-5' />
        </button>
      </div>
    </div>
  );
};

export default AppPager;
