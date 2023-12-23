/**
 * npm run dev
 * npm run build
 * npm run start or npx next start -p 4000（ポート番号）
 * npm run export（package.json 10行目に記述：参照元 - https://zenn.dev/lclco/articles/1774dc83548079?redirected=1）
*/

/* クライアントコンポーネントの指定 */
"use client";

/**
 * appRouter のせいか定かではないが npm run dev 時に404エラーが出るので
 * index.tsx をリネームして対応（例：indexs.tsx） 
*/

import styled from "styled-components";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useFetchImage } from "@/hooks/useFetchImage";
import { useFetchPost } from "@/hooks/useFetchIPost";

// getServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl?: string;
};

// サーバーサイドで実行する処理
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const { fetchImage } = useFetchImage();
//     const image = await fetchImage("https://api.thecatapi.com/v1/images/search");
//     return {
//         props: {
//             initialImageUrl: image.url,
//         },
//     };
// };

/* NextPage はページコンポーネントを表す型 */
export const IndexPage: NextPage<Props> = (props) => {
    const { initialImageUrl } = props;

    const { fetchImage } = useFetchImage();
    const { fetchPost } = useFetchPost();

    // const [imageUrl, setImageUrl] = useState<string>("");
    let initialImageUrlSrc: string = '';
    if (typeof initialImageUrl !== 'undefined') {
        initialImageUrlSrc = initialImageUrl;
    }
    const [imageUrl, setImageUrl] = useState<string>(initialImageUrlSrc);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        /* 外部 API しか（＝内部のデータは）フェッチできない */
        // const post = fetchPost(`${location.origin}/public/posts.json`);
        // const post = fetchPost(`${location.origin}/src/data/posts.json`);
        const post = fetchPost("https://jsonplaceholder.typicode.com/posts");
        console.log(post);

        // useEffect には非同期関数を直接渡すことはできません。渡そうとすると、コンパイルエラーになります。
        fetchImage("https://api.thecatapi.com/v1/images/search").then((newImage) => {
            setImageUrl((_prevImg) => newImage.url); // 画像URLの状態を更新する
            setLoading(false); // ローディング状態を更新する
        });
    }, []);

    const reRenderingAction = async () => {
        setLoading(true);
        const newImage = await fetchImage("https://api.thecatapi.com/v1/images/search");
        setImageUrl((_prevImg) => newImage.url);
        setLoading(false);
    }

    return (
        <ElsWrapper>
            <button type="button" onClick={reRenderingAction}>ReRendering</button>
            <div className="thumbnail">{loading ? <div className="loadingPhase"><p>...now Loading</p></div> : <img src={imageUrl} />}</div>
        </ElsWrapper>
    );
};

const ElsWrapper = styled.div`
  & button {
    cursor: pointer;
    appearance: none;
    background-color: transparent;
    display: block;
    width: calc(100vw/2);
    max-width: 400px;
    margin: 1em auto;
    text-align: center;
    padding: .25em .5em;
    border: 1px solid;
    border-radius: 4px;

    &:hover {
        border-color: transparent;
        background-color: #333;
        color: #fff;
    }
  }  

  & .thumbnail {
    max-width: 400px;
    margin: auto;
    overflow: hidden;

    & .loadingPhase {
        & p {
            text-align: center;
            line-height: 2;
            color: #3e3e3e;
            font-size: 24px;
        }
    }

    & img {
        width: 100%;
        height: auto;
        vertical-align: bottom;
        border-radius: 4px;
    }
  }
`;