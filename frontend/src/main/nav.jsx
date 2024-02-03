import { useState } from "react";
import styled from "styled-components";
import {
    AddView,
    AllView,
    BanView,
    OnlineView,
    RecommandView,
    WaitView,
} from "./online/online";

const Navigation = styled.nav`
    width: 50%;
    color: #fff;
    li {
        list-style: none;
    }
    ul {
        display: flex;
        justify-content: space-between;
    }
`;

export function Navigator() {
    const [crntTab, setCrntTab] = useState(0);

    const TabLists = [
        { name: "온라인", content: <OnlineView /> },
        { name: "모두", content: <AllView /> },
        { name: "대기 중", content: <WaitView /> },
        { name: "추천", content: <RecommandView /> },
        { name: "차단목록", content: <BanView /> },
        { name: "친구 추가하기", content: <AddView /> },
    ];

    const TabView = TabLists.map((el, idx) => {
        return (
            <li
                key={idx}
                onClick={() => {
                    setCrntTab(idx);
                    console.log(crntTab);
                }}
            >
                {el.name}
            </li>
        );
    });

    return (
        <>
            <Navigation>
                <ul>
                    <li>친구</li>
                    {TabView}
                </ul>
            </Navigation>
            {TabLists[crntTab].content}
        </>
    );
}
