import { useState } from 'react'
//component
import Month from './Month';
import Day from './day';
import Week from "./Week"
//ant design
import { Tabs } from 'antd';
import { DayDatePicker, WeekDatePicker, MonthDatePicker } from './datePicker/DatePicker';

const { TabPane } = Tabs;

export default function TabelTab({ setIsVisible }) {
  const [tab, setTab] = useState("1")

  // Toggle Picker
  const operations = (tab === "1" && <DayDatePicker />) || (tab === "2" && <WeekDatePicker />) || (tab === "3" && <MonthDatePicker />);

  return (
    <div className='tab'>
      <Tabs onChange={(value) => setTab(value)} defaultActiveKey="1" type="card" tabBarExtraContent={operations} size="large">
        <TabPane tab="Day" key="1">
          <Day setIsVisible={setIsVisible} />
        </TabPane>
        <TabPane tab="Week" key="2">
          <Week setIsVisible={setIsVisible} />
        </TabPane>
        <TabPane tab="Month" key="3">
          <Month setIsVisible={setIsVisible} />
        </TabPane>
      </Tabs>
    </div>
  )
}
