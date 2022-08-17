import path from 'path';
import resolve from 'rollup-plugin-node-resolve'
import ts from 'rollup-plugin-typescript2';
import less from 'rollup-plugin-less';

const getPath = _path => path.resolve(__dirname, _path)
const extensions = [
  '.js',
  '.ts',
]

// ts
const tsPlugin = ts({
  tsconfig: getPath('./tsconfig.json'), // 导入本地ts配置
  extensions
})


export default {
  input: './src/index.ts',
  output: {
    file: './lib/index.js',
    format: 'cjs'
  },
  plugins:[
    resolve(extensions),
    tsPlugin,
    less()
  ]
};