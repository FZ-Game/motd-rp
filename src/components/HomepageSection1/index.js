import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '遊戲中出現紫黑方格和紅色ERROR?',
    image: '/img/missing_texture.png',
    description: (
      <>
        當遊戲缺少模型或材質時會以紅色ERROR及紫黑方格顯示，若發生此狀況代表你缺少必要的相關遊戲檔案
      </>
    ),
    buttonText: '解決方法',
    buttonTo: 'qna/missing-contents'
  },
  {
    title: '看不到PlayX畫面',
    image: '/img/no_video.png',
    description: (
      <>
        由於預設的遊戲內瀏覽器只支援少數幾種格式的檔案，因此需要切換至特定的遊戲分支並安裝解碼補丁
      </>
    ),
    buttonText: '解決方法',
    buttonTo: 'qna/playx'
  },
];

function Section({ Svg, title, description, ...props }) {
  return (
    <div className={clsx(`col col--4 text--center ${props.offset ? 'col--offset-2' : ''}`)}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
        {props.image && <img className={styles.featureSvg} src={props.image} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {props.buttonText && <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to={props.buttonTo}>
            {props.buttonText}
          </Link>
        </div>}
      </div>
    </div>
  );
}

export default function HomepageSection1() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Section key={idx} offset={FeatureList.length < 3 && idx === 0} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
