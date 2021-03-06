import React from 'react'
import { Icon } from 'antd'
import SvgIcon from '@/components/SvgIcon'

import Href from '@/components/Href'
import MyInfo from '@/views/web/about/MyInfo'

// API_BASE_URL
export const API_BASE_URL = 'http://localhost:6060'

// project config
export const HEADER_BLOG_NAME = 'yq121的博客' // header title 显示的名字

// === sidebar
export const SIDEBAR = {
  avatar: require('@/assets/images/avatar.jpg'), // 侧边栏头像
  title: 'yq121', // 标题
  subTitle: '入门前端开发人员', // 子标题
  // 个人主页
  homepages: {
    github: {
      link: 'https://github.com/yq121',
      icon: <Icon type='github' theme='filled' className='homepage-icon' />
    }
  }
}

// === discuss avatar
export const DISCUSS_AVATAR = SIDEBAR.avatar // 评论框博主头像

/**
 * github config
 */
export const GITHUB = {
  enable: false, // github 第三方授权开关
  client_id: '86097d83ae8786cada84', // Setting > Developer setting > OAuth applications => client_id
  url: 'https://github.com/login/oauth/authorize' // 跳转的登录的地址
}

export const ABOUT = {
  avatar: SIDEBAR.avatar,
  describe: SIDEBAR.subTitle,
  discuss: true, // 关于页面是否开启讨论
  renderMyInfo: <MyInfo /> // 我的介绍 自定义组件 => src/views/web/about/MyInfo.jsx
}

// 公告 announcement
export const ANNOUNCEMENT = {
  enable: false, // 是否开启
  content: (
    <>
      yq121的个人博客
      <Href href='https://www.yq121.run'> note every life</Href>
    </>
  )
}
