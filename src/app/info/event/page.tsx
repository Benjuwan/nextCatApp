/* クライアントコンポーネントの指定 */
"use client";

import Link from 'next/link';

/* export default function [コンポーネント・ページ名] の記述方法でないとルーティングが機能しない */
export default function eventPage() {
    return (
        <>
            <p>Here is info - eventPage.</p>
            <p><Link href='/'>Back To HomePage</Link></p>
            <p><Link href='/info'>Back To infoTopPage</Link></p>
            <p><Link href='/info/members'>Link To info - membersPage</Link></p>
        </>
    )
}