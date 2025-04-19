// src/hooks/useRenderCount.ts
import { useRef } from 'react';

export function useRenderCount() {
    const count = useRef(1);
    count.current += 1;
    return count.current;
}