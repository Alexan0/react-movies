import React from 'react';
import styles from './NotFoundBlock.module.css';

function NotFoundBlock() {
  return (
	<div className={styles.content}>
		<h2>404</h2>
		<h3>Sorry, Page Not Found</h3>
	</div>
  )
}

export default NotFoundBlock;