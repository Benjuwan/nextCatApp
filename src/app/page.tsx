/* クライアントコンポーネントの指定 */
"use client";

// import Image from 'next/image'
// import styles from './page.module.css'
import { IndexPage } from '@/pages/indexs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <p><span style={{ 'display': 'block', 'fontWeight': 'bold' }}>typescript で Next ファイルを作成：</span>npx create-next-app <span style={{ 'color': 'limegreen' }}>[next プロジェクト・ファイル名]</span> --typescript</p>
      <div style={{ 'width': 'clamp(160px,calc(100vw/2),400px)', 'margin': '0 auto 1em', 'padding': '.5em 1em', 'borderRadius': '4px', 'backgroundColor': '#eaeaea', 'boxSizing': 'border-box' }}>
        <p>pageRouter：<Link href="/about">Link To AboutTopPage</Link></p>
        <p>appRouter：<Link href="/info">Link To InfoPage</Link></p>
      </div>
      <IndexPage />
      <div style={{ 'width': 'clamp(160px,calc(100vw/2),400px)', 'margin': 'auto' }}>
        <p><a href="https://typescriptbook.jp/tutorials/nextjs" target='_blank'>Next.jsで猫画像ジェネレーターを作ろう</a></p>
        <p><a href="https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next/link" target='_blank'>next/link</a></p>
      </div>
    </>
  )
}
