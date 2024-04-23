import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import locale from 'antd/lib/date-picker/locale/en_US';

function Date2() {
  const [dateVisible, setDateVisible] = useState(false);

  const handleOpenChange = (status) => {
    setDateVisible(status);
  };

  return (
    <Space className='date-range' size='small'>
      <DatePicker
        locale={locale}
        className='h-[30px] py-0 text-gray-500 mb-[2px] m-0 border-none'
        showTime
        onOpenChange={handleOpenChange}
        visible={dateVisible}
        placeholder='2022-12-23 22:30'
      />
    </Space>
  );
}

export default Date2;
