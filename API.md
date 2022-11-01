# API

## Android

### showDialog(id, type)

- 参数：
    - id `number`
    - type `string`

- 详细

    长按某个组件时调起安卓弹窗

- 示例：

```JavaScript
indow.AndroidWeb.showDialog(int id, string type)
```


### 2. deleteNodes

`window.AndroidWeb.deleteNodes (string|ids)`

```javascript
window.AndroidWeb.deleteNodes ('-6,-15,-16,-17')
```

### 3. requestGraphJson

> js调用该方法后，Android会将后台 graph 中的数据传给js, 调用 `cbGetGraphJson(strJSON)`

`window.AndroidWeb.requestGraphJson() {}`

### 4. saveGraphJson

`window.AndroidWeb.saveGraphJson(strJSON) {}`

### 5. setSaveButtonEnabled

---

## JavaScript API for Android

### updateNode

`updateNode (int id, string type, array desc, array conf)`

### updateSmallProcessName

`updateSmallProcessName (string name)`

### deleteNodes

`deleteNodes ()`

### saveGraphJson

`saveGraphJson ()`

### cbGetGraphJson

`cbGetGraphJson()`

### enterChildFlow(id, type, title)

- **id** `number`
- **type** `string`
- **title** `string`

`enterChildFlow (int id, string type, string title)`

### backParentFlow

`backParentFlow ()`

### selectNodeById(id, selection)

- 参数：
    - **id** `number`
    - **selection** `boolean`

> `Android` 调用此方法，使目标节变为选中样式/非选中样式。只负责样式，与逻辑层无关，用于单步调试。`selection` 为 `true` 时会屏蔽手指交互，防止单步调试时误触。放开交互需设置 `selection` 为 `false` 或调用 `resetAllNodes()`

- 示例：

```javascript
/* 设置节点样式为选中 */
selectNodeById (-9, true)
/* 取消节点选中样式 */
selectNodeById (-9, false)
```

- 参考：

[resetAllNodes ()]()


### resetAllNodes

`resetAllNodes ()`

### enableSelection

`enableSelection ()`

