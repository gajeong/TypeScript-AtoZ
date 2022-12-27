import React from 'react'

type Props = {}

export default function MainPage({}: Props): JSX.Element {
    return (
        <div>
            <td>작성자</td>
            <td>내용</td>
            <td>2022-01-21</td>
            <button>자세히 </button>
            <button>다음 글</button>
        </div>
    )
}
