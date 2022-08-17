import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'assets-docs',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://www.dev-one.cn/images/logo.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'utils',
      // path: '',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: 'check-device', path: 'check-device' },
        { title: 'format-time', path: '/format-time' },
      ],
    },
  ],
});
