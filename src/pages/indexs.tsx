/* クライアントコンポーネントの指定 */
"use client";

/**
 * appRouter のせいか定かではないが npm run dev 時に404エラーが出るので
 * index.tsx をリネームして対応（例： indexs.tsx） 
*/

import styled from "styled-components";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useFetchImage } from "@/hooks/useFetchImage";

// getServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl?: string;
};

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const {fetchImage} = useFetchImage();
    const image = await fetchImage("https://api.thecatapi.com/v1/images/search");
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
};

/* NextPage はページコンポーネントを表す型 */
export const IndexPage: NextPage<Props> = (props) => {
    const { initialImageUrl } = props;

    const { fetchImage } = useFetchImage();

    // const [imageUrl, setImageUrl] = useState<string>("");
    let initialImageUrlSrc: string = '';
    if (typeof initialImageUrl !== 'undefined') {
        initialImageUrlSrc = initialImageUrl;
    }
    const [imageUrl, setImageUrl] = useState<string>(initialImageUrlSrc);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // useEffectには非同期関数を直接渡すことはできません。渡そうとすると、コンパイルエラーになります。
        fetchImage("https://api.thecatapi.com/v1/images/search").then((newImage) => {
            setImageUrl((prevImg) => newImage.url); // 画像URLの状態を更新する
            setLoading(false); // ローディング状態を更新する
        });
    }, []);

    const reRenderingAction = async () => {
        setLoading(true);
        const newImage = await fetchImage("https://api.thecatapi.com/v1/images/search");
        setImageUrl((prevImg) => newImage.url);
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