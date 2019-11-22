import React, { useState, useEffect } from 'react'
import { MuxCard, MuxLoading, MuxSelect, MuxCalendar, MuxStatistic, MuxIcon, MuxTooltip, MuxChart, MuxButton } from '@alife/mux-components'
import { Row, Col } from 'components/styled/layout'

import { useSelector } from 'react-redux'
import { getLocationSearch } from 'models/redux/modules/common/selectors'
import customHistory from 'models/history'
import moment, { Moment } from 'moment'

import { fetch, useResponse } from 'models/rapper'

const ProjectIndexes = [
  { value: 'charge', text: '消耗（元）', tip: '选定时间内的信息流广告总花费。' },
  { value: 'adPv', text: '展现量', tip: '选定时间内的信息流广告展现总量。' },
  { value: 'click', text: '点击量', tip: '选定时间内的信息流广告点击总量。' },
  { value: 'ecpm', text: '千次展现成本（元）', tip: '千次展现成本 = 消耗 / 展现量 * 1000。' },
  { value: 'ecpc', text: '点击成本（元）', tip: '点击成本 = 消耗 / 点击量。' },
] as const
const ChartHead = ['xfield', 'day-1', 'day-2'] as const
type IIndex = typeof ProjectIndexes[any]['value']
const bizCode = '10'

