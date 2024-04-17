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
        className='h-[40px]  text-gray-400 m-0 border-none'
        showTime
       
        onOpenChange={handleOpenChange}
        visible={dateVisible}
      />
    </Space>
  );
}

export default Date2;
