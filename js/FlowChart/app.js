var flowList = []
var childFlowMsg = {
    id: null,
    type: '',
    strData: ''
}

var flowData = {
    "class": "GraphLinksModel",
    "linkFromPortIdProperty": "fromPort",
    "linkToPortIdProperty": "toPort",
    "nodeDataArray": [
        { "category": "startInstruction", "text": "开始", "key": -1, "loc": "152 -35", "arr1": ["red", "green"], "arr2": ["红色", "绿色"] },
        { "category": "endInstruction", "text": "结束", "key": -2, "loc": "151 613" },
        { "category": "toolInstruction", "text": "工具", "key": -3, "loc": "152 32" },
        { "category": "actionInstruction", "text": "运动", "key": -4, "loc": "152.15784454345703 115.68772430419915" },
        { "category": "ioInstruction", "text": "输出", "key": -5, "loc": "293 153" },
        { "category": "triggerInstruction", "text": "触发", "key": -9, "loc": "293 252" },
        { "category": "setVariableInstruction", "text": "标记", "key": -10, "loc": "-46 198" },
        { "category": "calOffsetInstruction", "text": "计算偏移", "key": -12, "loc": "151 324" },
        { "category": "smallProcess", "text": "夹取至屏幕测试，不通过料盘", "key": -13, "loc": "151.15784454345703 441.68772430419915" },
        { "category": "actionProcess", "text": "运动子流程", "key": -14, "loc": "151.15784454345703 538.6877243041992" },
        { "category": "variableInstruction", "text": "Do sth", "key": -11, "loc": "99 198" },
        { "category": "algorithmInstruction", "text": "算法条件6", "key": -6, "loc": "472.6285879952567 123.06227569580079" },
        { "category": "toolInstruction", "text": "工具15", "key": -15, "loc": "380 206" },
        { "category": "toolInstruction", "text": "工具16", "key": -16, "loc": "481 205" },
        { "category": "toolInstruction", "text": "工具17", "key": -17, "loc": "555 211" }
    ],
    "linkDataArray": [
        { "from": -1, "to": -3, "fromPort": "B", "toPort": "T", "points": [152, -16.062275695800786, 152, -6.0622756958007855, 152, -1.5000000000000018, 152, -1.5000000000000018, 152, 3.062275695800782, 152, 13.062275695800782], "text": "ahaha" },
        { "from": -3, "to": -4, "fromPort": "B", "toPort": "T", "points": [152, 50.93772430419922, 152, 60.93772430419922, 152, 74.46886215209958, 152.15784454345703, 74.46886215209958, 152.15784454345703, 87.99999999999993, 152.15784454345703, 97.99999999999993] },
        // { "from": -4, "to": -5, "fromPort": "B", "toPort": "T", "points": [152.15784454345703, 133.37544860839836, 152.15784454345703, 143.37544860839836, 220.2734001958093, 143.37544860839836, 220.2734001958093, 118.08470304622207, 293, 118.08470304622207, 293, 128.08470304622207] },
        { "from": -4, "to": -5, "fromPort": "B", "toPort": "T", "points": undefined },
        { "from": -5, "to": -9, "fromPort": "B", "toPort": "T", "points": [293, 177.91529695377795, 293, 187.91529695377795, 293, 196.98963364889457, 293, 196.98963364889457, 293, 206.06397034401118, 293, 216.06397034401118] },
        { "from": -9, "to": -12, "fromPort": "B", "toPort": "T", "points": [293, 287.9360296559888, 293, 297.9360296559888, 242.22696197864622, 297.9360296559888, 242.22696197864622, 280.3745513916016, 151, 280.3745513916016, 151, 290.3745513916016] },
        { "from": -12, "to": -11, "fromPort": "L", "toPort": "R", "visible": true, "points": [74.61004638671875, 324, 64.61004638671875, 324, 64.61004638671875, 253.03113784790042, 140.01797485351562, 253.03113784790042, 140.01797485351562, 198, 130.01797485351562, 198],"text": "No" },
        { "from": -10, "to": -11, "fromPort": "R", "toPort": "L", "points": [-10.628587995256709, 198, -0.6285879952567086, 198, 28.676718575613833, 198, 28.676718575613833, 198, 57.982025146484375, 198, 67.98202514648438, 198] },
        { "from": -12, "to": -13, "fromPort": "B", "toPort": "T", "visible": true, "points": [151, 357.6254486083985, 151, 367.6254486083985, 151, 382.21886215209963, 151.15784454345703, 382.21886215209963, 151.15784454345703, 396.81227569580074, 151.15784454345703, 406.81227569580074] },
        { "from": -13, "to": -14, "fromPort": "B", "toPort": "T", "points": [151.15784454345703, 476.5631729125976, 151.15784454345703, 486.5631729125976, 151.15784454345703, 496.1565864562988, 151.15784454345703, 496.1565864562988, 151.15784454345703, 505.75, 151.15784454345703, 515.75] },
        { "from": -14, "to": -2, "fromPort": "B", "toPort": "T", "points": [151.15784454345703, 561.6254486083984, 151.15784454345703, 571.6254486083984, 151.15784454345703, 577.8438621520995, 151, 577.8438621520995, 151, 584.0622756958007, 151, 594.0622756958007] }
    ]
}