export default function HomeView() {
  const search = useSelector(getLocationSearch)
  const ef = search.ef !== 'logDate' ? 'hourId' : 'logDate'
  const startDate = search.startDate || moment().subtract(1, 'days').format('YYYY-MM-DD')
  const endDate = search.endDate || moment().format('YYYY-MM-DD')

  const [dayBudgetResult, { isPending: dayBudgetLoading }] = useResponse['GET/api/campaign/findDayBudgetSum.json']()
  const [totalBudgetResult, { isPending: totalBudgetLoading }] = useResponse['GET/api/account/getInfo.json']()

  const [hourSum, { isPending: hourSumLoading }] = useResponse['GET/api/account/report/findHourSum.json']()
  const [hourList, { isPending: hourListLoading }] = useResponse['GET/api/account/report/findHourList.json']()
  const [daySum, { isPending: daySumLoading }] = useResponse['GET/api/account/report/findDaySum.json']()
  const [dayList, { isPending: dayListLoading }] = useResponse['GET/api/account/report/findDayList.json']()
  const [theSum, theSumLoading] = (ef !== 'logDate') ? [hourSum, hourSumLoading] : [daySum, daySumLoading]
  const theListLoading = (ef !== 'logDate') ? hourListLoading : dayListLoading

  const [selectedField, setSelectedField] = useState<IIndex>(ProjectIndexes[0].value)

  const chartHourOption = React.useMemo(() => ({
    coord: {
      type: 'rect',
      xAxis: {
        field: 'xfield',
        label: { rotation: 0 },
      },
    },
    graphs: [
      {
        type: 'line',
        field: ['day-1'],
        area: { alpha: [0.1, 0] },
        icon: { corner: true },
        node: { visible: false },
      },
      {
        type: 'line',
        field: ['day-2'],
        area: { alpha: [0.1, 0] },
        node: { visible: false },
      },
    ].slice(ef === 'logDate' ? 1 : 0),
    tips: { pointer: 'line' },
  }), [ef])
  const chartHourData = React.useMemo(() => {
    const result: any[][] = [[...ChartHead]]
    const hourIdDataMap: { [key: number]: { [key: string]: number } } = {}
    const dateSet = new Set<string>()
    for (const item of (hourList?.data.list || [])) {
      dateSet.add(item.logDate)
      hourIdDataMap[item.hourId] = Object.assign(
        {},
        hourIdDataMap[item.hourId],
        { [item.logDate]: item[selectedField] }
      )
    }
    const dates = Array.from(dateSet)

    for (let i = 1; i < 25; i++) {
      result.push([
        `${i < 10 ? '0' + i : i}:00`,
        (i in hourIdDataMap ? hourIdDataMap[i][dates[0]] : 0) || 0,
        (i in hourIdDataMap ? hourIdDataMap[i][dates[1]] : 0) || 0,
      ])
    }
    return result
  }, [hourList, selectedField])
  const chartDayData = React.useMemo(() => {
    const result: any[][] = [[...ChartHead]]
    const dayDataMap: { [key: string]: number } = {}
    for (const item of (dayList?.data.list || [])) {
      dayDataMap[item.logDate] = item[selectedField]
    }
    let date: Moment = moment(startDate)
    const endDateValue = moment(endDate).valueOf()
    do {
      const dateStr = date.format('YYYY-MM-DD')
      result.push([
        dateStr,
        (dateStr in dayDataMap ? dayDataMap[dateStr] : 0) || 0,
        0,
      ])
      date = date.add(1, 'day')
    } while (date.valueOf() < endDateValue)
    return result
  }, [dayList, selectedField, endDate, startDate])

  useEffect(() => {
    if (ef !== 'logDate') {
      fetch['GET/api/account/report/findHourSum.json']({
        logDateList: [startDate, endDate],
        bizCode,
      })
      fetch['GET/api/account/report/findHourList.json']({
        logDateList: [startDate, endDate],
        bizCode,
      })
    } else {
      fetch['GET/api/account/report/findDaySum.json']({
        startTime: startDate,
        endTime: endDate,
        bizCode,
      })
      fetch['GET/api/account/report/findDayList.json']({
        startTime: startDate,
        endTime: endDate,
        bizCode,
      })
    }
  }, [ef, startDate, endDate])

  useEffect(() => {
    fetch['GET/api/campaign/findDayBudgetSum.json']({
      bizCode,
    })
    fetch['GET/api/account/getInfo.json']()
  }, [])

  return (
    <>
      <MuxCard>
        <p>【直播推广】<span className="text-emphasis">1个</span>计划存在投放障碍。<span className="text-emphasis">5个</span>单元存在投放障碍。</p>
        <p>【商品推广】<span className="text-emphasis">1个</span>计划存在投放障碍。<span className="text-emphasis">5个</span>单元存在投放障碍。</p>
      </MuxCard>
      <Row margin={8}>
        <Col style={{ flexBasis: 800 }}>
          <MuxCard
            title="账户整体效果概览"
          >
            <div className="clearfix mb4x">
              <MuxSelect
                className="fl"
                value={ef}
                style={{ width: 140 }}
                onChange={(value) => {
                  customHistory.push({
                    ef: value,
                    startDate: moment().subtract(1, value === 'logDate' ? 'month' : 'day').format('YYYY-MM-DD'),
                    endDate: moment().subtract(value === 'logDate' ? 1 : 0, 'day').format('YYYY-MM-DD'),
                  })
                }}
              >
                <MuxSelect.Option value="hourId">单日投放数据</MuxSelect.Option>
                <MuxSelect.Option value="logDate">历史投放数据</MuxSelect.Option>
              </MuxSelect>
              <MuxCalendar
                className="fr"
                mode={ef !== 'logDate' ? 'versus' : 'range'}
                style={{ width: 200 }}
                value={[startDate, endDate]}
                onChange={([startDate, endDate]: string[]) => {
                  customHistory.push({ startDate, endDate })
                }}
              />
            </div>
            <MuxLoading loading={theSumLoading}>
              <Row margin={32}>
                {ProjectIndexes.map(({ value, text, tip }, index) => (
                  <Col key={index}>
                    <div className="f12 gray cp">
                      {text}
                      <MuxTooltip
                        content={tip}
                      >
                        <MuxIcon
                          type="iconbangzhushouce"
                          className="ml1x grayLight cp"
                        />
                      </MuxTooltip>
                    </div>
                    <MuxStatistic
                      className="mt2x"
                      active={selectedField === value}
                      onClick={() => setSelectedField(value)}
                      value={theSum && theSum.data.list[0][value]}
                      alternative={theSum && theSum.data.list[1] && theSum.data.list[1][value]}
                    />
                  </Col>
                ))}
              </Row>
            </MuxLoading>
            <MuxLoading loading={theListLoading}>
              <MuxChart
                width="100%"
                height={300}
                data={ef === 'hourId' ? chartHourData : chartDayData}
                options={chartHourOption}
              />
            </MuxLoading>
          </MuxCard>
        </Col>
        <Col>
          <MuxCard
            className="ml2x mb2x"
            title="账户余额"
          >
            <MuxLoading loading={totalBudgetLoading}>
              <div className="mb4x">
                可用余额
                <MuxStatistic
                  className="ml4x"
                  value={totalBudgetResult && totalBudgetResult.data.result.balance}
                  unit="元"
                />
              </div>
              <div>
                <MuxButton className="mr2x" type="primary">
                  充值
                </MuxButton>
                <MuxButton className="mr2x" type="secondary">
                  账户明细
                </MuxButton>
              </div>
            </MuxLoading>
          </MuxCard>
          <MuxCard
            className="ml2x"
            title="今日结算"
          >
            <MuxLoading loading={dayBudgetLoading}>
              <div className="mb2x lh32">
                图文推广
                <MuxStatistic
                  value={dayBudgetResult?.data.feedFlowPicture}
                  unit="元"
                  className="ml4x"
                />
              </div>
              <div className="mb2x lh32">
                直播推广
                <MuxStatistic
                  value={dayBudgetResult?.data.feedFlowLive}
                  unit="元"
                  className="ml4x"
                />
              </div>
              <div className="mb4x lh32">
                商品推广
                <MuxStatistic
                  value={dayBudgetResult?.data.feedFlowItem}
                  unit="元"
                  className="ml4x"
                />
              </div>
              <MuxButton
                type="primary"
              >
                新建推广计划
              </MuxButton>
            </MuxLoading>
          </MuxCard>
        </Col>
      </Row>
    </>
  )
}
