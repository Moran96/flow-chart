# 一、go.js
---
### 1. 调研结果

- 可考虑使用
- demo: https://gojs.net/latest/samples/flowchart.html

### 2. 优点
- 支持组件化
- 可定制

### 3. 缺点
- 免费版/商业版
- 组件文件过大，超过 800KB(性能有影响，是否可压缩需进一步调研)

# 二、joint.js
---

### 1. 调研结果

- 可考虑选用
- demo: https://resources.jointjs.com/demos/kitchensink

### 2. 优点

- 可扩展，可定制组件
- 支持现有前端框架，开发速度快

### 3. 缺点
- 绝对定位（不支持响应式布局，对设备和屏幕分辨率有要求）
- 不支持组件缩放
- 免费版/商业版


# 三、jsPlumb
---

### 1. 调研结果

- 不建议使用
- 官网: http://www.jsplumb.org/
(官网不稳定 疯狂跳广告)

### 2. 优点
- 独立js文件，性能优势

### 3. 缺点

- 单独的js文件，意味着样式扩展性很好，但是交互上扩展性极差(直接修改对方的js源码，理解成本高风险性大)


# 四、flowchart.js
---

### 1. 调研结果

- 暂时不确定是否支持定制化组件，目前正在本地写demo测试
- http://adrai.github.io/flowchart.js/

### 2. 已知缺点

- `json` 支持不友好，该框架采用类似 `markdown`

### 3. 示例
```
id_start->id_operation->id_condition
id_condition(yes)->id_end
id_condition(no)->id_operation
```


# 五、d3
---

### 1. 调研结果

- 调研中
- 官网: http://d3js.org