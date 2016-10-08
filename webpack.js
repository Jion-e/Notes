new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
}),


cooking.add('plugins.Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    'window.jQuery': 'jquery'
}))


cooking内置插件：

//js
babel-plugin-component  （es6转换器）
cooking-autoprefixer 	（自动添加前缀）
cooking-karma           （相关插件）
cooking lint            （eslint）

//vue
cooking-vue             （vue环境配置）
cooking-package-vue     （vue相关插件）
jsdoc-vue 
vue-region-picker       （省市县联动）       
vuerify                 （数据校验插件）
v-vuerify               （Vuerify directive for Vue 1.x）
v-vuerify-next          （Vuerify directive for Vue 2.0）

//css
cooking-postcss         （postcss相关插件）
cooking-react           （react相关插件）
cooking-saladcss        （postcss-salad插件）
cooking-sass            （sass）
cooking-test-command
theme-color

//other
generator-package-cooking   （gulp）
slush-cooking-element-component - v0.1.5 - A cooking generator.
slush-cooking-generator - v0.1.5 - cooking generator generator
slush-cooking-kebab - v0.1.0 - A cooking generator.
slush-cooking-plugin - v1.0.6 - cooking plugin 脚手架.
slush-cooking-react - v0.1.1 - A cooking generator.
slush-cooking-vue - v0.5.0 - A vue project template for cooking.
slush-cooking-vue2 - v0.2.0 - A cooking generator.

//组件
el-cascader - v1.0.1 - A cascader component for Vue.
el-checkbox - v1.0.2 - A el-checkbox component for Vue.js.
element-theme-default - v0.2.5 - Element component default theme.
element-toolbox - v0.1.0 - Toolbox for ELement Component.
element-ui - v0.2.2 - A Component Library for Vue.js.
el-input - v1.0.1 - A input component for Vue.
el-radio - v1.0.0 - A radio component for Vue.js.
el-select - v1.0.1 - A el-select component for Vue.
 