var arrSelsNode = []
var arrSelsLink = []

var arrNodeMsg = []
var currentLink = {}

// canvas style
var globalStyle = {
    defaultTempBorderColor: '#E4E4E9',
    borderWidth: 6
}

function init() {
    var _gojs = go.GraphObject.make // 创建画布对象
    var roundedRectangleParams = {
        parameter1: 0,  // set the rounded corner
        spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight  // make content go all the way to inside edges of rounded corners
    };
    myDiagram = _gojs(go.Diagram, "myDiagramDiv", { // 关联 DOM 节点 #myDiagramDiv
        "animationManager.initialAnimationStyle": go.AnimationManager.None,
        "LinkDrawn": showLinkLabel,  // this DiagramEvent listener is defined below
        "LinkRelinked": showLinkLabel,
        "isReadOnly": false, // 非只读
        "allowSelect" : true, // 允许选中
        // "grid.visible": true,
        "padding": 80,
        "undoManager.isEnabled": true  // enable undo & redo
    })

    // 流程图被改动后执行的回调, 当前为给 title 添加星号"*", 同事启用"Save"按钮
    myDiagram.addDiagramListener("Modified", function (e) {
        flowData = JSON.parse(myDiagram.model.toJson())
    })

    /* 放置指令结束 */
    myDiagram.addDiagramListener("ExternalObjectsDropped", function(e) {
        e.subject.each(function (n) {
            n.data.key = renameKeyByTime()
        })
        flowData = JSON.parse(myDiagram.model.toJson())
        // Render()
    })

    myDiagram.addDiagramListener("LinkDrawn", function(e) {
        console.log(flowData.linkDataArray)
        console.log('LinkDrawn')
        flowData = JSON.parse(myDiagram.model.toJson())
        console.log(flowData.linkDataArray)
        Render()
    })

    myDiagram.addDiagramListener("ChangedSelection", function(e) {
        let arrIds = []
        let arrLinks = []
        e.subject.each(function(n) {
            if (n.data.key) {
                arrIds.push(n.data.key)
            } else if (n.data.from) {
                arrLinks.push({ from: n.data.from, to: n.data.to })
            } else {}
        })
        console.log('arrSelsNode:', arrIds)
        console.log('arrSelsLink:', arrLinks)
        arrSelsNode = arrIds
        arrSelsLink = arrLinks
    })

    // 节点模板定义助手
    /**
     *
     *
     * @returns
     */
    function nodeStyle() {
        return [
            // Node.location 源于节点数据的 loc 属性,
            // converted by the Point.parse static method.
            // If the Node.location is changed, it updates the "loc" property of the node data,
            // converting back using the Point.stringify static method.
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            {
                // Node.location is at the center of each node
                locationSpot: go.Spot.Center,
            }
        ];
    }

    function nodeStyleStart() {
        return [
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            {
                locationSpot: go.Spot.Center,
                selectionAdornmentTemplate: _gojs(go.Adornment, "Auto",
                    _gojs(go.Shape, "Terminator", roundedRectangleParams, { fill: null, stroke: "#03BCD8", strokeWidth: 2 }),
                    _gojs(go.Placeholder))
            }
        ]
    }

    /**
     * @desc Define a function for creating a "port" that is normally transparent.
     * @param {*} name The "name" is used as the GraphObject.portId
     * @param {*} align the "align" is used to determine where to position the port relative to the body of the node
     * @param {*} spot The "spot" is used to control how links connect with the port and whether the port stretches along the side of the node
     * @param {Boolean} output Whether the user can draw links from port
     * @param {Boolean} input whether the user can draw links to the port
     * @returns
     */
    function makePort(name, align, spot, output, input) {
        var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
        // the port is basically just a transparent rectangle that stretches along the side of the node,
        // and becomes colored when the mouse passes over it
        return _gojs(go.Shape,
            {
                fill: "transparent",  // changed to a color in the mouseEnter event handler
                strokeWidth: 0,  // no stroke
                width: horizontal ? NaN : 8,  // if not stretching horizontally, just 8 wide
                height: !horizontal ? NaN : 8,  // if not stretching vertically, just 8 tall
                alignment: align,  // align the port on the main Shape
                stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
                portId: name,  // declare this object to be a "port"
                fromSpot: spot,  // declare where links may connect at this port
                fromLinkable: output,  // declare whether the user may draw links from here
                toSpot: spot,  // declare where links may connect at this port
                toLinkable: input,  // declare whether the user may draw links to here
                cursor: "pointer",  // show a different cursor to indicate potential link point
                mouseEnter: function (e, port) {  // the PORT argument will be this Shape
                    if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
                },
                mouseLeave: function (e, port) {
                    port.fill = "transparent";
                }
            });
    }

    function textStyleStart() {
        return {
            font: "normal 12px Lato, Noto-Sans-S-Chinese, Helvetica, Arial, sans-serif",
            stroke: "#43425D"
        }
    }

    function textStyle() {
        return {
            font: "normal 12px Lato, Noto-Sans-S-Chinese, Helvetica, Arial, sans-serif",
            stroke: "#03BCD8"
        }
    }

    // define the Node templates for regular nodes

    myDiagram.nodeTemplateMap.add("",  // the default category
        _gojs(go.Node, "Table", nodeStyle(),
            // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
            _gojs(go.Panel, "Auto",
                _gojs(go.Shape, "Rectangle",
                    { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: 3.5 },
                    new go.Binding("figure", "figure")),
                _gojs(go.TextBlock, textStyle(),
                    {
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ),
            // four named ports, one on each side:
            makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
            makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
            makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
            makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
        ));

    /* Start */
    function defineNodeTempStart() {
        let TempStart = _gojs(go.Node, "Table", nodeStyleStart(),
            _gojs(go.Panel, "Auto",
                _gojs(go.Shape, "Terminator",
                    { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: 6 },
                    new go.Binding("figure", "figure")),
                _gojs(go.TextBlock, textStyleStart(),
                    {
                        margin: 8,
                        maxSize: new go.Size(100, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: false
                    },
                    new go.Binding("text").makeTwoWay(),)
            ),
            makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        )
        myDiagram.nodeTemplateMap.add("startInstruction", TempStart)
    }
    /* End */
    function defineNodeTempEnd() {
        let TempEnd = _gojs(go.Node, "Table", nodeStyleStart(),
            _gojs(go.Panel, "Auto",
                _gojs(go.Shape, "Terminator",
                    { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                    new go.Binding("figure", "figure")),
                _gojs(go.TextBlock, textStyleStart(),
                    {
                        margin: 8,
                        maxSize: new go.Size(100, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: false
                    },
                    new go.Binding("text").makeTwoWay())
            ),
            makePort("T", go.Spot.Top, go.Spot.Top, false, true),
            makePort("R", go.Spot.Right, go.Spot.Right, false, true),
            makePort("L", go.Spot.Left, go.Spot.Left, false, true)
        )
        myDiagram.nodeTemplateMap.add("endInstruction", TempEnd)
    }

    myDiagram.nodeTemplateMap.add("calOffsetInstruction",
        _gojs(go.Node, "Table", nodeStyle(),
            // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
            _gojs(go.Panel, "Auto",
                _gojs(go.Shape, "Diamond",
                    { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                    new go.Binding("figure", "figure")),
                _gojs(go.TextBlock, textStyle(),
                    {
                        margin: 3,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: false
                    },
                    new go.Binding("text").makeTwoWay()),
                {
                    doubleClick: function(e, node) {
                        let nodeData = node.part.data
                        window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                    }
                }
            ),
            // four named ports, one on each side:
            makePort("T", go.Spot.Top, go.Spot.Top, false, true),
            makePort("L", go.Spot.Left, go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        ));
    defineNodeTempStart()
    defineNodeTempEnd()

    /* toolInstruction */
    var TempTools = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Trapezoid",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 10,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* actionInstruction */
    var TempAction = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Parallelogram",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 10,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
                {
                    doubleClick: function(e, node) {
                        let nodeData = node.part.data
                        window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                    }
                }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* ioInstruction */
    var TempOutput = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Ellipse",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 5,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* 算法条件 */
    var TempAlgoCond = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Rectangle",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 10,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    if (window.AndroidWeb) {
                        window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                    } else {
                        console.log(nodeData.key, nodeData.category)
                    }
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* 标记条件 */
    var TempMarkCond = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Rectangle",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 10,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* IO条件 */
    var TempIOCond = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Rectangle",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 10,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* Trigger */
    var TempTrigger = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Circle",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 4,
                    maxSize: new go.Size(160, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )
    /* Mark */
    var TempMark = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Display",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 8,
                    maxSize: new go.Size(80, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    window.AndroidWeb.showDialog(nodeData.key, nodeData.category)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* FlowChild */
    var TempFlowChild = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Hexagon",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: globalStyle.borderWidth },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 10,
                    maxSize: new go.Size(60, NaN),
                    maxLines: 2,
                    overflow: go.TextBlock.OverflowEllipsis,
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    test('TempFlowChild doubleClick')
                    enterChildFlow(nodeData.key, nodeData.category, nodeData.text)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )

    /* FlowAction */
    var TempFlowAction = _gojs(go.Node, "Table", nodeStyle(),
        _gojs(go.Panel, "Auto",
            _gojs(go.Shape, "Procedure",
                { fill: "#ffffff", stroke: globalStyle.defaultTempBorderColor, strokeWidth: 5 },
                new go.Binding("figure", "figure")),
            _gojs(go.TextBlock, textStyle(),
                {
                    margin: 8,
                    maxSize: new go.Size(50, NaN),
                    wrap: go.TextBlock.WrapFit,
                    editable: false
                },
                new go.Binding("text").makeTwoWay()),
            {
                doubleClick: function(e, node) {
                    let nodeData = node.part.data
                    test('TempFlowAction doubleClick')
                    enterChildFlow(nodeData.key, nodeData.category, nodeData.text)
                }
            }
        ),
        makePort("T", go.Spot.Top, go.Spot.Top, false, true),
        makePort("R", go.Spot.Right, go.Spot.Right, true, true),
        makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false),
        makePort("L", go.Spot.Left, go.Spot.Left, true, true)
    )
    myDiagram.nodeTemplateMap.add("toolInstruction", TempTools)
    myDiagram.nodeTemplateMap.add("actionInstruction", TempAction)
    myDiagram.nodeTemplateMap.add("ioInstruction", TempOutput)
    myDiagram.nodeTemplateMap.add("algorithmInstruction", TempAlgoCond)
    myDiagram.nodeTemplateMap.add("variableInstruction", TempMarkCond)
    myDiagram.nodeTemplateMap.add("readIOInstruction", TempIOCond)
    myDiagram.nodeTemplateMap.add("triggerInstruction", TempTrigger)
    myDiagram.nodeTemplateMap.add("setVariableInstruction", TempMark)

    myDiagram.nodeTemplateMap.add("smallProcess", TempFlowChild)
    myDiagram.nodeTemplateMap.add("actionProcess", TempFlowAction)

    // taken from ../extensions/Figures.js:
    go.Shape.defineFigureGenerator("File", function (shape, w, h) {
        var geo = new go.Geometry();
        var fig = new go.PathFigure(0, 0, true); // starting point
        geo.add(fig);
        fig.add(new go.PathSegment(go.PathSegment.Line, .75 * w, 0));
        fig.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
        fig.add(new go.PathSegment(go.PathSegment.Line, w, h));
        fig.add(new go.PathSegment(go.PathSegment.Line, 0, h).close());
        var fig2 = new go.PathFigure(.75 * w, 0, false);
        geo.add(fig2);
        // The Fold
        fig2.add(new go.PathSegment(go.PathSegment.Line, .75 * w, .25 * h));
        fig2.add(new go.PathSegment(go.PathSegment.Line, w, .25 * h));
        geo.spot1 = new go.Spot(0, .25);
        geo.spot2 = go.Spot.BottomRight;
        return geo;
    })

    // replace the default Link template in the linkTemplateMap
    myDiagram.linkTemplate =
        _gojs(go.Link,  // the whole link panel
            {
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5, toShortLength: 4,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function (e, link) { link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)"; },
                mouseLeave: function (e, link) { link.findObject("HIGHLIGHT").stroke = "transparent"; },
                doubleClick: function (e, link) {
                    // console.log(link.fromNode.data)
                    onClickInfoLink(link, link.fromNode.data)
                },
                selectionAdorned: false
            },
            new go.Binding("points").makeTwoWay(),
            _gojs(go.Shape,  // the highlight shape, normally transparent
                { isPanelMain: true, strokeWidth: 8, stroke: "transparent", name: "HIGHLIGHT" }),
            _gojs(go.Shape,  // the link path shape
                { isPanelMain: true, stroke: "gray", strokeWidth: 3 },
                new go.Binding("stroke", "isSelected", function (sel) { return sel ? "dodgerblue" : "#A3A6B4"; }).ofObject()),
            _gojs(go.Shape,  // the arrowhead
                { toArrow: "standard", strokeWidth: 0, fill: "#A3A6B4" }),
            _gojs(go.Panel, "Auto",  // the link label, normally not visible
                { visible: false, name: "LABEL", segmentIndex: 2, segmentFraction: 0.5 },
                new go.Binding("visible", "visible").makeTwoWay(),
                _gojs(go.Shape, "RoundedRectangle",  // the label shape
                    { fill: "#F3EFF7", strokeWidth: 0 }),
                _gojs(go.TextBlock, "Yes",  // the label
                    {
                        textAlign: "center",
                        font: "10pt helvetica, arial, sans-serif",
                        stroke: "#03BCD8",
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            )
        );

    // Make link labels visible if coming out of a "conditional" node.
    // This listener is called by the "LinkDrawn" and "LinkRelinked" DiagramEvents.
    function showLinkLabel(e) {
        var label = e.subject.findObject("LABEL");
        console.log('label', label.visible)
        // if (label !== null) label.visible = (e.subject.fromNode.data.category === "Conditional");
    }

    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

    Render();

    // 初始化页面左侧 Palette 栏
    myPalette = _gojs(go.Palette, "palette-cmd", {
        "animationManager.initialAnimationStyle": go.AnimationManager.None, // 使用自定义fade-down效果替代默认动画
        "InitialAnimationStarting": animateFadeDown, // 自定义动画构造器
        nodeTemplateMap: myDiagram.nodeTemplateMap,  // 与 myDiagram 共享模板
        model: new go.GraphLinksModel([ // 指明 Palette 内容
            { category: "startInstruction", text: "开始" },
            { category: "endInstruction", text: "结束" },
            { category: "toolInstruction", text: "工具" },
            { category: "actionInstruction", text: "运动" },
            { category: "ioInstruction", text: "输出" },
            { category: "algorithmInstruction", text: "算法条件" },
            { category: "variableInstruction", text: "标记条件" },
            { category: "readIOInstruction", text: "IO条件" },
            { category: "triggerInstruction", text: "触发" },
            { category: "setVariableInstruction", text: "标记" },
            { category: "calOffsetInstruction", text: "计算偏移" }
        ])        
    })
    // palette-flow
    paletteFlow = _gojs(go.Palette, "palette-flow", {
        "animationManager.initialAnimationStyle": go.AnimationManager.None, // 使用自定义fade-down效果替代默认动画
        "InitialAnimationStarting": animateFadeDown, // 自定义动画构造器
        nodeTemplateMap: myDiagram.nodeTemplateMap,  // 与 myDiagram 共享模板
        model: new go.GraphLinksModel([ // 指明 Palette 内容
            { category: "smallProcess", text: "子流程" },
            { category: "actionProcess", text: "运动子流程" }
        ])        
    })

    if (window.AndroidWeb) {
        let strJSON = window.AndroidWeb.requestGraphJson()
        cbGetGraphJson(strJSON)
    } else {}

    // This is a re-implementation of the default animation, except it fades in from downwards, instead of upwards.
    function animateFadeDown(e) {
        var diagram = e.diagram;
        var animation = new go.Animation();
        animation.isViewportUnvarrained = true; // So Diagram positioning rules let the animation start off-screen
        animation.easing = go.Animation.EaseOutExpo;
        animation.duration = 900;
        // Fade "down", in other words, fade in from above
        animation.add(diagram, 'position', diagram.position.copy().offset(0, 200), diagram.position);
        // animation.add(diagram, 'opacity', 0, 1);
        animation.start();
    }
}

/** @desc print the diagram by opening a new window holding SVG images of the diagram contents for each page  */
function printDiagram() {
    var svgWindow = window.open();
    if (!svgWindow) return;  // failure to open a new Window
    var printSize = new go.Size(700, 960);
    var bnds = myDiagram.documentBounds;
    var x = bnds.x;
    var y = bnds.y;
    while (y < bnds.bottom) {
        while (x < bnds.right) {
            var svg = myDiagram.makeSVG({ scale: 1.0, position: new go.Point(x, y), size: printSize });
            svgWindow.document.body.appendChild(svg);
            x += printSize.width;
        }
        x = bnds.x;
        y += printSize.height;
    }
    setTimeout(function () { svgWindow.print(); }, 1);
}

/* Tools  */
function formatAndroid2JS(jsonAndr) {
    let arrNodes = jsonAndr.allVertices.map(item => {
        return { category: item.mVertexType, text: item.mDesc, key: item.mVertexId, loc: item.loc }
    })
    let arrLines = jsonAndr.allLines.map(item => {
        if (item.desc) {
            return { from: item.from, to: item.to, visible: true, text: (item.id + '#' + item.desc) }
        } else {
            return { from: item.from, to: item.to }
        }
    })
    let data = {
        class: 'GraphLinksModel',
        linkFromPortIdProperty: 'fromPort',
        linkToPortIdProperty: 'toPort',
        nodeDataArray: arrNodes,
        linkDataArray: arrLines
    }
    return data
}

function formatJS2Android(jsonJs) {
    let arrNodes = jsonJs.nodeDataArray.map(item => {
        return { mVertexId: item.key, mVertexType: item.category, mDesc: item.text, loc: item.loc }
    })
    let arrLines = jsonJs.linkDataArray.map(item => {
        let link = {
            from: item.from,
            to: item.to,
            fromPort: item.fromPort,
            toPort: item.toPort,
            points: item.points
        }
        if (item.text) {
            if (item.text.indexOf('#') !== -1) {
                let arrSplit = item.text.split('#')
                link.id = arrSplit[0]
                link.desc = arrSplit[1]
            }
        } else {}
        return link
    })
    let graphId = null
    if (flowList.length === 0) {
        graphId = 0
    } else {
        graphId = getFlowListParentData().cid
    }
    let data = {
        graphId: graphId,
        allVertices: arrNodes,
        allLines: arrLines
    }
    return data
}

function deepCopy(ele) {
    if (typeof ele === 'object') {
        if (ele === null) {
            return ele
        }
        if (ele.length !== undefined) {
            let arr = []
            ele.forEach(item => {
                arr.push(this.deepCopy(item))
            })
            return arr
        } else {
            let obj = {}
            Object.keys(ele).forEach(key => {
                obj[key] = this.deepCopy(ele[key])
            })
            return obj
        }
    } else {
        return ele
    }
}

/** Update view-model by flowData */
function Render() {
    let strJson = JSON.stringify(flowData)
    myDiagram.model = go.Model.fromJson(strJson)
}

function localLoad() {
    let strJSON = 
    myDiagram.model = go.Model.fromJson(strJSON)
}

function onClickBtnCan() {
    $('#wrap').hide()
}

function onClickInfoLink(link, node) {
    currentLink = link.data
    let options = getNodeMsgById(node.key)
    console.log('options', options)
    if (options) {
        let str = `<option selected="selected" disabled="disabled"  style='display: none' value=''></option>`
        for (let index = 0; index < options.length; index++) {
            const item = options[index]
            str += `<option value="${item.value}">${item.value}#${item.label}</option>`
        }
        $('#my-select').html(str)
        $('#wrap').show()
    } else {}
}

function onClickBtnCon() {
    $('#wrap').hide()
    let val = $("#my-select").val()
    let text = $("#my-select option:selected").text()
    editeLinkByFromAndTo(currentLink.from, currentLink.to, text)
    Render()
}

function getNodeMsgById(numId) {
    let arrOptions = []
    for (let index = 0; index < arrNodeMsg.length; index++) {
        const item = arrNodeMsg[index]
        if (item.id === numId) {
            for (let i = 0; i < item.arrLabel.length; i++) { 
                arrOptions.push({ label: item.arrLabel[i], value: item.arrValue[i]})
            }
            return arrOptions
        }
    }
    return false
}

function editeLinkByFromAndTo(numFrom, numTo, text) {
   let cacheLinks = deepCopy(flowData.linkDataArray)
   cacheLinks.forEach(item => {
       if (item.from === numFrom && item.to === numTo) {
           item.visible = true
           item.text = text
       } else {}
   })
   flowData.linkDataArray = cacheLinks 
}

function renameKeyByTime() {
    let date = new Date()
    let num = date.getTime()
    return Math.floor(num/1000)
}

// Control between parent&child chart
function enterChildFlow(numId, strType, strText) {
    showReturnBtn()
    if (window.AndroidWeb) {
        window.AndroidWeb.setSaveButtonEnabled(false)   
    }
    childFlowMsg.id = numId
    childFlowMsg.type = strType
    /* 1. get JSON */
    let strJSON = ''
    if (window.AndroidWeb) {
        test('go android')
        test(numId)
        strJSON = window.AndroidWeb.getSmallProcessJson(numId)
    }
    if (strJSON === '') {
        let data = {
            "graphId": numId,
            "allVertices": [],
            "allLines": []
        }
        strJSON = JSON.stringify(data)
    } else {
        test(strJSON)
    }
    /* 2. clear wrap */
    arrSelsNode = []
    arrSelsLink = []
    arrNodeMsg = []
    currentLink = {}
    /* 3. backup */
    if (flowList.length === 0) {
        flowList.push({
            id: 0,
            type: null,
            cid: numId,
            text: strText,
            cType: strType,
            data: deepCopy(flowData)
        })
    } else { // 中间级进入下一级,存储该中间级信息
        flowList.push({
            id: getFlowListParentData().cid,
            type: getFlowListParentData().cType,
            cid: numId,
            text: strText,
            cType: strType,
            data: deepCopy(flowData)
        })
    }
    /* 4. update JSON */
    flowData = formatAndroid2JS(JSON.parse(strJSON))
    /* 5. show */
    updateTitle(true)
    Render()
}

function backParentFlow() {
    if (flowList.length !== 0) {
        /* 1. 保存子流程 */
        let childJSON = myDiagram.model.toJson()
        childFlowMsg.strData = JSON.stringify(formatJS2Android(JSON.parse(childJSON)))
        if (window.AndroidWeb) {
            window.AndroidWeb.saveSmallProcessJson(childFlowMsg.id, childFlowMsg.type, childFlowMsg.strData)
        } else {
            console.log(childFlowMsg.id, childFlowMsg.type, childFlowMsg.strData)
        }
        /* 2. 获取上级流程数据 */
        let lastIndex = flowList.length - 1
        let dataJSON = flowList[lastIndex].data
        childFlowMsg.id = flowList[lastIndex].id
        childFlowMsg.type = flowList[lastIndex].type
        /* 3. 清空缓存 */
        arrSelsNode = []
        arrSelsLink = []
        arrNodeMsg = []
        currentLink = {}
        /* 4. update view data */
        flowData = dataJSON
        /* 5. show */
        Render()
        /* 6. pop */
        flowList.pop()
        if (flowList.length === 0) {
            hideReturnBtn()
            updateTitle(false)
            if (window.AndroidWeb) {
                window.AndroidWeb.setSaveButtonEnabled(true)
            }
        } else {
            updateTitle(true)
        }
    } else {
        window.alert('当前为全流程')
    }
}

function getFlowListParentData() {
    let len = flowList.length
    if (len === 0) { // 全流程
        return null
    } else {
        let pItem = flowList[len - 1]
        return deepCopy(pItem)
    }
}

function showReturnBtn() {
    $('.btn-return').show()
}
function hideReturnBtn() {
    $('.btn-return').hide()
}
function updateTitle(boolChildFlow) {
    if (boolChildFlow) {
        let cType = flowList[flowList.length - 1].cType
        let titleType = ''
        if (cType === 'smallProcess') {
            titleType = '子流程'
        } else {
            titleType = '运动子流程'
        }
        let title = titleType + '-' + flowList[flowList.length - 1].text
        $('#flow-title').text(title)
        $('.name-edit').show()
    } else {
        $('.name-edit').hide()
    }
}
function onClickEditName() {
    let id = getFlowListParentData().cid
    let type = getFlowListParentData().cType
    if (window.AndroidWeb) {
        window.AndroidWeb.showDialog(id, type)
    } else {
        console.log(id, type)
    }
}

// API with Android

/**
 * @desc android配置指令后，js提供接口更新节点描述的方法
 * @param {Number} id
 * @param {String} type
 * @param {String} desc
 * @param {Array} conf
 */
function updateNode(id, type, desc, arrVal, arrText) {
    // 储存键值对
    // 更改描述
    flowData = JSON.parse(myDiagram.model.toJson())
    let cacheNodes = deepCopy(flowData.nodeDataArray)
    cacheNodes.forEach(node => {
        if (node.key === id) {
            node.text = desc
            arrNodeMsg.unshift({
                id: node.key,
                arrLabel: arrText,
                arrValue: arrVal
            })
        }
    })
    flowData.nodeDataArray = cacheNodes
    Render()
}

function updateSmallProcessName(strText) {
    // 当前文本
    let myTitle = '子流程-' + strText
    $('#flow-title').text(myTitle)
    // 上层text 
    let pData = getFlowListParentData()
    if (pData) {
        let targetId = pData.cid
        let arrNodes = deepCopy(pData.data.nodeDataArray)
        arrNodes.forEach((item, index) => {
            if (item.key === targetId) {
                console.log(item)
                item.text = strText
            } else {}
        })
        flowList[flowList.length - 1].data.nodeDataArray = arrNodes
    } else {}
}

/**
 * @desc android点击编辑模式按钮，js提供进入或退出编辑模式的方法
 * @param {Boolean} boolEnter true: 进入编辑模式 false: 退出编辑模式
 */
function toggleEditMode(boolEnter) {
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
function deleteNodes() {
    if (arrSelsNode.length !== 0) { // 选中节点不为空
        let strArray = arrSelsNode.join()
        if (window.AndroidWeb) {    // 检测安卓环境
            window.AndroidWeb.deleteNodes(strArray)  // 调用安卓方法
        } else {
            console.log('window.AndroidWeb.deleteNodes', strArray)
        }
    }
    // 删除节点及其对应连接线
    myDiagram.commandHandler.deleteSelection()
}

/**
 * @desc android点击保存按钮，js提供获取graphJson的方法 
 * @desc window.AndroidWeb.saveGraphJson(strJSON)
*/
function saveGraphJson() {
    flowData = JSON.parse(myDiagram.model.toJson())
    let strJSON = myDiagram.model.toJson()
    let data = formatJS2Android(JSON.parse(strJSON))
    // window.AndroidWeb.saveGraphJson(JSON.stringify(data))
    if (window.AndroidWeb) {
        window.AndroidWeb.saveGraphJson(JSON.stringify(data))
    } else {
        console.log(data)
    }
}

/** @desc js调用android方法请求获取graphJson，然后需要提供一个接收json的方法 */
function cbGetGraphJson(strJSON) {
    let data = {}
    if (strJSON) {
        flowData = JSON.parse(myDiagram.model.toJson())
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
    flowData = deepCopy(data)
    Render()
}

/** @desc Android 调用此方法，选中某一节点 只负责样式，与逻辑层无关 */
function selectNodeById(id, bool) {
    window.myDiagram.allowSelect = true // 允许选中
    let target = myDiagram.findNodeForKey(id)
    target.isSelected = bool
    window.myDiagram.allowSelect = false // 屏蔽选中
}

/** @desc Android 调用此方法，取消所有节点选中样式 */
function resetAllNodes() {
    flowData.nodeDataArray.forEach(item => {
        selectNodeById(item.key, false)
    })
}

/** @desc Android 调用此方法 取消选中屏蔽 */
function enableSelection() {
    window.myDiagram.allowSelect = true
}

function test(str) {
    let old = $('#terminal').text()
    let update = old + '\n' + str
    $('#terminal').text(update)
}

window.onload = function () {
    init()
}