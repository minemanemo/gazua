import '@emotion/react';
import type { Theme as GlobalTheme } from '@common/styles/theme';

declare module '@emotion/react' {
  export interface Theme extends GlobalTheme {}
}
