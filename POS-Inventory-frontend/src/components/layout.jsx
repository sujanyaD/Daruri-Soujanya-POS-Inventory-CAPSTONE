import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {Box} from '@mui/material';

const Layout = ({ children }) => {
    return (
        <Box display="flex" sx={{
            position:"absolute",left:0
        }}>
            <Box>
                <Sidebar />
            </Box>
            <Box flexGrow={6} padding={3}>
                {children}
            </Box>
            <Box>
                <Navbar />
            </Box>
        </Box>
    );
};
export default Layout;