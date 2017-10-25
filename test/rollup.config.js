import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  name: 'eludom',
  plugins: [
    resolve(),
    commonjs()
  ]
};