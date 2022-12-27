import React from 'react'
import Preview from '../components/Preview'

type Props = {}

export default function ProfilePage({}: Props): JSX.Element {
    return (
        <div>
            <td>내이름</td>
            <button>이름 변경</button>
            <div>
                내가 쓴 글
                <Preview />
                <Preview />
                <Preview />
                <Preview />
                <Preview />
            </div>
            <button>로그아웃</button>
        </div>
    )
}
