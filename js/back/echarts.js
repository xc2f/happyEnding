// Copyright 2006 Google Inc.

//   http://www.apache.org/licenses/LICENSE-2.0

// (c) 2010-2013 Thomas Fuchs

// Zepto.js may be freely distributed under the MIT license.

/*!
 * ZRender, a lightweight canvas library with a MVC architecture, data-driven 
 * and provides an event model like DOM.
 *  
 * Copyright (c) 2013, Baidu Inc.
 * All rights reserved.
 * 
 * LICENSE
 * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
 */

/*!
 * ECharts, a javascript interactive chart library.
 *  
 * Copyright (c) 2014, Baidu Inc.
 * All rights reserved.
 * 
 * LICENSE
 * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
 */

define("echarts/config", [], function() {
    var e = {
        CHART_TYPE_LINE: "line",
        CHART_TYPE_BAR: "bar",
        CHART_TYPE_SCATTER: "scatter",
        CHART_TYPE_PIE: "pie",
        CHART_TYPE_RADAR: "radar",
        CHART_TYPE_MAP: "map",
        CHART_TYPE_K: "k",
        CHART_TYPE_ISLAND: "island",
        CHART_TYPE_FORCE: "force",
        CHART_TYPE_CHORD: "chord",
        CHART_TYPE_GAUGE: "gauge",
        CHART_TYPE_FUNNEL: "funnel",
        COMPONENT_TYPE_TITLE: "title",
        COMPONENT_TYPE_LEGEND: "legend",
        COMPONENT_TYPE_DATARANGE: "dataRange",
        COMPONENT_TYPE_DATAVIEW: "dataView",
        COMPONENT_TYPE_DATAZOOM: "dataZoom",
        COMPONENT_TYPE_TOOLBOX: "toolbox",
        COMPONENT_TYPE_TOOLTIP: "tooltip",
        COMPONENT_TYPE_GRID: "grid",
        COMPONENT_TYPE_AXIS: "axis",
        COMPONENT_TYPE_POLAR: "polar",
        COMPONENT_TYPE_X_AXIS: "xAxis",
        COMPONENT_TYPE_Y_AXIS: "yAxis",
        COMPONENT_TYPE_AXIS_CATEGORY: "categoryAxis",
        COMPONENT_TYPE_AXIS_VALUE: "valueAxis",
        COMPONENT_TYPE_TIMELINE: "timeline",
        backgroundColor: "rgba(0,0,0,0)",
        color: ["#ff7f50", "#87cefa", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
        title: {
            text: "",
            subtext: "",
            x: "left",
            y: "top",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 5,
            textStyle: {
                fontSize: 18,
                fontWeight: "bolder",
                color: "#333"
            },
            subtextStyle: {
                color: "#aaa"
            }
        },
        legend: {
            orient: "horizontal",
            x: "center",
            y: "top",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 20,
            itemHeight: 14,
            textStyle: {
                color: "#333"
            },
            selectedMode: !0
        },
        dataRange: {
            orient: "vertical",
            x: "left",
            y: "bottom",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 20,
            itemHeight: 14,
            precision: 0,
            splitNumber: 5,
            calculable: !1,
            realtime: !0,
            color: ["#006edd", "#e0ffff"],
            textStyle: {
                color: "#333"
            }
        },
        toolbox: {
            show: !1,
            orient: "horizontal",
            x: "right",
            y: "top",
            color: ["#1e90ff", "#22bb22", "#4b0082", "#d2691e"],
            disableColor: "#ddd",
            effectiveColor: "red",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemSize: 16,
            showTitle: !0,
            feature: {
                mark: {
                    show: !1,
                    title: {
                        mark: "辅助线开关",
                        markUndo: "删除辅助线",
                        markClear: "清空辅助线"
                    },
                    lineStyle: {
                        width: 1,
                        color: "#1e90ff",
                        type: "dashed"
                    }
                },
                dataZoom: {
                    show: !1,
                    title: {
                        dataZoom: "区域缩放",
                        dataZoomReset: "区域缩放后退"
                    }
                },
                dataView: {
                    show: !1,
                    title: "数据视图",
                    readOnly: !1,
                    lang: ["Data View", "close", "refresh"]
                },
                magicType: {
                    show: !1,
                    title: {
                        line: "折线图切换",
                        bar: "柱形图切换",
                        stack: "堆积",
                        tiled: "平铺"
                    },
                    type: []
                },
                restore: {
                    show: !1,
                    title: "还原"
                },
                saveAsImage: {
                    show: !1,
                    title: "保存为图片",
                    type: "png",
                    lang: ["点击保存"]
                }
            }
        },
        tooltip: {
            show: !0,
            showContent: !0,
            trigger: "item",
            islandFormatter: "{a} <br/>{b} : {c}",
            showDelay: 20,
            hideDelay: 100,
            transitionDuration: .4,
            backgroundColor: "rgba(0,0,0,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            axisPointer: {
                type: "line",
                lineStyle: {
                    color: "#48b",
                    width: 2,
                    type: "solid"
                },
                crossStyle: {
                    color: "#1e90ff",
                    width: 1,
                    type: "dashed"
                },
                shadowStyle: {
                    color: "rgba(150,150,150,0.3)",
                    width: "auto",
                    type: "default"
                }
            },
            textStyle: {
                color: "#fff"
            }
        },
        dataZoom: {
            show: !1,
            orient: "horizontal",
            backgroundColor: "rgba(0,0,0,0)",
            dataBackgroundColor: "#eee",
            fillerColor: "rgba(144,197,237,0.2)",
            handleColor: "rgba(70,130,180,0.8)",
            realtime: !0
        },
        grid: {
            x: 80,
            y: 60,
            x2: 80,
            y2: 60,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        },
        categoryAxis: {
            position: "bottom",
            name: "",
            nameLocation: "end",
            nameTextStyle: {},
            boundaryGap: !0,
            axisLine: {
                show: !0,
                onZero: !0,
                lineStyle: {
                    color: "#48b",
                    width: 2,
                    type: "solid"
                }
            },
            axisTick: {
                show: !0,
                interval: "auto",
                inside: !1,
                length: 5,
                lineStyle: {
                    color: "#333",
                    width: 1
                }
            },
            axisLabel: {
                show: !0,
                interval: "auto",
                rotate: 0,
                margin: 8,
                textStyle: {
                    color: "#333"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#ccc"],
                    width: 1,
                    type: "solid"
                }
            },
            splitArea: {
                show: !1,
                areaStyle: {
                    color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
                }
            }
        },
        valueAxis: {
            position: "left",
            name: "",
            nameLocation: "end",
            nameTextStyle: {},
            boundaryGap: [0, 0],
            precision: 0,
            power: 100,
            splitNumber: 5,
            axisLine: {
                show: !0,
                onZero: !0,
                lineStyle: {
                    color: "#48b",
                    width: 2,
                    type: "solid"
                }
            },
            axisTick: {
                show: !1,
                inside: !1,
                length: 5,
                lineStyle: {
                    color: "#333",
                    width: 1
                }
            },
            axisLabel: {
                show: !0,
                rotate: 0,
                margin: 8,
                textStyle: {
                    color: "#333"
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#ccc"],
                    width: 1,
                    type: "solid"
                }
            },
            splitArea: {
                show: !1,
                areaStyle: {
                    color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
                }
            }
        },
        polar: {
            center: ["50%", "50%"],
            radius: "75%",
            startAngle: 90,
            splitNumber: 5,
            name: {
                show: !0,
                textStyle: {
                    color: "#333"
                }
            },
            axisLine: {
                show: !0,
                lineStyle: {
                    color: "#ccc",
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !1,
                textStyle: {
                    color: "#333"
                }
            },
            splitArea: {
                show: !0,
                areaStyle: {
                    color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
                }
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    width: 1,
                    color: "#ccc"
                }
            }
        },
        timeline: {
            show: !0,
            type: "time",
            notMerge: !1,
            realtime: !0,
            x: 80,
            x2: 80,
            y2: 0,
            height: 50,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            controlPosition: "left",
            autoPlay: !1,
            loop: !0,
            playInterval: 2e3,
            lineStyle: {
                width: 1,
                color: "#666",
                type: "dashed"
            },
            label: {
                show: !0,
                interval: "auto",
                rotate: 0,
                textStyle: {
                    color: "#333"
                }
            },
            checkpointStyle: {
                symbol: "auto",
                symbolSize: "auto",
                color: "auto",
                borderColor: "auto",
                borderWidth: "auto",
                label: {
                    show: !1,
                    textStyle: {
                        color: "auto"
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: "#333"
                },
                emphasis: {
                    color: "#1e90ff"
                }
            },
            symbol: "emptyDiamond",
            symbolSize: 4,
            currentIndex: 0
        },
        bar: {
            xAxisIndex: 0,
            yAxisIndex: 0,
            barMinHeight: 0,
            barGap: "30%",
            barCategoryGap: "20%",
            itemStyle: {
                normal: {
                    borderColor: "#fff",
                    borderRadius: 0,
                    borderWidth: 0,
                    label: {
                        show: !1
                    }
                },
                emphasis: {
                    borderColor: "#fff",
                    borderRadius: 0,
                    borderWidth: 0,
                    label: {
                        show: !1
                    }
                }
            }
        },
        line: {
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    label: {
                        show: !1
                    },
                    lineStyle: {
                        width: 2,
                        type: "solid",
                        shadowColor: "rgba(0,0,0,0)",
                        shadowBlur: 0,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0
                    }
                },
                emphasis: {
                    label: {
                        show: !1
                    }
                }
            },
            symbolSize: 2,
            showAllSymbol: !1
        },
        k: {
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: "#fff",
                    color0: "#00aa11",
                    lineStyle: {
                        width: 1,
                        color: "#ff3200",
                        color0: "#00aa11"
                    }
                },
                emphasis: {}
            }
        },
        scatter: {
            xAxisIndex: 0,
            yAxisIndex: 0,
            symbolSize: 4,
            large: !1,
            largeThreshold: 2e3,
            itemStyle: {
                normal: {
                    label: {
                        show: !1,
                        formatter: function(e, t, n) {
                            return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
                        }
                    }
                },
                emphasis: {
                    label: {
                        show: !1,
                        formatter: function(e, t, n) {
                            return typeof n[2] != "undefined" ? n[2] : n[0] + " , " + n[1]
                        }
                    }
                }
            }
        },
        radar: {
            polarIndex: 0,
            itemStyle: {
                normal: {
                    label: {
                        show: !1
                    },
                    lineStyle: {
                        width: 2,
                        type: "solid"
                    }
                },
                emphasis: {
                    label: {
                        show: !1
                    }
                }
            },
            symbolSize: 2
        },
        pie: {
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockWise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            itemStyle: {
                normal: {
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    label: {
                        show: !0,
                        position: "outer"
                    },
                    labelLine: {
                        show: !0,
                        length: 20,
                        lineStyle: {
                            width: 1,
                            type: "solid"
                        }
                    }
                },
                emphasis: {
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    label: {
                        show: !1
                    },
                    labelLine: {
                        show: !1,
                        length: 20,
                        lineStyle: {
                            width: 1,
                            type: "solid"
                        }
                    }
                }
            }
        },
        map: {
            mapType: "china",
            mapValuePrecision: 0,
            showLegendSymbol: !0,
            hoverable: !0,
            itemStyle: {
                normal: {
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    areaStyle: {
                        color: "#ccc"
                    },
                    label: {
                        show: !1,
                        textStyle: {
                            color: "rgb(139,69,19)"
                        }
                    }
                },
                emphasis: {
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    areaStyle: {
                        color: "rgba(255,215,0,0.8)"
                    },
                    label: {
                        show: !1,
                        textStyle: {
                            color: "rgb(100,0,0)"
                        }
                    }
                }
            }
        },
        force: {
            minRadius: 10,
            maxRadius: 20,
            density: 1,
            attractiveness: 1,
            initSize: 300,
            centripetal: 1,
            coolDown: .99,
            linkSymbol: null,
            linkSymbolSize: [10, 15],
            draggable: !0,
            categories: [],
            itemStyle: {
                normal: {
                    label: {
                        show: !1
                    },
                    nodeStyle: {
                        brushType: "both",
                        color: "#f08c2e",
                        strokeColor: "#5182ab"
                    },
                    linkStyle: {
                        strokeColor: "#5182ab"
                    }
                },
                emphasis: {
                    label: {
                        show: !1
                    },
                    nodeStyle: {},
                    linkStyle: {}
                }
            }
        },
        chord: {
            radius: ["65%", "75%"],
            center: ["50%", "50%"],
            padding: 2,
            sort: "none",
            sortSub: "none",
            startAngle: 90,
            clockWise: !0,
            showScale: !1,
            showScaleText: !1,
            itemStyle: {
                normal: {
                    label: {
                        show: !0,
                        rotate: !1,
                        distance: 10
                    },
                    lineStyle: {
                        width: 0,
                        color: "#000"
                    },
                    chordStyle: {
                        lineStyle: {
                            width: 1,
                            color: "#999"
                        }
                    }
                },
                emphasis: {
                    lineStyle: {
                        width: 0,
                        color: "#000"
                    },
                    chordStyle: {
                        lineStyle: {
                            width: 1,
                            color: "#666"
                        }
                    }
                }
            },
            matrix: []
        },
        gauge: {
            center: ["50%", "50%"],
            radius: "75%",
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            precision: 0,
            splitNumber: 10,
            axisLine: {
                show: !0,
                lineStyle: {
                    color: [
                        [.2, "#228b22"],
                        [.8, "#48b"],
                        [1, "#ff4500"]
                    ],
                    width: 30
                }
            },
            axisTick: {
                show: !0,
                splitNumber: 5,
                length: 8,
                lineStyle: {
                    color: "#eee",
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                textStyle: {
                    color: "auto"
                }
            },
            splitLine: {
                show: !0,
                length: 30,
                lineStyle: {
                    color: "#eee",
                    width: 2,
                    type: "solid"
                }
            },
            pointer: {
                show: !0,
                length: "80%",
                width: 8,
                color: "auto"
            },
            title: {
                show: !0,
                offsetCenter: [0, "-40%"],
                textStyle: {
                    color: "#333",
                    fontSize: 15
                }
            },
            detail: {
                show: !0,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                borderColor: "#ccc",
                width: 100,
                height: 40,
                offsetCenter: [0, "40%"],
                textStyle: {
                    color: "auto",
                    fontSize: 30
                }
            }
        },
        funnel: {
            x: 80,
            y: 60,
            x2: 80,
            y2: 60,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 0,
            itemStyle: {
                normal: {
                    borderColor: "#fff",
                    borderWidth: 1,
                    label: {
                        show: !0,
                        position: "outer"
                    },
                    labelLine: {
                        show: !0,
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: "solid"
                        }
                    }
                },
                emphasis: {
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 1,
                    label: {
                        show: !0
                    },
                    labelLine: {
                        show: !0
                    }
                }
            }
        },
        island: {
            r: 15,
            calculateStep: .1
        },
        markPoint: {
            symbol: "pin",
            symbolSize: 10,
            large: !1,
            effect: {
                show: !1,
                period: 15,
                scaleSize: 2
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    label: {
                        show: !0,
                        position: "inside"
                    }
                },
                emphasis: {
                    label: {
                        show: !0
                    }
                }
            }
        },
        markLine: {
            symbol: ["circle", "arrow"],
            symbolSize: [2, 4],
            large: !1,
            effect: {
                show: !1,
                period: 15,
                scaleSize: 2
            },
            itemStyle: {
                normal: {
                    borderWidth: 1.5,
                    label: {
                        show: !0,
                        position: "end"
                    },
                    lineStyle: {
                        type: "dashed"
                    }
                },
                emphasis: {
                    label: {
                        show: !1
                    },
                    lineStyle: {}
                }
            }
        },
        textStyle: {
            decoration: "none",
            fontFamily: "Arial, Verdana, sans-serif",
            fontFamily2: "微软雅黑",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        EVENT: {
            REFRESH: "refresh",
            RESTORE: "restore",
            RESIZE: "resize",
            CLICK: "click",
            HOVER: "hover",
            DATA_CHANGED: "dataChanged",
            DATA_ZOOM: "dataZoom",
            DATA_RANGE: "dataRange",
            LEGEND_SELECTED: "legendSelected",
            MAP_SELECTED: "mapSelected",
            PIE_SELECTED: "pieSelected",
            MAGIC_TYPE_CHANGED: "magicTypeChanged",
            DATA_VIEW_CHANGED: "dataViewChanged",
            TIMELINE_CHANGED: "timelineChanged",
            MAP_ROAM: "mapRoam",
            TOOLTIP_HOVER: "tooltipHover",
            TOOLTIP_IN_GRID: "tooltipInGrid",
            TOOLTIP_OUT_GRID: "tooltipOutGrid"
        },
        DRAG_ENABLE_TIME: 120,
        EFFECT_ZLEVEL: 7,
        symbolList: ["circle", "rectangle", "triangle", "diamond", "emptyCircle", "emptyRectangle", "emptyTriangle", "emptyDiamond"],
        loadingText: "Loading...",
        calculable: !1,
        calculableColor: "rgba(255,165,0,0.6)",
        calculableHolderColor: "#ccc",
        nameConnector: " & ",
        valueConnector: " : ",
        animation: !0,
        addDataAnimation: !0,
        animationThreshold: 2e3,
        animationDuration: 2e3,
        animationEasing: "ExponentialOut"
    };
    return e
}), define("zrender/lib/excanvas", ["require"], function(e) {
    return document.createElement("canvas").getContext ? G_vmlCanvasManager = !1 : function() {
        function f() {
            return this.context_ || (this.context_ = new I(this))
        }

        function c(e, t, n) {
            var r = l.call(arguments, 2);
            return function() {
                return e.apply(t, r.concat(l.call(arguments)))
            }
        }

        function h(e) {
            return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
        }

        function p(e, t, n) {
            e.namespaces[t] || e.namespaces.add(t, n, "#default#VML")
        }

        function d(e) {
            p(e, "g_vml_", "urn:schemas-microsoft-com:vml"), p(e, "g_o_", "urn:schemas-microsoft-com:office:office");
            if (!e.styleSheets.ex_canvas_) {
                var t = e.createStyleSheet();
                t.owningElement.id = "ex_canvas_", t.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
            }
        }

        function m(e) {
            var t = e.srcElement;
            switch (e.propertyName) {
                case "width":
                    t.getContext().clearRect(), t.style.width = t.attributes.width.nodeValue + "px", t.firstChild.style.width = t.clientWidth + "px";
                    break;
                case "height":
                    t.getContext().clearRect(), t.style.height = t.attributes.height.nodeValue + "px", t.firstChild.style.height = t.clientHeight + "px"
            }
        }

        function g(e) {
            var t = e.srcElement;
            t.firstChild && (t.firstChild.style.width = t.clientWidth + "px", t.firstChild.style.height = t.clientHeight + "px")
        }

        function E() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1]
            ]
        }

        function S(e, t) {
            var n = E();
            for (var r = 0; r < 3; r++)
                for (var i = 0; i < 3; i++) {
                    var s = 0;
                    for (var o = 0; o < 3; o++) s += e[r][o] * t[o][i];
                    n[r][i] = s
                }
            return n
        }

        function x(e, t) {
            t.fillStyle = e.fillStyle, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.lineWidth = e.lineWidth, t.miterLimit = e.miterLimit, t.shadowBlur = e.shadowBlur, t.shadowColor = e.shadowColor, t.shadowOffsetX = e.shadowOffsetX, t.shadowOffsetY = e.shadowOffsetY, t.strokeStyle = e.strokeStyle, t.globalAlpha = e.globalAlpha, t.font = e.font, t.textAlign = e.textAlign, t.textBaseline = e.textBaseline, t.arcScaleX_ = e.arcScaleX_, t.arcScaleY_ = e.arcScaleY_, t.lineScale_ = e.lineScale_
        }

        function N(e) {
            var t = e.indexOf("(", 3),
                n = e.indexOf(")", t + 1),
                r = e.substring(t + 1, n).split(",");
            if (r.length != 4 || e.charAt(3) != "a") r[3] = 1;
            return r
        }

        function C(e) {
            return parseFloat(e) / 100
        }

        function k(e, t, n) {
            return Math.min(n, Math.max(t, e))
        }

        function L(e) {
            var t, n, r, i, s, o;
            i = parseFloat(e[0]) / 360 % 360, i < 0 && i++, s = k(C(e[1]), 0, 1), o = k(C(e[2]), 0, 1);
            if (s == 0) t = n = r = o;
            else {
                var u = o < .5 ? o * (1 + s) : o + s - o * s,
                    a = 2 * o - u;
                t = A(a, u, i + 1 / 3), n = A(a, u, i), r = A(a, u, i - 1 / 3)
            }
            return "#" + y[Math.floor(t * 255)] + y[Math.floor(n * 255)] + y[Math.floor(r * 255)]
        }

        function A(e, t, n) {
            return n < 0 && n++, n > 1 && n--, 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }

        function M(e) {
            if (e in O) return O[e];
            var t, n = 1;
            e = String(e);
            if (e.charAt(0) == "#") t = e;
            else if (/^rgb/.test(e)) {
                var r = N(e),
                    t = "#",
                    i;
                for (var s = 0; s < 3; s++) r[s].indexOf("%") != -1 ? i = Math.floor(C(r[s]) * 255) : i = +r[s], t += y[k(i, 0, 255)];
                n = +r[3]
            } else if (/^hsl/.test(e)) {
                var r = N(e);
                t = L(r), n = r[3]
            } else t = T[e] || e;
            return O[e] = {
                color: t,
                alpha: n
            }
        }

        function P(e) {
            if (D[e]) return D[e];
            var t = document.createElement("div"),
                n = t.style,
                r;
            try {
                n.font = e, r = n.fontFamily.split(",")[0]
            } catch (i) {}
            return D[e] = {
                style: n.fontStyle || _.style,
                variant: n.fontVariant || _.variant,
                weight: n.fontWeight || _.weight,
                size: n.fontSize || _.size,
                family: r || _.family
            }
        }

        function H(e, t) {
            var n = {};
            for (var r in e) n[r] = e[r];
            var i = parseFloat(t.currentStyle.fontSize),
                s = parseFloat(e.size);
            return typeof e.size == "number" ? n.size = e.size : e.size.indexOf("px") != -1 ? n.size = s : e.size.indexOf("em") != -1 ? n.size = i * s : e.size.indexOf("%") != -1 ? n.size = i / 100 * s : e.size.indexOf("pt") != -1 ? n.size = s / .75 : n.size = i, n
        }

        function B(e) {
            return e.style + " " + e.variant + " " + e.weight + " " + e.size + "px '" + e.family + "'"
        }

        function F(e) {
            return j[e] || "square"
        }

        function I(e) {
            this.m_ = E(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = o * 1, this.globalAlpha = 1, this.font = "12px 微软雅黑", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = e;
            var t = "width:" + e.clientWidth + "px;height:" + e.clientHeight + "px;overflow:hidden;position:absolute",
                n = e.ownerDocument.createElement("div");
            n.style.cssText = t, e.appendChild(n);
            var r = n.cloneNode(!1);
            r.style.backgroundColor = "#fff", r.style.filter = "alpha(opacity=0)", e.appendChild(r), this.element_ = n, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
        }

        function R(e, t, n, r) {
            e.currentPath_.push({
                type: "bezierCurveTo",
                cp1x: t.x,
                cp1y: t.y,
                cp2x: n.x,
                cp2y: n.y,
                x: r.x,
                y: r.y
            }), e.currentX_ = r.x, e.currentY_ = r.y
        }

        function U(e, t) {
            var n = M(e.strokeStyle),
                r = n.color,
                i = n.alpha * e.globalAlpha,
                s = e.lineScale_ * e.lineWidth;
            s < 1 && (i *= s), t.push("<g_vml_:stroke", ' opacity="', i, '"', ' joinstyle="', e.lineJoin, '"', ' miterlimit="', e.miterLimit, '"', ' endcap="', F(e.lineCap), '"', ' weight="', s, 'px"', ' color="', r, '" />')
        }

        function z(t, n, r, i) {
            var s = t.fillStyle,
                u = t.arcScaleX_,
                a = t.arcScaleY_,
                f = i.x - r.x,
                l = i.y - r.y;
            if (s instanceof $) {
                var c = 0,
                    h = {
                        x: 0,
                        y: 0
                    },
                    p = 0,
                    d = 1;
                if (s.type_ == "gradient") {
                    var v = s.x0_ / u,
                        m = s.y0_ / a,
                        g = s.x1_ / u,
                        y = s.y1_ / a,
                        b = W(t, v, m),
                        w = W(t, g, y),
                        E = w.x - b.x,
                        S = w.y - b.y;
                    c = Math.atan2(E, S) * 180 / Math.PI, c < 0 && (c += 360), c < 1e-6 && (c = 0)
                } else {
                    var b = W(t, s.x0_, s.y0_);
                    h = {
                        x: (b.x - r.x) / f,
                        y: (b.y - r.y) / l
                    }, f /= u * o, l /= a * o;
                    var x = e.max(f, l);
                    p = 2 * s.r0_ / x, d = 2 * s.r1_ / x - p
                }
                var T = s.colors_;
                T.sort(function(e, t) {
                    return e.offset - t.offset
                });
                var N = T.length,
                    C = T[0].color,
                    k = T[N - 1].color,
                    L = T[0].alpha * t.globalAlpha,
                    A = T[N - 1].alpha * t.globalAlpha,
                    O = [];
                for (var _ = 0; _ < N; _++) {
                    var D = T[_];
                    O.push(D.offset * d + p + " " + D.color)
                }
                n.push('<g_vml_:fill type="', s.type_, '"', ' method="none" focus="100%"', ' color="', C, '"', ' color2="', k, '"', ' colors="', O.join(","), '"', ' opacity="', A, '"', ' g_o_:opacity2="', L, '"', ' angle="', c, '"', ' focusposition="', h.x, ",", h.y, '" />')
            } else if (s instanceof J) {
                if (f && l) {
                    var P = -r.x,
                        H = -r.y;
                    n.push("<g_vml_:fill", ' position="', P / f * u * u, ",", H / l * a * a, '"', ' type="tile"', ' src="', s.src_, '" />')
                }
            } else {
                var B = M(t.fillStyle),
                    j = B.color,
                    F = B.alpha * t.globalAlpha;
                n.push('<g_vml_:fill color="', j, '" opacity="', F, '" />')
            }
        }

        function W(e, t, n) {
            var r = e.m_;
            return {
                x: o * (t * r[0][0] + n * r[1][0] + r[2][0]) - u,
                y: o * (t * r[0][1] + n * r[1][1] + r[2][1]) - u
            }
        }

        function X(e) {
            return isFinite(e[0][0]) && isFinite(e[0][1]) && isFinite(e[1][0]) && isFinite(e[1][1]) && isFinite(e[2][0]) && isFinite(e[2][1])
        }

        function V(e, t, n) {
            if (!X(t)) return;
            e.m_ = t;
            if (n) {
                var r = t[0][0] * t[1][1] - t[0][1] * t[1][0];
                e.lineScale_ = s(i(r))
            }
        }

        function $(e) {
            this.type_ = e, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
        }

        function J(e, t) {
            Q(e);
            switch (t) {
                case "repeat":
                case null:
                case "":
                    this.repetition_ = "repeat";
                    break;
                case "repeat-x":
                case "repeat-y":
                case "no-repeat":
                    this.repetition_ = t;
                    break;
                default:
                    K("SYNTAX_ERR")
            }
            this.src_ = e.src, this.width_ = e.width, this.height_ = e.height
        }

        function K(e) {
            throw new G(e)
        }

        function Q(e) {
            (!e || e.nodeType != 1 || e.tagName != "IMG") && K("TYPE_MISMATCH_ERR"), e.readyState != "complete" && K("INVALID_STATE_ERR")
        }

        function G(e) {
            this.code = this[e], this.message = e + ": DOM Exception " + this.code
        }
        var e = Math,
            t = e.round,
            n = e.sin,
            r = e.cos,
            i = e.abs,
            s = e.sqrt,
            o = 10,
            u = o / 2,
            a = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1],
            l = Array.prototype.slice;
        d(document);
        var v = {
            init: function(e) {
                var t = e || document;
                t.createElement("canvas"), t.attachEvent("onreadystatechange", c(this.init_, this, t))
            },
            init_: function(e) {
                var t = e.getElementsByTagName("canvas");
                for (var n = 0; n < t.length; n++) this.initElement(t[n])
            },
            initElement: function(e) {
                if (!e.getContext) {
                    e.getContext = f, d(e.ownerDocument), e.innerHTML = "", e.attachEvent("onpropertychange", m), e.attachEvent("onresize", g);
                    var t = e.attributes;
                    t.width && t.width.specified ? e.style.width = t.width.nodeValue + "px" : e.width = e.clientWidth, t.height && t.height.specified ? e.style.height = t.height.nodeValue + "px" : e.height = e.clientHeight
                }
                return e
            }
        };
        v.init();
        var y = [];
        for (var b = 0; b < 16; b++)
            for (var w = 0; w < 16; w++) y[b * 16 + w] = b.toString(16) + w.toString(16);
        var T = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                grey: "#808080",
                greenyellow: "#ADFF2F",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                oldlace: "#FDF5E6",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                whitesmoke: "#F5F5F5",
                yellowgreen: "#9ACD32"
            },
            O = {},
            _ = {
                style: "normal",
                variant: "normal",
                weight: "normal",
                size: 12,
                family: "微软雅黑"
            },
            D = {},
            j = {
                butt: "flat",
                round: "round"
            },
            q = I.prototype;
        q.clearRect = function() {
            this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
        }, q.beginPath = function() {
            this.currentPath_ = []
        }, q.moveTo = function(e, t) {
            var n = W(this, e, t);
            this.currentPath_.push({
                type: "moveTo",
                x: n.x,
                y: n.y
            }), this.currentX_ = n.x, this.currentY_ = n.y
        }, q.lineTo = function(e, t) {
            var n = W(this, e, t);
            this.currentPath_.push({
                type: "lineTo",
                x: n.x,
                y: n.y
            }), this.currentX_ = n.x, this.currentY_ = n.y
        }, q.bezierCurveTo = function(e, t, n, r, i, s) {
            var o = W(this, i, s),
                u = W(this, e, t),
                a = W(this, n, r);
            R(this, u, a, o)
        }, q.quadraticCurveTo = function(e, t, n, r) {
            var i = W(this, e, t),
                s = W(this, n, r),
                o = {
                    x: this.currentX_ + 2 / 3 * (i.x - this.currentX_),
                    y: this.currentY_ + 2 / 3 * (i.y - this.currentY_)
                },
                u = {
                    x: o.x + (s.x - this.currentX_) / 3,
                    y: o.y + (s.y - this.currentY_) / 3
                };
            R(this, o, u, s)
        }, q.arc = function(e, t, i, s, a, f) {
            i *= o;
            var l = f ? "at" : "wa",
                c = e + r(s) * i - u,
                h = t + n(s) * i - u,
                p = e + r(a) * i - u,
                d = t + n(a) * i - u;
            c == p && !f && (c += .125);
            var v = W(this, e, t),
                m = W(this, c, h),
                g = W(this, p, d);
            this.currentPath_.push({
                type: l,
                x: v.x,
                y: v.y,
                radius: i,
                xStart: m.x,
                yStart: m.y,
                xEnd: g.x,
                yEnd: g.y
            })
        }, q.rect = function(e, t, n, r) {
            this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath()
        }, q.strokeRect = function(e, t, n, r) {
            var i = this.currentPath_;
            this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.stroke(), this.currentPath_ = i
        }, q.fillRect = function(e, t, n, r) {
            var i = this.currentPath_;
            this.beginPath(), this.moveTo(e, t), this.lineTo(e + n, t), this.lineTo(e + n, t + r), this.lineTo(e, t + r), this.closePath(), this.fill(), this.currentPath_ = i
        }, q.createLinearGradient = function(e, t, n, r) {
            var i = new $("gradient");
            return i.x0_ = e, i.y0_ = t, i.x1_ = n, i.y1_ = r, i
        }, q.createRadialGradient = function(e, t, n, r, i, s) {
            var o = new $("gradientradial");
            return o.x0_ = e, o.y0_ = t, o.r0_ = n, o.x1_ = r, o.y1_ = i, o.r1_ = s, o
        }, q.drawImage = function(n, r) {
            var i, s, u, a, f, l, c, h, p = n.runtimeStyle.width,
                d = n.runtimeStyle.height;
            n.runtimeStyle.width = "auto", n.runtimeStyle.height = "auto";
            var v = n.width,
                m = n.height;
            n.runtimeStyle.width = p, n.runtimeStyle.height = d;
            if (arguments.length == 3) i = arguments[1], s = arguments[2], f = l = 0, c = u = v, h = a = m;
            else if (arguments.length == 5) i = arguments[1], s = arguments[2], u = arguments[3], a = arguments[4], f = l = 0, c = v, h = m;
            else {
                if (arguments.length != 9) throw Error("Invalid number of arguments");
                f = arguments[1], l = arguments[2], c = arguments[3], h = arguments[4], i = arguments[5], s = arguments[6], u = arguments[7], a = arguments[8]
            }
            var g = W(this, i, s),
                y = c / 2,
                b = h / 2,
                w = [],
                E = 10,
                S = 10,
                x = scaleY = 1;
            w.push(" <g_vml_:group", ' coordsize="', o * E, ",", o * S, '"', ' coordorigin="0,0"', ' style="width:', E, "px;height:", S, "px;position:absolute;");
            if (this.m_[0][0] != 1 || this.m_[0][1] || this.m_[1][1] != 1 || this.m_[1][0]) {
                var T = [];
                x = Math.sqrt(this.m_[0][0] * this.m_[0][0] + this.m_[0][1] * this.m_[0][1]), scaleY = Math.sqrt(this.m_[1][0] * this.m_[1][0] + this.m_[1][1] * this.m_[1][1]), T.push("M11=", this.m_[0][0] / x, ",", "M12=", this.m_[1][0] / scaleY, ",", "M21=", this.m_[0][1] / x, ",", "M22=", this.m_[1][1] / scaleY, ",", "Dx=", t(g.x / o), ",", "Dy=", t(g.y / o), "");
                var N = g,
                    C = W(this, i + u, s),
                    k = W(this, i, s + a),
                    L = W(this, i + u, s + a);
                N.x = e.max(N.x, C.x, k.x, L.x), N.y = e.max(N.y, C.y, k.y, L.y), w.push("padding:0 ", t(N.x / o), "px ", t(N.y / o), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", T.join(""), ", sizingmethod='clip');")
            } else w.push("top:", t(g.y / o), "px;left:", t(g.x / o), "px;");
            w.push(' ">'), (f || l) && w.push('<div style="overflow: hidden; width:', Math.ceil((u + f * u / c) * x), "px;", " height:", Math.ceil((a + l * a / h) * scaleY), "px;", " filter:progid:DxImageTransform.Microsoft.Matrix(Dx=", -f * u / c * x, ",Dy=", -l * a / h * scaleY, ');">'), w.push('<div style="width:', Math.round(x * v * u / c), "px;", " height:", Math.round(scaleY * m * a / h), "px;", " filter:"), this.globalAlpha < 1 && w.push(" progid:DXImageTransform.Microsoft.Alpha(opacity=" + this.globalAlpha * 100 + ")"), w.push(" progid:DXImageTransform.Microsoft.AlphaImageLoader(src=", n.src, ',sizingMethod=scale)">'), (f || l) && w.push("</div>"), w.push("</div></div>"), this.element_.insertAdjacentHTML("BeforeEnd", w.join(""))
        }, q.stroke = function(e) {
            var n = [],
                r = !1,
                i = 10,
                s = 10;
            n.push("<g_vml_:shape", ' filled="', !!e, '"', ' style="position:absolute;width:', i, "px;height:", s, 'px;"', ' coordorigin="0,0"', ' coordsize="', o * i, ",", o * s, '"', ' stroked="', !e, '"', ' path="');
            var u = !1,
                a = {
                    x: null,
                    y: null
                },
                f = {
                    x: null,
                    y: null
                };
            for (var l = 0; l < this.currentPath_.length; l++) {
                var c = this.currentPath_[l],
                    h;
                switch (c.type) {
                    case "moveTo":
                        h = c, n.push(" m ", t(c.x), ",", t(c.y));
                        break;
                    case "lineTo":
                        n.push(" l ", t(c.x), ",", t(c.y));
                        break;
                    case "close":
                        n.push(" x "), c = null;
                        break;
                    case "bezierCurveTo":
                        n.push(" c ", t(c.cp1x), ",", t(c.cp1y), ",", t(c.cp2x), ",", t(c.cp2y), ",", t(c.x), ",", t(c.y));
                        break;
                    case "at":
                    case "wa":
                        n.push(" ", c.type, " ", t(c.x - this.arcScaleX_ * c.radius), ",", t(c.y - this.arcScaleY_ * c.radius), " ", t(c.x + this.arcScaleX_ * c.radius), ",", t(c.y + this.arcScaleY_ * c.radius), " ", t(c.xStart), ",", t(c.yStart), " ", t(c.xEnd), ",", t(c.yEnd))
                }
                if (c) {
                    if (a.x == null || c.x < a.x) a.x = c.x;
                    if (f.x == null || c.x > f.x) f.x = c.x;
                    if (a.y == null || c.y < a.y) a.y = c.y;
                    if (f.y == null || c.y > f.y) f.y = c.y
                }
            }
            n.push(' ">'), e ? z(this, n, a, f) : U(this, n), n.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
        }, q.fill = function() {
            this.stroke(!0)
        }, q.closePath = function() {
            this.currentPath_.push({
                type: "close"
            })
        }, q.save = function() {
            var e = {};
            x(this, e), this.aStack_.push(e), this.mStack_.push(this.m_), this.m_ = S(E(), this.m_)
        }, q.restore = function() {
            this.aStack_.length && (x(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
        }, q.translate = function(e, t) {
            var n = [
                [1, 0, 0],
                [0, 1, 0],
                [e, t, 1]
            ];
            V(this, S(n, this.m_), !1)
        }, q.rotate = function(e) {
            var t = r(e),
                i = n(e),
                s = [
                    [t, i, 0],
                    [-i, t, 0],
                    [0, 0, 1]
                ];
            V(this, S(s, this.m_), !1)
        }, q.scale = function(e, t) {
            this.arcScaleX_ *= e, this.arcScaleY_ *= t;
            var n = [
                [e, 0, 0],
                [0, t, 0],
                [0, 0, 1]
            ];
            V(this, S(n, this.m_), !0)
        }, q.transform = function(e, t, n, r, i, s) {
            var o = [
                [e, t, 0],
                [n, r, 0],
                [i, s, 1]
            ];
            V(this, S(o, this.m_), !0)
        }, q.setTransform = function(e, t, n, r, i, s) {
            var o = [
                [e, t, 0],
                [n, r, 0],
                [i, s, 1]
            ];
            V(this, o, !0)
        }, q.drawText_ = function(e, n, r, i, s) {
            var u = this.m_,
                a = 1e3,
                f = 0,
                l = a,
                c = {
                    x: 0,
                    y: 0
                },
                p = [],
                d = H(P(this.font), this.element_),
                v = B(d),
                m = this.element_.currentStyle,
                g = this.textAlign.toLowerCase();
            switch (g) {
                case "left":
                case "center":
                case "right":
                    break;
                case "end":
                    g = m.direction == "ltr" ? "right" : "left";
                    break;
                case "start":
                    g = m.direction == "rtl" ? "right" : "left";
                    break;
                default:
                    g = "left"
            }
            switch (this.textBaseline) {
                case "hanging":
                case "top":
                    c.y = d.size / 1.75;
                    break;
                case "middle":
                    break;
                default:
                case null:
                case "alphabetic":
                case "ideographic":
                case "bottom":
                    c.y = -d.size / 2.25
            }
            switch (g) {
                case "right":
                    f = a, l = .05;
                    break;
                case "center":
                    f = l = a / 2
            }
            var y = W(this, n + c.x, r + c.y);
            p.push('<g_vml_:line from="', -f, ' 0" to="', l, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !s, '" stroked="', !!s, '" style="position:absolute;width:1px;height:1px;">'), s ? U(this, p) : z(this, p, {
                x: -f,
                y: 0
            }, {
                x: l,
                y: d.size
            });
            var b = u[0][0].toFixed(3) + "," + u[1][0].toFixed(3) + "," + u[0][1].toFixed(3) + "," + u[1][1].toFixed(3) + ",0,0",
                w = t(y.x / o) + "," + t(y.y / o);
            p.push('<g_vml_:skew on="t" matrix="', b, '" ', ' offset="', w, '" origin="', f, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', h(e), '" style="v-text-align:', g, ";font:", h(v), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", p.join(""))
        }, q.fillText = function(e, t, n, r) {
            this.drawText_(e, t, n, r, !1)
        }, q.strokeText = function(e, t, n, r) {
            this.drawText_(e, t, n, r, !0)
        }, q.measureText = function(e) {
            if (!this.textMeasureEl_) {
                var t = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
                this.element_.insertAdjacentHTML("beforeEnd", t), this.textMeasureEl_ = this.element_.lastChild
            }
            var n = this.element_.ownerDocument;
            return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(n.createTextNode(e)), {
                width: this.textMeasureEl_.offsetWidth
            }
        }, q.clip = function() {}, q.arcTo = function() {}, q.createPattern = function(e, t) {
            return new J(e, t)
        }, $.prototype.addColorStop = function(e, t) {
            t = M(t), this.colors_.push({
                offset: e,
                color: t.color,
                alpha: t.alpha
            })
        };
        var Y = G.prototype = new Error;
        Y.INDEX_SIZE_ERR = 1, Y.DOMSTRING_SIZE_ERR = 2, Y.HIERARCHY_REQUEST_ERR = 3, Y.WRONG_DOCUMENT_ERR = 4, Y.INVALID_CHARACTER_ERR = 5, Y.NO_DATA_ALLOWED_ERR = 6, Y.NO_MODIFICATION_ALLOWED_ERR = 7, Y.NOT_FOUND_ERR = 8, Y.NOT_SUPPORTED_ERR = 9, Y.INUSE_ATTRIBUTE_ERR = 10, Y.INVALID_STATE_ERR = 11, Y.SYNTAX_ERR = 12, Y.INVALID_MODIFICATION_ERR = 13, Y.NAMESPACE_ERR = 14, Y.INVALID_ACCESS_ERR = 15, Y.VALIDATION_ERR = 16, Y.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = v, CanvasRenderingContext2D = I, CanvasGradient = $, CanvasPattern = J, DOMException = G
    }(), G_vmlCanvasManager
}), define("zrender/tool/util", ["require", "../lib/excanvas"], function(e) {
    function n(e) {
        if (typeof e == "object" && e !== null) {
            var r = e;
            if (e instanceof Array) {
                r = [];
                for (var i = 0, s = e.length; i < s; i++) r[i] = n(e[i])
            } else if (!t[Object.prototype.toString.call(e)]) {
                r = {};
                for (var o in e) e.hasOwnProperty(o) && (r[o] = n(e[o]))
            }
            return r
        }
        return e
    }

    function r(e, n, r, s) {
        if (n.hasOwnProperty(r))
            if (typeof e[r] == "object" && !t[Object.prototype.toString.call(e[r])]) i(e[r], n[r], s);
            else if (s || !(r in e)) e[r] = n[r]
    }

    function i(e, t, n) {
        for (var i in t) r(e, t, i, n);
        return e
    }

    function o() {
        if (!s) {
            e("../lib/excanvas");
            if (G_vmlCanvasManager) {
                var t = document.createElement("div");
                t.style.position = "absolute", t.style.top = "-1000px", document.body.appendChild(t), s = G_vmlCanvasManager.initElement(t).getContext("2d")
            } else s = document.createElement("canvas").getContext("2d")
        }
        return s
    }

    function p() {
        return a || (u = document.createElement("canvas"), f = u.width, l = u.height, a = u.getContext("2d")), a
    }

    function d(e, t) {
        var n = 100,
            r;
        e + c > f && (f = e + c + n, u.width = f, r = !0), t + h > l && (l = t + h + n, u.height = l, r = !0), e < -c && (c = Math.ceil(-e / n) * n, f += c, u.width = f, r = !0), t < -h && (h = Math.ceil(-t / n) * n, l += h, u.height = l, r = !0), r && a.translate(c, h)
    }

    function v() {
        return {
            x: c,
            y: h
        }
    }

    function m(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }

    function g(e, t) {
        function r() {}
        var n = e.prototype;
        r.prototype = t.prototype, e.prototype = new r;
        for (var i in n) e.prototype[i] = n[i];
        e.constructor = e
    }
    var t = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1
        },
        s, u, a, f, l, c = 0,
        h = 0;
    return {
        inherits: g,
        clone: n,
        merge: i,
        getContext: o,
        getPixelContext: p,
        getPixelOffset: v,
        adjustCanvasSize: d,
        indexOf: m
    }
}), define("zrender/tool/env", [], function() {
    function e(e) {
        var t = this.os = {},
            n = this.browser = {},
            r = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
            i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            s = e.match(/(iPad).*OS\s([\d_]+)/),
            o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !s && e.match(/(iPhone\sOS)\s([\d_]+)/),
            a = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
            f = a && e.match(/TouchPad/),
            l = e.match(/Kindle\/([\d.]+)/),
            c = e.match(/Silk\/([\d._]+)/),
            h = e.match(/(BlackBerry).*Version\/([\d.]+)/),
            p = e.match(/(BB10).*Version\/([\d.]+)/),
            d = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
            v = e.match(/PlayBook/),
            m = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
            g = e.match(/Firefox\/([\d.]+)/),
            y = e.match(/MSIE ([\d.]+)/),
            b = r && e.match(/Mobile\//) && !m,
            w = e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m,
            y = e.match(/MSIE\s([\d.]+)/);
        if (n.webkit = !!r) n.version = r[1];
        return i && (t.android = !0, t.version = i[2]), u && !o && (t.ios = t.iphone = !0, t.version = u[2].replace(/_/g, ".")), s && (t.ios = t.ipad = !0, t.version = s[2].replace(/_/g, ".")), o && (t.ios = t.ipod = !0, t.version = o[3] ? o[3].replace(/_/g, ".") : null), a && (t.webos = !0, t.version = a[2]), f && (t.touchpad = !0), h && (t.blackberry = !0, t.version = h[2]), p && (t.bb10 = !0, t.version = p[2]), d && (t.rimtabletos = !0, t.version = d[2]), v && (n.playbook = !0), l && (t.kindle = !0, t.version = l[1]), c && (n.silk = !0, n.version = c[1]), !c && t.android && e.match(/Kindle Fire/) && (n.silk = !0), m && (n.chrome = !0, n.version = m[1]), g && (n.firefox = !0, n.version = g[1]), y && (n.ie = !0, n.version = y[1]), b && (e.match(/Safari/) || !!t.ios) && (n.safari = !0), w && (n.webview = !0), y && (n.ie = !0, n.version = y[1]), t.tablet = !!(s || v || i && !e.match(/Mobile/) || g && e.match(/Tablet/) || y && !e.match(/Phone/) && e.match(/Touch/)), t.phone = !!(!t.tablet && !t.ipod && (i || u || a || h || p || m && e.match(/Android/) || m && e.match(/CriOS\/([\d.]+)/) || g && e.match(/Mobile/) || y && e.match(/Touch/))), {
            browser: n,
            os: t,
            canvasSupported: document.createElement("canvas").getContext ? !0 : !1
        }
    }
    return e(navigator.userAgent)
}), define("zrender/config", {
    EVENT: {
        RESIZE: "resize",
        CLICK: "click",
        MOUSEWHEEL: "mousewheel",
        MOUSEMOVE: "mousemove",
        MOUSEOVER: "mouseover",
        MOUSEOUT: "mouseout",
        MOUSEDOWN: "mousedown",
        MOUSEUP: "mouseup",
        GLOBALOUT: "globalout",
        DRAGSTART: "dragstart",
        DRAGEND: "dragend",
        DRAGENTER: "dragenter",
        DRAGOVER: "dragover",
        DRAGLEAVE: "dragleave",
        DROP: "drop",
        touchClickDelay: 300
    },
    catchBrushException: !1,
    debugMode: 0
}), define("zrender/tool/log", ["require", "../config"], function(e) {
    var t = e("../config");
    return function() {
        if (t.debugMode === 0) return;
        if (t.debugMode == 1)
            for (var e in arguments) throw new Error(arguments[e]);
        else if (t.debugMode > 1)
            for (var e in arguments) console.log(arguments[e])
    }
}), define("zrender/tool/guid", [], function() {
    var e = 2311;
    return function() {
        return "zrender__" + e++
    }
}), define("zrender/tool/event", [], function() {
    function e(e) {
        return typeof e.zrenderX != "undefined" && e.zrenderX || typeof e.offsetX != "undefined" && e.offsetX || typeof e.layerX != "undefined" && e.layerX || typeof e.clientX != "undefined" && e.clientX
    }

    function t(e) {
        return typeof e.zrenderY != "undefined" && e.zrenderY || typeof e.offsetY != "undefined" && e.offsetY || typeof e.layerY != "undefined" && e.layerY || typeof e.clientY != "undefined" && e.clientY
    }

    function n(e) {
        return typeof e.wheelDelta != "undefined" && e.wheelDelta || typeof e.detail != "undefined" && -e.detail
    }

    function i() {
        function n(n, r) {
            return !r || !n ? e : (t[n] || (t[n] = []), t[n].push({
                h: r,
                one: !0
            }), e)
        }

        function r(n, r) {
            return !r || !n ? e : (t[n] || (t[n] = []), t[n].push({
                h: r,
                one: !1
            }), e)
        }

        function i(n, r) {
            if (!n) return t = {}, e;
            if (r) {
                if (t[n]) {
                    var i = [];
                    for (var s = 0, o = t[n].length; s < o; s++) t[n][s]["h"] != r && i.push(t[n][s]);
                    t[n] = i
                }
                t[n] && t[n].length === 0 && delete t[n]
            } else delete t[n];
            return e
        }

        function s(n, r, i, s) {
            if (t[n]) {
                var o = [],
                    u = i || {};
                u.type = n, u.event = r;
                var a;
                for (var f = 0, l = t[n].length; f < l; f++) a = s || t[n][f].h, t[n][f].h.call(a, u), t[n][f].one || o.push(t[n][f]);
                o.length != t[n].length && (t[n] = o)
            }
            return e
        }
        var e = this,
            t = {};
        e.one = n, e.bind = r, e.unbind = i, e.dispatch = s
    }
    var r = window.Event && Event.prototype.preventDefault ? function(e) {
        e.preventDefault(), e.stopPropagation()
    } : function(e) {
        e.returnValue = !1, e.cancelBubble = !0
    };
    return {
        getX: e,
        getY: t,
        getDelta: n,
        stop: r,
        Dispatcher: i
    }
}), define("zrender/Handler", ["require", "./config", "./tool/env", "./tool/event"], function(e) {
    function u(e, t) {
        return function(n) {
            return e.call(t, n)
        }
    }

    function a(e) {
        var t = s.length;
        while (t--) {
            var n = s[t];
            e["_" + n + "Handler"] = u(o[n], e)
        }
    }

    function f(e, t, i) {
        r.Dispatcher.call(this), this.root = e, this.storage = t, this.painter = i, this._lastX = this._lastY = this._mouseX = this._mouseY = 0, this._findHover = u(c, this), this._domHover = i.getDomHover(), a(this), window.addEventListener ? (window.addEventListener("resize", this._resizeHandler), n.os.tablet || n.os.phone ? (e.addEventListener("touchstart", this._touchstartHandler), e.addEventListener("touchmove", this._touchmoveHandler), e.addEventListener("touchend", this._touchendHandler)) : (e.addEventListener("click", this._clickHandler), e.addEventListener("mousewheel", this._mousewheelHandler), e.addEventListener("mousemove", this._mousemoveHandler), e.addEventListener("mousedown", this._mousedownHandler), e.addEventListener("mouseup", this._mouseupHandler)), e.addEventListener("DOMMouseScroll", this._mousewheelHandler), e.addEventListener("mouseout", this._mouseoutHandler)) : (window.attachEvent("onresize", this._resizeHandler), e.attachEvent("onclick", this._clickHandler), e.attachEvent("onmousewheel", this._mousewheelHandler), e.attachEvent("onmousemove", this._mousemoveHandler), e.attachEvent("onmouseout", this._mouseoutHandler), e.attachEvent("onmousedown", this._mousedownHandler), e.attachEvent("onmouseup", this._mouseupHandler))
    }

    function c(e) {
        if (this._draggingTarget && this._draggingTarget.id == e.id || e.isSilent()) return !1;
        var t = this._event;
        return e.isCover(this._mouseX, this._mouseY) ? (e.hoverable && this.storage.addHover(e), this._lastHover != e && (this._processOutShape(t), this._processDragLeave(t), this._lastHover = e, this._processDragEnter(t)), this._processOverShape(t), this._processDragOver(t), this._hasfound = 1, !0) : !1
    }
    var t = e("./config"),
        n = e("./tool/env"),
        r = e("./tool/event"),
        i = t.EVENT,
        s = ["resize", "click", "mousewheel", "mousemove", "mouseout", "mouseup", "mousedown", "touchstart", "touchend", "touchmove"],
        o = {
            resize: function(e) {
                e = e || window.event, this._lastHover = null, this._isMouseDown = 0, this.dispatch(i.RESIZE, e)
            },
            click: function(e) {
                e = this._zrenderEventFixed(e);
                var t = this._lastHover;
                (t && t.clickable || !t) && this._dispatchAgency(t, i.CLICK, e), this._mousemoveHandler(e)
            },
            mousewheel: function(e) {
                e = this._zrenderEventFixed(e), this._dispatchAgency(this._lastHover, i.MOUSEWHEEL, e), this._mousemoveHandler(e)
            },
            mousemove: function(e) {
                if (this.painter.isLoading()) return;
                e = this._zrenderEventFixed(e), this._lastX = this._mouseX, this._lastY = this._mouseY, this._mouseX = r.getX(e), this._mouseY = r.getY(e), this._processDragStart(e), this._hasfound = 0, this._event = e, this.storage.iterShape(this._findHover, {
                    normal: "down"
                });
                if (!this._hasfound) {
                    if (!this._draggingTarget || this._lastHover && this._lastHover != this._draggingTarget) this._processOutShape(e), this._processDragLeave(e);
                    this._lastHover = null, this.storage.delHover(), this.painter.clearHover()
                }
                this._draggingTarget && (this.storage.drift(this._draggingTarget.id, this._mouseX - this._lastX, this._mouseY - this._lastY), this.storage.addHover(this._draggingTarget));
                var t = "default";
                this._draggingTarget || this._hasfound && this._lastHover.draggable ? t = "move" : this._hasfound && this._lastHover.clickable && (t = "pointer"), this.root.style.cursor = t, this._dispatchAgency(this._lastHover, i.MOUSEMOVE, e), (this._draggingTarget || this._hasfound || this.storage.hasHoverShape()) && this.painter.refreshHover()
            },
            mouseout: function(e) {
                e = this._zrenderEventFixed(e);
                var t = e.toElement || e.relatedTarget;
                if (t != this.root)
                    while (t && t.nodeType != 9) {
                        if (t == this.root) {
                            this._mousemoveHandler(e);
                            return
                        }
                        t = t.parentNode
                    }
                e.zrenderX = this._lastX, e.zrenderY = this._lastY, this.root.style.cursor = "default", this._isMouseDown = 0, this._processOutShape(e), this._processDrop(e), this._processDragEnd(e), this.painter.isLoading() || this.painter.refreshHover(), this.dispatch(i.GLOBALOUT, e)
            },
            mousedown: function(e) {
                if (this._lastDownButton == 2) {
                    this._lastDownButton = e.button, this._mouseDownTarget = null;
                    return
                }
                this._lastMouseDownMoment = new Date, e = this._zrenderEventFixed(e), this._isMouseDown = 1, this._mouseDownTarget = this._lastHover, this._dispatchAgency(this._lastHover, i.MOUSEDOWN, e), this._lastDownButton = e.button
            },
            mouseup: function(e) {
                e = this._zrenderEventFixed(e), this.root.style.cursor = "default", this._isMouseDown = 0, this._mouseDownTarget = null, this._dispatchAgency(this._lastHover, i.MOUSEUP, e), this._processDrop(e), this._processDragEnd(e)
            },
            touchstart: function(e) {
                e = this._zrenderEventFixed(e, !0), this._lastTouchMoment = new Date, this._mobildFindFixed(e), this._mousedownHandler(e)
            },
            touchmove: function(e) {
                e = this._zrenderEventFixed(e, !0), this._mousemoveHandler(e), this._isDragging && r.stop(e)
            },
            touchend: function(e) {
                e = this._zrenderEventFixed(e, !0), this._mouseupHandler(e), new Date - this._lastTouchMoment < i.touchClickDelay && (this._mobildFindFixed(e), this._clickHandler(e)), this.painter.clearHover()
            }
        };
    f.prototype.on = function(e, t) {
        return this.bind(e, t), this
    }, f.prototype.un = function(e, t) {
        return this.unbind(e, t), this
    }, f.prototype.trigger = function(e, t) {
        switch (e) {
            case i.RESIZE:
            case i.CLICK:
            case i.MOUSEWHEEL:
            case i.MOUSEMOVE:
            case i.MOUSEDOWN:
            case i.MOUSEUP:
            case i.MOUSEOUT:
                this["_" + e + "Handler"](t)
        }
    }, f.prototype.dispose = function() {
        var e = this.root;
        window.removeEventListener ? (window.removeEventListener("resize", this._resizeHandler), n.os.tablet || n.os.phone ? (e.removeEventListener("touchstart", this._touchstartHandler), e.removeEventListener("touchmove", this._touchmoveHandler), e.removeEventListener("touchend", this._touchendHandler)) : (e.removeEventListener("click", this._clickHandler), e.removeEventListener("mousewheel", this._mousewheelHandler), e.removeEventListener("mousemove", this._mousemoveHandler), e.removeEventListener("mousedown", this._mousedownHandler), e.removeEventListener("mouseup", this._mouseupHandler)), e.removeEventListener("DOMMouseScroll", this._mousewheelHandler), e.removeEventListener("mouseout", this._mouseoutHandler)) : (window.detachEvent("onresize", this._resizeHandler), e.detachEvent("onclick", this._clickHandler), e.detachEvent("onmousewheel", this._mousewheelHandler), e.detachEvent("onmousemove", this._mousemoveHandler), e.detachEvent("onmouseout", this._mouseoutHandler), e.detachEvent("onmousedown", this._mousedownHandler), e.detachEvent("onmouseup", this._mouseupHandler)), this.root = this._domHover = this.storage = this.painter = null, this.un()
    }, f.prototype._processDragStart = function(e) {
        var t = this._lastHover;
        if (this._isMouseDown && t && t.draggable && !this._draggingTarget && this._mouseDownTarget == t) {
            if (t.dragEnableTime && new Date - this._lastMouseDownMoment < t.dragEnableTime) return;
            var n = t;
            this._draggingTarget = n, this._isDragging = 1, n.invisible = !0, this.storage.mod(n.id, n), this._dispatchAgency(n, i.DRAGSTART, e), this.painter.refresh()
        }
    }, f.prototype._processDragEnter = function(e) {
        this._draggingTarget && this._dispatchAgency(this._lastHover, i.DRAGENTER, e, this._draggingTarget)
    }, f.prototype._processDragOver = function(e) {
        this._draggingTarget && this._dispatchAgency(this._lastHover, i.DRAGOVER, e, this._draggingTarget)
    }, f.prototype._processDragLeave = function(e) {
        this._draggingTarget && this._dispatchAgency(this._lastHover, i.DRAGLEAVE, e, this._draggingTarget)
    }, f.prototype._processDrop = function(e) {
        this._draggingTarget && (this._draggingTarget.invisible = !1, this.storage.mod(this._draggingTarget.id, this._draggingTarget), this.painter.refresh(), this._dispatchAgency(this._lastHover, i.DROP, e, this._draggingTarget))
    }, f.prototype._processDragEnd = function(e) {
        this._draggingTarget && (this._dispatchAgency(this._draggingTarget, i.DRAGEND, e), this._lastHover = null), this._isDragging = 0, this._draggingTarget = null
    }, f.prototype._processOverShape = function(e) {
        this._dispatchAgency(this._lastHover, i.MOUSEOVER, e)
    }, f.prototype._processOutShape = function(e) {
        this._dispatchAgency(this._lastHover, i.MOUSEOUT, e)
    }, f.prototype._dispatchAgency = function(e, t, n, r) {
        var i = "on" + t,
            s = {
                type: t,
                event: n,
                target: e
            };
        r && (s.dragged = r), e ? (!e[i] || !e[i](s)) && this.dispatch(t, n, s) : r || this.dispatch(t, n)
    };
    var l = [{
        x: 10
    }, {
        x: -20
    }, {
        x: 10,
        y: 10
    }, {
        y: -20
    }];
    return f.prototype._mobildFindFixed = function(e) {
        this._lastHover = null, this._mouseX = e.zrenderX, this._mouseY = e.zrenderY, this._event = e, this.storage.iterShape(this._findHover, {
            normal: "down"
        });
        for (var t = 0; !this._lastHover && t < l.length; t++) {
            var n = l[t];
            n.x && (this._mouseX += n.x), n.y && (this._mouseX += n.y), this.storage.iterShape(this._findHover, {
                normal: "down"
            })
        }
        this._lastHover && (e.zrenderX = this._mouseX, e.zrenderY = this._mouseY)
    }, f.prototype._zrenderEventFixed = function(e, t) {
        if (e.zrenderFixed) return e;
        if (!t) {
            e = e || window.event;
            var n = e.toElement || e.relatedTarget || e.srcElement || e.target;
            n && n != this._domHover && (e.zrenderX = (typeof e.offsetX != "undefined" ? e.offsetX : e.layerX) + n.offsetLeft, e.zrenderY = (typeof e.offsetY != "undefined" ? e.offsetY : e.layerY) + n.offsetTop)
        } else {
            var r = e.type != "touchend" ? e.targetTouches[0] : e.changedTouches[0];
            r && (e.zrenderX = r.clientX - this.root.offsetLeft + document.body.scrollLeft, e.zrenderY = r.clientY - this.root.offsetTop + document.body.scrollTop)
        }
        return e.zrenderFixed = 1, e
    }, f
}), define("zrender/tool/matrix", [], function() {
    var e = {
        create: function() {
            return [1, 0, 0, 1, 0, 0]
        },
        identity: function(e) {
            e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0
        },
        mul: function(e, t, n) {
            return e[0] = t[0] * n[0] + t[2] * n[1], e[1] = t[1] * n[0] + t[3] * n[1], e[2] = t[0] * n[2] + t[2] * n[3], e[3] = t[1] * n[2] + t[3] * n[3], e[4] = t[0] * n[4] + t[2] * n[5] + t[4], e[5] = t[1] * n[4] + t[3] * n[5] + t[5], e
        },
        translate: function(e, t, n) {
            return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + n[0], e[5] = t[5] + n[1], e
        },
        rotate: function(e, t, n) {
            var r = t[0],
                i = t[2],
                s = t[4],
                o = t[1],
                u = t[3],
                a = t[5],
                f = Math.sin(n),
                l = Math.cos(n);
            return e[0] = r * l + o * f, e[1] = -r * f + o * l, e[2] = i * l + u * f, e[3] = -i * f + l * u, e[4] = l * s + f * a, e[5] = l * a - f * s, e
        },
        scale: function(e, t, n) {
            var r = n[0],
                i = n[1];
            return e[0] = t[0] * r, e[1] = t[1] * i, e[2] = t[2] * r, e[3] = t[3] * i, e[4] = t[4] * r, e[5] = t[5] * i, e
        },
        invert: function(e, t) {
            var n = t[0],
                r = t[2],
                i = t[4],
                s = t[1],
                o = t[3],
                u = t[5],
                a = n * o - s * r;
            return a ? (a = 1 / a, e[0] = o * a, e[1] = -s * a, e[2] = -r * a, e[3] = n * a, e[4] = (r * u - o * i) * a, e[5] = (s * i - n * u) * a, e) : null
        },
        mulVector: function(e, t, n) {
            var r = t[0],
                i = t[2],
                s = t[4],
                o = t[1],
                u = t[3],
                a = t[5];
            return e[0] = n[0] * r + n[1] * i + s, e[1] = n[0] * o + n[1] * u + a, e
        }
    };
    return e
}), define("zrender/tool/color", ["require", "../tool/util"], function(e) {
    function f(e) {
        r = e
    }

    function l() {
        r = i
    }

    function c(e, t) {
        return e |= 0, t = t || r, t[e % t.length]
    }

    function h(e) {
        s = e
    }

    function p() {
        o = s
    }

    function d() {
        return s
    }

    function v(e, r, i, s, o, u, a) {
        n || (n = t.getContext());
        var f = n.createRadialGradient(e, r, i, s, o, u);
        for (var l = 0, c = a.length; l < c; l++) f.addColorStop(a[l][0], a[l][1]);
        return f.__nonRecursion = !0, f
    }

    function m(e, r, i, s, o) {
        n || (n = t.getContext());
        var u = n.createLinearGradient(e, r, i, s);
        for (var a = 0, f = o.length; a < f; a++) u.addColorStop(o[a][0], o[a][1]);
        return u.__nonRecursion = !0, u
    }

    function g(e, t, n) {
        e = S(e), t = S(t), e = F(e), t = F(t);
        var r = [],
            i = (t[0] - e[0]) / n,
            s = (t[1] - e[1]) / n,
            o = (t[2] - e[2]) / n;
        for (var u = 0, a = e[0], f = e[1], l = e[2]; u < n; u++) r[u] = b([R(Math.floor(a), [0, 255]), R(Math.floor(f), [0, 255]), R(Math.floor(l), [0, 255])]), a += i, f += s, l += o;
        return a = t[0], f = t[1], l = t[2], r[u] = b([a, f, l]), r
    }

    function y(e, t) {
        var n = [],
            r = e.length;
        t === undefined && (t = 20);
        if (r === 1) n = g(e[0], e[0], t);
        else if (r > 1)
            for (var i = 0, s = r - 1; i < s; i++) {
                var o = g(e[i], e[i + 1], t);
                i < s - 1 && o.pop(), n = n.concat(o)
            }
        return n
    }

    function b(e, t) {
        t = t || "rgb";
        if (e && (e.length === 3 || e.length === 4)) {
            e = q(e, function(e) {
                return e > 1 ? Math.ceil(e) : e
            });
            if (t.indexOf("hex") > -1) return "#" + ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1);
            if (t.indexOf("hs") > -1) {
                var n = q(e.slice(1, 3), function(e) {
                    return e + "%"
                });
                e[1] = n[0], e[2] = n[1]
            }
            return t.indexOf("a") > -1 ? (e.length === 3 && e.push(1), e[3] = R(e[3], [0, 1]), t + "(" + e.slice(0, 4).join(",") + ")") : t + "(" + e.slice(0, 3).join(",") + ")"
        }
    }

    function w(e) {
        e = _(e), e.indexOf("rgba") < 0 && (e = S(e));
        var t = [],
            n = 0;
        return e.replace(/[\d.]+/g, function(e) {
            n < 3 ? e |= 0 : e = +e, t[n++] = e
        }), t
    }

    function E(e, t) {
        var n = F(e),
            r = n[3];
        return typeof r == "undefined" && (r = 1), e.indexOf("hsb") > -1 ? n = U(n) : e.indexOf("hsl") > -1 && (n = z(n)), t.indexOf("hsb") > -1 || t.indexOf("hsv") > -1 ? n = X(n) : t.indexOf("hsl") > -1 && (n = V(n)), n[3] = r, b(n, t)
    }

    function S(e) {
        return E(e, "rgba")
    }

    function x(e) {
        return E(e, "rgb")
    }

    function T(e) {
        return E(e, "hex")
    }

    function N(e) {
        return E(e, "hsva")
    }

    function C(e) {
        return E(e, "hsv")
    }

    function k(e) {
        return E(e, "hsba")
    }

    function L(e) {
        return E(e, "hsb")
    }

    function A(e) {
        return E(e, "hsla")
    }

    function O(e) {
        return E(e, "hsl")
    }

    function M(e) {
        for (var t in a)
            if (T(a[t]) === T(e)) return t;
        return null
    }

    function _(e) {
        return String(e).replace(/\s+/g, "")
    }

    function D(e) {
        a[e] && (e = a[e]), e = _(e), e = e.replace(/hsv/i, "hsb");
        if (/^#[\da-f]{3}$/i.test(e)) {
            e = parseInt(e.slice(1), 16);
            var t = (e & 3840) << 8,
                n = (e & 240) << 4,
                r = e & 15;
            e = "#" + ((1 << 24) + (t << 4) + t + (n << 4) + n + (r << 4) + r).toString(16).slice(1)
        }
        return e
    }

    function P(e, t) {
        var n = t > 0 ? 1 : -1;
        typeof t == "undefined" && (t = 0), t = Math.abs(t) > 1 ? 1 : Math.abs(t), e = x(e);
        var r = F(e);
        for (var i = 0; i < 3; i++) n === 1 ? r[i] = r[i] * (1 - t) | 0 : r[i] = (255 - r[i]) * t + r[i] | 0;
        return "rgb(" + r.join(",") + ")"
    }

    function H(e) {
        var t = F(S(e));
        return t = q(t, function(e) {
            return 255 - e
        }), b(t, "rgb")
    }

    function B(e, t, n) {
        typeof n == "undefined" && (n = .5), n = 1 - R(n, [0, 1]);
        var r = n * 2 - 1,
            i = F(S(e)),
            s = F(S(t)),
            o = i[3] - s[3],
            u = ((r * o === -1 ? r : (r + o) / (1 + r * o)) + 1) / 2,
            a = 1 - u,
            f = [];
        for (var l = 0; l < 3; l++) f[l] = i[l] * u + s[l] * a;
        var c = i[3] * n + s[3] * (1 - n);
        return c = Math.max(0, Math.min(1, c)), i[3] === 1 && s[3] === 1 ? b(f, "rgb") : (f[3] = c, b(f, "rgba"))
    }

    function j() {
        return "#" + Math.random().toString(16).slice(2, 8)
    }

    function F(e) {
        e = D(e);
        var t = e.match(u);
        if (t === null) throw new Error("The color format error");
        var n, r, i = [],
            s;
        if (t[2]) n = t[2].replace("#", "").split(""), s = [n[0] + n[1], n[2] + n[3], n[4] + n[5]], i = q(s, function(e) {
            return R(parseInt(e, 16), [0, 255])
        });
        else if (t[4]) {
            var o = t[4].split(",");
            r = o[3], s = o.slice(0, 3), i = q(s, function(e) {
                return e = Math.floor(e.indexOf("%") > 0 ? parseInt(e, 0) * 2.55 : e), R(e, [0, 255])
            }), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
        } else if (t[5] || t[6]) {
            var a = (t[5] || t[6]).split(","),
                f = parseInt(a[0], 0) / 360,
                l = a[1],
                c = a[2];
            r = a[3], i = q([l, c], function(e) {
                return R(parseFloat(e) / 100, [0, 1])
            }), i.unshift(f), typeof r != "undefined" && i.push(R(parseFloat(r), [0, 1]))
        }
        return i
    }

    function I(e, t) {
        t === null && (t = 1);
        var n = F(S(e));
        return n[3] = R(Number(t).toFixed(4), [0, 1]), b(n, "rgba")
    }

    function q(e, t) {
        if (typeof t != "function") throw new TypeError;
        var n = e ? e.length : 0;
        for (var r = 0; r < n; r++) e[r] = t(e[r]);
        return e
    }

    function R(e, t) {
        return e <= t[0] ? e = t[0] : e >= t[1] && (e = t[1]), e
    }

    function U(e) {
        var t = e[0],
            n = e[1],
            r = e[2],
            i, s, o;
        if (n === 0) i = r * 255, s = r * 255, o = r * 255;
        else {
            var u = t * 6;
            u === 6 && (u = 0);
            var a = u | 0,
                f = r * (1 - n),
                l = r * (1 - n * (u - a)),
                c = r * (1 - n * (1 - (u - a))),
                h = 0,
                p = 0,
                d = 0;
            a === 0 ? (h = r, p = c, d = f) : a === 1 ? (h = l, p = r, d = f) : a === 2 ? (h = f, p = r, d = c) : a === 3 ? (h = f, p = l, d = r) : a === 4 ? (h = c, p = f, d = r) : (h = r, p = f, d = l), i = h * 255, s = p * 255, o = d * 255
        }
        return [i, s, o]
    }

    function z(e) {
        var t = e[0],
            n = e[1],
            r = e[2],
            i, s, o;
        if (n === 0) i = r * 255, s = r * 255, o = r * 255;
        else {
            var u;
            r < .5 ? u = r * (1 + n) : u = r + n - n * r;
            var a = 2 * r - u;
            i = 255 * W(a, u, t + 1 / 3), s = 255 * W(a, u, t), o = 255 * W(a, u, t - 1 / 3)
        }
        return [i, s, o]
    }

    function W(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + (t - e) * 6 * n : 2 * n < 1 ? t : 3 * n < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }

    function X(e) {
        var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255,
            i = Math.min(t, n, r),
            s = Math.max(t, n, r),
            o = s - i,
            u = s,
            a, f;
        if (o === 0) a = 0, f = 0;
        else {
            f = o / s;
            var l = ((s - t) / 6 + o / 2) / o,
                c = ((s - n) / 6 + o / 2) / o,
                h = ((s - r) / 6 + o / 2) / o;
            t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
        }
        return a *= 360, f *= 100, u *= 100, [a, f, u]
    }

    function V(e) {
        var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255,
            i = Math.min(t, n, r),
            s = Math.max(t, n, r),
            o = s - i,
            u = (s + i) / 2,
            a, f;
        if (o === 0) a = 0, f = 0;
        else {
            u < .5 ? f = o / (s + i) : f = o / (2 - s - i);
            var l = ((s - t) / 6 + o / 2) / o,
                c = ((s - n) / 6 + o / 2) / o,
                h = ((s - r) / 6 + o / 2) / o;
            t === s ? a = h - c : n === s ? a = 1 / 3 + l - h : r === s && (a = 2 / 3 + c - l), a < 0 && (a += 1), a > 1 && (a -= 1)
        }
        return a *= 360, f *= 100, u *= 100, [a, f, u]
    }
    var t = e("../tool/util"),
        n, r = ["#ff9277", " #dddd00", " #ffc877", " #bbe3ff", " #d5ffbb", "#bbbbff", " #ddb000", " #b0dd00", " #e2bbff", " #ffbbe3", "#ff7777", " #ff9900", " #83dd00", " #77e3ff", " #778fff", "#c877ff", " #ff77ab", " #ff6600", " #aa8800", " #77c7ff", "#ad77ff", " #ff77ff", " #dd0083", " #777700", " #00aa00", "#0088aa", " #8400dd", " #aa0088", " #dd0000", " #772e00"],
        i = r,
        s = "rgba(255,255,0,0.5)",
        o = s,
        u = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        a = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#0ff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000",
            blanchedalmond: "#ffebcd",
            blue: "#00f",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#0ff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgrey: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#f0f",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            grey: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#789",
            lightslategrey: "#789",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#0f0",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#f0f",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#f00",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#fff",
            whitesmoke: "#f5f5f5",
            yellow: "#ff0",
            yellowgreen: "#9acd32"
        };
    return {
        customPalette: f,
        resetPalette: l,
        getColor: c,
        getHighlightColor: d,
        customHighlight: h,
        resetHighlight: p,
        getRadialGradient: v,
        getLinearGradient: m,
        getGradientColors: y,
        getStepColors: g,
        reverse: H,
        mix: B,
        lift: P,
        trim: _,
        random: j,
        toRGB: x,
        toRGBA: S,
        toHex: T,
        toHSL: O,
        toHSLA: A,
        toHSB: L,
        toHSBA: k,
        toHSV: C,
        toHSVA: N,
        toName: M,
        toColor: b,
        toArray: w,
        alpha: I,
        getData: F
    }
}), define("zrender/shape/Base", ["require", "../tool/matrix", "../tool/guid", "../tool/area", "../tool/area", "../tool/color", "../tool/area"], function(e) {
    function r(t, n, r, s, o, u, a) {
        o && (t.font = o), t.textAlign = u, t.textBaseline = a;
        var f = i(n, r, s, o, u, a);
        n = (n + "").split("\n");
        var l = e("../tool/area").getTextHeight("国", o);
        switch (a) {
            case "top":
                s = f.y;
                break;
            case "bottom":
                s = f.y + l;
                break;
            default:
                s = f.y + l / 2
        }
        for (var c = 0, h = n.length; c < h; c++) t.fillText(n[c], r, s), s += l
    }

    function i(t, n, r, i, s, o) {
        var u = e("../tool/area"),
            a = u.getTextWidth(t, i),
            f = u.getTextHeight("国", i);
        t = (t + "").split("\n");
        switch (s) {
            case "end":
            case "right":
                n -= a;
                break;
            case "center":
                n -= a / 2
        }
        switch (o) {
            case "top":
                break;
            case "bottom":
                r -= f * t.length;
                break;
            default:
                r -= f * t.length / 2
        }
        return {
            x: n,
            y: r,
            width: a,
            height: f * t.length
        }
    }

    function s(e) {
        this.id = e.id || n(), this.zlevel = 0, this.draggable = !1, this.clickable = !1, this.hoverable = !0, this.position = [0, 0], this.rotation = [0, 0, 0], this.scale = [1, 1, 0, 0];
        for (var t in e) this[t] = e[t];
        this.style = this.style || {}
    }
    var t = e("../tool/matrix"),
        n = e("../tool/guid");
    s.prototype.brush = function(e, t) {
        var n = this.style;
        this.brushTypeOnly && (n.brushType = this.brushTypeOnly), t && (n = this.getHighlightStyle(n, this.highlightStyle || {}, this.brushTypeOnly)), this.brushTypeOnly == "stroke" && (n.strokeColor = n.strokeColor || n.color), e.save(), this.setContext(e, n), this.updateTransform(e), e.beginPath(), this.buildPath(e, n), this.brushTypeOnly != "stroke" && e.closePath();
        switch (n.brushType) {
            case "both":
                e.fill();
            case "stroke":
                n.lineWidth > 0 && e.stroke();
                break;
            default:
                e.fill()
        }
        n.text && this.drawText(e, n, this.style), e.restore()
    };
    var o = [
        ["color", "fillStyle"],
        ["strokeColor", "strokeStyle"],
        ["opacity", "globalAlpha"],
        ["lineCap"],
        ["lineJoin"],
        ["miterLimit"],
        ["lineWidth"],
        ["shadowBlur"],
        ["shadowColor"],
        ["shadowOffsetX"],
        ["shadowOffsetY"]
    ];
    return s.prototype.setContext = function(e, t) {
        for (var n = 0, r = o.length; n < r; n++) {
            var i = o[n][0],
                s = t[i],
                u = o[n][1] || i;
            typeof s != "undefined" && (e[u] = s)
        }
    }, s.prototype.getHighlightStyle = function(t, n, r) {
        var i = {};
        for (var s in t) i[s] = t[s];
        var o = e("../tool/color"),
            u = o.getHighlightColor();
        t.brushType != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom(), i.brushType = "both") : r != "stroke" ? (i.strokeColor = u, i.lineWidth = (t.lineWidth || 1) + this.getHighlightZoom()) : i.strokeColor = n.strokeColor || o.mix(t.strokeColor, o.toRGB(u));
        for (var s in n) typeof n[s] != "undefined" && (i[s] = n[s]);
        return i
    }, s.prototype.updateNeedTransform = function() {
        this.needTransform = Math.abs(this.rotation[0]) > 1e-4 || Math.abs(this.position[0]) > 1e-4 || Math.abs(this.position[1]) > 1e-4 || Math.abs(this.scale[0] - 1) > 1e-4 || Math.abs(this.scale[1] - 1) > 1e-4
    }, s.prototype.getHighlightZoom = function() {
        return this.type != "text" ? 6 : 2
    }, s.prototype.drift = function(e, t) {
        this.position[0] += e, this.position[1] += t
    }, s.prototype.getTansform = function(e, n) {
        var r = [e, n];
        if (this.needTransform && this._transform) {
            var i = [];
            t.invert(i, this._transform), t.mulVector(r, i, [e, n, 1]), e == r[0] && n == r[1] && this.updateNeedTransform()
        }
        return r
    }, s.prototype.isCover = function(t, n) {
        var r = this.getTansform(t, n);
        t = r[0], n = r[1];
        var i = this.style.__rect;
        return i || (i = this.style.__rect = this.getRect(this.style)), t >= i.x && t <= i.x + i.width && n >= i.y && n <= i.y + i.height ? e("../tool/area").isInside(this, this.style, t, n) : !1
    }, s.prototype.drawText = function(e, t, n) {
        var i = t.textColor || t.color || t.strokeColor;
        e.fillStyle = i;
        var s = 10,
            o, u, a, f, l = t.textPosition || this.textPosition || "top";
        switch (l) {
            case "inside":
            case "top":
            case "bottom":
            case "left":
            case "right":
                if (this.getRect) {
                    var c = (n || t).__rect || this.getRect(n || t);
                    switch (l) {
                        case "inside":
                            a = c.x + c.width / 2, f = c.y + c.height / 2, o = "center", u = "middle", t.brushType != "stroke" && i == t.color && (e.fillStyle = "#fff");
                            break;
                        case "left":
                            a = c.x - s, f = c.y + c.height / 2, o = "end", u = "middle";
                            break;
                        case "right":
                            a = c.x + c.width + s, f = c.y + c.height / 2, o = "start", u = "middle";
                            break;
                        case "top":
                            a = c.x + c.width / 2, f = c.y - s, o = "center", u = "bottom";
                            break;
                        case "bottom":
                            a = c.x + c.width / 2, f = c.y + c.height + s, o = "center", u = "top"
                    }
                }
                break;
            case "start":
            case "end":
                var h, p, d, v;
                if (typeof t.pointList != "undefined") {
                    var m = t.pointList;
                    if (m.length < 2) return;
                    var g = m.length;
                    switch (l) {
                        case "start":
                            h = m[0][0], p = m[1][0], d = m[0][1], v = m[1][1];
                            break;
                        case "end":
                            h = m[g - 2][0], p = m[g - 1][0], d = m[g - 2][1], v = m[g - 1][1]
                    }
                } else h = t.xStart || 0, p = t.xEnd || 0, d = t.yStart || 0, v = t.yEnd || 0;
                switch (l) {
                    case "start":
                        o = h < p ? "end" : "start", u = d < v ? "bottom" : "top", a = h, f = d;
                        break;
                    case "end":
                        o = h < p ? "start" : "end", u = d < v ? "top" : "bottom", a = p, f = v
                }
                s -= 4, h != p ? a -= o == "end" ? s : -s : o = "center", d != v ? f -= u == "bottom" ? s : -s : u = "middle";
                break;
            case "specific":
                a = t.textX || 0, f = t.textY || 0, o = "start", u = "middle"
        }
        a != null && f != null && r(e, t.text, a, f, t.textFont, t.textAlign || o, t.textBaseline || u)
    }, s.prototype.isSilent = function() {
        return !(this.hoverable || this.draggable || this.onmousemove || this.onmouseover || this.onmouseout || this.onmousedown || this.onmouseup || this.onclick || this.ondragenter || this.ondragover || this.ondragleave || this.ondrop)
    }, s.prototype.updateTransform = function(e) {
        if (!this.needTransform) return;
        var n = this._transform || t.create();
        t.identity(n);
        if (this.scale && (this.scale[0] !== 1 || this.scale[1] !== 1)) {
            var r = this.scale[2] || 0,
                i = this.scale[3] || 0;
            (r || i) && t.translate(n, n, [-r, -i]), t.scale(n, n, this.scale), (r || i) && t.translate(n, n, [r, i])
        }
        if (this.rotation)
            if (this.rotation instanceof Array) {
                if (this.rotation[0] !== 0) {
                    var r = this.rotation[1] || 0,
                        i = this.rotation[2] || 0;
                    (r || i) && t.translate(n, n, [-r, -i]), t.rotate(n, n, this.rotation[0]), (r || i) && t.translate(n, n, [r, i])
                }
            } else this.rotation !== 0 && t.rotate(n, n, this.rotation);
        this.position && (this.position[0] !== 0 || this.position[1] !== 0) && t.translate(n, n, this.position), this._transform = n, e.transform.apply(e, n)
    }, s
}), define("zrender/shape/Path", ["require", "./Base", "../tool/util"], function(e) {
    function n(e) {
        t.call(this, e)
    }
    var t = e("./Base");
    return n.prototype = {
        type: "path",
        _parsePathData: function(e) {
            if (!e) return [];
            var t = e,
                n = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
            t = t.replace(/-/g, " -"), t = t.replace(/  /g, " "), t = t.replace(/ /g, ","), t = t.replace(/,,/g, ",");
            var r;
            for (r = 0; r < n.length; r++) t = t.replace(new RegExp(n[r], "g"), "|" + n[r]);
            var i = t.split("|"),
                s = [],
                o = 0,
                u = 0;
            for (r = 1; r < i.length; r++) {
                var a = i[r],
                    f = a.charAt(0);
                a = a.slice(1), a = a.replace(new RegExp("e,-", "g"), "e-");
                var l = a.split(",");
                l.length > 0 && l[0] === "" && l.shift();
                for (var c = 0; c < l.length; c++) l[c] = parseFloat(l[c]);
                while (l.length > 0) {
                    if (isNaN(l[0])) break;
                    var h = null,
                        p = [],
                        d, v, m, g, y, b, w, E, S = o,
                        x = u;
                    switch (f) {
                        case "l":
                            o += l.shift(), u += l.shift(), h = "L", p.push(o, u);
                            break;
                        case "L":
                            o = l.shift(), u = l.shift(), p.push(o, u);
                            break;
                        case "m":
                            o += l.shift(), u += l.shift(), h = "M", p.push(o, u), f = "l";
                            break;
                        case "M":
                            o = l.shift(), u = l.shift(), h = "M", p.push(o, u), f = "L";
                            break;
                        case "h":
                            o += l.shift(), h = "L", p.push(o, u);
                            break;
                        case "H":
                            o = l.shift(), h = "L", p.push(o, u);
                            break;
                        case "v":
                            u += l.shift(), h = "L", p.push(o, u);
                            break;
                        case "V":
                            u = l.shift(), h = "L", p.push(o, u);
                            break;
                        case "C":
                            p.push(l.shift(), l.shift(), l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
                            break;
                        case "c":
                            p.push(o + l.shift(), u + l.shift(), o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
                            break;
                        case "S":
                            d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, l.shift(), l.shift()), o = l.shift(), u = l.shift(), h = "C", p.push(o, u);
                            break;
                        case "s":
                            d = o, v = u, m = s[s.length - 1], m.command === "C" && (d = o + (o - m.points[2]), v = u + (u - m.points[3])), p.push(d, v, o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "C", p.push(o, u);
                            break;
                        case "Q":
                            p.push(l.shift(), l.shift()), o = l.shift(), u = l.shift(), p.push(o, u);
                            break;
                        case "q":
                            p.push(o + l.shift(), u + l.shift()), o += l.shift(), u += l.shift(), h = "Q", p.push(o, u);
                            break;
                        case "T":
                            d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o = l.shift(), u = l.shift(), h = "Q", p.push(d, v, o, u);
                            break;
                        case "t":
                            d = o, v = u, m = s[s.length - 1], m.command === "Q" && (d = o + (o - m.points[0]), v = u + (u - m.points[1])), o += l.shift(), u += l.shift(), h = "Q", p.push(d, v, o, u);
                            break;
                        case "A":
                            g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o = l.shift(), u = l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b);
                            break;
                        case "a":
                            g = l.shift(), y = l.shift(), b = l.shift(), w = l.shift(), E = l.shift(), S = o, x = u, o += l.shift(), u += l.shift(), h = "A", p = this._convertPoint(S, x, o, u, w, E, g, y, b)
                    }
                    s.push({
                        command: h || f,
                        points: p
                    })
                }(f === "z" || f === "Z") && s.push({
                    command: "z",
                    points: []
                })
            }
            return s
        },
        _convertPoint: function(e, t, n, r, i, s, o, u, a) {
            var f = a * (Math.PI / 180),
                l = Math.cos(f) * (e - n) / 2 + Math.sin(f) * (t - r) / 2,
                c = -1 * Math.sin(f) * (e - n) / 2 + Math.cos(f) * (t - r) / 2,
                h = l * l / (o * o) + c * c / (u * u);
            h > 1 && (o *= Math.sqrt(h), u *= Math.sqrt(h));
            var p = Math.sqrt((o * o * u * u - o * o * c * c - u * u * l * l) / (o * o * c * c + u * u * l * l));
            i === s && (p *= -1), isNaN(p) && (p = 0);
            var d = p * o * c / u,
                v = p * -u * l / o,
                m = (e + n) / 2 + Math.cos(f) * d - Math.sin(f) * v,
                g = (t + r) / 2 + Math.sin(f) * d + Math.cos(f) * v,
                y = function(e) {
                    return Math.sqrt(e[0] * e[0] + e[1] * e[1])
                },
                b = function(e, t) {
                    return (e[0] * t[0] + e[1] * t[1]) / (y(e) * y(t))
                },
                w = function(e, t) {
                    return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(b(e, t))
                },
                E = w([1, 0], [(l - d) / o, (c - v) / u]),
                S = [(l - d) / o, (c - v) / u],
                x = [(-1 * l - d) / o, (-1 * c - v) / u],
                T = w(S, x);
            return b(S, x) <= -1 && (T = Math.PI), b(S, x) >= 1 && (T = 0), s === 0 && T > 0 && (T -= 2 * Math.PI), s === 1 && T < 0 && (T += 2 * Math.PI), [m, g, o, u, E, T, f, s]
        },
        buildPath: function(e, t) {
            var n = t.path,
                r = this.pathArray || this._parsePathData(n),
                i = t.x || 0,
                s = t.y || 0,
                o, u = t.pointList = [],
                a = [];
            for (var f = 0, l = r.length; f < l; f++) {
                r[f].command.toUpperCase() == "M" && (a.length > 0 && u.push(a), a = []), o = r[f].points;
                for (var c = 0, h = o.length; c < h; c += 2) a.push([o[c] + i, o[c + 1] + s])
            }
            a.length > 0 && u.push(a);
            var p;
            for (var f = 0, l = r.length; f < l; f++) {
                p = r[f].command, o = r[f].points;
                for (var c = 0, h = o.length; c < h; c++) c % 2 === 0 ? o[c] += i : o[c] += s;
                switch (p) {
                    case "L":
                        e.lineTo(o[0], o[1]);
                        break;
                    case "M":
                        e.moveTo(o[0], o[1]);
                        break;
                    case "C":
                        e.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
                        break;
                    case "Q":
                        e.quadraticCurveTo(o[0], o[1], o[2], o[3]);
                        break;
                    case "A":
                        var d = o[0],
                            v = o[1],
                            m = o[2],
                            g = o[3],
                            y = o[4],
                            b = o[5],
                            w = o[6],
                            E = o[7],
                            S = m > g ? m : g,
                            x = m > g ? 1 : m / g,
                            T = m > g ? g / m : 1;
                        e.translate(d, v), e.rotate(w), e.scale(x, T), e.arc(0, 0, S, y, y + b, 1 - E), e.scale(1 / x, 1 / T), e.rotate(-w), e.translate(-d, -v);
                        break;
                    case "z":
                        e.closePath()
                }
            }
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t;
            e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0;
            var n = Number.MAX_VALUE,
                r = Number.MIN_VALUE,
                i = Number.MAX_VALUE,
                s = Number.MIN_VALUE,
                o = e.x || 0,
                u = e.y || 0,
                a = this.pathArray || this._parsePathData(e.path);
            for (var f = 0; f < a.length; f++) {
                var l = a[f].points;
                for (var c = 0; c < l.length; c++) c % 2 === 0 ? (l[c] + o < n && (n = l[c] + o), l[c] + o > r && (r = l[c] + o)) : (l[c] + u < i && (i = l[c] + u), l[c] + u > s && (s = l[c] + u))
            }
            var h;
            return n === Number.MAX_VALUE || r === Number.MIN_VALUE || i === Number.MAX_VALUE || s === Number.MIN_VALUE ? h = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            } : h = {
                x: Math.round(n - t / 2),
                y: Math.round(i - t / 2),
                width: r - n + t,
                height: s - i + t
            }, e.__rect = h, h
        }
    }, e("../tool/util").inherits(n, t), n
}), define("zrender/tool/area", ["require", "../tool/util", "../shape/Path"], function(e) {
    function a(e, r, i, s) {
        if (!r || !e) return !1;
        var o = e.type;
        n = n || t.getContext();
        if (!g(r.__rect || e.getRect(r), i, s)) return !1;
        var u = f(o, r, i, s);
        if (typeof u != "undefined") return u;
        if (o != "bezier-curve" && e.buildPath && n.isPointInPath) return l(e, n, r, i, s);
        if (n.getImageData) return c(e, r, i, s);
        switch (o) {
            case "heart":
            case "droplet":
            case "ellipse":
                return !0;
            case "trochoid":
                var a = r.location == "out" ? r.r1 + r.r2 + r.d : r.r1 - r.r2 + r.d;
                return y(r, i, s, a);
            case "rose":
                return y(r, i, s, r.maxr);
            default:
                return !1
        }
    }

    function f(e, t, n, r) {
        switch (e) {
            case "line":
                return d(t, n, r);
            case "broken-line":
                return v(t, n, r);
            case "text":
                return !0;
            case "ring":
                return m(t, n, r);
            case "rectangle":
                return !0;
            case "circle":
                return y(t, n, r, t.r);
            case "sector":
                return b(t, n, r);
            case "path":
                return E(t, n, r);
            case "polygon":
            case "star":
            case "isogon":
                return w(t, n, r);
            case "image":
                return !0
        }
    }

    function l(e, t, n, r, i) {
        return t.beginPath(), e.buildPath(t, n), t.closePath(), t.isPointInPath(r, i)
    }

    function c(e, n, r, i) {
        var s = n.__rect || e.getRect(n),
            o = t.getPixelContext(),
            u = t.getPixelOffset();
        return t.adjustCanvasSize(r, i), o.clearRect(s.x, s.y, s.width, s.height), o.beginPath(), e.brush(o, {
            style: n
        }), o.closePath(), h(o, r + u.x, i + u.y)
    }

    function h(e, t, n, r) {
        var i;
        typeof r != "undefined" ? (r = (r || 1) >> 1, i = e.getImageData(t - r, n - r, r + r, r + r).data) : i = e.getImageData(t, n, 1, 1).data;
        var s = i.length;
        while (s--)
            if (i[s] !== 0) return !0;
        return !1
    }

    function p(e, t, n, r) {
        return !a(e, t, n, r)
    }

    function d(e, t, n) {
        var r = e.xStart,
            i = e.yStart,
            s = e.xEnd,
            o = e.yEnd,
            u = Math.max(e.lineWidth, 5),
            a = 0,
            f = r,
            l, c;
        r < s ? (l = r - u, c = s + u) : (l = s - u, c = r + u);
        var h, p;
        i < o ? (h = i - u, p = o + u) : (h = o - u, p = i + u);
        if (t < l || t > c || n < h || n > p) return !1;
        if (r === s) return Math.abs(t - r) <= u / 2;
        a = (i - o) / (r - s), f = (r * o - s * i) / (r - s);
        var d = (a * t - n + f) * (a * t - n + f) / (a * a + 1);
        return d <= u / 2 * u / 2
    }

    function v(e, t, n) {
        var r = e.pointList,
            i = {
                xStart: 0,
                yStart: 0,
                xEnd: 0,
                yEnd: 0,
                lineWidth: 0
            };
        for (var s = 0, o = r.length - 1; s < o; s++) {
            i.xStart = r[s][0], i.yStart = r[s][1], i.xEnd = r[s + 1][0], i.yEnd = r[s + 1][1], i.lineWidth = Math.max(e.lineWidth, 10);
            if (d(i, t, n)) return !0
        }
        return !1
    }

    function m(e, t, n) {
        return y(e, t, n, e.r) && !y({
            x: e.x,
            y: e.y
        }, t, n, e.r0 || 0)
    }

    function g(e, t, n) {
        return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
    }

    function y(e, t, n, r) {
        return (t - e.x) * (t - e.x) + (n - e.y) * (n - e.y) < r * r
    }

    function b(e, t, n) {
        if (!y(e, t, n, e.r) || e.r0 > 0 && y({
                x: e.x,
                y: e.y
            }, t, n, e.r0)) return !1;
        if (Math.abs(e.endAngle - e.startAngle) >= 360) return !0;
        var r = (360 - Math.atan2(n - e.y, t - e.x) / Math.PI * 180) % 360,
            i = (360 + e.endAngle) % 360,
            s = (360 + e.startAngle) % 360;
        return i > s ? r >= s && r <= i : !(r >= i && r <= s)
    }

    function w(e, t, n) {
        var r, i, s = e.pointList,
            o = s.length,
            u = !1,
            a = !0,
            f;
        for (r = 0; r < o; ++r)
            if (s[r][0] == t && s[r][1] == n) {
                a = !1, u = !0;
                break
            }
        if (a) {
            a = !1, u = !1;
            for (r = 0, i = o - 1; r < o; i = r++)
                if (s[r][1] < n && n < s[i][1] || s[i][1] < n && n < s[r][1]) {
                    if (t <= s[r][0] || t <= s[i][0]) {
                        f = (n - s[r][1]) * (s[i][0] - s[r][0]) / (s[i][1] - s[r][1]) + s[r][0];
                        if (t < f) u = !u;
                        else if (t == f) {
                            u = !0;
                            break
                        }
                    }
                } else if (n == s[r][1]) {
                if (t < s[r][0]) {
                    s[r][1] > s[i][1] ? --n : ++n;
                    break
                }
            } else if (s[r][1] == s[i][1] && n == s[r][1] && (s[r][0] < t && t < s[i][0] || s[i][0] < t && t < s[r][0])) {
                u = !0;
                break
            }
        }
        return u
    }

    function E(t, r, i) {
        t.pointList || e("../shape/Path").prototype.buildPath(n, t);
        var s = t.pointList,
            o = !1;
        for (var u = 0, a = s.length; u < a; u++) {
            o = w({
                pointList: s[u]
            }, r, i);
            if (o) break
        }
        return o
    }

    function S(e, i) {
        var o = e + ":" + i;
        if (r[o]) return r[o];
        n = n || t.getContext(), n.save(), i && (n.font = i), e = (e + "").split("\n");
        var a = 0;
        for (var f = 0, l = e.length; f < l; f++) a = Math.max(n.measureText(e[f]).width, a);
        return n.restore(), r[o] = a, ++s > u && (s = 0, r = {}), a
    }

    function x(e, r) {
        var s = e + ":" + r;
        if (i[s]) return i[s];
        n = n || t.getContext(), n.save(), r && (n.font = r), e = (e + "").split("\n");
        var a = (n.measureText("国").width + 2) * e.length;
        return n.restore(), i[s] = a, ++o > u && (o = 0, i = {}), a
    }
    var t = e("../tool/util"),
        n, r = {},
        i = {},
        s = 0,
        o = 0,
        u = 2e4;
    return {
        isInside: a,
        isOutside: p,
        getTextWidth: S,
        getTextHeight: x
    }
}), define("zrender/shape/Text", ["require", "../tool/area", "./Base", "../tool/util"], function(e) {
    function r(e) {
        n.call(this, e)
    }
    var t = e("../tool/area"),
        n = e("./Base");
    return r.prototype = {
        type: "text",
        brush: function(e, n) {
            var r = this.style;
            n && (r = this.getHighlightStyle(r, this.highlightStyle || {}));
            if (typeof r.text == "undefined") return;
            e.save(), this.setContext(e, r), this.updateTransform(e), r.textFont && (e.font = r.textFont), e.textAlign = r.textAlign || "start", e.textBaseline = r.textBaseline || "middle";
            var i = (r.text + "").split("\n"),
                s = t.getTextHeight("国", r.textFont),
                o = this.getRect(r),
                u = r.x,
                a;
            r.textBaseline == "top" ? a = o.y : r.textBaseline == "bottom" ? a = o.y + s : a = o.y + s / 2;
            for (var f = 0, l = i.length; f < l; f++) {
                if (r.maxWidth) switch (r.brushType) {
                    case "fill":
                        e.fillText(i[f], u, a, r.maxWidth);
                        break;
                    case "stroke":
                        e.strokeText(i[f], u, a, r.maxWidth);
                        break;
                    case "both":
                        e.fillText(i[f], u, a, r.maxWidth), e.strokeText(i[f], u, a, r.maxWidth);
                        break;
                    default:
                        e.fillText(i[f], u, a, r.maxWidth)
                } else switch (r.brushType) {
                    case "fill":
                        e.fillText(i[f], u, a);
                        break;
                    case "stroke":
                        e.strokeText(i[f], u, a);
                        break;
                    case "both":
                        e.fillText(i[f], u, a), e.strokeText(i[f], u, a);
                        break;
                    default:
                        e.fillText(i[f], u, a)
                }
                a += s
            }
            e.restore();
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var n = t.getTextWidth(e.text, e.textFont),
                r = t.getTextHeight(e.text, e.textFont),
                i = e.x;
            e.textAlign == "end" || e.textAlign == "right" ? i -= n : e.textAlign == "center" && (i -= n / 2);
            var s;
            return e.textBaseline == "top" ? s = e.y : e.textBaseline == "bottom" ? s = e.y - r : s = e.y - r / 2, e.__rect = {
                x: i,
                y: s,
                width: n,
                height: r
            }, e.__rect
        }
    }, e("../tool/util").inherits(r, n), r
}), define("zrender/shape/Rectangle", ["require", "./Base", "../tool/util"], function(e) {
    function n(e) {
        t.call(this, e)
    }
    var t = e("./Base");
    return n.prototype = {
        type: "rectangle",
        _buildRadiusPath: function(e, t) {
            var n = t.x,
                r = t.y,
                i = t.width,
                s = t.height,
                o = t.radius,
                u, a, f, l;
            typeof o == "number" ? u = a = f = l = o : o instanceof Array ? o.length === 1 ? u = a = f = l = o[0] : o.length === 2 ? (u = f = o[0], a = l = o[1]) : o.length === 3 ? (u = o[0], a = l = o[1], f = o[2]) : (u = o[0], a = o[1], f = o[2], l = o[3]) : u = a = f = l = 0, e.moveTo(n + u, r), e.lineTo(n + i - a, r), a !== 0 && e.quadraticCurveTo(n + i, r, n + i, r + a), e.lineTo(n + i, r + s - f), f !== 0 && e.quadraticCurveTo(n + i, r + s, n + i - f, r + s), e.lineTo(n + l, r + s), l !== 0 && e.quadraticCurveTo(n, r + s, n, r + s - l), e.lineTo(n, r + u), u !== 0 && e.quadraticCurveTo(n, r, n + u, r)
        },
        buildPath: function(e, t) {
            t.radius ? this._buildRadiusPath(e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
                x: Math.round(e.x - t / 2),
                y: Math.round(e.y - t / 2),
                width: e.width + t,
                height: e.height + t
            }, e.__rect
        }
    }, e("../tool/util").inherits(n, t), n
}), define("zrender/loadingEffect/Base", ["require", "../tool/util", "../shape/Text", "../shape/Rectangle"], function(e) {
    function o(e) {
        this.setOptions(e)
    }
    var t = e("../tool/util"),
        n = e("../shape/Text"),
        r = e("../shape/Rectangle"),
        i = "Loading...",
        s = "normal 16px Arial";
    return o.prototype.createTextShape = function(e) {
        return new n({
            highlightStyle: t.merge({
                x: this.canvasWidth / 2,
                y: this.canvasHeight / 2,
                text: i,
                textAlign: "center",
                textBaseline: "middle",
                textFont: s,
                color: "#333",
                brushType: "fill"
            }, e, !0)
        })
    }, o.prototype.createBackgroundShape = function(e) {
        return new r({
            highlightStyle: {
                x: 0,
                y: 0,
                width: this.canvasWidth,
                height: this.canvasHeight,
                brushType: "fill",
                color: e
            }
        })
    }, o.prototype.start = function(e) {
        function t(t) {
            e.storage.addHover(t)
        }

        function n() {
            e.refreshHover()
        }
        this.canvasWidth = e._width, this.canvasHeight = e._height, this.loadingTimer = this._start(t, n)
    }, o.prototype._start = function() {
        return setInterval(function() {}, 1e4)
    }, o.prototype.stop = function() {
        clearInterval(this.loadingTimer)
    }, o.prototype.setOptions = function(e) {
        this.options = e || {}
    }, o
}), define("zrender/shape/Image", ["require", "./Base", "../tool/util"], function(e) {
    function s(e) {
        i.call(this, e)
    }
    var t = {},
        n = [],
        r, i = e("./Base");
    return s.prototype = {
        type: "image",
        brush: function(e, i, s) {
            var o = this.style || {};
            i && (o = this.getHighlightStyle(o, this.highlightStyle || {}));
            var u = o.image,
                a = this;
            if (typeof u == "string") {
                var f = u;
                t[f] ? u = t[f] : (u = new Image, u.onload = function() {
                    u.onload = null, clearTimeout(r), n.push(a), r = setTimeout(function() {
                        s && s(n), n = []
                    }, 10)
                }, t[f] = u, u.src = f)
            }
            if (u) {
                if (window.ActiveXObject) {
                    if (u.readyState != "complete") return
                } else if (!u.complete) return;
                e.save(), this.setContext(e, o), this.updateTransform(e);
                var l = o.width || u.width,
                    c = o.height || u.height,
                    h = o.x,
                    p = o.y;
                if (o.sWidth && o.sHeight) {
                    var d = o.sx || 0,
                        v = o.sy || 0;
                    e.drawImage(u, d, v, o.sWidth, o.sHeight, h, p, l, c)
                } else if (o.sx && o.sy) {
                    var d = o.sx,
                        v = o.sy,
                        m = l - d,
                        g = c - v;
                    e.drawImage(u, d, v, m, g, h, p, l, c)
                } else e.drawImage(u, h, p, l, c);
                o.width = l, o.height = c, this.style.width = l, this.style.height = c, o.text && this.drawText(e, o, this.style), e.restore()
            }
        },
        buildPath: function(e, t) {
            e.rect(t.x, t.y, t.width, t.height);
            return
        },
        getRect: function(e) {
            return {
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            }
        }
    }, e("../tool/util").inherits(s, i), s
}), define("zrender/Painter", ["require", "./config", "./tool/util", "./tool/log", "./loadingEffect/Base", "./shape/Image"], function(e) {
    function u() {
        return !1
    }

    function a() {}

    function f(e, t) {
        this.root = e, this.storage = t, e.innerHTML = "", this._width = this._getWidth(), this._height = this._getHeight();
        var n = document.createElement("div");
        this._domRoot = n, n.style.position = "relative", n.style.overflow = "hidden", n.style.width = this._width + "px", n.style.height = this._height + "px", e.appendChild(n), this._domList = {}, this._ctxList = {}, this._domListBack = {}, this._ctxListBack = {}, this._zLevelConfig = {}, this._maxZlevel = t.getMaxZlevel(), this._loadingEffect = new i({}), this.shapeToImage = this._createShapeToImageProcessor(), this._domList.bg = l("bg", "div", this), n.appendChild(this._domList.bg);
        var r, a;
        for (var f = 0; f <= this._maxZlevel; f++) r = l(f, "canvas", this), n.appendChild(r), this._domList[f] = r, o && o.initElement(r), this._ctxList[f] = a = r.getContext("2d"), s != 1 && a.scale(s, s);
        r = l("hover", "canvas", this), r.id = "_zrender_hover_", n.appendChild(r), this._domList.hover = r, o && o.initElement(r), this._domList.hover.onselectstart = u, this._ctxList.hover = a = r.getContext("2d"), s != 1 && a.scale(s, s)
    }

    function l(e, t, n) {
        var r = document.createElement(t),
            i = n._width,
            o = n._height;
        return r.style.position = "absolute", r.style.left = 0, r.style.top = 0, r.style.width = i + "px", r.style.height = o + "px", r.setAttribute("width", i * s), r.setAttribute("height", o * s), r.setAttribute("data-zr-dom-id", e), r
    }
    var t = e("./config"),
        n = e("./tool/util"),
        r = e("./tool/log"),
        i = e("./loadingEffect/Base"),
        s = window.devicePixelRatio || 1,
        o = window.G_vmlCanvasManager;
    return f.prototype.render = function(e) {
        return this.isLoading() && this.hideLoading(), this._syncMaxZlevelCanvase(), this.clear(), this.storage.iterShape(this._brush({
            all: !0
        }), {
            normal: "up"
        }), this.storage.clearChangedZlevel(), typeof e == "function" && e(), this
    }, f.prototype.refresh = function(e) {
        this._syncMaxZlevelCanvase();
        var t = this.storage.getChangedZlevel();
        if (t.all) this.clear();
        else
            for (var n in t) this._ctxList[n] && this.clearLayer(n);
        return this.storage.iterShape(this._brush(t), {
            normal: "up"
        }), this.storage.clearChangedZlevel(), typeof e == "function" && e(), this
    }, f.prototype.update = function(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            var i = e[n];
            this.storage.mod(i.id, i)
        }
        return this.refresh(t), this
    }, f.prototype.setLoadingEffect = function(e) {
        return this._loadingEffect = e, this
    }, f.prototype.clear = function() {
        for (var e in this._ctxList) {
            if (e == "hover") continue;
            this.clearLayer(e)
        }
        return this
    }, f.prototype.modLayer = function(e, t) {
        if (t) {
            var r = this._zLevelConfig;
            r[e] || (r[e] = {}), n.merge(r[e], t, !0)
        }
    }, f.prototype.refreshHover = function() {
        function t(t) {
            e._brushHover(t)
        }
        var e = this;
        return this.clearHover(), this.storage.iterShape(t, {
            hover: !0
        }), this.storage.delHover(), this
    }, f.prototype.clearHover = function() {
        var e = this._ctxList && this._ctxList.hover;
        return e && e.clearRect(0, 0, this._width * s, this._height * s), this
    }, f.prototype.showLoading = function(e) {
        return this._loadingEffect && this._loadingEffect.stop(), e && this.setLoadingEffect(e), this._loadingEffect.start(this), this.loading = !0, this
    }, f.prototype.hideLoading = function() {
        return this._loadingEffect.stop(), this.clearHover(), this.loading = !1, this
    }, f.prototype.isLoading = function() {
        return this.loading
    }, f.prototype.resize = function() {
        var e = this._domRoot;
        e.style.display = "none";
        var t = this._getWidth(),
            n = this._getHeight();
        e.style.display = "";
        if (this._width != t || n != this._height) {
            this._width = t, this._height = n, e.style.width = t + "px", e.style.height = n + "px";
            for (var r in this._domList) {
                var i = this._domList[r];
                i.setAttribute("width", t), i.setAttribute("height", n), i.style.width = t + "px", i.style.height = n + "px"
            }
            this.storage.setChangedZlevle("all"), this.refresh()
        }
        return this
    }, f.prototype.clearLayer = function(e) {
        if (!this._ctxList[e]) return;
        var t = this._zLevelConfig[e];
        if (t) {
            var n = typeof t.clearColor != "undefined",
                r = t.motionBlur,
                i = t.lastFrameAlpha;
            typeof i == "undefined" && (i = .7);
            var o = this._domList[e];
            if (r) {
                if (typeof this._domListBack[e] == "undefined") {
                    var u = l("back-" + e, "canvas", this);
                    u.width = o.width, u.height = o.height, u.style.width = o.style.width, u.style.height = o.style.height, this._domListBack[e] = u, this._ctxListBack[e] = u.getContext("2d"), s != 1 && this._ctxListBack[e].scale(s, s)
                }
                this._ctxListBack[e].globalCompositeOperation = "copy", this._ctxListBack[e].drawImage(o, 0, 0, o.width / s, o.height / s)
            }
            var a = this._ctxList[e];
            n ? (a.save(), a.fillStyle = t.clearColor, a.fillRect(0, 0, this._width * s, this._height * s), a.restore()) : a.clearRect(0, 0, this._width * s, this._height * s);
            if (r) {
                var u = this._domListBack[e];
                a.save(), a.globalAlpha = i, a.drawImage(u, 0, 0, u.width / s, u.height / s), a.restore()
            }
        } else this._ctxList[e].clearRect(0, 0, this._width * s, this._height * s)
    }, f.prototype.dispose = function() {
        this.isLoading() && this.hideLoading(), this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._domList = this._ctxList = this._ctxListBack = this._domListBack = null
    }, f.prototype.getDomHover = function() {
        return this._domList.hover
    }, f.prototype.toDataURL = function(e, n, i) {
        function c(e, t) {
            f.update(e, t)
        }
        if (o) return null;
        var u = l("image", "canvas", this);
        this._domList.bg.appendChild(u);
        var a = u.getContext("2d");
        s != 1 && a.scale(s, s), a.fillStyle = n || "#fff", a.rect(0, 0, this._width * s, this._height * s), a.fill();
        var f = this;
        this.storage.iterShape(function(e) {
            if (!e.invisible)
                if (!e.onbrush || e.onbrush && !e.onbrush(a, !1))
                    if (t.catchBrushException) try {
                        e.brush(a, !1, c)
                    } catch (n) {
                        r(n, "brush error of " + e.type, e)
                    } else e.brush(a, !1, c)
        }, {
            normal: "up"
        });
        var h = u.toDataURL(e, i);
        return a = null, this._domList.bg.removeChild(u), h
    }, f.prototype.getWidth = function() {
        return this._width
    }, f.prototype.getHeight = function() {
        return this._height
    }, f.prototype._getWidth = function() {
        var e = this.root,
            t = e.currentStyle || document.defaultView.getComputedStyle(e);
        return ((e.clientWidth || parseInt(t.width, 10)) - parseInt(t.paddingLeft, 10) - parseInt(t.paddingRight, 10)).toFixed(0) - 0
    }, f.prototype._getHeight = function() {
        var e = this.root,
            t = e.currentStyle || document.defaultView.getComputedStyle(e);
        return ((e.clientHeight || parseInt(t.height, 10)) - parseInt(t.paddingTop, 10) - parseInt(t.paddingBottom, 10)).toFixed(0) - 0
    }, f.prototype._syncMaxZlevelCanvase = function() {
        var e = this.storage.getMaxZlevel();
        if (this._maxZlevel < e) {
            for (var t = this._maxZlevel + 1; t <= e; t++) {
                var n = l(t, "canvas", this);
                this._domList[t] = n, this._domRoot.insertBefore(n, this._domList.hover), o && o.initElement(n);
                var r = n.getContext("2d");
                this._ctxList[t] = r, s != 1 && r.scale(s, s)
            }
            this._maxZlevel = e
        }
    }, f.prototype._brush = function(e) {
        function s(e, t) {
            i.update(e, t)
        }
        var n = this._ctxList,
            i = this;
        return function(i) {
            if ((e.all || e[i.zlevel]) && !i.invisible) {
                var o = n[i.zlevel];
                if (o) {
                    if (!i.onbrush || i.onbrush && !i.onbrush(o, !1))
                        if (t.catchBrushException) try {
                            i.brush(o, !1, s)
                        } catch (u) {
                            r(u, "brush error of " + i.type, i)
                        } else i.brush(o, !1, s)
                } else r("can not find the specific zlevel canvas!")
            }
        }
    }, f.prototype._brushHover = function(e) {
        function s(e, t) {
            i.update(e, t)
        }
        var n = this._ctxList.hover,
            i = this;
        if (!e.onbrush || e.onbrush && !e.onbrush(n, !0))
            if (t.catchBrushException) try {
                e.brush(n, !0, s)
            } catch (o) {
                r(o, "hoverBrush error of " + e.type, e)
            } else e.brush(n, !0, s)
    }, f.prototype._shapeToImage = function(t, n, r, i, s, o, u) {
        s.style.width = r + "px", s.style.height = i + "px", s.setAttribute("width", r * u), s.setAttribute("height", i * u), o.clearRect(0, 0, r * u, i * u);
        var a = {
            position: n.position,
            rotation: n.rotation,
            scale: n.scale
        };
        n.position = [0, 0, 0], n.rotation = 0, n.scale = [1, 1], n && n.brush(o, !1);
        var f = e("./shape/Image"),
            l = new f({
                id: t,
                style: {
                    x: 0,
                    y: 0,
                    image: s.toDataURL()
                }
            });
        return a.position != null && (l.position = n.position = a.position), a.rotation != null && (l.rotation = n.rotation = a.rotation), a.scale != null && (l.scale = n.scale = a.scale), l
    }, f.prototype._createShapeToImageProcessor = function() {
        if (o) return a;
        var e = this,
            t = document.createElement("canvas"),
            n = t.getContext("2d"),
            r = window.devicePixelRatio || 1;
        return function(i, s, o, u) {
            return e._shapeToImage(i, s, o, u, t, n, r)
        }
    }, f
}), define("zrender/Storage", ["require", "./tool/util", "./tool/log", "./config"], function(e) {
    function i() {
        this._elements = {}, this._zElements = [], this._hoverElements = [], this._maxZlevel = 0, this._changedZlevel = {}
    }
    var t = e("./tool/util"),
        n = e("./tool/log"),
        r = e("./config");
    return i.prototype.iterShape = function(e, t) {
        t || (t = {
            hover: !1,
            normal: "down"
        });
        if (t.hover)
            for (var n = 0, r = this._hoverElements.length; n < r; n++)
                if (e(this._hoverElements[n])) return this;
        var i, s;
        if (typeof t.normal != "undefined") switch (t.normal) {
            case "down":
                var r = this._zElements.length;
                while (r--) {
                    i = this._zElements[r];
                    if (i) {
                        s = i.length;
                        while (s--)
                            if (e(i[s])) return this
                    }
                }
                break;
            case "up":
                for (var n = 0, r = this._zElements.length; n < r; n++) {
                    i = this._zElements[n];
                    if (i) {
                        s = i.length;
                        for (var o = 0; o < s; o++)
                            if (e(i[o])) return this
                    }
                }
                break;
            default:
                for (var n in this._elements)
                    if (e(this._elements[n])) return this
        }
        return this
    }, i.prototype.mod = function(e, n) {
        var r = this._elements[e];
        return r && (r.updateNeedTransform(), r.style.__rect = null, this._changedZlevel[r.zlevel] = !0, n && t.merge(r, n, !0), this._changedZlevel[r.zlevel] = !0, this._maxZlevel = Math.max(this._maxZlevel, r.zlevel)), this
    }, i.prototype.drift = function(e, t, i) {
        var s = this._elements[e];
        if (s) {
            s.needTransform = !0;
            if (!s.ondrift || s.ondrift && !s.ondrift(t, i))
                if (r.catchBrushException) try {
                    s.drift(t, i)
                } catch (o) {
                    n(o, "drift error of " + s.type, s)
                } else s.drift(t, i);
            this._changedZlevel[s.zlevel] = !0
        }
        return this
    }, i.prototype.addHover = function(e) {
        return e.rotation && Math.abs(e.rotation[0]) > 1e-4 || e.position && (Math.abs(e.position[0]) > 1e-4 || Math.abs(e.position[1]) > 1e-4) || e.scale && (Math.abs(e.scale[0] - 1) > 1e-4 || Math.abs(e.scale[1] - 1) > 1e-4) ? e.needTransform = !0 : e.needTransform = !1, this._hoverElements.push(e), this
    }, i.prototype.delHover = function() {
        return this._hoverElements = [], this
    }, i.prototype.hasHoverShape = function() {
        return this._hoverElements.length > 0
    }, i.prototype.add = function(e) {
        return e.updateNeedTransform(), e.style.__rect = null, this._elements[e.id] = e, this._zElements[e.zlevel] = this._zElements[e.zlevel] || [], this._zElements[e.zlevel].push(e), this._maxZlevel = Math.max(this._maxZlevel, e.zlevel), this._changedZlevel[e.zlevel] = !0, this
    }, i.prototype.get = function(e) {
        return this._elements[e]
    }, i.prototype.del = function(e) {
        if (typeof e != "undefined") {
            var t = {};
            if (e instanceof Array) {
                if (e.lenth < 1) return;
                for (var n = 0, r = e.length; n < r; n++) t[e[n].id] = !0
            } else t[e] = !0;
            var i, s, o, u = {};
            for (var a in t)
                if (this._elements[a]) {
                    o = this._elements[a].zlevel, this._changedZlevel[o] = !0;
                    if (!u[o]) {
                        s = this._zElements[o], i = [];
                        for (var n = 0, r = s.length; n < r; n++) t[s[n].id] || i.push(s[n]);
                        this._zElements[o] = i, u[o] = !0
                    }
                    delete this._elements[a]
                }
        } else this._elements = {}, this._zElements = [], this._hoverElements = [], this._maxZlevel = 0, this._changedZlevel = {
            all: !0
        };
        return this
    }, i.prototype.getMaxZlevel = function() {
        return this._maxZlevel
    }, i.prototype.getChangedZlevel = function() {
        return this._changedZlevel
    }, i.prototype.clearChangedZlevel = function() {
        return this._changedZlevel = {}, this
    }, i.prototype.setChangedZlevle = function(e) {
        return this._changedZlevel[e] = !0, this
    }, i.prototype.dispose = function() {
        this._elements = this._zElements = this._hoverElements = null
    }, i
}), define("zrender/animation/easing", [], function() {
    var e = {
        Linear: function(e) {
            return e
        },
        QuadraticIn: function(e) {
            return e * e
        },
        QuadraticOut: function(e) {
            return e * (2 - e)
        },
        QuadraticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
        },
        CubicIn: function(e) {
            return e * e * e
        },
        CubicOut: function(e) {
            return --e * e * e + 1
        },
        CubicInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        },
        QuarticIn: function(e) {
            return e * e * e * e
        },
        QuarticOut: function(e) {
            return 1 - --e * e * e * e
        },
        QuarticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
        },
        QuinticIn: function(e) {
            return e * e * e * e * e
        },
        QuinticOut: function(e) {
            return --e * e * e * e * e + 1
        },
        QuinticInOut: function(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        },
        SinusoidalIn: function(e) {
            return 1 - Math.cos(e * Math.PI / 2)
        },
        SinusoidalOut: function(e) {
            return Math.sin(e * Math.PI / 2)
        },
        SinusoidalInOut: function(e) {
            return .5 * (1 - Math.cos(Math.PI * e))
        },
        ExponentialIn: function(e) {
            return e === 0 ? 0 : Math.pow(1024, e - 1)
        },
        ExponentialOut: function(e) {
            return e === 1 ? 1 : 1 - Math.pow(2, -10 * e)
        },
        ExponentialInOut: function(e) {
            return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
        },
        CircularIn: function(e) {
            return 1 - Math.sqrt(1 - e * e)
        },
        CircularOut: function(e) {
            return Math.sqrt(1 - --e * e)
        },
        CircularInOut: function(e) {
            return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        ElasticIn: function(e) {
            var t, n = .1,
                r = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r)))
        },
        ElasticOut: function(e) {
            var t, n = .1,
                r = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin((e - t) * 2 * Math.PI / r) + 1)
        },
        ElasticInOut: function(e) {
            var t, n = .1,
                r = .4;
            return e === 0 ? 0 : e === 1 ? 1 : (!n || n < 1 ? (n = 1, t = r / 4) : t = r * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * 2 * Math.PI / r) * .5 + 1)
        },
        BackIn: function(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        },
        BackOut: function(e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        },
        BackInOut: function(e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        },
        BounceIn: function(t) {
            return 1 - e.BounceOut(1 - t)
        },
        BounceOut: function(e) {
            return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        BounceInOut: function(t) {
            return t < .5 ? e.BounceIn(t * 2) * .5 : e.BounceOut(t * 2 - 1) * .5 + .5
        }
    };
    return e
}), define("zrender/animation/clip", ["require", "./easing"], function(e) {
    function n(e) {
        this._targetPool = e.target || {}, this._targetPool instanceof Array || (this._targetPool = [this._targetPool]), this._life = e.life || 1e3, this._delay = e.delay || 0, this._startTime = (new Date).getTime() + this._delay, this._endTime = this._startTime + this._life * 1e3, this.loop = typeof e.loop == "undefined" ? !1 : e.loop, this.gap = e.gap || 0, this.easing = e.easing || "Linear", this.onframe = e.onframe, this.ondestroy = e.ondestroy, this.onrestart = e.onrestart
    }
    var t = e("./easing");
    return n.prototype = {
        step: function(e) {
            var n = (e - this._startTime) / this._life;
            if (n < 0) return;
            n = Math.min(n, 1);
            var r = typeof this.easing == "string" ? t[this.easing] : this.easing,
                i = typeof r == "function" ? r(n) : n;
            return this.fire("frame", i), n == 1 ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
        },
        restart: function() {
            var e = (new Date).getTime(),
                t = (e - this._startTime) % this._life;
            this._startTime = (new Date).getTime() - t + this.gap
        },
        fire: function(e, t) {
            for (var n = 0, r = this._targetPool.length; n < r; n++) this["on" + e] && this["on" + e](this._targetPool[n], t)
        },
        constructor: n
    }, n
}), define("zrender/animation/animation", ["require", "./clip", "../tool/color"], function(e) {
    function s(e) {
        e = e || {}, this.stage = e.stage || {}, this.onframe = e.onframe || function() {}, this._clips = [], this._running = !1, this._time = 0
    }

    function o(e, t) {
        return e[t]
    }

    function u(e, t, n) {
        e[t] = n
    }

    function a(e, t, n) {
        return (t - e) * n + e
    }

    function f(e, t, n, r, i) {
        var s = e.length;
        if (i == 1)
            for (var o = 0; o < s; o++) r[o] = a(e[o], t[o], n);
        else {
            var u = e[0].length;
            for (var o = 0; o < s; o++)
                for (var f = 0; f < u; f++) r[o][f] = a(e[o][f], t[o][f], n)
        }
    }

    function l(e) {
        switch (typeof e) {
            case "undefined":
            case "string":
                return !1
        }
        return typeof e.length != "undefined"
    }

    function c(e, t, n, r, i, s, o, u, a) {
        var f = e.length;
        if (a == 1)
            for (var l = 0; l < f; l++) u[l] = h(e[l], t[l], n[l], r[l], i, s, o);
        else {
            var c = e[0].length;
            for (var l = 0; l < f; l++)
                for (var p = 0; p < c; p++) u[l][p] = h(e[l][p], t[l][p], n[l][p], r[l][p], i, s, o)
        }
    }

    function h(e, t, n, r, i, s, o) {
        var u = (n - e) * .5,
            a = (r - t) * .5;
        return (2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
    }

    function p(e) {
        if (l(e)) {
            var t = e.length;
            if (l(e[0])) {
                var n = [];
                for (var r = 0; r < t; r++) n.push(i.call(e[r]));
                return n
            }
            return i.call(e)
        }
        return e
    }

    function d(e) {
        return e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.floor(e[2]), "rgba(" + e.join(",") + ")"
    }

    function v(e, t, n, r) {
        this._tracks = {}, this._target = e, this._loop = t || !1, this._getter = n || o, this._setter = r || u, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    }
    var t = e("./clip"),
        n = e("../tool/color"),
        r = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
            setTimeout(e, 16)
        },
        i = Array.prototype.slice;
    return s.prototype = {
        add: function(e) {
            this._clips.push(e)
        },
        remove: function(e) {
            var t = this._clips.indexOf(e);
            t >= 0 && this._clips.splice(t, 1)
        },
        update: function() {
            var e = (new Date).getTime(),
                t = e - this._time,
                n = this._clips,
                r = n.length,
                i = [],
                s = [];
            for (var o = 0; o < r; o++) {
                var u = n[o],
                    a = u.step(e);
                a && (i.push(a), s.push(u))
            }
            this.stage.update && this._clips.length && this.stage.update();
            for (var o = 0; o < r;) n[o]._needsRemove ? (n[o] = n[r - 1], n.pop(), r--) : o++;
            r = i.length;
            for (var o = 0; o < r; o++) s[o].fire(i[o]);
            this._time = e, this.onframe(t)
        },
        start: function() {
            function t() {
                e._running && (e.update(), r(t))
            }
            var e = this;
            this._running = !0, r(t)
        },
        stop: function() {
            this._running = !1
        },
        clear: function() {
            this._clips = []
        },
        animate: function(e, t) {
            t = t || {};
            var n = new v(e, t.loop, t.getter, t.setter);
            return n.animation = this, n
        },
        constructor: s
    }, v.prototype = {
        when: function(e, t) {
            for (var n in t) this._tracks[n] || (this._tracks[n] = [], e !== 0 && this._tracks[n].push({
                time: 0,
                value: p(this._getter(this._target, n))
            })), this._tracks[n].push({
                time: parseInt(e, 10),
                value: t[n]
            });
            return this
        },
        during: function(e) {
            return this._onframeList.push(e), this
        },
        start: function(e) {
            var r = this,
                i = this._setter,
                s = this._getter,
                o = r._onframeList.length,
                u = e === "spline",
                p = function() {
                    r._clipCount--;
                    if (r._clipCount === 0) {
                        r._tracks = {};
                        var e = r._doneList.length;
                        for (var t = 0; t < e; t++) r._doneList[t].call(r)
                    }
                },
                v = function(v, m) {
                    var g = v.length;
                    if (!g) return;
                    var y = v[0].value,
                        b = l(y),
                        w = !1,
                        E = b && l(y[0]) ? 2 : 1;
                    v.sort(function(e, t) {
                        return e.time - t.time
                    });
                    var S;
                    if (!g) return;
                    S = v[g - 1].time;
                    var x = [],
                        T = [];
                    for (var N = 0; N < g; N++) {
                        x.push(v[N].time / S);
                        var C = v[N].value;
                        typeof C == "string" && (C = n.toArray(C), C.length == 0 && (C[0] = C[1] = C[2] = 0, C[3] = 1), w = !0), T.push(C)
                    }
                    var k = 0,
                        L = 0,
                        A, N, O, M, _, D, P;
                    if (w) var H = [0, 0, 0, 0];
                    var B = function(e, t) {
                            if (t < L) {
                                A = Math.min(k + 1, g - 1);
                                for (N = A; N >= 0; N--)
                                    if (x[N] <= t) break;
                                N = Math.min(N, g - 2)
                            } else {
                                for (N = k; N < g; N++)
                                    if (x[N] > t) break;
                                N = Math.min(N - 1, g - 2)
                            }
                            k = N, L = t;
                            var n = x[N + 1] - x[N];
                            if (n === 0) return;
                            O = (t - x[N]) / n;
                            if (u) {
                                _ = T[N], M = T[N === 0 ? N : N - 1], D = T[N > g - 2 ? g - 1 : N + 1], P = T[N > g - 3 ? g - 1 : N + 2];
                                if (b) c(M, _, D, P, O, O * O, O * O * O, s(e, m), E);
                                else {
                                    var l;
                                    w ? (l = c(M, _, D, P, O, O * O, O * O * O, H, 1), l = d(H)) : l = h(M, _, D, P, O, O * O, O * O * O), i(e, m, l)
                                }
                            } else if (b) f(T[N], T[N + 1], O, s(e, m), E);
                            else {
                                var l;
                                w ? (f(T[N], T[N + 1], O, H, 1), l = d(H)) : l = a(T[N], T[N + 1], O), i(e, m, l)
                            }
                            for (N = 0; N < o; N++) r._onframeList[N](e, t)
                        },
                        j = new t({
                            target: r._target,
                            life: S,
                            loop: r._loop,
                            delay: r._delay,
                            onframe: B,
                            ondestroy: p
                        });
                    e && e !== "spline" && (j.easing = e), r._clipList.push(j), r._clipCount++, r.animation.add(j)
                };
            for (var m in this._tracks) v(this._tracks[m], m);
            return this
        },
        stop: function() {
            for (var e = 0; e < this._clipList.length; e++) {
                var t = this._clipList[e];
                this.animation.remove(t)
            }
            this._clipList = []
        },
        delay: function(e) {
            return this._delay = e, this
        },
        done: function(e) {
            return this._doneList.push(e), this
        }
    }, s
}), define("zrender/zrender", ["require", "./lib/excanvas", "./tool/util", "./tool/log", "./tool/guid", "./Handler", "./Painter", "./Storage", "./animation/animation", "./tool/env"], function(e) {
    function l(e) {
        return function() {
            var t = e.animatingShapes;
            for (var n = 0, r = t.length; n < r; n++) e.storage.mod(t[n].id);
            t.length && e.painter.refresh()
        }
    }

    function c(t, n) {
        this.id = t, this.env = e("./tool/env"), this.storage = new o, this.painter = new s(n, this.storage), this.handler = new i(n, this.storage, this.painter), this.animatingShapes = [], this.animation = new u({
            stage: {
                update: l(this)
            }
        }), this.animation.start()
    }
    e("./lib/excanvas");
    var t = e("./tool/util"),
        n = e("./tool/log"),
        r = e("./tool/guid"),
        i = e("./Handler"),
        s = e("./Painter"),
        o = e("./Storage"),
        u = e("./animation/animation"),
        a = {},
        f = {};
    return f.version = "2.0.0", f.init = function(e, t) {
        var n = new c(r(), e, t || {});
        return a[n.id] = n, n
    }, f.dispose = function(e) {
        if (e) e.dispose();
        else {
            for (var t in a) a[t].dispose();
            a = {}
        }
        return f
    }, f.getInstance = function(e) {
        return a[e]
    }, f.delInstance = function(e) {
        return delete a[e], f
    }, c.prototype.getId = function() {
        return this.id
    }, c.prototype.addShape = function(e) {
        return this.storage.add(e), this
    }, c.prototype.delShape = function(e) {
        return this.storage.del(e), this
    }, c.prototype.modShape = function(e, t, n) {
        return this.storage.mod(e, t, n), this
    }, c.prototype.modLayer = function(e, t) {
        return this.painter.modLayer(e, t), this
    }, c.prototype.addHoverShape = function(e) {
        return this.storage.addHover(e), this
    }, c.prototype.render = function(e) {
        return this.painter.render(e), this
    }, c.prototype.refresh = function(e) {
        return this.painter.refresh(e), this
    }, c.prototype.refreshHover = function(e) {
        return this.painter.refreshHover(e), this
    }, c.prototype.update = function(e, t) {
        return this.painter.update(e, t), this
    }, c.prototype.resize = function() {
        return this.painter.resize(), this
    }, c.prototype.animate = function(e, r, i) {
        var s = this.storage.get(e);
        if (s) {
            var o;
            if (r) {
                var u = r.split("."),
                    a = s;
                for (var f = 0, l = u.length; f < l; f++) {
                    if (!a) continue;
                    a = a[u[f]]
                }
                a && (o = a)
            } else o = s;
            if (!o) {
                n('Property "' + r + '" is not existed in shape ' + e);
                return
            }
            var c = this.animatingShapes;
            return typeof s.__aniCount == "undefined" && (s.__aniCount = 0), s.__aniCount === 0 && c.push(s), s.__aniCount++, this.animation.animate(o, {
                loop: i
            }).done(function() {
                s.__aniCount--;
                if (s.__aniCount === 0) {
                    var e = t.indexOf(c, s);
                    c.splice(e, 1)
                }
            })
        }
        n('Shape "' + e + '" not existed')
    }, c.prototype.clearAnimation = function() {
        this.animation.clear()
    }, c.prototype.showLoading = function(e) {
        return this.painter.showLoading(e), this
    }, c.prototype.hideLoading = function() {
        return this.painter.hideLoading(), this
    }, c.prototype.getWidth = function() {
        return this.painter.getWidth()
    }, c.prototype.getHeight = function() {
        return this.painter.getHeight()
    }, c.prototype.toDataURL = function(e, t, n) {
        return this.painter.toDataURL(e, t, n)
    }, c.prototype.shapeToImage = function(e, t, n) {
        var i = r();
        return this.painter.shapeToImage(i, e, t, n)
    }, c.prototype.on = function(e, t) {
        return this.handler.on(e, t), this
    }, c.prototype.un = function(e, t) {
        return this.handler.un(e, t), this
    }, c.prototype.trigger = function(e, t) {
        return this.handler.trigger(e, t), this
    }, c.prototype.clear = function() {
        return this.storage.del(), this.painter.clear(), this
    }, c.prototype.dispose = function() {
        this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.animatingShapes = this.storage = this.painter = this.handler = null, f.delInstance(this.id)
    }, f
}), define("zrender", ["zrender/zrender"], function(e) {
    return e
}), define("echarts/util/ecQuery", ["zrender/tool/util"], function() {
    function t(e, t) {
        if (typeof e == "undefined") return;
        if (!t) return e;
        t = t.split(".");
        var n = t.length,
            r = 0;
        while (r < n) {
            e = e[t[r]];
            if (typeof e == "undefined") return;
            r++
        }
        return e
    }

    function n(e, n) {
        var r;
        for (var i = 0, s = e.length; i < s; i++) {
            r = t(e[i], n);
            if (typeof r != "undefined") return r
        }
    }

    function r(n, r) {
        var i, s = n.length;
        while (s--) {
            var o = t(n[s], r);
            typeof o != "undefined" && (typeof i == "undefined" ? i = e.clone(o) : e.merge(i, o, !0))
        }
        return i
    }
    var e = require("zrender/tool/util");
    return {
        query: t,
        deepQuery: n,
        deepMerge: r
    }
}), define("echarts/util/number", [], function() {
    function e(e) {
        return e.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function t(t, n) {
        return typeof t == "string" ? e(t).match(/%$/) ? parseFloat(t) / 100 * n : parseFloat(t) : t
    }

    function n(e, n) {
        return [t(n[0], e.getWidth()), t(n[1], e.getHeight())]
    }

    function r(e, n) {
        n instanceof Array || (n = [0, n]);
        var r = Math.min(e.getWidth(), e.getHeight()) / 2;
        return [t(n[0], r), t(n[1], r)]
    }

    function i(e) {
        return isNaN(e) ? "-" : (e = (e + "").split("."), e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : ""))
    }
    return {
        parsePercent: t,
        parseCenter: n,
        parseRadius: r,
        addCommas: i
    }
}), define("echarts/component/base", ["require", "../config", "../util/ecQuery", "../util/number", "zrender/tool/util", "zrender/tool/env"], function(e) {
    function s(e, t, n, r, i) {
        this.ecTheme = e, this.messageCenter = t, this.zr = n, this.option = r, this.series = r.series, this.myChart = i, this.component = i.component, this._zlevelBase = this.getZlevelBase(), this.shapeList = [], this.effectList = [];
        var s = this;
        s.hoverConnect = function(e) {
            var t = (e.target || {}).hoverConnect;
            if (t) {
                var n = 10,
                    r;
                if (t instanceof Array)
                    for (var i = 0, o = t.length; i < o; i++) r = s.getShapeById(t[i]), s.zr.addHoverShape(r), n = Math.min(n, r.zlevel);
                else r = s.getShapeById(t), r && (s.zr.addHoverShape(r), n = Math.min(n, r.zlevel));
                n < e.target.zlevel && s.zr.addHoverShape(e.target)
            }
        }
    }
    var t = e("../config"),
        n = e("../util/ecQuery"),
        r = e("../util/number"),
        i = e("zrender/tool/util");
    return s.prototype = {
        canvasSupported: e("zrender/tool/env").canvasSupported,
        getZlevelBase: function(e) {
            e = e || this.type + "";
            switch (e) {
                case t.COMPONENT_TYPE_GRID:
                case t.COMPONENT_TYPE_AXIS_CATEGORY:
                case t.COMPONENT_TYPE_AXIS_VALUE:
                case t.COMPONENT_TYPE_POLAR:
                    return 0;
                case t.CHART_TYPE_LINE:
                case t.CHART_TYPE_BAR:
                case t.CHART_TYPE_SCATTER:
                case t.CHART_TYPE_PIE:
                case t.CHART_TYPE_RADAR:
                case t.CHART_TYPE_MAP:
                case t.CHART_TYPE_K:
                case t.CHART_TYPE_CHORD:
                case t.CHART_TYPE_GUAGE:
                case t.CHART_TYPE_FUNNEL:
                    return 2;
                case t.COMPONENT_TYPE_LEGEND:
                case t.COMPONENT_TYPE_DATARANGE:
                case t.COMPONENT_TYPE_DATAZOOM:
                case t.COMPONENT_TYPE_TIMELINE:
                    return 4;
                case t.CHART_TYPE_ISLAND:
                    return 5;
                case t.COMPONENT_TYPE_TOOLBOX:
                case t.COMPONENT_TYPE_TITLE:
                    return 6;
                case t.COMPONENT_TYPE_TOOLTIP:
                    return 8;
                default:
                    return 0
            }
        },
        reformOption: function(e) {
            return i.merge(e || {}, i.clone(this.ecTheme[this.type] || {}))
        },
        reformCssArray: function(e) {
            if (!(e instanceof Array)) return [e, e, e, e];
            switch (e.length + "") {
                case "4":
                    return e;
                case "3":
                    return [e[0], e[1], e[2], e[1]];
                case "2":
                    return [e[0], e[1], e[0], e[1]];
                case "1":
                    return [e[0], e[0], e[0], e[0]];
                case "0":
                    return [0, 0, 0, 0]
            }
        },
        getShapeById: function(e) {
            for (var t = 0, n = this.shapeList.length; t < n; t++)
                if (this.shapeList[t].id == e) return this.shapeList[t];
            return null
        },
        getFont: function(e) {
            var t = i.merge(i.clone(e) || {}, this.ecTheme.textStyle);
            return t.fontStyle + " " + t.fontWeight + " " + t.fontSize + "px " + t.fontFamily
        },
        getItemStyleColor: function(e, t, n, r) {
            return typeof e == "function" ? e(t, n, r) : e
        },
        subPixelOptimize: function(e, t) {
            return t % 2 == 1 ? e = Math.floor(e) + .5 : e = Math.round(e), e
        },
        resize: function() {
            this.refresh && this.refresh(), this.animationEffect && this.animationEffect()
        },
        clear: function() {
            this.clearEffectShape && this.clearEffectShape(), this.zr && this.zr.delShape(this.shapeList), this.shapeList = []
        },
        dispose: function() {
            this.clear(), this.shapeList = null, this.effectList = null
        },
        query: n.query,
        deepQuery: n.deepQuery,
        deepMerge: n.deepMerge,
        parsePercent: r.parsePercent,
        parseCenter: r.parseCenter,
        parseRadius: r.parseRadius,
        numAddCommas: r.addCommas
    }, s
}), define("zrender/tool/math", [], function() {
    function t(t, n) {
        return Math.sin(n ? t * e : t)
    }

    function n(t, n) {
        return Math.cos(n ? t * e : t)
    }

    function r(t) {
        return t * e
    }

    function i(t) {
        return t / e
    }
    var e = Math.PI / 180;
    return {
        sin: t,
        cos: n,
        degreeToRadian: r,
        radianToDegree: i
    }
}), define("zrender/shape/Star", ["require", "../tool/math", "./Base", "../tool/util"], function(e) {
    function o(e) {
        s.call(this, e)
    }
    var t = e("../tool/math"),
        n = t.sin,
        r = t.cos,
        i = Math.PI,
        s = e("./Base");
    return o.prototype = {
        type: "star",
        buildPath: function(e, t) {
            var s = t.n;
            if (!s || s < 2) return;
            var o = t.x,
                u = t.y,
                a = t.r,
                f = t.r0;
            f == null && (f = s > 4 ? a * r(2 * i / s) / r(i / s) : a / 3);
            var l = i / s,
                c = -i / 2,
                h = o + a * r(c),
                p = u + a * n(c);
            c += l;
            var d = t.pointList = [];
            d.push([h, p]);
            for (var v = 0, m = s * 2 - 1, g; v < m; v++) g = v % 2 === 0 ? f : a, d.push([o + g * r(c), u + g * n(c)]), c += l;
            d.push([h, p]), e.moveTo(d[0][0], d[0][1]);
            for (var v = 0; v < d.length; v++) e.lineTo(d[v][0], d[v][1]);
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
                x: Math.round(e.x - e.r - t / 2),
                y: Math.round(e.y - e.r - t / 2),
                width: e.r * 2 + t,
                height: e.r * 2 + t
            }, e.__rect
        }
    }, e("../tool/util").inherits(o, s), o
}), define("zrender/shape/Heart", ["require", "./Base", "../tool/util"], function(e) {
    function n(e) {
        t.call(this, e)
    }
    var t = e("./Base");
    return n.prototype = {
        type: "heart",
        buildPath: function(e, t) {
            e.moveTo(t.x, t.y), e.bezierCurveTo(t.x + t.a / 2, t.y - t.b * 2 / 3, t.x + t.a * 2, t.y + t.b / 3, t.x, t.y + t.b), e.bezierCurveTo(t.x - t.a * 2, t.y + t.b / 3, t.x - t.a / 2, t.y - t.b * 2 / 3, t.x, t.y);
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
                x: Math.round(e.x - e.a - t / 2),
                y: Math.round(e.y - e.b / 4 - t / 2),
                width: e.a * 2 + t,
                height: e.b * 5 / 4 + t
            }, e.__rect
        }
    }, e("../tool/util").inherits(n, t), n
}), define("zrender/shape/Droplet", ["require", "./Base", "../tool/util"], function(e) {
    function n(e) {
        t.call(this, e)
    }
    var t = e("./Base");
    return n.prototype = {
        type: "droplet",
        buildPath: function(e, t) {
            e.moveTo(t.x, t.y + t.a), e.bezierCurveTo(t.x + t.a, t.y + t.a, t.x + t.a * 3 / 2, t.y - t.a / 3, t.x, t.y - t.b), e.bezierCurveTo(t.x - t.a * 3 / 2, t.y - t.a / 3, t.x - t.a, t.y + t.a, t.x, t.y + t.a)
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
                x: Math.round(e.x - e.a - t / 2),
                y: Math.round(e.y - e.b - t / 2),
                width: e.a * 2 + t,
                height: e.a + e.b + t
            }, e.__rect
        }
    }, e("../tool/util").inherits(n, t), n
}), define("echarts/util/shape/Icon", ["require", "zrender/tool/util", "zrender/shape/Star", "zrender/shape/Heart", "zrender/shape/Droplet", "zrender/shape/Image", "zrender/shape/Base"], function(e) {
    function n(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r), e.moveTo(t.x + 13 * n, t.y + 10 * r), e.lineTo(t.x + 13 * n, t.y + t.height), e.moveTo(t.x, t.y)
    }

    function r(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x, t.y + t.height), e.lineTo(t.x + 5 * n, t.y + 14 * r), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 13 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 11 * r), e.lineTo(t.x, t.y + t.height), e.moveTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 2 * r), e.moveTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + t.width, t.y + 13 * r), e.moveTo(t.x, t.y)
    }

    function i(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x + 4 * n, t.y + 15 * r), e.lineTo(t.x + 9 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 8 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.lineTo(t.x + 6 * n, t.y + 10 * r), e.lineTo(t.x + 4 * n, t.y + 15 * r), e.moveTo(t.x + 5 * n, t.y), e.lineTo(t.x + 11 * n, t.y), e.moveTo(t.x + 5 * n, t.y + r), e.lineTo(t.x + 11 * n, t.y + r), e.moveTo(t.x, t.y + 2 * r), e.lineTo(t.x + t.width, t.y + 2 * r), e.moveTo(t.x, t.y + 5 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 13 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + 5 * r), e.moveTo(t.x, t.y)
    }

    function s(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 3 * r), e.moveTo(t.x + 3 * n, t.y), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.moveTo(t.x + 3 * n, t.y + 8 * r), e.lineTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y + 3 * r), e.lineTo(t.x + 8 * n, t.y + 3 * r), e.moveTo(t.x, t.y)
    }

    function o(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x + 6 * n, t.y), e.lineTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 6 * n, t.y + 6 * r), e.moveTo(t.x + 2 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 3 * r), e.lineTo(t.x + 14 * n, t.y + 11 * r), e.moveTo(t.x + 2 * n, t.y + 5 * r), e.lineTo(t.x + 2 * n, t.y + 13 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.moveTo(t.x + 10 * n, t.y + 10 * r), e.lineTo(t.x + 14 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + t.height), e.moveTo(t.x, t.y)
    }

    function u(e, t) {
        var n = t.width / 16,
            r = t.height / 16,
            i = t.width / 2;
        e.lineWidth = 1.5, e.arc(t.x + i, t.y + i, i - n, 0, Math.PI * 2 / 3), e.moveTo(t.x + 3 * n, t.y + t.height), e.lineTo(t.x + 0 * n, t.y + 12 * r), e.lineTo(t.x + 5 * n, t.y + 11 * r), e.moveTo(t.x, t.y + 8 * r), e.arc(t.x + i, t.y + i, i - n, Math.PI, Math.PI * 5 / 3), e.moveTo(t.x + 13 * n, t.y), e.lineTo(t.x + t.width, t.y + 4 * r), e.lineTo(t.x + 11 * n, t.y + 5 * r), e.moveTo(t.x, t.y)
    }

    function a(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 2 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 6 * r), e.lineTo(t.x + 11 * n, t.y + 11 * r), e.lineTo(t.x + 15 * n, t.y + 2 * r), e.moveTo(t.x, t.y)
    }

    function f(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.moveTo(t.x + 3 * n, t.y + 14 * r), e.lineTo(t.x + 3 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 6 * r), e.lineTo(t.x + 4 * n, t.y + 14 * r), e.moveTo(t.x + 7 * n, t.y + 14 * r), e.lineTo(t.x + 7 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 2 * r), e.lineTo(t.x + 8 * n, t.y + 14 * r), e.moveTo(t.x + 11 * n, t.y + 14 * r), e.lineTo(t.x + 11 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 9 * r), e.lineTo(t.x + 12 * n, t.y + 14 * r), e.moveTo(t.x, t.y)
    }

    function l(e, t) {
        var n = t.x,
            r = t.y,
            i = t.width,
            s = t.height,
            o = Math.round(s / 3),
            u = 3;
        while (u--) e.rect(n, r + o * u + 2, i, 2);
        e.moveTo(t.x, t.y)
    }

    function c(e, t) {
        var n = t.x,
            r = t.y,
            i = t.width,
            s = t.height,
            o = Math.round(i / 3),
            u = 3;
        while (u--) e.rect(n + o * u, r, 2, s);
        e.moveTo(t.x, t.y)
    }

    function h(e, t) {
        var n = t.width / 16;
        e.moveTo(t.x + n, t.y), e.lineTo(t.x + n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y + t.height), e.lineTo(t.x + 15 * n, t.y), e.lineTo(t.x + n, t.y), e.moveTo(t.x + 3 * n, t.y + 3 * n), e.lineTo(t.x + 13 * n, t.y + 3 * n), e.moveTo(t.x + 3 * n, t.y + 6 * n), e.lineTo(t.x + 13 * n, t.y + 6 * n), e.moveTo(t.x + 3 * n, t.y + 9 * n), e.lineTo(t.x + 13 * n, t.y + 9 * n), e.moveTo(t.x + 3 * n, t.y + 12 * n), e.lineTo(t.x + 9 * n, t.y + 12 * n), e.moveTo(t.x, t.y)
    }

    function p(e, t) {
        var n = t.width / 16,
            r = t.height / 16;
        e.moveTo(t.x, t.y), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x, t.y), e.moveTo(t.x + 4 * n, t.y), e.lineTo(t.x + 4 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y + 8 * r), e.lineTo(t.x + 12 * n, t.y), e.moveTo(t.x + 6 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 13 * r), e.lineTo(t.x + 10 * n, t.y + 11 * r), e.lineTo(t.x + 6 * n, t.y + 11 * r), e.moveTo(t.x, t.y)
    }

    function d(e, t) {
        var n = t.x,
            r = t.y,
            i = t.width,
            s = t.height;
        e.moveTo(n, r + s / 2), e.lineTo(n + i, r + s / 2), e.moveTo(n + i / 2, r), e.lineTo(n + i / 2, r + s)
    }

    function v(e, t) {
        var n = t.width / 2,
            r = t.height / 2,
            i = Math.min(n, r);
        e.moveTo(t.x + n + i, t.y + r), e.arc(t.x + n, t.y + r, i, 0, Math.PI * 2)
    }

    function m(e, t) {
        e.rect(t.x, t.y, t.width, t.height)
    }

    function g(e, t) {
        var n = t.width / 2,
            r = t.height / 2,
            i = t.x + n,
            s = t.y + r,
            o = Math.min(n, r);
        e.moveTo(i, s - o), e.lineTo(i + o, s + o), e.lineTo(i - o, s + o), e.lineTo(i, s - o)
    }

    function y(e, t) {
        var n = t.width / 2,
            r = t.height / 2,
            i = t.x + n,
            s = t.y + r,
            o = Math.min(n, r);
        e.moveTo(i, s - o), e.lineTo(i + o, s), e.lineTo(i, s + o), e.lineTo(i - o, s), e.lineTo(i, s - o)
    }

    function b(e, t) {
        var n = t.x,
            r = t.y,
            i = t.width / 16;
        e.moveTo(n + 8 * i, r), e.lineTo(n + i, r + t.height), e.lineTo(n + 8 * i, r + t.height / 4 * 3), e.lineTo(n + 15 * i, r + t.height), e.lineTo(n + 8 * i, r)
    }

    function w(t, n) {
        var r = e("zrender/shape/Star"),
            i = n.width / 2,
            s = n.height / 2;
        r.prototype.buildPath(t, {
            x: n.x + i,
            y: n.y + s,
            r: Math.min(i, s),
            n: n.n || 5
        })
    }

    function E(t, n) {
        var r = e("zrender/shape/Heart");
        r.prototype.buildPath(t, {
            x: n.x + n.width / 2,
            y: n.y + n.height * .2,
            a: n.width / 2,
            b: n.height * .8
        })
    }

    function S(t, n) {
        var r = e("zrender/shape/Droplet");
        r.prototype.buildPath(t, {
            x: n.x + n.width * .5,
            y: n.y + n.height * .5,
            a: n.width * .5,
            b: n.height * .8
        })
    }

    function x(e, t) {
        var n = t.x,
            r = t.y - t.height / 2 * 1.5,
            i = t.width / 2,
            s = t.height / 2,
            o = Math.min(i, s);
        e.arc(n + i, r + s, o, Math.PI / 5 * 4, Math.PI / 5), e.lineTo(n + i, r + s + o * 1.5)
    }

    function T(t, n) {
        setTimeout(function() {
            var r = e("zrender/shape/Image"),
                i = new r({
                    style: n
                });
            i.brush(t)
        }, 100)
    }

    function C(e) {
        N.call(this, e)
    }
    var t = e("zrender/tool/util"),
        N = e("zrender/shape/Base");
    return C.prototype = {
        type: "icon",
        iconLibrary: {
            mark: n,
            markUndo: r,
            markClear: i,
            dataZoom: s,
            dataZoomReset: o,
            restore: u,
            lineChart: a,
            barChart: f,
            stackChart: l,
            tiledChart: c,
            dataView: h,
            saveAsImage: p,
            cross: d,
            circle: v,
            rectangle: m,
            triangle: g,
            diamond: y,
            arrow: b,
            star: w,
            heart: E,
            droplet: S,
            pin: x,
            image: T
        },
        buildPath: function(e, t) {
            this.iconLibrary[t.iconType] ? this.iconLibrary[t.iconType](e, t) : (e.moveTo(t.x, t.y), e.lineTo(t.x + t.width, t.y), e.lineTo(t.x + t.width, t.y + t.height), e.lineTo(t.x, t.y + t.height), e.lineTo(t.x, t.y));
            return
        },
        getRect: function(e) {
            return e.__rect ? e.__rect : (e.__rect = {
                x: Math.round(e.x),
                y: Math.round(e.y - (e.iconType == "pin" ? e.height / 2 * 1.5 : 0)),
                width: e.width,
                height: e.height
            }, e.__rect)
        },
        isCover: function(e, t) {
            var n = this.getTansform(e, t);
            e = n[0], t = n[1];
            var r = this.style.__rect;
            r || (r = this.style.__rect = this.getRect(this.style));
            var i = r.height < 8 || r.width < 8 ? 4 : 0;
            return e >= r.x - i && e <= r.x + r.width + i && t >= r.y - i && t <= r.y + r.height + i ? !0 : !1
        }
    }, t.inherits(C, N), C
}), define("zrender/shape/util/dashedLineTo", [], function() {
    return function(e, t, n, r, i, s) {
        s = typeof s != "number" ? 5 : s;
        var o = r - t,
            u = i - n,
            a = Math.floor(Math.sqrt(o * o + u * u) / s);
        for (var f = 0; f < a; ++f) e[f % 2 ? "lineTo" : "moveTo"](t + o / a * f, n + u / a * f);
        e.lineTo(r, i)
    }
}), define("zrender/shape/Line", ["require", "./Base", "./util/dashedLineTo", "../tool/util"], function(e) {
    function r(e) {
        this.brushTypeOnly = "stroke", this.textPosition = "end", t.call(this, e)
    }
    var t = e("./Base"),
        n = e("./util/dashedLineTo");
    return r.prototype = {
        type: "line",
        buildPath: function(e, t) {
            if (!t.lineType || t.lineType == "solid") e.moveTo(t.xStart, t.yStart), e.lineTo(t.xEnd, t.yEnd);
            else if (t.lineType == "dashed" || t.lineType == "dotted") {
                var r = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                n(e, t.xStart, t.yStart, t.xEnd, t.yEnd, r)
            }
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t = e.lineWidth || 1;
            return e.__rect = {
                x: Math.min(e.xStart, e.xEnd) - t,
                y: Math.min(e.yStart, e.yEnd) - t,
                width: Math.abs(e.xStart - e.xEnd) + t,
                height: Math.abs(e.yStart - e.yEnd) + t
            }, e.__rect
        }
    }, e("../tool/util").inherits(r, t), r
}), define("zrender/tool/vector", [], function() {
    var e = typeof Float32Array == "undefined" ? Array : Float32Array,
        t = {
            create: function(t, n) {
                var r = new e(2);
                return r[0] = t || 0, r[1] = n || 0, r
            },
            copy: function(e, t) {
                e[0] = t[0], e[1] = t[1]
            },
            set: function(e, t, n) {
                e[0] = t, e[1] = n
            },
            add: function(e, t, n) {
                return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e
            },
            scaleAndAdd: function(e, t, n, r) {
                return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e
            },
            sub: function(e, t, n) {
                return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e
            },
            length: function(e) {
                return Math.sqrt(this.lengthSquare(e))
            },
            lengthSquare: function(e) {
                return e[0] * e[0] + e[1] * e[1]
            },
            mul: function(e, t, n) {
                return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e
            },
            dot: function(e, t) {
                return e[0] * t[0] + e[1] * t[1]
            },
            scale: function(e, t, n) {
                return e[0] = t[0] * n, e[1] = t[1] * n, e
            },
            normalize: function(e, n) {
                var r = t.length(n);
                return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = n[0] / r, e[1] = n[1] / r), e
            },
            distance: function(e, t) {
                return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
            },
            negate: function(e, t) {
                e[0] = -t[0], e[1] = -t[1]
            },
            middle: function(e, t, n) {
                return e[0] = (t[0] + n[0]) / 2, e[1] = (t[1] + n[1]) / 2, e
            }
        };
    return t
}), define("zrender/shape/util/smoothSpline", ["require", "../../tool/vector"], function(e) {
    function n(e, t, n, r, i, s, o) {
        var u = (n - e) * .5,
            a = (r - t) * .5;
        return (2 * (t - n) + u + a) * o + (-3 * (t - n) - 2 * u - a) * s + u * i + t
    }
    var t = e("../../tool/vector");
    return function(e, r) {
        var i = e.length,
            s = [],
            o = 0;
        for (var u = 1; u < i; u++) o += t.distance(e[u - 1], e[u]);
        var a = o / 5;
        a = a < i ? i : a;
        for (var u = 0; u < a; u++) {
            var f = u / (a - 1) * (r ? i : i - 1),
                l = Math.floor(f),
                c = f - l,
                h, p = e[l % i],
                d, v;
            r ? (h = e[(l - 1 + i) % i], d = e[(l + 1) % i], v = e[(l + 2) % i]) : (h = e[l === 0 ? l : l - 1], d = e[l > i - 2 ? i - 1 : l + 1], v = e[l > i - 3 ? i - 1 : l + 2]);
            var m = c * c,
                g = c * m;
            s.push([n(h[0], p[0], d[0], v[0], c, m, g), n(h[1], p[1], d[1], v[1], c, m, g)])
        }
        return s
    }
}), define("zrender/shape/util/smoothBezier", ["require", "../../tool/vector"], function(e) {
    var t = e("../../tool/vector");
    return function(e, n, r) {
        var i = [],
            s = [],
            o = [],
            u = [],
            a, f;
        for (var l = 0, c = e.length; l < c; l++) {
            var h = e[l],
                a, f;
            if (r) a = e[l ? l - 1 : c - 1], f = e[(l + 1) % c];
            else {
                if (l === 0 || l === c - 1) {
                    i.push(e[l]);
                    continue
                }
                a = e[l - 1], f = e[l + 1]
            }
            t.sub(s, f, a), t.scale(s, s, n);
            var p = t.distance(h, a),
                d = t.distance(h, f),
                v = p + d;
            p /= v, d /= v, t.scale(o, s, -p), t.scale(u, s, d), i.push(t.add([], h, o)), i.push(t.add([], h, u))
        }
        return r && i.push(i.shift()), i
    }
}), define("zrender/shape/Polygon", ["require", "./Base", "./util/smoothSpline", "./util/smoothBezier", "./util/dashedLineTo", "../tool/util"], function(e) {
    function s(e) {
        t.call(this, e)
    }
    var t = e("./Base"),
        n = e("./util/smoothSpline"),
        r = e("./util/smoothBezier"),
        i = e("./util/dashedLineTo");
    return s.prototype = {
        type: "polygon",
        brush: function(e, t) {
            var n = this.style;
            t && (n = this.getHighlightStyle(n, this.highlightStyle || {})), e.save(), this.setContext(e, n), this.updateTransform(e);
            var r = !1;
            if (n.brushType == "fill" || n.brushType == "both" || typeof n.brushType == "undefined") e.beginPath(), n.lineType == "dashed" || n.lineType == "dotted" ? (this.buildPath(e, {
                lineType: "solid",
                lineWidth: n.lineWidth,
                pointList: n.pointList
            }), r = !1) : (this.buildPath(e, n), r = !0), e.closePath(), e.fill();
            n.lineWidth > 0 && (n.brushType == "stroke" || n.brushType == "both") && (r || (e.beginPath(), this.buildPath(e, n), e.closePath()), e.stroke()), n.text && this.drawText(e, n, this.style), e.restore();
            return
        },
        buildPath: function(e, t) {
            var s = t.pointList;
            if (s.length < 2) return;
            if (t.smooth && t.smooth !== "spline") {
                var o = r(s, t.smooth, !0);
                e.moveTo(s[0][0], s[0][1]);
                var u, a, f, l = s.length;
                for (var c = 0; c < l; c++) u = o[c * 2], a = o[c * 2 + 1], f = s[(c + 1) % l], e.bezierCurveTo(u[0], u[1], a[0], a[1], f[0], f[1])
            } else {
                t.smooth === "spline" && (s = n(s, !0));
                if (!t.lineType || t.lineType == "solid") {
                    e.moveTo(s[0][0], s[0][1]);
                    for (var c = 1, h = s.length; c < h; c++) e.lineTo(s[c][0], s[c][1]);
                    e.lineTo(s[0][0], s[0][1])
                } else if (t.lineType == "dashed" || t.lineType == "dotted") {
                    var p = t._dashLength || (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                    t._dashLength = p, e.moveTo(s[0][0], s[0][1]);
                    for (var c = 1, h = s.length; c < h; c++) i(e, s[c - 1][0], s[c - 1][1], s[c][0], s[c][1], p);
                    i(e, s[s.length - 1][0], s[s.length - 1][1], s[0][0], s[0][1], p)
                }
            }
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t = Number.MAX_VALUE,
                n = Number.MIN_VALUE,
                r = Number.MAX_VALUE,
                i = Number.MIN_VALUE,
                s = e.pointList;
            for (var o = 0, u = s.length; o < u; o++) s[o][0] < t && (t = s[o][0]), s[o][0] > n && (n = s[o][0]), s[o][1] < r && (r = s[o][1]), s[o][1] > i && (i = s[o][1]);
            var a;
            return e.brushType == "stroke" || e.brushType == "fill" ? a = e.lineWidth || 1 : a = 0, e.__rect = {
                x: Math.round(t - a / 2),
                y: Math.round(r - a / 2),
                width: n - t + a,
                height: i - r + a
            }, e.__rect
        }
    }, e("../tool/util").inherits(s, t), s
}), define("zrender/shape/BrokenLine", ["require", "./Base", "./util/smoothSpline", "./util/smoothBezier", "./util/dashedLineTo", "./Polygon", "../tool/util"], function(e) {
    function s(e) {
        this.brushTypeOnly = "stroke", this.textPosition = "end", t.call(this, e)
    }
    var t = e("./Base"),
        n = e("./util/smoothSpline"),
        r = e("./util/smoothBezier"),
        i = e("./util/dashedLineTo");
    return s.prototype = {
        type: "broken-line",
        buildPath: function(e, t) {
            var s = t.pointList;
            if (s.length < 2) return;
            var o = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length));
            if (t.smooth && t.smooth !== "spline") {
                var u = r(s, t.smooth);
                e.moveTo(s[0][0], s[0][1]);
                var a, f, l;
                for (var c = 0; c < o - 1; c++) a = u[c * 2], f = u[c * 2 + 1], l = s[c + 1], e.bezierCurveTo(a[0], a[1], f[0], f[1], l[0], l[1])
            } else {
                t.smooth === "spline" && (s = n(s), o = s.length);
                if (!t.lineType || t.lineType == "solid") {
                    e.moveTo(s[0][0], s[0][1]);
                    for (var c = 1; c < o; c++) e.lineTo(s[c][0], s[c][1])
                } else if (t.lineType == "dashed" || t.lineType == "dotted") {
                    var h = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                    e.moveTo(s[0][0], s[0][1]);
                    for (var c = 1; c < o; c++) i(e, s[c - 1][0], s[c - 1][1], s[c][0], s[c][1], h)
                }
            }
            return
        },
        getRect: function(t) {
            return e("./Polygon").prototype.getRect(t)
        }
    }, e("../tool/util").inherits(s, t), s
}), define("echarts/util/shape/MarkLine", ["require", "zrender/shape/Base", "./Icon", "zrender/shape/Line", "zrender/shape/BrokenLine", "zrender/tool/matrix", "zrender/tool/area", "zrender/shape/util/dashedLineTo", "zrender/shape/util/smoothSpline", "zrender/tool/util"], function(e) {
    function h(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("./Icon"),
        r = e("zrender/shape/Line"),
        i = new r({}),
        s = e("zrender/shape/BrokenLine"),
        o = new s({}),
        u = e("zrender/tool/matrix"),
        a = e("zrender/tool/area"),
        f = e("zrender/shape/util/dashedLineTo"),
        l = e("zrender/shape/util/smoothSpline"),
        c = e("zrender/tool/util");
    return h.prototype = {
        type: "mark-line",
        brush: function(e, t) {
            var n = this.style;
            t && (n = this.getHighlightStyle(n, this.highlightStyle || {})), e.save(), this.setContext(e, n), this.updateTransform(e), e.beginPath(), this.buildLinePath(e, n), e.stroke(), this.brushSymbol(e, n, 0), this.brushSymbol(e, n, 1), n.text && this.drawText(e, n, this.style), e.restore()
        },
        buildLinePath: function(e, t) {
            var n = t.pointList || this.getPointList(t);
            t.pointList = n;
            var r = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length));
            if (!t.lineType || t.lineType == "solid") {
                e.moveTo(n[0][0], n[0][1]);
                for (var i = 1; i < r; i++) e.lineTo(n[i][0], n[i][1])
            } else if (t.lineType == "dashed" || t.lineType == "dotted")
                if (t.smooth !== "spline") {
                    var s = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                    e.moveTo(n[0][0], n[0][1]);
                    for (var i = 1; i < r; i++) f(e, n[i - 1][0], n[i - 1][1], n[i][0], n[i][1], s)
                } else
                    for (var i = 1; i < r; i += 2) e.moveTo(n[i - 1][0], n[i - 1][1]), e.lineTo(n[i][0], n[i][1])
        },
        brushSymbol: function(e, t, r) {
            if (t.symbol[r] == "none") return;
            e.save(), e.beginPath(), e.lineWidth = t.symbolBorder, e.strokeStyle = t.symbolBorderColor, t.iconType = t.symbol[r].replace("empty", "").toLowerCase(), t.symbol[r].match("empty") && (e.fillStyle = "#fff");
            var i = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length)),
                s = r === 0 ? t.pointList[0][0] : t.pointList[i - 1][0],
                o = r === 0 ? t.pointList[0][1] : t.pointList[i - 1][1],
                a = typeof t.symbolRotate[r] != "undefined" ? t.symbolRotate[r] - 0 : 0,
                f;
            a !== 0 && (f = u.create(), u.identity(f), (s || o) && u.translate(f, f, [-s, -o]), u.rotate(f, f, a * Math.PI / 180), (s || o) && u.translate(f, f, [s, o]), e.transform.apply(e, f));
            if (t.iconType == "arrow" && a === 0) this.buildArrawPath(e, t, r);
            else {
                var l = t.symbolSize[r];
                t.x = s - l, t.y = o - l, t.width = l * 2, t.height = l * 2, n.prototype.buildPath(e, t)
            }
            e.closePath(), e.fill(), e.stroke(), e.restore()
        },
        buildArrawPath: function(e, t, n) {
            var r = Math.min(t.pointList.length, Math.round(t.pointListLength || t.pointList.length)),
                i = t.symbolSize[n] * 2,
                s = t.pointList[0][0],
                o = t.pointList[r - 1][0],
                u = t.pointList[0][1],
                a = t.pointList[r - 1][1],
                f = 0;
            t.smooth === "spline" && (f = .2);
            var l = Math.atan(Math.abs((a - u) / (s - o)));
            n === 0 ? o > s ? a > u ? l = Math.PI * 2 - l + f : l += f : a > u ? l += Math.PI - f : l = Math.PI - l - f : s > o ? u > a ? l = Math.PI * 2 - l + f : l += f : u > a ? l += Math.PI - f : l = Math.PI - l - f;
            var c = Math.PI / 8,
                h = n === 0 ? s : o,
                p = n === 0 ? u : a,
                d = [
                    [h + i * Math.cos(l - c), p - i * Math.sin(l - c)],
                    [h + i * .6 * Math.cos(l), p - i * .6 * Math.sin(l)],
                    [h + i * Math.cos(l + c), p - i * Math.sin(l + c)]
                ];
            e.moveTo(h, p);
            for (var v = 0, m = d.length; v < m; v++) e.lineTo(d[v][0], d[v][1]);
            e.lineTo(h, p)
        },
        getPointList: function(e) {
            var t = [
                [e.xStart, e.yStart],
                [e.xEnd, e.yEnd]
            ];
            if (e.smooth === "spline") {
                var n = t[1][0],
                    r = t[1][1];
                t[3] = [n, r], t[1] = this.getOffetPoint(t[0], t[3]), t[2] = this.getOffetPoint(t[3], t[0]), t = l(t, !1), t[t.length - 1] = [n, r]
            }
            return t
        },
        getOffetPoint: function(e, t) {
            var n = Math.sqrt(Math.round((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))) / 3,
                r = [e[0], e[1]],
                i, s = .2;
            if (e[0] != t[0] && e[1] != t[1]) {
                var o = (t[1] - e[1]) / (t[0] - e[0]);
                i = Math.atan(o)
            } else e[0] == t[0] ? i = (e[1] <= t[1] ? 1 : -1) * Math.PI / 2 : i = 0;
            var u, a;
            return e[0] <= t[0] ? (i -= s, u = Math.round(Math.cos(i) * n), a = Math.round(Math.sin(i) * n), r[0] += u, r[1] += a) : (i += s, u = Math.round(Math.cos(i) * n), a = Math.round(Math.sin(i) * n), r[0] -= u, r[1] -= a), r
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t = e.lineWidth || 1;
            return e.__rect = {
                x: Math.min(e.xStart, e.xEnd) - t,
                y: Math.min(e.yStart, e.yEnd) - t,
                width: Math.abs(e.xStart - e.xEnd) + t,
                height: Math.abs(e.yStart - e.yEnd) + t
            }, e.__rect
        },
        isCover: function(e, t) {
            var n = this.getTansform(e, t);
            e = n[0], t = n[1];
            var r = this.style.__rect;
            return r || (r = this.style.__rect = this.getRect(this.style)), e >= r.x && e <= r.x + r.width && t >= r.y && t <= r.y + r.height ? this.style.smooth !== "spline" ? a.isInside(i, this.style, e, t) : a.isInside(o, this.style, e, t) : !1
        }
    }, c.inherits(h, t), h
}), define("echarts/util/shape/normalIsCover", [], function() {
    return function(e, t) {
        var n = this.getTansform(e, t);
        e = n[0], t = n[1];
        var r = this.style.__rect;
        return r || (r = this.style.__rect = this.getRect(this.style)), e >= r.x && e <= r.x + r.width && t >= r.y && t <= r.y + r.height
    }
}), define("echarts/util/shape/Symbol", ["require", "zrender/shape/Base", "zrender/shape/Polygon", "zrender/tool/util", "./normalIsCover"], function(e) {
    function s(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("zrender/shape/Polygon"),
        r = new n({}),
        i = e("zrender/tool/util");
    return s.prototype = {
        type: "symbol",
        buildPath: function(e, t) {
            var n = t.pointList,
                r = n.length;
            if (r === 0) return;
            var i = 1e4,
                s = Math.ceil(r / i),
                o, u, a = n[0] instanceof Array,
                f = t.size ? t.size : 2,
                l = f,
                c = f / 2,
                h = Math.PI * 2,
                p, d, v;
            for (var m = 0; m < s; m++) {
                e.beginPath(), o = m * i, u = o + i, u = u > r ? r : u;
                for (var g = o; g < u; g++) {
                    t.random && (p = t["randomMap" + g % 20] / 100, l = f * p * p, c = l / 2), a ? (d = n[g][0], v = n[g][1]) : (d = n[g].x, v = n[g].y);
                    if (l < 3) e.rect(d - c, v - c, l, l);
                    else switch (t.iconType) {
                        case "circle":
                            e.moveTo(d, v), e.arc(d, v, c, 0, h, !0);
                            break;
                        case "diamond":
                            e.moveTo(d, v - c), e.lineTo(d + c / 3, v - c / 3), e.lineTo(d + c, v), e.lineTo(d + c / 3, v + c / 3), e.lineTo(d, v + c), e.lineTo(d - c / 3, v + c / 3), e.lineTo(d - c, v), e.lineTo(d - c / 3, v - c / 3), e.lineTo(d, v - c);
                            break;
                        default:
                            e.rect(d - c, v - c, l, l)
                    }
                }
                e.closePath();
                if (m < s - 1) switch (t.brushType) {
                    case "both":
                        e.fill();
                    case "stroke":
                        t.lineWidth > 0 && e.stroke();
                        break;
                    default:
                        e.fill()
                }
            }
        },
        getRect: function(e) {
            return e.__rect || r.getRect(e)
        },
        isCover: e("./normalIsCover")
    }, i.inherits(s, t), s
}), define("echarts/util/ecData", [], function() {
    function e(e, t, n, r, i, s, o, u) {
        var a;
        return typeof r != "undefined" && (a = r.value == null ? r : r.value), e._echartsData = {
            _series: t,
            _seriesIndex: n,
            _data: r,
            _dataIndex: i,
            _name: s,
            _value: a,
            _special: o,
            _special2: u
        }, e._echartsData
    }

    function t(e, t) {
        var n = e._echartsData;
        if (!t) return n;
        switch (t) {
            case "series":
            case "seriesIndex":
            case "data":
            case "dataIndex":
            case "name":
            case "value":
            case "special":
            case "special2":
                return n && n["_" + t]
        }
        return null
    }

    function n(e, t, n) {
        e._echartsData = e._echartsData || {};
        switch (t) {
            case "series":
            case "seriesIndex":
            case "data":
            case "dataIndex":
            case "name":
            case "value":
            case "special":
            case "special2":
                e._echartsData["_" + t] = n
        }
    }

    function r(e, t) {
        t._echartsData = {
            _series: e._echartsData._series,
            _seriesIndex: e._echartsData._seriesIndex,
            _data: e._echartsData._data,
            _dataIndex: e._echartsData._dataIndex,
            _name: e._echartsData._name,
            _value: e._echartsData._value,
            _special: e._echartsData._special,
            _special2: e._echartsData._special2
        }
    }
    return {
        pack: e,
        set: n,
        get: t,
        clone: r
    }
}), define("echarts/util/ecAnimation", ["require", "zrender/tool/util", "zrender/shape/Polygon"], function(e) {
    function n(e, n, r, i, s) {
        var o = r.style.pointList,
            u = o.length,
            a;
        if (!n) {
            a = [];
            if (r._orient != "vertical") {
                var f = o[0][1];
                for (var l = 0; l < u; l++) a[l] = [o[l][0], f]
            } else {
                var c = o[0][0];
                for (var l = 0; l < u; l++) a[l] = [c, o[l][1]]
            }
            r.type == "half-smooth-polygon" && (a[u - 1] = t.clone(o[u - 1]), a[u - 2] = t.clone(o[u - 2])), n = {
                style: {
                    pointList: a
                }
            }
        }
        a = n.style.pointList;
        var h = a.length;
        h == u ? r.style.pointList = a : h < u ? r.style.pointList = a.concat(o.slice(h)) : r.style.pointList = a.slice(0, u), e.addShape(r), e.animate(r.id, "style").when(i, {
            pointList: o
        }).start(s)
    }

    function r(e, t) {
        var n = arguments.length;
        for (var r = 2; r < n; r++) {
            var i = arguments[r];
            e.style[i] = t.style[i]
        }
    }

    function i(e, t, n, i, s) {
        var o = n.style;
        t || (t = {
            style: {
                x: o.x,
                y: n._orient == "vertical" ? o.y + o.height : o.y,
                width: n._orient == "vertical" ? o.width : 0,
                height: n._orient != "vertical" ? o.height : 0
            }
        });
        var u = o.x,
            a = o.y,
            f = o.width,
            l = o.height;
        r(n, t, "x", "y", "width", "height"), e.addShape(n), e.animate(n.id, "style").when(i, {
            x: u,
            y: a,
            width: f,
            height: l
        }).start(s)
    }

    function s(e, t, n, r, i) {
        if (!t) {
            var s = n.style.y;
            t = {
                style: {
                    y: [s[0], s[0], s[0], s[0]]
                }
            }
        }
        var o = n.style.y;
        n.style.y = t.style.y, e.addShape(n), e.animate(n.id, "style").when(r, {
            y: o
        }).start(i)
    }

    function o(e, t, n, r, i) {
        var s = n.style.x,
            o = n.style.y,
            u = n.style.r0,
            a = n.style.r;
        n._animationAdd != "r" ? (n.style.r0 = 0, n.style.r = 0, n.rotation = [Math.PI * 2, s, o], e.addShape(n), e.animate(n.id, "style").when(r, {
            r0: u,
            r: a
        }).start(i), e.animate(n.id, "").when(Math.round(r / 3 * 2), {
            rotation: [0, s, o]
        }).start(i)) : (n.style.r0 = n.style.r, e.addShape(n), e.animate(n.id, "style").when(r, {
            r0: u
        }).start(i))
    }

    function u(e, t, n, i, s) {
        t || (n._animationAdd != "r" ? t = {
            style: {
                startAngle: n.style.startAngle,
                endAngle: n.style.startAngle
            }
        } : t = {
            style: {
                r0: n.style.r
            }
        });
        var o = n.style.startAngle,
            u = n.style.endAngle;
        r(n, t, "startAngle", "endAngle"), e.addShape(n), e.animate(n.id, "style").when(i, {
            startAngle: o,
            endAngle: u
        }).start(s)
    }

    function a(e, t, n, i, s) {
        t || (t = {
            style: {
                x: n.style.textAlign == "left" ? n.style.x + 100 : n.style.x - 100,
                y: n.style.y
            }
        });
        var o = n.style.x,
            u = n.style.y;
        r(n, t, "x", "y"), e.addShape(n), e.animate(n.id, "style").when(i, {
            x: o,
            y: u
        }).start(s)
    }

    function f(t, n, r, i, s) {
        var o = e("zrender/shape/Polygon").prototype.getRect(r.style),
            u = o.x + o.width / 2,
            a = o.y + o.height / 2;
        r.scale = [.1, .1, u, a], t.addShape(r), t.animate(r.id, "").when(i, {
            scale: [1, 1, u, a]
        }).start(s)
    }

    function l(e, t, n, i, s) {
        t || (t = {
            style: {
                source0: 0,
                source1: 360,
                target0: 0,
                target1: 360
            }
        });
        var o = n.style.source0,
            u = n.style.source1,
            a = n.style.target0,
            f = n.style.target1;
        t.style && r(n, t, "source0", "source1", "target0", "target1"), e.addShape(n), e.animate(n.id, "style").when(i, {
            source0: o,
            source1: u,
            target0: a,
            target1: f
        }).start(s)
    }

    function c(e, t, n, r, i) {
        t || (t = {
            style: {
                angle: n.style.startAngle
            }
        });
        var s = n.style.angle;
        n.style.angle = t.style.angle, e.addShape(n), e.animate(n.id, "style").when(r, {
            angle: s
        }).start(i)
    }

    function h(e, t, n, r, s) {
        n.style._x = n.style.x, n.style._y = n.style.y, n.style._width = n.style.width, n.style._height = n.style.height;
        if (!t) {
            var o = n._x || 0,
                u = n._y || 0;
            n.scale = [0, 0, o, u], e.addShape(n), e.animate(n.id, "").when(r, {
                scale: [1, 1, o, u]
            }).start(s || "QuinticOut")
        } else i(e, t, n, r, s)
    }

    function p(e, t, n, i, s) {
        t || (t = {
            style: {
                xEnd: n.style.xStart,
                yEnd: n.style.yStart
            }
        });
        var o = n.style.xStart,
            u = n.style.xEnd,
            a = n.style.yStart,
            f = n.style.yEnd;
        r(n, t, "xStart", "xEnd", "yStart", "yEnd"), e.addShape(n), e.animate(n.id, "style").when(i, {
            xStart: o,
            xEnd: u,
            yStart: a,
            yEnd: f
        }).start(s)
    }

    function d(e, t, n, r, i) {
        t ? p(e, t, n, r, i) : n.style.smooth ? (n.style.pointListLength = 1, e.addShape(n), n.style.pointList = n.style.pointList || n.getPointList(n.style), e.animate(n.id, "style").when(r, {
            pointListLength: n.style.pointList.length
        }).start(i || "QuinticOut")) : (n.style.pointList = [
            [n.style.xStart, n.style.yStart],
            [n.style.xStart, n.style.yStart]
        ], e.addShape(n), e.animate(n.id, "style").when(r, {
            pointList: [
                [n.style.xStart, n.style.yStart],
                [n._x || 0, n._y || 0]
            ]
        }).start(i || "QuinticOut"))
    }
    var t = e("zrender/tool/util");
    return {
        pointList: n,
        rectangle: i,
        candle: s,
        ring: o,
        sector: u,
        text: a,
        polygon: f,
        chord: l,
        gaugePointer: c,
        icon: h,
        line: p,
        markline: d
    }
}), define("zrender/shape/Circle", ["require", "./Base", "../tool/util"], function(e) {
    function n(e) {
        t.call(this, e)
    }
    var t = e("./Base");
    return n.prototype = {
        type: "circle",
        buildPath: function(e, t) {
            e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !0);
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
                x: Math.round(e.x - e.r - t / 2),
                y: Math.round(e.y - e.r - t / 2),
                width: e.r * 2 + t,
                height: e.r * 2 + t
            }, e.__rect
        }
    }, e("../tool/util").inherits(n, t), n
}), define("echarts/util/ecEffect", ["require", "../util/ecData", "zrender/shape/Circle", "zrender/shape/Image", "../util/shape/Icon", "../util/shape/Symbol", "zrender/tool/env"], function(e) {
    function u(e, n, s, u) {
        var a = s.effect,
            f = a.color || s.style.strokeColor || s.style.color,
            l = a.shadowColor || f,
            c = a.scaleSize,
            h = typeof a.shadowBlur != "undefined" ? a.shadowBlur : c,
            p = new i({
                zlevel: u,
                style: {
                    brushType: "stroke",
                    iconType: s.style.iconType != "pin" && s.style.iconType != "droplet" ? s.style.iconType : "circle",
                    x: h + 1,
                    y: h + 1,
                    n: s.style.n,
                    width: s.style.width * c,
                    height: s.style.height * c,
                    lineWidth: 1,
                    strokeColor: f,
                    shadowColor: l,
                    shadowBlur: h
                },
                draggable: !1,
                hoverable: !1
            });
        o && (p.style.image = e.shapeToImage(p, p.style.width + h * 2 + 2, p.style.height + h * 2 + 2).style.image, p = new r({
            zlevel: p.zlevel,
            style: p.style,
            draggable: !1,
            hoverable: !1
        })), t.clone(s, p), p.position = s.position, n.push(p), e.addShape(p);
        var d = window.devicePixelRatio || 1,
            v = (p.style.width / d - s.style.width) / 2;
        p.style.x = s.style._x - v, p.style.y = s.style._y - v;
        var m = (a.period + Math.random() * 10) * 100;
        e.modShape(s.id, {
            invisible: !0
        });
        var g = p.style.x + p.style.width / 2 / d,
            y = p.style.y + p.style.height / 2 / d;
        e.modShape(p.id, {
            scale: [.1, .1, g, y]
        }), e.animate(p.id, "", !0).when(m, {
            scale: [1, 1, g, y]
        }).start()
    }

    function a(e, t, n, r) {
        var i = n.effect,
            o = i.color || n.style.strokeColor || n.style.color,
            u = i.scaleSize,
            a = i.shadowColor || o,
            f = typeof i.shadowBlur != "undefined" ? i.shadowBlur : u * 2,
            l = window.devicePixelRatio || 1,
            c = new s({
                zlevel: r,
                position: n.position,
                scale: n.scale,
                style: {
                    pointList: n.style.pointList,
                    iconType: n.style.iconType,
                    color: o,
                    strokeColor: o,
                    shadowColor: a,
                    shadowBlur: f * l,
                    random: !0,
                    brushType: "fill",
                    lineWidth: 1,
                    size: n.style.size
                },
                draggable: !1,
                hoverable: !1
            });
        t.push(c), e.addShape(c), e.modShape(n.id, {
            invisible: !0
        });
        var h = Math.round(i.period * 100),
            p = {},
            d = {};
        for (var v = 0; v < 20; v++) c.style["randomMap" + v] = 0, p = {}, p["randomMap" + v] = 100, d = {}, d["randomMap" + v] = 0, c.style["randomMap" + v] = Math.random() * 100, e.animate(c.id, "style", !0).when(h, p).when(h * 2, d).when(h * 3, p).when(h * 4, p).delay(Math.random() * h * v).start()
    }

    function f(e, i, s, u) {
        var a = s.effect,
            f = a.color || s.style.strokeColor || s.style.color,
            l = a.shadowColor || s.style.strokeColor || f,
            c = s.style.lineWidth * a.scaleSize,
            h = typeof a.shadowBlur != "undefined" ? a.shadowBlur : c,
            p = new n({
                zlevel: u,
                style: {
                    x: h,
                    y: h,
                    r: c,
                    color: f,
                    shadowColor: l,
                    shadowBlur: h
                },
                draggable: !1,
                hoverable: !1
            }),
            d;
        o ? (p.style.image = e.shapeToImage(p, (c + h) * 2, (c + h) * 2).style.image, p = new r({
            zlevel: p.zlevel,
            style: p.style,
            draggable: !1,
            hoverable: !1
        }), d = h) : d = 0, t.clone(s, p), p.position = s.position, i.push(p), e.addShape(p), p.style.x = s.style.xStart - d, p.style.y = s.style.yStart - d;
        var v = (s.style.xStart - s.style.xEnd) * (s.style.xStart - s.style.xEnd) + (s.style.yStart - s.style.yEnd) * (s.style.yStart - s.style.yEnd),
            m = Math.round(Math.sqrt(Math.round(v * a.period * a.period)));
        if (!s.style.smooth) e.animate(p.id, "style", !0).when(m, {
            x: s._x - d,
            y: s._y - d
        }).start();
        else {
            var g = s.style.pointList || s.getPointList(s.style),
                y = g.length;
            m = Math.round(m / y);
            var b = e.animate(p.id, "style", !0),
                w = Math.ceil(y / 8);
            for (var E = 0; E < y - w; E += w) b.when(m * (E + 1), {
                x: g[E][0] - d,
                y: g[E][1] - d
            });
            b.when(m * y, {
                x: g[y - 1][0] - d,
                y: g[y - 1][1] - d
            }), b.start("spline")
        }
    }
    var t = e("../util/ecData"),
        n = e("zrender/shape/Circle"),
        r = e("zrender/shape/Image"),
        i = e("../util/shape/Icon"),
        s = e("../util/shape/Symbol"),
        o = e("zrender/tool/env").canvasSupported;
    return {
        point: u,
        largePoint: a,
        line: f
    }
}), define("echarts/util/accMath", [], function() {
    function e(e, n) {
        return t(e, 1 / n)
    }

    function t(e, t) {
        var n = 0,
            r = e.toString(),
            i = t.toString();
        try {
            n += r.split(".")[1].length
        } catch (s) {}
        try {
            n += i.split(".")[1].length
        } catch (s) {}
        return (r.replace(".", "") - 0) * (i.replace(".", "") - 0) / Math.pow(10, n)
    }

    function n(e, t) {
        var n = 0,
            r = 0;
        try {
            n = e.toString().split(".")[1].length
        } catch (i) {}
        try {
            r = t.toString().split(".")[1].length
        } catch (i) {}
        var s = Math.pow(10, Math.max(n, r));
        return (Math.round(e * s) + Math.round(t * s)) / s
    }

    function r(e, t) {
        return n(e, -t)
    }
    return {
        accDiv: e,
        accMul: t,
        accAdd: n,
        accSub: r
    }
}), define("echarts/chart/base", ["require", "zrender/shape/Image", "../util/shape/Icon", "../util/shape/MarkLine", "../util/shape/Symbol", "../config", "../util/ecData", "../util/ecAnimation", "../util/ecEffect", "../util/accMath", "zrender/tool/util", "zrender/tool/area"], function(e) {
    function h() {
        var e = this;
        this.selectedMap = {}, this.lastShapeList = [], this.shapeHandler = {
            onclick: function() {
                e.isClick = !0
            },
            ondragover: function(t) {
                var n = t.target;
                n.highlightStyle = n.highlightStyle || {};
                var r = n.highlightStyle,
                    i = r.brushTyep,
                    s = r.strokeColor,
                    o = r.lineWidth;
                r.brushType = "stroke", r.strokeColor = e.ecTheme.calculableColor, r.lineWidth = n.type == "icon" ? 30 : 10, e.zr.addHoverShape(n), setTimeout(function() {
                    n.highlightStyle && (n.highlightStyle.brushType = i, n.highlightStyle.strokeColor = s, n.highlightStyle.lineWidth = o)
                }, 20)
            },
            ondrop: function(t) {
                typeof o.get(t.dragged, "data") != "undefined" && (e.isDrop = !0)
            },
            ondragend: function() {
                e.isDragend = !0
            }
        }
    }
    var t = e("zrender/shape/Image"),
        n = e("../util/shape/Icon"),
        r = e("../util/shape/MarkLine"),
        i = e("../util/shape/Symbol"),
        s = e("../config"),
        o = e("../util/ecData"),
        u = e("../util/ecAnimation"),
        a = e("../util/ecEffect"),
        f = e("../util/accMath"),
        l = e("zrender/tool/util"),
        c = e("zrender/tool/area");
    return h.prototype = {
        setCalculable: function(e) {
            return e.dragEnableTime = this.ecTheme.DRAG_ENABLE_TIME, e.ondragover = this.shapeHandler.ondragover, e.ondragend = this.shapeHandler.ondragend, e.ondrop = this.shapeHandler.ondrop, e
        },
        ondrop: function(e, t) {
            if (!this.isDrop || !e.target) return;
            var n = e.target,
                r = e.dragged,
                i = o.get(n, "seriesIndex"),
                u = o.get(n, "dataIndex"),
                a = this.series,
                l, c = this.component.legend;
            if (u == -1) {
                l = {
                    value: o.get(r, "value"),
                    name: o.get(r, "name")
                }, this.type == s.CHART_TYPE_PIE && l.value < 0 && (l.value = 0);
                var h = !1,
                    p = a[i].data;
                for (var d = 0, v = p.length; d < v; d++) p[d].name == l.name && p[d].value == "-" && (a[i].data[d].value = l.value, h = !0);
                !h && a[i].data.push(l), c && c.add(l.name, r.style.color || r.style.strokeColor)
            } else {
                l = this.option.series[i].data[u] || "-";
                if (typeof l.value != "undefined") {
                    l.value != "-" ? this.option.series[i].data[u].value = f.accAdd(this.option.series[i].data[u].value, o.get(r, "value")) : this.option.series[i].data[u].value = o.get(r, "value");
                    if (this.type == s.CHART_TYPE_FUNNEL || this.type == s.CHART_TYPE_PIE) c && c.getRelatedAmount(l.name) == 1 && this.component.legend.del(l.name), l.name += this.option.nameConnector + o.get(r, "name"), c && c.add(l.name, r.style.color || r.style.strokeColor)
                } else l != "-" ? this.option.series[i].data[u] = f.accAdd(this.option.series[i].data[u], o.get(r, "value")) : this.option.series[i].data[u] = o.get(r, "value")
            }
            t.dragIn = t.dragIn || !0, this.isDrop = !1;
            var m = this;
            setTimeout(function() {
                m.zr.trigger("mousemove", e.event)
            }, 300);
            return
        },
        ondragend: function(e, t) {
            if (!this.isDragend || !e.target) return;
            var n = e.target,
                r = o.get(n, "seriesIndex"),
                i = o.get(n, "dataIndex"),
                s = this.series;
            if (typeof s[r].data[i].value != "undefined") {
                s[r].data[i].value = "-";
                var u = s[r].data[i].name;
                this.component.legend && this.component.legend.getRelatedAmount(u) == 0 && this.component.legend.del(u)
            } else s[r].data[i] = "-";
            t.dragOut = !0, t.needRefresh = !0, this.isDragend = !1;
            return
        },
        onlegendSelected: function(e, t) {
            var n = e.selected;
            for (var r in this.selectedMap) this.selectedMap[r] != n[r] && (t.needRefresh = !0), this.selectedMap[r] = n[r];
            return
        },
        addLabel: function(e, t, n, r, i) {
            var s = [n, t],
                o = this.deepMerge(s, "itemStyle.normal.label"),
                u = this.deepMerge(s, "itemStyle.emphasis.label"),
                a = o.textStyle || {},
                f = u.textStyle || {};
            return o.show && (e.style.text = this._getLabelText(t, n, r, "normal"), e.style.textPosition = typeof o.position == "undefined" ? i == "horizontal" ? "right" : "top" : o.position, e.style.textColor = a.color, e.style.textFont = this.getFont(a)), u.show && (e.highlightStyle.text = this._getLabelText(t, n, r, "emphasis"), e.highlightStyle.textPosition = o.show ? e.style.textPosition : typeof u.position == "undefined" ? i == "horizontal" ? "right" : "top" : u.position, e.highlightStyle.textColor = f.color, e.highlightStyle.textFont = this.getFont(f)), e
        },
        _getLabelText: function(e, t, n, r) {
            var i = this.deepQuery([t, e], "itemStyle." + r + ".label.formatter");
            !i && r == "emphasis" && (i = this.deepQuery([t, e], "itemStyle.normal.label.formatter"));
            var s = typeof t != "undefined" ? typeof t.value != "undefined" ? t.value : t : "-";
            if (!i) return s;
            if (typeof i == "function") return i(e.name, n, s);
            if (typeof i == "string") return i = i.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), i = i.replace("{a0}", e.name).replace("{b0}", n).replace("{c0}", s), i
        },
        buildMark: function(e) {
            var t = this.series[e];
            this.selectedMap[t.name] && (t.markPoint && this._buildMarkPoint(e), t.markLine && this._buildMarkLine(e))
        },
        _buildMarkPoint: function(e) {
            var t = (this.markAttachStyle || {})[e],
                n = this.series[e],
                r = this.getZlevelBase(),
                i, o, u = l.clone(n.markPoint);
            for (var a = 0, f = u.data.length; a < f; a++) i = u.data[a], o = this.getMarkCoord(e, i), u.data[a].x = typeof i.x != "undefined" ? i.x : o[0], u.data[a].y = typeof i.y != "undefined" ? i.y : o[1], i.type && (i.type == "max" || i.type == "min") && (u.data[a].value = o[3], u.data[a].name = i.name || i.type, u.data[a].symbolSize = u.data[a].symbolSize || c.getTextWidth(o[3], this.getFont()) / 2 + 5);
            var h = this._markPoint(e, u);
            for (var a = 0, f = h.length; a < f; a++) {
                h[a].zlevel = r + 1;
                for (var p in t) h[a][p] = l.clone(t[p]);
                this.shapeList.push(h[a])
            }
            if (this.type == s.CHART_TYPE_FORCE || this.type == s.CHART_TYPE_CHORD)
                for (var a = 0, f = h.length; a < f; a++) this.zr.addShape(h[a])
        },
        _buildMarkLine: function(e) {
            var t = (this.markAttachStyle || {})[e],
                n = this.series[e],
                r = this.getZlevelBase(),
                i, o, u = l.clone(n.markLine);
            for (var a = 0, f = u.data.length; a < f; a++) i = u.data[a], !i.type || i.type != "max" && i.type != "min" && i.type != "average" ? o = [this.getMarkCoord(e, i[0]), this.getMarkCoord(e, i[1])] : (o = this.getMarkCoord(e, i), u.data[a] = [l.clone(i), {}], u.data[a][0].name = i.name || i.type, u.data[a][0].value = o[3], o = o[2], i = [{}, {}]), u.data[a][0].x = typeof i[0].x != "undefined" ? i[0].x : o[0][0], u.data[a][0].y = typeof i[0].y != "undefined" ? i[0].y : o[0][1], u.data[a][1].x = typeof i[1].x != "undefined" ? i[1].x : o[1][0], u.data[a][1].y = typeof i[1].y != "undefined" ? i[1].y : o[1][1];
            var c = this._markLine(e, u);
            for (var a = 0, f = c.length; a < f; a++) {
                c[a].zlevel = r + 1;
                for (var h in t) c[a][h] = l.clone(t[h]);
                this.shapeList.push(c[a])
            }
            if (this.type == s.CHART_TYPE_FORCE || this.type == s.CHART_TYPE_CHORD)
                for (var a = 0, f = c.length; a < f; a++) this.zr.addShape(c[a])
        },
        _markPoint: function(e, t) {
            var n = this.series[e],
                r = this.component;
            l.merge(t, this.ecTheme.markPoint), t.name = n.name;
            var i = [],
                u = t.data,
                a, f = r.dataRange,
                c = r.legend,
                h, p, d, v, m, g, y = this.zr.getWidth(),
                b = this.zr.getHeight();
            if (!t.large)
                for (var w = 0, E = u.length; w < E; w++) {
                    p = typeof u[w] != "undefined" && typeof u[w].value != "undefined" ? u[w].value : "", c && (h = c.getColor(n.name));
                    if (f) {
                        h = isNaN(p) ? h : f.getColor(p), d = [u[w], t], v = this.deepQuery(d, "itemStyle.normal.color") || h, m = this.deepQuery(d, "itemStyle.emphasis.color") || v;
                        if (v == null && m == null) continue
                    }
                    u[w].tooltip = u[w].tooltip || {
                        trigger: "item"
                    }, u[w].name = typeof u[w].name != "undefined" ? u[w].name : "", u[w].value = p, a = this.getSymbolShape(t, e, u[w], w, u[w].name, this.parsePercent(u[w].x, y), this.parsePercent(u[w].y, b), "pin", h, "rgba(0,0,0,0)", "horizontal"), a._mark = "point", g = this.deepMerge([u[w], t], "effect"), g.show && (a.effect = g), n.type == s.CHART_TYPE_MAP && (a._geo = this.getMarkGeo(u[w])), o.pack(a, n, e, u[w], w, u[w].name, p), i.push(a)
                } else a = this.getLargeMarkPoingShape(e, t), a._mark = "largePoint", a && i.push(a);
            return i
        },
        _markLine: function(e, t) {
            var n = this.series[e],
                r = this.component;
            l.merge(t, this.ecTheme.markLine), t.symbol = t.symbol instanceof Array ? t.symbol.length > 1 ? t.symbol : [t.symbol[0], t.symbol[0]] : [t.symbol, t.symbol], t.symbolSize = t.symbolSize instanceof Array ? t.symbolSize.length > 1 ? t.symbolSize : [t.symbolSize[0], t.symbolSize[0]] : [t.symbolSize, t.symbolSize], t.symbolRotate = t.symbolRotate instanceof Array ? t.symbolRotate.length > 1 ? t.symbolRotate : [t.symbolRotate[0], t.symbolRotate[0]] : [t.symbolRotate, t.symbolRotate], t.name = n.name;
            var i = [],
                u = t.data,
                a, f = r.dataRange,
                c = r.legend,
                h, p, d, v, m, g, y = this.zr.getWidth(),
                b = this.zr.getHeight(),
                w;
            for (var E = 0, S = u.length; E < S; E++) {
                c && (h = c.getColor(n.name)), w = this.deepMerge(u[E]), p = typeof w != "undefined" && typeof w.value != "undefined" ? w.value : "";
                if (f) {
                    h = isNaN(p) ? h : f.getColor(p), d = [w, t], v = this.deepQuery(d, "itemStyle.normal.color") || h, m = this.deepQuery(d, "itemStyle.emphasis.color") || v;
                    if (v == null && m == null) continue
                }
                u[E][0].tooltip = w.tooltip || {
                    trigger: "item"
                }, u[E][0].name = typeof u[E][0].name != "undefined" ? u[E][0].name : "", u[E][1].name = typeof u[E][1].name != "undefined" ? u[E][1].name : "", u[E][0].value = typeof u[E][0].value != "undefined" ? u[E][0].value : "", a = this.getLineMarkShape(t, e, u[E], E, this.parsePercent(u[E][0].x, y), this.parsePercent(u[E][0].y, b), this.parsePercent(u[E][1].x, y), this.parsePercent(u[E][1].y, b), h), a._mark = "line", g = this.deepMerge([w, t], "effect"), g.show && (a.effect = g), n.type == s.CHART_TYPE_MAP && (a._geo = [this.getMarkGeo(u[E][0]), this.getMarkGeo(u[E][1])]), o.pack(a, n, e, u[E][0], E, u[E][0].name + (u[E][1].name !== "" ? " > " + u[E][1].name : ""), p), i.push(a)
            }
            return i
        },
        getMarkCoord: function() {
            return [0, 0]
        },
        getSymbolShape: function(e, r, i, s, u, a, f, l, c, h, p) {
            var d = [i, e],
                v = typeof i != "undefined" ? typeof i.value != "undefined" ? i.value : i : "-";
            l = this.deepQuery(d, "symbol") || l;
            var m = this.deepQuery(d, "symbolSize");
            m = typeof m == "function" ? m(v) : m;
            var g = this.deepQuery(d, "symbolRotate"),
                y = this.deepMerge(d, "itemStyle.normal"),
                b = this.deepMerge(d, "itemStyle.emphasis"),
                w = typeof y.borderWidth != "undefined" ? y.borderWidth : y.lineStyle && y.lineStyle.width;
            typeof w == "undefined" && (w = l.match("empty") ? 2 : 0);
            var E = typeof b.borderWidth != "undefined" ? b.borderWidth : b.lineStyle && b.lineStyle.width;
            typeof E == "undefined" && (E = w + 2);
            var S = new n({
                style: {
                    iconType: l.replace("empty", "").toLowerCase(),
                    x: a - m,
                    y: f - m,
                    width: m * 2,
                    height: m * 2,
                    brushType: "both",
                    color: l.match("empty") ? h : this.getItemStyleColor(y.color, r, s, i) || c,
                    strokeColor: y.borderColor || this.getItemStyleColor(y.color, r, s, i) || c,
                    lineWidth: w
                },
                highlightStyle: {
                    color: l.match("empty") ? h : this.getItemStyleColor(b.color, r, s, i),
                    strokeColor: b.borderColor || y.borderColor || this.getItemStyleColor(y.color, r, s, i) || c,
                    lineWidth: E
                },
                clickable: !0
            });
            return l.match("image") && (S.style.image = l.replace(new RegExp("^image:\\/\\/"), ""), S = new t({
                style: S.style,
                highlightStyle: S.highlightStyle,
                clickable: !0
            })), typeof g != "undefined" && (S.rotation = [g * Math.PI / 180, a, f]), l.match("star") && (S.style.iconType = "star", S.style.n = l.replace("empty", "").replace("star", "") - 0 || 5), l == "none" && (S.invisible = !0, S.hoverable = !1), S = this.addLabel(S, e, i, u, p), l.match("empty") && (typeof S.style.textColor == "undefined" && (S.style.textColor = S.style.strokeColor), typeof S.highlightStyle.textColor == "undefined" && (S.highlightStyle.textColor = S.highlightStyle.strokeColor)), o.pack(S, e, r, i, s, u), S._x = a, S._y = f, S._dataIndex = s, S._seriesIndex = r, S
        },
        getLineMarkShape: function(e, t, n, i, s, o, u, a, f) {
            var l = typeof n[0] != "undefined" ? typeof n[0].value != "undefined" ? n[0].value : n[0] : "-",
                c = typeof n[1] != "undefined" ? typeof n[1].value != "undefined" ? n[1].value : n[1] : "-",
                h = [this.query(n[0], "symbol") || e.symbol[0], this.query(n[1], "symbol") || e.symbol[1]],
                p = [this.query(n[0], "symbolSize") || e.symbolSize[0], this.query(n[1], "symbolSize") || e.symbolSize[1]];
            p[0] = typeof p[0] == "function" ? p[0](l) : p[0], p[1] = typeof p[1] == "function" ? p[1](c) : p[1];
            var d = [this.query(n[0], "symbolRotate") || e.symbolRotate[0], this.query(n[1], "symbolRotate") || e.symbolRotate[1]],
                v = [n[0], e],
                m = this.deepMerge(v, "itemStyle.normal");
            m.color = this.getItemStyleColor(m.color, t, i, n);
            var g = this.deepMerge(v, "itemStyle.emphasis");
            g.color = this.getItemStyleColor(g.color, t, i, n);
            var y = m.lineStyle,
                b = g.lineStyle,
                w = y.width;
            typeof w == "undefined" && (w = m.borderWidth);
            var E = b.width;
            typeof E == "undefined" && (typeof g.borderWidth != "undefined" ? E = g.borderWidth : E = w + 2);
            var S = new r({
                style: {
                    smooth: e.smooth ? "spline" : !1,
                    symbol: h,
                    symbolSize: p,
                    symbolRotate: d,
                    xStart: s,
                    yStart: o,
                    xEnd: u,
                    yEnd: a,
                    brushType: "both",
                    lineType: y.type,
                    shadowColor: y.shadowColor || y.color || m.borderColor || m.color || f,
                    shadowBlur: y.shadowBlur,
                    shadowOffsetX: y.shadowOffsetX,
                    shadowOffsetY: y.shadowOffsetY,
                    color: m.color || f,
                    strokeColor: y.color || m.borderColor || m.color || f,
                    lineWidth: w,
                    symbolBorderColor: m.borderColor || m.color || f,
                    symbolBorder: m.borderWidth
                },
                highlightStyle: {
                    shadowColor: b.shadowColor,
                    shadowBlur: b.shadowBlur,
                    shadowOffsetX: b.shadowOffsetX,
                    shadowOffsetY: b.shadowOffsetY,
                    color: g.color || m.color || f,
                    strokeColor: b.color || y.color || g.borderColor || m.borderColor || g.color || m.color || f,
                    lineWidth: E,
                    symbolBorderColor: g.borderColor || m.borderColor || g.color || m.color || f,
                    symbolBorder: typeof g.borderWidth == "undefined" ? m.borderWidth + 2 : g.borderWidth
                },
                clickable: !0
            });
            return S = this.addLabel(S, e, n[0], n[0].name + " : " + n[1].name), S._x = u, S._y = a, S
        },
        getLargeMarkPoingShape: function(e, t) {
            var n = this.series[e],
                r = this.component,
                s = t.data,
                o, u = r.dataRange,
                a = r.legend,
                f, l, c = [s[0], t],
                h, p, d;
            a && (f = a.getColor(n.name));
            if (u) {
                l = typeof s[0] != "undefined" ? typeof s[0].value != "undefined" ? s[0].value : s[0] : "-", f = isNaN(l) ? f : u.getColor(l), h = this.deepQuery(c, "itemStyle.normal.color") || f, p = this.deepQuery(c, "itemStyle.emphasis.color") || h;
                if (h == null && p == null) return
            }
            f = this.deepMerge(c, "itemStyle.normal").color || f, symbol = this.deepQuery(c, "symbol") || "circle", symbol = symbol.replace("empty", "").replace(/\d/g, ""), d = this.deepMerge([s[0], t], "effect");
            var v = window.devicePixelRatio || 1;
            return o = new i({
                style: {
                    pointList: s,
                    color: f,
                    strokeColor: f,
                    shadowColor: d.shadowColor || f,
                    shadowBlur: (typeof d.shadowBlur != "undefined" ? d.shadowBlur : 8) * v,
                    size: this.deepQuery(c, "symbolSize"),
                    iconType: symbol,
                    brushType: "fill",
                    lineWidth: 1
                },
                draggable: !1,
                hoverable: !1
            }), d.show && (o.effect = d), o
        },
        backupShapeList: function() {
            this.shapeList && this.shapeList.length > 0 ? (this.lastShapeList = this.shapeList, this.shapeList = []) : this.lastShapeList = []
        },
        addShapeList: function() {
            var e = this.option.animationThreshold / (this.canvasSupported ? 2 : 4),
                t = this.lastShapeList,
                n = this.shapeList,
                r = t.length > 0 ? 500 : this.query(this.option, "animationDuration"),
                i = this.query(this.option, "animationEasing"),
                s, o = {},
                u = {};
            if (this.option.animation && !this.option.renderAsImage && n.length < e && !this.motionlessOnce) {
                for (var a = 0, f = t.length; a < f; a++) s = this._getAnimationKey(t[a]), s.match("undefined") ? this.zr.delShape(t[a].id) : (s += t[a].type, o[s] = t[a]);
                for (var a = 0, f = n.length; a < f; a++) s = this._getAnimationKey(n[a]), s.match("undefined") ? this.zr.addShape(n[a]) : (s += n[a].type, u[s] = n[a]);
                for (s in o) u[s] || this.zr.delShape(o[s].id);
                for (s in u) o[s] ? (this.zr.delShape(o[s].id), this._animateMod(o[s], u[s], r, i)) : this._animateMod(!1, u[s], r, i);
                this.zr.refresh(), this.animationEffect()
            } else {
                this.motionlessOnce = !1, this.zr.delShape(t);
                for (var a = 0, f = n.length; a < f; a++) this.zr.addShape(n[a])
            }
        },
        _getAnimationKey: function(e) {
            return this.type != s.CHART_TYPE_MAP ? o.get(e, "seriesIndex") + "_" + o.get(e, "dataIndex") + (e._mark ? e._mark : "") + (this.type == s.CHART_TYPE_RADAR ? o.get(e, "special") : "") : o.get(e, "seriesIndex") + "_" + o.get(e, "dataIndex") + (e._mark ? e._mark : "undefined")
        },
        _animateMod: function(e, t, n, r) {
            switch (t.type) {
                case "broken-line":
                case "half-smooth-polygon":
                    u.pointList(this.zr, e, t, n, r);
                    break;
                case "rectangle":
                    u.rectangle(this.zr, e, t, n, r);
                    break;
                case "icon":
                    u.icon(this.zr, e, t, n, r);
                    break;
                case "candle":
                    n > 500 ? u.candle(this.zr, e, t, n, r) : this.zr.addShape(t);
                    break;
                case "ring":
                case "sector":
                case "circle":
                    n > 500 ? u.ring(this.zr, e, t, n + (o.get(t, "dataIndex") || 0) % 20 * 100, r) : t.type == "sector" ? u.sector(this.zr, e, t, n, r) : this.zr.addShape(t);
                    break;
                case "text":
                    u.text(this.zr, e, t, n, r);
                    break;
                case "polygon":
                    n > 500 ? u.polygon(this.zr, e, t, n, r) : u.pointList(this.zr, e, t, n, r);
                    break;
                case "chord":
                    u.chord(this.zr, e, t, n, r);
                    break;
                case "gauge-pointer":
                    u.gaugePointer(this.zr, e, t, n, r);
                    break;
                case "mark-line":
                    u.markline(this.zr, e, t, n, r);
                    break;
                case "line":
                    u.line(this.zr, e, t, n, r);
                    break;
                default:
                    this.zr.addShape(t)
            }
        },
        animationMark: function(e, t, n) {
            shapeList = n || this.shapeList;
            var r, i;
            for (var s = 0, o = shapeList.length; s < o; s++) {
                if (!shapeList[s]._mark) continue;
                this._animateMod(!1, shapeList[s], e, t)
            }
            this.animationEffect(n)
        },
        animationEffect: function(e) {
            !e && this.clearEffectShape(), shapeList = e || this.shapeList;
            var t = s.EFFECT_ZLEVEL;
            this.canvasSupported && this.zr.modLayer(t, {
                motionBlur: !0,
                lastFrameAlpha: .95
            });
            var n;
            for (var r = 0, i = shapeList.length; r < i; r++) {
                n = shapeList[r];
                if (!(n._mark && n.effect && n.effect.show && a[n._mark])) continue;
                a[n._mark](this.zr, this.effectList, n, t), this.effectList[this.effectList.length - 1]._mark = n._mark
            }
        },
        clearEffectShape: function(e) {
            this.zr && this.effectList && this.effectList.length > 0 && (e && this.zr.modLayer(s.EFFECT_ZLEVEL, {
                motionBlur: !1
            }), this.zr.delShape(this.effectList)), this.effectList = []
        },
        addMark: function(e, t, n) {
            var r = this.series[e];
            if (this.selectedMap[r.name]) {
                var i = 500,
                    s = this.query(this.option, "animationEasing"),
                    o = r[n].data,
                    u = this.shapeList.length;
                r[n].data = t.data, this["_build" + n.replace("m", "M")](e);
                for (var a = u, f = this.shapeList.length; a < f; a++) this.zr.addShape(this.shapeList[a]);
                this.zr.refresh(), this.option.animation && !this.option.renderAsImage && this.animationMark(i, s, this.shapeList.slice(u)), r[n].data = o
            }
        },
        delMark: function(e, t, n) {
            n = n.replace("mark", "").replace("large", "").toLowerCase();
            var r = this.series[e];
            if (this.selectedMap[r.name]) {
                var i = !1,
                    s = [this.shapeList, this.effectList],
                    u = 2;
                while (u--)
                    for (var a = 0, f = s[u].length; a < f; a++)
                        if (s[u][a]._mark == n && o.get(s[u][a], "seriesIndex") == e && o.get(s[u][a], "name") == t) {
                            this.zr.delShape(s[u][a].id), s[u].splice(a, 1), i = !0;
                            break
                        }
                i && this.zr.refresh()
            }
        }
    }, h
}), define("echarts/chart", [], function() {
    var e = {},
        t = {};
    return e.define = function(n, r) {
        return t[n] = r, e
    }, e.get = function(e) {
        return t[e]
    }, e
}), define("echarts/chart/island", ["require", "../component/base", "./base", "zrender/shape/Circle", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/event", "zrender/tool/color", "../util/accMath", "../chart"], function(e) {
    function a(e, r, i, o, a) {
        t.call(this, e, r, i, {}, a), n.call(this), this._nameConnector, this._valueConnector, this._zrHeight = this.zr.getHeight(), this._zrWidth = this.zr.getWidth();
        var f = this;
        f.shapeHandler.onmousewheel = function(e) {
            var t = e.target,
                n = e.event,
                r = u.getDelta(n);
            r = r > 0 ? -1 : 1, t.style.r -= r, t.style.r = t.style.r < 5 ? 5 : t.style.r;
            var i = s.get(t, "value"),
                o = i * f.option.island.calculateStep;
            o > 1 ? i = Math.round(i - o * r) : i = (i - o * r).toFixed(2) - 0;
            var a = s.get(t, "name");
            t.style.text = a + ":" + i, s.set(t, "value", i), s.set(t, "name", a), f.zr.modShape(t.id), f.zr.refresh(), u.stop(n)
        }
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/Circle"),
        i = e("../config"),
        s = e("../util/ecData"),
        o = e("zrender/tool/util"),
        u = e("zrender/tool/event");
    return a.prototype = {
        type: i.CHART_TYPE_ISLAND,
        _combine: function(t, n) {
            var r = e("zrender/tool/color"),
                i = e("../util/accMath"),
                o = i.accAdd(s.get(t, "value"), s.get(n, "value")),
                u = s.get(t, "name") + this._nameConnector + s.get(n, "name");
            t.style.text = u + this._valueConnector + o, s.set(t, "value", o), s.set(t, "name", u), t.style.r = this.option.island.r, t.style.color = r.mix(t.style.color, n.style.color)
        },
        refresh: function(e) {
            e && (e.island = this.reformOption(e.island), this.option = e, this._nameConnector = this.option.nameConnector, this._valueConnector = this.option.valueConnector)
        },
        getOption: function() {
            return this.option
        },
        resize: function() {
            var e = this.zr.getWidth(),
                t = this.zr.getHeight(),
                n = e / (this._zrWidth || e),
                r = t / (this._zrHeight || t);
            if (n == 1 && r == 1) return;
            this._zrWidth = e, this._zrHeight = t;
            for (var i = 0, s = this.shapeList.length; i < s; i++) this.zr.modShape(this.shapeList[i].id, {
                style: {
                    x: Math.round(this.shapeList[i].style.x * n),
                    y: Math.round(this.shapeList[i].style.y * r)
                }
            })
        },
        add: function(e) {
            var t = s.get(e, "name"),
                n = s.get(e, "value"),
                i = typeof s.get(e, "series") != "undefined" ? s.get(e, "series").name : "",
                o = this.getFont(this.option.island.textStyle),
                u = {
                    zlevel: this._zlevelBase,
                    style: {
                        x: e.style.x,
                        y: e.style.y,
                        r: this.option.island.r,
                        color: e.style.color || e.style.strokeColor,
                        text: t + this._valueConnector + n,
                        textFont: o
                    },
                    draggable: !0,
                    hoverable: !0,
                    onmousewheel: this.shapeHandler.onmousewheel,
                    _type: "island"
                };
            u.style.color == "#fff" && (u.style.color = e.style.strokeColor), this.setCalculable(u), u.dragEnableTime = 0, s.pack(u, {
                name: i
            }, -1, n, -1, t), u = new r(u), this.shapeList.push(u), this.zr.addShape(u)
        },
        del: function(e) {
            this.zr.delShape(e.id);
            var t = [];
            for (var n = 0, r = this.shapeList.length; n < r; n++) this.shapeList[n].id != e.id && t.push(this.shapeList[n]);
            this.shapeList = t
        },
        ondrop: function(e, t) {
            if (!this.isDrop || !e.target) return;
            var n = e.target,
                r = e.dragged;
            this._combine(n, r), this.zr.modShape(n.id), t.dragIn = !0, this.isDrop = !1;
            return
        },
        ondragend: function(e, t) {
            var n = e.target;
            this.isDragend ? t.dragIn && (this.del(n), t.needRefresh = !0) : t.dragIn || (n.style.x = u.getX(e.event), n.style.y = u.getY(e.event), this.add(n), t.needRefresh = !0), this.isDragend = !1;
            return
        }
    }, o.inherits(a, n), o.inherits(a, t), e("../chart").define("island", a), a
}), define("echarts/component", [], function() {
    var e = {},
        t = {};
    return e.define = function(n, r) {
        return t[n] = r, e
    }, e.get = function(e) {
        return t[e]
    }, e
}), define("echarts/component/dataView", ["require", "./base", "../config", "zrender/tool/util", "../component"], function(e) {
    function i(e, n, r, i, s) {
        t.call(this, e, n, r, i, s), this.dom = s.dom, this._tDom = document.createElement("div"), this._textArea = document.createElement("textArea"), this._buttonRefresh = document.createElement("button"), this._buttonClose = document.createElement("button"), this._hasShow = !1, this._zrHeight = r.getHeight(), this._zrWidth = r.getWidth(), this._tDom.className = "echarts-dataview", this.hide(), this.dom.firstChild.appendChild(this._tDom), window.addEventListener ? (this._tDom.addEventListener("click", this._stop), this._tDom.addEventListener("mousewheel", this._stop), this._tDom.addEventListener("mousemove", this._stop), this._tDom.addEventListener("mousedown", this._stop), this._tDom.addEventListener("mouseup", this._stop), this._tDom.addEventListener("touchstart", this._stop), this._tDom.addEventListener("touchmove", this._stop), this._tDom.addEventListener("touchend", this._stop)) : (this._tDom.attachEvent("onclick", this._stop), this._tDom.attachEvent("onmousewheel", this._stop), this._tDom.attachEvent("onmousemove", this._stop), this._tDom.attachEvent("onmousedown", this._stop), this._tDom.attachEvent("onmouseup", this._stop))
    }
    var t = e("./base"),
        n = e("../config"),
        r = e("zrender/tool/util");
    return i.prototype = {
        type: n.COMPONENT_TYPE_DATAVIEW,
        _lang: ["Data View", "close", "refresh"],
        _gCssText: "position:absolute;display:block;overflow:hidden;transition:height 0.8s,background-color 1s;-moz-transition:height 0.8s,background-color 1s;-webkit-transition:height 0.8s,background-color 1s;-o-transition:height 0.8s,background-color 1s;z-index:1;left:0;top:0;",
        hide: function() {
            this._sizeCssText = "width:" + this._zrWidth + "px;" + "height:" + 0 + "px;" + "background-color:#f0ffff;", this._tDom.style.cssText = this._gCssText + this._sizeCssText
        },
        show: function(e) {
            this._hasShow = !0;
            var t = this.query(this.option, "toolbox.feature.dataView.lang") || this._lang;
            this.option = e, this._tDom.innerHTML = '<p style="padding:8px 0;margin:0 0 10px 0;border-bottom:1px solid #eee">' + (t[0] || this._lang[0]) + "</p>", this._textArea.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (this._zrWidth - 15) + "px;" + "height:" + (this._zrHeight - 100) + "px;";
            var n = this.query(this.option, "toolbox.feature.dataView.optionToContent");
            typeof n != "function" ? this._textArea.value = this._optionToContent() : this._textArea.value = n(this.option), this._tDom.appendChild(this._textArea), this._buttonClose.style.cssText = "float:right;padding:1px 6px;", this._buttonClose.innerHTML = t[1] || this._lang[1];
            var r = this;
            this._buttonClose.onclick = function() {
                r.hide()
            }, this._tDom.appendChild(this._buttonClose), this.query(this.option, "toolbox.feature.dataView.readOnly") === !1 ? (this._buttonRefresh.style.cssText = "float:right;margin-right:10px;padding:1px 6px;", this._buttonRefresh.innerHTML = t[2] || this._lang[2], this._buttonRefresh.onclick = function() {
                r._save()
            }, this._tDom.appendChild(this._buttonRefresh), this._textArea.readOnly = !1, this._textArea.style.cursor = "default") : (this._textArea.readOnly = !0, this._textArea.style.cursor = "text"), this._sizeCssText = "width:" + this._zrWidth + "px;" + "height:" + this._zrHeight + "px;" + "background-color:#fff;", this._tDom.style.cssText = this._gCssText + this._sizeCssText
        },
        _optionToContent: function() {
            var e, t, r, i, s, o, u = [],
                a = "";
            if (this.option.xAxis) {
                this.option.xAxis instanceof Array ? u = this.option.xAxis : u = [this.option.xAxis];
                for (e = 0, i = u.length; e < i; e++)
                    if ((u[e].type || "category") == "category") {
                        o = [];
                        for (t = 0, r = u[e].data.length; t < r; t++) s = u[e].data[t], o.push(typeof s.value != "undefined" ? s.value : s);
                        a += o.join(", ") + "\n\n"
                    }
            }
            if (this.option.yAxis) {
                this.option.yAxis instanceof Array ? u = this.option.yAxis : u = [this.option.yAxis];
                for (e = 0, i = u.length; e < i; e++)
                    if (u[e].type == "category") {
                        o = [];
                        for (t = 0, r = u[e].data.length; t < r; t++) s = u[e].data[t], o.push(typeof s.value != "undefined" ? s.value : s);
                        a += o.join(", ") + "\n\n"
                    }
            }
            var f = this.option.series,
                l;
            for (e = 0, i = f.length; e < i; e++) {
                o = [];
                for (t = 0, r = f[e].data.length; t < r; t++) s = f[e].data[t], f[e].type == n.CHART_TYPE_PIE || f[e].type == n.CHART_TYPE_MAP ? l = (s.name || "-") + ":" : l = "", f[e].type == n.CHART_TYPE_SCATTER && (s = typeof s.value != "undefined" ? s.value : s, s = s.join(", ")), o.push(l + (typeof s.value != "undefined" ? s.value : s));
                a += (f[e].name || "-") + " : \n", a += o.join(f[e].type == n.CHART_TYPE_SCATTER ? "\n" : ", "), a += "\n\n"
            }
            return a
        },
        _save: function() {
            var e = this._textArea.value,
                t = this.query(this.option, "toolbox.feature.dataView.contentToOption");
            if (typeof t != "function") {
                e = e.split("\n");
                var r = [];
                for (var i = 0, s = e.length; i < s; i++) e[i] = this._trim(e[i]), e[i] !== "" && r.push(e[i]);
                this._contentToOption(r)
            } else t(e, this.option);
            this.hide();
            var o = this;
            setTimeout(function() {
                o.messageCenter && o.messageCenter.dispatch(n.EVENT.DATA_VIEW_CHANGED, null, {
                    option: o.option
                }, o.myChart)
            }, o.canvasSupported ? 800 : 100)
        },
        _contentToOption: function(e) {
            var t, r, i, s, o, u = [],
                a = 0,
                f, l;
            if (this.option.xAxis) {
                this.option.xAxis instanceof Array ? u = this.option.xAxis : u = [this.option.xAxis];
                for (t = 0, s = u.length; t < s; t++)
                    if ((u[t].type || "category") == "category") {
                        f = e[a].split(",");
                        for (r = 0, i = u[t].data.length; r < i; r++) l = this._trim(f[r] || ""), o = u[t].data[r], typeof u[t].data[r].value != "undefined" ? u[t].data[r].value = l : u[t].data[r] = l;
                        a++
                    }
            }
            if (this.option.yAxis) {
                this.option.yAxis instanceof Array ? u = this.option.yAxis : u = [this.option.yAxis];
                for (t = 0, s = u.length; t < s; t++)
                    if (u[t].type == "category") {
                        f = e[a].split(",");
                        for (r = 0, i = u[t].data.length; r < i; r++) l = this._trim(f[r] || ""), o = u[t].data[r], typeof u[t].data[r].value != "undefined" ? u[t].data[r].value = l : u[t].data[r] = l;
                        a++
                    }
            }
            var c = this.option.series;
            for (t = 0, s = c.length; t < s; t++) {
                a++;
                if (c[t].type == n.CHART_TYPE_SCATTER)
                    for (var r = 0, i = c[t].data.length; r < i; r++) f = e[a], l = f.replace(" ", "").split(","), typeof c[t].data[r].value != "undefined" ? c[t].data[r].value = l : c[t].data[r] = l, a++;
                else {
                    f = e[a].split(",");
                    for (var r = 0, i = c[t].data.length; r < i; r++) l = (f[r] || "").replace(/.*:/, ""), l = this._trim(l), l = l != "-" && l !== "" ? l - 0 : "-", typeof c[t].data[r].value != "undefined" ? c[t].data[r].value = l : c[t].data[r] = l;
                    a++
                }
            }
        },
        _trim: function(e) {
            var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            return e.replace(t, "")
        },
        _stop: function(e) {
            e = e || window.event, e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        },
        resize: function() {
            this._zrHeight = this.zr.getHeight(), this._zrWidth = this.zr.getWidth(), this._tDom.offsetHeight > 10 && (this._sizeCssText = "width:" + this._zrWidth + "px;" + "height:" + this._zrHeight + "px;" + "background-color:#fff;", this._tDom.style.cssText = this._gCssText + this._sizeCssText, this._textArea.style.cssText = "display:block;margin:0 0 8px 0;padding:4px 6px;overflow:auto;width:" + (this._zrWidth - 15) + "px;" + "height:" + (this._zrHeight - 100) + "px;")
        },
        dispose: function() {
            window.removeEventListener ? (this._tDom.removeEventListener("click", this._stop), this._tDom.removeEventListener("mousewheel", this._stop), this._tDom.removeEventListener("mousemove", this._stop), this._tDom.removeEventListener("mousedown", this._stop), this._tDom.removeEventListener("mouseup", this._stop), this._tDom.removeEventListener("touchstart", this._stop), this._tDom.removeEventListener("touchmove", this._stop), this._tDom.removeEventListener("touchend", this._stop)) : (this._tDom.detachEvent("onclick", this._stop), this._tDom.detachEvent("onmousewheel", this._stop), this._tDom.detachEvent("onmousemove", this._stop), this._tDom.detachEvent("onmousedown", this._stop), this._tDom.detachEvent("onmouseup", this._stop)), this._buttonRefresh.onclick = null, this._buttonClose.onclick = null, this._hasShow && (this._tDom.removeChild(this._textArea), this._tDom.removeChild(this._buttonRefresh), this._tDom.removeChild(this._buttonClose)), this._textArea = null, this._buttonRefresh = null, this._buttonClose = null, this.dom.firstChild.removeChild(this._tDom), this._tDom = null
        }
    }, r.inherits(i, t), e("../component").define("dataView", i), i
}), define("echarts/component/toolbox", ["require", "./base", "zrender/shape/Line", "zrender/shape/Image", "zrender/shape/Rectangle", "../util/shape/Icon", "../config", "zrender/tool/util", "zrender/config", "zrender/tool/event", "./dataView", "../component"], function(e) {
    function h(e, n, r, i, s) {
        t.call(this, e, n, r, i, s), this.dom = s.dom, this._magicType = {}, this._isSilence = !1, this._iconList, this._iconShapeMap = {}, this._featureTitle = {}, this._featureIcon = {}, this._featureColor = {}, this._enableColor = "red", this._disableColor = "#ccc", this._markShapeList = [];
        var o = this;
        o._onMark = function(e) {
            o.__onMark(e)
        }, o._onMarkUndo = function(e) {
            o.__onMarkUndo(e)
        }, o._onMarkClear = function(e) {
            o.__onMarkClear(e)
        }, o._onDataZoom = function(e) {
            o.__onDataZoom(e)
        }, o._onDataZoomReset = function(e) {
            o.__onDataZoomReset(e)
        }, o._onDataView = function(e) {
            o.__onDataView(e)
        }, o._onRestore = function(e) {
            o.__onRestore(e)
        }, o._onSaveAsImage = function(e) {
            o.__onSaveAsImage(e)
        }, o._onMagicType = function(e) {
            o.__onMagicType(e)
        }, o._onCustomHandler = function(e) {
            o.__onCustomHandler(e)
        }, o._onmousemove = function(e) {
            return o.__onmousemove(e)
        }, o._onmousedown = function(e) {
            return o.__onmousedown(e)
        }, o._onmouseup = function(e) {
            return o.__onmouseup(e)
        }, o._onclick = function(e) {
            return o.__onclick(e)
        }
    }
    var t = e("./base"),
        n = e("zrender/shape/Line"),
        r = e("zrender/shape/Image"),
        i = e("zrender/shape/Rectangle"),
        s = e("../util/shape/Icon"),
        o = e("../config"),
        u = e("zrender/tool/util"),
        a = e("zrender/config"),
        f = e("zrender/tool/event"),
        l = "stack",
        c = "tiled";
    return h.prototype = {
        type: o.COMPONENT_TYPE_TOOLBOX,
        _buildShape: function() {
            this._iconList = [];
            var e = this.option.toolbox;
            this._enableColor = e.effectiveColor, this._disableColor = e.disableColor;
            var t = e.feature,
                n = [];
            for (var r in t)
                if (t[r].show) switch (r) {
                    case "mark":
                        n.push({
                            key: r,
                            name: "mark"
                        }), n.push({
                            key: r,
                            name: "markUndo"
                        }), n.push({
                            key: r,
                            name: "markClear"
                        });
                        break;
                    case "magicType":
                        for (var i = 0, s = t[r].type.length; i < s; i++) t[r].title[t[r].type[i] + "Chart"] = t[r].title[t[r].type[i]], n.push({
                            key: r,
                            name: t[r].type[i] + "Chart"
                        });
                        break;
                    case "dataZoom":
                        n.push({
                            key: r,
                            name: "dataZoom"
                        }), n.push({
                            key: r,
                            name: "dataZoomReset"
                        });
                        break;
                    case "saveAsImage":
                        this.canvasSupported && n.push({
                            key: r,
                            name: "saveAsImage"
                        });
                        break;
                    default:
                        n.push({
                            key: r,
                            name: r
                        })
                }
                if (n.length > 0) {
                    var o, r;
                    for (var i = 0, s = n.length; i < s; i++) o = n[i].name, r = n[i].key, this._iconList.push(o), this._featureTitle[o] = t[r].title[o] || t[r].title, t[r].icon && (this._featureIcon[o] = t[r].icon[o] || t[r].icon), t[r].color && (this._featureColor[o] = t[r].color[o] || t[r].color);
                    this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this._buildItem();
                    for (var i = 0, s = this.shapeList.length; i < s; i++) this.zr.addShape(this.shapeList[i]);
                    this._iconShapeMap.mark && (this._iconDisable(this._iconShapeMap.markUndo), this._iconDisable(this._iconShapeMap.markClear)), this._iconShapeMap.dataZoomReset && this._zoomQueue.length === 0 && this._iconDisable(this._iconShapeMap.dataZoomReset)
                }
        },
        _buildItem: function() {
            var t = this.option.toolbox,
                n = this._iconList.length,
                i = this._itemGroupLocation.x,
                o = this._itemGroupLocation.y,
                u = t.itemSize,
                a = t.itemGap,
                f, l = t.color instanceof Array ? t.color : [t.color],
                c = this.getFont(t.textStyle),
                h, p, d;
            t.orient == "horizontal" ? (h = this._itemGroupLocation.y / this.zr.getHeight() < .5 ? "bottom" : "top", p = this._itemGroupLocation.x / this.zr.getWidth() < .5 ? "left" : "right", d = this._itemGroupLocation.y / this.zr.getHeight() < .5 ? "top" : "bottom") : h = this._itemGroupLocation.x / this.zr.getWidth() < .5 ? "right" : "left", this._iconShapeMap = {};
            var v = this;
            for (var m = 0; m < n; m++) {
                f = {
                    type: "icon",
                    zlevel: this._zlevelBase,
                    style: {
                        x: i,
                        y: o,
                        width: u,
                        height: u,
                        iconType: this._iconList[m],
                        lineWidth: 1,
                        strokeColor: this._featureColor[this._iconList[m]] || l[m % l.length],
                        brushType: "stroke"
                    },
                    highlightStyle: {
                        lineWidth: 1,
                        text: t.showTitle ? this._featureTitle[this._iconList[m]] : undefined,
                        textFont: c,
                        textPosition: h,
                        strokeColor: this._featureColor[this._iconList[m]] || l[m % l.length]
                    },
                    hoverable: !0,
                    clickable: !0
                }, this._featureIcon[this._iconList[m]] && (f.style.image = this._featureIcon[this._iconList[m]].replace(new RegExp("^image:\\/\\/"), ""), f.style.opacity = .8, f.highlightStyle.opacity = 1, f.type = "image"), t.orient == "horizontal" && (m === 0 && p == "left" && (f.highlightStyle.textPosition = "specific", f.highlightStyle.textAlign = p, f.highlightStyle.textBaseline = d, f.highlightStyle.textX = i, f.highlightStyle.textY = d == "top" ? o + u + 10 : o - 10), m == n - 1 && p == "right" && (f.highlightStyle.textPosition = "specific", f.highlightStyle.textAlign = p, f.highlightStyle.textBaseline = d, f.highlightStyle.textX = i + u, f.highlightStyle.textY = d == "top" ? o + u + 10 : o - 10));
                switch (this._iconList[m]) {
                    case "mark":
                        f.onclick = v._onMark;
                        break;
                    case "markUndo":
                        f.onclick = v._onMarkUndo;
                        break;
                    case "markClear":
                        f.onclick = v._onMarkClear;
                        break;
                    case "dataZoom":
                        f.onclick = v._onDataZoom;
                        break;
                    case "dataZoomReset":
                        f.onclick = v._onDataZoomReset;
                        break;
                    case "dataView":
                        if (!this._dataView) {
                            var g = e("./dataView");
                            this._dataView = new g(this.ecTheme, this.messageCenter, this.zr, this.option, this.myChart)
                        }
                        f.onclick = v._onDataView;
                        break;
                    case "restore":
                        f.onclick = v._onRestore;
                        break;
                    case "saveAsImage":
                        f.onclick = v._onSaveAsImage;
                        break;
                    default:
                        this._iconList[m].match("Chart") ? (f._name = this._iconList[m].replace("Chart", ""), f.onclick = v._onMagicType) : f.onclick = v._onCustomHandler
                }
                f.type == "icon" ? f = new s(f) : f.type == "image" && (f = new r(f)), this.shapeList.push(f), this._iconShapeMap[this._iconList[m]] = f, t.orient == "horizontal" ? i += u + a : o += u + a
            }
        },
        _buildBackground: function() {
            var e = this.option.toolbox,
                t = e.padding[0],
                n = e.padding[1],
                r = e.padding[2],
                s = e.padding[3];
            this.shapeList.push(new i({
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this._itemGroupLocation.x - s,
                    y: this._itemGroupLocation.y - t,
                    width: this._itemGroupLocation.width + s + n,
                    height: this._itemGroupLocation.height + t + r,
                    brushType: e.borderWidth === 0 ? "fill" : "both",
                    color: e.backgroundColor,
                    strokeColor: e.borderColor,
                    lineWidth: e.borderWidth
                }
            }))
        },
        _getItemGroupLocation: function() {
            var e = this.option.toolbox,
                t = this._iconList.length,
                n = e.itemGap,
                r = e.itemSize,
                i = 0,
                s = 0;
            e.orient == "horizontal" ? (i = (r + n) * t - n, s = r) : (s = (r + n) * t - n, i = r);
            var o, u = this.zr.getWidth();
            switch (e.x) {
                case "center":
                    o = Math.floor((u - i) / 2);
                    break;
                case "left":
                    o = e.padding[3] + e.borderWidth;
                    break;
                case "right":
                    o = u - i - e.padding[1] - e.borderWidth;
                    break;
                default:
                    o = e.x - 0, o = isNaN(o) ? 0 : o
            }
            var a, f = this.zr.getHeight();
            switch (e.y) {
                case "top":
                    a = e.padding[0] + e.borderWidth;
                    break;
                case "bottom":
                    a = f - s - e.padding[2] - e.borderWidth;
                    break;
                case "center":
                    a = Math.floor((f - s) / 2);
                    break;
                default:
                    a = e.y - 0, a = isNaN(a) ? 0 : a
            }
            return {
                x: o,
                y: a,
                width: i,
                height: s
            }
        },
        __onmousemove: function(e) {
            this._marking && (this._markShape.style.xEnd = f.getX(e.event), this._markShape.style.yEnd = f.getY(e.event), this.zr.addHoverShape(this._markShape)), this._zooming && (this._zoomShape.style.width = f.getX(e.event) - this._zoomShape.style.x, this._zoomShape.style.height = f.getY(e.event) - this._zoomShape.style.y, this.zr.addHoverShape(this._zoomShape), this.dom.style.cursor = "crosshair"), this._zoomStart && this.dom.style.cursor != "pointer" && this.dom.style.cursor != "move" && (this.dom.style.cursor = "crosshair")
        },
        __onmousedown: function(e) {
            if (e.target) return;
            this._zooming = !0;
            var t = f.getX(e.event),
                n = f.getY(e.event),
                r = this.option.dataZoom || {};
            return this._zoomShape = new i({
                zlevel: this._zlevelBase,
                style: {
                    x: t,
                    y: n,
                    width: 1,
                    height: 1,
                    brushType: "both"
                },
                highlightStyle: {
                    lineWidth: 2,
                    color: r.fillerColor || o.dataZoom.fillerColor,
                    strokeColor: r.handleColor || o.dataZoom.handleColor,
                    brushType: "both"
                }
            }), this.zr.addHoverShape(this._zoomShape), !0
        },
        __onmouseup: function() {
            if (!this._zoomShape || Math.abs(this._zoomShape.style.width) < 10 || Math.abs(this._zoomShape.style.height) < 10) return this._zooming = !1, !0;
            if (this._zooming && this.component.dataZoom) {
                this._zooming = !1;
                var e = this.component.dataZoom.rectZoom(this._zoomShape.style);
                e && (this._zoomQueue.push({
                    start: e.start,
                    end: e.end,
                    start2: e.start2,
                    end2: e.end2
                }), this._iconEnable(this._iconShapeMap.dataZoomReset), this.zr.refresh())
            }
            return !0
        },
        __onclick: function(e) {
            if (e.target) return;
            if (this._marking) this._marking = !1, this._markShapeList.push(this._markShape), this._iconEnable(this._iconShapeMap.markUndo), this._iconEnable(this._iconShapeMap.markClear), this.zr.addShape(this._markShape), this.zr.refresh();
            else if (this._markStart) {
                this._marking = !0;
                var t = f.getX(e.event),
                    r = f.getY(e.event);
                this._markShape = new n({
                    zlevel: this._zlevelBase,
                    style: {
                        xStart: t,
                        yStart: r,
                        xEnd: t,
                        yEnd: r,
                        lineWidth: this.query(this.option, "toolbox.feature.mark.lineStyle.width"),
                        strokeColor: this.query(this.option, "toolbox.feature.mark.lineStyle.color"),
                        lineType: this.query(this.option, "toolbox.feature.mark.lineStyle.type")
                    }
                }), this.zr.addHoverShape(this._markShape)
            }
        },
        __onMark: function(e) {
            var t = e.target;
            if (this._marking || this._markStart) this._resetMark(), this.zr.refresh();
            else {
                this._resetZoom(), this.zr.modShape(t.id, {
                    style: {
                        strokeColor: this._enableColor
                    }
                }), this.zr.refresh(), this._markStart = !0;
                var n = this;
                setTimeout(function() {
                    n.zr && n.zr.on(a.EVENT.CLICK, n._onclick) && n.zr.on(a.EVENT.MOUSEMOVE, n._onmousemove)
                }, 10)
            }
            return !0
        },
        __onMarkUndo: function() {
            if (this._marking) this._marking = !1;
            else {
                var e = this._markShapeList.length;
                if (e >= 1) {
                    var t = this._markShapeList[e - 1];
                    this.zr.delShape(t.id), this.zr.refresh(), this._markShapeList.pop(), e == 1 && (this._iconDisable(this._iconShapeMap.markUndo), this._iconDisable(this._iconShapeMap.markClear))
                }
            }
            return !0
        },
        __onMarkClear: function() {
            this._marking && (this._marking = !1);
            var e = this._markShapeList.length;
            if (e > 0) {
                while (e--) this.zr.delShape(this._markShapeList.pop().id);
                this._iconDisable(this._iconShapeMap.markUndo), this._iconDisable(this._iconShapeMap.markClear), this.zr.refresh()
            }
            return !0
        },
        __onDataZoom: function(e) {
            var t = e.target;
            if (this._zooming || this._zoomStart) this._resetZoom(), this.zr.refresh(), this.dom.style.cursor = "default";
            else {
                this._resetMark(), this.zr.modShape(t.id, {
                    style: {
                        strokeColor: this._enableColor
                    }
                }), this.zr.refresh(), this._zoomStart = !0;
                var n = this;
                setTimeout(function() {
                    n.zr && n.zr.on(a.EVENT.MOUSEDOWN, n._onmousedown) && n.zr.on(a.EVENT.MOUSEUP, n._onmouseup) && n.zr.on(a.EVENT.MOUSEMOVE, n._onmousemove)
                }, 10), this.dom.style.cursor = "crosshair"
            }
            return !0
        },
        __onDataZoomReset: function() {
            return this._zooming && (this._zooming = !1), this._zoomQueue.pop(), this._zoomQueue.length > 0 ? this.component.dataZoom.absoluteZoom(this._zoomQueue[this._zoomQueue.length - 1]) : (this.component.dataZoom.rectZoom(), this._iconDisable(this._iconShapeMap.dataZoomReset), this.zr.refresh()), !0
        },
        _resetMark: function() {
            this._marking = !1, this._markStart && (this._markStart = !1, this._iconShapeMap.mark && this.zr.modShape(this._iconShapeMap.mark.id, {
                style: {
                    strokeColor: this._iconShapeMap.mark.highlightStyle.strokeColor
                }
            }), this.zr.un(a.EVENT.CLICK, this._onclick), this.zr.un(a.EVENT.MOUSEMOVE, this._onmousemove))
        },
        _resetZoom: function() {
            this._zooming = !1, this._zoomStart && (this._zoomStart = !1, this._iconShapeMap.dataZoom && this.zr.modShape(this._iconShapeMap.dataZoom.id, {
                style: {
                    strokeColor: this._iconShapeMap.dataZoom.highlightStyle.strokeColor
                }
            }), this.zr.un(a.EVENT.MOUSEDOWN, this._onmousedown), this.zr.un(a.EVENT.MOUSEUP, this._onmouseup), this.zr.un(a.EVENT.MOUSEMOVE, this._onmousemove))
        },
        _iconDisable: function(e) {
            e.type != "image" ? this.zr.modShape(e.id, {
                hoverable: !1,
                clickable: !1,
                style: {
                    strokeColor: this._disableColor
                }
            }) : this.zr.modShape(e.id, {
                hoverable: !1,
                clickable: !1,
                style: {
                    opacity: .3
                }
            })
        },
        _iconEnable: function(e) {
            e.type != "image" ? this.zr.modShape(e.id, {
                hoverable: !0,
                clickable: !0,
                style: {
                    strokeColor: e.highlightStyle.strokeColor
                }
            }) : this.zr.modShape(e.id, {
                hoverable: !0,
                clickable: !0,
                style: {
                    opacity: .8
                }
            })
        },
        __onDataView: function() {
            return this._dataView.show(this.option), !0
        },
        __onRestore: function() {
            return this._resetMark(), this._resetZoom(), this.messageCenter.dispatch(o.EVENT.RESTORE, null, null, this.myChart), !0
        },
        __onSaveAsImage: function() {
            var e = this.option.toolbox.feature.saveAsImage,
                t = e.type || "png";
            t != "png" && t != "jpeg" && (t = "png");
            var n;
            this.myChart.isConnected() ? n = this.myChart.getConnectedDataURL(t) : n = this.zr.toDataURL("image/" + t, this.option.backgroundColor && this.option.backgroundColor.replace(" ", "") == "rgba(0,0,0,0)" ? "#fff" : this.option.backgroundColor);
            var r = document.createElement("div");
            r.id = "__echarts_download_wrap__", r.style.cssText = "position:fixed;z-index:99999;display:block;top:0;left:0;background-color:rgba(33,33,33,0.5);text-align:center;width:100%;height:100%;line-height:" + document.documentElement.clientHeight + "px;";
            var i = document.createElement("a");
            i.href = n, i.setAttribute("download", (e.name ? e.name : this.option.title && (this.option.title.text || this.option.title.subtext) ? this.option.title.text || this.option.title.subtext : "ECharts") + "." + t), i.innerHTML = '<img style="vertical-align:middle" src="' + n + '" title="' + (!window.attachEvent || navigator.userAgent.indexOf("Opera") !== -1 ? e.lang ? e.lang[0] : "点击保存" : "右键->图片另存为") + '"/>', r.appendChild(i), document.body.appendChild(r), i = null, r = null, setTimeout(function() {
                var e = document.getElementById("__echarts_download_wrap__");
                e && (e.onclick = function() {
                    var e = document.getElementById("__echarts_download_wrap__");
                    e.onclick = null, e.innerHTML = "", document.body.removeChild(e), e = null
                }, e = null)
            }, 500);
            return
        },
        __onMagicType: function(e) {
            this._resetMark();
            var t = e.target._name;
            return this._magicType[t] || (this._magicType[t] = !0, t == o.CHART_TYPE_LINE ? this._magicType[o.CHART_TYPE_BAR] = !1 : t == o.CHART_TYPE_BAR && (this._magicType[o.CHART_TYPE_LINE] = !1), t == l ? this._magicType[c] = !1 : t == c && (this._magicType[l] = !1), this.messageCenter.dispatch(o.EVENT.MAGIC_TYPE_CHANGED, e.event, {
                magicType: this._magicType
            }, this.myChart)), !0
        },
        setMagicType: function(e) {
            this._resetMark(), this._magicType = e, !this._isSilence && this.messageCenter.dispatch(o.EVENT.MAGIC_TYPE_CHANGED, null, {
                magicType: this._magicType
            }, this.myChart)
        },
        __onCustomHandler: function(e) {
            var t = e.target.style.iconType,
                n = this.option.toolbox.feature[t].onclick;
            typeof n == "function" && n(this.option)
        },
        reset: function(e, t) {
            t && this.clear();
            if (this.query(e, "toolbox.show") && this.query(e, "toolbox.feature.magicType.show")) {
                var n = e.toolbox.feature.magicType.type,
                    r = n.length;
                this._magicMap = {};
                while (r--) this._magicMap[n[r]] = !0;
                r = e.series.length;
                var i, s;
                while (r--) {
                    i = e.series[r].type, this._magicMap[i] && (s = e.xAxis instanceof Array ? e.xAxis[e.series[r].xAxisIndex || 0] : e.xAxis, s && (s.type || "category") == "category" && (s.__boundaryGap = typeof s.boundaryGap != "undefined" ? s.boundaryGap : !0), s = e.yAxis instanceof Array ? e.yAxis[e.series[r].yAxisIndex || 0] : e.yAxis, s && s.type == "category" && (s.__boundaryGap = typeof s.boundaryGap != "undefined" ? s.boundaryGap : !0), e.series[r].__type = i, e.series[r].__itemStyle = u.clone(e.series[r].itemStyle || {}));
                    if (this._magicMap[l] || this._magicMap[c]) e.series[r].__stack = e.series[r].stack
                }
            }
            this._magicType = t ? {} : this._magicType || {};
            for (var o in this._magicType)
                if (this._magicType[o]) {
                    this.option = e, this.getMagicOption();
                    break
                }
            var a = e.dataZoom;
            if (a && a.show) {
                var f = typeof a.start != "undefined" && a.start >= 0 && a.start <= 100 ? a.start : 0,
                    h = typeof a.end != "undefined" && a.end >= 0 && a.end <= 100 ? a.end : 100;
                f > h && (f += h, h = f - h, f -= h), this._zoomQueue = [{
                    start: f,
                    end: h,
                    start2: 0,
                    end2: 100
                }]
            } else this._zoomQueue = []
        },
        getMagicOption: function() {
            var e;
            if (this._magicType[o.CHART_TYPE_LINE] || this._magicType[o.CHART_TYPE_BAR]) {
                var t = this._magicType[o.CHART_TYPE_LINE] ? !1 : !0;
                for (var n = 0, r = this.option.series.length; n < r; n++) this._magicMap[this.option.series[n].type] && (this.option.series[n].type = this._magicType[o.CHART_TYPE_LINE] ? o.CHART_TYPE_LINE : o.CHART_TYPE_BAR, this.option.series[n].itemStyle = u.clone(this.option.series[n].__itemStyle), e = this.option.xAxis instanceof Array ? this.option.xAxis[this.option.series[n].xAxisIndex || 0] : this.option.xAxis, e && (e.type || "category") == "category" && (e.boundaryGap = t ? !0 : e.__boundaryGap), e = this.option.yAxis instanceof Array ? this.option.yAxis[this.option.series[n].yAxisIndex || 0] : this.option.yAxis, e && e.type == "category" && (e.boundaryGap = t ? !0 : e.__boundaryGap))
            }
            if (this._magicType[l] || this._magicType[c])
                for (var n = 0, r = this.option.series.length; n < r; n++) this._magicType[l] ? this.option.series[n].stack = "_ECHARTS_STACK_KENER_2014_" : this._magicType[c] && (this.option.series[n].stack = null);
            return this.option
        },
        silence: function(e) {
            this._isSilence = e
        },
        resize: function() {
            this._resetMark(), this.clear(), this.option && this.option.toolbox && this.option.toolbox.show && this._buildShape(), this._dataView && this._dataView.resize()
        },
        hideDataView: function() {
            this._dataView && this._dataView.hide()
        },
        clear: function(e) {
            this.zr && (this.zr.delShape(this.shapeList), this.shapeList = [], e || (this.zr.delShape(this._markShapeList), this._markShapeList = []))
        },
        dispose: function() {
            this._dataView && (this._dataView.dispose(), this._dataView = null), this.clear(), this.shapeList = null, this._markShapeList = null
        },
        refresh: function(e) {
            e && (this._resetMark(), this._resetZoom(), e.toolbox = this.reformOption(e.toolbox), e.toolbox.padding = this.reformCssArray(e.toolbox.padding), this.option = e, this.clear(!0), e.toolbox.show && this._buildShape(), this.hideDataView())
        }
    }, u.inherits(h, t), e("../component").define("toolbox", h), h
}), define("echarts/component/title", ["require", "./base", "zrender/shape/Text", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "zrender/tool/area", "zrender/tool/color", "../component"], function(e) {
    function a(e, n, r, i, s) {
        t.call(this, e, n, r, i, s), this.refresh(i)
    }
    var t = e("./base"),
        n = e("zrender/shape/Text"),
        r = e("zrender/shape/Rectangle"),
        i = e("../config"),
        s = e("zrender/tool/util"),
        o = e("zrender/tool/area"),
        u = e("zrender/tool/color");
    return a.prototype = {
        type: i.COMPONENT_TYPE_TITLE,
        _buildShape: function() {
            this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this._buildItem();
            for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
        },
        _buildItem: function() {
            var e = this.titleOption.text,
                t = this.titleOption.link,
                r = this.titleOption.target,
                i = this.titleOption.subtext,
                s = this.titleOption.sublink,
                o = this.titleOption.subtarget,
                a = this.getFont(this.titleOption.textStyle),
                f = this.getFont(this.titleOption.subtextStyle),
                l = this._itemGroupLocation.x,
                c = this._itemGroupLocation.y,
                h = this._itemGroupLocation.width,
                p = this._itemGroupLocation.height,
                d = {
                    zlevel: this._zlevelBase,
                    style: {
                        y: c,
                        color: this.titleOption.textStyle.color,
                        text: e,
                        textFont: a,
                        textBaseline: "top"
                    },
                    highlightStyle: {
                        color: u.lift(this.titleOption.textStyle.color, 1),
                        brushType: "fill"
                    },
                    hoverable: !1
                };
            t && (d.hoverable = !0, d.clickable = !0, d.onclick = function() {
                !r || r != "self" ? window.open(t) : window.location = t
            });
            var v = {
                zlevel: this._zlevelBase,
                style: {
                    y: c + p,
                    color: this.titleOption.subtextStyle.color,
                    text: i,
                    textFont: f,
                    textBaseline: "bottom"
                },
                highlightStyle: {
                    color: u.lift(this.titleOption.subtextStyle.color, 1),
                    brushType: "fill"
                },
                hoverable: !1
            };
            s && (v.hoverable = !0, v.clickable = !0, v.onclick = function() {
                !o || o != "self" ? window.open(s) : window.location = s
            });
            switch (this.titleOption.x) {
                case "center":
                    d.style.x = v.style.x = l + h / 2, d.style.textAlign = v.style.textAlign = "center";
                    break;
                case "left":
                    d.style.x = v.style.x = l, d.style.textAlign = v.style.textAlign = "left";
                    break;
                case "right":
                    d.style.x = v.style.x = l + h, d.style.textAlign = v.style.textAlign = "right";
                    break;
                default:
                    l = this.titleOption.x - 0, l = isNaN(l) ? 0 : l, d.style.x = v.style.x = l
            }
            this.titleOption.textAlign && (d.style.textAlign = v.style.textAlign = this.titleOption.textAlign), this.shapeList.push(new n(d)), i !== "" && this.shapeList.push(new n(v))
        },
        _buildBackground: function() {
            var e = this.titleOption.padding[0],
                t = this.titleOption.padding[1],
                n = this.titleOption.padding[2],
                i = this.titleOption.padding[3];
            this.shapeList.push(new r({
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this._itemGroupLocation.x - i,
                    y: this._itemGroupLocation.y - e,
                    width: this._itemGroupLocation.width + i + t,
                    height: this._itemGroupLocation.height + e + n,
                    brushType: this.titleOption.borderWidth === 0 ? "fill" : "both",
                    color: this.titleOption.backgroundColor,
                    strokeColor: this.titleOption.borderColor,
                    lineWidth: this.titleOption.borderWidth
                }
            }))
        },
        _getItemGroupLocation: function() {
            var e = this.titleOption.text,
                t = this.titleOption.subtext,
                n = this.getFont(this.titleOption.textStyle),
                r = this.getFont(this.titleOption.subtextStyle),
                i = Math.max(o.getTextWidth(e, n), o.getTextWidth(t, r)),
                s = o.getTextHeight(e, n) + (t === "" ? 0 : this.titleOption.itemGap + o.getTextHeight(t, r)),
                u, a = this.zr.getWidth();
            switch (this.titleOption.x) {
                case "center":
                    u = Math.floor((a - i) / 2);
                    break;
                case "left":
                    u = this.titleOption.padding[3] + this.titleOption.borderWidth;
                    break;
                case "right":
                    u = a - i - this.titleOption.padding[1] - this.titleOption.borderWidth;
                    break;
                default:
                    u = this.titleOption.x - 0, u = isNaN(u) ? 0 : u
            }
            var f, l = this.zr.getHeight();
            switch (this.titleOption.y) {
                case "top":
                    f = this.titleOption.padding[0] + this.titleOption.borderWidth;
                    break;
                case "bottom":
                    f = l - s - this.titleOption.padding[2] - this.titleOption.borderWidth;
                    break;
                case "center":
                    f = Math.floor((l - s) / 2);
                    break;
                default:
                    f = this.titleOption.y - 0, f = isNaN(f) ? 0 : f
            }
            return {
                x: u,
                y: f,
                width: i,
                height: s
            }
        },
        refresh: function(e) {
            e && (this.option = e, this.option.title = this.reformOption(this.option.title), this.option.title.padding = this.reformCssArray(this.option.title.padding), this.titleOption = this.option.title, this.titleOption.textStyle = s.merge(this.titleOption.textStyle, this.ecTheme.textStyle), this.titleOption.subtextStyle = s.merge(this.titleOption.subtextStyle, this.ecTheme.textStyle)), this.clear(), this._buildShape()
        }
    }, s.inherits(a, t), e("../component").define("title", a), a
}), define("echarts/util/shape/Cross", ["require", "zrender/shape/Base", "zrender/shape/Line", "zrender/tool/util", "./normalIsCover"], function(e) {
    function i(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("zrender/shape/Line"),
        r = e("zrender/tool/util");
    return i.prototype = {
        type: "cross",
        buildPath: function(e, t) {
            var r = t.rect;
            t.xStart = r.x, t.xEnd = r.x + r.width, t.yStart = t.yEnd = t.y, n.prototype.buildPath(e, t), t.xStart = t.xEnd = t.x, t.yStart = r.y, t.yEnd = r.y + r.height, n.prototype.buildPath(e, t)
        },
        getRect: function(e) {
            return e.rect
        },
        isCover: e("./normalIsCover")
    }, r.inherits(i, t), i
}), define("echarts/component/tooltip", ["require", "./base", "../util/shape/Cross", "zrender/shape/Line", "zrender/shape/Rectangle", "../config", "../util/ecData", "zrender/config", "zrender/tool/event", "zrender/tool/area", "zrender/tool/color", "zrender/tool/util", "zrender/shape/Base", "../component"], function(e) {
    function d(e, i, s, o, u) {
        t.call(this, e, i, s, o, u), this.dom = u.dom;
        var f = this;
        f._onmousemove = function(e) {
            return f.__onmousemove(e)
        }, f._onglobalout = function(e) {
            return f.__onglobalout(e)
        }, this.zr.on(a.EVENT.MOUSEMOVE, f._onmousemove), this.zr.on(a.EVENT.GLOBALOUT, f._onglobalout), f._hide = function(e) {
            return f.__hide(e)
        }, f._tryShow = function(e) {
            return f.__tryShow(e)
        }, f._refixed = function(e) {
            return f.__refixed(e)
        }, f._setContent = function(e, t) {
            return f.__setContent(e, t)
        }, this._tDom = this._tDom || document.createElement("div"), this._tDom.onselectstart = function() {
            return !1
        }, this._tDom.style.position = "absolute", this.hasAppend = !1, this._axisLineShape && this.zr.delShape(this._axisLineShape.id), this._axisLineShape = new r({
            zlevel: this._zlevelBase,
            invisible: !0,
            hoverable: !1
        }), this.shapeList.push(this._axisLineShape), this.zr.addShape(this._axisLineShape), this._axisShadowShape && this.zr.delShape(this._axisShadowShape.id), this._axisShadowShape = new r({
            zlevel: 1,
            invisible: !0,
            hoverable: !1
        }), this.shapeList.push(this._axisShadowShape), this.zr.addShape(this._axisShadowShape), this._axisCrossShape && this.zr.delShape(this._axisCrossShape.id), this._axisCrossShape = new n({
            zlevel: this._zlevelBase,
            invisible: !0,
            hoverable: !1
        }), this.shapeList.push(this._axisCrossShape), this.zr.addShape(this._axisCrossShape), this.showing = !1, this.refresh(o)
    }
    var t = e("./base"),
        n = e("../util/shape/Cross"),
        r = e("zrender/shape/Line"),
        i = e("zrender/shape/Rectangle"),
        s = new i({}),
        o = e("../config"),
        u = e("../util/ecData"),
        a = e("zrender/config"),
        f = e("zrender/tool/event"),
        l = e("zrender/tool/area"),
        c = e("zrender/tool/color"),
        h = e("zrender/tool/util"),
        p = e("zrender/shape/Base");
    return d.prototype = {
        type: o.COMPONENT_TYPE_TOOLTIP,
        _gCssText: "position:absolute;display:block;border-style:solid;white-space:nowrap;",
        _style: function(e) {
            if (!e) return "";
            var t = [];
            if (e.transitionDuration) {
                var n = "left " + e.transitionDuration + "s," + "top " + e.transitionDuration + "s";
                t.push("transition:" + n), t.push("-moz-transition:" + n), t.push("-webkit-transition:" + n), t.push("-o-transition:" + n)
            }
            e.backgroundColor && (t.push("background-Color:" + c.toHex(e.backgroundColor)), t.push("filter:alpha(opacity=70)"), t.push("background-Color:" + e.backgroundColor)), typeof e.borderWidth != "undefined" && t.push("border-width:" + e.borderWidth + "px"), typeof e.borderColor != "undefined" && t.push("border-color:" + e.borderColor), typeof e.borderRadius != "undefined" && (t.push("border-radius:" + e.borderRadius + "px"), t.push("-moz-border-radius:" + e.borderRadius + "px"), t.push("-webkit-border-radius:" + e.borderRadius + "px"), t.push("-o-border-radius:" + e.borderRadius + "px"));
            var r = e.textStyle;
            r && (r.color && t.push("color:" + r.color), r.decoration && t.push("text-decoration:" + r.decoration), r.align && t.push("text-align:" + r.align), r.fontFamily && t.push("font-family:" + r.fontFamily), r.fontSize && t.push("font-size:" + r.fontSize + "px"), r.fontSize && t.push("line-height:" + Math.round(r.fontSize * 3 / 2) + "px"), r.fontStyle && t.push("font-style:" + r.fontStyle), r.fontWeight && t.push("font-weight:" + r.fontWeight));
            var i = e.padding;
            return typeof i != "undefined" && (i = this.reformCssArray(i), t.push("padding:" + i[0] + "px " + i[1] + "px " + i[2] + "px " + i[3] + "px")), t = t.join(";") + ";", t
        },
        __hide: function() {
            this._tDom && (this._tDom.style.display = "none");
            var e = !1;
            this._axisLineShape.invisible || (this._axisLineShape.invisible = !0, this.zr.modShape(this._axisLineShape.id), e = !0), this._axisShadowShape.invisible || (this._axisShadowShape.invisible = !0, this.zr.modShape(this._axisShadowShape.id), e = !0), this._axisCrossShape.invisible || (this._axisCrossShape.invisible = !0, this.zr.modShape(this._axisCrossShape.id), e = !0), this._lastTipShape && this._lastTipShape.tipShape.length > 0 && (this.zr.delShape(this._lastTipShape.tipShape), this._lastTipShape = !1, this.shapeList.length = 2), e && this.zr.refresh(), this.showing = !1
        },
        _show: function(e, t, n, r) {
            var i = this._tDom.offsetHeight,
                s = this._tDom.offsetWidth;
            e && (typeof e == "function" && (e = e([t, n])), e instanceof Array && (t = e[0], n = e[1])), t + s > this._zrWidth && (t -= s + 40), n + i > this._zrHeight && (n -= i - 20), n < 20 && (n = 0), this._tDom.style.cssText = this._gCssText + this._defaultCssText + (r ? r : "") + "left:" + t + "px;top:" + n + "px;", (i < 10 || s < 10) && setTimeout(this._refixed, 20), this.showing = !0
        },
        __refixed: function() {
            if (this._tDom) {
                var e = "",
                    t = this._tDom.offsetHeight,
                    n = this._tDom.offsetWidth;
                this._tDom.offsetLeft + n > this._zrWidth && (e += "left:" + (this._zrWidth - n - 20) + "px;"), this._tDom.offsetTop + t > this._zrHeight && (e += "top:" + (this._zrHeight - t - 10) + "px;"), e !== "" && (this._tDom.style.cssText += e)
            }
        },
        __tryShow: function() {
            var e, t;
            if (!this._curTarget) this._findPolarTrigger() || this._findAxisTrigger();
            else {
                if (this._curTarget._type == "island" && this.option.tooltip.show) {
                    this._showItemTrigger();
                    return
                }
                var n = u.get(this._curTarget, "series"),
                    r = u.get(this._curTarget, "data");
                e = this.deepQuery([r, n, this.option], "tooltip.show"), typeof n == "undefined" || typeof r == "undefined" || e === !1 ? (clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._hidingTicket = setTimeout(this._hide, this._hideDelay)) : (t = this.deepQuery([r, n, this.option], "tooltip.trigger"), t == "axis" ? this._showAxisTrigger(n.xAxisIndex, n.yAxisIndex, u.get(this._curTarget, "dataIndex")) : this._showItemTrigger())
            }
        },
        _findAxisTrigger: function() {
            if (!this.component.xAxis || !this.component.yAxis) {
                this._hidingTicket = setTimeout(this._hide, this._hideDelay);
                return
            }
            var e = this.option.series,
                t, n;
            for (var r = 0, i = e.length; r < i; r++)
                if (this.deepQuery([e[r], this.option], "tooltip.trigger") == "axis") {
                    t = e[r].xAxisIndex || 0, n = e[r].yAxisIndex || 0;
                    if (this.component.xAxis.getAxis(t) && this.component.xAxis.getAxis(t).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                        this._showAxisTrigger(t, n, this._getNearestDataIndex("x", this.component.xAxis.getAxis(t)));
                        return
                    }
                    if (this.component.yAxis.getAxis(n) && this.component.yAxis.getAxis(n).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                        this._showAxisTrigger(t, n, this._getNearestDataIndex("y", this.component.yAxis.getAxis(n)));
                        return
                    }
                    this._showAxisTrigger(t, n, -1);
                    return
                }
            this.option.tooltip.axisPointer.type == "cross" && this._showAxisTrigger(-1, -1, -1)
        },
        _findPolarTrigger: function() {
            if (!this.component.polar) return !1;
            var e = f.getX(this._event),
                t = f.getY(this._event),
                n = this.component.polar.getNearestIndex([e, t]),
                r;
            return n ? (r = n.valueIndex, n = n.polarIndex) : n = -1, n != -1 ? this._showPolarTrigger(n, r) : !1
        },
        _getNearestDataIndex: function(e, t) {
            var n = -1,
                r = f.getX(this._event),
                i = f.getY(this._event);
            if (e == "x") {
                var s, o, u = this.component.grid.getXend(),
                    a = t.getCoordByIndex(n);
                while (a < u) {
                    a <= r && (s = a);
                    if (a >= r) break;
                    a = t.getCoordByIndex(++n), o = a
                }
                return r - s < o - r ? n -= n !== 0 ? 1 : 0 : typeof t.getNameByIndex(n) == "undefined" && (n -= 1), n
            }
            var l, c, h = this.component.grid.getY(),
                a = t.getCoordByIndex(n);
            while (a > h) {
                a >= i && (c = a);
                if (a <= i) break;
                a = t.getCoordByIndex(++n), l = a
            }
            return i - l > c - i ? n -= n !== 0 ? 1 : 0 : typeof t.getNameByIndex(n) == "undefined" && (n -= 1), n
        },
        _showAxisTrigger: function(e, t, n) {
            !this._event.connectTrigger && this.messageCenter.dispatch(o.EVENT.TOOLTIP_IN_GRID, this._event, null, this.myChart);
            if (typeof this.component.xAxis == "undefined" || typeof this.component.yAxis == "undefined" || typeof e == "undefined" || typeof t == "undefined") {
                clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._hidingTicket = setTimeout(this._hide, this._hideDelay);
                return
            }
            var r = this.option.series,
                i = [],
                s = [],
                u, a, l, c, h, p, d = "";
            if (this.option.tooltip.trigger == "axis") {
                if (this.option.tooltip.show === !1) return;
                c = this.option.tooltip.formatter, h = this.option.tooltip.position
            }
            if (e != -1 && this.component.xAxis.getAxis(e).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                u = this.component.xAxis.getAxis(e);
                for (var v = 0, m = r.length; v < m; v++) {
                    if (!this._isSelected(r[v].name)) continue;
                    r[v].xAxisIndex == e && this.deepQuery([r[v], this.option], "tooltip.trigger") == "axis" && (p = this.query(r[v], "tooltip.showContent") || p, c = this.query(r[v], "tooltip.formatter") || c, h = this.query(r[v], "tooltip.position") || h, d += this._style(this.query(r[v], "tooltip")), i.push(r[v]), s.push(v))
                }
                this.messageCenter.dispatch(o.EVENT.TOOLTIP_HOVER, this._event, {
                    seriesIndex: s,
                    dataIndex: n
                }, this.myChart), l = f.getY(this._event), a = this.subPixelOptimize(u.getCoordByIndex(n), this._axisLineWidth), this._styleAxisPointer(i, a, this.component.grid.getY(), a, this.component.grid.getYend(), u.getGap(), a, l)
            } else if (t != -1 && this.component.yAxis.getAxis(t).type == o.COMPONENT_TYPE_AXIS_CATEGORY) {
                u = this.component.yAxis.getAxis(t);
                for (var v = 0, m = r.length; v < m; v++) {
                    if (!this._isSelected(r[v].name)) continue;
                    r[v].yAxisIndex == t && this.deepQuery([r[v], this.option], "tooltip.trigger") == "axis" && (p = this.query(r[v], "tooltip.showContent") || p, c = this.query(r[v], "tooltip.formatter") || c, h = this.query(r[v], "tooltip.position") || h, d += this._style(this.query(r[v], "tooltip")), i.push(r[v]), s.push(v))
                }
                this.messageCenter.dispatch(o.EVENT.TOOLTIP_HOVER, this._event, {
                    seriesIndex: s,
                    dataIndex: n
                }, this.myChart), a = f.getX(this._event), l = this.subPixelOptimize(u.getCoordByIndex(n), this._axisLineWidth), this._styleAxisPointer(i, this.component.grid.getX(), l, this.component.grid.getXend(), l, u.getGap(), a, l)
            } else a = f.getX(this._event), l = f.getY(this._event), this._styleAxisPointer(r, this.component.grid.getX(), l, this.component.grid.getXend(), l, 0, a, l), n >= 0 ? this._showItemTrigger() : (clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._tDom.style.display = "none");
            if (i.length > 0) {
                var g;
                if (typeof c == "function") {
                    var y = [];
                    for (var v = 0, m = i.length; v < m; v++) g = i[v].data[n], g = typeof g != "undefined" ? typeof g.value != "undefined" ? g.value : g : "-", y.push([i[v].name || "", u.getNameByIndex(n), g]);
                    this._curTicket = "axis:" + n, this._tDom.innerHTML = c(y, this._curTicket, this._setContent)
                } else if (typeof c == "string") {
                    this._curTicket = NaN, c = c.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}");
                    for (var v = 0, m = i.length; v < m; v++) c = c.replace("{a" + v + "}", this._encodeHTML(i[v].name || "")), c = c.replace("{b" + v + "}", this._encodeHTML(u.getNameByIndex(n))), g = i[v].data[n], g = typeof g != "undefined" ? typeof g.value != "undefined" ? g.value : g : "-", c = c.replace("{c" + v + "}", g instanceof Array ? g : this.numAddCommas(g));
                    this._tDom.innerHTML = c
                } else {
                    this._curTicket = NaN, c = this._encodeHTML(u.getNameByIndex(n));
                    for (var v = 0, m = i.length; v < m; v++) c += "<br/>" + this._encodeHTML(i[v].name || "") + " : ", g = i[v].data[n], g = typeof g != "undefined" ? typeof g.value != "undefined" ? g.value : g : "-", c += g instanceof Array ? g : this.numAddCommas(g);
                    this._tDom.innerHTML = c
                }
                if (p === !1 || !this.option.tooltip.showContent) return;
                this.hasAppend || (this._tDom.style.left = this._zrWidth / 2 + "px", this._tDom.style.top = this._zrHeight / 2 + "px", this.dom.firstChild.appendChild(this._tDom), this.hasAppend = !0), this._show(h, a + 10, l + 10, d)
            }
        },
        _showPolarTrigger: function(e, t) {
            if (typeof this.component.polar == "undefined" || typeof e == "undefined" || typeof t == "undefined" || t < 0) return !1;
            var n = this.option.series,
                r = [],
                i, s, o, u = "";
            if (this.option.tooltip.trigger == "axis") {
                if (this.option.tooltip.show === !1) return !1;
                i = this.option.tooltip.formatter, s = this.option.tooltip.position
            }
            var a = this.option.polar[e].indicator[t].text;
            for (var l = 0, c = n.length; l < c; l++) {
                if (!this._isSelected(n[l].name)) continue;
                n[l].polarIndex == e && this.deepQuery([n[l], this.option], "tooltip.trigger") == "axis" && (o = this.query(n[l], "tooltip.showContent") || o, i = this.query(n[l], "tooltip.formatter") || i, s = this.query(n[l], "tooltip.position") || s, u += this._style(this.query(n[l], "tooltip")), r.push(n[l]))
            }
            if (r.length > 0) {
                var h, p, d = [];
                for (var l = 0, c = r.length; l < c; l++) {
                    h = r[l].data;
                    for (var v = 0, m = h.length; v < m; v++) {
                        p = h[v];
                        if (!this._isSelected(p.name)) continue;
                        p = typeof p != "undefined" ? p : {
                            name: "",
                            value: {
                                dataIndex: "-"
                            }
                        }, d.push([r[l].name || "", p.name, typeof p.value[t].value != "undefined" ? p.value[t].value : p.value[t], a])
                    }
                }
                if (d.length <= 0) return;
                if (typeof i == "function") this._curTicket = "axis:" + t, this._tDom.innerHTML = i(d, this._curTicket, this._setContent);
                else if (typeof i == "string") {
                    i = i.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}");
                    for (var l = 0, c = d.length; l < c; l++) i = i.replace("{a" + l + "}", this._encodeHTML(d[l][0])), i = i.replace("{b" + l + "}", this._encodeHTML(d[l][1])), i = i.replace("{c" + l + "}", this.numAddCommas(d[l][2])), i = i.replace("{d" + l + "}", this._encodeHTML(d[l][3]));
                    this._tDom.innerHTML = i
                } else {
                    i = this._encodeHTML(d[0][1]) + "<br/>" + this._encodeHTML(d[0][3]) + " : " + this.numAddCommas(d[0][2]);
                    for (var l = 1, c = d.length; l < c; l++) i += "<br/>" + this._encodeHTML(d[l][1]) + "<br/>", i += this._encodeHTML(d[l][3]) + " : " + this.numAddCommas(d[l][2]);
                    this._tDom.innerHTML = i
                }
                if (o === !1 || !this.option.tooltip.showContent) return;
                return this.hasAppend || (this._tDom.style.left = this._zrWidth / 2 + "px", this._tDom.style.top = this._zrHeight / 2 + "px", this.dom.firstChild.appendChild(this._tDom), this.hasAppend = !0), this._show(s, f.getX(this._event), f.getY(this._event), u), !0
            }
        },
        _showItemTrigger: function() {
            if (!this._curTarget) return;
            var e = u.get(this._curTarget, "series"),
                t = u.get(this._curTarget, "data"),
                n = u.get(this._curTarget, "name"),
                r = u.get(this._curTarget, "value"),
                i = u.get(this._curTarget, "special"),
                s = u.get(this._curTarget, "special2"),
                a, l, c, h = "",
                p, d = "";
            this._curTarget._type != "island" ? (this.option.tooltip.trigger == "item" && (a = this.option.tooltip.formatter, l = this.option.tooltip.position), this.query(e, "tooltip.trigger") == "item" && (c = this.query(e, "tooltip.showContent") || c, a = this.query(e, "tooltip.formatter") || a, l = this.query(e, "tooltip.position") || l, h += this._style(this.query(e, "tooltip"))), c = this.query(t, "tooltip.showContent") || c, a = this.query(t, "tooltip.formatter") || a, l = this.query(t, "tooltip.position") || l, h += this._style(this.query(t, "tooltip"))) : (c = this.deepQuery([t, e, this.option], "tooltip.showContent"), a = this.deepQuery([t, e, this.option], "tooltip.islandFormatter"), l = this.deepQuery([t, e, this.option], "tooltip.islandPosition"));
            if (typeof a == "function") this._curTicket = (e.name || "") + ":" + u.get(this._curTarget, "dataIndex"), this._tDom.innerHTML = a([e.name || "", n, r, i, s], this._curTicket, this._setContent);
            else if (typeof a == "string") this._curTicket = NaN, a = a.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), a = a.replace("{a0}", this._encodeHTML(e.name || "")).replace("{b0}", this._encodeHTML(n)).replace("{c0}", r instanceof Array ? r : this.numAddCommas(r)), a = a.replace("{d}", "{d0}").replace("{d0}", i || ""), a = a.replace("{e}", "{e0}").replace("{e0}", u.get(this._curTarget, "special2") || ""), this._tDom.innerHTML = a;
            else {
                this._curTicket = NaN;
                if (e.type == o.CHART_TYPE_SCATTER) this._tDom.innerHTML = (typeof e.name != "undefined" ? this._encodeHTML(e.name) + "<br/>" : "") + (n === "" ? "" : this._encodeHTML(n) + " : ") + r + (typeof i == "undefined" ? "" : " (" + i + ")");
                else if (e.type == o.CHART_TYPE_RADAR && i) {
                    p = i, d += this._encodeHTML(n === "" ? e.name || "" : n), d += d === "" ? "" : "<br />";
                    for (var v = 0; v < p.length; v++) d += this._encodeHTML(p[v].text) + " : " + this.numAddCommas(r[v]) + "<br />";
                    this._tDom.innerHTML = d
                } else if (e.type == o.CHART_TYPE_CHORD)
                    if (typeof s == "undefined") this._tDom.innerHTML = this._encodeHTML(n) + " (" + this.numAddCommas(r) + ")";
                    else {
                        var m = this._encodeHTML(n),
                            g = this._encodeHTML(i);
                        this._tDom.innerHTML = (typeof e.name != "undefined" ? this._encodeHTML(e.name) + "<br/>" : "") + m + " -> " + g + " (" + this.numAddCommas(r) + ")" + "<br />" + g + " -> " + m + " (" + this.numAddCommas(s) + ")"
                    }
                else this._tDom.innerHTML = (typeof e.name != "undefined" ? this._encodeHTML(e.name) + "<br/>" : "") + this._encodeHTML(n) + " : " + this.numAddCommas(r) + (typeof i == "undefined" ? "" : " (" + this.numAddCommas(i) + ")")
            }
            if (!this._axisLineShape.invisible || !this._axisShadowShape.invisible) this._axisLineShape.invisible = !0, this.zr.modShape(this._axisLineShape.id), this._axisShadowShape.invisible = !0, this.zr.modShape(this._axisShadowShape.id), this.zr.refresh();
            if (c === !1 || !this.option.tooltip.showContent) return;
            this.hasAppend || (this._tDom.style.left = this._zrWidth / 2 + "px", this._tDom.style.top = this._zrHeight / 2 + "px", this.dom.firstChild.appendChild(this._tDom), this.hasAppend = !0), this._show(l, f.getX(this._event) + 20, f.getY(this._event) - 20, h)
        },
        _styleAxisPointer: function(e, t, n, r, i, s, o, u) {
            if (e.length > 0) {
                var a, f, l = this.option.tooltip.axisPointer,
                    c = l.type,
                    h = {
                        line: {},
                        cross: {},
                        shadow: {}
                    };
                for (var p in h) h[p].color = l[p + "Style"].color, h[p].width = l[p + "Style"].width, h[p].type = l[p + "Style"].type;
                for (var d = 0, v = e.length; d < v; d++) this.deepQuery([e[d], this.option], "tooltip.trigger") == "axis" && (a = e[d], f = this.query(a, "tooltip.axisPointer.type"), c = f || c, f && (h[f].color = this.query(a, "tooltip.axisPointer." + f + "Style.color") || h[f].color, h[f].width = this.query(a, "tooltip.axisPointer." + f + "Style.width") || h[f].width, h[f].type = this.query(a, "tooltip.axisPointer." + f + "Style.type") || h[f].type));
                if (c == "line") this._axisLineShape.style = {
                    xStart: t,
                    yStart: n,
                    xEnd: r,
                    yEnd: i,
                    strokeColor: h.line.color,
                    lineWidth: h.line.width,
                    lineType: h.line.type
                }, this._axisLineShape.invisible = !1, this.zr.modShape(this._axisLineShape.id);
                else if (c == "cross") this._axisCrossShape.style = {
                    brushType: "stroke",
                    rect: this.component.grid.getArea(),
                    x: o,
                    y: u,
                    text: ("( " + this.component.xAxis.getAxis(0).getValueFromCoord(o) + " , " + this.component.yAxis.getAxis(0).getValueFromCoord(u) + " )").replace("  , ", " ").replace(" ,  ", " "),
                    textPosition: "specific",
                    strokeColor: h.cross.color,
                    lineWidth: h.cross.width,
                    lineType: h.cross.type
                }, this.component.grid.getXend() - o > 100 ? (this._axisCrossShape.style.textAlign = "left", this._axisCrossShape.style.textX = o + 10) : (this._axisCrossShape.style.textAlign = "right", this._axisCrossShape.style.textX = o - 10), u - this.component.grid.getY() > 50 ? (this._axisCrossShape.style.textBaseline = "bottom", this._axisCrossShape.style.textY = u - 10) : (this._axisCrossShape.style.textBaseline = "top", this._axisCrossShape.style.textY = u + 10), this._axisCrossShape.invisible = !1, this.zr.modShape(this._axisCrossShape.id);
                else if (c == "shadow") {
                    if (typeof h.shadow.width == "undefined" || h.shadow.width == "auto" || isNaN(h.shadow.width)) h.shadow.width = s;
                    t == r ? Math.abs(this.component.grid.getX() - t) < 2 ? (h.shadow.width /= 2, t = r += h.shadow.width / 2) : Math.abs(this.component.grid.getXend() - t) < 2 && (h.shadow.width /= 2, t = r -= h.shadow.width / 2) : n == i && (Math.abs(this.component.grid.getY() - n) < 2 ? (h.shadow.width /= 2, n = i += h.shadow.width / 2) : Math.abs(this.component.grid.getYend() - n) < 2 && (h.shadow.width /= 2, n = i -= h.shadow.width / 2)), this._axisShadowShape.style = {
                        xStart: t,
                        yStart: n,
                        xEnd: r,
                        yEnd: i,
                        strokeColor: h.shadow.color,
                        lineWidth: h.shadow.width
                    }, this._axisShadowShape.invisible = !1, this.zr.modShape(this._axisShadowShape.id)
                }
                this.zr.refresh()
            }
        },
        __onmousemove: function(e) {
            clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket);
            var t = e.target,
                n = f.getX(e.event),
                r = f.getY(e.event);
            if (!t) this._curTarget = !1, this._event = e.event, this._event._target = this._event.target || this._event.toElement, this._event.zrenderX = n, this._event.zrenderY = r, this._needAxisTrigger && this.component.grid && l.isInside(s, this.component.grid.getArea(), n, r) ? this._showingTicket = setTimeout(this._tryShow, this._showDelay) : this._needAxisTrigger && this.component.polar && this.component.polar.isInside([n, r]) != -1 ? this._showingTicket = setTimeout(this._tryShow, this._showDelay) : (!this._event.connectTrigger && this.messageCenter.dispatch(o.EVENT.TOOLTIP_OUT_GRID, this._event, null, this.myChart), this._hidingTicket = setTimeout(this._hide, this._hideDelay));
            else {
                this._curTarget = t, this._event = e.event, this._event._target = this._event.target || this._event.toElement, this._event.zrenderX = n, this._event.zrenderY = r;
                var i;
                if (this._needAxisTrigger && this.component.polar && (i = this.component.polar.isInside([n, r])) != -1) {
                    var u = this.option.series;
                    for (var a = 0, c = u.length; a < c; a++)
                        if (u[a].polarIndex == i && this.deepQuery([u[a], this.option], "tooltip.trigger") == "axis") {
                            this._curTarget = null;
                            break
                        }
                }
                this._showingTicket = setTimeout(this._tryShow, this._showDelay)
            }
        },
        __onglobalout: function() {
            clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this._hidingTicket = setTimeout(this._hide, this._hideDelay)
        },
        __setContent: function(e, t) {
            if (!this._tDom) return;
            e == this._curTicket && (this._tDom.innerHTML = t), setTimeout(this._refixed, 20)
        },
        ontooltipHover: function(e, t) {
            if (!this._lastTipShape || this._lastTipShape && this._lastTipShape.dataIndex != e.dataIndex) {
                this._lastTipShape && this._lastTipShape.tipShape.length > 0 && (this.zr.delShape(this._lastTipShape.tipShape), this.shapeList.length = 2);
                for (var n = 0, r = t.length; n < r; n++) t[n].zlevel = this._zlevelBase, t[n].style = p.prototype.getHighlightStyle(t[n].style, t[n].highlightStyle), t[n].draggable = !1, t[n].hoverable = !1, t[n].clickable = !1, t[n].ondragend = null, t[n].ondragover = null, t[n].ondrop = null, this.shapeList.push(t[n]), this.zr.addShape(t[n]);
                this._lastTipShape = {
                    dataIndex: e.dataIndex,
                    tipShape: t
                }
            }
        },
        ondragend: function() {
            this._hide()
        },
        onlegendSelected: function(e) {
            this._selectedMap = e.selected
        },
        _setSelectedMap: function() {
            this.component.legend ? this._selectedMap = h.clone(this.component.legend.getSelectedMap()) : this._selectedMap = {}
        },
        _isSelected: function(e) {
            return typeof this._selectedMap[e] != "undefined" ? this._selectedMap[e] : !0
        },
        showTip: function(e) {
            if (!e) return;
            var t, n = this.option.series;
            if (typeof e.seriesIndex != "undefined") t = e.seriesIndex;
            else {
                var r = e.seriesName;
                for (var i = 0, s = n.length; i < s; i++)
                    if (n[i].name == r) {
                        t = i;
                        break
                    }
            }
            var f = n[t];
            if (typeof f == "undefined") return;
            var l = myChart.chart[f.type],
                c = this.deepQuery([f, this.option], "tooltip.trigger") == "axis";
            if (!l) return;
            if (c) {
                var h = e.dataIndex;
                switch (l.type) {
                    case o.CHART_TYPE_LINE:
                    case o.CHART_TYPE_BAR:
                    case o.CHART_TYPE_K:
                        if (typeof this.component.xAxis == "undefined" || typeof this.component.yAxis == "undefined" || f.data.length <= h) return;
                        var p = f.xAxisIndex || 0,
                            d = f.yAxisIndex || 0;
                        this.component.xAxis.getAxis(p).type == o.COMPONENT_TYPE_AXIS_CATEGORY ? this._event = {
                            zrenderX: this.component.xAxis.getAxis(p).getCoordByIndex(h),
                            zrenderY: this.component.grid.getY() + (this.component.grid.getYend() - this.component.grid.getY()) / 4
                        } : this._event = {
                            zrenderX: this.component.grid.getX() + (this.component.grid.getXend() - this.component.grid.getX()) / 4,
                            zrenderY: this.component.yAxis.getAxis(d).getCoordByIndex(h)
                        }, this._showAxisTrigger(p, d, h);
                        break;
                    case o.CHART_TYPE_RADAR:
                        if (typeof this.component.polar == "undefined" || f.data[0].value.length <= h) return;
                        var v = f.polarIndex || 0,
                            m = this.component.polar.getVector(v, h, "max");
                        this._event = {
                            zrenderX: m[0],
                            zrenderY: m[1]
                        }, this._showPolarTrigger(v, h)
                }
            } else {
                var g = l.shapeList,
                    y, b;
                switch (l.type) {
                    case o.CHART_TYPE_LINE:
                    case o.CHART_TYPE_BAR:
                    case o.CHART_TYPE_K:
                    case o.CHART_TYPE_SCATTER:
                        var h = e.dataIndex;
                        for (var i = 0, s = g.length; i < s; i++)
                            if (u.get(g[i], "seriesIndex") == t && u.get(g[i], "dataIndex") == h) {
                                this._curTarget = g[i], y = g[i].style.x, b = l.type != o.CHART_TYPE_K ? g[i].style.y : g[i].style.y[0];
                                break
                            }
                        break;
                    case o.CHART_TYPE_RADAR:
                        var h = e.dataIndex;
                        for (var i = 0, s = g.length; i < s; i++)
                            if (g[i].type == "polygon" && u.get(g[i], "seriesIndex") == t && u.get(g[i], "dataIndex") == h) {
                                this._curTarget = g[i];
                                var m = this.component.polar.getCenter(f.polarIndex || 0);
                                y = m[0], b = m[1];
                                break
                            }
                        break;
                    case o.CHART_TYPE_PIE:
                        var w = e.name;
                        for (var i = 0, s = g.length; i < s; i++)
                            if (g[i].type == "sector" && u.get(g[i], "seriesIndex") == t && u.get(g[i], "name") == w) {
                                this._curTarget = g[i];
                                var E = this._curTarget.style,
                                    S = (E.startAngle + E.endAngle) / 2 * Math.PI / 180;
                                y = this._curTarget.style.x + Math.cos(S) * E.r / 1.5, b = this._curTarget.style.y - Math.sin(S) * E.r / 1.5;
                                break
                            }
                        break;
                    case o.CHART_TYPE_MAP:
                        var w = e.name,
                            x = f.mapType;
                        for (var i = 0, s = g.length; i < s; i++)
                            if (g[i].type == "text" && g[i]._mapType == x && g[i].style._name == w) {
                                this._curTarget = g[i], y = this._curTarget.style.x + this._curTarget.position[0], b = this._curTarget.style.y + this._curTarget.position[1];
                                break
                            }
                        break;
                    case o.CHART_TYPE_CHORD:
                        var w = e.name;
                        for (var i = 0, s = g.length; i < s; i++)
                            if (g[i].type == "sector" && u.get(g[i], "name") == w) {
                                this._curTarget = g[i];
                                var E = this._curTarget.style,
                                    S = (E.startAngle + E.endAngle) / 2 * Math.PI / 180;
                                y = this._curTarget.style.x + Math.cos(S) * (E.r - 2), b = this._curTarget.style.y - Math.sin(S) * (E.r - 2), this.zr.trigger(a.EVENT.MOUSEMOVE, {
                                    zrenderX: y,
                                    zrenderY: b
                                });
                                return
                            }
                        break;
                    case o.CHART_TYPE_FORCE:
                        var w = e.name;
                        for (var i = 0, s = g.length; i < s; i++)
                            if (g[i].type == "circle" && u.get(g[i], "name") == w) {
                                this._curTarget = g[i], y = this._curTarget.position[0], b = this._curTarget.position[1];
                                break
                            }
                }
                typeof y != "undefined" && typeof b != "undefined" && (this._event = {
                    zrenderX: y,
                    zrenderY: b
                }, this.zr.addHoverShape(this._curTarget), this.zr.refreshHover(), this._showItemTrigger())
            }
        },
        hideTip: function() {
            this._hide()
        },
        refresh: function(e) {
            this._zrHeight = this.zr.getHeight(), this._zrWidth = this.zr.getWidth(), this._lastTipShape && this._lastTipShape.tipShape.length > 0 && this.zr.delShape(this._lastTipShape.tipShape), this._lastTipShape = !1, this.shapeList.length = 2;
            if (e) {
                this.option = e, this.option.tooltip = this.reformOption(this.option.tooltip), this.option.tooltip.textStyle = h.merge(this.option.tooltip.textStyle, this.ecTheme.textStyle), this.option.tooltip.padding = this.reformCssArray(this.option.tooltip.padding), this._needAxisTrigger = !1, this.option.tooltip.trigger == "axis" && (this._needAxisTrigger = !0);
                var t = this.option.series;
                for (var n = 0, r = t.length; n < r; n++)
                    if (this.query(t[n], "tooltip.trigger") == "axis") {
                        this._needAxisTrigger = !0;
                        break
                    }
                this._showDelay = this.option.tooltip.showDelay, this._hideDelay = this.option.tooltip.hideDelay, this._defaultCssText = this._style(this.option.tooltip), this._setSelectedMap(), this._axisLineWidth = this.option.tooltip.axisPointer.lineStyle.width
            }
            this.showing && this._tryShow()
        },
        dispose: function() {
            this._lastTipShape && this._lastTipShape.tipShape.length > 0 && this.zr.delShape(this._lastTipShape.tipShape), this.clear(), this.shapeList = null, clearTimeout(this._hidingTicket), clearTimeout(this._showingTicket), this.zr.un(a.EVENT.MOUSEMOVE, self._onmousemove), this.zr.un(a.EVENT.GLOBALOUT, self._onglobalout), this.hasAppend && this.dom.firstChild.removeChild(this._tDom), this._tDom = null
        },
        _encodeHTML: function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }
    }, h.inherits(d, t), e("../component").define("tooltip", d), d
}), define("zrender/shape/Ring", ["require", "./Base", "../tool/util"], function(e) {
    function n(e) {
        t.call(this, e)
    }
    var t = e("./Base");
    return n.prototype = {
        type: "ring",
        buildPath: function(e, t) {
            e.arc(t.x, t.y, t.r, 0, Math.PI * 2, !1), e.moveTo(t.x + t.r0, t.y), e.arc(t.x, t.y, t.r0, 0, Math.PI * 2, !0);
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t;
            return e.brushType == "stroke" || e.brushType == "fill" ? t = e.lineWidth || 1 : t = 0, e.__rect = {
                x: Math.round(e.x - e.r - t / 2),
                y: Math.round(e.y - e.r - t / 2),
                width: e.r * 2 + t,
                height: e.r * 2 + t
            }, e.__rect
        }
    }, e("../tool/util").inherits(n, t), n
}), define("zrender/shape/Sector", ["require", "../tool/math", "./Base", "./Ring", "./Polygon", "../tool/util"], function(e) {
    function r(e) {
        n.call(this, e)
    }
    var t = e("../tool/math"),
        n = e("./Base");
    return r.prototype = {
        type: "sector",
        buildPath: function(e, n) {
            var r = n.x,
                i = n.y,
                s = typeof n.r0 == "undefined" ? 0 : n.r0,
                o = n.r,
                u = n.startAngle,
                a = n.endAngle;
            if (Math.abs(a - u) >= 360) {
                e.arc(r, i, o, 0, Math.PI * 2, !1), s !== 0 && (e.moveTo(r + s, i), e.arc(r, i, s, 0, Math.PI * 2, !0));
                return
            }
            u = t.degreeToRadian(u), a = t.degreeToRadian(a);
            var f = Math.PI * 2,
                l = t.cos(u),
                c = t.sin(u);
            e.moveTo(l * s + r, i - c * s), e.lineTo(l * o + r, i - c * o), e.arc(r, i, o, f - u, f - a, !0), e.lineTo(t.cos(a) * s + r, i - t.sin(a) * s), s !== 0 && e.arc(r, i, s, f - a, f - u, !1);
            return
        },
        getRect: function(n) {
            if (n.__rect) return n.__rect;
            var r = n.x,
                i = n.y,
                s = typeof n.r0 == "undefined" ? 0 : n.r0,
                o = n.r,
                u = n.startAngle,
                a = n.endAngle;
            if (Math.abs(a - u) >= 360) return n.__rect = e("./Ring").prototype.getRect(n), n.__rect;
            u = (720 + u) % 360, a = (720 + a) % 360, a <= u && (a += 360);
            var f = [];
            return u <= 90 && a >= 90 && f.push([r, i - o]), u <= 180 && a >= 180 && f.push([r - o, i]), u <= 270 && a >= 270 && f.push([r, i + o]), u <= 360 && a >= 360 && f.push([r + o, i]), u = t.degreeToRadian(u), a = t.degreeToRadian(a), f.push([t.cos(u) * s + r, i - t.sin(u) * s]), f.push([t.cos(u) * o + r, i - t.sin(u) * o]), f.push([t.cos(a) * o + r, i - t.sin(a) * o]), f.push([t.cos(a) * s + r, i - t.sin(a) * s]), n.__rect = e("./Polygon").prototype.getRect({
                brushType: n.brushType,
                lineWidth: n.lineWidth,
                pointList: f
            }), n.__rect
        }
    }, e("../tool/util").inherits(r, n), r
}), define("echarts/util/shape/Candle", ["require", "zrender/shape/Base", "zrender/tool/util", "./normalIsCover"], function(e) {
    function r(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("zrender/tool/util");
    return r.prototype = {
        type: "candle",
        _numberOrder: function(e, t) {
            return t - e
        },
        buildPath: function(e, t) {
            var r = n.clone(t.y).sort(this._numberOrder);
            e.moveTo(t.x, r[3]), e.lineTo(t.x, r[2]), e.moveTo(t.x - t.width / 2, r[2]), e.rect(t.x - t.width / 2, r[2], t.width, r[1] - r[2]), e.moveTo(t.x, r[1]), e.lineTo(t.x, r[0])
        },
        getRect: function(e) {
            if (!e.__rect) {
                var t = 0;
                if (e.brushType == "stroke" || e.brushType == "fill") t = e.lineWidth || 1;
                var r = n.clone(e.y).sort(this._numberOrder);
                e.__rect = {
                    x: Math.round(e.x - e.width / 2 - t / 2),
                    y: Math.round(r[3] - t / 2),
                    width: e.width + t,
                    height: r[0] - r[3] + t
                }
            }
            return e.__rect
        },
        isCover: e("./normalIsCover")
    }, n.inherits(r, t), r
}), define("echarts/component/legend", ["require", "./base", "zrender/shape/Text", "zrender/shape/Rectangle", "zrender/shape/Sector", "../util/shape/Icon", "../util/shape/Candle", "../config", "zrender/tool/util", "zrender/tool/area", "../component"], function(e) {
    function l(e, n, r, i, s) {
        if (!this.query(i, "legend.data")) {
            console.error("option.legend.data has not been defined.");
            return
        }
        t.call(this, e, n, r, i, s);
        var o = this;
        o._legendSelected = function(e) {
            o.__legendSelected(e)
        }, this._colorIndex = 0, this._colorMap = {}, this._selectedMap = {}, this.refresh(i)
    }
    var t = e("./base"),
        n = e("zrender/shape/Text"),
        r = e("zrender/shape/Rectangle"),
        i = e("zrender/shape/Sector"),
        s = e("../util/shape/Icon"),
        o = e("../util/shape/Candle"),
        u = e("../config"),
        a = e("zrender/tool/util"),
        f = e("zrender/tool/area");
    l.prototype = {
        type: u.COMPONENT_TYPE_LEGEND,
        _buildShape: function() {
            this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this._buildItem();
            for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
        },
        _buildItem: function() {
            var e = this.legendOption.data,
                t = e.length,
                r, i, o, u, l = this.legendOption.textStyle,
                c, h, p = this.zr.getWidth(),
                d = this.zr.getHeight(),
                v = this._itemGroupLocation.x,
                m = this._itemGroupLocation.y,
                g = this.legendOption.itemWidth,
                y = this.legendOption.itemHeight,
                b = this.legendOption.itemGap,
                w;
            this.legendOption.orient == "vertical" && this.legendOption.x == "right" && (v = this._itemGroupLocation.x + this._itemGroupLocation.width - g);
            for (var E = 0; E < t; E++) {
                c = a.merge(e[E].textStyle || {}, l), h = this.getFont(c), r = this._getName(e[E]);
                if (r === "") {
                    this.legendOption.orient == "horizontal" ? (v = this._itemGroupLocation.x, m += y + b) : (this.legendOption.x == "right" ? v -= this._itemGroupLocation.maxWidth + b : v += this._itemGroupLocation.maxWidth + b, m = this._itemGroupLocation.y);
                    continue
                }
                i = e[E].icon || this._getSomethingByName(r).type, w = this.getColor(r), this.legendOption.orient == "horizontal" ? p - v < 200 && g + 5 + f.getTextWidth(r, h) + (E == t - 1 || e[E + 1] === "" ? 0 : b) >= p - v && (v = this._itemGroupLocation.x, m += y + b) : d - m < 200 && y + (E == t - 1 || e[E + 1] === "" ? 0 : b) >= d - m && (this.legendOption.x == "right" ? v -= this._itemGroupLocation.maxWidth + b : v += this._itemGroupLocation.maxWidth + b, m = this._itemGroupLocation.y), o = this._getItemShapeByType(v, m, g, y, this._selectedMap[r] ? w : "#ccc", i, w), o._name = r, o = new s(o), u = {
                    zlevel: this._zlevelBase,
                    style: {
                        x: v + g + 5,
                        y: m + y / 2,
                        color: this._selectedMap[r] ? c.color === "auto" ? w : c.color : "#ccc",
                        text: r,
                        textFont: h,
                        textBaseline: "middle"
                    },
                    highlightStyle: {
                        color: w,
                        brushType: "fill"
                    },
                    hoverable: !!this.legendOption.selectedMode,
                    clickable: !!this.legendOption.selectedMode
                }, this.legendOption.orient == "vertical" && this.legendOption.x == "right" && (u.style.x -= g + 10, u.style.textAlign = "right"), u._name = r, u = new n(u), this.legendOption.selectedMode && (o.onclick = u.onclick = this._legendSelected, o.onmouseover = u.onmouseover = this.hoverConnect, o.hoverConnect = u.id, u.hoverConnect = o.id), this.shapeList.push(o), this.shapeList.push(u), this.legendOption.orient == "horizontal" ? v += g + 5 + f.getTextWidth(r, h) + b : m += y + b
            }
            this.legendOption.orient == "horizontal" && this.legendOption.x == "center" && m != this._itemGroupLocation.y && this._mLineOptimize()
        },
        _getName: function(e) {
            return typeof e.name != "undefined" ? e.name : e
        },
        _mLineOptimize: function() {
            var e = [],
                t = this._itemGroupLocation.x;
            for (var n = 2, r = this.shapeList.length; n < r; n++) this.shapeList[n].style.x == t ? e.push((this._itemGroupLocation.width - (this.shapeList[n - 1].style.x + f.getTextWidth(this.shapeList[n - 1].style.text, this.shapeList[n - 1].style.textFont) - t)) / 2) : n == r - 1 && e.push((this._itemGroupLocation.width - (this.shapeList[n].style.x + f.getTextWidth(this.shapeList[n].style.text, this.shapeList[n].style.textFont) - t)) / 2);
            var i = -1;
            for (var n = 1, r = this.shapeList.length; n < r; n++) {
                this.shapeList[n].style.x == t && i++;
                if (e[i] === 0) continue;
                this.shapeList[n].style.x += e[i]
            }
        },
        _buildBackground: function() {
            var e = this.legendOption.padding[0],
                t = this.legendOption.padding[1],
                n = this.legendOption.padding[2],
                i = this.legendOption.padding[3];
            this.shapeList.push(new r({
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this._itemGroupLocation.x - i,
                    y: this._itemGroupLocation.y - e,
                    width: this._itemGroupLocation.width + i + t,
                    height: this._itemGroupLocation.height + e + n,
                    brushType: this.legendOption.borderWidth === 0 ? "fill" : "both",
                    color: this.legendOption.backgroundColor,
                    strokeColor: this.legendOption.borderColor,
                    lineWidth: this.legendOption.borderWidth
                }
            }))
        },
        _getItemGroupLocation: function() {
            var e = this.legendOption.data,
                t = e.length,
                n = this.legendOption.itemGap,
                r = this.legendOption.itemWidth + 5,
                i = this.legendOption.itemHeight,
                s = this.legendOption.textStyle,
                o = this.getFont(s),
                u = 0,
                l = 0,
                c = this.legendOption.padding,
                h = this.zr.getWidth() - c[1] - c[3],
                p = this.zr.getHeight() - c[0] - c[2],
                d = 0,
                v = 0;
            if (this.legendOption.orient == "horizontal") {
                l = i;
                for (var m = 0; m < t; m++) {
                    if (this._getName(e[m]) === "") {
                        d -= n, d > h ? (u = h, l += i + n) : u = Math.max(u, d), l += i + n, d = 0;
                        continue
                    }
                    dataTextStyle = a.merge(e[m].textStyle || {}, s), d += r + f.getTextWidth(this._getName(e[m]), e[m].textStyle ? this.getFont(a.merge(e[m].textStyle || {}, s)) : o) + n
                }
                l = Math.max(l, i), d -= n, d > h ? (u = h, l += i + n) : u = Math.max(u, d)
            } else {
                for (var m = 0; m < t; m++) v = Math.max(v, f.getTextWidth(this._getName(e[m]), e[m].textStyle ? this.getFont(a.merge(e[m].textStyle || {}, s)) : o));
                v += r, u = v;
                for (var m = 0; m < t; m++) {
                    if (this._getName(e[m]) === "") {
                        d -= n, d > p ? (l = p, u += v + n) : l = Math.max(l, d), u += v + n, d = 0;
                        continue
                    }
                    d += i + n
                }
                u = Math.max(u, v), d -= n, d > p ? (l = p, u += v + n) : l = Math.max(l, d)
            }
            h = this.zr.getWidth(), p = this.zr.getHeight();
            var g;
            switch (this.legendOption.x) {
                case "center":
                    g = Math.floor((h - u) / 2);
                    break;
                case "left":
                    g = this.legendOption.padding[3] + this.legendOption.borderWidth;
                    break;
                case "right":
                    g = h - u - this.legendOption.padding[1] - this.legendOption.padding[3] - this.legendOption.borderWidth * 2;
                    break;
                default:
                    g = this.parsePercent(this.legendOption.x, h)
            }
            var y;
            switch (this.legendOption.y) {
                case "top":
                    y = this.legendOption.padding[0] + this.legendOption.borderWidth;
                    break;
                case "bottom":
                    y = p - l - this.legendOption.padding[0] - this.legendOption.padding[2] - this.legendOption.borderWidth * 2;
                    break;
                case "center":
                    y = Math.floor((p - l) / 2);
                    break;
                default:
                    y = this.parsePercent(this.legendOption.y, p)
            }
            return {
                x: g,
                y: y,
                width: u,
                height: l,
                maxWidth: v
            }
        },
        _getSomethingByName: function(e) {
            var t = this.option.series,
                n;
            for (var r = 0, i = t.length; r < i; r++) {
                if (t[r].name == e) return {
                    type: t[r].type,
                    series: t[r],
                    seriesIndex: r,
                    data: null,
                    dataIndex: -1
                };
                if (t[r].type == u.CHART_TYPE_PIE || t[r].type == u.CHART_TYPE_RADAR || t[r].type == u.CHART_TYPE_CHORD || t[r].type == u.CHART_TYPE_FORCE || t[r].type == u.CHART_TYPE_FUNNEL) {
                    n = t[r].type != u.CHART_TYPE_FORCE ? t[r].data : t[r].categories;
                    for (var s = 0, o = n.length; s < o; s++)
                        if (n[s].name == e) return {
                            type: t[r].type,
                            series: t[r],
                            seriesIndex: r,
                            data: n[s],
                            dataIndex: s
                        }
                }
            }
            return {
                type: "bar",
                series: null,
                seriesIndex: -1,
                data: null,
                dataIndex: -1
            }
        },
        _getItemShapeByType: function(e, t, n, r, i, s, o) {
            var u = i === "#ccc" ? o : i,
                a = {
                    zlevel: this._zlevelBase,
                    style: {
                        iconType: "legendicon" + s,
                        x: e,
                        y: t,
                        width: n,
                        height: r,
                        color: i,
                        strokeColor: i,
                        lineWidth: 2
                    },
                    highlightStyle: {
                        color: u,
                        strokeColor: u,
                        lineWidth: 1
                    },
                    hoverable: this.legendOption.selectedMode,
                    clickable: this.legendOption.selectedMode
                },
                f;
            if (s.match("image")) {
                var f = s.replace(new RegExp("^image:\\/\\/"), "");
                s = "image"
            }
            switch (s) {
                case "line":
                    a.style.brushType = "stroke", a.highlightStyle.lineWidth = 3;
                    break;
                case "radar":
                case "scatter":
                    a.highlightStyle.lineWidth = 3;
                    break;
                case "k":
                    a.style.brushType = "both", a.highlightStyle.lineWidth = 3, a.highlightStyle.color = a.style.color = this.query(this.ecTheme, "k.itemStyle.normal.color") || "#fff", a.style.strokeColor = i != "#ccc" ? this.query(this.ecTheme, "k.itemStyle.normal.lineStyle.color") || "#ff3200" : i;
                    break;
                case "image":
                    a.style.iconType = "image", a.style.image = f, i === "#ccc" && (a.style.opacity = .5)
            }
            return a
        },
        __legendSelected: function(e) {
            var t = e.target._name;
            if (this.legendOption.selectedMode === "single")
                for (var n in this._selectedMap) this._selectedMap[n] = !1;
            this._selectedMap[t] = !this._selectedMap[t], this.messageCenter.dispatch(u.EVENT.LEGEND_SELECTED, e.event, {
                selected: this._selectedMap,
                target: t
            }, this.myChart)
        },
        refresh: function(e) {
            if (e) {
                this.option = e || this.option, this.option.legend = this.reformOption(this.option.legend), this.option.legend.padding = this.reformCssArray(this.option.legend.padding), this.legendOption = this.option.legend;
                var t = this.legendOption.data || [],
                    n, r, i, s;
                if (this.legendOption.selected)
                    for (var o in this.legendOption.selected) this._selectedMap[o] = typeof this._selectedMap[o] != "undefined" ? this._selectedMap[o] : this.legendOption.selected[o];
                for (var a = 0, f = t.length; a < f; a++) {
                    n = this._getName(t[a]);
                    if (n === "") continue;
                    r = this._getSomethingByName(n), r.series ? (!r.data || r.type != u.CHART_TYPE_PIE && r.type != u.CHART_TYPE_FORCE && r.type != u.CHART_TYPE_FUNNEL ? s = [r.series] : s = [r.data, r.series], i = this.getItemStyleColor(this.deepQuery(s, "itemStyle.normal.color"), r.seriesIndex, r.dataIndex, r.data), i && r.type != u.CHART_TYPE_K && this.setColor(n, i), this._selectedMap[n] = typeof this._selectedMap[n] != "undefined" ? this._selectedMap[n] : !0) : this._selectedMap[n] = !1
                }
            }
            this.clear(), this._buildShape()
        },
        getRelatedAmount: function(e) {
            var t = 0,
                n = this.option.series,
                r;
            for (var i = 0, s = n.length; i < s; i++) {
                n[i].name == e && t++;
                if (n[i].type == u.CHART_TYPE_PIE || n[i].type == u.CHART_TYPE_RADAR || n[i].type == u.CHART_TYPE_CHORD || n[i].type == u.CHART_TYPE_FORCE || n[i].type == u.CHART_TYPE_FUNNEL) {
                    r = n[i].type != u.CHART_TYPE_FORCE ? n[i].data : n[i].categories;
                    for (var o = 0, a = r.length; o < a; o++) r[o].name == e && r[o].value != "-" && t++
                }
            }
            return t
        },
        setColor: function(e, t) {
            this._colorMap[e] = t
        },
        getColor: function(e) {
            return this._colorMap[e] || (this._colorMap[e] = this.zr.getColor(this._colorIndex++)), this._colorMap[e]
        },
        hasColor: function(e) {
            return this._colorMap[e] ? this._colorMap[e] : !1
        },
        add: function(e, t) {
            var n = this.legendOption.data;
            for (var r = 0, i = n.length; r < i; r++)
                if (this._getName(n[r]) == e) return;
            this.legendOption.data.push(e), this.setColor(e, t), this._selectedMap[e] = !0
        },
        del: function(e) {
            var t = this.legendOption.data;
            for (var n = 0, r = t.length; n < r; n++)
                if (this._getName(t[n]) == e) return this.legendOption.data.splice(n, 1)
        },
        getItemShape: function(e) {
            if (typeof e == "undefined") return;
            var t;
            for (var n = 0, r = this.shapeList.length; n < r; n++) {
                t = this.shapeList[n];
                if (t._name == e && t.type != "text") return t
            }
        },
        setItemShape: function(e, t) {
            var n;
            for (var r = 0, i = this.shapeList.length; r < i; r++) n = this.shapeList[r], n._name == e && n.type != "text" && (this._selectedMap[e] || (t.style.color = "#ccc", t.style.strokeColor = "#ccc"), this.zr.modShape(n.id, t))
        },
        isSelected: function(e) {
            return typeof this._selectedMap[e] != "undefined" ? this._selectedMap[e] : !0
        },
        getSelectedMap: function() {
            return this._selectedMap
        },
        setSelected: function(e, t) {
            if (this.legendOption.selectedMode === "single")
                for (var n in this._selectedMap) this._selectedMap[n] = !1;
            this._selectedMap[e] = t, this.messageCenter.dispatch(u.EVENT.LEGEND_SELECTED, null, {
                selected: this._selectedMap,
                target: e
            }, this.myChart)
        },
        onlegendSelected: function(e, t) {
            var n = e.selected;
            for (var r in n) this._selectedMap[r] != n[r] && (t.needRefresh = !0), this._selectedMap[r] = n[r];
            return
        }
    };
    var c = {
        line: function(e, t) {
            var n = t.height / 2;
            e.moveTo(t.x, t.y + n), e.lineTo(t.x + t.width, t.y + n)
        },
        pie: function(e, t) {
            var n = t.x,
                r = t.y,
                s = t.width,
                o = t.height;
            i.prototype.buildPath(e, {
                x: n + s / 2,
                y: r + o + 2,
                r: o + 2,
                r0: 6,
                startAngle: 45,
                endAngle: 135
            })
        },
        k: function(e, t) {
            var n = t.x,
                r = t.y,
                i = t.width,
                s = t.height;
            o.prototype.buildPath(e, {
                x: n + i / 2,
                y: [r + 1, r + 1, r + s - 6, r + s],
                width: i - 6
            })
        },
        bar: function(e, t) {
            var n = t.x,
                r = t.y + 1,
                i = t.width,
                s = t.height - 2,
                o = 3;
            e.moveTo(n + o, r), e.lineTo(n + i - o, r), e.quadraticCurveTo(n + i, r, n + i, r + o), e.lineTo(n + i, r + s - o), e.quadraticCurveTo(n + i, r + s, n + i - o, r + s), e.lineTo(n + o, r + s), e.quadraticCurveTo(n, r + s, n, r + s - o), e.lineTo(n, r + o), e.quadraticCurveTo(n, r, n + o, r)
        },
        force: function(e, t) {
            s.prototype.iconLibrary.circle(e, t)
        },
        radar: function(e, t) {
            var n = 6,
                r = t.x + t.width / 2,
                i = t.y + t.height / 2,
                s = t.height / 2,
                o = 2 * Math.PI / n,
                u = -Math.PI / 2,
                a = r + s * Math.cos(u),
                f = i + s * Math.sin(u);
            e.moveTo(a, f), u += o;
            for (var l = 0, c = n - 1; l < c; l++) e.lineTo(r + s * Math.cos(u), i + s * Math.sin(u)), u += o;
            e.lineTo(a, f)
        }
    };
    c.chord = c.pie, c.map = c.bar;
    for (var h in c) s.prototype.iconLibrary["legendicon" + h] = c[h];
    return a.inherits(l, t), e("../component").define("legend", l), l
}), define("echarts/util/shape/Chain", ["require", "zrender/shape/Base", "./Icon", "zrender/shape/util/dashedLineTo", "zrender/tool/util", "zrender/tool/matrix"], function(e) {
    function o(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("./Icon"),
        r = e("zrender/shape/util/dashedLineTo"),
        i = e("zrender/tool/util"),
        s = e("zrender/tool/matrix");
    return o.prototype = {
        type: "chain",
        brush: function(e, t) {
            var n = this.style;
            t && (n = this.getHighlightStyle(n, this.highlightStyle || {})), e.save(), this.setContext(e, n), this.updateTransform(e), e.beginPath(), this.buildLinePath(e, n), e.stroke(), this.brushSymbol(e, n), e.restore();
            return
        },
        buildLinePath: function(e, t) {
            var n = t.x,
                i = t.y + 5,
                s = t.width,
                o = t.height / 2 - 10;
            e.moveTo(n, i), e.lineTo(n, i + o), e.moveTo(n + s, i), e.lineTo(n + s, i + o), e.moveTo(n, i + o / 2);
            if (!t.lineType || t.lineType == "solid") e.lineTo(n + s, i + o / 2);
            else if (t.lineType == "dashed" || t.lineType == "dotted") {
                var u = (t.lineWidth || 1) * (t.lineType == "dashed" ? 5 : 1);
                r(e, n, i + o / 2, n + s, i + o / 2, u)
            }
        },
        brushSymbol: function(e, t) {
            var r = t.y + t.height / 4;
            e.save();
            var i = t.chainPoint,
                s;
            for (var o = 0, u = i.length; o < u; o++) {
                s = i[o];
                if (s.symbol != "none") {
                    e.beginPath();
                    var a = s.symbolSize;
                    n.prototype.buildPath(e, {
                        iconType: s.symbol,
                        x: s.x - a,
                        y: r - a,
                        width: a * 2,
                        height: a * 2,
                        n: s.n
                    }), e.fillStyle = s.isEmpty ? "#fff" : t.strokeColor, e.closePath(), e.fill(), e.stroke()
                }
                s.showLabel && (e.font = s.textFont, e.fillStyle = s.textColor, e.textAlign = s.textAlign, e.textBaseline = s.textBaseline, s.rotation ? (e.save(), this._updateTextTransform(e, s.rotation), e.fillText(s.name, s.textX, s.textY), e.restore()) : e.fillText(s.name, s.textX, s.textY))
            }
            e.restore()
        },
        _updateTextTransform: function(e, t) {
            var n = s.create();
            s.identity(n);
            if (t[0] !== 0) {
                var r = t[1] || 0,
                    i = t[2] || 0;
                (r || i) && s.translate(n, n, [-r, -i]), s.rotate(n, n, t[0]), (r || i) && s.translate(n, n, [r, i])
            }
            e.transform.apply(e, n)
        },
        isCover: function(e, t) {
            var n = this.style;
            return e >= n.x && e <= n.x + n.width && t >= n.y && t <= n.y + n.height ? !0 : !1
        }
    }, i.inherits(o, t), o
}), define("echarts/component/timeline", ["require", "./base", "zrender/shape/Rectangle", "../util/shape/Icon", "../util/shape/Chain", "../config", "zrender/tool/util", "zrender/tool/area", "zrender/tool/event", "../component"], function(e) {
    function f(e, n, r, i, o) {
        t.call(this, e, n, r, i, o);
        var u = this;
        u._onclick = function(e) {
            return u.__onclick(e)
        }, u._ondrift = function(e, t) {
            return u.__ondrift(this, e, t)
        }, u._ondragend = function() {
            return u.__ondragend()
        }, u._setCurrentOption = function() {
            var e = u.timelineOption;
            u.currentIndex %= e.data.length;
            var t = u.options[u.currentIndex] || {};
            u.myChart.setOption(t, e.notMerge), u.messageCenter.dispatch(s.EVENT.TIMELINE_CHANGED, null, {
                currentIndex: u.currentIndex,
                data: typeof e.data[u.currentIndex].name != "undefined" ? e.data[u.currentIndex].name : e.data[u.currentIndex]
            }, u.myChart)
        }, u._onFrame = function() {
            u._setCurrentOption(), u._syncHandleShape(), u.timelineOption.autoPlay && (u.playTicket = setTimeout(function() {
                u.currentIndex += 1;
                if (!u.timelineOption.loop && u.currentIndex >= u.timelineOption.data.length) {
                    u.currentIndex = u.timelineOption.data.length - 1, u.stop();
                    return
                }
                u._onFrame()
            }, u.timelineOption.playInterval))
        }, this.setTheme(!1), this.options = this.option.options, this.currentIndex = this.timelineOption.currentIndex % this.timelineOption.data.length, this.timelineOption.show && (this._buildShape(), this._syncHandleShape()), this._setCurrentOption();
        if (this.timelineOption.autoPlay) {
            var u = this;
            this.playTicket = setTimeout(function() {
                u.play()
            }, this.ecTheme.animationDuration)
        }
    }

    function l(e, t) {
        var n = 2,
            i = t.x + n,
            s = t.y + n + 2,
            o = t.width - n,
            u = t.height - n,
            a = t.symbol;
        if (a == "last") e.moveTo(i + o - 2, s + u / 3), e.lineTo(i + o - 2, s), e.lineTo(i + 2, s + u / 2), e.lineTo(i + o - 2, s + u), e.lineTo(i + o - 2, s + u / 3 * 2), e.moveTo(i, s), e.lineTo(i, s);
        else if (a == "next") e.moveTo(i + 2, s + u / 3), e.lineTo(i + 2, s), e.lineTo(i + o - 2, s + u / 2), e.lineTo(i + 2, s + u), e.lineTo(i + 2, s + u / 3 * 2), e.moveTo(i, s), e.lineTo(i, s);
        else if (a == "play")
            if (t.status == "stop") e.moveTo(i + 2, s), e.lineTo(i + o - 2, s + u / 2), e.lineTo(i + 2, s + u), e.lineTo(i + 2, s);
            else {
                var f = t.brushType == "both" ? 2 : 3;
                e.rect(i + 2, s, f, u), e.rect(i + o - f - 2, s, f, u)
            }
        else if (a.match("image")) {
            var l = "";
            l = a.replace(new RegExp("^image:\\/\\/"), ""), a = r.prototype.iconLibrary.image, a(e, {
                x: i,
                y: s,
                width: o,
                height: u,
                image: l
            })
        }
    }
    var t = e("./base"),
        n = e("zrender/shape/Rectangle"),
        r = e("../util/shape/Icon"),
        i = e("../util/shape/Chain"),
        s = e("../config"),
        o = e("zrender/tool/util"),
        u = e("zrender/tool/area"),
        a = e("zrender/tool/event");
    return f.prototype = {
        type: s.COMPONENT_TYPE_TIMELINE,
        _buildShape: function() {
            this._location = this._getLocation(), this._buildBackground(), this._buildControl(), this._chainPoint = this._getChainPoint();
            if (this.timelineOption.label.show) {
                var e = this._getInterval();
                for (var t = 0, n = this._chainPoint.length; t < n; t += e) this._chainPoint[t].showLabel = !0
            }
            this._buildChain(), this._buildHandle();
            for (var t = 0, r = this.shapeList.length; t < r; t++) this.zr.addShape(this.shapeList[t])
        },
        _getLocation: function() {
            var e = this.timelineOption,
                t = e.padding,
                n = this.zr.getWidth(),
                r = this.parsePercent(e.x, n),
                i = this.parsePercent(e.x2, n),
                s;
            typeof e.width == "undefined" ? (s = n - r - i, i = n - i) : (s = this.parsePercent(e.width, n), i = r + s);
            var o = this.zr.getHeight(),
                u = this.parsePercent(e.height, o),
                a, f;
            return typeof e.y != "undefined" ? (a = this.parsePercent(e.y, o), f = a + u) : (f = o - this.parsePercent(e.y2, o), a = f - u), {
                x: r + t[3],
                y: a + t[0],
                x2: i - t[1],
                y2: f - t[2],
                width: s - t[1] - t[3],
                height: u - t[0] - t[2]
            }
        },
        _getReformedLabel: function(e) {
            var t = this.timelineOption,
                n = typeof t.data[e].name != "undefined" ? t.data[e].name : t.data[e],
                r = t.data[e].formatter || t.label.formatter;
            return r && (typeof r == "function" ? n = r(n) : typeof r == "string" && (n = r.replace("{value}", n))), n
        },
        _getInterval: function() {
            var e = this._chainPoint,
                t = this.timelineOption,
                n = t.label.interval;
            if (n == "auto") {
                var r = t.label.textStyle.fontSize,
                    i = t.data,
                    s = t.data.length;
                if (s > 3) {
                    var o = !1,
                        a, f;
                    n = 0;
                    while (!o && n < s) {
                        n++, o = !0;
                        for (var l = n; l < s; l += n) {
                            a = e[l].x - e[l - n].x;
                            if (t.label.rotate !== 0) f = r;
                            else if (i[l].textStyle) f = u.getTextWidth(e[l].name, e[l].textFont);
                            else {
                                var c = e[l].name + "",
                                    h = (c.match(/\w/g) || "").length,
                                    p = c.length - h;
                                f = h * r * 2 / 3 + p * r
                            }
                            if (a < f) {
                                o = !1;
                                break
                            }
                        }
                    }
                } else n = 1
            } else n = n - 0 + 1;
            return n
        },
        _getChainPoint: function() {
            function p(e) {
                return typeof a[e].name != "undefined" ? a[e].name : a[e]
            }
            var e = this.timelineOption,
                t = e.symbol.toLowerCase(),
                n = e.symbolSize,
                r = e.label.rotate,
                i = e.label.textStyle,
                s = this.getFont(i),
                u, a = e.data,
                f = this._location.x,
                l = this._location.y + this._location.height / 4 * 3,
                c = this._location.x2 - this._location.x,
                h = a.length,
                d = [];
            if (h > 1) {
                var v = c / h;
                v = v > 50 ? 50 : v < 20 ? 5 : v, c -= v * 2;
                if (e.type == "number")
                    for (var m = 0; m < h; m++) d.push(f + v + c / (h - 1) * m);
                else {
                    d[0] = new Date(p(0).replace(/-/g, "/")), d[h - 1] = new Date(p(h - 1).replace(/-/g, "/")) - d[0];
                    for (var m = 1; m < h; m++) d[m] = f + v + c * (new Date(p(m).replace(/-/g, "/")) - d[0]) / d[h - 1];
                    d[0] = f + v
                }
            } else d.push(f + c / 2);
            var g = [],
                y, b, w, E, S;
            for (var m = 0; m < h; m++) f = d[m], y = a[m].symbol && a[m].symbol.toLowerCase() || t, y.match("empty") ? (y = y.replace("empty", ""), w = !0) : w = !1, y.match("star") && (b = y.replace("star", "") - 0 || 5, y = "star"), u = a[m].textStyle ? o.merge(a[m].textStyle || {}, i) : i, E = u.align || "center", r ? (E = r > 0 ? "right" : "left", S = [r * Math.PI / 180, f, l - 5]) : S = !1, g.push({
                x: f,
                n: b,
                isEmpty: w,
                symbol: y,
                symbolSize: a[m].symbolSize || n,
                color: a[m].color,
                borderColor: a[m].borderColor,
                borderWidth: a[m].borderWidth,
                name: this._getReformedLabel(m),
                textColor: u.color,
                textAlign: E,
                textBaseline: u.baseline || "middle",
                textX: f,
                textY: l - (r ? 5 : 0),
                textFont: a[m].textStyle ? this.getFont(u) : s,
                rotation: S,
                showLabel: !1
            });
            return g
        },
        _buildBackground: function() {
            var e = this.timelineOption,
                t = e.padding,
                r = this._location.width,
                i = this._location.height;
            (e.borderWidth !== 0 || e.backgroundColor.replace(/\s/g, "") != "rgba(0,0,0,0)") && this.shapeList.push(new n({
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this._location.x - t[3],
                    y: this._location.y - t[0],
                    width: r + t[1] + t[3],
                    height: i + t[0] + t[2],
                    brushType: e.borderWidth === 0 ? "fill" : "both",
                    color: e.backgroundColor,
                    strokeColor: e.borderColor,
                    lineWidth: e.borderWidth
                }
            }))
        },
        _buildControl: function() {
            var e = this,
                t = this.timelineOption,
                n = t.lineStyle,
                i = t.controlStyle;
            if (t.controlPosition == "none") return;
            var s = 15,
                u = 5,
                a;
            t.controlPosition == "left" ? (a = this._location.x, this._location.x += (s + u) * 3) : (a = this._location.x2 - ((s + u) * 3 - u), this._location.x2 -= (s + u) * 3);
            var f = this._location.y,
                l = {
                    zlevel: this._zlevelBase + 1,
                    style: {
                        iconType: "timelineControl",
                        symbol: "last",
                        x: a,
                        y: f,
                        width: s,
                        height: s,
                        brushType: "stroke",
                        color: i.normal.color,
                        strokeColor: i.normal.color,
                        lineWidth: n.width
                    },
                    highlightStyle: {
                        color: i.emphasis.color,
                        strokeColor: i.emphasis.color,
                        lineWidth: n.width + 1
                    },
                    clickable: !0
                };
            this._ctrLastShape = new r(l), this._ctrLastShape.onclick = function() {
                e.last()
            }, this.shapeList.push(this._ctrLastShape), a += s + u, this._ctrPlayShape = new r(o.clone(l)), this._ctrPlayShape.style.brushType = "fill", this._ctrPlayShape.style.symbol = "play", this._ctrPlayShape.style.status = this.timelineOption.autoPlay ? "playing" : "stop", this._ctrPlayShape.style.x = a, this._ctrPlayShape.onclick = function() {
                e._ctrPlayShape.style.status == "stop" ? e.play() : e.stop()
            }, this.shapeList.push(this._ctrPlayShape), a += s + u, this._ctrNextShape = new r(o.clone(l)), this._ctrNextShape.style.symbol = "next", this._ctrNextShape.style.x = a, this._ctrNextShape.onclick = function() {
                e.next()
            }, this.shapeList.push(this._ctrNextShape)
        },
        _buildChain: function() {
            var e = this.timelineOption,
                t = e.lineStyle;
            this._timelineShae = {
                zlevel: this._zlevelBase,
                style: {
                    x: this._location.x,
                    y: this.subPixelOptimize(this._location.y, t.width),
                    width: this._location.x2 - this._location.x,
                    height: this._location.height,
                    chainPoint: this._chainPoint,
                    brushType: "both",
                    strokeColor: t.color,
                    lineWidth: t.width,
                    lineType: t.type
                },
                hoverable: !1,
                clickable: !0,
                onclick: this._onclick
            }, this._timelineShae = new i(this._timelineShae), this.shapeList.push(this._timelineShae)
        },
        _buildHandle: function() {
            var e = this._chainPoint[this.currentIndex],
                t = e.symbolSize + 1;
            t = t < 5 ? 5 : t, this._handleShape = {
                zlevel: this._zlevelBase + 1,
                hoverable: !1,
                draggable: !0,
                style: {
                    iconType: "diamond",
                    n: e.n,
                    x: e.x - t,
                    y: this._location.y + this._location.height / 4 - t,
                    width: t * 2,
                    height: t * 2,
                    brushType: "both",
                    textPosition: "specific",
                    textX: e.x,
                    textY: this._location.y - this._location.height / 4,
                    textAlign: "center",
                    textBaseline: "middle"
                },
                highlightStyle: {},
                ondrift: this._ondrift,
                ondragend: this._ondragend
            }, this._handleShape = new r(this._handleShape), this.shapeList.push(this._handleShape)
        },
        _syncHandleShape: function() {
            if (!this.timelineOption.show) return;
            var e = this.timelineOption,
                t = e.checkpointStyle,
                n = this._chainPoint[this.currentIndex];
            this._handleShape.style.text = t.label.show ? n.name : "", this._handleShape.style.textFont = n.textFont, this._handleShape.style.n = n.n, t.symbol == "auto" ? this._handleShape.style.iconType = n.symbol != "none" ? n.symbol : "diamond" : (this._handleShape.style.iconType = t.symbol, t.symbol.match("star") && (this._handleShape.style.n = t.symbol.replace("star", "") - 0 || 5, this._handleShape.style.iconType = "star"));
            var r;
            t.symbolSize == "auto" ? (r = n.symbolSize + 2, r = r < 5 ? 5 : r) : r = t.symbolSize - 0, this._handleShape.style.color = t.color == "auto" ? n.color ? n.color : e.controlStyle.emphasis.color : t.color, this._handleShape.style.textColor = t.label.textStyle.color == "auto" ? this._handleShape.style.color : t.label.textStyle.color, this._handleShape.highlightStyle.strokeColor = this._handleShape.style.strokeColor = t.borderColor == "auto" ? n.borderColor ? n.borderColor : "#fff" : t.borderColor, this._handleShape.style.lineWidth = t.borderWidth == "auto" ? n.borderWidth ? n.borderWidth : 0 : t.borderWidth - 0, this._handleShape.highlightStyle.lineWidth = this._handleShape.style.lineWidth + 1, this.zr.animate(this._handleShape.id, "style").when(500, {
                x: n.x - r,
                textX: n.x,
                y: this._location.y + this._location.height / 4 - r,
                width: r * 2,
                height: r * 2
            }).start("ExponentialOut")
        },
        _findChainIndex: function(e) {
            var t = this._chainPoint,
                n = t.length;
            if (e <= t[0].x) return 0;
            if (e >= t[n - 1].x) return n - 1;
            for (var r = 0; r < n - 1; r++)
                if (e >= t[r].x && e <= t[r + 1].x) return Math.abs(e - t[r].x) < Math.abs(e - t[r + 1].x) ? r : r + 1
        },
        __onclick: function(e) {
            var t = a.getX(e.event),
                n = this._findChainIndex(t);
            if (n == this.currentIndex) return !0;
            this.currentIndex = n, this.timelineOption.autoPlay && this.stop(), clearTimeout(this.playTicket), this._onFrame()
        },
        __ondrift: function(e, t) {
            this.timelineOption.autoPlay && this.stop();
            var n = this._chainPoint,
                r = n.length,
                i;
            e.style.x + t <= n[0].x - n[0].symbolSize ? (e.style.x = n[0].x - n[0].symbolSize, i = 0) : e.style.x + t >= n[r - 1].x - n[r - 1].symbolSize ? (e.style.x = n[r - 1].x - n[r - 1].symbolSize, i = r - 1) : (e.style.x += t, i = this._findChainIndex(e.style.x));
            var s = n[i],
                o = s.symbolSize + 2;
            e.style.iconType = s.symbol, e.style.n = s.n, e.style.textX = e.style.x + o / 2, e.style.y = this._location.y + this._location.height / 4 - o, e.style.width = o * 2, e.style.height = o * 2, e.style.text = s.name;
            if (i == this.currentIndex) return !0;
            this.currentIndex = i;
            if (this.timelineOption.realtime) {
                clearTimeout(this.playTicket);
                var u = this;
                this.playTicket = setTimeout(function() {
                    u._setCurrentOption()
                }, 200)
            }
            return !0
        },
        __ondragend: function() {
            this.isDragend = !0
        },
        ondragend: function(e, t) {
            if (!this.isDragend || !e.target) return;
            !this.timelineOption.realtime && this._setCurrentOption(), t.dragOut = !0, t.dragIn = !0, t.needRefresh = !1, this.isDragend = !1, this._syncHandleShape();
            return
        },
        last: function() {
            return this.timelineOption.autoPlay && this.stop(), this.currentIndex -= 1, this.currentIndex < 0 && (this.currentIndex = this.timelineOption.data.length - 1), this._onFrame(), this.currentIndex
        },
        next: function() {
            return this.timelineOption.autoPlay && this.stop(), this.currentIndex += 1, this.currentIndex >= this.timelineOption.data.length && (this.currentIndex = 0), this._onFrame(), this.currentIndex
        },
        play: function(e, t) {
            return this._ctrPlayShape && this._ctrPlayShape.style.status != "playing" && (this._ctrPlayShape.style.status = "playing", this.zr.modShape(this._ctrPlayShape.id), this.zr.refresh()), this.timelineOption.autoPlay = typeof t != "undefined" ? t : !0, this.timelineOption.autoPlay || clearTimeout(this.playTicket), this.currentIndex = typeof e != "undefined" ? e : this.currentIndex + 1, this.currentIndex >= this.timelineOption.data.length && (this.currentIndex = 0), this._onFrame(), this.currentIndex
        },
        stop: function() {
            return this._ctrPlayShape && this._ctrPlayShape.style.status != "stop" && (this._ctrPlayShape.style.status = "stop", this.zr.modShape(this._ctrPlayShape.id), this.zr.refresh()), this.timelineOption.autoPlay = !1, clearTimeout(this.playTicket), this.currentIndex
        },
        resize: function() {
            this.timelineOption.show && (this.clear(), this._buildShape(), this._syncHandleShape())
        },
        setTheme: function(e) {
            this.timelineOption = this.reformOption(o.clone(this.option.timeline)), this.timelineOption.padding = this.reformCssArray(this.timelineOption.padding), this.timelineOption.label.textStyle = o.merge(this.timelineOption.label.textStyle || {}, this.ecTheme.textStyle), this.timelineOption.checkpointStyle.label.textStyle = o.merge(this.timelineOption.checkpointStyle.label.textStyle || {}, this.ecTheme.textStyle), this.timelineOption.show && e && (this.clear(), this._buildShape(), this._syncHandleShape())
        },
        dispose: function() {
            this.clear(), this.shapeList = null, clearTimeout(this.playTicket)
        }
    }, r.prototype.iconLibrary.timelineControl = l, o.inherits(f, t), e("../component").define("timeline", f), f
}), define("zrender/loadingEffect/Bar", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Rectangle"], function(e) {
    function s(e) {
        t.call(this, e)
    }
    var t = e("./Base"),
        n = e("../tool/util"),
        r = e("../tool/color"),
        i = e("../shape/Rectangle");
    return n.inherits(s, t), s.prototype._start = function(e, t) {
        var s = n.merge(this.options, {
                textStyle: {
                    color: "#888"
                },
                backgroundColor: "rgba(250, 250, 250, 0.8)",
                effectOption: {
                    x: 0,
                    y: this.canvasHeight / 2 - 30,
                    width: this.canvasWidth,
                    height: 5,
                    brushType: "fill",
                    timeInterval: 100
                }
            }),
            o = this.createTextShape(s.textStyle),
            u = this.createBackgroundShape(s.backgroundColor),
            a = s.effectOption,
            f = new i({
                highlightStyle: n.clone(a)
            });
        f.highlightStyle.color = a.color || r.getLinearGradient(a.x, a.y, a.x + a.width, a.y + a.height, [
            [0, "#ff6400"],
            [.5, "#ffe100"],
            [1, "#b1ff00"]
        ]);
        if (s.progress != null) {
            e(u), f.highlightStyle.width = _adjust(s.progress, [0, 1]) * s.effectOption.width, e(f), e(o), t();
            return
        }
        return f.highlightStyle.width = 0, setInterval(function() {
            e(u), f.highlightStyle.width < a.width ? f.highlightStyle.width += 8 : f.highlightStyle.width = 0, e(f), e(o), t()
        }, a.timeInterval)
    }, s
}), define("zrender/loadingEffect/Bubble", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Circle"], function(e) {
    function s(e) {
        t.call(this, e)
    }
    var t = e("./Base"),
        n = e("../tool/util"),
        r = e("../tool/color"),
        i = e("../shape/Circle");
    return n.inherits(s, t), s.prototype._start = function(e, t) {
        var s = n.merge(this.options, {
                textStyle: {
                    color: "#888"
                },
                backgroundColor: "rgba(250, 250, 250, 0.8)",
                effect: {
                    n: 50,
                    lineWidth: 2,
                    brushType: "stroke",
                    color: "random",
                    timeInterval: 100
                }
            }),
            o = this.createTextShape(s.textStyle),
            u = this.createBackgroundShape(s.backgroundColor),
            a = s.effect,
            f = a.n,
            l = a.brushType,
            c = a.lineWidth,
            h = [];
        for (var p = 0; p < f; p++) {
            var d = a.color == "random" ? r.alpha(r.random(), .3) : a.color;
            h[p] = new i({
                highlightStyle: {
                    x: Math.ceil(Math.random() * this.canvasWidth),
                    y: Math.ceil(Math.random() * this.canvasHeight),
                    r: Math.ceil(Math.random() * 40),
                    brushType: l,
                    color: d,
                    strokeColor: d,
                    lineWidth: c
                },
                animationY: Math.ceil(Math.random() * 20)
            })
        }
        return setInterval(function() {
            e(u);
            for (var n = 0; n < f; n++) {
                var r = h[n].highlightStyle;
                r.y - h[n].animationY + r.r <= 0 && (h[n].highlightStyle.y = this.canvasHeight + r.r, h[n].highlightStyle.x = Math.ceil(Math.random() * this.canvasWidth)), h[n].highlightStyle.y -= h[n].animationY, e(h[n])
            }
            e(o), t()
        }, a.timeInterval)
    }, s
}), define("zrender/loadingEffect/DynamicLine", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Line"], function(e) {
    function s(e) {
        t.call(this, e)
    }
    var t = e("./Base"),
        n = e("../tool/util"),
        r = e("../tool/color"),
        i = e("../shape/Line");
    return n.inherits(s, t), s.prototype._start = function(e, t) {
        var s = n.merge(this.options, {
                textStyle: {
                    color: "#fff"
                },
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                effectOption: {
                    n: 30,
                    lineWidth: 1,
                    color: "random",
                    timeInterval: 100
                }
            }),
            o = this.createTextShape(s.textStyle),
            u = this.createBackgroundShape(s.backgroundColor),
            a = s.effectOption,
            f = a.n,
            l = a.lineWidth,
            c = [];
        for (var h = 0; h < f; h++) {
            var p = -Math.ceil(Math.random() * 1e3),
                d = Math.ceil(Math.random() * 400),
                v = Math.ceil(Math.random() * this.canvasHeight),
                m = a.color == "random" ? r.random() : a.color;
            c[h] = new i({
                highlightStyle: {
                    xStart: p,
                    yStart: v,
                    xEnd: p + d,
                    yEnd: v,
                    strokeColor: m,
                    lineWidth: l
                },
                animationX: Math.ceil(Math.random() * 100),
                len: d
            })
        }
        return setInterval(function() {
            e(u);
            for (var n = 0; n < f; n++) {
                var r = c[n].highlightStyle;
                r.xStart >= this.canvasWidth && (c[n].len = Math.ceil(Math.random() * 400), r.xStart = -400, r.xEnd = -400 + c[n].len, r.yStart = Math.ceil(Math.random() * this.canvasHeight), r.yEnd = r.yStart), r.xStart += c[n].animationX, r.xEnd += c[n].animationX, e(c[n])
            }
            e(o), t()
        }, a.timeInterval)
    }, s
}), define("zrender/loadingEffect/Ring", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Ring", "../shape/Sector"], function(e) {
    function o(e) {
        t.call(this, e)
    }
    var t = e("./Base"),
        n = e("../tool/util"),
        r = e("../tool/color"),
        i = e("../shape/Ring"),
        s = e("../shape/Sector");
    return n.inherits(o, t), o.prototype._start = function(e, t) {
        var o = n.merge(this.options, {
                textStyle: {
                    color: "#07a"
                },
                backgroundColor: "rgba(250, 250, 250, 0.8)",
                effect: {
                    x: this.canvasWidth / 2,
                    y: this.canvasHeight / 2,
                    r0: 60,
                    r: 100,
                    color: "#bbdcff",
                    brushType: "fill",
                    textPosition: "inside",
                    textFont: "normal 30px verdana",
                    textColor: "rgba(30, 144, 255, 0.6)",
                    timeInterval: 100
                }
            }),
            u = o.effect,
            a = o.textStyle;
        a.x == null && (a.x = u.x), a.y == null && (a.y = u.y + (u.r0 + u.r) / 2 - 5);
        var f = this.createTextShape(o.textStyle),
            l = this.createBackgroundShape(o.backgroundColor),
            c = u.x,
            h = u.y,
            p = u.r0 + 6,
            d = u.r - 6,
            v = u.color,
            m = r.lift(v, .1),
            g = new i({
                highlightStyle: n.clone(u)
            }),
            y = [],
            b = r.getGradientColors(["#ff6400", "#ffe100", "#97ff00"], 25),
            w = 15,
            E = 240;
        for (var S = 0; S < 16; S++) y.push(new s({
            highlightStyle: {
                x: c,
                y: h,
                r0: p,
                r: d,
                startAngle: E - w,
                endAngle: E,
                brushType: "fill",
                color: m
            },
            _color: r.getLinearGradient(c + p * Math.cos(E, !0), h - p * Math.sin(E, !0), c + p * Math.cos(E - w, !0), h - p * Math.sin(E - w, !0), [
                [0, b[S * 2]],
                [1, b[S * 2 + 1]]
            ])
        })), E -= w;
        E = 360;
        for (var S = 0; S < 4; S++) y.push(new s({
            highlightStyle: {
                x: c,
                y: h,
                r0: p,
                r: d,
                startAngle: E - w,
                endAngle: E,
                brushType: "fill",
                color: m
            },
            _color: r.getLinearGradient(c + p * Math.cos(E, !0), h - p * Math.sin(E, !0), c + p * Math.cos(E - w, !0), h - p * Math.sin(E - w, !0), [
                [0, b[S * 2 + 32]],
                [1, b[S * 2 + 33]]
            ])
        })), E -= w;
        var x = 0;
        if (o.progress != null) {
            e(l), x = _adjust(o.progress, [0, 1]).toFixed(2) * 100 / 5, g.highlightStyle.text = x * 5 + "%", e(g);
            for (var S = 0; S < 20; S++) y[S].highlightStyle.color = S < x ? y[S]._color : m, e(y[S]);
            e(f), t();
            return
        }
        return setInterval(function() {
            e(l), x += x >= 20 ? -20 : 1, e(g);
            for (var n = 0; n < 20; n++) y[n].highlightStyle.color = n < x ? y[n]._color : m, e(y[n]);
            e(f), t()
        }, u.timeInterval)
    }, o
}), define("zrender/loadingEffect/Spin", ["require", "./Base", "../tool/util", "../tool/color", "../shape/Sector"], function(e) {
    function s(e) {
        t.call(this, e)
    }
    var t = e("./Base"),
        n = e("../tool/util"),
        r = e("../tool/color"),
        i = e("../shape/Sector");
    return n.inherits(s, t), s.prototype._start = function(e, t) {
        var s = n.merge(this.options.effect || {}, {
                x: this.canvasWidth / 2 - 80,
                y: this.canvasHeight / 2,
                r0: 9,
                r: 15,
                n: 18,
                color: "#fff",
                timeInterval: 100
            }),
            o = n.merge(this.options, {
                textStyle: {
                    color: "#fff",
                    x: s.x + s.r + 10,
                    y: s.y,
                    textAlign: "start"
                },
                backgroundColor: "rgba(0, 0, 0, 0.8)"
            }),
            u = this.createTextShape(o.textStyle),
            a = this.createBackgroundShape(o.backgroundColor),
            f = s.n,
            l = s.x,
            c = s.y,
            h = s.r0,
            p = s.r,
            d = s.color,
            v = [],
            m = Math.round(180 / f);
        for (var g = 0; g < f; g++) v[g] = new i({
            highlightStyle: {
                x: l,
                y: c,
                r0: h,
                r: p,
                startAngle: m * g * 2,
                endAngle: m * g * 2 + m,
                color: r.alpha(d, (g + 1) / f),
                brushType: "fill"
            }
        });
        var y = [0, l, c];
        return setInterval(function() {
            e(a), y[0] -= .3;
            for (var n = 0; n < f; n++) v[n].rotation = y, e(v[n]);
            e(u), t()
        }, s.timeInterval)
    }, s
}), define("zrender/loadingEffect/Whirling", ["require", "./Base", "../tool/util", "../shape/Ring", "../shape/Droplet", "../shape/Circle"], function(e) {
    function o(e) {
        t.call(this, e)
    }
    var t = e("./Base"),
        n = e("../tool/util"),
        r = e("../shape/Ring"),
        i = e("../shape/Droplet"),
        s = e("../shape/Circle");
    return n.inherits(o, t), o.prototype._start = function(e, t) {
        var o = n.merge(this.options.effect || {}, {
                x: this.canvasWidth / 2 - 80,
                y: this.canvasHeight / 2,
                r: 18,
                colorIn: "#fff",
                colorOut: "#555",
                colorWhirl: "#6cf",
                timeInterval: 50
            }),
            u = n.merge(this.options, {
                textStyle: {
                    color: "#888",
                    x: o.x + o.r + 10,
                    y: o.y,
                    textAlign: "start"
                },
                backgroundColor: "rgba(250, 250, 250, 0.8)"
            }),
            a = this.createTextShape(u.textStyle),
            f = this.createBackgroundShape(u.backgroundColor),
            l = new i({
                highlightStyle: {
                    a: Math.round(o.r / 2),
                    b: Math.round(o.r - o.r / 6),
                    brushType: "fill",
                    color: o.colorWhirl
                }
            }),
            c = new s({
                highlightStyle: {
                    r: Math.round(o.r / 6),
                    brushType: "fill",
                    color: o.colorIn
                }
            }),
            h = new r({
                highlightStyle: {
                    r0: Math.round(o.r - o.r / 3),
                    r: o.r,
                    brushType: "fill",
                    color: o.colorOut
                }
            }),
            p = [0, o.x, o.y];
        return l.highlightStyle.x = c.highlightStyle.x = h.highlightStyle.x = p[1], l.highlightStyle.y = c.highlightStyle.y = h.highlightStyle.y = p[2], setInterval(function() {
            e(f), e(h), p[0] -= .3, l.rotation = p, e(l), e(c), e(a), t()
        }, o.timeInterval)
    }, o
}), define("echarts/theme/default", [], function() {
    var e = {};
    return e
}), define("echarts/echarts", ["require", "./config", "zrender/tool/util", "zrender/tool/env", "zrender", "zrender/config", "zrender", "zrender/tool/event", "./chart/island", "./component/toolbox", "./component", "./component/title", "./component/tooltip", "./component/legend", "./util/ecData", "./chart", "./component", "zrender/tool/color", "./component/timeline", "zrender", "zrender/shape/Image", "zrender/loadingEffect/Bar", "zrender/loadingEffect/Bubble", "zrender/loadingEffect/DynamicLine", "zrender/loadingEffect/Ring", "zrender/loadingEffect/Spin", "zrender/loadingEffect/Whirling", "./theme/default"], function(e) {
    function a(e) {
        this._themeConfig = n.clone(t), this.dom = e, this._connected = !1, this._status = {
            dragIn: !1,
            dragOut: !1,
            needRefresh: !1
        }, this._curEventType = !1, this._chartList = [], this._messageCenter = {}, this._messageCenterOutSide = {}, this.resize = this.resize(), this._init()
    }

    function c(e, t, n, r, i) {
        var s = e._chartList,
            o = s.length;
        while (o--) {
            var u = s[o];
            typeof u[t] == "function" && u[t](n, r, i)
        }
    }
    var t = e("./config"),
        n = e("zrender/tool/util"),
        r = {},
        i = e("zrender/tool/env").canvasSupported,
        s = new Date - 0,
        o = {},
        u = "_echarts_instance_";
    r.version = "2.0.0", r.dependencies = {
        zrender: "2.0.0"
    }, r.init = function(t, n) {
        var i = e("zrender");
        (i.version || "1.0.3").replace(".", "") - 0 < r.dependencies.zrender.replace(".", "") - 0 && console.error("ZRender " + (i.version || "1.0.3-") + " is too old for ECharts " + r.version + ". Current version need ZRender " + r.dependencies.zrender + "+"), t = t instanceof Array ? t[0] : t;
        var f = t.getAttribute(u);
        return f || (f = s++, t.setAttribute(u, f)), o[f] && o[f].dispose(), o[f] = new a(t), o[f].id = f, o[f].setTheme(n), o[f]
    }, r.getInstanceById = function(e) {
        return o[e]
    };
    var f = e("zrender/config").EVENT,
        l = ["CLICK", "MOUSEOVER", "DRAGSTART", "DRAGEND", "DRAGENTER", "DRAGOVER", "DRAGLEAVE", "DROP"];
    return a.prototype = {
        _init: function() {
            var n = this,
                r = e("zrender").init(this.dom);
            this._zr = r;
            var i = e("zrender/tool/event");
            i.Dispatcher.call(this._messageCenter), i.Dispatcher.call(this._messageCenterOutSide), this._messageCenter._dispatch = this._messageCenter.dispatch, this._messageCenter.dispatch = function(e, t, r, i) {
                n._messageCenter._dispatch(e, t, r, i), e != "HOVER" ? setTimeout(function() {
                    n._messageCenterOutSide.dispatch(e, t, r, i)
                }, 50) : n._messageCenterOutSide.dispatch(e, t, r, i)
            }, this._onevent = function(e) {
                return n.__onevent(e)
            };
            for (var s in t.EVENT) s != "CLICK" && s != "HOVER" && s != "MAP_ROAM" && this._messageCenter.bind(t.EVENT[s], this._onevent);
            var o = {};
            this._onzrevent = function(e) {
                return n[o[e.type]](e)
            };
            for (var u = 0, a = l.length; u < a; u++) {
                var c = l[u],
                    h = f[c];
                o[h] = "_on" + c.toLowerCase(), r.on(h, this._onzrevent)
            }
            this.chart = {}, this.component = {};
            var p = e("./chart/island");
            this._island = new p(this._themeConfig, this._messageCenter, r, {}, this), this.chart.island = this._island;
            var d = e("./component/toolbox");
            this._toolbox = new d(this._themeConfig, this._messageCenter, r, {}, this), this.component.toolbox = this._toolbox;
            var v = e("./component");
            v.define("title", e("./component/title")), v.define("tooltip", e("./component/tooltip")), v.define("legend", e("./component/legend"))
        },
        __onevent: function(e) {
            e.__echartsId = e.__echartsId || this.id;
            var n = e.__echartsId == this.id;
            this._curEventType || (this._curEventType = e.type);
            switch (e.type) {
                case t.EVENT.LEGEND_SELECTED:
                    this._onlegendSelected(e);
                    break;
                case t.EVENT.DATA_ZOOM:
                    if (!n) {
                        var r = this.component.dataZoom;
                        r && (r.silence(!0), r.absoluteZoom(e.zoom), r.silence(!1))
                    }
                    this._ondataZoom(e);
                    break;
                case t.EVENT.DATA_RANGE:
                    n && this._ondataRange(e);
                    break;
                case t.EVENT.MAGIC_TYPE_CHANGED:
                    if (!n) {
                        var i = this.component.toolbox;
                        i && (i.silence(!0), i.setMagicType(e.magicType), i.silence(!1))
                    }
                    this._onmagicTypeChanged(e);
                    break;
                case t.EVENT.DATA_VIEW_CHANGED:
                    n && this._ondataViewChanged(e);
                    break;
                case t.EVENT.TOOLTIP_HOVER:
                    n && this._tooltipHover(e);
                    break;
                case t.EVENT.RESTORE:
                    this._onrestore();
                    break;
                case t.EVENT.REFRESH:
                    n && this._onrefresh(e);
                    break;
                case t.EVENT.TOOLTIP_IN_GRID:
                case t.EVENT.TOOLTIP_OUT_GRID:
                    if (!n) {
                        var s = this.component.grid;
                        s && this._zr.trigger("mousemove", {
                            connectTrigger: !0,
                            zrenderX: s.getX() + e.x * s.getWidth(),
                            zrenderY: s.getY() + e.y * s.getHeight()
                        })
                    } else if (this._connected) {
                        var s = this.component.grid;
                        s && (e.x = (e.event.zrenderX - s.getX()) / s.getWidth(), e.y = (e.event.zrenderY - s.getY()) / s.getHeight())
                    }
            }
            if (this._connected && n && this._curEventType == e.type) {
                for (var o in this._connected) this._connected[o].connectedEventHandler(e);
                this._curEventType = null
            }
            if (!n || !this._connected && n) this._curEventType = null
        },
        _onclick: function(e) {
            c(this, "onclick", e);
            if (e.target) {
                var n = this._eventPackage(e.target);
                n && n.seriesIndex != null && this._messageCenter.dispatch(t.EVENT.CLICK, e.event, n, this)
            }
        },
        _onmouseover: function(e) {
            if (e.target) {
                var n = this._eventPackage(e.target);
                n && n.seriesIndex != null && this._messageCenter.dispatch(t.EVENT.HOVER, e.event, n, this)
            }
        },
        _ondragstart: function(e) {
            this._status = {
                dragIn: !1,
                dragOut: !1,
                needRefresh: !1
            }, c(this, "ondragstart", e)
        },
        _ondragenter: function(e) {
            c(this, "ondragenter", e)
        },
        _ondragover: function(e) {
            c(this, "ondragover", e)
        },
        _ondragleave: function(e) {
            c(this, "ondragleave", e)
        },
        _ondrop: function(e) {
            c(this, "ondrop", e, this._status), this._island.ondrop(e, this._status)
        },
        _ondragend: function(e) {
            c(this, "ondragend", e, this._status), this._timeline && this._timeline.ondragend(e, this._status), this._island.ondragend(e, this._status);
            if (this._status.needRefresh) {
                this._syncBackupData(this._option);
                var n = this._messageCenter;
                n.dispatch(t.EVENT.DATA_CHANGED, e.event, this._eventPackage(e.target), this), n.dispatch(t.EVENT.REFRESH, null, null, this)
            }
        },
        _onlegendSelected: function(e) {
            this._status.needRefresh = !1, c(this, "onlegendSelected", e, this._status), this._status.needRefresh && this._messageCenter.dispatch(t.EVENT.REFRESH, null, null, this)
        },
        _ondataZoom: function(e) {
            this._status.needRefresh = !1, c(this, "ondataZoom", e, this._status), this._status.needRefresh && this._messageCenter.dispatch(t.EVENT.REFRESH, null, null, this)
        },
        _ondataRange: function(e) {
            this._clearEffect(), this._status.needRefresh = !1, c(this, "ondataRange", e, this._status), this._status.needRefresh && this._zr.refresh()
        },
        _onmagicTypeChanged: function() {
            this._clearEffect(), this._render(this._toolbox.getMagicOption())
        },
        _ondataViewChanged: function(e) {
            this._syncBackupData(e.option), this._messageCenter.dispatch(t.EVENT.DATA_CHANGED, null, e, this), this._messageCenter.dispatch(t.EVENT.REFRESH, null, null, this)
        },
        _tooltipHover: function(e) {
            var t = [];
            c(this, "ontooltipHover", e, t)
        },
        _onrestore: function() {
            this.restore()
        },
        _onrefresh: function(e) {
            this._refreshInside = !0, this.refresh(e), this._refreshInside = !1
        },
        _syncBackupData: function(e) {
            this.component.dataZoom && this.component.dataZoom.syncBackupData(e)
        },
        _eventPackage: function(t) {
            if (t) {
                var n = e("./util/ecData"),
                    r = n.get(t, "seriesIndex"),
                    i = n.get(t, "dataIndex");
                return i = r != -1 && this.component.dataZoom ? this.component.dataZoom.getRealDataIndex(r, i) : i, {
                    seriesIndex: r,
                    dataIndex: i,
                    data: n.get(t, "data"),
                    name: n.get(t, "name"),
                    value: n.get(t, "value"),
                    special: n.get(t, "special")
                }
            }
            return
        },
        _render: function(n) {
            this._mergeGlobalConifg(n);
            var r = n.backgroundColor;
            if (r)
                if (!i && r.indexOf("rgba") != -1) {
                    var s = r.split(",");
                    this.dom.style.filter = "alpha(opacity=" + s[3].substring(0, s[3].lastIndexOf(")")) * 100 + ")", s.length = 3, s[0] = s[0].replace("a", ""), this.dom.style.backgroundColor = s.join(",") + ")"
                } else this.dom.style.backgroundColor = r;
            this._zr.clearAnimation(), this._chartList = [];
            var o = e("./chart"),
                u = e("./component");
            if (n.xAxis || n.yAxis) n.grid = n.grid || {}, n.dataZoom = n.dataZoom || {};
            var a = ["title", "legend", "tooltip", "dataRange", "grid", "dataZoom", "xAxis", "yAxis", "polar"],
                f, l, c;
            for (var h = 0, p = a.length; h < p; h++) l = a[h], c = this.component[l], n[l] ? (c ? c.refresh && c.refresh(n) : (f = u.get(/^[xy]Axis$/.test(l) ? "axis" : l), c = new f(this._themeConfig, this._messageCenter, this._zr, n, this, l), this.component[l] = c), this._chartList.push(c)) : c && (c.dispose(), this.component[l] = null, delete this.component[l]);
            var d, v, m, g = {};
            for (var h = 0, p = n.series.length; h < p; h++) {
                v = n.series[h].type;
                if (!v) {
                    console.error("series[" + h + "] chart type has not been defined.");
                    continue
                }
                g[v] || (g[v] = !0, d = o.get(v), d ? (this.chart[v] ? (m = this.chart[v], m.refresh(n)) : m = new d(this._themeConfig, this._messageCenter, this._zr, n, this), this._chartList.push(m), this.chart[v] = m) : console.error(v + " has not been required."))
            }
            for (v in this.chart) v != t.CHART_TYPE_ISLAND && !g[v] && (this.chart[v].dispose(), this.chart[v] = null, delete this.chart[v]);
            this.component.grid && this.component.grid.refixAxisShape(this.component), this._island.refresh(n), this._toolbox.refresh(n), n.animation && !n.renderAsImage ? this._zr.refresh() : this._zr.render();
            var y = "IMG" + this.id,
                b = document.getElementById(y);
            n.renderAsImage && i ? (b ? b.src = this.getDataURL(n.renderAsImage) : (b = this.getImage(n.renderAsImage), b.id = y, b.style.position = "absolute", b.style.left = 0, b.style.top = 0, this.dom.firstChild.appendChild(b)), this.un(), this._zr.un(), this._disposeChartList(), this._zr.clear()) : b && b.parentNode.removeChild(b), b = null, this._option = n
        },
        restore: function() {
            this._clearEffect(), this._option = n.clone(this._optionRestore), this._disposeChartList(), this._island.clear(), this._toolbox.reset(this._option, !0), this._render(this._option)
        },
        refresh: function(e) {
            this._clearEffect(), e = e || {};
            var t = e.option;
            !this._refreshInside && t && (t = this.getOption(), n.merge(t, e.option, !0), n.merge(this._optionRestore, e.option, !0), this._toolbox.reset(t)), this._island.refresh(t), this._toolbox.refresh(t), this._zr.clearAnimation();
            for (var r = 0, i = this._chartList.length; r < i; r++) this._chartList[r].refresh && this._chartList[r].refresh(t);
            this.component.grid && this.component.grid.refixAxisShape(this.component), this._zr.refresh()
        },
        _disposeChartList: function() {
            this._clearEffect(), this._zr.clearAnimation();
            var e = this._chartList.length;
            while (e--) {
                var t = this._chartList[e];
                if (t) {
                    var n = t.type;
                    this.chart[n] && delete this.chart[n], this.component[n] && delete this.component[n], t.dispose && t.dispose()
                }
            }
            this._chartList = []
        },
        _mergeGlobalConifg: function(t) {
            var n = ["backgroundColor", "calculable", "calculableColor", "calculableHolderColor", "nameConnector", "valueConnector", "animation", "animationThreshold", "animationDuration", "animationEasing", "addDataAnimation", "symbolList", "DRAG_ENABLE_TIME"],
                r = n.length;
            while (r--) {
                var i = n[r];
                t[i] == null && (t[i] = this._themeConfig[i])
            }
            var s = t.color;
            if (!s || !s.length) s = this._themeConfig.color;
            this._zr.getColor = function(t) {
                var n = e("zrender/tool/color");
                return n.getColor(t, s)
            }
        },
        setOption: function(e, t) {
            return e.timeline ? this._setTimelineOption(e) : this._setOption(e, t)
        },
        _setOption: function(e, t) {
            !t && this._option ? this._option = n.merge(this.getOption(), n.clone(e), !0) : this._option = n.clone(e), this._optionRestore = n.clone(this._option);
            if (!this._option.series || this._option.series.length === 0) {
                this._zr.clear();
                return
            }
            return this.component.dataZoom && (this._option.dataZoom || this._option.toolbox && this._option.toolbox.feature && this._option.toolbox.feature.dataZoom && this._option.toolbox.feature.dataZoom.show) && this.component.dataZoom.syncOption(this._option), this._toolbox.reset(this._option), this._render(this._option), this
        },
        getOption: function() {
            function r(r) {
                var i = t._optionRestore[r];
                if (i)
                    if (i instanceof Array) {
                        var s = i.length;
                        while (s--) e[r][s].data = n.clone(i[s].data)
                    } else e[r].data = n.clone(i.data)
            }
            var e = n.clone(this._option),
                t = this;
            return r("xAxis"), r("yAxis"), r("series"), e
        },
        setSeries: function(e, t) {
            return t ? (this._option.series = e, this.setOption(this._option, t)) : this.setOption({
                series: e
            }), this
        },
        getSeries: function() {
            return this.getOption().series
        },
        _setTimelineOption: function(t) {
            this._timeline && this._timeline.dispose();
            var n = e("./component/timeline"),
                r = new n(this._themeConfig, this._messageCenter, this._zr, t, this);
            return this._timeline = r, this.component.timeline = this._timeline, this
        },
        addData: function(e, r, i, s, o) {
            var u = e instanceof Array ? e : [
                    [e, r, i, s, o]
                ],
                a = this.getOption(),
                f = this._optionRestore;
            for (var l = 0, c = u.length; l < c; l++) {
                e = u[l][0], r = u[l][1], i = u[l][2], s = u[l][3], o = u[l][4];
                var h = f.series[e],
                    p = i ? "unshift" : "push",
                    d = i ? "pop" : "shift";
                if (h) {
                    var v = h.data,
                        m = a.series[e].data;
                    v[p](r), m[p](r), s || (v[d](), r = m[d]());
                    if (o != null) {
                        var g, y;
                        if (h.type == t.CHART_TYPE_PIE && (g = f.legend) && (y = g.data)) {
                            var b = a.legend.data;
                            y[p](o), b[p](o);
                            if (!s) {
                                var w = n.indexOf(y, r.name);
                                w != -1 && y.splice(w, 1), w = n.indexOf(b, r.name), w != -1 && b.splice(w, 1)
                            }
                        } else if (f.xAxis != null && f.yAxis != null) {
                            var E, S, x = h.xAxisIndex || 0;
                            if (typeof f.xAxis[x].type == "undefined" || f.xAxis[x].type == "category") E = f.xAxis[x].data, S = a.xAxis[x].data, E[p](o), S[p](o), s || (E[d](), S[d]());
                            x = h.yAxisIndex || 0, f.yAxis[x].type == "category" && (E = f.yAxis[x].data, S = a.yAxis[x].data, E[p](o), S[p](o), s || (E[d](), S[d]()))
                        }
                    }
                    this._option.series[e].data = a.series[e].data
                }
            }
            this._zr.clearAnimation();
            var T = this._chartList;
            for (var l = 0, c = T.length; l < c; l++) a.addDataAnimation && T[l].addDataAnimation && T[l].addDataAnimation(u);
            this.component.dataZoom && this.component.dataZoom.syncOption(a), this._option = a;
            var N = this;
            return setTimeout(function() {
                if (!N._zr) return;
                N._zr.clearAnimation();
                for (var e = 0, n = T.length; e < n; e++) T[e].motionlessOnce = a.addDataAnimation && T[e].addDataAnimation;
                N._messageCenter.dispatch(t.EVENT.REFRESH, null, {
                    option: a
                }, N)
            }, a.addDataAnimation ? 500 : 0), this
        },
        addMarkPoint: function(e, t) {
            return this._addMark(e, t, "markPoint")
        },
        addMarkLine: function(e, t) {
            return this._addMark(e, t, "markLine")
        },
        _addMark: function(e, t, r) {
            var i = this._option.series,
                s;
            if (i && (s = i[e])) {
                var o = this._optionRestore.series,
                    u = o[e],
                    a = s[r],
                    f = u[r];
                a = s[r] = a || {
                    data: []
                }, f = u[r] = f || {
                    data: []
                };
                for (var l in t) l == "data" ? (a.data = a.data.concat(t.data), f.data = f.data.concat(t.data)) : typeof t[l] != "object" || typeof a[l] == "undefined" ? a[l] = f[l] = t[l] : (n.merge(a[l], t[l], !0), n.merge(f[l], t[l], !0));
                var c = this.chart[s.type];
                c && c.addMark(e, t, r)
            }
            return this
        },
        delMarkPoint: function(e, t) {
            return this._delMark(e, t, "markPoint")
        },
        delMarkLine: function(e, t) {
            return this._delMark(e, t, "markLine")
        },
        _delMark: function(e, t, n) {
            var r = this._option.series,
                i, s, o;
            if (!(r && (i = r[e]) && (s = i[n]) && (o = s.data))) return this;
            t = t.split(" > ");
            var u = -1;
            for (var a = 0, f = o.length; a < f; a++) {
                var l = o[a];
                if (l instanceof Array) {
                    if (l[0].name == t[0] && l[1].name == t[1]) {
                        u = a;
                        break
                    }
                } else if (l.name == t[0]) {
                    u = a;
                    break
                }
            }
            if (u > -1) {
                o.splice(u, 1), this._optionRestore.series[e][n].data.splice(u, 1);
                var c = this.chart[i.type];
                c && c.delMark(e, t.join(" > "), n)
            }
            return this
        },
        getDom: function() {
            return this.dom
        },
        getZrender: function() {
            return this._zr
        },
        getDataURL: function(e) {
            if (!i) return "";
            if (this._chartList.length === 0) {
                var t = "IMG" + this.id,
                    n = document.getElementById(t);
                if (n) return n.src
            }
            var r = this.component.tooltip;
            r && r.hideTip();
            switch (e) {
                case "jpeg":
                    break;
                default:
                    e = "png"
            }
            var s = this._option.backgroundColor;
            return s && s.replace(" ", "") == "rgba(0,0,0,0)" && (s = "#fff"), this._zr.toDataURL("image/" + e, s)
        },
        getImage: function(e) {
            var t = this._optionRestore.title,
                n = document.createElement("img");
            return n.src = this.getDataURL(e), n.title = t && t.text || "ECharts", n
        },
        getConnectedDataURL: function(t) {
            if (!this.isConnected()) return this.getDataURL(t);
            var n = this.dom,
                r = {
                    self: {
                        img: this.getDataURL(t),
                        left: n.offsetLeft,
                        top: n.offsetTop,
                        right: n.offsetLeft + n.offsetWidth,
                        bottom: n.offsetTop + n.offsetHeight
                    }
                },
                i = r.self.left,
                s = r.self.top,
                o = r.self.right,
                u = r.self.bottom;
            for (var a in this._connected) n = this._connected[a].getDom(), r[a] = {
                img: this._connected[a].getDataURL(t),
                left: n.offsetLeft,
                top: n.offsetTop,
                right: n.offsetLeft + n.offsetWidth,
                bottom: n.offsetTop + n.offsetHeight
            }, i = Math.min(i, r[a].left), s = Math.min(s, r[a].top), o = Math.max(o, r[a].right), u = Math.max(u, r[a].bottom);
            var f = document.createElement("div");
            f.style.position = "absolute", f.style.left = "-4000px", f.style.width = o - i + "px", f.style.height = u - s + "px", document.body.appendChild(f);
            var l = e("zrender").init(f),
                c = e("zrender/shape/Image");
            for (var a in r) l.addShape(new c({
                style: {
                    x: r[a].left - i,
                    y: r[a].top - s,
                    image: r[a].img
                }
            }));
            l.render();
            var h = this._option.backgroundColor;
            h && h.replace(/ /g, "") == "rgba(0,0,0,0)" && (h = "#fff");
            var p = l.toDataURL("image/png", h);
            return setTimeout(function() {
                l.dispose(), f.parentNode.removeChild(f), f = null
            }, 100), p
        },
        getConnectedImage: function(e) {
            var t = this._optionRestore.title,
                n = document.createElement("img");
            return n.src = this.getConnectedDataURL(e), n.title = t && t.text || "ECharts", n
        },
        on: function(e, t) {
            return this._messageCenterOutSide.bind(e, t), this
        },
        un: function(e, t) {
            return this._messageCenterOutSide.unbind(e, t), this
        },
        connect: function(e) {
            if (!e) return this;
            this._connected || (this._connected = {});
            if (e instanceof Array)
                for (var t = 0, n = e.length; t < n; t++) this._connected[e[t].id] = e[t];
            else this._connected[e.id] = e;
            return this
        },
        disConnect: function(e) {
            if (!e || !this._connected) return this;
            if (e instanceof Array)
                for (var t = 0, n = e.length; t < n; t++) delete this._connected[e[t].id];
            else delete this._connected[e.id];
            for (var r in this._connected) return r, this;
            return this._connected = !1, this
        },
        connectedEventHandler: function(e) {
            e.__echartsId != this.id && this._onevent(e)
        },
        isConnected: function() {
            return !!this._connected
        },
        showLoading: function(t) {
            var r = {
                bar: e("zrender/loadingEffect/Bar"),
                bubble: e("zrender/loadingEffect/Bubble"),
                dynamicLine: e("zrender/loadingEffect/DynamicLine"),
                ring: e("zrender/loadingEffect/Ring"),
                spin: e("zrender/loadingEffect/Spin"),
                whirling: e("zrender/loadingEffect/Whirling")
            };
            this._toolbox.hideDataView(), t = t || {};
            var i = t.textStyle || {};
            t.textStyle = i;
            var s = n.merge(n.clone(i), this._themeConfig.textStyle);
            i.textFont = s.fontStyle + " " + s.fontWeight + " " + s.fontSize + "px " + s.fontFamily, i.text = t.text || this._themeConfig.loadingText, t.x != null && (i.x = t.x), t.y != null && (i.y = t.y), t.effectOption = t.effectOption || {}, t.effectOption.textStyle = i;
            var o = t.effect;
            if (typeof o == "string" || o == null) o = r[t.effect || "spin"];
            return this._zr.showLoading(new o(t.effectOption)), this
        },
        hideLoading: function() {
            return this._zr.hideLoading(), this
        },
        setTheme: function(r) {
            if (r) {
                if (typeof r == "string") switch (r) {
                    default: r = e("./theme/default")
                }
                else r = r || {};
                for (var s in this._themeConfig) delete this._themeConfig[s];
                for (var s in t) this._themeConfig[s] = n.clone(t[s]);
                r.color && (this._themeConfig.color = []), r.symbolList && (this._themeConfig.symbolList = []), n.merge(this._themeConfig, n.clone(r), !0)
            }
            i || (this._themeConfig.textStyle.fontFamily = this._themeConfig.textStyle.fontFamily2), this._timeline && this._timeline.setTheme(!0), this._optionRestore && this.restore()
        },
        resize: function() {
            var e = this;
            return function() {
                e._clearEffect(), e._zr.resize();
                if (e._option.renderAsImage && i) return e._render(e._option), e;
                e._zr.clearAnimation(), e._island.resize(), e._toolbox.resize(), e._timeline && e._timeline.resize();
                for (var n = 0, r = e._chartList.length; n < r; n++) e._chartList[n].resize && e._chartList[n].resize();
                return e.component.grid && e.component.grid.refixAxisShape(e.component), e._zr.refresh(), e._messageCenter.dispatch(t.EVENT.RESIZE, null, null, e), e
            }
        },
        _clearEffect: function() {
            this._zr.modLayer(t.EFFECT_ZLEVEL, {
                motionBlur: !1
            }), this._zr.painter.clearLayer(t.EFFECT_ZLEVEL)
        },
        clear: function() {
            return this._disposeChartList(), this._zr.clear(), this._option = {}, this._optionRestore = {}, this
        },
        dispose: function() {
            var e = this.dom.getAttribute(u);
            e && delete o[e], this._island.dispose(), this._toolbox.dispose(), this._timeline && this._timeline.dispose(), this._messageCenter.unbind(), this.clear(), this._zr.dispose(), this._zr = null
        }
    }, r
}), define("echarts", ["echarts/echarts"], function(e) {
    return e
}), define("echarts/util/shape/GaugePointer", ["require", "zrender/shape/Base", "zrender/tool/util", "./normalIsCover"], function(e) {
    function r(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("zrender/tool/util");
    return r.prototype = {
        type: "gauge-pointer",
        buildPath: function(e, t) {
            var n = t.r,
                r = t.width,
                i = t.angle,
                s = t.x - Math.cos(i) * r * (r >= n / 3 ? 1 : 2),
                o = t.y + Math.sin(i) * r * (r >= n / 3 ? 1 : 2);
            i = t.angle - Math.PI / 2, e.moveTo(s, o), e.lineTo(t.x + Math.cos(i) * r, t.y - Math.sin(i) * r), e.lineTo(t.x + Math.cos(t.angle) * n, t.y - Math.sin(t.angle) * n), e.lineTo(t.x - Math.cos(i) * r, t.y + Math.sin(i) * r), e.lineTo(s, o);
            return
        },
        getRect: function(e) {
            if (e.__rect) return e.__rect;
            var t = e.width * 2,
                n = e.x,
                r = e.y,
                i = n + Math.cos(e.angle) * e.r,
                s = r - Math.sin(e.angle) * e.r;
            return e.__rect = {
                x: Math.min(n, i) - t,
                y: Math.min(r, s) - t,
                width: Math.abs(n - i) + t,
                height: Math.abs(r - s) + t
            }, e.__rect
        },
        isCover: e("./normalIsCover")
    }, n.inherits(r, t), r
}), define("echarts/chart/gauge", ["require", "../component/base", "./base", "../util/shape/GaugePointer", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Rectangle", "zrender/shape/Circle", "zrender/shape/Sector", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/math", "zrender/tool/color", "../chart"], function(e) {
    function d(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("../util/shape/GaugePointer"),
        i = e("zrender/shape/Text"),
        s = e("zrender/shape/Line"),
        o = e("zrender/shape/Rectangle"),
        u = e("zrender/shape/Circle"),
        a = e("zrender/shape/Sector"),
        f = e("../config"),
        l = e("../util/ecData"),
        c = e("zrender/tool/util"),
        h = e("zrender/tool/math"),
        p = e("zrender/tool/color");
    return d.prototype = {
        type: f.CHART_TYPE_GAUGE,
        _buildShape: function() {
            var e = this.series;
            this._paramsMap = {};
            for (var t = 0, n = e.length; t < n; t++) e[t].type == f.CHART_TYPE_GAUGE && (e[t] = this.reformOption(e[t]), this._buildSingleGauge(t), this.buildMark(t));
            this.addShapeList()
        },
        _buildSingleGauge: function(e) {
            var t = this.series[e];
            this._paramsMap[e] = {
                center: this.parseCenter(this.zr, t.center),
                radius: this.parseRadius(this.zr, t.radius),
                startAngle: t.startAngle.toFixed(2) - 0,
                endAngle: t.endAngle.toFixed(2) - 0
            }, this._paramsMap[e].totalAngle = this._paramsMap[e].startAngle - this._paramsMap[e].endAngle, this._colorMap(e), this._buildAxisLine(e), this._buildSplitLine(e), this._buildAxisTick(e), this._buildAxisLabel(e), this._buildPointer(e), this._buildTitle(e), this._buildDetail(e)
        },
        _buildAxisLine: function(e) {
            var t = this.series[e];
            if (!t.axisLine.show) return;
            var n = t.min,
                r = t.max - n,
                i = this._paramsMap[e],
                s = i.center,
                o = i.startAngle,
                u = i.totalAngle,
                a = i.colorArray,
                f = t.axisLine.lineStyle,
                c = this.parsePercent(f.width, i.radius[1]),
                h = i.radius[1],
                p = h - c,
                d, v = a.length,
                m = o,
                g;
            for (var y = 0, b = a.length; y < b; y++) g = o - u * (a[y][0] - n) / r, d = this._getSector(s, p, h, g, m, a[y][1], f), m = g, d._animationAdd = "r", l.set(d, "seriesIndex", e), l.set(d, "dataIndex", y), this.shapeList.push(d)
        },
        _buildSplitLine: function(e) {
            var t = this.series[e];
            if (!t.splitLine.show) return;
            var n = this._paramsMap[e],
                r = t.splitNumber,
                i = t.min,
                o = t.max - i,
                u = t.splitLine,
                a = this.parsePercent(u.length, n.radius[1]),
                f = u.lineStyle,
                l = f.color,
                c = n.center,
                h = n.startAngle * Math.PI / 180,
                p = n.totalAngle * Math.PI / 180,
                d = n.radius[1],
                v = d - a,
                m, g, y, b;
            for (var w = 0; w <= r; w++) g = h - p / r * w, y = Math.sin(g), b = Math.cos(g), this.shapeList.push(new s({
                zlevel: this._zlevelBase + 1,
                hoverable: !1,
                style: {
                    xStart: c[0] + b * d,
                    yStart: c[1] - y * d,
                    xEnd: c[0] + b * v,
                    yEnd: c[1] - y * v,
                    strokeColor: l == "auto" ? this._getColor(e, i + o / r * w) : l,
                    lineType: f.type,
                    lineWidth: f.width,
                    shadowColor: f.shadowColor,
                    shadowBlur: f.shadowBlur,
                    shadowOffsetX: f.shadowOffsetX,
                    shadowOffsetY: f.shadowOffsetY
                }
            }))
        },
        _buildAxisTick: function(e) {
            var t = this.series[e];
            if (!t.axisTick.show) return;
            var n = this._paramsMap[e],
                r = t.splitNumber,
                i = t.min,
                o = t.max - i,
                u = t.axisTick,
                a = u.splitNumber,
                f = this.parsePercent(u.length, n.radius[1]),
                l = u.lineStyle,
                c = l.color,
                h = n.center,
                p = n.startAngle * Math.PI / 180,
                d = n.totalAngle * Math.PI / 180,
                v = n.radius[1],
                m = v - f,
                g, y, b, w;
            for (var E = 0, S = r * a; E <= S; E++) {
                if (E % a == 0) continue;
                y = p - d / S * E, b = Math.sin(y), w = Math.cos(y), this.shapeList.push(new s({
                    zlevel: this._zlevelBase + 1,
                    hoverable: !1,
                    style: {
                        xStart: h[0] + w * v,
                        yStart: h[1] - b * v,
                        xEnd: h[0] + w * m,
                        yEnd: h[1] - b * m,
                        strokeColor: c == "auto" ? this._getColor(e, i + o / S * E) : c,
                        lineType: l.type,
                        lineWidth: l.width,
                        shadowColor: l.shadowColor,
                        shadowBlur: l.shadowBlur,
                        shadowOffsetX: l.shadowOffsetX,
                        shadowOffsetY: l.shadowOffsetY
                    }
                }))
            }
        },
        _buildAxisLabel: function(e) {
            var t = this.series[e];
            if (!t.axisLabel.show) return;
            var n = t.splitNumber,
                r = t.min,
                s = t.max - r,
                o = t.axisLabel.textStyle,
                u = this.getFont(o),
                a = o.color,
                f = this._paramsMap[e],
                l = f.center,
                c = f.startAngle,
                h = f.totalAngle,
                p = f.radius[1] - this.parsePercent(t.splitLine.length, f.radius[1]) - 10,
                d, v, m, g, y;
            for (var b = 0; b <= n; b++) y = r + s / n * b, v = c - h / n * b, m = Math.sin(v * Math.PI / 180), g = Math.cos(v * Math.PI / 180), v = (v + 360) % 360, this.shapeList.push(new i({
                zlevel: this._zlevelBase + 1,
                hoverable: !1,
                style: {
                    x: l[0] + g * p,
                    y: l[1] - m * p,
                    color: a == "auto" ? this._getColor(e, y) : a,
                    text: this._getLabelText(t.axisLabel.formatter, y),
                    textAlign: v >= 110 && v <= 250 ? "left" : v <= 70 || v >= 290 ? "right" : "center",
                    textBaseline: v >= 10 && v <= 170 ? "top" : v >= 190 && v <= 350 ? "bottom" : "middle",
                    textFont: u,
                    shadowColor: o.shadowColor,
                    shadowBlur: o.shadowBlur,
                    shadowOffsetX: o.shadowOffsetX,
                    shadowOffsetY: o.shadowOffsetY
                }
            }))
        },
        _buildPointer: function(e) {
            var t = this.series[e];
            if (!t.pointer.show) return;
            var n = t.max - t.min,
                i = t.pointer,
                s = this._paramsMap[e],
                o = this.parsePercent(i.length, s.radius[1]),
                a = this.parsePercent(i.width, s.radius[1]),
                f = s.center,
                c = this._getValue(e);
            c = c < t.max ? c : t.max;
            var h = (s.startAngle - s.totalAngle / n * (c - t.min)) * Math.PI / 180,
                p = i.color == "auto" ? this._getColor(e, c) : i.color,
                d = new r({
                    zlevel: this._zlevelBase + 1,
                    style: {
                        x: f[0],
                        y: f[1],
                        r: o,
                        startAngle: s.startAngle * Math.PI / 180,
                        angle: h,
                        color: p,
                        width: a,
                        shadowColor: i.shadowColor,
                        shadowBlur: i.shadowBlur,
                        shadowOffsetX: i.shadowOffsetX,
                        shadowOffsetY: i.shadowOffsetY
                    },
                    highlightStyle: {
                        brushType: "fill",
                        width: a > 2 ? 2 : a / 2,
                        color: "#fff"
                    }
                });
            l.pack(d, this.series[e], e, this.series[e].data[0], 0, this.series[e].data[0].name, c), this.shapeList.push(d), this.shapeList.push(new u({
                zlevel: this._zlevelBase + 2,
                hoverable: !1,
                style: {
                    x: f[0],
                    y: f[1],
                    r: i.width / 2.5,
                    color: "#fff"
                }
            }))
        },
        _buildTitle: function(e) {
            var t = this.series[e];
            if (!t.title.show) return;
            var n = t.data[0],
                r = typeof n.name != "undefined" ? n.name : "";
            if (r !== "") {
                var s = t.title,
                    o = s.offsetCenter,
                    u = s.textStyle,
                    a = u.color,
                    f = this._paramsMap[e],
                    l = f.center[0] + this.parsePercent(o[0], f.radius[1]),
                    c = f.center[1] + this.parsePercent(o[1], f.radius[1]);
                this.shapeList.push(new i({
                    zlevel: this._zlevelBase + (Math.abs(l - f.center[0]) + Math.abs(c - f.center[1])) < u.fontSize * 2 ? 2 : 1,
                    hoverable: !1,
                    style: {
                        x: l,
                        y: c,
                        color: a == "auto" ? this._getColor(e) : a,
                        text: r,
                        textAlign: "center",
                        textFont: this.getFont(u),
                        shadowColor: u.shadowColor,
                        shadowBlur: u.shadowBlur,
                        shadowOffsetX: u.shadowOffsetX,
                        shadowOffsetY: u.shadowOffsetY
                    }
                }))
            }
        },
        _buildDetail: function(e) {
            var t = this.series[e];
            if (!t.detail.show) return;
            var n = t.detail,
                r = n.offsetCenter,
                i = n.backgroundColor,
                s = n.textStyle,
                u = s.color,
                a = this._paramsMap[e],
                f = this._getValue(e),
                l = a.center[0] - n.width / 2 + this.parsePercent(r[0], a.radius[1]),
                c = a.center[1] + this.parsePercent(r[1], a.radius[1]);
            this.shapeList.push(new o({
                zlevel: this._zlevelBase + (Math.abs(l + n.width / 2 - a.center[0]) + Math.abs(c + n.height / 2 - a.center[1])) < s.fontSize ? 2 : 1,
                hoverable: !1,
                style: {
                    x: l,
                    y: c,
                    width: n.width,
                    height: n.height,
                    brushType: "both",
                    color: i == "auto" ? this._getColor(e, f) : i,
                    lineWidth: n.borderWidth,
                    strokeColor: n.borderColor,
                    shadowColor: n.shadowColor,
                    shadowBlur: n.shadowBlur,
                    shadowOffsetX: n.shadowOffsetX,
                    shadowOffsetY: n.shadowOffsetY,
                    text: this._getLabelText(n.formatter, f),
                    textFont: this.getFont(s),
                    textPosition: "inside",
                    textColor: u == "auto" ? this._getColor(e, f) : u
                }
            }))
        },
        _getValue: function(e) {
            var t = this.series[e].data[0];
            return typeof t.value != "undefined" ? t.value : t
        },
        _colorMap: function(e) {
            var t = this.series[e],
                n = t.min,
                r = t.max - n,
                i = t.axisLine.lineStyle.color;
            i instanceof Array || (i = [
                [1, i]
            ]);
            var s = [];
            for (var o = 0, u = i.length; o < u; o++) s.push([i[o][0] * r + n, i[o][1]]);
            this._paramsMap[e].colorArray = s
        },
        _getColor: function(e, t) {
            typeof t == "undefined" && (t = this._getValue(e));
            var n = this._paramsMap[e].colorArray;
            for (var r = 0, i = n.length; r < i; r++)
                if (n[r][0] >= t) return n[r][1];
            return n[n.length - 1][1]
        },
        _getSector: function(e, t, n, r, i, s, o) {
            return new a({
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: e[0],
                    y: e[1],
                    r0: t,
                    r: n,
                    startAngle: r,
                    endAngle: i,
                    brushType: "fill",
                    color: s,
                    shadowColor: o.shadowColor,
                    shadowBlur: o.shadowBlur,
                    shadowOffsetX: o.shadowOffsetX,
                    shadowOffsetY: o.shadowOffsetY
                }
            })
        },
        _getLabelText: function(e, t) {
            if (e) {
                if (typeof e == "function") return e(t);
                if (typeof e == "string") return e.replace("{value}", t)
            }
            return t
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        }
    }, c.inherits(d, n), c.inherits(d, t), e("../chart").define("gauge", d), d
}), define("echarts/chart/funnel", ["require", "../component/base", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Rectangle", "zrender/shape/Polygon", "zrender/shape/Circle", "zrender/shape/Sector", "../config", "../util/ecData", "../util/number", "zrender/tool/util", "zrender/tool/math", "zrender/tool/color", "zrender/tool/area", "../chart"], function(e) {
    function m(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/Text"),
        i = e("zrender/shape/Line"),
        s = e("zrender/shape/Rectangle"),
        o = e("zrender/shape/Polygon"),
        u = e("zrender/shape/Circle"),
        a = e("zrender/shape/Sector"),
        f = e("../config"),
        l = e("../util/ecData"),
        c = e("../util/number"),
        h = e("zrender/tool/util"),
        p = e("zrender/tool/math"),
        d = e("zrender/tool/color"),
        v = e("zrender/tool/area");
    return m.prototype = {
        type: f.CHART_TYPE_FUNNEL,
        _buildShape: function() {
            var e = this.series,
                t = this.component.legend;
            this._paramsMap = {}, this._selected = {}, this.selectedMap = {};
            var n;
            for (var r = 0, i = e.length; r < i; r++)
                if (e[r].type == f.CHART_TYPE_FUNNEL) {
                    e[r] = this.reformOption(e[r]), n = e[r].name || "", this.selectedMap[n] = t ? t.isSelected(n) : !0;
                    if (!this.selectedMap[n]) continue;
                    this._buildSingleFunnel(r), this.buildMark(r)
                }
            this.addShapeList()
        },
        _buildSingleFunnel: function(e) {
            var t = this.component.legend,
                n = this.series[e],
                r = this._mapData(e),
                i = this._getLocation(e);
            this._paramsMap[e] = {
                location: i,
                data: r
            };
            var s, o = 0,
                u = [];
            for (var a = 0, f = r.length; a < f; a++) s = r[a].name, t ? this.selectedMap[s] = t.isSelected(s) : this.selectedMap[s] = !0, this.selectedMap[s] && !isNaN(r[a].value) && (u.push(r[a]), o++);
            if (o === 0) return;
            var l = this._buildFunnelCase(e),
                h = n.gap,
                p = o > 1 ? (i.height - (o - 1) * h) / o : i.height,
                d, v = i.y,
                m = n.sort == "descending" ? this._getItemWidth(e, u[0].value) : c.parsePercent(n.minSize, i.width),
                g = n.sort == "descending" ? 1 : 0,
                y = i.centerX,
                b = [
                    [y - m / 2 - (m == 0 ? 0 : 10), v - (m == 0 ? 10 : 5)],
                    [y + m / 2 + (m == 0 ? 0 : 10), v - (m == 0 ? 10 : 5)]
                ];
            for (var a = 0, f = u.length; a < f; a++) s = u[a].name, this.selectedMap[s] && !isNaN(u[a].value) && (d = a <= f - 2 ? this._getItemWidth(e, u[a + g].value) : n.sort == "descending" ? c.parsePercent(n.minSize, i.width) : c.parsePercent(n.maxSize, i.width), this._buildItem(e, u[a]._index, t ? t.getColor(s) : this.zr.getColor(u[a]._index), y - m / 2, v, m, d, p), v += p + h, m = d, b.unshift([y - m / 2 - 10, v]), b.push([y + m / 2 + 10, v]));
            l && (m == 0 ? (b.pop(), b[0][0] += 10, b[0][1] += 10) : (b[b.length - 1][1] += 5, b[0][1] += 5), l.style.pointList = b)
        },
        _buildFunnelCase: function(e) {
            var t = this.series[e];
            if (this.deepQuery([t, this.option], "calculable")) {
                var n = this._paramsMap[e].location,
                    r = n.centerX,
                    i = c.parsePercent(t.minSize, n.width) / 2,
                    s = c.parsePercent(t.maxSize, n.width) / 2,
                    u = 10,
                    a = {
                        hoverable: !1,
                        style: {
                            pointListd: [
                                [n.x - u, n.y - u],
                                [n.x + n.width + u, n.y - u],
                                [n.x + n.width + u, n.y + n.height + u],
                                [n.x - u, n.y + n.height + u]
                            ],
                            brushType: "stroke",
                            lineWidth: 1,
                            strokeColor: t.calculableHolderColor || this.ecTheme.calculableHolderColor
                        }
                    };
                return l.pack(a, t, e, undefined, -1), this.setCalculable(a), a = new o(a), this.shapeList.push(a), a
            }
        },
        _getLocation: function(e) {
            var t = this.series[e],
                n = this.zr.getWidth(),
                r = this.zr.getHeight(),
                i = this.parsePercent(t.x, n),
                s = this.parsePercent(t.y, r),
                o;
            typeof t.width == "undefined" ? o = n - i - this.parsePercent(t.x2, n) : o = this.parsePercent(t.width, n);
            var u;
            return typeof t.height == "undefined" ? u = r - s - this.parsePercent(t.y2, r) : u = this.parsePercent(t.height, r), {
                x: i,
                y: s,
                width: o,
                height: u,
                centerX: i + o / 2
            }
        },
        _mapData: function(e) {
            function s(e, t) {
                return e.value == "-" ? 1 : t.value == "-" ? -1 : t.value - e.value
            }

            function o(e, t) {
                return -s(e, t)
            }
            var t = this.series[e],
                n = h.clone(t.data);
            for (var r = 0, i = n.length; r < i; r++) n[r]._index = r;
            return t.sort != "none" && n.sort(t.sort == "descending" ? s : o), n
        },
        _buildItem: function(e, t, n, r, i, s, o, u) {
            var a = this.series,
                f = a[e],
                c = f.data[t],
                h = this.getPolygon(e, t, n, r, i, s, o, u);
            l.pack(h, a[e], e, a[e].data[t], t, a[e].data[t].name), this.shapeList.push(h);
            var p = this.getLabel(e, t, n, r, i, s, o, u);
            l.pack(p, a[e], e, a[e].data[t], t, a[e].data[t].name), this.shapeList.push(p), this._needLabel(f, c, !1) || (p.invisible = !0);
            var d = this.getLabelLine(e, t, n, r, i, s, o, u);
            this.shapeList.push(d), this._needLabelLine(f, c, !1) || (d.invisible = !0);
            var v = [],
                m = [];
            this._needLabelLine(f, c, !0) && (v.push(d.id), m.push(d.id)), this._needLabel(f, c, !0) && (v.push(p.id), m.push(h.id)), h.hoverConnect = v, p.hoverConnect = m, h.onmouseover = p.onmouseover = this.hoverConnect
        },
        _getItemWidth: function(e, t) {
            var n = this.series[e],
                r = this._paramsMap[e].location,
                i = n.min,
                s = n.max,
                o = c.parsePercent(n.minSize, r.width),
                u = c.parsePercent(n.maxSize, r.width);
            return t * (u - o) / (s - i)
        },
        getPolygon: function(e, t, n, r, i, s, u, a) {
            var f = this.series[e],
                l = f.data[t],
                c = [l, f],
                h = this.deepMerge(c, "itemStyle.normal") || {},
                p = this.deepMerge(c, "itemStyle.emphasis") || {},
                v = this.getItemStyleColor(h.color, e, t, l) || n,
                m = this.getItemStyleColor(p.color, e, t, l) || (typeof v == "string" ? d.lift(v, -0.2) : v),
                g = {
                    zlevel: this._zlevelBase,
                    clickable: !0,
                    style: {
                        pointList: [
                            [r, i],
                            [r + s, i],
                            [r + s - (s - u) / 2, i + a],
                            [r + (s - u) / 2, i + a]
                        ],
                        brushType: "both",
                        color: v,
                        lineWidth: h.borderWidth,
                        strokeColor: h.borderColor
                    },
                    highlightStyle: {
                        color: m,
                        lineWidth: p.borderWidth,
                        strokeColor: p.borderColor
                    }
                };
            return this.deepQuery([l, f, this.option], "calculable") && (this.setCalculable(g), g.draggable = !0), new o(g)
        },
        getLabel: function(e, t, n, i, s, o, u, a) {
            var f = this.series[e],
                l = f.data[t],
                c = this._paramsMap[e].location,
                p = h.merge(h.clone(l.itemStyle) || {}, f.itemStyle),
                m = "normal",
                g = p[m].label,
                y = g.textStyle || {},
                b = p[m].labelLine.length,
                w = this.getLabelText(e, t, m),
                E = this.getFont(y),
                S, x, T = n;
            g.position = g.position || p.normal.label.position, g.position == "inner" || g.position == "inside" ? (S = "center", x = i + o / 2, Math.max(o, u) / 2 > v.getTextWidth(w, E) ? T = "#fff" : T = d.reverse(n)) : g.position == "left" ? (S = "right", x = b == "auto" ? c.x - 10 : c.centerX - Math.max(o, u) / 2 - b) : (S = "left", x = b == "auto" ? c.x + c.width + 10 : c.centerX + Math.max(o, u) / 2 + b);
            var N = {
                zlevel: this._zlevelBase + 1,
                style: {
                    x: x,
                    y: s + a / 2,
                    color: y.color || T,
                    text: w,
                    textAlign: y.align || S,
                    textBaseline: y.baseline || "middle",
                    textFont: E
                }
            };
            return m = "emphasis", g = p[m].label || g, y = g.textStyle || y, b = p[m].labelLine.length || b, g.position = g.position || p.normal.label.position, w = this.getLabelText(e, t, m), E = this.getFont(y), T = n, g.position == "inner" || g.position == "inside" ? (S = "center", x = i + o / 2, Math.max(o, u) / 2 > v.getTextWidth(w, E) ? T = "#fff" : T = d.reverse(n)) : g.position == "left" ? (S = "right", x = b == "auto" ? c.x - 10 : c.centerX - Math.max(o, u) / 2 - b) : (S = "left", x = b == "auto" ? c.x + c.width + 10 : c.centerX + Math.max(o, u) / 2 + b), N.highlightStyle = {
                x: x,
                color: y.color || T,
                text: w,
                textAlign: y.align || S,
                textFont: E,
                brushType: "fill"
            }, new r(N)
        },
        getLabelText: function(e, t, n) {
            var r = this.series,
                i = r[e],
                s = i.data[t],
                o = this.deepQuery([s, i], "itemStyle." + n + ".label.formatter");
            if (!o) return s.name;
            if (typeof o == "function") return o(i.name, s.name, s.value);
            if (typeof o == "string") return o = o.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}"), o = o.replace("{a0}", i.name).replace("{b0}", s.name).replace("{c0}", s.value), o
        },
        getLabelLine: function(e, t, n, r, s, o, u, a) {
            var f = this.series[e],
                l = f.data[t],
                c = this._paramsMap[e].location,
                p = h.merge(h.clone(l.itemStyle) || {}, f.itemStyle),
                d = "normal",
                v = p[d].labelLine,
                m = p[d].labelLine.length,
                g = v.lineStyle || {},
                y = p[d].label;
            y.position = y.position || p.normal.label.position;
            var b;
            y.position == "inner" || y.position == "inside" ? b = r + o / 2 : y.position == "left" ? b = m == "auto" ? c.x - 10 : c.centerX - Math.max(o, u) / 2 - m : b = m == "auto" ? c.x + c.width + 10 : c.centerX + Math.max(o, u) / 2 + m;
            var w = {
                zlevel: this._zlevelBase + 1,
                hoverable: !1,
                style: {
                    xStart: c.centerX,
                    yStart: s + a / 2,
                    xEnd: b,
                    yEnd: s + a / 2,
                    strokeColor: g.color || n,
                    lineType: g.type,
                    lineWidth: g.width
                }
            };
            return d = "emphasis", v = p[d].labelLine || v, m = p[d].labelLine.length || m, g = v.lineStyle || g, y = p[d].label || y, y.position = y.position, y.position == "inner" || y.position == "inside" ? b = r + o / 2 : y.position == "left" ? b = m == "auto" ? c.x - 10 : c.centerX - Math.max(o, u) / 2 - m : b = m == "auto" ? c.x + c.width + 10 : c.centerX + Math.max(o, u) / 2 + m, w.highlightStyle = {
                xEnd: b,
                strokeColor: g.color || n,
                lineType: g.type,
                lineWidth: g.width
            }, new i(w)
        },
        _needLabel: function(e, t, n) {
            return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".label.show")
        },
        _needLabelLine: function(e, t, n) {
            return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".labelLine.show")
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        }
    }, h.inherits(m, n), h.inherits(m, t), e("../chart").define("funnel", m), m
}), define("echarts/component/categoryAxis", ["require", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "zrender/tool/area", "../component"], function(e) {
    function a(e, n, r, i, s, o) {
        if (i.data.length < 1) {
            console.error("option.data.length < 1.");
            return
        }
        t.call(this, e, n, r, i, s), this.grid = this.component.grid;
        for (var u in o) this[u] = o[u];
        this.refresh(i)
    }
    var t = e("./base"),
        n = e("zrender/shape/Text"),
        r = e("zrender/shape/Line"),
        i = e("zrender/shape/Rectangle"),
        s = e("../config"),
        o = e("zrender/tool/util"),
        u = e("zrender/tool/area");
    return a.prototype = {
        type: s.COMPONENT_TYPE_AXIS_CATEGORY,
        _getReformedLabel: function(e) {
            var t = typeof this.option.data[e].value != "undefined" ? this.option.data[e].value : this.option.data[e],
                n = this.option.data[e].formatter || this.option.axisLabel.formatter;
            return n && (typeof n == "function" ? t = n(t) : typeof n == "string" && (t = n.replace("{value}", t))), t
        },
        _getInterval: function() {
            var e = this.option.axisLabel.interval;
            if (e == "auto") {
                var t = this.option.axisLabel.textStyle.fontSize,
                    n = this.option.data,
                    r = this.option.data.length;
                if (this.isHorizontal())
                    if (r > 3) {
                        var i = this.getGap(),
                            s = !1,
                            a, f, l = Math.floor(.5 / i);
                        l = l < 1 ? 1 : l, e = Math.floor(15 / i);
                        while (!s && e < r) {
                            e += l, s = !0, a = Math.floor(i * e);
                            for (var c = Math.floor((r - 1) / e) * e; c >= 0; c -= e) {
                                if (this.option.axisLabel.rotate !== 0) f = t;
                                else if (n[c].textStyle) f = u.getTextWidth(this._getReformedLabel(c), this.getFont(o.merge(n[c].textStyle, this.option.axisLabel.textStyle)));
                                else {
                                    var h = this._getReformedLabel(c) + "",
                                        p = (h.match(/\w/g) || "").length,
                                        d = h.length - p;
                                    f = p * t * 2 / 3 + d * t
                                }
                                if (a < f) {
                                    s = !1;
                                    break
                                }
                            }
                        }
                    } else e = 1;
                else if (r > 3) {
                    var i = this.getGap();
                    e = Math.floor(11 / i);
                    while (i * e - 6 < t && e < r) e++
                } else e = 1
            } else e = e - 0 + 1;
            return e
        },
        _buildShape: function() {
            this._interval = this._getInterval(), this.option.splitArea.show && this._buildSplitArea(), this.option.splitLine.show && this._buildSplitLine(), this.option.axisLine.show && this._buildAxisLine(), this.option.axisTick.show && this._buildAxisTick(), this.option.axisLabel.show && this._buildAxisLabel();
            for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
        },
        _buildAxisTick: function() {
            var e, t = this.option.data.length,
                n = this.option.axisTick,
                i = n.length,
                s = n.lineStyle.color,
                o = n.lineStyle.width,
                u = n.interval == "auto" ? this._interval : n.interval - 0 + 1,
                a = n.onGap,
                f = a ? this.getGap() / 2 : typeof a == "undefined" ? this.option.boundaryGap ? this.getGap() / 2 : 0 : 0,
                l = f > 0 ? -u : 0;
            if (this.isHorizontal()) {
                var c = this.option.position == "bottom" ? n.inside ? this.grid.getYend() - i - 1 : this.grid.getYend() + 1 : n.inside ? this.grid.getY() + 1 : this.grid.getY() - i - 1,
                    h;
                for (var p = l; p < t; p += u) h = this.subPixelOptimize(this.getCoordByIndex(p) + (p >= 0 ? f : 0), o), e = {
                    _axisShape: "axisTick",
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: h,
                        yStart: c,
                        xEnd: h,
                        yEnd: c + i,
                        strokeColor: s,
                        lineWidth: o
                    }
                }, this.shapeList.push(new r(e))
            } else {
                var d = this.option.position == "left" ? n.inside ? this.grid.getX() + 1 : this.grid.getX() - i - 1 : n.inside ? this.grid.getXend() - i - 1 : this.grid.getXend() + 1,
                    v;
                for (var p = l; p < t; p += u) v = this.subPixelOptimize(this.getCoordByIndex(p) - (p >= 0 ? f : 0), o), e = {
                    _axisShape: "axisTick",
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: d,
                        yStart: v,
                        xEnd: d + i,
                        yEnd: v,
                        strokeColor: s,
                        lineWidth: o
                    }
                }, this.shapeList.push(new r(e))
            }
        },
        _buildAxisLabel: function() {
            var e, t = this.option.data,
                r = this.option.data.length,
                i = this.option.axisLabel.rotate,
                s = this.option.axisLabel.margin,
                u = this.option.axisLabel.clickable,
                a = this.option.axisLabel.textStyle,
                f;
            if (this.isHorizontal()) {
                var l, c;
                this.option.position == "bottom" ? (l = this.grid.getYend() + s, c = "top") : (l = this.grid.getY() - s, c = "bottom");
                for (var h = 0; h < r; h += this._interval) {
                    if (this._getReformedLabel(h) === "") continue;
                    f = o.merge(t[h].textStyle || {}, a), e = {
                        zlevel: this._zlevelBase,
                        hoverable: !1,
                        style: {
                            x: this.getCoordByIndex(h),
                            y: l,
                            color: f.color,
                            text: this._getReformedLabel(h),
                            textFont: this.getFont(f),
                            textAlign: f.align || "center",
                            textBaseline: f.baseline || c
                        }
                    }, i && (e.style.textAlign = i > 0 ? this.option.position == "bottom" ? "right" : "left" : this.option.position == "bottom" ? "left" : "right", e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(u, e)))
                }
            } else {
                var p, d;
                this.option.position == "left" ? (p = this.grid.getX() - s, d = "right") : (p = this.grid.getXend() + s, d = "left");
                for (var h = 0; h < r; h += this._interval) {
                    if (this._getReformedLabel(h) === "") continue;
                    f = o.merge(t[h].textStyle || {}, a), e = {
                        zlevel: this._zlevelBase,
                        hoverable: !1,
                        style: {
                            x: p,
                            y: this.getCoordByIndex(h),
                            color: f.color,
                            text: this._getReformedLabel(h),
                            textFont: this.getFont(f),
                            textAlign: f.align || d,
                            textBaseline: f.baseline || h === 0 && this.option.name !== "" ? "bottom" : h == r - 1 && this.option.name !== "" ? "top" : "middle"
                        }
                    }, i && (e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(u, e)))
                }
            }
        },
        _buildSplitLine: function() {
            var e, t = this.option.data.length,
                n = this.option.splitLine,
                i = n.lineStyle.type,
                s = n.lineStyle.width,
                o = n.lineStyle.color;
            o = o instanceof Array ? o : [o];
            var u = o.length,
                a = n.onGap,
                f = a ? this.getGap() / 2 : typeof a == "undefined" ? this.option.boundaryGap ? this.getGap() / 2 : 0 : 0;
            t -= a || typeof a == "undefined" && this.option.boundaryGap ? 1 : 0;
            if (this.isHorizontal()) {
                var l = this.grid.getY(),
                    c = this.grid.getYend(),
                    h;
                for (var p = 0; p < t; p += this._interval) h = this.subPixelOptimize(this.getCoordByIndex(p) + f, s), e = {
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: h,
                        yStart: l,
                        xEnd: h,
                        yEnd: c,
                        strokeColor: o[p / this._interval % u],
                        lineType: i,
                        lineWidth: s
                    }
                }, this.shapeList.push(new r(e))
            } else {
                var d = this.grid.getX(),
                    v = this.grid.getXend(),
                    m;
                for (var p = 0; p < t; p += this._interval) m = this.subPixelOptimize(this.getCoordByIndex(p) - f, s), e = {
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: d,
                        yStart: m,
                        xEnd: v,
                        yEnd: m,
                        strokeColor: o[p / this._interval % u],
                        linetype: i,
                        lineWidth: s
                    }
                }, this.shapeList.push(new r(e))
            }
        },
        _buildSplitArea: function() {
            var e, t = this.option.splitArea,
                n = t.areaStyle.color;
            if (n instanceof Array) {
                var r = n.length,
                    s = this.option.data.length,
                    o = t.onGap,
                    u = o ? this.getGap() / 2 : typeof o == "undefined" ? this.option.boundaryGap ? this.getGap() / 2 : 0 : 0;
                if (this.isHorizontal()) {
                    var a = this.grid.getY(),
                        f = this.grid.getHeight(),
                        l = this.grid.getX(),
                        c;
                    for (var h = 0; h <= s; h += this._interval) c = h < s ? this.getCoordByIndex(h) + u : this.grid.getXend(), e = {
                        zlevel: this._zlevelBase,
                        hoverable: !1,
                        style: {
                            x: l,
                            y: a,
                            width: c - l,
                            height: f,
                            color: n[h / this._interval % r]
                        }
                    }, this.shapeList.push(new i(e)), l = c
                } else {
                    var p = this.grid.getX(),
                        d = this.grid.getWidth(),
                        v = this.grid.getYend(),
                        m;
                    for (var h = 0; h <= s; h += this._interval) m = h < s ? this.getCoordByIndex(h) - u : this.grid.getY(), e = {
                        zlevel: this._zlevelBase,
                        hoverable: !1,
                        style: {
                            x: p,
                            y: m,
                            width: d,
                            height: v - m,
                            color: n[h / this._interval % r]
                        }
                    }, this.shapeList.push(new i(e)), v = m
                }
            } else e = {
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this.grid.getX(),
                    y: this.grid.getY(),
                    width: this.grid.getWidth(),
                    height: this.grid.getHeight(),
                    color: n
                }
            }, this.shapeList.push(new i(e))
        },
        refresh: function(e) {
            e && (this.option = this.reformOption(e), this.option.axisLabel.textStyle = o.merge(this.option.axisLabel.textStyle || {}, this.ecTheme.textStyle)), this.clear(), this._buildShape()
        },
        getGap: function() {
            var e = this.option.data.length,
                t = this.isHorizontal() ? this.grid.getWidth() : this.grid.getHeight();
            return this.option.boundaryGap ? t / e : t / (e > 1 ? e - 1 : 1)
        },
        getCoord: function(e) {
            var t = this.option.data,
                n = t.length,
                r = this.getGap(),
                i = this.option.boundaryGap ? r / 2 : 0;
            for (var s = 0; s < n; s++) {
                if (t[s] == e || typeof t[s].value != "undefined" && t[s].value == e) return this.isHorizontal() ? i = this.grid.getX() + i : i = this.grid.getYend() - i, i;
                i += r
            }
        },
        getCoordByIndex: function(e) {
            if (e < 0) return this.isHorizontal() ? this.grid.getX() : this.grid.getYend();
            if (e > this.option.data.length - 1) return this.isHorizontal() ? this.grid.getXend() : this.grid.getY();
            var t = this.getGap(),
                n = this.option.boundaryGap ? t / 2 : 0;
            return n += e * t, this.isHorizontal() ? n = this.grid.getX() + n : n = this.grid.getYend() - n, n
        },
        getNameByIndex: function(e) {
            var t = this.option.data[e];
            return typeof t != "undefined" && typeof t.value != "undefined" ? t.value : t
        },
        getIndexByName: function(e) {
            var t = this.option.data,
                n = t.length;
            for (var r = 0; r < n; r++)
                if (t[r] == e || typeof t[r].value != "undefined" && t[r].value == e) return r;
            return -1
        },
        getValueFromCoord: function() {
            return ""
        },
        isMainAxis: function(e) {
            return e % this._interval === 0
        }
    }, o.inherits(a, t), e("../component").define("categoryAxis", a), a
}), define("echarts/component/valueAxis", ["require", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "../component"], function(e) {
    function u(e, n, r, i, s, o, u) {
        if (!u || u.length === 0) {
            console.err("option.series.length == 0.");
            return
        }
        t.call(this, e, n, r, i, s), this.series = u, this.grid = this.component.grid;
        for (var a in o) this[a] = o[a];
        this.refresh(i, u)
    }
    var t = e("./base"),
        n = e("zrender/shape/Text"),
        r = e("zrender/shape/Line"),
        i = e("zrender/shape/Rectangle"),
        s = e("../config"),
        o = e("zrender/tool/util");
    return u.prototype = {
        type: s.COMPONENT_TYPE_AXIS_VALUE,
        _buildShape: function() {
            this._hasData = !1, this._calculateValue();
            if (!this._hasData) return;
            this.option.splitArea.show && this._buildSplitArea(), this.option.splitLine.show && this._buildSplitLine(), this.option.axisLine.show && this._buildAxisLine(), this.option.axisTick.show && this._buildAxisTick(), this.option.axisLabel.show && this._buildAxisLabel();
            for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e])
        },
        _buildAxisTick: function() {
            var e, t = this._valueList,
                n = this._valueList.length,
                i = this.option.axisTick,
                s = i.length,
                o = i.lineStyle.color,
                u = i.lineStyle.width;
            if (this.isHorizontal()) {
                var a = this.option.position == "bottom" ? i.inside ? this.grid.getYend() - s - 1 : this.grid.getYend() + 1 : i.inside ? this.grid.getY() + 1 : this.grid.getY() - s - 1,
                    f;
                for (var l = 0; l < n; l++) f = this.subPixelOptimize(this.getCoord(t[l]), u), e = {
                    _axisShape: "axisTick",
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: f,
                        yStart: a,
                        xEnd: f,
                        yEnd: a + s,
                        strokeColor: o,
                        lineWidth: u
                    }
                }, this.shapeList.push(new r(e))
            } else {
                var c = this.option.position == "left" ? i.inside ? this.grid.getX() + 1 : this.grid.getX() - s - 1 : i.inside ? this.grid.getXend() - s - 1 : this.grid.getXend() + 1,
                    h;
                for (var l = 0; l < n; l++) h = this.subPixelOptimize(this.getCoord(t[l]), u), e = {
                    _axisShape: "axisTick",
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: c,
                        yStart: h,
                        xEnd: c + s,
                        yEnd: h,
                        strokeColor: o,
                        lineWidth: u
                    }
                }, this.shapeList.push(new r(e))
            }
        },
        _buildAxisLabel: function() {
            var e, t = this._valueList,
                r = this._valueList.length,
                i = this.option.axisLabel.rotate,
                s = this.option.axisLabel.margin,
                o = this.option.axisLabel.clickable,
                u = this.option.axisLabel.textStyle;
            if (this.isHorizontal()) {
                var a, f;
                this.option.position == "bottom" ? (a = this.grid.getYend() + s, f = "top") : (a = this.grid.getY() - s, f = "bottom");
                for (var l = 0; l < r; l++) e = {
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        x: this.getCoord(t[l]),
                        y: a,
                        color: typeof u.color == "function" ? u.color(t[l]) : u.color,
                        text: this._valueLabel[l],
                        textFont: this.getFont(u),
                        textAlign: u.align || "center",
                        textBaseline: u.baseline || f
                    }
                }, i && (e.style.textAlign = i > 0 ? this.option.position == "bottom" ? "right" : "left" : this.option.position == "bottom" ? "left" : "right", e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(o, e)))
            } else {
                var c, h;
                this.option.position == "left" ? (c = this.grid.getX() - s, h = "right") : (c = this.grid.getXend() + s, h = "left");
                for (var l = 0; l < r; l++) e = {
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        x: c,
                        y: this.getCoord(t[l]),
                        color: typeof u.color == "function" ? u.color(t[l]) : u.color,
                        text: this._valueLabel[l],
                        textFont: this.getFont(u),
                        textAlign: u.align || h,
                        textBaseline: u.baseline || l === 0 && this.option.name !== "" ? "bottom" : l == r - 1 && this.option.name !== "" ? "top" : "middle"
                    }
                }, i && (e.rotation = [i * Math.PI / 180, e.style.x, e.style.y]), this.shapeList.push(new n(this._axisLabelClickable(o, e)))
            }
        },
        _buildSplitLine: function() {
            var e, t = this._valueList,
                n = this._valueList.length,
                i = this.option.splitLine,
                s = i.lineStyle.type,
                o = i.lineStyle.width,
                u = i.lineStyle.color;
            u = u instanceof Array ? u : [u];
            var a = u.length;
            if (this.isHorizontal()) {
                var f = this.grid.getY(),
                    l = this.grid.getYend(),
                    c;
                for (var h = 0; h < n; h++) c = this.subPixelOptimize(this.getCoord(t[h]), o), e = {
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: c,
                        yStart: f,
                        xEnd: c,
                        yEnd: l,
                        strokeColor: u[h % a],
                        lineType: s,
                        lineWidth: o
                    }
                }, this.shapeList.push(new r(e))
            } else {
                var p = this.grid.getX(),
                    d = this.grid.getXend(),
                    v;
                for (var h = 0; h < n; h++) v = this.subPixelOptimize(this.getCoord(t[h]), o), e = {
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        xStart: p,
                        yStart: v,
                        xEnd: d,
                        yEnd: v,
                        strokeColor: u[h % a],
                        lineType: s,
                        lineWidth: o
                    }
                }, this.shapeList.push(new r(e))
            }
        },
        _buildSplitArea: function() {
            var e, t = this.option.splitArea.areaStyle.color;
            if (t instanceof Array) {
                var n = t.length,
                    r = this._valueList,
                    s = this._valueList.length;
                if (this.isHorizontal()) {
                    var o = this.grid.getY(),
                        u = this.grid.getHeight(),
                        a = this.grid.getX(),
                        f;
                    for (var l = 0; l <= s; l++) f = l < s ? this.getCoord(r[l]) : this.grid.getXend(), e = {
                        zlevel: this._zlevelBase,
                        hoverable: !1,
                        style: {
                            x: a,
                            y: o,
                            width: f - a,
                            height: u,
                            color: t[l % n]
                        }
                    }, this.shapeList.push(new i(e)), a = f
                } else {
                    var c = this.grid.getX(),
                        h = this.grid.getWidth(),
                        p = this.grid.getYend(),
                        d;
                    for (var l = 0; l <= s; l++) d = l < s ? this.getCoord(r[l]) : this.grid.getY(), e = {
                        zlevel: this._zlevelBase,
                        hoverable: !1,
                        style: {
                            x: c,
                            y: d,
                            width: h,
                            height: p - d,
                            color: t[l % n]
                        }
                    }, this.shapeList.push(new i(e)), p = d
                }
            } else e = {
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this.grid.getX(),
                    y: this.grid.getY(),
                    width: this.grid.getWidth(),
                    height: this.grid.getHeight(),
                    color: t
                }
            }, this.shapeList.push(new i(e))
        },
        _calculateValue: function() {
            if (isNaN(this.option.min - 0) || isNaN(this.option.max - 0)) {
                var e, t = {},
                    n, r, i, o = this.component.legend;
                for (var u = 0, a = this.series.length; u < a; u++) {
                    if (this.series[u].type != s.CHART_TYPE_LINE && this.series[u].type != s.CHART_TYPE_BAR && this.series[u].type != s.CHART_TYPE_SCATTER && this.series[u].type != s.CHART_TYPE_K) continue;
                    if (o && !o.isSelected(this.series[u].name)) continue;
                    r = this.series[u].xAxisIndex || 0, i = this.series[u].yAxisIndex || 0;
                    if (this.option.xAxisIndex != r && this.option.yAxisIndex != i) continue;
                    var f = this.series[u].name || "kener";
                    if (!this.series[u].stack) {
                        t[f] = t[f] || [], e = this.series[u].data;
                        for (var l = 0, c = e.length; l < c; l++) n = typeof e[l].value != "undefined" ? e[l].value : e[l], this.series[u].type == s.CHART_TYPE_SCATTER ? (this.option.xAxisIndex != -1 && t[f].push(n[0]), this.option.yAxisIndex != -1 && t[f].push(n[1])) : this.series[u].type == s.CHART_TYPE_K ? (t[f].push(n[0]), t[f].push(n[1]), t[f].push(n[2]), t[f].push(n[3])) : t[f].push(n)
                    } else {
                        var h = "__Magic_Key_Positive__" + this.series[u].stack,
                            p = "__Magic_Key_Negative__" + this.series[u].stack;
                        t[h] = t[h] || [], t[p] = t[p] || [], t[f] = t[f] || [], e = this.series[u].data;
                        for (var l = 0, c = e.length; l < c; l++) {
                            n = typeof e[l].value != "undefined" ? e[l].value : e[l];
                            if (n == "-") continue;
                            n -= 0, n >= 0 ? typeof t[h][l] != "undefined" ? t[h][l] += n : t[h][l] = n : typeof t[p][l] != "undefined" ? t[p][l] += n : t[p][l] = n, this.option.scale && t[f].push(n)
                        }
                    }
                }
                for (var u in t) {
                    e = t[u];
                    for (var l = 0, c = e.length; l < c; l++)
                        if (!isNaN(e[l])) {
                            this._hasData = !0, this._min = e[l], this._max = e[l];
                            break
                        }
                    if (this._hasData) break
                }
                for (var u in t) {
                    e = t[u];
                    for (var l = 0, c = e.length; l < c; l++) isNaN(e[l]) || (this._min = Math.min(this._min, e[l]), this._max = Math.max(this._max, e[l]))
                }
                this._min = isNaN(this.option.min - 0) ? this._min - Math.abs(this._min * this.option.boundaryGap[0]) : this.option.min - 0, this._max = isNaN(this.option.max - 0) ? this._max + Math.abs(this._max * this.option.boundaryGap[1]) : this.option.max - 0, this._min == this._max && (this._max === 0 ? this._max = this.option.power > 0 ? this.option.power : 1 : this._max > 0 ? this._min = this._max / this.option.splitNumber : this._max = this._max / this.option.splitNumber), this._reformValue(this.option.scale)
            } else this._hasData = !0, this._min = this.option.min - 0, this._max = this.option.max - 0, customerDefine = !0, this._customerValue()
        },
        _reformValue: function(e) {
            var t = this.option.splitNumber,
                n = this.option.precision,
                r, i;
            n === 0 ? i = this.option.power > 1 ? this.option.power : 1 : (i = Math.pow(10, n), this._min *= i, this._max *= i, i = this.option.power);
            var s;
            if (this._min >= 0 && this._max >= 0) {
                if (!e) {
                    while (this._max / i < t && i != 1) i /= 10;
                    this._min = 0
                } else {
                    while (this._min < i && i != 1) i /= 10;
                    n === 0 && (this._min = Math.floor(this._min / i) * i, this._max = Math.ceil(this._max / i) * i)
                }
                i = i > 1 ? i / 10 : 1, s = this._max - this._min, r = Math.ceil(s / t / i) * i, this._max = this._min + r * t
            } else if (this._min <= 0 && this._max <= 0) {
                i = -i;
                if (!e) {
                    while (this._min / i < t && i != -1) i /= 10;
                    this._max = 0
                } else {
                    while (this._max > i && i != -1) i /= 10;
                    n === 0 && (this._min = Math.ceil(this._min / i) * i, this._max = Math.floor(this._max / i) * i)
                }
                i = i < -1 ? i / 10 : -1, s = this._min - this._max, r = -Math.ceil(s / t / i) * i, this._min = -r * t + this._max
            } else {
                s = this._max - this._min;
                while (s / i < t && i != 1) i /= 10;
                var o = Math.round(this._max / s * t);
                o -= o == t ? 1 : 0, o += o === 0 ? 1 : 0, r = Math.ceil(Math.max(this._max / o, this._min / (o - t)) / i) * i, this._max = r * o, this._min = r * (o - t)
            }
            this._valueList = [];
            for (var u = 0; u <= t; u++) this._valueList.push(this._min + r * u);
            if (n !== 0) {
                i = Math.pow(10, n), this._min = (this._min / i).toFixed(n) - 0, this._max = (this._max / i).toFixed(n) - 0;
                for (var u = 0; u <= t; u++) this._valueList[u] = (this._valueList[u] / i).toFixed(n) - 0
            }
            this._reformLabelData()
        },
        _customerValue: function() {
            var e = this.option.splitNumber,
                t = this.option.precision,
                n = (this._max - this._min) / e;
            this._valueList = [];
            for (var r = 0; r <= e; r++) this._valueList.push((this._min + n * r).toFixed(t) - 0);
            this._reformLabelData()
        },
        _reformLabelData: function() {
            this._valueLabel = [];
            var e = this.option.axisLabel.formatter;
            if (e)
                for (var t = 0, n = this._valueList.length; t < n; t++) typeof e == "function" ? this._valueLabel.push(e(this._valueList[t])) : typeof e == "string" && this._valueLabel.push(e.replace("{value}", this._valueList[t]));
            else
                for (var t = 0, n = this._valueList.length; t < n; t++) this._valueLabel.push(this.numAddCommas(this._valueList[t]))
        },
        getExtremum: function() {
            return this._calculateValue(), {
                min: this._min,
                max: this._max
            }
        },
        refresh: function(e, t) {
            e && (this.option = this.reformOption(e), this.option.axisLabel.textStyle = o.merge(this.option.axisLabel.textStyle || {}, this.ecTheme.textStyle), this.series = t), this.zr && (this.clear(), this._buildShape())
        },
        getCoord: function(e) {
            e = e < this._min ? this._min : e, e = e > this._max ? this._max : e;
            var t;
            return this.isHorizontal() ? t = this.grid.getX() + (e - this._min) / (this._max - this._min) * this.grid.getWidth() : t = this.grid.getYend() - (e - this._min) / (this._max - this._min) * this.grid.getHeight(), t
        },
        getCoordSize: function(e) {
            return this.isHorizontal() ? Math.abs(e / (this._max - this._min) * this.grid.getWidth()) : Math.abs(e / (this._max - this._min) * this.grid.getHeight())
        },
        getValueFromCoord: function(e) {
            var t;
            return this.isHorizontal() ? (e = e < this.grid.getX() ? this.grid.getX() : e, e = e > this.grid.getXend() ? this.grid.getXend() : e, t = this._min + (e - this.grid.getX()) / this.grid.getWidth() * (this._max - this._min)) : (e = e < this.grid.getY() ? this.grid.getY() : e, e = e > this.grid.getYend() ? this.grid.getYend() : e, t = this._max - (e - this.grid.getY()) / this.grid.getHeight() * (this._max - this._min)), t.toFixed(2) - 0
        }
    }, o.inherits(u, t), e("../component").define("valueAxis", u), u
}), define("echarts/component/axis", ["require", "./base", "zrender/shape/Line", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "./categoryAxis", "./valueAxis", "../component"], function(e) {
    function u(e, n, r, i, s, o) {
        t.call(this, e, n, r, i, s), this.axisType = o, this._axisList = [], this.refresh(i)
    }
    var t = e("./base"),
        n = e("zrender/shape/Line"),
        r = e("../config"),
        i = e("../util/ecData"),
        s = e("zrender/tool/util"),
        o = e("zrender/tool/color");
    return u.prototype = {
        type: r.COMPONENT_TYPE_AXIS,
        axisBase: {
            _buildAxisLine: function() {
                var e = this.option.axisLine.lineStyle.width,
                    t = e / 2,
                    r = {
                        _axisShape: "axisLine",
                        zlevel: this._zlevelBase + 1,
                        hoverable: !1
                    };
                switch (this.option.position) {
                    case "left":
                        r.style = {
                            xStart: this.grid.getX() - t,
                            yStart: this.grid.getYend(),
                            xEnd: this.grid.getX() - t,
                            yEnd: this.grid.getY(),
                            lineCap: "round"
                        };
                        break;
                    case "right":
                        r.style = {
                            xStart: this.grid.getXend() + t,
                            yStart: this.grid.getYend(),
                            xEnd: this.grid.getXend() + t,
                            yEnd: this.grid.getY(),
                            lineCap: "round"
                        };
                        break;
                    case "bottom":
                        r.style = {
                            xStart: this.grid.getX(),
                            yStart: this.grid.getYend() + t,
                            xEnd: this.grid.getXend(),
                            yEnd: this.grid.getYend() + t,
                            lineCap: "round"
                        };
                        break;
                    case "top":
                        r.style = {
                            xStart: this.grid.getX(),
                            yStart: this.grid.getY() - t,
                            xEnd: this.grid.getXend(),
                            yEnd: this.grid.getY() - t,
                            lineCap: "round"
                        }
                }
                this.option.name !== "" && (r.style.text = this.option.name, r.style.textPosition = this.option.nameLocation, r.style.textFont = this.getFont(this.option.nameTextStyle), this.option.nameTextStyle.align && (r.style.textAlign = this.option.nameTextStyle.align), this.option.nameTextStyle.baseline && (r.style.textBaseline = this.option.nameTextStyle.baseline), this.option.nameTextStyle.color && (r.style.textColor = this.option.nameTextStyle.color)), r.style.strokeColor = this.option.axisLine.lineStyle.color, r.style.lineWidth = e, this.isHorizontal() ? r.style.yStart = r.style.yEnd = this.subPixelOptimize(r.style.yEnd, e) : r.style.xStart = r.style.xEnd = this.subPixelOptimize(r.style.xEnd, e), r.style.lineType = this.option.axisLine.lineStyle.type, r = new n(r), this.shapeList.push(r)
            },
            _axisLabelClickable: function(e, t) {
                return e ? (i.pack(t, undefined, -1, undefined, -1, t.style.text), t.hoverable = !0, t.clickable = !0, t.highlightStyle = {
                    color: o.lift(t.style.color, 1),
                    brushType: "fill"
                }, t) : t
            },
            refixAxisShape: function(e, t) {
                if (!this.option.axisLine.onZero) return;
                var n;
                if (this.isHorizontal() && typeof t != "undefined")
                    for (var r = 0, i = this.shapeList.length; r < i; r++) this.shapeList[r]._axisShape == "axisLine" ? (this.shapeList[r].style.yStart = this.shapeList[r].style.yEnd = this.subPixelOptimize(t, this.shapeList[r].stylelineWidth), this.zr.modShape(this.shapeList[r].id)) : this.shapeList[r]._axisShape == "axisTick" && (n = this.shapeList[r].style.yEnd - this.shapeList[r].style.yStart, this.shapeList[r].style.yStart = t - n, this.shapeList[r].style.yEnd = t, this.zr.modShape(this.shapeList[r].id));
                if (!this.isHorizontal() && typeof e != "undefined")
                    for (var r = 0, i = this.shapeList.length; r < i; r++) this.shapeList[r]._axisShape == "axisLine" ? (this.shapeList[r].style.xStart = this.shapeList[r].style.xEnd = this.subPixelOptimize(e, this.shapeList[r].stylelineWidth), this.zr.modShape(this.shapeList[r].id)) : this.shapeList[r]._axisShape == "axisTick" && (n = this.shapeList[r].style.xEnd - this.shapeList[r].style.xStart, this.shapeList[r].style.xStart = e, this.shapeList[r].style.xEnd = e + n, this.zr.modShape(this.shapeList[r].id))
            },
            getPosition: function() {
                return this.option.position
            },
            isHorizontal: function() {
                return this.option.position == "bottom" || this.option.position == "top"
            }
        },
        reformOption: function(e) {
            !e || e instanceof Array && e.length === 0 ? e = [{
                type: r.COMPONENT_TYPE_AXIS_VALUE
            }] : e instanceof Array || (e = [e]), e.length > 2 && (e = [e[0], e[1]]);
            if (this.axisType == "xAxis") {
                if (!e[0].position || e[0].position != "bottom" && e[0].position != "top") e[0].position = "bottom";
                e.length > 1 && (e[1].position = e[0].position == "bottom" ? "top" : "bottom");
                for (var t = 0, n = e.length; t < n; t++) e[t].type = e[t].type || "category", e[t].xAxisIndex = t, e[t].yAxisIndex = -1
            } else {
                if (!e[0].position || e[0].position != "left" && e[0].position != "right") e[0].position = "left";
                e.length > 1 && (e[1].position = e[0].position == "left" ? "right" : "left");
                for (var t = 0, n = e.length; t < n; t++) e[t].type = e[t].type || "value", e[t].xAxisIndex = -1, e[t].yAxisIndex = t
            }
            return e
        },
        refresh: function(t) {
            var n;
            t && (this.option = t, this.axisType == "xAxis" ? (this.option.xAxis = this.reformOption(t.xAxis), n = this.option.xAxis) : (this.option.yAxis = this.reformOption(t.yAxis), n = this.option.yAxis), this.series = t.series);
            var r = e("./categoryAxis"),
                i = e("./valueAxis"),
                s = Math.max(n && n.length || 0, this._axisList.length);
            for (var o = 0; o < s; o++) this._axisList[o] && t && (!n[o] || this._axisList[o].type != n[o].type) && (this._axisList[o].dispose && this._axisList[o].dispose(), this._axisList[o] = !1), this._axisList[o] ? this._axisList[o].refresh && this._axisList[o].refresh(n ? n[o] : !1, this.series) : n && n[o] && (this._axisList[o] = n[o].type == "category" ? new r(this.ecTheme, this.messageCenter, this.zr, n[o], this.myChart, this.axisBase) : new i(this.ecTheme, this.messageCenter, this.zr, n[o], this.myChart, this.axisBase, this.series))
        },
        getAxis: function(e) {
            return this._axisList[e]
        },
        clear: function() {
            for (var e = 0, t = this._axisList.length; e < t; e++) this._axisList[e].dispose && this._axisList[e].dispose();
            this._axisList = []
        }
    }, s.inherits(u, t), e("../component").define("axis", u), u
}), define("echarts/component/grid", ["require", "./base", "zrender/shape/Rectangle", "../config", "zrender/tool/util", "../component"], function(e) {
    function s(e, n, r, i, s) {
        t.call(this, e, n, r, i, s), this.refresh(i)
    }
    var t = e("./base"),
        n = e("zrender/shape/Rectangle"),
        r = e("../config"),
        i = e("zrender/tool/util");
    return s.prototype = {
        type: r.COMPONENT_TYPE_GRID,
        getX: function() {
            return this._x
        },
        getY: function() {
            return this._y
        },
        getWidth: function() {
            return this._width
        },
        getHeight: function() {
            return this._height
        },
        getXend: function() {
            return this._x + this._width
        },
        getYend: function() {
            return this._y + this._height
        },
        getArea: function() {
            return {
                x: this._x,
                y: this._y,
                width: this._width,
                height: this._height
            }
        },
        refixAxisShape: function(e) {
            var t, n, i = e.xAxis._axisList.concat(e.yAxis._axisList),
                s = i.length,
                o;
            while (s--) o = i[s], o.type == r.COMPONENT_TYPE_AXIS_VALUE && o._min < 0 && o._max >= 0 && (o.isHorizontal() ? t = o.getCoord(0) : n = o.getCoord(0));
            if (typeof t != "undefined" || typeof n != "undefined") {
                s = i.length;
                while (s--) i[s].refixAxisShape(t, n)
            }
        },
        refresh: function(e) {
            if (e || this._zrWidth != this.zr.getWidth() || this._zrHeight != this.zr.getHeight()) {
                this.clear(), this.option = e || this.option, this.option.grid = this.reformOption(this.option.grid);
                var t = this.option.grid;
                this._zrWidth = this.zr.getWidth(), this._zrHeight = this.zr.getHeight(), this._x = this.parsePercent(t.x, this._zrWidth), this._y = this.parsePercent(t.y, this._zrHeight);
                var r = this.parsePercent(t.x2, this._zrWidth),
                    i = this.parsePercent(t.y2, this._zrHeight);
                typeof t.width == "undefined" ? this._width = this._zrWidth - this._x - r : this._width = this.parsePercent(t.width, this._zrWidth), typeof t.height == "undefined" ? this._height = this._zrHeight - this._y - i : this._height = this.parsePercent(t.height, this._zrHeight), this._x = this.subPixelOptimize(this._x, t.borderWidth), this._y = this.subPixelOptimize(this._y, t.borderWidth), this.shapeList.push(new n({
                    zlevel: this._zlevelBase,
                    hoverable: !1,
                    style: {
                        x: this._x,
                        y: this._y,
                        width: this._width,
                        height: this._height,
                        brushType: t.borderWidth > 0 ? "both" : "fill",
                        color: t.backgroundColor,
                        strokeColor: t.borderColor,
                        lineWidth: t.borderWidth
                    }
                })), this.zr.addShape(this.shapeList[0])
            }
        }
    }, i.inherits(s, t), e("../component").define("grid", s), s
}), define("echarts/component/dataZoom", ["require", "./base", "zrender/shape/Rectangle", "zrender/shape/Polygon", "../util/shape/Icon", "../config", "zrender/tool/util", "../component", "../component"], function(e) {
    function u(e, n, r, i, s) {
        t.call(this, e, n, r, i, s);
        var o = this;
        o._ondrift = function(e, t) {
            return o.__ondrift(this, e, t)
        }, o._ondragend = function() {
            return o.__ondragend()
        }, this._fillerSize = 28, this._handleSize = 8, this._isSilence = !1, this._zoom = {}, this.option.dataZoom = this.reformOption(this.option.dataZoom), this.zoomOption = this.option.dataZoom, this._location = this._getLocation(), this._zoom = this._getZoom(), this._backupData(), this.option.dataZoom.show && this._buildShape(), this._syncData()
    }
    var t = e("./base"),
        n = e("zrender/shape/Rectangle"),
        r = e("zrender/shape/Polygon"),
        i = e("../util/shape/Icon"),
        s = e("../config"),
        o = e("zrender/tool/util");
    return u.prototype = {
        type: s.COMPONENT_TYPE_DATAZOOM,
        _buildShape: function() {
            this._buildBackground(), this._buildFiller(), this._buildHandle(), this._buildFrame();
            for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e]);
            this._syncFrameShape()
        },
        _getLocation: function() {
            var e, t, n, r, i = this.component.grid;
            return this.zoomOption.orient == "horizontal" ? (n = this.zoomOption.width || i.getWidth(), r = this.zoomOption.height || this._fillerSize, e = typeof this.zoomOption.x != "undefined" ? this.zoomOption.x : i.getX(), t = typeof this.zoomOption.y != "undefined" ? this.zoomOption.y : this.zr.getHeight() - r - 2) : (n = this.zoomOption.width || this._fillerSize, r = this.zoomOption.height || i.getHeight(), e = typeof this.zoomOption.x != "undefined" ? this.zoomOption.x : 2, t = typeof this.zoomOption.y != "undefined" ? this.zoomOption.y : i.getY()), {
                x: e,
                y: t,
                width: n,
                height: r
            }
        },
        _getZoom: function() {
            var e = this.option.series,
                t = this.option.xAxis;
            t && !(t instanceof Array) && (t = [t], this.option.xAxis = t);
            var n = this.option.yAxis;
            n && !(n instanceof Array) && (n = [n], this.option.yAxis = n);
            var r = [],
                i, o, u = this.zoomOption.xAxisIndex;
            if (t && typeof u == "undefined") {
                i = [];
                for (var a = 0, f = t.length; a < f; a++)(t[a].type == "category" || typeof t[a].type == "undefined") && i.push(a)
            } else u instanceof Array ? i = u : typeof u != "undefined" ? i = [u] : i = [];
            u = this.zoomOption.yAxisIndex;
            if (n && typeof u == "undefined") {
                o = [];
                for (var a = 0, f = n.length; a < f; a++) n[a].type == "category" && o.push(a)
            } else u instanceof Array ? o = u : typeof u != "undefined" ? o = [u] : o = [];
            for (var a = 0, f = e.length; a < f; a++) {
                if (e[a].type != s.CHART_TYPE_LINE && e[a].type != s.CHART_TYPE_BAR && e[a].type != s.CHART_TYPE_SCATTER && e[a].type != s.CHART_TYPE_K) continue;
                for (var l = 0, c = i.length; l < c; l++)
                    if (i[l] == (e[a].xAxisIndex || 0)) {
                        r.push(a);
                        break
                    }
                for (var l = 0, c = o.length; l < c; l++)
                    if (o[l] == (e[a].yAxisIndex || 0)) {
                        r.push(a);
                        break
                    }
                e[a].type == s.CHART_TYPE_SCATTER && typeof this.zoomOption.xAxisIndex == "undefined" && typeof this.zoomOption.yAxisIndex == "undefined" && r.push(a)
            }
            var h = typeof this._zoom.start != "undefined" ? this._zoom.start : typeof this.zoomOption.start != "undefined" ? this.zoomOption.start : 0,
                p = typeof this._zoom.end != "undefined" ? this._zoom.end : typeof this.zoomOption.end != "undefined" ? this.zoomOption.end : 100;
            h > p && (h += p, p = h - p, h -= p);
            var d = Math.round((p - h) / 100 * (this.zoomOption.orient == "horizontal" ? this._location.width : this._location.height));
            return {
                start: h,
                end: p,
                start2: 0,
                end2: 100,
                size: d,
                xAxisIndex: i,
                yAxisIndex: o,
                seriesIndex: r,
                scatterMap: this._zoom.scatterMap || {}
            }
        },
        _backupData: function() {
            this._originalData = {
                xAxis: {},
                yAxis: {},
                series: {}
            };
            var e = this.option.xAxis,
                t = this._zoom.xAxisIndex;
            for (var n = 0, r = t.length; n < r; n++) this._originalData.xAxis[t[n]] = e[t[n]].data;
            var i = this.option.yAxis,
                o = this._zoom.yAxisIndex;
            for (var n = 0, r = o.length; n < r; n++) this._originalData.yAxis[o[n]] = i[o[n]].data;
            var u = this.option.series,
                a = this._zoom.seriesIndex,
                f;
            for (var n = 0, r = a.length; n < r; n++) f = u[a[n]], this._originalData.series[a[n]] = f.data, f.type == s.CHART_TYPE_SCATTER && this._calculScatterMap(a[n])
        },
        _calculScatterMap: function(t) {
            this._zoom.scatterMap = this._zoom.scatterMap || {}, this._zoom.scatterMap[t] = this._zoom.scatterMap[t] || {};
            var n = e("../component"),
                r = n.get("axis"),
                i = o.clone(this.option.xAxis);
            i instanceof Array ? (i[0].type = "value", i[0].boundary = [0, 0], i[1] && (i[1].type = "value", i[1].boundary = [0, 0])) : (i.type = "value", i.boundary = [0, 0]);
            var s = new r(this.ecTheme, null, !1, {
                    xAxis: i,
                    series: this.option.series
                }, this, "xAxis"),
                u = this.option.series[t].xAxisIndex || 0;
            this._zoom.scatterMap[t].x = s.getAxis(u).getExtremum(), s.dispose(), i = o.clone(this.option.yAxis), i instanceof Array ? (i[0].type = "value", i[1] && (i[1].type = "value", i[1].boundary = [0, 0])) : (i.type = "value", i.boundary = [0, 0]), s = new r(this.ecTheme, null, !1, {
                yAxis: i,
                series: this.option.series
            }, this, "yAxis"), u = this.option.series[t].yAxisIndex || 0, this._zoom.scatterMap[t].y = s.getAxis(u).getExtremum(), s.dispose()
        },
        _buildBackground: function() {
            var e = this._location.width,
                t = this._location.height;
            this.shapeList.push(new n({
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this._location.x,
                    y: this._location.y,
                    width: e,
                    height: t,
                    color: this.zoomOption.backgroundColor
                }
            }));
            var i = 0,
                o = this._originalData.xAxis,
                u = this._zoom.xAxisIndex;
            for (var a = 0, f = u.length; a < f; a++) i = Math.max(i, o[u[a]].length);
            var l = this._originalData.yAxis,
                c = this._zoom.yAxisIndex;
            for (var a = 0, f = c.length; a < f; a++) i = Math.max(i, l[c[a]].length);
            var h = this._zoom.seriesIndex[0],
                p = this._originalData.series[h],
                d = Number.MIN_VALUE,
                v = Number.MAX_VALUE,
                m;
            for (var a = 0, f = p.length; a < f; a++) m = typeof p[a] != "undefined" ? typeof p[a].value != "undefined" ? p[a].value : p[a] : 0, this.option.series[h].type == s.CHART_TYPE_K && (m = m[1]), isNaN(m) && (m = 0), d = Math.max(d, m), v = Math.min(v, m);
            var g = d - v,
                y = [],
                b = e / (i - (i > 1 ? 1 : 0)),
                w = t / (i - (i > 1 ? 1 : 0)),
                E = 1;
            this.zoomOption.orient == "horizontal" && b < 1 ? E = Math.floor(i * 3 / e) : this.zoomOption.orient == "vertical" && w < 1 && (E = Math.floor(i * 3 / t));
            for (var a = 0, f = i; a < f; a += E) m = typeof p[a] != "undefined" ? typeof p[a].value != "undefined" ? p[a].value : p[a] : 0, this.option.series[h].type == s.CHART_TYPE_K && (m = m[1]), isNaN(m) && (m = 0), this.zoomOption.orient == "horizontal" ? y.push([this._location.x + b * a, this._location.y + t - 5 - Math.round((m - v) / g * (t - 10))]) : y.push([this._location.x + 5 + Math.round((m - v) / g * (e - 10)), this._location.y + w * a]);
            this.zoomOption.orient == "horizontal" ? (y.push([this._location.x + e, this._location.y + t]), y.push([this._location.x, this._location.y + t])) : (y.push([this._location.x, this._location.y + t]), y.push([this._location.x, this._location.y])), this.shapeList.push(new r({
                zlevel: this._zlevelBase,
                style: {
                    pointList: y,
                    color: this.zoomOption.dataBackgroundColor
                },
                hoverable: !1
            }))
        },
        _buildFiller: function() {
            this._fillerShae = {
                zlevel: this._zlevelBase,
                draggable: !0,
                ondrift: this._ondrift,
                ondragend: this._ondragend,
                _type: "filler"
            }, this.zoomOption.orient == "horizontal" ? this._fillerShae.style = {
                x: this._location.x + Math.round(this._zoom.start / 100 * this._location.width) + this._handleSize,
                y: this._location.y,
                width: this._zoom.size - this._handleSize * 2,
                height: this._location.height,
                color: this.zoomOption.fillerColor,
                text: ":::",
                textPosition: "inside"
            } : this._fillerShae.style = {
                x: this._location.x,
                y: this._location.y + Math.round(this._zoom.start / 100 * this._location.height) + this._handleSize,
                width: this._location.width,
                height: this._zoom.size - this._handleSize * 2,
                color: this.zoomOption.fillerColor,
                text: "::",
                textPosition: "inside"
            }, this._fillerShae.highlightStyle = {
                brushType: "fill",
                color: "rgba(0,0,0,0)"
            }, this._fillerShae = new n(this._fillerShae), this.shapeList.push(this._fillerShae)
        },
        _buildHandle: function() {
            this._startShape = {
                zlevel: this._zlevelBase,
                draggable: !0,
                style: {
                    iconType: "rectangle",
                    x: this._location.x,
                    y: this._location.y,
                    width: this._handleSize,
                    height: this._handleSize,
                    color: this.zoomOption.handleColor,
                    text: "=",
                    textPosition: "inside"
                },
                highlightStyle: {
                    brushType: "fill"
                },
                ondrift: this._ondrift,
                ondragend: this._ondragend
            }, this.zoomOption.orient == "horizontal" ? (this._startShape.style.height = this._location.height, this._endShape = o.clone(this._startShape), this._startShape.style.x = this._fillerShae.style.x - this._handleSize, this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width) : (this._startShape.style.width = this._location.width, this._endShape = o.clone(this._startShape), this._startShape.style.y = this._fillerShae.style.y - this._handleSize, this._endShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height), this._startShape = new i(this._startShape), this._endShape = new i(this._endShape), this.shapeList.push(this._startShape), this.shapeList.push(this._endShape)
        },
        _buildFrame: function() {
            var e = this.subPixelOptimize(this._location.x, 1),
                t = this.subPixelOptimize(this._location.y, 1);
            this._startFrameShape = {
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: e,
                    y: t,
                    width: this._location.width - (e > this._location.x ? 1 : 0),
                    height: this._location.height - (t > this._location.y ? 1 : 0),
                    lineWidth: 1,
                    brushType: "stroke",
                    strokeColor: this.zoomOption.handleColor
                }
            }, this._endFrameShape = o.clone(this._startFrameShape), this._startFrameShape = new n(this._startFrameShape), this._endFrameShape = new n(this._endFrameShape), this.shapeList.push(this._startFrameShape), this.shapeList.push(this._endFrameShape);
            return
        },
        _syncHandleShape: function() {
            this.zoomOption.orient == "horizontal" ? (this._startShape.style.x = this._fillerShae.style.x - this._handleSize, this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width, this._zoom.start = Math.floor((this._startShape.style.x - this._location.x) / this._location.width * 100), this._zoom.end = Math.ceil((this._endShape.style.x + this._handleSize - this._location.x) / this._location.width * 100)) : (this._startShape.style.y = this._fillerShae.style.y - this._handleSize, this._endShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height, this._zoom.start = Math.floor((this._startShape.style.y - this._location.y) / this._location.height * 100), this._zoom.end = Math.ceil((this._endShape.style.y + this._handleSize - this._location.y) / this._location.height * 100)), this.zr.modShape(this._startShape.id), this.zr.modShape(this._endShape.id), this._syncFrameShape(), this.zr.refresh()
        },
        _syncFillerShape: function() {
            var e, t;
            this.zoomOption.orient == "horizontal" ? (e = this._startShape.style.x, t = this._endShape.style.x, this._fillerShae.style.x = Math.min(e, t) + this._handleSize, this._fillerShae.style.width = Math.abs(e - t) - this._handleSize, this._zoom.start = Math.floor((Math.min(e, t) - this._location.x) / this._location.width * 100), this._zoom.end = Math.ceil((Math.max(e, t) + this._handleSize - this._location.x) / this._location.width * 100)) : (e = this._startShape.style.y, t = this._endShape.style.y, this._fillerShae.style.y = Math.min(e, t) + this._handleSize, this._fillerShae.style.height = Math.abs(e - t) - this._handleSize, this._zoom.start = Math.floor((Math.min(e, t) - this._location.y) / this._location.height * 100), this._zoom.end = Math.ceil((Math.max(e, t) + this._handleSize - this._location.y) / this._location.height * 100)), this.zr.modShape(this._fillerShae.id), this._syncFrameShape(), this.zr.refresh()
        },
        _syncFrameShape: function() {
            this.zoomOption.orient == "horizontal" ? (this._startFrameShape.style.width = this._fillerShae.style.x - this._location.x, this._endFrameShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width, this._endFrameShape.style.width = this._location.x + this._location.width - this._endFrameShape.style.x) : (this._startFrameShape.style.height = this._fillerShae.style.y - this._location.y, this._endFrameShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height, this._endFrameShape.style.height = this._location.y + this._location.height - this._endFrameShape.style.y), this.zr.modShape(this._startFrameShape.id), this.zr.modShape(this._endFrameShape.id)
        },
        _syncShape: function() {
            if (!this.zoomOption.show) return;
            this.zoomOption.orient == "horizontal" ? (this._startShape.style.x = this._location.x + this._zoom.start / 100 * this._location.width, this._endShape.style.x = this._location.x + this._zoom.end / 100 * this._location.width - this._handleSize, this._fillerShae.style.x = this._startShape.style.x + this._handleSize, this._fillerShae.style.width = this._endShape.style.x - this._startShape.style.x - this._handleSize) : (this._startShape.style.y = this._location.y + this._zoom.start / 100 * this._location.height, this._endShape.style.y = this._location.y + this._zoom.end / 100 * this._location.height - this._handleSize, this._fillerShae.style.y = this._startShape.style.y + this._handleSize, this._fillerShae.style.height = this._endShape.style.y - this._startShape.style.y - this._handleSize), this.zr.modShape(this._startShape.id), this.zr.modShape(this._endShape.id), this.zr.modShape(this._fillerShae.id), this._syncFrameShape(), this.zr.refresh()
        },
        _syncData: function(e) {
            var t, n, r, i, o;
            for (var u in this._originalData) {
                t = this._originalData[u];
                for (var a in t) {
                    o = t[a];
                    if (typeof o == "undefined") continue;
                    i = o.length, n = Math.floor(this._zoom.start / 100 * i), r = Math.ceil(this._zoom.end / 100 * i), this.option[u][a].type != s.CHART_TYPE_SCATTER ? this.option[u][a].data = o.slice(n, r) : this.option[u][a].data = this._synScatterData(a, o)
                }
            }!this._isSilence && (this.zoomOption.realtime || e) && this.messageCenter.dispatch(s.EVENT.DATA_ZOOM, null, {
                zoom: this._zoom
            }, this.myChart)
        },
        _synScatterData: function(e, t) {
            if (this._zoom.start === 0 && this._zoom.end == 100 && this._zoom.start2 === 0 && this._zoom.end2 == 100) return t;
            var n = [],
                r = this._zoom.scatterMap[e],
                i, s, o, u, a;
            this.zoomOption.orient == "horizontal" ? (i = r.x.max - r.x.min, s = this._zoom.start / 100 * i + r.x.min, o = this._zoom.end / 100 * i + r.x.min, i = r.y.max - r.y.min, u = this._zoom.start2 / 100 * i + r.y.min, a = this._zoom.end2 / 100 * i + r.y.min) : (i = r.x.max - r.x.min, s = this._zoom.start2 / 100 * i + r.x.min, o = this._zoom.end2 / 100 * i + r.x.min, i = r.y.max - r.y.min, u = this._zoom.start / 100 * i + r.y.min, a = this._zoom.end / 100 * i + r.y.min);
            var f;
            for (var l = 0, c = t.length; l < c; l++) f = t[l].value || t[l], f[0] >= s && f[0] <= o && f[1] >= u && f[1] <= a && n.push(t[l]);
            return n
        },
        __ondrift: function(e, t, n) {
            this.zoomOption.zoomLock && (e = this._fillerShae);
            var r = e._type == "filler" ? this._handleSize : 0;
            return this.zoomOption.orient == "horizontal" ? e.style.x + t - r <= this._location.x ? e.style.x = this._location.x + r : e.style.x + t + e.style.width + r >= this._location.x + this._location.width ? e.style.x = this._location.x + this._location.width - e.style.width - r : e.style.x += t : e.style.y + n - r <= this._location.y ? e.style.y = this._location.y + r : e.style.y + n + e.style.height + r >= this._location.y + this._location.height ? e.style.y = this._location.y + this._location.height - e.style.height - r : e.style.y += n, e._type == "filler" ? this._syncHandleShape() : this._syncFillerShape(), this.zoomOption.realtime && this._syncData(), !0
        },
        __ondragend: function() {
            this.isDragend = !0
        },
        ondragend: function(e, t) {
            if (!this.isDragend || !e.target) return;
            !this.zoomOption.realtime && this._syncData(), t.dragOut = !0, t.dragIn = !0, !this._isSilence && !this.zoomOption.realtime && this.messageCenter.dispatch(s.EVENT.DATA_ZOOM, null, {
                zoom: this._zoom
            }, this.myChart), t.needRefresh = !1, this.isDragend = !1;
            return
        },
        ondataZoom: function(e, t) {
            t.needRefresh = !0;
            return
        },
        absoluteZoom: function(e) {
            this._zoom.start = e.start, this._zoom.end = e.end, this._zoom.start2 = e.start2, this._zoom.end2 = e.end2, this._syncShape(), this._syncData(!0);
            return
        },
        rectZoom: function(e) {
            if (!e) return this._zoom.start = this._zoom.start2 = 0, this._zoom.end = this._zoom.end2 = 100, this._syncShape(), this._syncData(!0), this._zoom;
            var t = this.component.grid.getArea(),
                n = {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height
                };
            n.width < 0 && (n.x += n.width, n.width = -n.width), n.height < 0 && (n.y += n.height, n.height = -n.height);
            if (n.x > t.x + t.width || n.y > t.y + t.height) return !1;
            n.x < t.x && (n.x = t.x), n.x + n.width > t.x + t.width && (n.width = t.x + t.width - n.x), n.y + n.height > t.y + t.height && (n.height = t.y + t.height - n.y);
            var r, i = (n.x - t.x) / t.width,
                s = 1 - (n.x + n.width - t.x) / t.width,
                o = 1 - (n.y + n.height - t.y) / t.height,
                u = (n.y - t.y) / t.height;
            return this.zoomOption.orient == "horizontal" ? (r = this._zoom.end - this._zoom.start, this._zoom.start += r * i, this._zoom.end -= r * s, r = this._zoom.end2 - this._zoom.start2, this._zoom.start2 += r * o, this._zoom.end2 -= r * u) : (r = this._zoom.end - this._zoom.start, this._zoom.start += r * o, this._zoom.end -= r * u, r = this._zoom.end2 - this._zoom.start2, this._zoom.start2 += r * i, this._zoom.end2 -= r * s), this._syncShape(), this._syncData(!0), this._zoom
        },
        syncBackupData: function(e) {
            var t, n = this._originalData.series,
                r = e.series,
                i;
            for (var s = 0, o = r.length; s < o; s++) {
                i = r[s].data, n[s] ? t = Math.floor(this._zoom.start / 100 * n[s].length) : t = 0;
                for (var u = 0, a = i.length; u < a; u++) n[s] && (n[s][u + t] = i[u])
            }
        },
        syncOption: function(e) {
            this.silence(!0), this.option = e, this.clear(), this._location = this._getLocation(), this._zoom = this._getZoom(), this._backupData(), this.option.dataZoom && this.option.dataZoom.show && this._buildShape(), this._syncData(), this.silence(!1)
        },
        silence: function(e) {
            this._isSilence = e
        },
        getRealDataIndex: function(e, t) {
            if (!this._originalData || this._zoom.start === 0 && this._zoom.end == 100) return t;
            var n = this._originalData.series;
            return n[e] ? Math.floor(this._zoom.start / 100 * n[e].length) + t : -1
        },
        resize: function() {
            this.clear(), this._location = this._getLocation(), this._zoom = this._getZoom(), this.option.dataZoom.show && this._buildShape()
        }
    }, o.inherits(u, t), e("../component").define("dataZoom", u), u
}), define("echarts/util/shape/HandlePolygon", ["require", "zrender/shape/Base", "zrender/shape/Polygon", "zrender/tool/util"], function(e) {
    function i(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("zrender/shape/Polygon"),
        r = e("zrender/tool/util");
    return i.prototype = {
        type: "handle-polygon",
        buildPath: function(e, t) {
            n.prototype.buildPath(e, t)
        },
        isCover: function(e, t) {
            var n = this.getTansform(e, t);
            e = n[0], t = n[1];
            var r = this.style.rect;
            return e >= r.x && e <= r.x + r.width && t >= r.y && t <= r.y + r.height ? !0 : !1
        }
    }, r.inherits(i, t), i
}), define("echarts/component/dataRange", ["require", "./base", "zrender/shape/Text", "zrender/shape/Rectangle", "../util/shape/HandlePolygon", "../config", "zrender/tool/util", "zrender/tool/area", "zrender/tool/color", "zrender/tool/color", "../component"], function(e) {
    function f(e, n, r, i, s) {
        if (typeof this.query(i, "dataRange.min") == "undefined" || typeof this.query(i, "dataRange.max") == "undefined") {
            console.error("option.dataRange.min or option.dataRange.max has not been defined.");
            return
        }
        t.call(this, e, n, r, i, s);
        var o = this;
        o._ondrift = function(e, t) {
            return o.__ondrift(this, e, t)
        }, o._ondragend = function() {
            return o.__ondragend()
        }, o._dataRangeSelected = function(e) {
            return o.__dataRangeSelected(e)
        }, this._selectedMap = {}, this._range = {}, this.refresh(i)
    }
    var t = e("./base"),
        n = e("zrender/shape/Text"),
        r = e("zrender/shape/Rectangle"),
        i = e("../util/shape/HandlePolygon"),
        s = e("../config"),
        o = e("zrender/tool/util"),
        u = e("zrender/tool/area"),
        a = e("zrender/tool/color");
    return f.prototype = {
        type: s.COMPONENT_TYPE_DATARANGE,
        _textGap: 10,
        _buildShape: function() {
            this._itemGroupLocation = this._getItemGroupLocation(), this._buildBackground(), this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? this._buildGradient() : this._buildItem();
            for (var e = 0, t = this.shapeList.length; e < t; e++) this.zr.addShape(this.shapeList[e]);
            this._syncShapeFromRange()
        },
        _buildItem: function() {
            var e = this._valueTextList,
                t = e.length,
                i, s, o, a = this.getFont(this.dataRangeOption.textStyle),
                f = this._itemGroupLocation.x,
                l = this._itemGroupLocation.y,
                c = this.dataRangeOption.itemWidth,
                h = this.dataRangeOption.itemHeight,
                p = this.dataRangeOption.itemGap,
                d = u.getTextHeight("国", a),
                v;
            this.dataRangeOption.orient == "vertical" && this.dataRangeOption.x == "right" && (f = this._itemGroupLocation.x + this._itemGroupLocation.width - c);
            var m = !0;
            this.dataRangeOption.text && (m = !1, this.dataRangeOption.text[0] && (o = this._getTextShape(f, l, this.dataRangeOption.text[0]), this.dataRangeOption.orient == "horizontal" ? f += u.getTextWidth(this.dataRangeOption.text[0], a) + this._textGap : (l += d + this._textGap, o.style.y += d / 2 + this._textGap, o.style.textBaseline = "bottom"), this.shapeList.push(new n(o))));
            for (var g = 0; g < t; g++) i = e[g], v = this.getColor((t - g) * this._gap + this.dataRangeOption.min), s = this._getItemShape(f, l, c, h, this._selectedMap[g] ? v : "#ccc"), s._idx = g, s.onclick = this._dataRangeSelected, this.shapeList.push(new r(s)), m && (o = {
                zlevel: this._zlevelBase,
                style: {
                    x: f + c + 5,
                    y: l,
                    color: this._selectedMap[g] ? this.dataRangeOption.textStyle.color : "#ccc",
                    text: e[g],
                    textFont: a,
                    textBaseline: "top"
                },
                highlightStyle: {
                    brushType: "fill"
                },
                clickable: !0
            }, this.dataRangeOption.orient == "vertical" && this.dataRangeOption.x == "right" && (o.style.x -= c + 10, o.style.textAlign = "right"), o._idx = g, o.onclick = this._dataRangeSelected, this.shapeList.push(new n(o))), this.dataRangeOption.orient == "horizontal" ? f += c + (m ? 5 : 0) + (m ? u.getTextWidth(i, a) : 0) + p : l += h + p;
            !m && this.dataRangeOption.text[1] && (this.dataRangeOption.orient == "horizontal" ? f = f - p + this._textGap : l = l - p + this._textGap, o = this._getTextShape(f, l, this.dataRangeOption.text[1]), this.dataRangeOption.orient != "horizontal" && (o.style.y -= 5, o.style.textBaseline = "top"), this.shapeList.push(new n(o)))
        },
        _buildGradient: function() {
            var t, i, s = this.getFont(this.dataRangeOption.textStyle),
                o = this._itemGroupLocation.x,
                a = this._itemGroupLocation.y,
                f = this.dataRangeOption.itemWidth,
                l = this.dataRangeOption.itemHeight,
                c = u.getTextHeight("国", s),
                h = !0;
            this.dataRangeOption.text && (h = !1, this.dataRangeOption.text[0] && (i = this._getTextShape(o, a, this.dataRangeOption.text[0]), this.dataRangeOption.orient == "horizontal" ? o += u.getTextWidth(this.dataRangeOption.text[0], s) + this._textGap : (a += c + this._textGap, i.style.y += c / 2 + this._textGap, i.style.textBaseline = "bottom"), this.shapeList.push(new n(i))));
            var p = e("zrender/tool/color"),
                d = 1 / (this.dataRangeOption.color.length - 1),
                v = [];
            for (var m = 0, g = this.dataRangeOption.color.length; m < g; m++) v.push([m * d, this.dataRangeOption.color[m]]);
            this.dataRangeOption.orient == "horizontal" ? (t = {
                zlevel: this._zlevelBase,
                style: {
                    x: o,
                    y: a,
                    width: f * 10,
                    height: l,
                    color: p.getLinearGradient(o, a, o + f * 10, a, v)
                },
                hoverable: !1
            }, o += f * 10 + this._textGap) : (t = {
                zlevel: this._zlevelBase,
                style: {
                    x: o,
                    y: a,
                    width: f,
                    height: l * 10,
                    color: p.getLinearGradient(o, a, o, a + l * 10, v)
                },
                hoverable: !1
            }, a += l * 10 + this._textGap), this.shapeList.push(new r(t)), this.dataRangeOption.calculable && (this._calculableLocation = t.style, this._buildFiller(), this._bulidMask(), this._bulidHandle()), !h && this.dataRangeOption.text[1] && (i = this._getTextShape(o, a, this.dataRangeOption.text[1]), this.shapeList.push(new n(i)))
        },
        _buildFiller: function() {
            this._fillerShae = {
                zlevel: this._zlevelBase + 1,
                style: {
                    x: this._calculableLocation.x,
                    y: this._calculableLocation.y,
                    width: this._calculableLocation.width,
                    height: this._calculableLocation.height,
                    color: "rgba(255,255,255,0)"
                },
                highlightStyle: {
                    strokeColor: "rgba(255,255,255,0.5)",
                    lineWidth: 1
                },
                draggable: !0,
                ondrift: this._ondrift,
                ondragend: this._ondragend,
                _type: "filler"
            }, this._fillerShae = new r(this._fillerShae), this.shapeList.push(this._fillerShae)
        },
        _bulidHandle: function() {
            var e = this._calculableLocation.x,
                t = this._calculableLocation.y,
                n = this._calculableLocation.width,
                r = this._calculableLocation.height,
                s = this.getFont(this.dataRangeOption.textStyle),
                o = u.getTextHeight("国", s),
                a = Math.max(u.getTextWidth(this._textFormat(this.dataRangeOption.max), s), u.getTextWidth(this._textFormat(this.dataRangeOption.min), s)) + 2,
                f, l, c, h, p, d, v, m;
            this.dataRangeOption.orient == "horizontal" ? this.dataRangeOption.y != "bottom" ? (f = [
                [e, t],
                [e, t + r + o],
                [e - o, t + r + o],
                [e - 1, t + r],
                [e - 1, t]
            ], l = e - a / 2 - o, c = t + r + o / 2 + 2, h = {
                x: e - a - o,
                y: t + r,
                width: a + o,
                height: o
            }, p = [
                [e + n, t],
                [e + n, t + r + o],
                [e + n + o, t + r + o],
                [e + n + 1, t + r],
                [e + n + 1, t]
            ], d = e + n + a / 2 + o, v = c, m = {
                x: e + n,
                y: t + r,
                width: a + o,
                height: o
            }) : (f = [
                [e, t + r],
                [e, t - o],
                [e - o, t - o],
                [e - 1, t],
                [e - 1, t + r]
            ], l = e - a / 2 - o, c = t - o / 2 - 2, h = {
                x: e - a - o,
                y: t - o,
                width: a + o,
                height: o
            }, p = [
                [e + n, t + r],
                [e + n, t - o],
                [e + n + o, t - o],
                [e + n + 1, t],
                [e + n + 1, t + r]
            ], d = e + n + a / 2 + o, v = c, m = {
                x: e + n,
                y: t - o,
                width: a + o,
                height: o
            }) : (a += o, this.dataRangeOption.x != "right" ? (f = [
                [e, t],
                [e + n + o, t],
                [e + n + o, t - o],
                [e + n, t - 1],
                [e, t - 1]
            ], l = e + n + a / 2 + o / 2, c = t - o / 2, h = {
                x: e + n,
                y: t - o,
                width: a + o,
                height: o
            }, p = [
                [e, t + r],
                [e + n + o, t + r],
                [e + n + o, t + o + r],
                [e + n, t + 1 + r],
                [e, t + r + 1]
            ], d = l, v = t + r + o / 2, m = {
                x: e + n,
                y: t + r,
                width: a + o,
                height: o
            }) : (f = [
                [e + n, t],
                [e - o, t],
                [e - o, t - o],
                [e, t - 1],
                [e + n, t - 1]
            ], l = e - a / 2 - o / 2, c = t - o / 2, h = {
                x: e - a - o,
                y: t - o,
                width: a + o,
                height: o
            }, p = [
                [e + n, t + r],
                [e - o, t + r],
                [e - o, t + o + r],
                [e, t + 1 + r],
                [e + n, t + r + 1]
            ], d = l, v = t + r + o / 2, m = {
                x: e - a - o,
                y: t + r,
                width: a + o,
                height: o
            })), this._startShape = {
                style: {
                    pointList: f,
                    text: this._textFormat(this.dataRangeOption.max),
                    textX: l,
                    textY: c,
                    color: this.getColor(this.dataRangeOption.max),
                    rect: h,
                    x: f[0][0],
                    y: f[0][1],
                    _x: f[0][0],
                    _y: f[0][1]
                }
            }, this._startShape.highlightStyle = {
                strokeColor: this._startShape.style.color,
                lineWidth: 1
            }, this._endShape = {
                style: {
                    pointList: p,
                    text: this._textFormat(this.dataRangeOption.min),
                    textX: d,
                    textY: v,
                    color: this.getColor(this.dataRangeOption.min),
                    rect: m,
                    x: p[0][0],
                    y: p[0][1],
                    _x: p[0][0],
                    _y: p[0][1]
                }
            }, this._endShape.highlightStyle = {
                strokeColor: this._endShape.style.color,
                lineWidth: 1
            }, this._startShape.zlevel = this._endShape.zlevel = this._zlevelBase + 1, this._startShape.draggable = this._endShape.draggable = !0, this._startShape.ondrift = this._endShape.ondrift = this._ondrift, this._startShape.ondragend = this._endShape.ondragend = this._ondragend, this._startShape.style.textColor = this._endShape.style.textColor = this.dataRangeOption.textStyle.color, this._startShape.style.textAlign = this._endShape.style.textAlign = "center", this._startShape.style.textPosition = this._endShape.style.textPosition = "specific", this._startShape.style.textBaseline = this._endShape.style.textBaseline = "middle", this._startShape.style.width = this._endShape.style.width = 0, this._startShape.style.height = this._endShape.style.height = 0, this._startShape.style.textPosition = this._endShape.style.textPosition = "specific", this._startShape = new i(this._startShape), this._endShape = new i(this._endShape), this.shapeList.push(this._startShape), this.shapeList.push(this._endShape)
        },
        _bulidMask: function() {
            var e = this._calculableLocation.x,
                t = this._calculableLocation.y,
                n = this._calculableLocation.width,
                i = this._calculableLocation.height;
            this._startMask = {
                zlevel: this._zlevelBase + 1,
                style: {
                    x: e,
                    y: t,
                    width: this.dataRangeOption.orient == "horizontal" ? 0 : n,
                    height: this.dataRangeOption.orient == "horizontal" ? i : 0,
                    color: "#ccc"
                },
                hoverable: !1
            }, this._endMask = {
                zlevel: this._zlevelBase + 1,
                style: {
                    x: this.dataRangeOption.orient == "horizontal" ? e + n : e,
                    y: this.dataRangeOption.orient == "horizontal" ? t : t + i,
                    width: this.dataRangeOption.orient == "horizontal" ? 0 : n,
                    height: this.dataRangeOption.orient == "horizontal" ? i : 0,
                    color: "#ccc"
                },
                hoverable: !1
            }, this._startMask = new r(this._startMask), this._endMask = new r(this._endMask), this.shapeList.push(this._startMask), this.shapeList.push(this._endMask)
        },
        _buildBackground: function() {
            var e = this.dataRangeOption.padding[0],
                t = this.dataRangeOption.padding[1],
                n = this.dataRangeOption.padding[2],
                i = this.dataRangeOption.padding[3];
            this.shapeList.push(new r({
                zlevel: this._zlevelBase,
                hoverable: !1,
                style: {
                    x: this._itemGroupLocation.x - i,
                    y: this._itemGroupLocation.y - e,
                    width: this._itemGroupLocation.width + i + t,
                    height: this._itemGroupLocation.height + e + n,
                    brushType: this.dataRangeOption.borderWidth === 0 ? "fill" : "both",
                    color: this.dataRangeOption.backgroundColor,
                    strokeColor: this.dataRangeOption.borderColor,
                    lineWidth: this.dataRangeOption.borderWidth
                }
            }))
        },
        _getItemGroupLocation: function() {
            var e = this._valueTextList,
                t = e.length,
                n = this.dataRangeOption.itemGap,
                r = this.dataRangeOption.itemWidth,
                i = this.dataRangeOption.itemHeight,
                s = 0,
                o = 0,
                a = this.getFont(this.dataRangeOption.textStyle),
                f = u.getTextHeight("国", a);
            if (this.dataRangeOption.orient == "horizontal") {
                if (this.dataRangeOption.text || this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable) s = (this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? r * 10 + n : t * (r + n)) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[0] != "undefined" ? u.getTextWidth(this.dataRangeOption.text[0], a) + this._textGap : 0) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[1] != "undefined" ? u.getTextWidth(this.dataRangeOption.text[1], a) + this._textGap : 0);
                else {
                    r += 5;
                    for (var l = 0; l < t; l++) s += r + u.getTextWidth(e[l], a) + n
                }
                s -= n, o = Math.max(f, i)
            } else {
                var c;
                if (this.dataRangeOption.text || this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable) o = (this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? i * 10 + n : t * (i + n)) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[0] != "undefined" ? this._textGap + f : 0) + (this.dataRangeOption.text && typeof this.dataRangeOption.text[1] != "undefined" ? this._textGap + f : 0), c = Math.max(u.getTextWidth(this.dataRangeOption.text && this.dataRangeOption.text[0] || "", a), u.getTextWidth(this.dataRangeOption.text && this.dataRangeOption.text[1] || "", a)), s = Math.max(r, c);
                else {
                    o = (i + n) * t, r += 5, c = 0;
                    for (var l = 0; l < t; l++) c = Math.max(c, u.getTextWidth(e[l], a));
                    s = r + c
                }
                o -= n
            }
            var h, p = this.zr.getWidth();
            switch (this.dataRangeOption.x) {
                case "center":
                    h = Math.floor((p - s) / 2);
                    break;
                case "left":
                    h = this.dataRangeOption.padding[3] + this.dataRangeOption.borderWidth;
                    break;
                case "right":
                    h = p - s - this.dataRangeOption.padding[1] - this.dataRangeOption.borderWidth;
                    break;
                default:
                    h = this.parsePercent(this.dataRangeOption.x, p), h = isNaN(h) ? 0 : h
            }
            var d, v = this.zr.getHeight();
            switch (this.dataRangeOption.y) {
                case "top":
                    d = this.dataRangeOption.padding[0] + this.dataRangeOption.borderWidth;
                    break;
                case "bottom":
                    d = v - o - this.dataRangeOption.padding[2] - this.dataRangeOption.borderWidth;
                    break;
                case "center":
                    d = Math.floor((v - o) / 2);
                    break;
                default:
                    d = this.parsePercent(this.dataRangeOption.y, v), d = isNaN(d) ? 0 : d
            }
            if (this.dataRangeOption.calculable) {
                var m = Math.max(u.getTextWidth(this.dataRangeOption.max, a), u.getTextWidth(this.dataRangeOption.min, a)) + f;
                this.dataRangeOption.orient == "horizontal" ? (h < m && (h = m), h + s + m > p && (h -= m)) : (d < f && (d = f), d + o + f > v && (d -= f))
            }
            return {
                x: h,
                y: d,
                width: s,
                height: o
            }
        },
        _getTextShape: function(e, t, n) {
            return {
                zlevel: this._zlevelBase,
                style: {
                    x: this.dataRangeOption.orient == "horizontal" ? e : this._itemGroupLocation.x + this._itemGroupLocation.width / 2,
                    y: this.dataRangeOption.orient == "horizontal" ? this._itemGroupLocation.y + this._itemGroupLocation.height / 2 : t,
                    color: this.dataRangeOption.textStyle.color,
                    text: n,
                    textFont: this.getFont(this.dataRangeOption.textStyle),
                    textBaseline: this.dataRangeOption.orient == "horizontal" ? "middle" : "top",
                    textAlign: this.dataRangeOption.orient == "horizontal" ? "left" : "center"
                },
                hoverable: !1
            }
        },
        _getItemShape: function(e, t, n, r, i) {
            return {
                zlevel: this._zlevelBase,
                style: {
                    x: e,
                    y: t + 1,
                    width: n,
                    height: r - 2,
                    color: i
                },
                highlightStyle: {
                    strokeColor: i,
                    lineWidth: 1
                },
                clickable: !0
            }
        },
        __ondrift: function(e, t, n) {
            var r = this._calculableLocation.x,
                i = this._calculableLocation.y,
                s = this._calculableLocation.width,
                o = this._calculableLocation.height;
            return this.dataRangeOption.orient == "horizontal" ? e.style.x + t <= r ? e.style.x = r : e.style.x + t + e.style.width >= r + s ? e.style.x = r + s - e.style.width : e.style.x += t : e.style.y + n <= i ? e.style.y = i : e.style.y + n + e.style.height >= i + o ? e.style.y = i + o - e.style.height : e.style.y += n, e._type == "filler" ? this._syncHandleShape() : this._syncFillerShape(e), this.dataRangeOption.realtime && this._syncData(), !0
        },
        __ondragend: function() {
            this.isDragend = !0
        },
        ondragend: function(e, t) {
            if (!this.isDragend || !e.target) return;
            !this.dataRangeOption.realtime && this._syncData(), t.dragOut = !0, t.dragIn = !0, !this.dataRangeOption.realtime && !1 && this.messageCenter.dispatch(s.EVENT.DATA_RANGE, null, {
                range: {
                    start: this._range.end,
                    end: this._range.start
                }
            }, this.myChart), t.needRefresh = !1, this.isDragend = !1;
            return
        },
        _syncShapeFromRange: function() {
            var e = this.dataRangeOption.range || {};
            this._range.end = typeof this._range.end != "undefined" ? this._range.end : typeof e.start != "undefined" ? e.start : 0, this._range.start = typeof this._range.start != "undefined" ? this._range.start : typeof e.end != "undefined" ? e.end : 100;
            if (this._range.start != 100 || this._range.end !== 0) {
                if (this.dataRangeOption.orient == "horizontal") {
                    var t = this._fillerShae.style.width;
                    this._fillerShae.style.x += t * (100 - this._range.start) / 100, this._fillerShae.style.width = t * (this._range.start - this._range.end) / 100
                } else {
                    var n = this._fillerShae.style.height;
                    this._fillerShae.style.y += n * (100 - this._range.start) / 100, this._fillerShae.style.height = n * (this._range.start - this._range.end) / 100
                }
                this.zr.modShape(this._fillerShae.id), this._syncHandleShape()
            }
        },
        _syncHandleShape: function() {
            var e = this._calculableLocation.x,
                t = this._calculableLocation.y,
                n = this._calculableLocation.width,
                r = this._calculableLocation.height;
            this.dataRangeOption.orient == "horizontal" ? (this._startShape.style.x = this._fillerShae.style.x, this._startMask.style.width = this._startShape.style.x - e, this._endShape.style.x = this._fillerShae.style.x + this._fillerShae.style.width, this._endMask.style.x = this._endShape.style.x, this._endMask.style.width = e + n - this._endShape.style.x, this._range.start = Math.ceil(100 - (this._startShape.style.x - e) / n * 100), this._range.end = Math.floor(100 - (this._endShape.style.x - e) / n * 100)) : (this._startShape.style.y = this._fillerShae.style.y, this._startMask.style.height = this._startShape.style.y - t, this._endShape.style.y = this._fillerShae.style.y + this._fillerShae.style.height, this._endMask.style.y = this._endShape.style.y, this._endMask.style.height = t + r - this._endShape.style.y, this._range.start = Math.ceil(100 - (this._startShape.style.y - t) / r * 100), this._range.end = Math.floor(100 - (this._endShape.style.y - t) / r * 100)), this._syncShape()
        },
        _syncFillerShape: function(e) {
            var t = this._calculableLocation.x,
                n = this._calculableLocation.y,
                r = this._calculableLocation.width,
                i = this._calculableLocation.height,
                s, o;
            this.dataRangeOption.orient == "horizontal" ? (s = this._startShape.style.x, o = this._endShape.style.x, e.id == this._startShape.id && s >= o ? (o = s, this._endShape.style.x = s) : e.id == this._endShape.id && s >= o && (s = o, this._startShape.style.x = s), this._fillerShae.style.x = s, this._fillerShae.style.width = o - s, this._startMask.style.width = s - t, this._endMask.style.x = o, this._endMask.style.width = t + r - o, this._range.start = Math.ceil(100 - (s - t) / r * 100), this._range.end = Math.floor(100 - (o - t) / r * 100)) : (s = this._startShape.style.y, o = this._endShape.style.y, e.id == this._startShape.id && s >= o ? (o = s, this._endShape.style.y = s) : e.id == this._endShape.id && s >= o && (s = o, this._startShape.style.y = s), this._fillerShae.style.y = s, this._fillerShae.style.height = o - s, this._startMask.style.height = s - n, this._endMask.style.y = o, this._endMask.style.height = n + i - o, this._range.start = Math.ceil(100 - (s - n) / i * 100), this._range.end = Math.floor(100 - (o - n) / i * 100)), this._syncShape()
        },
        _syncShape: function() {
            this._startShape.position = [this._startShape.style.x - this._startShape.style._x, this._startShape.style.y - this._startShape.style._y], this._startShape.style.text = this._textFormat(this._gap * this._range.start + this.dataRangeOption.min), this._startShape.style.color = this._startShape.highlightStyle.strokeColor = this.getColor(this._gap * this._range.start + this.dataRangeOption.min), this._endShape.position = [this._endShape.style.x - this._endShape.style._x, this._endShape.style.y - this._endShape.style._y], this._endShape.style.text = this._textFormat(this._gap * this._range.end + this.dataRangeOption.min), this._endShape.style.color = this._endShape.highlightStyle.strokeColor = this.getColor(this._gap * this._range.end + this.dataRangeOption.min), this.zr.modShape(this._startShape.id), this.zr.modShape(this._endShape.id), this.zr.modShape(this._startMask.id), this.zr.modShape(this._endMask.id), this.zr.modShape(this._fillerShae.id), this.zr.refresh()
        },
        _syncData: function() {
            this.dataRangeOption.realtime && this.messageCenter.dispatch(s.EVENT.DATA_RANGE, null, {
                range: {
                    start: this._range.end,
                    end: this._range.start
                }
            }, this.myChart)
        },
        __dataRangeSelected: function(e) {
            var t = e.target._idx;
            this._selectedMap[t] = !this._selectedMap[t], this.messageCenter.dispatch(s.EVENT.REFRESH, null, null, this.myChart)
        },
        _textFormat: function(e, t) {
            e = e.toFixed(this.dataRangeOption.precision), t = typeof t != "undefined" ? t.toFixed(this.dataRangeOption.precision) : "";
            if (this.dataRangeOption.formatter) {
                if (typeof this.dataRangeOption.formatter == "string") return this.dataRangeOption.formatter.replace("{value}", e).replace("{value2}", t);
                if (typeof this.dataRangeOption.formatter == "function") return this.dataRangeOption.formatter(e, t)
            }
            return t !== "" ? e + " - " + t : e
        },
        refresh: function(e) {
            if (e) {
                this.option = e, this.option.dataRange = this.reformOption(this.option.dataRange), this.option.dataRange.padding = this.reformCssArray(this.option.dataRange.padding), this.dataRangeOption = this.option.dataRange;
                var t = this.dataRangeOption.splitNumber <= 0 || this.dataRangeOption.calculable ? 100 : this.dataRangeOption.splitNumber;
                this._colorList = a.getGradientColors(this.dataRangeOption.color, Math.max((t - this.dataRangeOption.color.length) / (this.dataRangeOption.color.length - 1), 0) + 1);
                if (this._colorList.length > t) {
                    var n = this._colorList.length,
                        r = [this._colorList[0]],
                        i = n / (t - 1);
                    for (var s = 1; s < t - 1; s++) r.push(this._colorList[Math.floor(s * i)]);
                    r.push(this._colorList[n - 1]), this._colorList = r
                }
                var o = this.dataRangeOption.precision;
                this._gap = (this.dataRangeOption.max - this.dataRangeOption.min) / t;
                while (this._gap.toFixed(o) - 0 != this._gap && o < 5) o++;
                this.dataRangeOption.precision = o, this._gap = ((this.dataRangeOption.max - this.dataRangeOption.min) / t).toFixed(o) - 0, this._valueTextList = [];
                for (var s = 0; s < t; s++) this._selectedMap[s] = !0, this._valueTextList.unshift(this._textFormat(s * this._gap + this.dataRangeOption.min, (s + 1) * this._gap + this.dataRangeOption.min))
            }
            this.clear(), this._buildShape()
        },
        getColor: function(e) {
            if (isNaN(e)) return null;
            e < this.dataRangeOption.min ? e = this.dataRangeOption.min : e > this.dataRangeOption.max && (e = this.dataRangeOption.max);
            if (this.dataRangeOption.calculable)
                if (e - (this._gap * this._range.start + this.dataRangeOption.min) > 5e-5 || e - (this._gap * this._range.end + this.dataRangeOption.min) < -0.00005) return null;
            var t = this._colorList.length - Math.ceil((e - this.dataRangeOption.min) / (this.dataRangeOption.max - this.dataRangeOption.min) * this._colorList.length);
            return t == this._colorList.length && t--, this._selectedMap[t] ? this._colorList[t] : null
        }
    }, o.inherits(f, t), e("../component").define("dataRange", f), f
}), define("echarts/chart/scatter", ["require", "../component/base", "./base", "../util/shape/Symbol", "../component/axis", "../component/grid", "../component/dataZoom", "../component/dataRange", "../config", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
    function u(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("../util/shape/Symbol");
    e("../component/axis"), e("../component/grid"), e("../component/dataZoom"), e("../component/dataRange");
    var i = e("../config"),
        s = e("zrender/tool/util"),
        o = e("zrender/tool/color");
    return u.prototype = {
        type: i.CHART_TYPE_SCATTER,
        _buildShape: function() {
            var e = this.series;
            this._sIndex2ColorMap = {}, this._symbol = this.option.symbolList, this._sIndex2ShapeMap = {}, this.selectedMap = {}, this.xMarkMap = {};
            var t = this.component.legend,
                n = [],
                r, s, u, a;
            for (var f = 0, l = e.length; f < l; f++) {
                r = e[f], s = r.name;
                if (r.type == i.CHART_TYPE_SCATTER) {
                    e[f] = this.reformOption(e[f]), this._sIndex2ShapeMap[f] = this.query(r, "symbol") || this._symbol[f % this._symbol.length];
                    if (t) {
                        this.selectedMap[s] = t.isSelected(s), this._sIndex2ColorMap[f] = o.alpha(t.getColor(s), .5), u = t.getItemShape(s);
                        if (u) {
                            var a = this._sIndex2ShapeMap[f];
                            u.style.brushType = a.match("empty") ? "stroke" : "both", a = a.replace("empty", "").toLowerCase(), a.match("rectangle") && (u.style.x += Math.round((u.style.width - u.style.height) / 2), u.style.width = u.style.height), a.match("star") && (u.style.n = a.replace("star", "") - 0 || 5, a = "star"), a.match("image") && (u.style.image = a.replace(new RegExp("^image:\\/\\/"), ""), u.style.x += Math.round((u.style.width - u.style.height) / 2), u.style.width = u.style.height, a = "image"), u.style.iconType = a, t.setItemShape(s, u)
                        }
                    } else this.selectedMap[s] = !0, this._sIndex2ColorMap[f] = this.zr.getColor(f);
                    this.selectedMap[s] && n.push(f)
                }
            }
            this._buildSeries(n), this.addShapeList()
        },
        _buildSeries: function(e) {
            if (e.length === 0) return;
            var t = this.series,
                n, r, i, s, o, u, a = {},
                f, l;
            for (var c = 0, h = e.length; c < h; c++) {
                n = e[c], r = t[n];
                if (r.data.length === 0) continue;
                o = this.component.xAxis.getAxis(r.xAxisIndex || 0), u = this.component.yAxis.getAxis(r.yAxisIndex || 0), a[n] = [];
                for (var p = 0, d = r.data.length; p < d; p++) {
                    i = r.data[p], s = typeof i != "undefined" ? typeof i.value != "undefined" ? i.value : i : "-";
                    if (s == "-" || s.length < 2) continue;
                    f = o.getCoord(s[0]), l = u.getCoord(s[1]), a[n].push([f, l, p, i.name || ""])
                }
                this.xMarkMap[n] = this._markMap(o, u, r.data, a[n]), this.buildMark(n)
            }
            this._buildPointList(a)
        },
        _markMap: function(e, t, n, r) {
            var i = {
                    min0: Number.POSITIVE_INFINITY,
                    max0: Number.NEGATIVE_INFINITY,
                    sum0: 0,
                    counter0: 0,
                    average0: 0,
                    min1: Number.POSITIVE_INFINITY,
                    max1: Number.NEGATIVE_INFINITY,
                    sum1: 0,
                    counter1: 0,
                    average1: 0
                },
                s;
            for (var o = 0, u = r.length; o < u; o++) s = n[r[o][2]].value || n[r[o][2]], i.min0 > s[0] && (i.min0 = s[0], i.minY0 = r[o][1], i.minX0 = r[o][0]), i.max0 < s[0] && (i.max0 = s[0], i.maxY0 = r[o][1], i.maxX0 = r[o][0]), i.sum0 += s[0], i.counter0++, i.min1 > s[1] && (i.min1 = s[1], i.minY1 = r[o][1], i.minX1 = r[o][0]), i.max1 < s[1] && (i.max1 = s[1], i.maxY1 = r[o][1], i.maxX1 = r[o][0]), i.sum1 += s[1], i.counter1++;
            var a = this.component.grid.getX(),
                f = this.component.grid.getXend(),
                l = this.component.grid.getY(),
                c = this.component.grid.getYend();
            i.average0 = (i.sum0 / i.counter0).toFixed(2) - 0;
            var h = e.getCoord(i.average0);
            i.averageLine0 = [
                [h, c],
                [h, l]
            ], i.minLine0 = [
                [i.minX0, c],
                [i.minX0, l]
            ], i.maxLine0 = [
                [i.maxX0, c],
                [i.maxX0, l]
            ], i.average1 = (i.sum1 / i.counter1).toFixed(2) - 0;
            var p = t.getCoord(i.average1);
            return i.averageLine1 = [
                [a, p],
                [f, p]
            ], i.minLine1 = [
                [a, i.minY1],
                [f, i.minY1]
            ], i.maxLine1 = [
                [a, i.maxY1],
                [f, i.maxY1]
            ], i
        },
        _buildPointList: function(e) {
            var t = this.series,
                n, r, i, s;
            for (var o in e) {
                n = t[o], r = e[o];
                if (n.large && n.data.length > n.largeThreshold) {
                    this.shapeList.push(this._getLargeSymbol(r, this.getItemStyleColor(this.query(n, "itemStyle.normal.color"), o, -1) || this._sIndex2ColorMap[o]));
                    continue
                }
                for (var u = 0, a = r.length; u < a; u++) i = r[u], s = this._getSymbol(o, i[2], i[3], i[0], i[1]), s && this.shapeList.push(s)
            }
        },
        _getSymbol: function(e, t, n, r, i) {
            var s = this.series,
                o = s[e],
                u = o.data[t],
                a = this.component.dataRange,
                f;
            if (a) {
                f = isNaN(u[2]) ? this._sIndex2ColorMap[e] : a.getColor(u[2]);
                if (!f) return null
            } else f = this._sIndex2ColorMap[e];
            var l = this.getSymbolShape(o, e, u, t, n, r, i, this._sIndex2ShapeMap[e], f, "rgba(0,0,0,0)", "vertical");
            return l.zlevel = this._zlevelBase, l._main = !0, l
        },
        _getLargeSymbol: function(e, t) {
            return new r({
                zlevel: this._zlevelBase,
                _main: !0,
                hoverable: !1,
                style: {
                    pointList: e,
                    color: t,
                    strokeColor: t
                },
                highlightStyle: {
                    pointList: []
                }
            })
        },
        getMarkCoord: function(e, t) {
            var n = this.series[e],
                r = this.xMarkMap[e],
                i = this.component.xAxis.getAxis(n.xAxisIndex),
                s = this.component.yAxis.getAxis(n.yAxisIndex),
                o;
            if (!t.type || t.type != "max" && t.type != "min" && t.type != "average") o = [typeof t.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.xAxis || 0) : i.getCoord(t.xAxis || 0), typeof t.yAxis != "string" && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0)];
            else {
                var u = typeof t.valueIndex != "undefined" ? t.valueIndex : 1;
                o = [r[t.type + "X" + u], r[t.type + "Y" + u], r[t.type + "Line" + u], r[t.type + u]]
            }
            return o
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        },
        ondataRange: function(e, t) {
            this.component.dataRange && (this.refresh(), t.needRefresh = !0);
            return
        }
    }, s.inherits(u, n), s.inherits(u, t), e("../chart").define("scatter", u), u
}), define("echarts/chart/k", ["require", "../component/base", "./base", "../util/shape/Candle", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "../chart"], function(e) {
    function u(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("../util/shape/Candle");
    e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
    var i = e("../config"),
        s = e("../util/ecData"),
        o = e("zrender/tool/util");
    return u.prototype = {
        type: i.CHART_TYPE_K,
        _buildShape: function() {
            var e = this.series;
            this.selectedMap = {};
            var t = {
                    top: [],
                    bottom: []
                },
                n;
            for (var r = 0, s = e.length; r < s; r++) e[r].type == i.CHART_TYPE_K && (e[r] = this.reformOption(e[r]), n = this.component.xAxis.getAxis(e[r].xAxisIndex), n.type == i.COMPONENT_TYPE_AXIS_CATEGORY && t[n.getPosition()].push(r));
            for (var o in t) t[o].length > 0 && this._buildSinglePosition(o, t[o]);
            this.addShapeList()
        },
        _buildSinglePosition: function(e, t) {
            var n = this._mapData(t),
                r = n.locationMap,
                i = n.maxDataLength;
            if (i === 0 || r.length === 0) return;
            this._buildHorizontal(t, i, r);
            for (var s = 0, o = t.length; s < o; s++) this.buildMark(t[s])
        },
        _mapData: function(e) {
            var t = this.series,
                n, r, i = this.component.legend,
                s = [],
                o = 0;
            for (var u = 0, a = e.length; u < a; u++) n = t[e[u]], r = n.name, i ? this.selectedMap[r] = i.isSelected(r) : this.selectedMap[r] = !0, this.selectedMap[r] && s.push(e[u]), o = Math.max(o, n.data.length);
            return {
                locationMap: s,
                maxDataLength: o
            }
        },
        _buildHorizontal: function(e, t, n) {
            var r = this.series,
                i, s, o, u, a, f, l = {},
                c, h, p, d;
            for (var v = 0, m = n.length; v < m; v++) {
                i = n[v], s = r[i], o = s.xAxisIndex || 0, u = this.component.xAxis.getAxis(o), c = s.barWidth || Math.floor(u.getGap() / 2), d = s.barMaxWidth, d && d < c && (c = d), a = s.yAxisIndex || 0, f = this.component.yAxis.getAxis(a), l[i] = [];
                for (var g = 0, y = t; g < y; g++) {
                    if (typeof u.getNameByIndex(g) == "undefined") break;
                    h = s.data[g], p = typeof h != "undefined" ? typeof h.value != "undefined" ? h.value : h : "-";
                    if (p == "-" || p.length != 4) continue;
                    l[i].push([u.getCoordByIndex(g), c, f.getCoord(p[0]), f.getCoord(p[1]), f.getCoord(p[2]), f.getCoord(p[3]), g, u.getNameByIndex(g)])
                }
            }
            this._buildKLine(e, l)
        },
        _buildKLine: function(e, t) {
            var n = this.series,
                r, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w;
            for (var E = 0, S = e.length; E < S; E++) {
                w = e[E], d = n[w], g = t[w], this._isLarge(g) && (g = this._getLargePointList(g));
                if (d.type == i.CHART_TYPE_K && typeof g != "undefined") {
                    v = d, r = this.query(v, "itemStyle.normal.lineStyle.width"), s = this.query(v, "itemStyle.normal.lineStyle.color"), o = this.query(v, "itemStyle.normal.lineStyle.color0"), u = this.query(v, "itemStyle.normal.color"), a = this.query(v, "itemStyle.normal.color0"), f = this.query(v, "itemStyle.emphasis.lineStyle.width"), l = this.query(v, "itemStyle.emphasis.lineStyle.color"), c = this.query(v, "itemStyle.emphasis.lineStyle.color0"), h = this.query(v, "itemStyle.emphasis.color"), p = this.query(v, "itemStyle.emphasis.color0");
                    for (var x = 0, T = g.length; x < T; x++) y = g[x], m = d.data[y[6]], v = m, b = y[3] < y[2], this.shapeList.push(this._getCandle(w, y[6], y[7], y[0], y[1], y[2], y[3], y[4], y[5], b ? this.query(v, "itemStyle.normal.color") || u : this.query(v, "itemStyle.normal.color0") || a, this.query(v, "itemStyle.normal.lineStyle.width") || r, b ? this.query(v, "itemStyle.normal.lineStyle.color") || s : this.query(v, "itemStyle.normal.lineStyle.color0") || o, b ? this.query(v, "itemStyle.emphasis.color") || h || u : this.query(v, "itemStyle.emphasis.color0") || p || a, this.query(v, "itemStyle.emphasis.lineStyle.width") || f || r, b ? this.query(v, "itemStyle.emphasis.lineStyle.color") || l || s : this.query(v, "itemStyle.emphasis.lineStyle.color0") || c || o))
                }
            }
        },
        _isLarge: function(e) {
            return e[0][1] < .5
        },
        _getLargePointList: function(e) {
            var t = this.component.grid.getWidth(),
                n = e.length,
                r = [];
            for (var i = 0; i < t; i++) r[i] = e[Math.floor(n / t * i)];
            return r
        },
        _getCandle: function(e, t, n, i, o, u, a, f, l, c, h, p, d, v, m) {
            var g = this.series,
                y = {
                    zlevel: this._zlevelBase,
                    clickable: !0,
                    style: {
                        x: i,
                        y: [u, a, f, l],
                        width: o,
                        color: c,
                        strokeColor: p,
                        lineWidth: h,
                        brushType: "both"
                    },
                    highlightStyle: {
                        color: d,
                        strokeColor: m,
                        lineWidth: v
                    },
                    _seriesIndex: e
                };
            return s.pack(y, g[e], e, g[e].data[t], t, n), y = new r(y), y
        },
        getMarkCoord: function(e, t) {
            var n = this.series[e],
                r = this.component.xAxis.getAxis(n.xAxisIndex),
                i = this.component.yAxis.getAxis(n.yAxisIndex);
            return [typeof t.xAxis != "string" && r.getCoordByIndex ? r.getCoordByIndex(t.xAxis || 0) : r.getCoord(t.xAxis || 0), typeof t.yAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.yAxis || 0) : i.getCoord(t.yAxis || 0)]
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        },
        addDataAnimation: function(e) {
            var t = this.series,
                n = {};
            for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
            var o, u, a, f, l, c;
            for (var r = 0, i = this.shapeList.length; r < i; r++) {
                l = this.shapeList[r]._seriesIndex;
                if (n[l] && !n[l][3] && this.shapeList[r].type == "candle") {
                    c = s.get(this.shapeList[r], "dataIndex"), f = t[l];
                    if (n[l][2] && c == f.data.length - 1) {
                        this.zr.delShape(this.shapeList[r].id);
                        continue
                    }
                    if (!n[l][2] && c === 0) {
                        this.zr.delShape(this.shapeList[r].id);
                        continue
                    }
                    u = this.component.xAxis.getAxis(f.xAxisIndex || 0).getGap(), o = n[l][2] ? u : -u, a = 0, this.zr.animate(this.shapeList[r].id, "").when(500, {
                        position: [o, a]
                    }).start()
                }
            }
        }
    }, o.inherits(u, n), o.inherits(u, t), e("../chart").define("k", u), u
}), define("echarts/util/coordinates", ["require", "zrender/tool/math"], function(e) {
    function n(e, n) {
        return [e * t.sin(n), e * t.cos(n)]
    }

    function r(e, t) {
        return [Math.sqrt(e * e + t * t), Math.atan(t / e)]
    }
    var t = e("zrender/tool/math");
    return {
        polar2cartesian: n,
        cartesian2polar: r
    }
}), define("echarts/component/polar", ["require", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Polygon", "../config", "zrender/tool/util", "../util/coordinates", "../component"], function(e) {
    function a(e, n, r, i, s) {
        t.call(this, e, n, r, i, s), this.refresh(i)
    }
    var t = e("./base"),
        n = e("zrender/shape/Text"),
        r = e("zrender/shape/Line"),
        i = e("zrender/shape/Polygon"),
        s = e("../config"),
        o = e("zrender/tool/util"),
        u = e("../util/coordinates");
    return a.prototype = {
        type: s.COMPONENT_TYPE_POLAR,
        _buildShape: function() {
            for (var e = 0; e < this.polar.length; e++) this.reformOption(this.polar[e]), this._queryTarget = [this.polar[e], this.option], this._createVector(e), this._buildSpiderWeb(e), this._buildText(e), this._adjustIndicatorValue(e), this._addAxisLabel(e);
            for (var e = 0; e < this.shapeList.length; e++) this.zr.addShape(this.shapeList[e])
        },
        _createVector: function(e) {
            var t = this.polar[e],
                n = this.deepQuery(this._queryTarget, "indicator"),
                r = n.length,
                i = t.startAngle,
                s = 2 * Math.PI / r,
                o = this.parsePercent(t.radius, Math.min(this.zr.getWidth(), this.zr.getHeight()) / 2),
                a = t.__ecIndicator = [],
                f;
            for (var l = 0; l < r; l++) f = u.polar2cartesian(o, i * Math.PI / 180 + s * l), a.push({
                vector: [f[1], -f[0]]
            })
        },
        _buildSpiderWeb: function(e) {
            var t = this.polar[e],
                n = t.__ecIndicator,
                r = t.splitArea,
                i = t.splitLine,
                s = this.getCenter(e),
                o = t.splitNumber,
                u = i.lineStyle.color,
                a = i.lineStyle.width,
                f = i.show,
                l = this.deepQuery(this._queryTarget, "axisLine");
            this._addArea(n, o, s, r, u, a, f), this._addLine(n, s, l)
        },
        _addAxisLabel: function(e) {
            var t = this.polar[e],
                r = this.deepQuery(this._queryTarget, "indicator"),
                i = t.__ecIndicator,
                s, u, a, f, l = this.deepQuery(this._queryTarget, "splitNumber"),
                c = this.getCenter(e),
                u, h, p, d, v, m = this.deepQuery(this._queryTarget, "precision");
            for (var g = 0; g < r.length; g++) {
                s = this.deepQuery([r[g], t, this.option], "axisLabel");
                if (s.show) {
                    a = {}, a.textFont = this.getFont(), a = o.merge(a, s), a.lineWidth = a.width, u = i[g].vector, h = i[g].value, d = g / r.length * 2 * Math.PI, v = s.offset || 10;
                    for (var y = 1; y <= l; y++) f = o.merge({}, a), p = y * (h.max - h.min) / l + h.min, m && (p = p.toFixed(m)), f.text = this.numAddCommas(p), f.x = y * u[0] / l + Math.cos(d) * v + c[0], f.y = y * u[1] / l + Math.sin(d) * v + c[1], this.shapeList.push(new n({
                        zlevel: this._zlevelBase,
                        style: f,
                        draggable: !1,
                        hoverable: !1
                    }))
                }
            }
        },
        _buildText: function(e) {
            var t = this.polar[e],
                r = t.__ecIndicator,
                i, s = this.deepQuery(this._queryTarget, "indicator"),
                o = this.getCenter(e),
                u, a, f, l, c = 0,
                h = 0,
                p, d;
            for (var v = 0; v < s.length; v++) {
                f = this.deepQuery([s[v], t, this.option], "name");
                if (!f.show) continue;
                d = this.deepQuery([f, t, this.option], "textStyle"), u = {}, u.textFont = this.getFont(d), u.color = d.color, typeof f.formatter == "function" ? u.text = f.formatter(s[v].text, v) : typeof f.formatter == "string" ? u.text = f.formatter.replace("{value}", s[v].text) : u.text = s[v].text, r[v].text = u.text, i = r[v].vector, Math.round(i[0]) > 0 ? a = "left" : Math.round(i[0]) < 0 ? a = "right" : a = "center", f.margin ? (p = f.margin, c = i[0] > 0 ? p : -p, h = i[1] > 0 ? p : -p, c = i[0] === 0 ? 0 : c, h = i[1] === 0 ? 0 : h, i = this._mapVector(i, o, 1)) : i = this._mapVector(i, o, 1.2), u.textAlign = a, u.x = i[0] + c, u.y = i[1] + h, f.rotate ? l = [f.rotate / 180 * Math.PI, i[0], i[1]] : l = [0, 0, 0], this.shapeList.push(new n({
                    zlevel: this._zlevelBase,
                    style: u,
                    draggable: !1,
                    hoverable: !1,
                    rotation: l
                }))
            }
        },
        getIndicatorText: function(e, t) {
            return this.polar[e] && this.polar[e].__ecIndicator[t] && this.polar[e].__ecIndicator[t].text
        },
        getDropBox: function(e) {
            var e = e || 0,
                t = this.polar[e],
                n = this.getCenter(e),
                r = t.__ecIndicator,
                i = r.length,
                s = [],
                o, u;
            for (var a = 0; a < i; a++) o = r[a].vector, s.push(this._mapVector(o, n, 1.2));
            return u = this._getShape(s, "fill", "rgba(0,0,0,0)", "", 1), u
        },
        _addArea: function(e, t, n, r, i, s, o) {
            var u, a, f, l;
            for (var c = 0; c < t; c++) a = (t - c) / t, l = this._getPointList(e, a, n), o && (u = this._getShape(l, "stroke", "", i, s), this.shapeList.push(u)), r.show && (f = (t - c - 1) / t, this._addSplitArea(e, r, a, f, n, c))
        },
        _getPointList: function(e, t, n) {
            var r = [],
                i = e.length,
                s;
            for (var o = 0; o < i; o++) s = e[o].vector, r.push(this._mapVector(s, n, t));
            return r
        },
        _getShape: function(e, t, n, r, s, o, u) {
            return new i({
                zlevel: this._zlevelBase,
                style: {
                    pointList: e,
                    brushType: t,
                    color: n,
                    strokeColor: r,
                    lineWidth: s
                },
                hoverable: o || !1,
                draggable: u || !1
            })
        },
        _addSplitArea: function(e, t, n, r, i, s) {
            var o = e.length,
                u, a = t.areaStyle.color,
                f, l, c, h = [],
                o = e.length,
                p;
            typeof a == "string" && (a = [a]), f = a.length, u = a[s % f];
            for (var d = 0; d < o; d++) h = [], l = e[d].vector, c = e[(d + 1) % o].vector, h.push(this._mapVector(l, i, n)), h.push(this._mapVector(l, i, r)), h.push(this._mapVector(c, i, r)), h.push(this._mapVector(c, i, n)), p = this._getShape(h, "fill", u, "", 1), this.shapeList.push(p)
        },
        _mapVector: function(e, t, n) {
            return [e[0] * n + t[0], e[1] * n + t[1]]
        },
        getCenter: function(e) {
            var e = e || 0;
            return this.parseCenter(this.zr, this.polar[e].center)
        },
        _addLine: function(e, t, n) {
            var r = e.length,
                i, s, o = n.lineStyle,
                u = o.color,
                a = o.width,
                f = o.type;
            for (var l = 0; l < r; l++) s = e[l].vector, i = this._getLine(t[0], t[1], s[0] + t[0], s[1] + t[1], u, a, f), this.shapeList.push(i)
        },
        _getLine: function(e, t, n, i, s, o, u) {
            return new r({
                zlevel: this._zlevelBase,
                style: {
                    xStart: e,
                    yStart: t,
                    xEnd: n,
                    yEnd: i,
                    strokeColor: s,
                    lineWidth: o,
                    lineType: u
                },
                hoverable: !1
            })
        },
        _adjustIndicatorValue: function(e) {
            var t = this.polar[e],
                n = this.deepQuery(this._queryTarget, "indicator"),
                r = n.length,
                i = t.__ecIndicator,
                s, o, u, a = this._getSeriesData(e),
                f = t.splitNumber,
                l = this.deepQuery(this._queryTarget, "boundaryGap"),
                c = this.deepQuery(this._queryTarget, "precision"),
                h = this.deepQuery(this._queryTarget, "power"),
                p = this.deepQuery(this._queryTarget, "scale");
            for (var d = 0; d < r; d++) typeof n[d].max == "number" ? (o = n[d].max, u = n[d].min || 0, s = {
                max: o,
                min: u
            }) : s = this._findValue(a, d, f, l, c, h, p), i[d].value = s
        },
        _getSeriesData: function(e) {
            var t = [],
                n, r, i = this.component.legend;
            for (var o = 0; o < this.series.length; o++) {
                n = this.series[o];
                if (n.type != s.CHART_TYPE_RADAR) continue;
                r = n.data || [];
                for (var u = 0; u < r.length; u++) polarIndex = this.deepQuery([r[u], n, this.option], "polarIndex") || 0, polarIndex == e && (!i || i.isSelected(r[u].name)) && t.push(r[u])
            }
            return t
        },
        _findValue: function(e, t, n, r, i, s, o) {
            function m(e) {
                (e > u || u === undefined) && (u = e), (e < a || a === undefined) && (a = e)
            }
            var u, a, f, l, c, h = 0,
                p, d, v;
            if (!e || e.length === 0) return;
            e.length == 1 && (a = 0);
            if (e.length != 1)
                for (var g = 0; g < e.length; g++) f = typeof e[g].value[t].value != "undefined" ? e[g].value[t].value : e[g].value[t], m(f);
            else {
                v = e[0];
                for (var g = 0; g < v.value.length; g++) m(typeof v.value[g].value != "undefined" ? v.value[g].value : v.value[g])
            }
            if (e.length != 1)
                if (o) {
                    l = this._getDelta(u, a, n, i, s);
                    if (l >= 1) a = Math.floor(a / l) * l - l;
                    else {
                        if (l === 0) return u > 0 ? (d = 0, p = 2 * u) : u === 0 ? (d = 0, p = 100) : (p = 0, d = 2 * a), {
                            max: p,
                            min: d
                        };
                        c = (l + "").split(".")[1], h = c.length, a = Math.floor(a * Math.pow(10, h)) / Math.pow(10, h) - l
                    }
                    Math.abs(a) <= l && (a = 0), u = a + Math.floor(l * Math.pow(10, h) * (n + 1)) / Math.pow(10, h)
                } else a = a > 0 ? 0 : a;
            return r && (u = u > 0 ? u * 1.2 : u * .8, a = a > 0 ? a * .8 : a * 1.2), {
                max: u,
                min: a
            }
        },
        _getDelta: function(e, t, n, r, i) {
            var s = (e - t) / n,
                o, u;
            if (s > 1) return i ? (s = Math.ceil(s), s % i > 0 ? (Math.ceil(s / i) + 1) * i : s) : (o = (s + "").split(".")[0], u = o.length, o.charAt(0) >= 5 ? Math.pow(10, u) : (o.charAt(0) - 0 + 1) * Math.pow(10, u - 1));
            if (s == 1) return 1;
            if (s === 0) return 0;
            if (!r) {
                o = (s + "").split(".")[1], u = 0;
                while (o[u] == "0") u++;
                return o[u] >= 5 ? "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u) : "0." + o.substring(0, u + 1) - 0 + 1 / Math.pow(10, u + 1)
            }
            return Math.ceil(s * Math.pow(10, r)) / Math.pow(10, r)
        },
        getVector: function(e, t, n) {
            e = e || 0, t = t || 0;
            var r = this.polar[e].__ecIndicator;
            if (t >= r.length) return;
            var i = this.polar[e].__ecIndicator[t],
                s = this.getCenter(e),
                o = i.vector,
                u = i.value.max,
                a = i.value.min,
                f;
            if (typeof n == "undefined") return s;
            switch (n) {
                case "min":
                    n = a;
                    break;
                case "max":
                    n = u;
                    break;
                case "center":
                    n = (u + a) / 2
            }
            return u != a ? f = (n - a) / (u - a) : f = .5, this._mapVector(o, s, f)
        },
        isInside: function(e) {
            var t = this.getNearestIndex(e);
            return t ? t.polarIndex : -1
        },
        getNearestIndex: function(e) {
            var t, n, r, i, s, o, a, f, l, c = Math.min(this.zr.getWidth(), this.zr.getHeight()) / 2;
            for (var h = 0; h < this.polar.length; h++) {
                t = this.polar[h], n = this.getCenter(h);
                if (e[0] == n[0] && e[1] == n[1]) return {
                    polarIndex: h,
                    valueIndex: 0
                };
                r = this.parsePercent(t.radius, c), s = t.startAngle, o = t.indicator, a = o.length, f = 2 * Math.PI / a, i = u.cartesian2polar(e[0] - n[0], n[1] - e[1]), e[0] - n[0] < 0 && (i[1] += Math.PI), i[1] < 0 && (i[1] += 2 * Math.PI), l = i[1] - s / 180 * Math.PI + Math.PI * 2;
                if (Math.abs(Math.cos(l % (f / 2))) * r > i[0]) return {
                    polarIndex: h,
                    valueIndex: Math.floor((l + f / 2) / f) % a
                }
            }
        },
        getIndicator: function(e) {
            var e = e || 0;
            return this.polar[e].indicator
        },
        refresh: function(e) {
            e && (this.option = e, this.polar = this.option.polar, this.series = this.option.series), this.clear(), this._buildShape()
        }
    }, o.inherits(a, t), e("../component").define("polar", a), a
}), define("echarts/chart/radar", ["require", "../component/base", "./base", "zrender/shape/Polygon", "../component/polar", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../util/accMath", "../chart"], function(e) {
    function a(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/Polygon");
    e("../component/polar");
    var i = e("../config"),
        s = e("../util/ecData"),
        o = e("zrender/tool/util"),
        u = e("zrender/tool/color");
    return a.prototype = {
        type: i.CHART_TYPE_RADAR,
        _buildShape: function() {
            this.selectedMap = {}, this._symbol = this.option.symbolList, this._queryTarget, this._dropBoxList = [], this._radarDataCounter = 0;
            var e = this.series,
                t = this.component.legend,
                n;
            for (var r = 0, s = e.length; r < s; r++) e[r].type == i.CHART_TYPE_RADAR && (this.serie = this.reformOption(e[r]), n = this.serie.name || "", this.selectedMap[n] = t ? t.isSelected(n) : !0, this.selectedMap[n] && (this._queryTarget = [this.serie, this.option], this.deepQuery(this._queryTarget, "calculable") && this._addDropBox(r), this._buildSingleRadar(r), this.buildMark(r)));
            this.addShapeList()
        },
        _buildSingleRadar: function(e) {
            var t = this.component.legend,
                n, r = this.serie.data,
                i, s, o, u = this.deepQuery(this._queryTarget, "calculable");
            for (var a = 0; a < r.length; a++) {
                s = r[a].name || "", this.selectedMap[s] = t ? t.isSelected(s) : !0;
                if (!this.selectedMap[s]) continue;
                t ? (i = t.getColor(s), n = t.getItemShape(s), n && (n.style.brushType = this.deepQuery([r[a], this.serie], "itemStyle.normal.areaStyle") ? "both" : "stroke", t.setItemShape(s, n))) : i = this.zr.getColor(a), o = this._getPointList(this.serie.polarIndex, r[a]), this._addSymbol(o, i, a, e, this.serie.polarIndex), this._addDataShape(o, i, r[a], e, a, u), this._radarDataCounter++
            }
        },
        _getPointList: function(e, t) {
            var n = [],
                r, i = this.component.polar;
            for (var s = 0, o = t.value.length; s < o; s++) r = i.getVector(e, s, typeof t.value[s].value != "undefined" ? t.value[s].value : t.value[s]), r && n.push(r);
            return n
        },
        _addSymbol: function(e, t, n, r, i) {
            var o = this.series,
                u, a = this.component.polar;
            for (var f = 0, l = e.length; f < l; f++) u = this.getSymbolShape(this.deepMerge([o[r].data[n], o[r]]), r, o[r].data[n].value[f], f, a.getIndicatorText(i, f), e[f][0], e[f][1], this._symbol[this._radarDataCounter % this._symbol.length], t, "#fff", "vertical"), u.zlevel = this._zlevelBase + 1, s.set(u, "data", o[r].data[n]), s.set(u, "value", o[r].data[n].value), s.set(u, "dataIndex", n), s.set(u, "special", f), this.shapeList.push(u)
        },
        _addDataShape: function(e, t, n, i, o, a) {
            var f = this.series,
                l = [n, this.serie],
                c = this.getItemStyleColor(this.deepQuery(l, "itemStyle.normal.color"), i, o, n),
                h = this.deepQuery(l, "itemStyle.normal.lineStyle.width"),
                p = this.deepQuery(l, "itemStyle.normal.lineStyle.type"),
                d = this.deepQuery(l, "itemStyle.normal.areaStyle.color"),
                v = this.deepQuery(l, "itemStyle.normal.areaStyle"),
                m = {
                    zlevel: this._zlevelBase,
                    style: {
                        pointList: e,
                        brushType: v ? "both" : "stroke",
                        color: d || c || u.alpha(t, .5),
                        strokeColor: c || t,
                        lineWidth: h,
                        lineType: p
                    },
                    highlightStyle: {
                        brushType: this.deepQuery(l, "itemStyle.emphasis.areaStyle") || v ? "both" : "stroke",
                        color: this.deepQuery(l, "itemStyle.emphasis.areaStyle.color") || d || c || u.alpha(t, .5),
                        strokeColor: this.getItemStyleColor(this.deepQuery(l, "itemStyle.emphasis.color"), i, o, n) || c || t,
                        lineWidth: this.deepQuery(l, "itemStyle.emphasis.lineStyle.width") || h,
                        lineType: this.deepQuery(l, "itemStyle.emphasis.lineStyle.type") || p
                    }
                };
            s.pack(m, f[i], i, n, o, n.name, this.component.polar.getIndicator(f[i].polarIndex)), a && (m.draggable = !0, this.setCalculable(m)), m = new r(m), this.shapeList.push(m)
        },
        _addDropBox: function(e) {
            var t = this.series,
                n = this.deepQuery(this._queryTarget, "polarIndex");
            if (!this._dropBoxList[n]) {
                var r = this.component.polar.getDropBox(n);
                r.zlevel = this._zlevelBase, this.setCalculable(r), s.pack(r, t, e, undefined, -1), this.shapeList.push(r), this._dropBoxList[n] = !0
            }
        },
        ondragend: function(e, t) {
            var n = this.series;
            if (!this.isDragend || !e.target) return;
            var r = e.target,
                i = s.get(r, "seriesIndex"),
                o = s.get(r, "dataIndex");
            this.component.legend && this.component.legend.del(n[i].data[o].name), n[i].data.splice(o, 1), t.dragOut = !0, t.needRefresh = !0, this.isDragend = !1;
            return
        },
        ondrop: function(t, n) {
            var r = this.series;
            if (!this.isDrop || !t.target) return;
            var i = t.target,
                o = t.dragged,
                u = s.get(i, "seriesIndex"),
                a = s.get(i, "dataIndex"),
                f, l = this.component.legend,
                c;
            if (a == -1) f = {
                value: s.get(o, "value"),
                name: s.get(o, "name")
            }, r[u].data.push(f), l && l.add(f.name, o.style.color || o.style.strokeColor);
            else {
                var h = e("../util/accMath");
                f = r[u].data[a], l && l.del(f.name), f.name += this.option.nameConnector + s.get(o, "name"), c = s.get(o, "value");
                for (var p = 0; p < c.length; p++) f.value[p] = h.accAdd(f.value[p], c[p]);
                l && l.add(f.name, o.style.color || o.style.strokeColor)
            }
            n.dragIn = n.dragIn || !0, this.isDrop = !1;
            return
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        }
    }, o.inherits(a, n), o.inherits(a, t), e("../chart").define("radar", a), a
}), define("echarts/util/shape/Chord", ["require", "zrender/shape/Base", "zrender/tool/util"], function(e) {
    function i(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("zrender/tool/util"),
        r = n.getContext();
    return i.prototype = {
        type: "chord",
        buildPath: function(e, t) {
            var n = Math.PI * 2,
                r = t.center[0],
                i = t.center[1],
                s = t.r,
                o = t.source0 / 180 * Math.PI,
                u = t.source1 / 180 * Math.PI,
                a = t.target0 / 180 * Math.PI,
                f = t.target1 / 180 * Math.PI,
                l = r + Math.cos(n - o) * s,
                c = i - Math.sin(n - o) * s,
                h = r + Math.cos(n - u) * s,
                p = i - Math.sin(n - u) * s,
                d = r + Math.cos(n - a) * s,
                v = i - Math.sin(n - a) * s,
                m = r + Math.cos(n - f) * s,
                g = i - Math.sin(n - f) * s;
            e.moveTo(l, c), e.arc(r, i, t.r, o, u, !1), e.bezierCurveTo((r - h) * .7 + h, (i - p) * .7 + p, (r - d) * .7 + d, (i - v) * .7 + v, d, v);
            if (t.source0 === t.target0 && t.source1 === t.target1) return;
            e.arc(r, i, t.r, a, f, !1), e.bezierCurveTo((r - m) * .7 + m, (i - g) * .7 + g, (r - l) * .7 + l, (i - c) * .7 + c, l, c)
        },
        getRect: function() {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        },
        isCover: function(e, t) {
            if (!r.isPointInPath) return !1;
            var n = this.getTansform(e, t);
            return e = n[0], t = n[1], r.beginPath(), i.prototype.buildPath.call(null, r, this.style), r.closePath(), r.isPointInPath(e, t)
        }
    }, n.inherits(i, t), i
}), define("echarts/util/kwargs", [], function() {
    function e(e, t) {
        var n = new RegExp("(\\/\\*[\\w\\'\\,\\(\\)\\s\\r\\n\\*]*\\*\\/)|(\\/\\/[\\w\\s\\'][^\\n\\r]*$)|(<![\\-\\-\\s\\w\\>\\/]*>)", "gim"),
            r = new RegExp("\\s+", "gim"),
            i = new RegExp("function.*?\\((.*?)\\)", "i"),
            s = e.toString().replace(n, "").replace(r, "").match(i)[1].split(",");
        return t !== Object(t) && (t = {}),
            function() {
                var n = Array.prototype.slice.call(arguments),
                    r = n[n.length - 1];
                r && r.constructor === Object ? n.pop() : r = {};
                for (var i = 0; i < s.length; i++) {
                    var o = s[i];
                    o in r ? n[i] = r[o] : o in t && n[i] == null && (n[i] = t[o])
                }
                return e.apply(this, n)
            }
    }
    return e
}), define("echarts/util/ndarray", ["require", "./kwargs"], function(e) {
    function d(e) {
        if (typeof e == "undefined") return "number";
        switch (Object.prototype.toString.call(e)) {
            case "[object Int32Array]":
                return "int32";
            case "[object Int16Array]":
                return "int16";
            case "[object Int8Array]":
                return "int8";
            case "[object Uint32Array]":
                return "uint32";
            case "[object Uint16Array]":
                return "uint16";
            case "[object Uint8Array]":
                return "uint8";
            case "[object Uint8ClampedArray]":
                return "uint8c";
            case "[object Float32Array]":
                return "float32";
            case "[object Float64Array]":
                return "float64";
            default:
                return "number"
        }
    }

    function m(e, t) {
        if (e.indexOf(":") >= 0) {
            var n = e.split(/\s*:\s*/),
                r = parseInt(n[2] || 1, 10),
                i, s;
            if (r === 0) throw new Error("Slice step cannot be zero");
            return r > 0 ? (i = parseInt(n[0] || 0, 10), s = parseInt(n[1] || t, 10)) : (i = parseInt(n[0] || t - 1, 10), s = parseInt(n[1] || -1, 10)), i < 0 && (i = t + i), s < 0 && n[1] && (s = t + s), r > 0 ? (i = Math.max(Math.min(t, i), 0), s = Math.max(Math.min(t, s), 0)) : (i = Math.max(Math.min(t - 1, i), -1), s = Math.max(Math.min(t - 1, s), -1)), [i, s, r]
        }
        var i = parseInt(e, 10);
        i < 0 && (i = t + i);
        if (i < 0 || i > t) throw new Error(N(e));
        return i = Math.max(Math.min(t - 1, i), 0), [i, i + 1, 1]
    }

    function g(e) {
        var t = e[0];
        for (var n = 1; n < e.length; n++) t *= e[n];
        return t
    }

    function y(e) {
        var t = 1,
            n = e[0];
        while (n instanceof Array) n = n[0], t++;
        return t
    }

    function b(e) {
        var t = [e.length],
            n = e[0];
        while (n instanceof Array) t.push(n.length), n = n[0];
        return t
    }

    function w(e, t) {
        if (t == e.length - 1) return 1;
        var n = e[t + 1];
        for (var r = t + 2; r < e.length; r++) n *= e[r];
        return n
    }

    function E(e) {
        var t = [],
            n = 1,
            r = g(e);
        for (var i = 0; i < e.length; i++) n *= e[i], t.push(r / n);
        return t
    }

    function S(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }

    function x(e, t) {
        return "Shape (" + e.toString() + ") (" + t.toString() + ") could not be broadcast together"
    }

    function T(e) {
        return "Axis " + e + " out of bounds"
    }

    function N(e) {
        return "Index " + e + " out of bounds"
    }
    var t = e("./kwargs"),
        n = Array.prototype.slice;
    this.Int32Array = window.Int32Array || Array, this.Int16Array = window.Int16Array || Array, this.Int8Array = window.Int8Array || Array, this.Uint32Array = window.Uint32Array || Array, this.Uint16Array = window.Uint16Array || Array, this.Uint8Array = window.Uint8Array || Array, this.Float32Array = window.Float32Array || Array, this.Float64Array = window.Float64Array || Array;
    var r = {
            int32: this.Int32Array,
            int16: this.Int16Array,
            int8: this.Int8Array,
            uint32: this.Uint32Array,
            uint16: this.Uint16Array,
            uint8: this.Uint8Array,
            uint8c: this.Uint8ClampedArray,
            float32: this.Float32Array,
            float64: this.Float64Array,
            number: Array
        },
        i = {
            int32: 4,
            int16: 2,
            int8: 1,
            uint32: 4,
            uint16: 2,
            uint8: 1,
            uint8c: 1,
            float32: 4,
            float64: 8,
            number: 1
        },
        s = 0,
        o = 1,
        u = 2,
        a = 3,
        f = 4,
        l = 5,
        c = 6,
        h = 7,
        p = 8,
        v = function(e) {
            var t = arguments[arguments.length - 1];
            typeof t == "string" ? this._dtype = t : this._dtype = d(e);
            if (e && typeof e != "string") {
                if (e instanceof v) return e._dtype = this._dtype, e;
                typeof e.length != "undefined" ? this.initFromArray(e) : typeof e == "number" && this.initFromShape.apply(this, arguments)
            } else this._array = new r[this._dtype], this._shape = [0], this._size = 0
        };
    return v.prototype = {
        initFromArray: function(e) {
            function i(e, r, s) {
                var o = s.length;
                for (var u = 0; u < o; u++) e < t - 1 ? i(e + 1, r, s[u]) : r[n++] = s[u]
            }
            var t = y(e),
                n = 0,
                s = b(e),
                o = g(s);
            return this._array = new r[this._dtype](o), i(0, this._array, e), this._shape = s, this._size = o, this
        },
        initFromShape: function(e) {
            typeof e == "number" && (e = Array.prototype.slice.call(arguments));
            if (e) {
                var t = g(e);
                if (this._dtype === "number") {
                    this._array = [];
                    var n = this._array;
                    for (var i = 0; i < t; i++) n[i] = 0
                } else this._array = new r[this._dtype](t)
            }
            return this._shape = e, this._size = g(e), this
        },
        fill: function(e) {
            var t = this._array;
            for (var n = 0; n < t.length; n++) t[n] = e;
            return this
        },
        shape: function() {
            return this._shape.slice()
        },
        size: function() {
            return this._size
        },
        dtype: function() {
            return this._dtype
        },
        dimension: function() {
            return this._shape.length
        },
        strides: function() {
            var e = E(this._shape),
                t = i[this._dtype];
            for (var n = 0; n < e.length; n++) e[n] *= t;
            return e
        },
        reshape: function(e) {
            typeof e == "number" && (e = Array.prototype.slice.call(arguments));
            if (!this._isShapeValid(e)) throw new Error("Total size of new array must be unchanged");
            return this._shape = e, this
        },
        _isShapeValid: function(e) {
            return g(e) === this._size
        },
        resize: function(e) {
            typeof e == "number" && (e = Array.prototype.slice.call(arguments));
            var t = g(e);
            if (t < this._size) this._dtype === "number" && (this._array.length = t);
            else if (this._dtype === "number")
                for (var n = this._array.length; n < t; n++) this._array[n] = 0;
            else {
                var i = new r[this._dtype](t),
                    s = this._array;
                for (var n = 0; n < s.length; n++) i[n] = s[n];
                this._array = i
            }
            return this._shape = e, this._size = t, this
        },
        transpose: t(function(e, t) {
            var n = [];
            for (var r = 0; r < this._shape.length; r++) n.push(r);
            typeof e == "undefined" && (e = n.slice());
            for (var r = 0; r < e.length; r++)
                if (e[r] >= this._shape.length) throw new Error(T(e[r]));
            if (e.length <= 1) return this;
            var i = n.slice();
            for (var r = 0; r < Math.floor(e.length / 2); r++)
                for (var s = e.length - 1; s >= Math.ceil(e.length / 2); s--) i[e[r]] = e[s], i[e[s]] = e[r];
            return this._transposelike(i, t)
        }),
        swapaxes: t(function(e, t, n) {
            return this.transpose([e, t], n)
        }),
        rollaxis: t(function(e, t, n) {
            if (e >= this._shape.length) throw new Error(T(e));
            var r = [];
            for (var i = 0; i < this._shape.length; i++) r.push(i);
            return r.splice(e, 1), r.splice(t, 0, e), this._transposelike(r, n)
        }, {
            start: 0
        }),
        _transposelike: function(e, t) {
            function p(e, t, r) {
                var u = i[e],
                    a = s[e],
                    f = c[e];
                if (e < o - 1)
                    for (var l = 0; l < u; l++) p(e + 1, t + a * l, r + f * l);
                else
                    for (var l = 0; l < u; l++) h[r + l] = n[t + a * l]
            }
            var n = this._array,
                i = this._shape.slice(),
                s = E(this._shape),
                o = i.length,
                u = [],
                a = [];
            for (var f = 0; f < e.length; f++) {
                var l = e[f];
                a[f] = i[l], u[f] = s[l]
            }
            s = u, i = a, this._shape = i;
            var c = E(this._shape);
            t || (t = new v, t._shape = this._shape.slice(), t._dtype = this._dtype, t._size = this._size);
            var h = new r[this._dtype](this._size);
            return t._array = h, p(0, 0, 0), t
        },
        repeat: t(function(e, t, n) {
            var r;
            typeof t == "undefined" ? (r = [this._size], t = 0) : r = this._shape.slice();
            var i = r.slice();
            r[t] *= e;
            if (!n) n = new v(this._dtype), n.initFromShape(r);
            else if (!S(r, n._shape)) throw new Error(x(r, n._shape));
            var s = n._array,
                o = w(i, t),
                u = i[t],
                a = this._array,
                f = o * u;
            for (var l = 0; l < this._size; l += f)
                for (var c = 0; c < o; c++) {
                    var h = l + c,
                        p = l * e + c;
                    for (var d = 0; d < u; d++) {
                        for (var m = 0; m < e; m++) s[p] = a[h], p += o;
                        h += o
                    }
                }
            return n
        }),
        choose: function() {
            console.warn("TODO")
        },
        take: function() {
            console.warn("TODO")
        },
        tile: function() {
            console.warn("TODO")
        },
        _withPreprocess1: function(e, t, n, r) {
            var i = this._array;
            if (!this._size) return;
            if (typeof e != "undefined") {
                e < 0 && (e = this._shape.length + e);
                if (e >= this._shape.length || e < 0) throw new Error(T(e));
                var s = this._shape.slice();
                s.splice(e, 1);
                if (t && !S(s, t._shape)) throw new Error(x(s, t._shape));
                t || (t = new v(this._dtype), t.initFromShape(s));
                var o = t._array,
                    u = w(this._shape, e),
                    a = this._shape[e],
                    f = u * a;
                return n.call(this, o, i, f, a, u), t
            }
            return r.call(this, i)
        },
        _withPreprocess2: function(e, t, n, r) {
            var i = this._array;
            if (!this._size) return;
            if (t && !S(this._shape, t._shape)) throw new Error(x(this._shape, t._shape));
            t || (t = new v(this._dtype), t.initFromShape(this._shape));
            var s = t._array;
            if (typeof e != "undefined") {
                e < 0 && (e = this._shape.length + e);
                if (e >= this._shape.length || e < 0) throw new Error(T(e));
                if (e >= this._shape.length) throw new Error(T(e));
                var o = w(this._shape, e),
                    u = this._shape[e],
                    a = o * u;
                n.call(this, s, i, a, u, o)
            } else t.reshape([this._size]), r.call(this, s, i);
            return t
        },
        max: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = u + o,
                            f = t[a];
                        for (var l = 0; l < r; l++) {
                            var c = t[a];
                            c > f && (f = c), a += i
                        }
                        e[s++] = f
                    }
            }

            function t(e) {
                var t = e[0];
                for (var n = 1; n < this._size; n++) e[n] > t && (t = e[n]);
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        min: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = u + o,
                            f = t[a];
                        for (var l = 0; l < r; l++) {
                            var c = t[a];
                            c < f && (f = c), a += i
                        }
                        e[s++] = f
                    }
            }

            function t(e) {
                var t = e[0];
                for (var n = 1; n < this._size; n++) e[n] < t && (t = e[n]);
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        argmax: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0,
                            f = u + o,
                            l = t[f];
                        for (var c = 0; c < r; c++) {
                            var h = t[f];
                            h > l && (l = h, a = c), f += i
                        }
                        e[s++] = a
                    }
            }

            function t(e) {
                var t = e[0],
                    n = 0;
                for (var r = 1; r < this._size; r++) e[r] > t && (n = r, t = e[r]);
                return n
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        argmin: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0,
                            f = u + o,
                            l = t[f];
                        for (var c = 0; c < r; c++) {
                            var h = t[f];
                            h < l && (l = h, a = c), f += i
                        }
                        e[s++] = a
                    }
            }

            function t(e) {
                var t = e[0],
                    n = 0;
                for (var r = 1; r < this._size; r++) e[r] < t && (n = r, t = e[r]);
                return n
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        sum: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0,
                            f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        e[s++] = a
                    }
            }

            function t(e) {
                var t = 0;
                for (var n = 0; n < this._size; n++) t += e[n];
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        prod: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 1,
                            f = u + o;
                        for (var l = 0; l < r; l++) a *= t[f], f += i;
                        e[s++] = a
                    }
            }

            function t(e) {
                var t = 1;
                for (var n = 0; n < this._size; n++) t *= e[n];
                return t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        mean: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0,
                            f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        var c = a / r;
                        e[s++] = c
                    }
            }

            function t(e) {
                var t = 0,
                    n = e.length;
                for (var r = 0; r < n; r++) t += e[r];
                var i = t / n;
                return i
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        "var": t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0,
                            f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        var c = a / r,
                            h = 0;
                        f = u + o;
                        for (var l = 0; l < r; l++) {
                            var p = t[f] - c;
                            h += p * p, f += i
                        }
                        e[s++] = h / r
                    }
            }

            function t(e) {
                var t = 0,
                    n = e.length;
                for (var r = 0; r < n; r++) t += e[r];
                var i = t / n,
                    s = 0;
                for (var r = 0; r < n; r++) {
                    var o = e[r] - i;
                    s += o * o
                }
                return s / n
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        std: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = 0,
                            f = u + o;
                        for (var l = 0; l < r; l++) a += t[f], f += i;
                        var c = a / r,
                            h = 0;
                        f = u + o;
                        for (var l = 0; l < r; l++) {
                            var p = t[f] - c;
                            h += p * p, f += i
                        }
                        e[s++] = Math.sqrt(h / r)
                    }
            }

            function t(e) {
                var t = 0,
                    n = e.length;
                for (var r = 0; r < n; r++) t += e[r];
                var i = t / n,
                    s = 0;
                for (var r = 0; r < n; r++) {
                    var o = e[r] - i;
                    s += o * o
                }
                return Math.sqrt(s / n)
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        ptp: t(function() {
            function e(e, t, n, r, i) {
                var s = 0;
                for (var o = 0; o < this._size; o += n)
                    for (var u = 0; u < i; u++) {
                        var a = o + u,
                            f = t[a],
                            l = t[a];
                        for (var c = 0; c < r; c++) {
                            var h = t[a];
                            h < f && (f = h), h > l && (l = h), a += i
                        }
                        e[s++] = l - f
                    }
            }

            function t(e) {
                var t = e[0],
                    n = e[0];
                for (var r = 1; r < this._size; r++) e[r] < t && (t = e[r]), e[r] > n && (n = e[r]);
                return n - t
            }
            return function(n, r) {
                return this._withPreprocess1(n, r, e, t)
            }
        }()),
        sort: t(function(e, t) {
            e < 0 && (e = this._shape.length + e);
            var n;
            t === "ascending" ? n = function(e, t) {
                return e - t
            } : t === "descending" && (n = function(e, t) {
                return t - e
            });
            var r = this._array,
                i = w(this._shape, e),
                s = this._shape[e],
                o = i * s,
                u = new Array(s);
            for (var a = 0; a < this._size; a += o)
                for (var f = 0; f < i; f++) {
                    var l = a + f;
                    for (var c = 0; c < s; c++) u[c] = r[l], l += i;
                    u.sort(n);
                    var l = a + f;
                    for (var c = 0; c < s; c++) r[l] = u[c], l += i
                }
            return this
        }, {
            axis: -1,
            order: "ascending"
        }),
        argsort: t(function(e, t, n) {
            e < 0 && (e = this._shape.length + e);
            if (!this._size) return;
            if (n && !S(this._shape, n._shape)) throw new Error(x(this._shape, n._shape));
            n || (n = new v(this._dtype), n.initFromShape(this._shape));
            var r = n._array,
                i;
            t === "ascending" ? i = function(e, t) {
                return f[e] - f[t]
            } : t === "descending" && (i = function(e, t) {
                return f[t] - f[e]
            });
            var s = this._array,
                o = w(this._shape, e),
                u = this._shape[e],
                a = o * u,
                f = new Array(u),
                l = new Array(u);
            for (var c = 0; c < this._size; c += a)
                for (var h = 0; h < o; h++) {
                    var p = c + h;
                    for (var d = 0; d < u; d++) f[d] = s[p], l[d] = d, p += o;
                    l.sort(i);
                    var p = c + h;
                    for (var d = 0; d < u; d++) r[p] = l[d], p += o
                }
            return n
        }, {
            axis: -1,
            order: "ascending"
        }),
        cumsum: t(function() {
            function e(e, t, n, r, i) {
                for (var s = 0; s < this._size; s += n)
                    for (var o = 0; o < i; o++) {
                        var u = s + o,
                            a = u;
                        e[u] = t[u];
                        for (var f = 1; f < r; f++) a = u, u += i, e[u] = e[a] + t[u]
                    }
            }

            function t(e, t) {
                e[0] = t[0];
                for (var n = 1; n < e.length; n++) e[n] = e[n - 1] + t[n]
            }
            return function(n, r) {
                return this._withPreprocess2(n, r, e, t)
            }
        }()),
        cumprod: t(function() {
            function e(e, t, n, r, i) {
                for (var s = 0; s < this._size; s += n)
                    for (var o = 0; o < i; o++) {
                        var u = s + o,
                            a = u;
                        e[u] = t[u];
                        for (var f = 1; f < r; f++) a = u, u += i, e[u] = e[a] * t[u]
                    }
            }

            function t(e, t) {
                e[0] = t[0];
                for (var n = 1; n < e.length; n++) e[n] = e[n - 1] * t[n]
            }
            return function(n, r) {
                return this._withPreprocess2(n, r, e, t)
            }
        }()),
        dot: function() {
            console.warn("TODO")
        },
        map: function(e, t) {
            var n = this._array,
                r = this._array,
                i = n[0],
                s = n[0],
                o = this._size;
            for (var u = 1; u < o; u++) {
                var a = n[u];
                a < i && (i = a), a > s && (s = a)
            }
            var f = s - i,
                l = t - e;
            for (var u = 0; u < o; u++)
                if (f === 0) r[u] = e;
                else {
                    var a = n[u],
                        c = (a - i) / f;
                    r[u] = l * c + e
                }
            return this
        },
        add: function(e, t) {
            return this.binaryOperation(this, e, s, t)
        },
        sub: function(e, t) {
            return this.binaryOperation(this, e, o, t)
        },
        mul: function(e, t) {
            return this.binaryOperation(this, e, u, t)
        },
        div: function(e, t) {
            return this.binaryOperation(this, e, a, t)
        },
        mod: function(e, t) {
            return this.binaryOperation(this, e, f, t)
        },
        and: function(e, t) {
            return this.binaryOperation(this, e, l, t)
        },
        or: function(e, t) {
            return this.binaryOperation(this, e, c, t)
        },
        xor: function(e, t) {
            return this.binaryOperation(this, e, h, t)
        },
        equal: function(e) {
            return this.binaryOperation(this, e, p, out)
        },
        binaryOperation: function(e, t, n, r) {
            var i = [],
                d = typeof e == "number",
                m = typeof t == "number";
            if (d) i = t._shape.slice();
            else if (m) i = e._shape.slice();
            else {
                var g = e._shape.length - 1,
                    y = t._shape.length - 1,
                    b = e,
                    E = t;
                while (g >= 0 && y >= 0) {
                    if (e._shape[g] == 1) i.unshift(t._shape[y]), b = e.repeat(t._shape[y], g);
                    else if (t._shape[y] == 1) i.unshift(e._shape[g]), E = t.repeat(e._shape[g], y);
                    else {
                        if (t._shape[y] != e._shape[g]) throw new Error(x(e._shape, t._shape));
                        i.unshift(e._shape[g])
                    }
                    g--, y--
                }
                for (var T = g; T >= 0; T--) i.unshift(e._shape[T]);
                for (var T = y; T >= 0; T--) i.unshift(t._shape[T]);
                e = b, t = E
            }
            if (!r) r = new v(this._dtype), r.initFromShape(i);
            else if (!S(i, r._shape)) throw new Error(x(i, r._shape));
            var N = r._array,
                C, k, L, A;
            d ? (C = t._shape.length - 1, k = !1, L = e, A = t._array) : m ? (C = e._shape.length - 1, k = !0, A = t, L = e._array) : (C = Math.abs(e._shape.length - t._shape.length), k = e._shape.length >= t._shape.length, L = e._array, A = t._array);
            var O = w(i, C),
                M = i[C],
                _ = O * M,
                D = r._size / _,
                P, H, B, j = 0;
            if (k)
                if (m)
                    for (var F = 0; F < D; F++)
                        for (var T = 0; T < _; T++) {
                            P = L[j], H = A;
                            switch (n) {
                                case s:
                                    B = P + H;
                                    break;
                                case o:
                                    B = P - H;
                                    break;
                                case u:
                                    B = P * H;
                                    break;
                                case a:
                                    B = P / H;
                                    break;
                                case f:
                                    B = P % H;
                                    break;
                                case l:
                                    B = P & H;
                                    break;
                                case c:
                                    B = P | H;
                                    break;
                                case h:
                                    B = P ^ H;
                                    break;
                                case p:
                                    B = P == H;
                                    break;
                                default:
                                    throw new Error("Unkown operation " + n)
                            }
                            N[j] = B, j++
                        } else
                            for (var F = 0; F < D; F++)
                                for (var T = 0; T < _; T++) {
                                    P = L[j], H = A[T];
                                    switch (n) {
                                        case s:
                                            B = P + H;
                                            break;
                                        case o:
                                            B = P - H;
                                            break;
                                        case u:
                                            B = P * H;
                                            break;
                                        case a:
                                            B = P / H;
                                            break;
                                        case f:
                                            B = P % H;
                                            break;
                                        case l:
                                            B = P & H;
                                            break;
                                        case c:
                                            B = P | H;
                                            break;
                                        case h:
                                            B = P ^ H;
                                            break;
                                        case p:
                                            B = P == H;
                                            break;
                                        default:
                                            throw new Error("Unkown operation " + n)
                                    }
                                    N[j] = B, j++
                                } else if (d)
                                    for (var F = 0; F < D; F++)
                                        for (var T = 0; T < _; T++) {
                                            P = L, H = A[j];
                                            switch (n) {
                                                case s:
                                                    B = P + H;
                                                    break;
                                                case o:
                                                    B = P - H;
                                                    break;
                                                case u:
                                                    B = P * H;
                                                    break;
                                                case a:
                                                    B = P / H;
                                                    break;
                                                case f:
                                                    B = P % H;
                                                    break;
                                                case l:
                                                    B = P & H;
                                                    break;
                                                case c:
                                                    B = P | H;
                                                    break;
                                                case h:
                                                    B = P ^ H;
                                                    break;
                                                case p:
                                                    B = P == H;
                                                    break;
                                                default:
                                                    throw new Error("Unkown operation " + n)
                                            }
                                            N[j] = B, j++
                                        } else
                                            for (var F = 0; F < D; F++)
                                                for (var T = 0; T < _; T++) {
                                                    P = L[j], H = A[T];
                                                    switch (n) {
                                                        case s:
                                                            B = P + H;
                                                            break;
                                                        case o:
                                                            B = P - H;
                                                            break;
                                                        case u:
                                                            B = P * H;
                                                            break;
                                                        case a:
                                                            B = P / H;
                                                            break;
                                                        case f:
                                                            B = P % H;
                                                            break;
                                                        case l:
                                                            B = P & H;
                                                            break;
                                                        case c:
                                                            B = P | H;
                                                            break;
                                                        case h:
                                                            B = P ^ H;
                                                            break;
                                                        case p:
                                                            B = P == H;
                                                            break;
                                                        default:
                                                            throw new Error("Unkown operation " + n)
                                                    }
                                                    N[j] = B, j++
                                                }
                                return r
        },
        neg: function() {
            var e = this._array;
            for (var t = 0; t < this._size; t++) e[t] = -e[t];
            return this
        },
        sin: function() {
            return this._mathAdapter(Math.sin)
        },
        cos: function() {
            return this._mathAdapter(Math.cos)
        },
        tan: function() {
            return this._mathAdapter(Math.tan)
        },
        abs: function() {
            return this._mathAdapter(Math.abs)
        },
        log: function() {
            return this._mathAdapter(Math.log)
        },
        sqrt: function() {
            return this._mathAdapter(Math.sqrt)
        },
        ceil: function() {
            return this._mathAdapter(Math.ceil)
        },
        floor: function() {
            return this._mathAdapter(Math.floor)
        },
        pow: function(e) {
            var t = this._array;
            for (var n = 0; n < this._size; n++) t[n] = Math.pow(t[n], e);
            return this
        },
        _mathAdapter: function(e) {
            var t = this._array;
            for (var n = 0; n < this._size; n++) t[n] = e(t[n]);
            return this
        },
        round: function(e) {
            e = Math.floor(e || 0);
            var t = Math.pow(10, e),
                n = this._array;
            if (e === 0)
                for (var r = 0; r < this._size; r++) n[r] = Math.round(n[r]);
            else
                for (var r = 0; r < this._size; r++) n[r] = Math.round(n[r] * t) / t;
            return this
        },
        clip: function(e, t) {
            var n = this._array;
            for (var r = 0; r < this._size; r++) n[r] = Math.max(Math.min(n[r], t), e);
            return this
        },
        get: function(e, t) {
            function l(e, t) {
                var r = i[e],
                    s = n[e];
                if (e < o - 1)
                    if (r[2] > 0)
                        for (var c = r[0]; c < r[1]; c += r[2]) l(e + 1, t + s * c);
                    else
                        for (var c = r[0]; c > r[1]; c += r[2]) l(e + 1, t + s * c);
                else if (r[2] > 0)
                    for (var c = r[0]; c < r[1]; c += r[2])
                        for (var h = 0; h < s; h++) u[f++] = a[c * s + h + t];
                else
                    for (var c = r[0]; c > r[1]; c += r[2])
                        for (var h = 0; h < s; h++) u[f++] = a[c * s + h + t]
            }
            typeof e == "number" && (e = e.toString());
            var n = E(this._shape),
                r = this._parseRanges(e),
                i = r[0],
                s = r[1];
            if (i.length > this._shape.length) throw new Error("Too many indices");
            var o = i.length,
                u;
            s.length ? (t = new v(this._dtype), t.initFromShape(s), u = t._array) : u = [];
            var a = this._array,
                f = 0;
            return l(0, 0), s.length ? t : u[0]
        },
        set: function(e, t) {
            typeof e == "number" && (e = e.toString());
            var n = E(this._shape),
                r = this._parseRanges(e),
                i = r[0],
                s = r[1];
            if (i.length > this._shape.length) throw new Error("Too many indices");
            var o = typeof t == "number",
                u = i.length,
                a = this._array;
            if (o) var f = t;
            else {
                if (!S(s, t.shape())) throw new Error(x(s, t.shape()));
                var f = t._array
            }
            var l = 0,
                c = function(e, t) {
                    var r = i[e],
                        s = n[e];
                    if (e < u - 1)
                        if (r[2] > 0)
                            for (var h = r[0]; h < r[1]; h += r[2]) c(e + 1, t + s * h);
                        else
                            for (var h = r[0]; h > r[1]; h += r[2]) c(e + 1, t + s * h);
                    else if (r[2] > 0)
                        for (var h = r[0]; h < r[1]; h += r[2])
                            for (var p = 0; p < s; p++) o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++];
                    else
                        for (var h = r[0]; h > r[1]; h += r[2])
                            for (var p = 0; p < s; p++) o ? a[h * s + p + t] = f : a[h * s + p + t] = f[l++]
                };
            return c(0, 0), this
        },
        insert: t(function(e, t, n) {
            var i = this._array,
                s = !1;
            typeof e == "number" && (e = [e], s = !0), typeof t == "number" ? t = new v([t]) : t instanceof Array && (t = new v(t)), typeof n == "undefined" && (this._shape = [this._size], n = 0);
            var o = e[0],
                u = this._shape[n];
            for (var a = 0; a < e.length; a++) {
                e[a] < 0 && (e[a] = u + e[a]);
                if (e[a] > u) throw new Error(N(e[a]));
                if (e[a] < o) throw new Error("Index must be in ascending order");
                o = e[a]
            }
            var f = this._shape.slice();
            s ? f.splice(n, 1) : f[n] = e.length;
            var l = t._shape,
                c = l.length - 1,
                h = f.length - 1,
                p = t;
            while (c >= 0 && h >= 0) {
                if (l[c] === 1) p = t.repeat(f[h], c);
                else if (l[c] !== f[h]) throw new Error(x(l, f));
                c--, h--
            }
            t = p;
            var d = w(this._shape, n),
                u = this._shape[n],
                m = u * d,
                y = this._size / m,
                b = e.length,
                E = new Uint32Array(y * b),
                S = 0;
            for (var T = 0; T < this._size; T += m)
                for (var a = 0; a < b; a++) {
                    var C = e[a];
                    E[S++] = T + C * d
                }
            var k = this._shape.slice();
            k[n] += e.length;
            var L = g(k);
            if (this._array.length < L) var i = new r[this._dtype](L);
            else var i = this._array;
            var A = this._array,
                O = t._array,
                M = E.length - 1,
                _ = this._size,
                D = E[M],
                P = L - 1,
                H = t._size - 1;
            while (M >= 0) {
                for (var a = _ - 1; a >= D; a--) i[P--] = A[a];
                _ = D, D = E[--M];
                for (var a = 0; a < d; a++) H < 0 && (H = t._size - 1), i[P--] = O[H--]
            }
            for (var a = _ - 1; a >= 0; a--) i[P--] = A[a];
            return this._array = i, this._shape = k, this._size = L, this
        }),
        append: function() {
            console.warn("TODO")
        },
        "delete": t(function(e, t) {
            var n = this._array;
            typeof e == "number" && (e = [e]);
            var r = this._size;
            typeof t == "undefined" && (this._shape = [r], t = 0);
            var i = w(this._shape, t),
                s = this._shape[t],
                o = i * s,
                u = 0;
            for (var a = 0; a < r; a += o) {
                var f = 0,
                    l = e[0],
                    c = 0;
                while (c < e.length) {
                    l < 0 && (l += s);
                    if (l > s) throw new Error(N(l));
                    if (l < f) throw new Error("Index must be in ascending order");
                    for (var h = f; h < l; h++)
                        for (var p = 0; p < i; p++) n[u++] = n[h * i + p + a];
                    f = l + 1, l = e[++c]
                }
                for (var h = f; h < s; h++)
                    for (var p = 0; p < i; p++) n[u++] = n[h * i + p + a]
            }
            return this._shape[t] -= e.length, this._size = g(this._shape), this
        }),
        _parseRanges: function(e) {
            var t = e.split(/\s*,\s*/),
                n = [],
                r = [],
                i = 0;
            for (var s = 0; s < t.length; s++)
                if (t[s] === "...") {
                    var o = this._shape.length - (t.length - s);
                    while (i <= o) n.push([0, this._shape[i], 1]), r.push(this._shape[i]), i++
                } else {
                    var u = m(t[s], this._shape[i]);
                    n.push(u);
                    if (t[s].indexOf(":") >= 0) {
                        var a = Math.floor((u[1] - u[0]) / u[2]);
                        a = a < 0 ? 0 : a, r.push(a)
                    }
                    i++
                }
            for (; i < this._shape.length; i++) r.push(this._shape[i]);
            return [n, r]
        },
        toArray: function() {
            function i(s, o) {
                var u = n[s];
                for (var a = 0; a < u; a++) s < r - 1 ? i(s + 1, o[a] = []) : o[a] = e[t++]
            }
            var e = this._array,
                t = 0,
                n = this._shape,
                r = n.length,
                s = [];
            return i(0, s), s
        },
        copy: function() {
            var e = new v;
            return e._array = n.call(this._array), e._shape = this._shape.slice(), e._dtype = this._dtype, e._size = this._size, e
        },
        constructor: v
    }, v.range = t(function(e, t, i, s) {
        var o = n.call(arguments),
            u = o[o.length - 1];
        if (typeof u == "string") {
            var s = u;
            o.pop()
        }
        o.length === 1 ? (t = o[0], i = 1, e = 0) : o.length == 2 && (i = 1), s = s || "number";
        var a = new r[s](Math.ceil((t - e) / i)),
            f = 0;
        for (var l = e; l < t; l += i) a[f++] = l;
        var c = new v;
        return c._array = a, c._shape = [a.length], c._dtype = s, c._size = a.length, c
    }), v.zeros = t(function(e, t) {
        var n = new v(t);
        return n.initFromShape(e), n
    }), v
}), define("echarts/chart/chord", ["require", "../component/base", "./base", "zrender/shape/Text", "zrender/shape/Line", "zrender/shape/Sector", "../util/shape/Chord", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/vector", "../util/ndarray", "../chart"], function(e) {
    function p(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/Text"),
        i = e("zrender/shape/Line"),
        s = e("zrender/shape/Sector"),
        o = e("../util/shape/Chord"),
        u = e("../config"),
        a = e("../util/ecData"),
        f = e("zrender/tool/util"),
        l = e("zrender/tool/vector"),
        c = e("../util/ndarray"),
        h = window.devicePixelRatio || 1;
    return p.prototype = {
        type: u.CHART_TYPE_CHORD,
        _buildShape: function() {
            var e = this.series;
            this.selectedMap = {}, this.chordSeries = [], this.chordSerieSample = null;
            var t = [],
                n = 0;
            for (var r = 0, i = e.length; r < i; r++)
                if (e[r].type === this.type) {
                    this.chordSerieSample || (this.chordSerieSample = e[r], this.reformOption(this.chordSerieSample));
                    var s = this.isSelected(e[r].name);
                    this.selectedMap[e[r].name] = s;
                    if (!s) continue;
                    this.chordSeries.push(e[r]), this.buildMark(r), t.push(e[r].matrix), n++
                }
            if (!this.chordSerieSample) return;
            if (!this.chordSeries.length) return;
            var o = this.zr.getWidth(),
                u = this.zr.getHeight(),
                a = Math.min(o, u);
            this.groups = this.chordSerieSample.data, this.startAngle = this.chordSerieSample.startAngle, this.startAngle = this.startAngle % 360, this.startAngle < 0 && (this.startAngle = this.startAngle + 360), this.clockWise = this.chordSerieSample.clockWise, this.innerRadius = this.parsePercent(this.chordSerieSample.radius[0], a / 2), this.outerRadius = this.parsePercent(this.chordSerieSample.radius[1], a / 2), this.padding = this.chordSerieSample.padding, this.sortGroups = this.chordSerieSample.sort, this.sortSubGroups = this.chordSerieSample.sortSub, this.showScale = this.chordSerieSample.showScale, this.showScaleText = this.chordSerieSample.showScaleText, this.center = [this.parsePercent(this.chordSerieSample.center[0], o), this.parsePercent(this.chordSerieSample.center[1], u)];
            var f = this.chordSerieSample.itemStyle.normal.chordStyle.lineStyle.width - this.chordSerieSample.itemStyle.normal.lineStyle.width;
            this.strokeFix = f / h / this.innerRadius / Math.PI * 180, this.dataMat = new c(t), this.dataMat = this.dataMat._transposelike([1, 2, 0]);
            var l = this._filterData(this.dataMat, this.groups);
            this.dataMat = l[0], this.groups = l[1];
            var p = this.dataMat.shape();
            if (p[0] !== p[1] || p[0] !== this.groups.length) throw new Error("Data not valid");
            if (p[0] === 0 || p[2] === 0) return;
            this.dataMat.reshape(p[0], p[1] * p[2]);
            var d = this.dataMat.sum(1),
                v = d.mul(1 / d.sum()),
                m = p[0],
                g = p[1] * p[2],
                y = v.mul(360 - this.padding * m),
                b = this.dataMat.div(this.dataMat.sum(1).reshape(m, 1));
            b = b.mul(y.sub(this.strokeFix * 2).reshape(m, 1));
            switch (this.sortGroups) {
                case "ascending":
                case "descending":
                    var w = y.argsort(0, this.sortGroups);
                    y.sort(0, this.sortGroups), d.sort(0, this.sortGroups);
                    break;
                default:
                    var w = c.range(p[0])
            }
            switch (this.sortSubGroups) {
                case "ascending":
                case "descending":
                    var E = b.argsort(1, this.sortSubGroups);
                    b.sort(1, this.sortSubGroups);
                    break;
                default:
                    var E = c.range(g).reshape(1, g).repeat(m, 0)
            }
            var S = w.toArray(),
                x = y.toArray(),
                T = E.toArray(),
                N = b.toArray(),
                C = d.toArray(),
                k = [],
                L = (new c(m, g)).toArray(),
                A = [],
                O = 0,
                M = 0;
            for (var r = 0; r < m; r++) {
                var _ = S[r];
                A[_] = C[r], M = O + x[r], k[_] = [O, M];
                var D = O + this.strokeFix,
                    P = D;
                for (var H = 0; H < g; H++) {
                    P = D + N[_][H];
                    var B = T[_][H];
                    L[_][B] = [D, P], D = P
                }
                O = M + this.padding
            }
            this.chordShapes = (new c(m, m, n)).toArray(), this.sectorShapes = [], this._buildSectors(k, A), L = (new c(L)).reshape(m, m, n, 2).toArray(), this._buildChords(L, this.dataMat.reshape(p).toArray());
            var l = this.normalizeValue(A);
            this.showScale && this._buildScales(l[0], l[1], k, (new c(l[0])).sum() / (360 - this.padding * m)), this.addShapeList()
        },
        _filterData: function(e, t) {
            var n = [],
                r = [];
            for (var i = 0; i < t.length; i++) {
                var s = t[i].name;
                this.selectedMap[s] = this.isSelected(s), this.selectedMap[s] ? r.push(t[i]) : n.push(i)
            }
            n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1));
            if (!e.size()) return [e, r];
            n = [];
            var o = [],
                u = e.shape();
            e.reshape(u[0], u[1] * u[2]);
            var a = e.sum(1).toArray();
            e.reshape(u);
            for (var i = 0; i < r.length; i++) a[i] === 0 ? n.push(i) : o.push(r[i]);
            return n.length && (e = e["delete"](n, 0), e = e["delete"](n, 1)), [e, o]
        },
        _buildSectors: function(e, t) {
            function d(e) {
                return function() {
                    o && clearTimeout(o), o = setTimeout(function() {
                        for (var t = 0; t < n; t++) {
                            p.sectorShapes[t].style.opacity = t === e ? 1 : .1, p.zr.modShape(p.sectorShapes[t].id);
                            for (var r = 0; r < n; r++)
                                for (var s = 0; s < i; s++) {
                                    var o = p.chordShapes[t][r][s];
                                    o && (o.style.opacity = t === e || r === e ? .5 : .03, p.zr.modShape(o.id))
                                }
                        }
                        p.zr.refresh()
                    }, 50)
                }
            }

            function v() {
                return function() {
                    o && clearTimeout(o), o = setTimeout(function() {
                        for (var e = 0; e < n; e++) {
                            p.sectorShapes[e].style.opacity = 1, p.zr.modShape(p.sectorShapes[e].id);
                            for (var t = 0; t < n; t++)
                                for (var r = 0; r < i; r++) {
                                    var s = p.chordShapes[e][t][r];
                                    s && (s.style.opacity = .5, p.zr.modShape(s.id))
                                }
                        }
                        p.zr.refresh()
                    }, 50)
                }
            }
            var n = this.groups.length,
                i = this.chordSeries.length,
                o, u = this.query(this.chordSerieSample, "itemStyle.normal.label.show"),
                f = this.query(this.chordSerieSample, "itemStyle.normal.label.color"),
                c = this.query(this.chordSerieSample, "itemStyle.normal.label.rotate"),
                h = this.query(this.chordSerieSample, "itemStyle.normal.label.distance"),
                p = this;
            for (var m = 0; m < n; m++) {
                var g = this.groups[m],
                    y = e[m],
                    b = (this.clockWise ? 360 - y[1] : y[0]) + this.startAngle,
                    w = (this.clockWise ? 360 - y[0] : y[1]) + this.startAngle,
                    E = {
                        zlevel: this._zlevelBase,
                        style: {
                            x: this.center[0],
                            y: this.center[1],
                            r0: this.innerRadius,
                            r: this.outerRadius,
                            startAngle: b,
                            endAngle: w,
                            brushType: "fill",
                            opacity: 1,
                            color: this.getColor(g.name)
                        },
                        clickable: !0,
                        highlightStyle: {
                            brushType: "fill"
                        }
                    };
                E.style.lineWidth = this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.lineStyle.width"), E.highlightStyle.lineWidth = this.deepQuery([g, this.chordSerieSample], "itemStyle.emphasis.lineStyle.width"), E.style.strokeColor = this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.lineStyle.color"), E.highlightStyle.strokeColor = this.deepQuery([g, this.chordSerieSample], "itemStyle.emphasis.lineStyle.color"), E.style.lineWidth > 0 && (E.style.brushType = "both"), E.highlightStyle.lineWidth > 0 && (E.highlightStyle.brushType = "both"), a.pack(E, this.chordSeries[0], 0, t[m], m, g.name);
                if (u) {
                    var S = [b + w] / 2;
                    S %= 360;
                    var x = S <= 90 || S >= 270;
                    S = S * Math.PI / 180;
                    var T = [Math.cos(S), -Math.sin(S)],
                        N = this.showScaleText ? 35 + h : h,
                        C = l.scale([], T, this.outerRadius + N);
                    l.add(C, C, this.center);
                    var k = {
                        zlevel: this._zlevelBase - 1,
                        hoverable: !1,
                        style: {
                            text: g.name,
                            textAlign: x ? "left" : "right",
                            color: f
                        }
                    };
                    c ? (k.rotation = x ? S : Math.PI + S, x ? k.style.x = this.outerRadius + N : k.style.x = -this.outerRadius - N, k.style.y = 0, k.position = this.center) : (k.style.x = C[0], k.style.y = C[1]), k.style.textColor = this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.label.textStyle.color") || "#fff", k.style.textFont = this.getFont(this.deepQuery([g, this.chordSerieSample], "itemStyle.normal.label.textStyle")), k = new r(k), this.shapeList.push(k)
                }
                E.onmouseover = d(m), E.onmouseout = v(), E = new s(E), this.shapeList.push(E), this.sectorShapes.push(E)
            }
        },
        _buildChords: function(e, t) {
            var n = e.length;
            if (!n) return;
            var r = e[0][0].length,
                i = this.chordSerieSample.itemStyle.normal.chordStyle.lineStyle,
                s = this.chordSerieSample.itemStyle.emphasis.chordStyle.lineStyle;
            for (var u = 0; u < n; u++)
                for (var f = 0; f < n; f++)
                    for (var l = 0; l < r; l++) {
                        if (this.chordShapes[f][u][l]) continue;
                        var c = e[u][f][l][0],
                            h = e[f][u][l][0],
                            p = e[u][f][l][1],
                            d = e[f][u][l][1];
                        if (c - d === 0 || h - d === 0) {
                            this.chordShapes[u][f][l] = null;
                            continue
                        }
                        var v;
                        r === 1 ? p - c <= d - h ? v = this.getColor(this.groups[u].name) : v = this.getColor(this.groups[f].name) : v = this.getColor(this.chordSeries[l].name);
                        var m = this.clockWise ? c : 360 - p,
                            g = this.clockWise ? p : 360 - c,
                            y = this.clockWise ? h : 360 - d,
                            b = this.clockWise ? d : 360 - h,
                            w = {
                                zlevel: this._zlevelBase,
                                style: {
                                    center: this.center,
                                    r: this.innerRadius,
                                    source0: m - this.startAngle,
                                    source1: g - this.startAngle,
                                    target0: y - this.startAngle,
                                    target1: b - this.startAngle,
                                    brushType: "both",
                                    opacity: .5,
                                    color: v,
                                    lineWidth: i.width,
                                    strokeColor: i.color
                                },
                                clickable: !0,
                                highlightStyle: {
                                    brushType: "both",
                                    lineWidth: s.width,
                                    strokeColor: s.color
                                }
                            };
                        a.pack(w, this.chordSeries[l], l, t[u][f][l], u + "-" + f, this.groups[u].name, this.groups[f].name, t[f][u][l]), w = new o(w), this.chordShapes[u][f][l] = w, this.shapeList.push(w)
                    }
        },
        _buildScales: function(e, t, n, s) {
            for (var o = 0; o < n.length; o++) {
                var u = n[o][0],
                    a = n[o][1],
                    f = u;
                while (f < a) {
                    var h = ((this.clockWise ? 360 - f : f) + this.startAngle) / 180 * Math.PI,
                        p = [Math.cos(h), -Math.sin(h)],
                        d = l.scale([], p, this.outerRadius + 1);
                    l.add(d, d, this.center);
                    var v = l.scale([], p, this.outerRadius + this.scaleLineLength);
                    l.add(v, v, this.center);
                    var m = {
                        zlevel: this._zlevelBase - 1,
                        hoverable: !1,
                        style: {
                            xStart: d[0],
                            yStart: d[1],
                            xEnd: v[0],
                            yEnd: v[1],
                            lineCap: "round",
                            brushType: "stroke",
                            strokeColor: "#666",
                            lineWidth: 1
                        }
                    };
                    m = new i(m), this.shapeList.push(m), f += this.scaleUnitAngle
                }
                if (!this.showScaleText) continue;
                var g = u,
                    y = s * 5 * this.scaleUnitAngle,
                    b = c.range(0, e[o], y).toArray();
                while (g < a) {
                    var h = this.clockWise ? 360 - g : g;
                    h = (h + this.startAngle) % 360;
                    var w = h <= 90 || h >= 270,
                        E = {
                            zlevel: this._zlevelBase - 1,
                            hoverable: !1,
                            style: {
                                x: w ? this.outerRadius + this.scaleLineLength + 4 : -this.outerRadius - this.scaleLineLength - 4,
                                y: 0,
                                text: Math.round(b.shift() * 10) / 10 + t,
                                textAlign: w ? "left" : "right"
                            },
                            position: this.center.slice(),
                            rotation: w ? [h / 180 * Math.PI, 0, 0] : [(h + 180) / 180 * Math.PI, 0, 0]
                        };
                    E = new r(E), this.shapeList.push(E), g += this.scaleUnitAngle * 5
                }
            }
        },
        normalizeValue: function(e) {
            var t = [],
                n = (new c(e)).max(),
                r, i;
            n > 1e4 ? (r = "k", i = .001) : n > 1e7 ? (r = "m", i = 1e-6) : n > 1e10 ? (r = "b", i = 1e-9) : (r = "", i = 1);
            for (var s = 0; s < e.length; s++) t[s] = e[s] * i;
            return [t, r]
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.chordSeries = [], this.strokeFix = 0, this.sectorShapes = [], this.chordShapes = [], this.scaleLineLength = 4, this.scaleUnitAngle = 4, this.legend = this.component.legend;
            if (this.legend) this.getColor = function(e) {
                return this.legend.getColor(e)
            }, this.isSelected = function(e) {
                return this.legend.isSelected(e)
            };
            else {
                var t = {},
                    n = {},
                    r = 0;
                this.getColor = function(e) {
                    if (n[e]) return n[e];
                    t[e] === undefined && (t[e] = r++);
                    for (var i = 0; i < this.chordSeries.length; i++)
                        if (this.chordSeries[i].name === e) {
                            n[e] = this.query(this.chordSeries[i], "itemStyle.normal.color");
                            break
                        }
                    if (!n[e]) {
                        var s = this.groups.length;
                        for (var i = 0; i < s; i++)
                            if (this.groups[i].name === e) {
                                n[e] = this.query(this.groups[i], "itemStyle.normal.color");
                                break
                            }
                    }
                    return n[e] || (n[e] = this.zr.getColor(t[e])), n[e]
                }, this.isSelected = function() {
                    return !0
                }
            }
            this.backupShapeList(), this._buildShape()
        },
        reformOption: function(e) {
            var t = f.merge;
            e = t(e || {}, this.ecTheme.chord), e.itemStyle.normal.label.textStyle = t(e.itemStyle.normal.label.textStyle || {}, this.ecTheme.textStyle)
        }
    }, f.inherits(p, n), f.inherits(p, t), e("../chart").define("chord", p), p
}), define("echarts/chart/force", ["require", "../component/base", "./base", "zrender/shape/Circle", "zrender/shape/Line", "../util/shape/Icon", "../config", "../util/ecData", "zrender/tool/util", "zrender/config", "zrender/tool/event", "zrender/tool/vector", "../util/ndarray", "../chart"], function(e) {
    function v(e, v, y, b, w) {
        function rt() {
            S = E.legend, W = 1, Y = y.getWidth(), Z = y.getHeight(), et = [Y / 2, Z / 2];
            var e;
            for (var t = 0, n = T.length; t < n; t++) {
                var r = T[t];
                if (r.type === o.CHART_TYPE_FORCE) {
                    T[t] = x.reformOption(T[t]), e = T[t].name || "", x.selectedMap[e] = S ? S.isSelected(e) : !0;
                    if (!x.selectedMap[e]) continue;
                    x.buildMark(t), N = r;
                    var i = x.query(r, "minRadius"),
                        s = x.query(r, "maxRadius");
                    Q = x.query(r, "attractiveness"), V = x.query(r, "density"), $ = x.query(r, "initSize"), K = x.query(r, "centripetal"), J = x.query(r, "coolDown"), A = x.query(r, "categories");
                    for (var u = 0, f = A.length; u < f; u++) A[u].name && (S ? x.selectedMap[u] = S.isSelected(A[u].name) : x.selectedMap[u] = !0);
                    _ = x.query(r, "itemStyle.normal.linkStyle"), D = x.query(r, "itemStyle.emphasis.linkStyle"), O = x.query(r, "itemStyle.normal.nodeStyle"), M = x.query(r, "itemStyle.emphasis.nodeStyle"), P = x.query(r, "nodes"), H = a.clone(x.query(r, "links")), it(P, H), R.length = 0, U.length = 0, z.length = 0, F.length = 0, I.length = 0, z.length = 0, C.length = 0, k.length = 0, L.length = 0;
                    var l = Y * Z;
                    X = .5 / Q * Math.sqrt(l / B.length), ot(B, j), st(B, i, s)
                }
            }
        }

        function it(e, t) {
            var n = [],
                r = 0;
            B = g(e, function(e, t) {
                if (!e) return;
                if (e.ignore) return;
                if (x.selectedMap[e.category]) return n[t] = r++, !0;
                n[t] = -1
            });
            var i, s, o;
            j = g(t, function(e, t) {
                return i = e.source, s = e.target, o = !0, n[i] >= 0 ? e.source = n[i] : o = !1, n[s] >= 0 ? e.target = n[s] : o = !1, e.rawIndex = t, o
            })
        }

        function st(e, t, n) {
            var i = [],
                s = e.length;
            for (var o = 0; o < s; o++) {
                var f = e[o];
                f.value !== undefined ? i.push(f.value) : i.push(1)
            }
            var l = new h(i);
            i = l.map(t, n).toArray();
            var p = l.max();
            p !== 0 && (F = l.mul(1 / p, l).toArray());
            for (var o = 0; o < s; o++) {
                var f = e[o],
                    v, g, b = i[o],
                    w;
                d[f.name] !== undefined ? w = d[f.name] : f.initial !== undefined ? w = f.initial : w = m(Y / 2, Z / 2, $);
                var v = w[0],
                    g = w[1];
                R[o] = c.create(v, g), U[o] = c.create(v, g), q[o] = c.create(0, 0), z[o] = b * b * V * .035;
                var E = {
                        style: {
                            r: b,
                            x: 0,
                            y: 0
                        },
                        clickable: !0,
                        highlightStyle: {},
                        position: [v, g],
                        __forceIndex: o
                    },
                    T;
                x.query(N, "itemStyle.normal.label.show") && (E.style.text = f.name, E.style.textPosition = "inside", T = x.query(N, "itemStyle.normal.label.textStyle") || {}, E.style.textColor = T.color || "#fff", E.style.textAlign = T.align || "center", E.style.textBaseline = T.baseline || "middle", E.style.textFont = x.getFont(T)), x.query(N, "itemStyle.emphasis.label.show") && (E.highlightStyle.text = f.name, E.highlightStyle.textPosition = "inside", T = x.query(N, "itemStyle.emphasis.label.textStyle") || {}, E.highlightStyle.textColor = T.color || "#fff", E.highlightStyle.textAlign = T.align || "center", E.highlightStyle.textBaseline = T.baseline || "middle", E.highlightStyle.textFont = x.getFont(T)), a.merge(E.style, O), a.merge(E.highlightStyle, M);
                if (typeof f.category != "undefined") {
                    var k = A[f.category];
                    if (k) {
                        S && (E.style.color = S.getColor(k.name));
                        var L = k.itemStyle;
                        L && (L.normal && a.merge(E.style, L.normal, !0), L.emphasis && a.merge(E.highlightStyle, L.emphasis, !0))
                    }
                }
                if (typeof f.itemStyle != "undefined") {
                    var L = f.itemStyle;
                    L.normal && a.merge(E.style, L.normal, !0), L.normal && a.merge(E.highlightStyle, L.emphasis, !0)
                }
                N.draggable && (x.setCalculable(E), E.dragEnableTime = 0, E.ondragstart = x.shapeHandler.ondragstart, E.draggable = N.draggable);
                var _ = "";
                if (typeof f.category != "undefined") {
                    var k = A[f.category];
                    _ = k && k.name || ""
                }
                u.pack(E, {
                    name: _
                }, 0, f, a.indexOf(P, f), f.name || "", f.value), E = new r(E), C.push(E), x.shapeList.push(E), y.addShape(E)
            }
        }

        function ot(e, t) {
            var n = t.length;
            for (var r = 0; r < n; r++) {
                var o = t[r];
                o.weight !== undefined ? I.push(o.weight) : I.push(1);
                var f = {
                    style: {
                        xStart: 0,
                        yStart: 0,
                        xEnd: 0,
                        yEnd: 0,
                        lineWidth: 1
                    },
                    clickable: !0,
                    highlightStyle: {}
                };
                a.merge(f.style, _), a.merge(f.highlightStyle, D), typeof o.itemStyle != "undefined" && (o.itemStyle.normal && a.merge(f.style, o.itemStyle.normal, !0), o.itemStyle.emphasis && a.merge(f.highlightStyle, o.itemStyle.emphasis, !0));
                var l = B[o.source],
                    c = B[o.target],
                    o = H[o.rawIndex];
                u.pack(f, N, 0, {
                    source: o.source,
                    target: o.target,
                    weight: o.weight || 0
                }, o.rawIndex, l.name + " - " + c.name, o.weight || 0, !0), f = new i(f), k.push(f), x.shapeList.push(f), y.addShape(f);
                if (N.linkSymbol && N.linkSymbol !== "none") {
                    var p = {
                        style: {
                            x: -5,
                            y: 0,
                            width: N.linkSymbolSize[0],
                            height: N.linkSymbolSize[1],
                            iconType: N.linkSymbol,
                            brushType: "fill",
                            color: f.style.strokeColor,
                            opacity: f.style.opacity,
                            shadowBlur: f.style.shadowBlur,
                            shadowColor: f.style.shadowColor,
                            shadowOffsetX: f.style.shadowOffsetX,
                            shadowOffsetY: f.style.shadowOffsetY
                        },
                        highlightStyle: {
                            brushType: "fill"
                        },
                        position: [0, 0],
                        rotation: 0
                    };
                    p = new s(p), x.shapeList.push(p), L.push(p), y.addShape(p)
                }
            }
            var d = new h(I),
                v = d.max();
            v !== 0 && (I = d.mul(1 / v, d).toArray())
        }

        function ut() {
            var e = c.create();
            for (var t = 0, n = j.length; t < n; t++) {
                var r = j[t],
                    i = k[t],
                    s = C[r.source],
                    o = C[r.target];
                i.style.xStart = s.position[0], i.style.yStart = s.position[1], i.style.xEnd = o.position[0], i.style.yEnd = o.position[1];
                if (N.linkSymbol) {
                    var u = L[t];
                    c.copy(u.position, o.position), c.sub(e, s.position, o.position), c.normalize(e, e), c.scaleAndAdd(u.position, u.position, e, o.style.r + 2);
                    var a;
                    e[1] < 0 ? a = 2 * Math.PI - Math.acos(-e[0]) : a = Math.acos(-e[0]), u.rotation = a - Math.PI / 2
                }
            }
        }

        function at(e) {
            var t = R.length,
                n = [],
                r = X * X;
            for (var i = 0; i < t; i++) q[i][0] = 0, q[i][1] = 0;
            for (var i = 0; i < t; i++)
                for (var s = i + 1; s < t; s++) {
                    var o = F[i],
                        u = F[s],
                        a = R[i],
                        f = R[s];
                    c.sub(n, f, a);
                    var l = c.length(n);
                    if (l > 500) continue;
                    l < 5 && (l = 5), c.scale(n, n, 1 / l);
                    var h = 1 * (o + u) * r / l;
                    c.scaleAndAdd(q[i], q[i], n, -h), c.scaleAndAdd(q[s], q[s], n, h)
                }
            for (var i = 0, p = j.length; i < p; i++) {
                var v = j[i],
                    m = I[i],
                    g = v.source,
                    y = v.target,
                    a = R[g],
                    f = R[y];
                c.sub(n, f, a);
                var b = c.lengthSquare(n);
                if (b === 0) continue;
                var h = m * b / X / Math.sqrt(b);
                c.scaleAndAdd(q[g], q[g], n, h), c.scaleAndAdd(q[y], q[y], n, -h)
            }
            for (var i = 0, p = B.length; i < p; i++) {
                var w = R[i];
                c.sub(n, et, w);
                var b = c.lengthSquare(n),
                    h = b * K / (100 * Math.sqrt(b));
                c.scaleAndAdd(q[i], q[i], n, h)
            }
            var E = [];
            for (var i = 0, p = R.length; i < p; i++) {
                var S = B[i],
                    x = B[i].name;
                if (B[i].fixed) {
                    c.set(R[i], tt, nt), c.set(U[i], tt, nt), c.set(C[i].position, tt, nt), d[x] !== undefined && c.set(d[x], tt, nt);
                    continue
                }
                var w = R[i],
                    T = U[i];
                c.sub(E, w, T), T[0] = w[0], T[1] = w[1], c.scaleAndAdd(E, E, q[i], e / z[i]), c.scale(E, E, W), E[0] = Math.max(Math.min(E[0], 100), -100), E[1] = Math.max(Math.min(E[1], 100), -100), c.add(w, w, E), S.fixY && S.initial && (w[1] = S.initial[1]), S.fixX && S.initial && (w[0] = S.initial[0]), c.copy(C[i].position, w), x && (d[x] || (d[x] = c.create()), c.copy(d[x], w))
            }
        }

        function ft() {
            if (W < .01) return;
            at(G), ut();
            for (var e = 0; e < C.length; e++) y.modShape(C[e].id);
            for (var e = 0; e < k.length; e++) y.modShape(k[e].id);
            for (var e = 0; e < L.length; e++) y.modShape(L[e].id);
            y.refresh(), W *= J
        }

        function ct(e, t) {
            function n() {
                lt && (ft(), p(n))
            }
            b = e, E = t, T = b.series, x.clear(), rt(), lt = !0, p(n)
        }

        function ht(e) {
            e && (b = e, T = b.series), x.clear(), rt(), W = 1
        }

        function pt() {
            lt = !1, x.clear(), x.shapeList = null, x.effectList = null
        }

        function dt() {}

        function vt(e) {
            if (!x.isDragstart || !e.target) return;
            if (!N || !N.draggable) return;
            var t = e.target,
                n = t.__forceIndex,
                r = B[n];
            r.fixed = !0, x.isDragstart = !1, y.on(f.EVENT.MOUSEMOVE, gt)
        }

        function mt(e, t) {
            if (!x.isDragend || !e.target) return;
            var n = e.target,
                r = n.__forceIndex,
                i = B[r];
            i.fixed = !1, t.dragIn = !0, t.needRefresh = !1, x.isDragend = !1, y.un(f.EVENT.MOUSEMOVE, gt)
        }

        function gt(e) {
            W = .8, tt = l.getX(e.event), nt = l.getY(e.event)
        }
        t.call(this, e, v, y, b, w), n.call(this);
        var E = w.component,
            S, x = this;
        x.type = o.CHART_TYPE_FORCE;
        var T, N, C = [],
            k = [],
            L = [],
            A = [],
            O, M, _, D, P, H, B = [],
            j = [],
            F = [],
            I = [],
            q = [],
            R = [],
            U = [],
            z = [],
            W, X, V, $, J, K, Q, G = 1 / 60,
            Y, Z, et = [],
            tt, nt, lt;
        x.shapeHandler.ondragstart = function() {
            x.isDragstart = !0
        }, x.init = ct, x.refresh = ht, x.ondragstart = vt, x.ondragend = mt, x.dispose = pt, x.onclick = dt, ct(b, E)
    }

    function m(e, t, n) {
        return [(Math.random() - .5) * n + e, (Math.random() - .5) * n + t]
    }

    function g(e, t) {
        var n = e.length,
            r = [];
        for (var i = 0; i < n; i++) t(e[i], i) && r.push(e[i]);
        return r
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/Circle"),
        i = e("zrender/shape/Line"),
        s = e("../util/shape/Icon"),
        o = e("../config"),
        u = e("../util/ecData"),
        a = e("zrender/tool/util"),
        f = e("zrender/config"),
        l = e("zrender/tool/event"),
        c = e("zrender/tool/vector"),
        h = e("../util/ndarray"),
        p = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
            setTimeout(e, 16)
        },
        d = {};
    return a.inherits(v, n), a.inherits(v, t), e("../chart").define("force", v), v
}), define("echarts/util/shape/HalfSmoothPolygon", ["require", "zrender/shape/Base", "zrender/shape/util/smoothBezier", "zrender/tool/util", "zrender/shape/Polygon"], function(e) {
    function i(e) {
        t.call(this, e)
    }
    var t = e("zrender/shape/Base"),
        n = e("zrender/shape/util/smoothBezier"),
        r = e("zrender/tool/util");
    return i.prototype = {
        type: "half-smooth-polygon",
        buildPath: function(t, r) {
            var i = r.pointList;
            if (i.length < 2) return;
            if (r.smooth) {
                var s = n(i.slice(0, -2), r.smooth);
                t.moveTo(i[0][0], i[0][1]);
                var o, u, a, f = i.length;
                for (var l = 0; l < f - 3; l++) o = s[l * 2], u = s[l * 2 + 1], a = i[l + 1], t.bezierCurveTo(o[0], o[1], u[0], u[1], a[0], a[1]);
                t.lineTo(i[f - 2][0], i[f - 2][1]), t.lineTo(i[f - 1][0], i[f - 1][1]), t.lineTo(i[0][0], i[0][1])
            } else e("zrender/shape/Polygon").prototype.buildPath(t, r);
            return
        }
    }, r.inherits(i, t), i
}), define("echarts/chart/line", ["require", "../component/base", "./base", "zrender/shape/BrokenLine", "../util/shape/Icon", "../util/shape/HalfSmoothPolygon", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
    function l(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }

    function c(e, t) {
        var n = t.x,
            r = t.y,
            s = t.width,
            o = t.height,
            u = o / 2;
        t.symbol.match("empty") && (e.fillStyle = "#fff"), t.brushType = "both";
        var a = t.symbol.replace("empty", "").toLowerCase();
        if (a.match("star")) u = a.replace("star", "") - 0 || 5, r -= 1, a = "star";
        else if (a == "rectangle" || a == "arrow") n += (s - o) / 2, s = o;
        var f = "";
        a.match("image") && (f = a.replace(new RegExp("^image:\\/\\/"), ""), a = "image", n += Math.round((s - o) / 2) - 1, s = o += 2), a = i.prototype.iconLibrary[a];
        if (a) {
            var l = t.x,
                c = t.y;
            e.moveTo(l, c + u), e.lineTo(l + 5, c + u), e.moveTo(l + t.width - 5, c + u), e.lineTo(l + t.width, c + u), a(e, {
                x: n + 4,
                y: r + 4,
                width: s - 8,
                height: o - 8,
                n: u,
                image: f
            })
        } else e.moveTo(n, r + u), e.lineTo(n + s, r + u)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/BrokenLine"),
        i = e("../util/shape/Icon"),
        s = e("../util/shape/HalfSmoothPolygon");
    e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
    var o = e("../config"),
        u = e("../util/ecData"),
        a = e("zrender/tool/util"),
        f = e("zrender/tool/color");
    return l.prototype = {
        type: o.CHART_TYPE_LINE,
        _buildShape: function() {
            var e = this.series;
            this.finalPLMap = {}, this._sIndex2ColorMap = {}, this._symbol = this.option.symbolList, this._sIndex2ShapeMap = {}, this.selectedMap = {}, this.xMarkMap = {};
            var t = {
                    top: [],
                    bottom: [],
                    left: [],
                    right: []
                },
                n, r, i, s;
            for (var u = 0, a = e.length; u < a; u++) e[u].type == this.type && (e[u] = this.reformOption(e[u]), n = e[u].xAxisIndex, r = e[u].yAxisIndex, i = this.component.xAxis.getAxis(n), s = this.component.yAxis.getAxis(r), i.type == o.COMPONENT_TYPE_AXIS_CATEGORY ? t[i.getPosition()].push(u) : s.type == o.COMPONENT_TYPE_AXIS_CATEGORY && t[s.getPosition()].push(u));
            for (var f in t) t[f].length > 0 && this._buildSinglePosition(f, t[f]);
            this.addShapeList()
        },
        _buildSinglePosition: function(e, t) {
            var n = this._mapData(t),
                r = n.locationMap,
                i = n.maxDataLength;
            if (i === 0 || r.length === 0) return;
            switch (e) {
                case "bottom":
                case "top":
                    this._buildHorizontal(t, i, r, this.xMarkMap);
                    break;
                case "left":
                case "right":
                    this._buildVertical(t, i, r, this.xMarkMap)
            }
            for (var s = 0, o = t.length; s < o; s++) this.buildMark(t[s])
        },
        _mapData: function(e) {
            var t = this.series,
                n, r = 0,
                i = {},
                s = "__kener__stack__",
                o, u, a = this.component.legend,
                f = [],
                l = 0,
                c;
            for (var h = 0, p = e.length; h < p; h++) n = t[e[h]], u = n.name, this._sIndex2ShapeMap[e[h]] = this._sIndex2ShapeMap[e[h]] || this.query(n, "symbol") || this._symbol[h % this._symbol.length], a ? (this.selectedMap[u] = a.isSelected(u), this._sIndex2ColorMap[e[h]] = a.getColor(u), c = a.getItemShape(u), c && (c.style.iconType = "legendLineIcon", c.style.symbol = this._sIndex2ShapeMap[e[h]], a.setItemShape(u, c))) : (this.selectedMap[u] = !0, this._sIndex2ColorMap[e[h]] = this.zr.getColor(e[h])), this.selectedMap[u] && (o = n.stack || s + e[h], typeof i[o] == "undefined" ? (i[o] = r, f[r] = [e[h]], r++) : f[i[o]].push(e[h])), l = Math.max(l, n.data.length);
            return {
                locationMap: f,
                maxDataLength: l
            }
        },
        _buildHorizontal: function(e, t, n, r) {
            var i = this.series,
                s = n[0][0],
                o = i[s],
                u = o.xAxisIndex,
                a = this.component.xAxis.getAxis(u),
                f, l, c, h, p, d, v, m, g = {},
                y, b;
            for (var w = 0, E = t; w < E; w++) {
                if (typeof a.getNameByIndex(w) == "undefined") break;
                c = a.getCoordByIndex(w);
                for (var S = 0, x = n.length; S < x; S++) {
                    f = i[n[S][0]].yAxisIndex || 0, l = this.component.yAxis.getAxis(f), d = p = m = v = l.getCoord(0);
                    for (var T = 0, N = n[S].length; T < N; T++) {
                        s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-", g[s] = g[s] || [], r[s] = r[s] || {
                            min: Number.POSITIVE_INFINITY,
                            max: Number.NEGATIVE_INFINITY,
                            sum: 0,
                            counter: 0,
                            average: 0
                        };
                        if (b == "-") {
                            g[s].length > 0 && (this.finalPLMap[s] = this.finalPLMap[s] || [], this.finalPLMap[s].push(g[s]), g[s] = []);
                            continue
                        }
                        b >= 0 ? (p -= T > 0 ? l.getCoordSize(b) : d - l.getCoord(b), h = p) : b < 0 && (v += T > 0 ? l.getCoordSize(b) : l.getCoord(b) - m, h = v), g[s].push([c, h, w, a.getNameByIndex(w), c, d]), r[s].min > b && (r[s].min = b, r[s].minY = h, r[s].minX = c), r[s].max < b && (r[s].max = b, r[s].maxY = h, r[s].maxX = c), r[s].sum += b, r[s].counter++
                    }
                }
                p = this.component.grid.getY();
                var C;
                for (var S = 0, x = n.length; S < x; S++)
                    for (var T = 0, N = n[S].length; T < N; T++) {
                        s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-";
                        if (b != "-") continue;
                        this.deepQuery([y, o, this.option], "calculable") && (C = this.deepQuery([y, o], "symbolSize"), p += C * 2 + 5, h = p, this.shapeList.push(this._getCalculableItem(s, w, a.getNameByIndex(w), c, h, "horizontal")))
                    }
            }
            for (var k in g) g[k].length > 0 && (this.finalPLMap[k] = this.finalPLMap[k] || [], this.finalPLMap[k].push(g[k]), g[k] = []);
            for (var S = 0, x = n.length; S < x; S++)
                for (var T = 0, N = n[S].length; T < N; T++) s = n[S][T], r[s].counter > 0 && (r[s].average = (r[s].sum / r[s].counter).toFixed(2) - 0), h = this.component.yAxis.getAxis(i[s].yAxisIndex || 0).getCoord(r[s].average), r[s].averageLine = [
                    [this.component.grid.getX(), h],
                    [this.component.grid.getXend(), h]
                ], r[s].minLine = [
                    [this.component.grid.getX(), r[s].minY],
                    [this.component.grid.getXend(), r[s].minY]
                ], r[s].maxLine = [
                    [this.component.grid.getX(), r[s].maxY],
                    [this.component.grid.getXend(), r[s].maxY]
                ];
            this._buildBorkenLine(e, this.finalPLMap, a, "horizontal")
        },
        _buildVertical: function(e, t, n, r) {
            var i = this.series,
                s = n[0][0],
                o = i[s],
                u = o.yAxisIndex,
                a = this.component.yAxis.getAxis(u),
                f, l, c, h, p, d, v, m, g = {},
                y, b;
            for (var w = 0, E = t; w < E; w++) {
                if (typeof a.getNameByIndex(w) == "undefined") break;
                h = a.getCoordByIndex(w);
                for (var S = 0, x = n.length; S < x; S++) {
                    f = i[n[S][0]].xAxisIndex || 0, l = this.component.xAxis.getAxis(f), d = p = m = v = l.getCoord(0);
                    for (var T = 0, N = n[S].length; T < N; T++) {
                        s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-", g[s] = g[s] || [], r[s] = r[s] || {
                            min: Number.POSITIVE_INFINITY,
                            max: Number.NEGATIVE_INFINITY,
                            sum: 0,
                            counter: 0,
                            average: 0
                        };
                        if (b == "-") {
                            g[s].length > 0 && (this.finalPLMap[s] = this.finalPLMap[s] || [], this.finalPLMap[s].push(g[s]), g[s] = []);
                            continue
                        }
                        b >= 0 ? (p += T > 0 ? l.getCoordSize(b) : l.getCoord(b) - d, c = p) : b < 0 && (v -= T > 0 ? l.getCoordSize(b) : m - l.getCoord(b), c = v), g[s].push([c, h, w, a.getNameByIndex(w), d, h]), r[s].min > b && (r[s].min = b, r[s].minX = c, r[s].minY = h), r[s].max < b && (r[s].max = b, r[s].maxX = c, r[s].maxY = h), r[s].sum += b, r[s].counter++
                    }
                }
                p = this.component.grid.getXend();
                var C;
                for (var S = 0, x = n.length; S < x; S++)
                    for (var T = 0, N = n[S].length; T < N; T++) {
                        s = n[S][T], o = i[s], y = o.data[w], b = typeof y != "undefined" ? typeof y.value != "undefined" ? y.value : y : "-";
                        if (b != "-") continue;
                        this.deepQuery([y, o, this.option], "calculable") && (C = this.deepQuery([y, o], "symbolSize"), p -= C * 2 + 5, c = p, this.shapeList.push(this._getCalculableItem(s, w, a.getNameByIndex(w), c, h, "vertical")))
                    }
            }
            for (var k in g) g[k].length > 0 && (this.finalPLMap[k] = this.finalPLMap[k] || [], this.finalPLMap[k].push(g[k]), g[k] = []);
            for (var S = 0, x = n.length; S < x; S++)
                for (var T = 0, N = n[S].length; T < N; T++) s = n[S][T], r[s].counter > 0 && (r[s].average = (r[s].sum / r[s].counter).toFixed(2) - 0), c = this.component.xAxis.getAxis(i[s].xAxisIndex || 0).getCoord(r[s].average), r[s].averageLine = [
                    [c, this.component.grid.getYend()],
                    [c, this.component.grid.getY()]
                ], r[s].minLine = [
                    [r[s].minX, this.component.grid.getYend()],
                    [r[s].minX, this.component.grid.getY()]
                ], r[s].maxLine = [
                    [r[s].maxX, this.component.grid.getYend()],
                    [r[s].maxX, this.component.grid.getY()]
                ];
            this._buildBorkenLine(e, this.finalPLMap, a, "vertical")
        },
        _buildBorkenLine: function(e, t, n, i) {
            var o = this.series,
                l, c, h, p, d, v, m, g, y, b, w, E, S, x, T;
            for (var N = e.length - 1; N >= 0; N--) {
                T = e[N], g = o[T], b = t[T];
                if (g.type == this.type && typeof b != "undefined") {
                    l = this._sIndex2ColorMap[T], c = this.query(g, "itemStyle.normal.lineStyle.width"), h = this.query(g, "itemStyle.normal.lineStyle.type"), p = this.query(g, "itemStyle.normal.lineStyle.color"), d = this.getItemStyleColor(this.query(g, "itemStyle.normal.color"), T, -1), v = typeof this.query(g, "itemStyle.normal.areaStyle") != "undefined", m = this.query(g, "itemStyle.normal.areaStyle.color");
                    for (var C = 0, k = b.length; C < k; C++) {
                        w = b[C], x = this._isLarge(i, w);
                        if (!x)
                            for (var L = 0, A = w.length; L < A; L++) y = g.data[w[L][2]], (this.deepQuery([y, g], "showAllSymbol") || n.isMainAxis(w[L][2]) && this.deepQuery([y, g], "symbol") != "none" || this.deepQuery([y, g, this.option], "calculable")) && this.shapeList.push(this._getSymbol(T, w[L][2], w[L][3], w[L][0], w[L][1], i));
                        else w = this._getLargePointList(i, w);
                        E = new r({
                            zlevel: this._zlevelBase,
                            style: {
                                miterLimit: c,
                                pointList: w,
                                strokeColor: p || d || l,
                                lineWidth: c,
                                lineType: h,
                                smooth: this._getSmooth(g.smooth),
                                shadowColor: this.query(g, "itemStyle.normal.lineStyle.shadowColor"),
                                shadowBlur: this.query(g, "itemStyle.normal.lineStyle.shadowBlur"),
                                shadowOffsetX: this.query(g, "itemStyle.normal.lineStyle.shadowOffsetX"),
                                shadowOffsetY: this.query(g, "itemStyle.normal.lineStyle.shadowOffsetY")
                            },
                            hoverable: !1,
                            _main: !0,
                            _seriesIndex: T,
                            _orient: i
                        }), u.pack(E, o[T], T, 0, C, o[T].name), this.shapeList.push(E), v && (S = new s({
                            zlevel: this._zlevelBase,
                            style: {
                                miterLimit: c,
                                pointList: a.clone(w).concat([
                                    [w[w.length - 1][4], w[w.length - 1][5]],
                                    [w[0][4], w[0][5]]
                                ]),
                                brushType: "fill",
                                smooth: this._getSmooth(g.smooth),
                                color: m ? m : f.alpha(l, .5)
                            },
                            hoverable: !1,
                            _main: !0,
                            _seriesIndex: T,
                            _orient: i
                        }), u.pack(S, o[T], T, 0, C, o[T].name), this.shapeList.push(S))
                    }
                }
            }
        },
        _isLarge: function(e, t) {
            return t.length < 2 ? !1 : e == "horizontal" ? Math.abs(t[0][0] - t[1][0]) < .5 : Math.abs(t[0][1] - t[1][1]) < .5
        },
        _getLargePointList: function(e, t) {
            var n;
            e == "horizontal" ? n = this.component.grid.getWidth() : n = this.component.grid.getHeight();
            var r = t.length,
                i = [];
            for (var s = 0; s < n; s++) i[s] = t[Math.floor(r / n * s)];
            return i
        },
        _getSmooth: function(e) {
            return e ? .3 : 0
        },
        _getCalculableItem: function(e, t, n, r, i, s) {
            var o = this.series,
                u = o[e].calculableHolderColor || this.ecTheme.calculableHolderColor,
                a = this._getSymbol(e, t, n, r, i, s);
            return a.style.color = u, a.style.strokeColor = u, a.rotation = [0, 0], a.hoverable = !1, a.draggable = !1, a.style.text = undefined, a
        },
        _getSymbol: function(e, t, n, r, i, s) {
            var o = this.series,
                u = o[e],
                a = u.data[t],
                f = this.getSymbolShape(u, e, a, t, n, r, i, this._sIndex2ShapeMap[e], this._sIndex2ColorMap[e], "#fff", s == "vertical" ? "horizontal" : "vertical");
            return f.zlevel = this._zlevelBase + 1, this.deepQuery([a, u, this.option], "calculable") && (this.setCalculable(f), f.draggable = !0), f
        },
        getMarkCoord: function(e, t) {
            var n = this.series[e],
                r = this.xMarkMap[e],
                i = this.component.xAxis.getAxis(n.xAxisIndex),
                s = this.component.yAxis.getAxis(n.yAxisIndex);
            return !t.type || t.type != "max" && t.type != "min" && t.type != "average" ? [typeof t.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.xAxis || 0) : i.getCoord(t.xAxis || 0), typeof t.yAxis != "string" && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0)] : [r[t.type + "X"], r[t.type + "Y"], r[t.type + "Line"], r[t.type]]
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        },
        ontooltipHover: function(e, t) {
            var n = e.seriesIndex,
                r = e.dataIndex,
                i, s, o = n.length;
            while (o--) {
                i = this.finalPLMap[n[o]];
                if (i)
                    for (var u = 0, a = i.length; u < a; u++) {
                        s = i[u];
                        for (var f = 0, l = s.length; f < l; f++) r == s[f][2] && t.push(this._getSymbol(n[o], s[f][2], s[f][3], s[f][0], s[f][1], "horizontal"))
                    }
            }
        },
        addDataAnimation: function(e) {
            var t = this.series,
                n = {};
            for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
            var s, o, u, a, f, l, c;
            for (var r = this.shapeList.length - 1; r >= 0; r--) {
                f = this.shapeList[r]._seriesIndex;
                if (n[f] && !n[f][3]) {
                    if (this.shapeList[r]._main) {
                        l = this.shapeList[r].style.pointList, o = Math.abs(l[0][0] - l[1][0]), a = Math.abs(l[0][1] - l[1][1]), c = this.shapeList[r]._orient == "horizontal";
                        if (n[f][2]) {
                            if (this.shapeList[r].type == "polygon") {
                                var h = l.length;
                                this.shapeList[r].style.pointList[h - 3] = l[h - 2], c ? this.shapeList[r].style.pointList[h - 3][0] = l[h - 4][0] : this.shapeList[r].style.pointList[h - 3][1] = l[h - 4][1], this.shapeList[r].style.pointList[h - 2] = l[h - 1]
                            }
                            this.shapeList[r].style.pointList.pop(), c ? (s = o, u = 0) : (s = 0, u = -a)
                        } else {
                            this.shapeList[r].style.pointList.shift();
                            if (this.shapeList[r].type == "polygon") {
                                var p = this.shapeList[r].style.pointList.pop();
                                c ? p[0] = l[0][0] : p[1] = l[0][1], this.shapeList[r].style.pointList.push(p)
                            }
                            c ? (s = -o, u = 0) : (s = 0, u = a)
                        }
                        this.zr.modShape(this.shapeList[r].id, {
                            style: {
                                pointList: this.shapeList[r].style.pointList
                            }
                        }, !0)
                    } else {
                        if (n[f][2] && this.shapeList[r]._dataIndex == t[f].data.length - 1) {
                            this.zr.delShape(this.shapeList[r].id);
                            continue
                        }
                        if (!n[f][2] && this.shapeList[r]._dataIndex === 0) {
                            this.zr.delShape(this.shapeList[r].id);
                            continue
                        }
                    }
                    this.shapeList[r].position = [0, 0], this.zr.animate(this.shapeList[r].id, "").when(500, {
                        position: [s, u]
                    }).start()
                }
            }
        }
    }, i.prototype.iconLibrary.legendLineIcon = c, a.inherits(l, n), a.inherits(l, t), e("../chart").define("line", l), l
}), define("echarts/chart/bar", ["require", "../component/base", "./base", "zrender/shape/Rectangle", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
    function a(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this), this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/Rectangle");
    e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
    var i = e("../config"),
        s = e("../util/ecData"),
        o = e("zrender/tool/util"),
        u = e("zrender/tool/color");
    return a.prototype = {
        type: i.CHART_TYPE_BAR,
        _buildShape: function() {
            var e = this.series;
            this.selectedMap = {}, this.xMarkMap = {}, this._sIndex2colorMap = {};
            var t = {
                    top: [],
                    bottom: [],
                    left: [],
                    right: []
                },
                n, r, s, o;
            for (var u = 0, a = e.length; u < a; u++) e[u].type == i.CHART_TYPE_BAR && (e[u] = this.reformOption(e[u]), n = e[u].xAxisIndex, r = e[u].yAxisIndex, s = this.component.xAxis.getAxis(n), o = this.component.yAxis.getAxis(r), s.type == i.COMPONENT_TYPE_AXIS_CATEGORY ? t[s.getPosition()].push(u) : o.type == i.COMPONENT_TYPE_AXIS_CATEGORY && t[o.getPosition()].push(u));
            for (var f in t) t[f].length > 0 && this._buildSinglePosition(f, t[f], this.xMarkMap);
            this.addShapeList()
        },
        _buildSinglePosition: function(e, t, n) {
            var r = this._mapData(t),
                i = r.locationMap,
                s = r.maxDataLength;
            if (s === 0 || i.length === 0) return;
            switch (e) {
                case "bottom":
                case "top":
                    this._buildHorizontal(s, i, t, n);
                    break;
                case "left":
                case "right":
                    this._buildVertical(s, i, t, n)
            }
        },
        _mapData: function(e) {
            var t = this.series,
                n, r = 0,
                i = {},
                s = "__kener__stack__",
                o, u, a = this.component.legend,
                f = [],
                l = 0,
                c;
            for (var h = 0, p = e.length; h < p; h++) n = t[e[h]], u = n.name, a ? (this.selectedMap[u] = a.isSelected(u), this._sIndex2colorMap[e[h]] = a.getColor(u), c = a.getItemShape(u), c && (n.itemStyle.normal.borderWidth > 0 && (c.style.x += 1, c.style.y += 1, c.style.width -= 2, c.style.height -= 2, c.style.strokeColor = c.highlightStyle.strokeColor = n.itemStyle.normal.borderColor, c.highlightStyle.lineWidth = 3, c.style.brushType = "both"), a.setItemShape(u, c))) : (this.selectedMap[u] = !0, this._sIndex2colorMap[e[h]] = this.zr.getColor(e[h])), this.selectedMap[u] && (o = n.stack || s + e[h], typeof i[o] == "undefined" ? (i[o] = r, f[r] = [e[h]], r++) : f[i[o]].push(e[h])), l = Math.max(l, n.data.length);
            return {
                locationMap: f,
                maxDataLength: l
            }
        },
        _buildHorizontal: function(e, t, n, i) {
            var s = this.series,
                o = t[0][0],
                u = s[o],
                a = u.xAxisIndex,
                f = this.component.xAxis.getAxis(a),
                l, c, h = this._mapSize(f, t),
                p = h.gap,
                d = h.barGap,
                v = h.barWidthMap,
                m = h.barWidth,
                g = h.barMinHeightMap,
                y, b = h.interval,
                w, E, S, x, T, N, C, k, L;
            for (var A = 0, O = e; A < O; A++) {
                if (typeof f.getNameByIndex(A) == "undefined") break;
                w = f.getCoordByIndex(A) - p / 2;
                for (var M = 0, _ = t.length; M < _; M++) {
                    l = s[t[M][0]].yAxisIndex || 0, c = this.component.yAxis.getAxis(l), x = S = N = T = c.getCoord(0);
                    for (var D = 0, P = t[M].length; D < P; D++) {
                        o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-", i[o] = i[o] || {
                            min: Number.POSITIVE_INFINITY,
                            max: Number.NEGATIVE_INFINITY,
                            sum: 0,
                            counter: 0,
                            average: 0
                        };
                        if (L == "-") continue;
                        L > 0 ? (y = D > 0 ? c.getCoordSize(L) : x - c.getCoord(L), P == 1 && g[o] > y && (y = g[o]), S -= y, E = S) : L < 0 ? (y = D > 0 ? c.getCoordSize(L) : c.getCoord(L) - N, P == 1 && g[o] > y && (y = g[o]), E = T, T += y) : (y = 0, S -= y, E = S), i[o][A] = w + (v[o] || m) / 2, i[o].min > L && (i[o].min = L, i[o].minY = E, i[o].minX = i[o][A]), i[o].max < L && (i[o].max = L, i[o].maxY = E, i[o].maxX = i[o][A]), i[o].sum += L, i[o].counter++, A % b === 0 && (C = this._getBarItem(o, A, f.getNameByIndex(A), w, E, v[o] || m, y, "vertical"), this.shapeList.push(new r(C)))
                    }
                    for (var D = 0, P = t[M].length; D < P; D++) {
                        o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-";
                        if (L != "-") continue;
                        this.deepQuery([k, u, this.option], "calculable") && (S -= this.ecTheme.island.r, E = S, C = this._getBarItem(o, A, f.getNameByIndex(A), w + .5, E + .5, (v[o] || m) - 1, this.ecTheme.island.r - 1, "vertical"), C.hoverable = !1, C.draggable = !1, C.style.lineWidth = 1, C.style.brushType = "stroke", C.style.strokeColor = u.calculableHolderColor || this.ecTheme.calculableHolderColor, this.shapeList.push(new r(C)))
                    }
                    w += (v[o] || m) + d
                }
            }
            for (var M = 0, _ = t.length; M < _; M++)
                for (var D = 0, P = t[M].length; D < P; D++) o = t[M][D], i[o].counter > 0 && (i[o].average = (i[o].sum / i[o].counter).toFixed(2) - 0), E = this.component.yAxis.getAxis(s[o].yAxisIndex || 0).getCoord(i[o].average), i[o].averageLine = [
                    [this.component.grid.getX(), E],
                    [this.component.grid.getXend(), E]
                ], i[o].minLine = [
                    [this.component.grid.getX(), i[o].minY],
                    [this.component.grid.getXend(), i[o].minY]
                ], i[o].maxLine = [
                    [this.component.grid.getX(), i[o].maxY],
                    [this.component.grid.getXend(), i[o].maxY]
                ], i[o].isHorizontal = !0, this.buildMark(o)
        },
        _buildVertical: function(e, t, n, i) {
            var s = this.series,
                o = t[0][0],
                u = s[o],
                a = u.yAxisIndex,
                f = this.component.yAxis.getAxis(a),
                l, c, h = this._mapSize(f, t),
                p = h.gap,
                d = h.barGap,
                v = h.barWidthMap,
                m = h.barWidth,
                g = h.barMinHeightMap,
                y, b = h.interval,
                w, E, S, x, T, N, C, k, L;
            for (var A = 0, O = e; A < O; A++) {
                if (typeof f.getNameByIndex(A) == "undefined") break;
                E = f.getCoordByIndex(A) + p / 2;
                for (var M = 0, _ = t.length; M < _; M++) {
                    l = s[t[M][0]].xAxisIndex || 0, c = this.component.xAxis.getAxis(l), x = S = N = T = c.getCoord(0);
                    for (var D = 0, P = t[M].length; D < P; D++) {
                        o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-", i[o] = i[o] || {
                            min: Number.POSITIVE_INFINITY,
                            max: Number.NEGATIVE_INFINITY,
                            sum: 0,
                            counter: 0,
                            average: 0
                        };
                        if (L == "-") continue;
                        L > 0 ? (y = D > 0 ? c.getCoordSize(L) : c.getCoord(L) - x, P == 1 && g[o] > y && (y = g[o]), w = S, S += y) : L < 0 ? (y = D > 0 ? c.getCoordSize(L) : N - c.getCoord(L), P == 1 && g[o] > y && (y = g[o]), T -= y, w = T) : (y = 0, w = S, S += y), i[o][A] = E - (v[o] || m) / 2, i[o].min > L && (i[o].min = L, i[o].minX = w + y, i[o].minY = i[o][A]), i[o].max < L && (i[o].max = L, i[o].maxX = w + y, i[o].maxY = i[o][A]), i[o].sum += L, i[o].counter++, A % b === 0 && (C = this._getBarItem(o, A, f.getNameByIndex(A), w, E - (v[o] || m), y, v[o] || m, "horizontal"), this.shapeList.push(new r(C)))
                    }
                    for (var D = 0, P = t[M].length; D < P; D++) {
                        o = t[M][D], u = s[o], k = u.data[A], L = typeof k != "undefined" ? typeof k.value != "undefined" ? k.value : k : "-";
                        if (L != "-") continue;
                        this.deepQuery([k, u, this.option], "calculable") && (w = S, S += this.ecTheme.island.r, C = this._getBarItem(o, A, f.getNameByIndex(A), w + .5, E + .5 - (v[o] || m), this.ecTheme.island.r - 1, (v[o] || m) - 1, "horizontal"), C.hoverable = !1, C.draggable = !1, C.style.lineWidth = 1, C.style.brushType = "stroke", C.style.strokeColor = u.calculableHolderColor || this.ecTheme.calculableHolderColor, this.shapeList.push(new r(C)))
                    }
                    E -= (v[o] || m) + d
                }
            }
            for (var M = 0, _ = t.length; M < _; M++)
                for (var D = 0, P = t[M].length; D < P; D++) o = t[M][D], i[o].counter > 0 && (i[o].average = (i[o].sum / i[o].counter).toFixed(2) - 0), w = this.component.xAxis.getAxis(s[o].xAxisIndex || 0).getCoord(i[o].average), i[o].averageLine = [
                    [w, this.component.grid.getYend()],
                    [w, this.component.grid.getY()]
                ], i[o].minLine = [
                    [i[o].minX, this.component.grid.getYend()],
                    [i[o].minX, this.component.grid.getY()]
                ], i[o].maxLine = [
                    [i[o].maxX, this.component.grid.getYend()],
                    [i[o].maxX, this.component.grid.getY()]
                ], i[o].isHorizontal = !1, this.buildMark(o)
        },
        _mapSize: function(e, t, n) {
            var r = this.series,
                i = {},
                s = {},
                o, u = 0,
                a = 0,
                f, l, c, h, p = 1;
            for (var d = 0, v = t.length; d < v; d++) {
                c = !1;
                for (var m = 0, g = t[d].length; m < g; m++) {
                    seriesIndex = t[d][m], h = r[seriesIndex];
                    if (!n)
                        if (!c) {
                            o = this.query(h, "barWidth");
                            if (typeof o != "undefined") {
                                i[seriesIndex] = o, a += o, u++, c = !0;
                                for (var y = 0, b = m; y < b; y++) {
                                    var w = t[d][y];
                                    i[w] = o
                                }
                            }
                        } else i[seriesIndex] = o;
                    s[seriesIndex] = this.query(h, "barMinHeight"), f = typeof f != "undefined" ? f : this.query(h, "barGap"), l = typeof l != "undefined" ? l : this.query(h, "barCategoryGap")
                }
            }
            var E, S;
            if (t.length != u)
                if (!n) {
                    E = typeof l == "string" && l.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(l)) / 100) : e.getGap() - l, typeof f == "string" && f.match(/%$/) ? (f = parseFloat(f) / 100, S = Math.floor((E - a) / ((t.length - 1) * f + t.length - u)), f = Math.floor(S * f)) : (f = parseFloat(f), S = Math.floor((E - a - f * (t.length - 1)) / (t.length - u)));
                    if (S <= 0) return this._mapSize(e, t, !0)
                } else E = e.getGap(), f = 0, S = Math.floor(E / t.length), S <= 0 && (p = Math.floor(t.length / E), S = 1);
            else {
                E = u > 1 ? typeof l == "string" && l.match(/%$/) ? Math.floor(e.getGap() * (100 - parseFloat(l)) / 100) : e.getGap() - l : a, S = 0, f = u > 1 ? Math.floor((E - a) / (u - 1)) : 0;
                if (f < 0) return this._mapSize(e, t, !0)
            }
            return {
                barWidthMap: i,
                barMinHeightMap: s,
                gap: E,
                barWidth: S,
                barGap: f,
                interval: p
            }
        },
        _getBarItem: function(e, t, n, r, i, o, a, f) {
            var l = this.series,
                c, h = l[e],
                p = h.data[t],
                d = this._sIndex2colorMap[e],
                v = [p, h],
                m = this.deepQuery(v, "itemStyle.normal.color") || d,
                g = this.deepQuery(v, "itemStyle.emphasis.color"),
                y = this.deepMerge(v, "itemStyle.normal"),
                b = y.borderWidth,
                w = this.deepMerge(v, "itemStyle.emphasis");
            c = {
                zlevel: this._zlevelBase,
                clickable: !0,
                style: {
                    x: r,
                    y: i,
                    width: o,
                    height: a,
                    brushType: "both",
                    color: this.getItemStyleColor(m, e, t, p),
                    radius: y.borderRadius,
                    lineWidth: b,
                    strokeColor: y.borderColor
                },
                highlightStyle: {
                    color: this.getItemStyleColor(g, e, t, p),
                    radius: w.borderRadius,
                    lineWidth: w.borderWidth,
                    strokeColor: w.borderColor
                },
                _orient: f
            }, c.highlightStyle.color = c.highlightStyle.color || (typeof c.style.color == "string" ? u.lift(c.style.color, -0.3) : c.style.color), b > 0 && c.style.height > b && c.style.width > b ? (c.style.y += b / 2, c.style.height -= b, c.style.x += b / 2, c.style.width -= b) : c.style.brushType = "fill", c.highlightStyle.textColor = c.highlightStyle.color, c = this.addLabel(c, h, p, n, f);
            if (c.style.textPosition == "insideLeft" || c.style.textPosition == "insideRight" || c.style.textPosition == "insideTop" || c.style.textPosition == "insideBottom") {
                var E = 5;
                switch (c.style.textPosition) {
                    case "insideLeft":
                        c.style.textX = c.style.x + E, c.style.textY = c.style.y + c.style.height / 2, c.style.textAlign = "left", c.style.textBaseline = "middle";
                        break;
                    case "insideRight":
                        c.style.textX = c.style.x + c.style.width - E, c.style.textY = c.style.y + c.style.height / 2, c.style.textAlign = "right", c.style.textBaseline = "middle";
                        break;
                    case "insideTop":
                        c.style.textX = c.style.x + c.style.width / 2, c.style.textY = c.style.y + E / 2, c.style.textAlign = "center", c.style.textBaseline = "top";
                        break;
                    case "insideBottom":
                        c.style.textX = c.style.x + c.style.width / 2, c.style.textY = c.style.y + c.style.height - E / 2, c.style.textAlign = "center", c.style.textBaseline = "bottom"
                }
                c.style.textPosition = "specific", c.style.textColor = c.style.textColor || "#fff"
            }
            return this.deepQuery([p, h, this.option], "calculable") && (this.setCalculable(c), c.draggable = !0), s.pack(c, l[e], e, l[e].data[t], t, n), c
        },
        getMarkCoord: function(e, t) {
            var n = this.series[e],
                r = this.xMarkMap[e],
                i = this.component.xAxis.getAxis(n.xAxisIndex),
                s = this.component.yAxis.getAxis(n.yAxisIndex),
                o, u;
            if (!t.type || t.type != "max" && t.type != "min" && t.type != "average")
                if (r.isHorizontal) {
                    o = typeof t.xAxis == "string" && i.getIndexByName ? i.getIndexByName(t.xAxis) : t.xAxis || 0;
                    var a = r[o];
                    a = typeof a != "undefined" ? a : typeof t.xAxis != "string" && i.getCoordByIndex ? i.getCoordByIndex(t.xAxis || 0) : i.getCoord(t.xAxis || 0), u = [a, s.getCoord(t.yAxis || 0)]
                } else {
                    o = typeof t.yAxis == "string" && s.getIndexByName ? s.getIndexByName(t.yAxis) : t.yAxis || 0;
                    var f = r[o];
                    f = typeof f != "undefined" ? f : typeof t.yAxis != "string" && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0), u = [i.getCoord(t.xAxis || 0), f]
                }
            else u = [r[t.type + "X"], r[t.type + "Y"], r[t.type + "Line"], r[t.type]];
            return u
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        },
        addDataAnimation: function(e) {
            var t = this.series,
                n = {};
            for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
            var o, u, a, f, l, c, h;
            for (var r = this.shapeList.length - 1; r >= 0; r--) {
                c = s.get(this.shapeList[r], "seriesIndex");
                if (n[c] && !n[c][3] && this.shapeList[r].type == "rectangle") {
                    h = s.get(this.shapeList[r], "dataIndex"), l = t[c];
                    if (n[c][2] && h == l.data.length - 1) {
                        this.zr.delShape(this.shapeList[r].id);
                        continue
                    }
                    if (!n[c][2] && h === 0) {
                        this.zr.delShape(this.shapeList[r].id);
                        continue
                    }
                    this.shapeList[r]._orient == "horizontal" ? (f = this.component.yAxis.getAxis(l.yAxisIndex || 0).getGap(), a = n[c][2] ? -f : f, o = 0) : (u = this.component.xAxis.getAxis(l.xAxisIndex || 0).getGap(), o = n[c][2] ? u : -u, a = 0), this.shapeList[r].position = [0, 0], this.zr.animate(this.shapeList[r].id, "").when(500, {
                        position: [o, a]
                    }).start()
                }
            }
        }
    }, o.inherits(a, n), o.inherits(a, t), e("../chart").define("bar", a), a
}), define("echarts/chart/pie", ["require", "../component/base", "./base", "zrender/shape/Text", "zrender/shape/Ring", "zrender/shape/Circle", "zrender/shape/Sector", "zrender/shape/BrokenLine", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/math", "zrender/tool/color", "../chart"], function(e) {
    function p(e, r, i, s, o) {
        t.call(this, e, r, i, s, o), n.call(this);
        var u = this;
        u.shapeHandler.onmouseover = function(e) {
            var t = e.target,
                n = f.get(t, "seriesIndex"),
                r = f.get(t, "dataIndex"),
                i = f.get(t, "special"),
                s = t._lastAddRadius,
                o = t.style.startAngle,
                a = t.style.endAngle,
                l = t.highlightStyle.color,
                c = u.getLabel(n, r, i, s, o, a, l, !0);
            c && u.zr.addHoverShape(c);
            var h = u.getLabelLine(n, r, s, t.style.r0, t.style.r, o, a, l, !0);
            h && u.zr.addHoverShape(h)
        }, this.refresh(s)
    }
    var t = e("../component/base"),
        n = e("./base"),
        r = e("zrender/shape/Text"),
        i = e("zrender/shape/Ring"),
        s = e("zrender/shape/Circle"),
        o = e("zrender/shape/Sector"),
        u = e("zrender/shape/BrokenLine"),
        a = e("../config"),
        f = e("../util/ecData"),
        l = e("zrender/tool/util"),
        c = e("zrender/tool/math"),
        h = e("zrender/tool/color");
    return p.prototype = {
        type: a.CHART_TYPE_PIE,
        _buildShape: function() {
            var e = this.series,
                t = this.component.legend;
            this.selectedMap = {}, this._selected = {};
            var n, r, o;
            this._selectedMode = !1;
            var u;
            for (var l = 0, c = e.length; l < c; l++)
                if (e[l].type == a.CHART_TYPE_PIE) {
                    e[l] = this.reformOption(e[l]), u = e[l].name || "", this.selectedMap[u] = t ? t.isSelected(u) : !0;
                    if (!this.selectedMap[u]) continue;
                    n = this.parseCenter(this.zr, e[l].center), r = this.parseRadius(this.zr, e[l].radius), this._selectedMode = this._selectedMode || e[l].selectedMode, this._selected[l] = [], this.deepQuery([e[l], this.option], "calculable") && (o = {
                        zlevel: this._zlevelBase,
                        hoverable: !1,
                        style: {
                            x: n[0],
                            y: n[1],
                            r0: r[0] <= 10 ? 0 : r[0] - 10,
                            r: r[1] + 10,
                            brushType: "stroke",
                            lineWidth: 1,
                            strokeColor: e[l].calculableHolderColor || this.ecTheme.calculableHolderColor
                        }
                    }, f.pack(o, e[l], l, undefined, -1), this.setCalculable(o), o = r[0] <= 10 ? new s(o) : new i(o), this.shapeList.push(o)), this._buildSinglePie(l), this.buildMark(l)
                }
            this.addShapeList()
        },
        _buildSinglePie: function(e) {
            var t = this.series,
                n = t[e],
                r = n.data,
                i = this.component.legend,
                s, o = 0,
                u = 0,
                a = 0,
                f = Number.NEGATIVE_INFINITY;
            for (var l = 0, c = r.length; l < c; l++) s = r[l].name, i ? this.selectedMap[s] = i.isSelected(s) : this.selectedMap[s] = !0, this.selectedMap[s] && !isNaN(r[l].value) && (+r[l].value !== 0 ? o++ : u++, a += +r[l].value, f = Math.max(f, +r[l].value));
            var h = 100,
                p, d = 0,
                v = n.clockWise,
                m = n.startAngle.toFixed(2) - 0,
                g, y = n.minAngle || .01,
                b = 360 - y * o - .01 * u,
                w, E = n.roseType,
                S, x, T;
            for (var l = 0, c = r.length; l < c; l++) {
                s = r[l].name;
                if (!this.selectedMap[s] || isNaN(r[l].value)) continue;
                i ? w = i.getColor(s) : w = this.zr.getColor(l), p = h, h = r[l].value / a, E != "area" ? g = v ? m - h * b - (h !== 0 ? y : .01) : h * b + m + (h !== 0 ? y : .01) : g = v ? m - 360 / c : 360 / c + m, g = g.toFixed(2) - 0, h = (h * 100).toFixed(2), S = this.parseRadius(this.zr, n.radius), x = +S[0], T = +S[1], E == "radius" ? T = r[l].value / f * (T - x) * .8 + (T - x) * .2 + x : E == "area" && (T = Math.sqrt(r[l].value / f) * (T - x) + x);
                if (v) {
                    var N;
                    N = m, m = g, g = N
                }
                l > 0 && Math.abs(m - g) < 15 && p < 4 && this._needLabel(n, r[l], !1) && this.deepQuery([r[l], n], "itemStyle.normal.label.position") != "center" ? d += h < 4 ? 20 : -20 : d = 0, this._buildItem(e, l, h, d, r[l].selected, x, T, m, g, w), v || (m = g)
            }
        },
        _buildItem: function(e, t, n, r, i, s, o, u, a, l) {
            var c = this.series,
                h = this.getSector(e, t, n, i, s, o, u, a, l);
            f.pack(h, c[e], e, c[e].data[t], t, c[e].data[t].name, n), h._lastAddRadius = r, this.shapeList.push(h);
            var p = this.getLabel(e, t, n, r, u, a, l, !1);
            p && (f.pack(p, c[e], e, c[e].data[t], t, c[e].data[t].name, n), p._dataIndex = t, this.shapeList.push(p));
            var d = this.getLabelLine(e, t, r, s, o, u, a, l, !1);
            d && (f.pack(d, c[e], e, c[e].data[t], t, c[e].data[t].name, n), d._dataIndex = t, this.shapeList.push(d))
        },
        getSector: function(e, t, n, r, i, s, u, a, f) {
            var l = this.series,
                p = l[e],
                d = p.data[t],
                v = [d, p],
                m = this.parseCenter(this.zr, p.center),
                g = this.deepMerge(v, "itemStyle.normal") || {},
                y = this.deepMerge(v, "itemStyle.emphasis") || {},
                b = this.getItemStyleColor(g.color, e, t, d) || f,
                w = this.getItemStyleColor(y.color, e, t, d) || (typeof b == "string" ? h.lift(b, -0.2) : b),
                E = {
                    zlevel: this._zlevelBase,
                    clickable: !0,
                    style: {
                        x: m[0],
                        y: m[1],
                        r0: i,
                        r: s,
                        startAngle: u,
                        endAngle: a,
                        brushType: "both",
                        color: b,
                        lineWidth: g.borderWidth,
                        strokeColor: g.borderColor,
                        lineJoin: "round"
                    },
                    highlightStyle: {
                        color: w,
                        lineWidth: y.borderWidth,
                        strokeColor: y.borderColor,
                        lineJoin: "round"
                    },
                    _seriesIndex: e,
                    _dataIndex: t
                };
            if (r) {
                var S = ((E.style.startAngle + E.style.endAngle) / 2).toFixed(2) - 0;
                E.style._hasSelected = !0, E.style._x = E.style.x, E.style._y = E.style.y;
                var x = this.query(p, "selectedOffset");
                E.style.x += c.cos(S, !0) * x, E.style.y -= c.sin(S, !0) * x, this._selected[e][t] = !0
            } else this._selected[e][t] = !1;
            this._selectedMode && (E.onclick = this.shapeHandler.onclick), this.deepQuery([d, p, this.option], "calculable") && (this.setCalculable(E), E.draggable = !0);
            if (this._needLabel(p, d, !0) || this._needLabelLine(p, d, !0)) E.onmouseover = this.shapeHandler.onmouseover;
            return E = new o(E), E
        },
        getLabel: function(e, t, n, i, s, o, u, a) {
            var f = this.series,
                h = f[e],
                p = h.data[t];
            if (!this._needLabel(h, p, a)) return;
            var d = a ? "emphasis" : "normal",
                v = l.merge(l.clone(p.itemStyle) || {}, h.itemStyle),
                m = v[d].label,
                g = m.textStyle || {},
                y = this.parseCenter(this.zr, h.center),
                b = y[0],
                w = y[1],
                E, S, x = ((o + s) / 2 + 360) % 360,
                T = this.parseRadius(this.zr, h.radius),
                N, C = "middle";
            return m.position = m.position || v.normal.label.position, m.position == "center" ? (T = T[1], E = b, S = w, N = "center") : m.position == "inner" ? (T = (T[0] + T[1]) / 2 + i, E = Math.round(b + T * c.cos(x, !0)), S = Math.round(w - T * c.sin(x, !0)), u = "#fff", N = "center") : (T = T[1] - -v[d].labelLine.length + i, E = b + T * c.cos(x, !0), S = w - T * c.sin(x, !0), N = x >= 90 && x <= 270 ? "right" : "left"), m.position != "center" && m.position != "inner" && (E += N == "left" ? 20 : -20), p.__labelX = E - (N == "left" ? 5 : -5), p.__labelY = S, new r({
                zlevel: this._zlevelBase + 1,
                hoverable: !1,
                style: {
                    x: E,
                    y: S,
                    color: g.color || u,
                    text: this.getLabelText(e, t, n, d),
                    textAlign: g.align || N,
                    textBaseline: g.baseline || C,
                    textFont: this.getFont(g)
                },
                highlightStyle: {
                    brushType: "fill"
                },
                _seriesIndex: e,
                _dataIndex: t
            })
        },
        getLabelText: function(e, t, n, r) {
            var i = this.series,
                s = i[e],
                o = s.data[t],
                u = this.deepQuery([o, s], "itemStyle." + r + ".label.formatter");
            if (!u) return o.name;
            if (typeof u == "function") return u(s.name, o.name, o.value, n);
            if (typeof u == "string") return u = u.replace("{a}", "{a0}").replace("{b}", "{b0}").replace("{c}", "{c0}").replace("{d}", "{d0}"), u = u.replace("{a0}", s.name).replace("{b0}", o.name).replace("{c0}", o.value).replace("{d0}", n), u
        },
        getLabelLine: function(e, t, n, r, i, s, o, a, f) {
            var h = this.series,
                p = h[e],
                d = p.data[t];
            if (this._needLabelLine(p, d, f)) {
                var v = f ? "emphasis" : "normal",
                    m = l.merge(l.clone(d.itemStyle) || {}, p.itemStyle),
                    g = m[v].labelLine,
                    y = g.lineStyle || {},
                    b = this.parseCenter(this.zr, p.center),
                    w = b[0],
                    E = b[1],
                    S = i,
                    x = this.parseRadius(this.zr, p.radius)[1] - -g.length + n,
                    T = (o + s) / 2 % 360,
                    N = c.cos(T, !0),
                    C = c.sin(T, !0);
                return new u({
                    zlevel: this._zlevelBase + 1,
                    hoverable: !1,
                    style: {
                        pointList: [
                            [w + S * N, E - S * C],
                            [w + x * N, E - x * C],
                            [d.__labelX, d.__labelY]
                        ],
                        strokeColor: y.color || a,
                        lineType: y.type,
                        lineWidth: y.width
                    },
                    _seriesIndex: e,
                    _dataIndex: t
                })
            }
            return
        },
        _needLabel: function(e, t, n) {
            return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".label.show")
        },
        _needLabelLine: function(e, t, n) {
            return this.deepQuery([t, e], "itemStyle." + (n ? "emphasis" : "normal") + ".labelLine.show")
        },
        reformOption: function(e) {
            var t = l.merge;
            return e = t(e || {}, this.ecTheme.pie), e.itemStyle.normal.label.textStyle = t(e.itemStyle.normal.label.textStyle || {}, this.ecTheme.textStyle), e.itemStyle.emphasis.label.textStyle = t(e.itemStyle.emphasis.label.textStyle || {}, this.ecTheme.textStyle), e
        },
        refresh: function(e) {
            e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
        },
        addDataAnimation: function(e) {
            var t = this.series,
                n = {};
            for (var r = 0, i = e.length; r < i; r++) n[e[r][0]] = e[r];
            var s = {},
                o = {},
                u = {},
                f = this.shapeList;
            this.shapeList = [];
            var l, c, h, p = {};
            for (var r = 0, i = e.length; r < i; r++) l = e[r][0], c = e[r][2], h = e[r][3], t[l] && t[l].type == a.CHART_TYPE_PIE && (c ? (h || (s[l + "_" + t[l].data.length] = "delete"), p[l] = 1) : h ? p[l] = 0 : (s[l + "_-1"] = "delete", p[l] = -1), this._buildSinglePie(l));
            var d, v;
            for (var r = 0, i = this.shapeList.length; r < i; r++) {
                l = this.shapeList[r]._seriesIndex, d = this.shapeList[r]._dataIndex, v = l + "_" + d;
                switch (this.shapeList[r].type) {
                    case "sector":
                        s[v] = this.shapeList[r];
                        break;
                    case "text":
                        o[v] = this.shapeList[r];
                        break;
                    case "broken-line":
                        u[v] = this.shapeList[r]
                }
            }
            this.shapeList = [];
            var m;
            for (var r = 0, i = f.length; r < i; r++) {
                l = f[r]._seriesIndex;
                if (n[l]) {
                    d = f[r]._dataIndex + p[l], v = l + "_" + d, m = s[v];
                    if (!m) continue;
                    if (f[r].type == "sector") m != "delete" ? this.zr.animate(f[r].id, "style").when(400, {
                        startAngle: m.style.startAngle,
                        endAngle: m.style.endAngle
                    }).start() : this.zr.animate(f[r].id, "style").when(400, p[l] < 0 ? {
                        startAngle: f[r].style.startAngle
                    } : {
                        endAngle: f[r].style.endAngle
                    }).start();
                    else if (f[r].type == "text" || f[r].type == "broken-line")
                        if (m == "delete") this.zr.delShape(f[r].id);
                        else switch (f[r].type) {
                            case "text":
                                m = o[v], this.zr.animate(f[r].id, "style").when(400, {
                                    x: m.style.x,
                                    y: m.style.y
                                }).start();
                                break;
                            case "broken-line":
                                m = u[v], this.zr.animate(f[r].id, "style").when(400, {
                                    pointList: m.style.pointList
                                }).start()
                        }
                }
            }
            this.shapeList = f
        },
        onclick: function(e) {
            var t = this.series;
            if (!this.isClick || !e.target) return;
            this.isClick = !1;
            var n, r = e.target,
                i = r.style,
                s = f.get(r, "seriesIndex"),
                o = f.get(r, "dataIndex");
            for (var u = 0, l = this.shapeList.length; u < l; u++)
                if (this.shapeList[u].id == r.id) {
                    s = f.get(r, "seriesIndex"), o = f.get(r, "dataIndex");
                    if (!i._hasSelected) {
                        var h = ((i.startAngle + i.endAngle) / 2).toFixed(2) - 0;
                        r.style._hasSelected = !0, this._selected[s][o] = !0, r.style._x = r.style.x, r.style._y = r.style.y, n = this.query(t[s], "selectedOffset"), r.style.x += c.cos(h, !0) * n, r.style.y -= c.sin(h, !0) * n
                    } else r.style.x = r.style._x, r.style.y = r.style._y, r.style._hasSelected = !1, this._selected[s][o] = !1;
                    this.zr.modShape(r.id, r)
                } else this.shapeList[u].style._hasSelected && this._selectedMode == "single" && (s = f.get(this.shapeList[u], "seriesIndex"), o = f.get(this.shapeList[u], "dataIndex"), this.shapeList[u].style.x = this.shapeList[u].style._x, this.shapeList[u].style.y = this.shapeList[u].style._y, this.shapeList[u].style._hasSelected = !1, this._selected[s][o] = !1, this.zr.modShape(this.shapeList[u].id, this.shapeList[u]));
            this.messageCenter.dispatch(a.EVENT.PIE_SELECTED, e.event, {
                selected: this._selected,
                target: f.get(r, "name")
            }, this.myChart), this.zr.refresh()
        }
    }, l.inherits(p, n), l.inherits(p, t), e("../chart").define("pie", p), p
}), define("_chart", ["require", "echarts/chart/gauge", "echarts/chart/funnel", "echarts/chart/scatter", "echarts/chart/k", "echarts/chart/radar", "echarts/chart/chord", "echarts/chart/force", "echarts/chart/line", "echarts/chart/bar", "echarts/chart/pie"], function(e) {
    e("echarts/chart/gauge"), e("echarts/chart/funnel"), e("echarts/chart/scatter"), e("echarts/chart/k"), e("echarts/chart/radar"), e("echarts/chart/chord"), e("echarts/chart/force"), e("echarts/chart/line"), e("echarts/chart/bar"), e("echarts/chart/pie")
});