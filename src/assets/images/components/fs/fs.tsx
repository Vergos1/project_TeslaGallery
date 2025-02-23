import React from 'react';

import styles from './fs.module.scss';

export interface fsProps {
  prop?: string;
}

export function fs({prop = 'default value'}: fsProps) {
  return <div className={styles.fs}>fs {prop}</div>;
}
