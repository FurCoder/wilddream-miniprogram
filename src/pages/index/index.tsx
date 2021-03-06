import React from 'react';
import {
  View,
  Image,
  PageProps
} from 'remax/wechat';
import styles from './index.module.css';

const Index: React.FC<PageProps> = () => {

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
        />
        <View className={styles.text}>WildDream Lite Test</View>
      </View>
    </View>
  );
};

export default Index;
