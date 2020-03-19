/**
 * @desc android配置指令后，js提供接口更新节点描述的方法
 * @param {Number} id
 * @param {String} type
 * @param {String} desc
 * @param {Array} conf
 */
function updateNode (id, type, desc, arrVal, arrText) {
    // 储存键值对
    // 更改描述
    this.data.flowData = JSON.parse(myDiagram.model.toJson())
    let cacheNodes = this.deepCopy(this.data.flowData.nodeDataArray)
    cacheNodes.forEach(node => {
        if (node.key === id) {
            node.text = desc
            this.data.arrNodeMsg.unshift({
                id: node.key,
                arrLabel: arrText,
                arrValue: arrVal
            })
        }
    })
    this.data.flowData.nodeDataArray = cacheNodes
    this.Render()
}

/**
 * @desc android点击编辑模式按钮，js提供进入或退出编辑模式的方法
 * @param {Boolean} boolEnter true: 进入编辑模式 false: 退出编辑模式
 */
function toggleEditMode (boolEnter) {
    if (boolEnter) {
        // 进入编辑模式
        window.myDiagram.isReadOnly = false
        window.myDiagram.allowSelect = true
    } else {
        // 退出编辑模式
        window.myDiagram.isReadOnly = true
        window.myDiagram.allowSelect = false
    }
}

/**
 * @desc android点击删除按钮，js提供删除节点、连线的方法 
 * @desc window.AndroidWeb.deleteNodes(arrIds)
*/
function deleteNodes () {
    if (arrSelsNode.length !== 0) { // 选中节点不为空
        let strArray = arrSelsNode.join()
        if (window.AndroidWeb) {    // 检测安卓环境
            window.AndroidWeb.deleteNodes(strArray)  // 调用安卓方法
        } else {
            console.log('window.AndroidWeb.deleteNodes', strArray)
        }
    }
    // 删除节点及其对应连接线
    arrSelsNode.forEach(id => {
        deleteNodeById(id)
    })
    deleteLinksByIds(arrSelsNode)
    // 删除连线
    arrSelsLink.forEach((item) => {
        deleteLinkByFromTo(item.from, item.to)
    })
    this.Render()
}

/**
 * @desc android点击保存按钮，js提供获取graphJson的方法 
 * @desc window.AndroidWeb.saveGraphJson(strJSON)
*/
function saveGraphJson () {
    this.data.flowData = JSON.parse(myDiagram.model.toJson())
    let strJSON = myDiagram.model.toJson()
    let data = this.formatJS2Android(JSON.parse(strJSON))
    if (window.AndroidWeb) {
        window.AndroidWeb.saveGraphJson(JSON.stringify(data))
    } else {
        console.log(data)
    }
}

/** @desc js调用android方法请求获取graphJson，然后需要提供一个接收json的方法 */
function cbGetGraphJson (strJSON) {
    let data = {}
    if (strJSON) {
        this.data.flowData = JSON.parse(myDiagram.model.toJson())
        data = formatAndroid2JS(JSON.parse(strJSON))
    } else {
        data = {
            "class": "GraphLinksModel",
            "linkFromPortIdProperty": "fromPort",
            "linkToPortIdProperty": "toPort",
            "nodeDataArray": [],
            "linkDataArray": []
        }
    }
    this.data.flowData = this.deepCopy(data)
    this.Render()
}
