import React, { useRef, useState } from "react";
import { Eye, User, } from 'tabler-icons-react';
import{
  createStyles, Title, Grid , Group,  Button, Container, Paper, Image, Divider, Center, Flex, Text, Transition} from '@mantine/core';
  // import { useMediaQuery } from '@mantine/hooks';


const useStyles = createStyles((theme) => ({

  card_image: {
    borderRadius: "20px",
    [`@media (min-width: ${850}px)`]: {
      height: 200
    },
    [`@media  (max-width: ${780}px)`]: {
      height: 200
    },
  },
}))
  
 

  const Second_Card_Grid = () => {

    const { classes } = useStyles();
    let data= [
      {image: 'https://fastly.picsum.photos/id/163/158/200.jpg?hmac=xPfKiyKAVavFq77zaViOUAZqGCgZMAXBzmDe2L-Q62U'},
      {image: 'https://fastly.picsum.photos/id/174/158/200.jpg?hmac=XdS5N6YWVZBFq1tRBT1GUM6mXMSN0vtC-8b0mpjNgaM'},
      {image: 'https://fastly.picsum.photos/id/164/158/200.jpg?hmac=tqwH4xWDIT42EUOKbIFS2eegfQlqFrPIMkkgc3MwYzw'},
      {image: 'https://fastly.picsum.photos/id/220/158/200.jpg?hmac=X7XPqo6Ibp29PyT7KgwEM5iso5gFtRFNHed08rkjE5A'},
      {image: 'https://fastly.picsum.photos/id/232/158/200.jpg?hmac=ezC9I5ldiCuvBCO_9u1aGdfeSJ3xjCYJGnbrYlkComw'},
      {image: 'https://fastly.picsum.photos/id/270/158/200.jpg?hmac=Wcg6bTgZIKvEWi6-l7UF2Cuvnmtr0by42RxZ-RV3mM0'},

    ]
    return (
      

      <Group 

       >
        <Group grow style={{width:'100%'}}
        sx={() => ({
          marginTop:25,
          "@media (min-width: 1px)": {
            padding:'0px 20px'

          }, "@media (min-width: 450px)": {
            marginTop:'40px',
            padding:'0px 20px'

          }, "@media (min-width: 998px)": {
            marginTop:'20px',
            padding:'0px 80px'
          },
        })}
        >
          <Grid justify="space-between"
          py={20}
          >
            <Grid.Col xs={6}>
              <Flex justify="flex-start" align="center">
                <Title weight={650} order={2} size={38} ml='xl' >Recently Added</Title>
              </Flex>
            </Grid.Col>
            <Grid.Col xs={6}>
              <Flex
              align="center"
              direction="row"
              wrap="wrap"
              sx={() => ({
               
                "@media (min-width: 1px)": {
                  display:'flex',
                  justifyContent:'flex-start'
      
                }, "@media (min-width: 768px)": {
                  display:'flex',
                  justifyContent:'flex-end'
      
                },
              })}
              >
                <Title color="#1daeff" weight={600} order={3} size={18} mr="md">See All</Title>
              </Flex>
            </Grid.Col>
            </Grid>
            </Group>
            <Grid grow gutter={40}
            m="auto"
            justify="space-between"
            sx={() => ({
              marginTop:25,
              "@media (min-width: 1px)": {
                backgroundColor:'',
                padding:'0px 20px'
    
              }, "@media (min-width: 450px)": {
                backgroundColor:'',
                padding:'0px 20px'
    
              }, "@media (min-width: 998px)": {
                backgroundColor:'',
                padding:'0px 70px',
              },
            })}
            >

          {
            data.map((e): any => {
              return (
                
                // eslint-disable-next-line react/jsx-key
                <Grid.Col xs={6} sm={6}
                // px={25}
                // m='auto'
                >  
       <Grid 
                  // py={20}
                  // px={10}
                  // style={{border: '1px solid #dcdceb' , padding: 30, borderRadius:'20px', width:'100%',}}
                  style={{border: '1.5px solid #8590a6' ,  borderRadius:'20px',}}
                  // style={{border:'1px solid #dcdceb', borderRadius:'30px',padding:' ', display:'flex'}}
                  className="item" >
                    <Grid.Col md={5} className={classes.card_image}  >
                      <div>
                        <Image
                        height={170}
                        // width="158px"
                        src={e.image}
                        alt="No way!"
                        radius="lg"
                        // width='auto'
                        
                        />
                      </div>
                      </Grid.Col>
                        <Grid.Col md={7} pl={20}>
                          <div>
                            <Title weight={600} order={3} size='24px' pb='18px' lh="36px" className="card_Heading" color="#110229">103/143 West Street, Crows Nest</Title>
                            <Flex justify={"space-between"}>
                              <Title weight={500} order={1} size={18} pb={20} color="#8f90a6">10 Bedroom</Title>
                              <Title weight={500} order={1} size={18} pb={20} color="#8f90a6">150 M</Title>
                              <Title weight={500} order={1} size={18} pb={20} color="#8f90a6">2 Garage</Title>
                            </Flex>
                            <Flex justify={'space-between'} m="auto">
                              <Title weight={500} order={1} color="gray" size={18} pt={8}> Posted by X Builder  </Title>
                              <Title weight={500} order={1} size={18}
                              style={{
                                background: '#8f90a6',
                                padding: "8px 19px",
                                fontSize: 18,
                                color: "white",
                                fontWeight: 500,
                                borderRadius: 10,
                              }}
                              > $45,545</Title>
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
        export default Second_Card_Grid;



        {/* <Flex justify="space-between" p={20} >
          <Title style={{
            fontSize:'38',
            fontWeight: '700',
            color:'#110229',
          }}>Recently Added</Title>
          <Title style={{
            fontSize: 18,
            fontWeight: 500
          }} color="blue">See All</Title>
        </Flex>
        <Grid>
          {
            data.map((e): any=>{
              return(
                // eslint-disable-next-line react/jsx-key
                <Grid.Col xs={12} sm={6} p={30} m={-8} >
                  <Flex style={{border: '1px solid #dcdceb' , padding: 30, borderRadius:'20px', width:'100%',}} >
                    <Grid >
                      <Grid.Col md={5} >
                        <Image
                        radius="md"
                        src={e.image}
                        alt="No Img!"
                        // height={180}
                        // width="100%"
                        m="auto"
                        height={199}
                        style={{width:'100%', margin:'0', padding:'0', boxSizing:'border-box'}}
                        
                        
                        />
                        </Grid.Col>


                        <Grid.Col md={7} >
                          <div style={{margin:'0', padding:'0', boxSizing:'border-box'}}>
                            <Title weight={800} order={3} size={24} m={0} p={6} pb={20}>103/143 West Street, Cross Nest</Title>
                            <Flex justify={'space-between'} >
                              <Title weight={500} order={1} size={18} pb={20} color='#8f90a6' >10 Bedroom</Title>
                              <Title weight={500} order={1} size={16} pb={20} color='#8f90a6'>150 M</Title>
                              <Title weight={500} order={1} size={16} pb={20} color='#8f90a6'>2 Garage</Title>
                            </Flex>
                            <Flex justify={'space-between'} mt="lg">
                              <Title weight={600} order={1} color='gray' size={18} m={3} p={6}> Posted By X</Title>
                              <Title weight={600} order={1} size={18} m={3} p={6} px={15}
                              style={{
                                background:'#8f90a6',
                                padding:'8px 19px',
                                fontSize:18,
                                color:"white",
                                fontWeight: 500,
                                borderRadius: 10,
                              }}
                              
                              > $45,545</Title>
                            </Flex>
                          </div>
                        </Grid.Col>
                      
                    </Grid>
                  </Flex>
                </Grid.Col>
              )
            })
          }
        </Grid>
      </div>
    )

  }
  export default Second_Card_Grid */}
