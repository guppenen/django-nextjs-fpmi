import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
const apiUrl = process.env.PUBLIC_BACKEND_URL;


const ProjectDetails = ({project}) => {

  const theme = useTheme();
  const [projects, setProjects] = useState(project);
    

  return (
    <div id='projects'>
      <Box
        position='relative'
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin='0 auto'
          paddingX={2}
          paddingY={4}
        >
            {projects.map((item, i) => (
     
                <Box display='block' width={1} height={1}>
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    display='flex'
                    flexDirection='column'
                  >
                    <CardMedia
                      component='img'
                      title={item.name}
                      image={`${apiUrl}${item.image}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant='h6'
                        align='left'
                        sx={{ fontWeight: 700 }}
                      >
                        {item.name}
                      </Typography>
                      <Box display='flex' alignItems='center' marginY={2}>
                        <Typography 
                          variant='subtitle2' 
                          color={theme.palette.text.secondary}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                      <Box marginTop={3} marginBottom={1}>
                        {item.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag.name}
                            variant='outlined'
                            size='small'
                            color='primary'
                            sx={{ 
                              marginBottom: 1, 
                              marginRight: 1,
                              '&:hover': {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.common.white,
                                border: '1px solid ' + theme.palette.primary.main
                              }
                            }}
                          />
                        ))}
                      </Box>
                     
                    </CardContent>
                  </Box>
                </Box>
           
            ))}
          
        </Box>
      </Box>
    </div>
  );
};

export default ProjectDetails;