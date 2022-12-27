import React from 'react'

type Props = {}

export default function Comment({}: Props): JSX.Element {
    return (
        <div>
            <td>작성자 </td>
            <td> 내용</td>
            <td> 2023-02-11</td>
        </div>
    )
}
