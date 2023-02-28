import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {useDispatch,useSelector} from 'react-redux'
import { GetData } from '../redux/AppReducer/Action'
import JobCart from '../components/JobCart'

function JobListing() {
  const dispatch = useDispatch()
  const data = useSelector((e) => e.AppReducer.data)
  useEffect(()=>{
    dispatch(GetData())
  },[])
  const color = useSelector((e) => e.AppReducer.color);
  return (
    <Box bg={color[2]} >
      <Navbar />
      <Grid justifyContent={'center'} mt={'50px'} w={'100%'} gap={'20px'} >
      {
        data.map((e,i) => (
          <JobCart key={i} {...e} />
        ))
      }
      </Grid>
    </Box>
  )
}

export default JobListing