import buble from '@rollup/plugin-buble'; // Транспиляция/добавление полифилов для умеренной поддержки браузеров
import commonjs from '@rollup/plugin-commonjs'; // Конвертирование CommonJS модулей в ES6
import vue from 'rollup-plugin-vue'; // Обработка однофайловых компонентов .vue

export default {
  input: 'src/wrapper.js', // Путь до относительного package.json
  output: {
    name: 'VueHeatmap',
    exports: 'named',
  },
  plugins: [
    commonjs(),
    vue({
      css: true, // Динамически внедряем CSS в тег <style>
      compileTemplate: true, // Явное преобразование шаблона в рендер-функцию
    }),
    buble({
      objectAssign: 'Object.assign',
    }), // Транспиляция в ES5
  ],
};