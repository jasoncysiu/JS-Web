
import React from 'react'
import Link from 'next/link'

/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = (props) => {
  const { categories } = props
  if (!categories || categories.length === 0) {
    return <></>
  }

  return <></>
}
export default NavButtonGroup
