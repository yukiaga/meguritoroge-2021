import { FC, ReactNode } from 'react';

import styles from './Indent.module.scss'; // CSS モジュールを使用

interface IndentProps {
  children: ReactNode;
  depth: 1 | 2 | 3; // 1, 2, 3 のみを許可
}

export const Indent: FC<IndentProps> = ({ children, depth }) => {
  const indentClassName = `${styles['indent-component']} ${
    styles[`depth-${depth}`]
  }`;

  return <div className={indentClassName}>{children}</div>;
};

Indent.displayName = 'Indent';
