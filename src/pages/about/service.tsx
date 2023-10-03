/* クライアントコンポーネントの指定 */
"use client";

import { NextPage } from "next";
import Link from 'next/link';

/* export default の記述方法でないと機能しない */

const AboutServicePage: NextPage = () => {
    return (
        <div>
            <p>About - ServicePage</p>
            <p><Link href='../about'>Back To AboutTopPage</Link></p>
            <p><Link href='../about/staff'>Link To AboutStaffPage</Link></p>
            <p><Link href='/'>Back To Home</Link></p>
        </div>
    );
};

export default AboutServicePage;