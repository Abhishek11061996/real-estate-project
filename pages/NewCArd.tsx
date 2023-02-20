
import React, { useRef ,useState} from "react";
import { Eye, User } from 'tabler-icons-react';
import {
  createStyles, Title, Grid, Button, Container,Group,
  Paper, Image, Divider, Center, Flex, Text,Transition
} from '@mantine/core';
const useStyles = createStyles((theme) => ({

  card_image: {
    // border: "1.5px solid #8f90a6", 
    borderRadius: "20px",
    [`@media (min-width: ${850}px)`]: {
      //  border:"2px solid red",
      height: 200
    },
    [`@media (max-width: ${780}px)`]: {
      // border:"2px solid green",
      height: 200
    },
  },
}));
const NewCard = () => {

  const { classes } = useStyles();
  let data = [
    { image: '	https://picsum.photos/id/174/158/200' },
    { image: "https://fastly.picsum.photos/id/163/158/200.jpg?hmac=xPfKiyKAVavFq77zaViOUAZqGCgZMAXBzmDe2L-Q62U" },
    { image: '	https://picsum.photos/id/220/158/200    ' },
    { image: '		https://picsum.photos/id/232/158/200    ' },
    { image: '	https://picsum.photos/id/174/158/200' },
    { image: 'https://picsum.photos/id/270/158/200    ' }
  ]
  return (
    <Group
   
  
    >
      <Group  grow style={{width:"100%"}}
        sx={() => ({
        
          "@media (min-width: 1px)": {
            // backgroundColor:'red',
             padding:'0px 20px'
           }, "@media (min-width: 450px)": {
            marginTop:'40px',
             padding:'0px 20px'
           }, "@media (min-width: 998px)": {
            marginTop:'80px',
             padding:'0px 80px'
           },
         })}
      >
       <Grid justify="space-between"
       py={20}
       >
          <Grid.Col xs={6}>
          <Flex justify='flex-start'  align="center">
          <Title weight={650} order={2} size={30}   >Recently Added</Title>

         </Flex>
          </Grid.Col>
          <Grid.Col xs={6}>
         <Flex
  
  align="center"
  direction="row"
  wrap="wrap"   
  sx={() => ({
  
    "@media (min-width: 1px)": {
      display:'flex' ,
      justifyContent:'flex-start',
    
     }, "@media (min-width: 768px)": {

      display:'flex' ,
      justifyContent:'flex-end'
     },
   })}
      
       >
          <Title  color='#1daeff' weight={600} order={3} size={18}   >See All</Title>
         </Flex>
          </Grid.Col>
       </Grid>
      </Group>
      
     <Grid grow gutter={40} 
      m='auto'
  justify="space-between"
      sx={() => ({
             marginTop:25,
        "@media (min-width: 1px)": {
          // backgroundColor:'red',
           padding:'0px 20px'
         }, "@media (min-width: 450px)": {
          // backgroundColor:'green',
           padding:'0px 20px'
         }, "@media (min-width: 998px)": {
          // backgroundColor:'blue',
           padding:'0px 70px',
           
         },
       })}
      >
        {
          data.map((e): any => {
            return (

           
               // eslint-disable-next-line react/jsx-key
               <Grid.Col xs={6} sm={6} 
               className="image_card"
              // px={25}
              // m='auto'
             
           >
 <Grid 
              // bg='red'
             py={20}
             px={10}
            //  bg='red'
              style={{ border: "1.5px solid #8f90a6", borderRadius: "20px" }} 
                 className='item'>
               <Grid.Col md={5} className={classes.card_image} >
                 <div >
                   <Image
                     height={170}
                     src={e.image}
                     alt="No way!"
                     radius='lg'
                   
                   />
                 </div>
               </Grid.Col>
               <Grid.Col md={7} pl={20}>
                 <div>
                   <Title weight={600} order={3} size={24} pb={18} className='card_Heading' >103/143 West Street, Crows Nest</Title>
                   <Flex justify={'space-between'} >
                     <Title weight={500} order={1} size={18} pb={20} color="#8f90a6"  >10 Bedroom</Title>
                     <Title weight={500} order={1} size={18} pb={20} color="#8f90a6" > 150 M</Title>
                     <Title weight={500} order={1} size={18} pb={20} color="#8f90a6" >  2 Garage</Title>
                   </Flex>
                   <Flex justify={'space-between'} m="auto">
                     <Title weight={500} order={1} color="gray" size={18} pt={8}>  2 Garage</Title>
                     <Title weight={500} order={1} size={18}
                       style={{
                         background: "#8f90a6",
                         padding: "8px 19px",
                         fontSize: 18,
                         color: "white",
                         fontWeight: 500,
                         borderRadius: 10,
                       }}
                     >  $45,545</Title>
                   </Flex>
                 </div>
               </Grid.Col>
             </Grid>
           </Grid.Col>
         
           
            )
          })
        }

      </Grid>
    </Group>
  )

}
export default NewCard;














