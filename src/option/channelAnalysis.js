const getOption = (obj) => {
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            bottom: '20',
            data: obj.legend
        },
        grid: {
            show: true,
            top: '10%',
            left: '3%',
            right: '3%',
            bottom: '20%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                // 刻度与标签对齐
                alignWithLabel: true
                    // 隔1个显示1个标签
            },
            axisLabel: {
                // formatter: '{value} %',
                textStyle: {
                  color: '#333'
                }
            },
            axisLine: {
                show: true,
                onZero: true,
                lineStyle: {
                  color: '#4488BB',
                  width: 2
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted'
                }
            },
            boundaryGap: false,
            data: obj.xAxis
        }],
        yAxis: {
            type: 'value',
            axisTick: {
                // 刻度与标签对齐
                alignWithLabel: true
            },
            splitLine: {
                lineStyle: {
                    type: 'dotted'
                }
            },
            axisLabel: {
                // formatter: '{value} %',
                textStyle: {
                  color: '#333'
                }
            },
            axisLine: {
                show: true,
                onZero: true,
                lineStyle: {
                  color: '#4488BB',
                  width: 2
                }
            },
            axisTick: {
                show: true
            }
        },
        series: obj.series
    }
    return option;	
}

export { getOption };