import { useEffect } from 'react';

export function useLockBodyScroll(shouldLock: boolean): void {
  useEffect(() => {
    if (!shouldLock) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldLock]);
}
