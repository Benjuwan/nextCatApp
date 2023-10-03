/* クライアントコンポーネントの指定 */
"use client";

import Link from 'next/link';

/* export default function [コンポーネント・ページ名] の記述方法でないとルーティングが機能しない */
export default function infoPage() {
    return (
        <>
            <p>Here is infoPage.</p>
            <p><Link href='/'>Back To HomePage</Link></p>
            <p><Link href='/info/event'>Link To info - eventPage</Link></p>
            <p><Link href='/info/members'>Link To info - membersPage</Link></p>
        </>
    )
}