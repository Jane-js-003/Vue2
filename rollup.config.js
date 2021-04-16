import babel from 'rollup-plugin-babel'
export default {
  input: './src/index.js',
  output: {
    format: 'umd', // 支持amd和commonjs规范
    name: 'Vue',
    file: 'dist/vue.js',
    sourcemap: true // es5 -> es6源码
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}