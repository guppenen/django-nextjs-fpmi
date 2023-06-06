import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import { useTheme } from '@mui/material/styles';

import CustomButton from '../components/CustomButton';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  
  return (
    <>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.background.default,
            width: 256
          }
        }}
      >
        <Box
          height='100%'
          padding={2}
        >
          <Box width={1} paddingY={1}>
            <Link href='/' sx={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <AccountBalanceIcon 
                  sx={{ 
                    color: theme.palette.primary.main, 
                    height: 30, 
                    width: 30 
                  }} 
                />
                <Typography 
                  variant='h6'
                  color={theme.palette.primary.main}
                  flexGrow={1}
                  fontWeight='bold'
                  textDecoration='none'
                  marginLeft='10px'
                >
                  ФПМИ - МФТИ
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingY={2}>
            <CustomButton 
              href='#home'
              icon={<HomeIcon />}
              text='Home'
            />
            <Box paddingY={1}>
              <CustomButton 
                href='#projects'
                icon={<ListIcon />}
                text='Projects'
              />
            </Box>
            <Box>
              <Stack direction='row' spacing={1}>
                <IconButton 
                  aria-label='GitHub' 
                  href='https://github.com/guppenen'
                  target='_blank'
                  sx={{ 
                    color: theme.palette.primary.main,
                  }}
                >
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;