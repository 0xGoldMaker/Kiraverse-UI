import { beforeAll, vi } from 'vitest';

beforeAll(() => {
  vi.mock('next/router', () => {
    return require('next-router-mock');
  });
});
