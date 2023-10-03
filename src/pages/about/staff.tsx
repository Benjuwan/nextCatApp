/* クライアントコンポーネントの指定 */
"use client";

import { NextPage } from "next";
import Link from 'next/link';

/* export default の記述方法でないと機能しない */

const AboutStaffPage: NextPage = () => {
    return (
        <div>
            <p>About - StaffPage</p>
            <p><Link href='../about'>Back To AboutTopPage</Link></p>
            <p><Link href='/'>Back To Home</Link></p>
        </div>
    );
};

export default AboutStaffPage;