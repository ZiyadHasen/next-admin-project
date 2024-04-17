import React, { useState } from 'react';
import { Col, Row, Space, Layout } from 'antd';

import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import locale from 'antd/es/date-picker/locale/en_US';
import calander from '../images/calander.svg';
import Image from 'next/image';

const DatePicker = generatePicker(dayjsGenerateConfig);
const { Content } = Layout;

const Date = () => {
  const [startDateVisible, setStartDateVisible] = useState(false);

  const onChangeStartDate = (date) => {
    // Your implementation here
  };

  const onChangeEndDate = (date) => {
    console.log('dated');
    // Your implementation here
  };

  const handleOpenChange = (status) => {
    setStartDateVisible(status);
  };

  return (
    <Space className='date-range' size='small'>
      <DatePicker
        locale={locale}
        className='h-[40px]  m-0 border-none'
        onChange={onChangeStartDate}
        onOpenChange={handleOpenChange}
        visible={startDateVisible}
      />
      <p className='m-0 text-gray-500'>~</p>
      <DatePicker
        locale={locale}
        className='h-[40px m-0 border-none'
        onChange={onChangeEndDate}
      />
    </Space>
  );
};

export default Date;
