/* クライアントコンポーネントの指定 */
"use client";

/* NextPage はページコンポーネントを表す型 */
import { NextPage } from "next";
import Link from 'next/link';

/* export default の記述方法でないと機能しない */
const AboutPage: NextPage = () => {
    return (
        <div>
            <p>About TopPage</p>
            <p><Link href='/'>Back To Home</Link></p>
            <p><Link href='/about/staff'>Link To StaffPage</Link></p>
            <p><Link href='/about/service'>Link To ServicePage</Link></p>
        </div>
    );
};

export default AboutPage; 