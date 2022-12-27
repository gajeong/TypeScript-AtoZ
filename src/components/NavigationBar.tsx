import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

export default function NavigationBar({}: Props): JSX.Element {
    return (
        <div>
            <Link to='/'>메인</Link>
            <Link to='/write'>글쓰기</Link>
            <Link to='/profile'>프로필</Link>
        </div>
    )
}
