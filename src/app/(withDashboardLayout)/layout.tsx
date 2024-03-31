import DashboardDrawer from '@/components/Dashboard/DashboardDrawer/DashboardDrawer';
import React from 'react';

const layout = ({children} :{children: React.ReactNode}) => {
    return (
        <DashboardDrawer>{children}</DashboardDrawer>
    );
};

export default layout;