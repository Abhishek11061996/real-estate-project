import React, { useRef } from 'react';
import { createStyles, BackgroundImage, Box, Center, Card, Grid, Flex, Paper, Select, Overlay, Container, Title, Button, Text } from '@mantine/core';
// import { LineHeight } from 'tabler-icons-react';
import { IconSearch } from '@tabler/icons';

const useStyles = createStyles((theme) => ({

  banner_image:{
    [`@media (min-width: ${850}px)`]: {
      border: '2px solid red'
    },
    [`@media (max-width: ${780}px)`]: {
      border:'2px solid green'
    }
  }
}));

const HeroContentLeft = () => {
  const { classes } = useStyles();
  let rent_buy_sell = {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: ".2em",
    // color: "#8f90a6",
    // padding: "8px 29px",
    border: 0,
    borderRadius:'12px'
    
  }
  return (
    <Grid style={{ padding: "2vw" }} mt={65} ml="0px" mr="0px"  >
      <Grid.Col xs={12}
       sx={() => ({ "@media (min-width: 1px)": { backgroundColor:"", maxWidth:'', fontSize:'', paddingTop:'60px', paddingLeft:'', marginLeft:'0px', marginRight:'0px' }, "@media (min-width: 450px)":{backgroundColor:"", maxWidth:'', fontSize:''},"@media (min-width: 768px)":{backgroundColor:"", maxWidth:'', },})}
      
      >
        <BackgroundImage src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/banner-image.jpg"
        radius={50}>
        
        <div style={{ padding: "5vw 5vw"}}>
          <Title order={1} mt={20} 
           sx={() => ({ "@media (min-width: 1px)": { backgroundColor:"", maxWidth:'991px', fontSize:'40px' }, "@media (min-width: 450px)":{backgroundColor:"", maxWidth:'991px', fontSize:'40px'},"@media (min-width: 768px)":{backgroundColor:"", maxWidth:'490px', fontSize:'56px',fontWeight:'600',color:'#110229'},})}
           pb={38}
           size="56px"
           weight="700"
           
           >
           Easy way to find a perfect property </Title>
           <Text 
           pb={60}
          //  color="#585981"
           sx={() => ({ "@media (min-width: 1px)": { backgroundColor:"",   maxWidth:'991px',fontSize:'22px', lineHeight:'36px', color:'#585981' }, "@media (min-width: 450px)":{backgroundColor:"",},"@media (min-width: 768px)":{  maxWidth:'470px', fontSize:'22px',paddingBottom:'60px', lineHeight:'36px',color:'#585981' },})}
           >
            We provide a complete service for the sale, purchase or rental of real estate.
           </Text>
           <div>
           <Flex>
         <Paper ml='md' radius='sm'>
         <Text style={{fontSize:'14px', lineHeight:'24px', fontWeight:'500', letterSpacing:'.2em', padding:'8px 29px', border:'0', WebkitBorderRadius: '15px 15px 0 0', 
             WebkitTransition:'all .3s ease-in-out', cursor:'pointer',}}>RENT</Text>
          </Paper>
            
         <Button style={{fontSize:'14px', lineHeight:'24px', fontWeight:'500', letterSpacing:'.2em', color:'#8f90a6', padding:'8px 29px', border:'0', background:'0 0', 
          WebkitBorderRadius:'15px 15px 0 0', WebkitTransition:'all .3s ease-in-out'}}>BUY</Button>
          <Button style={{fontSize:'14px', lineHeight:'24px', fontWeight:'500', letterSpacing:'.2em', color:'#8f90a6', padding:'8px 29px', border:'0', background:'0 0', 
           WebkitBorderRadius:'15px 15px 0 0', WebkitTransition:'all .3s ease-in-out'}}>SELL</Button>
          </Flex>
            <Paper style={{ maxWidth:'920px', opacity:0.80, borderRadius:'15px'}} p={35}>
              <Grid>
                <Grid.Col xs={12} sm={6} lg={3}>
                  <Select style={{fontSize:'14px', fontWeight:'500', marginBottom:'6px', color:'#110229'}}
                  label="Location" 
                  placeholder='Pick one'
                  radius={10}
                  data={[
                    { value: 'react', label: 'React'},
                    { value: 'ang', label: 'Angular'},
                    { value: 'svelte', label: 'Svelte'},
                    { value: 'vue', label: 'Vue'},
                  ]} />
                </Grid.Col>
                <Grid.Col xs={12} sm={6} lg={3}>
                  <Select
                  label="Property Type" 
                  placeholder='Pick one'
                  radius={10}
                  data={[
                    { value: 'react', label: 'React'},
                    { value: 'ang', label: 'Angular'},
                    { value: 'svelte', label: 'Svelte'},
                    { value: 'vue', label: 'Vue'},
                  ]} />

                </Grid.Col>
                <Grid.Col xs={12} sm={6} lg={3}>
                  <Select 
                  label="Price Range" 
                  placeholder='Pick one'
                  radius={10}
                  data={[
                    { value: 'react', label: 'React'},
                    { value: 'ang', label: 'Angular'},
                    { value: 'svelte', label: 'Svelte'},
                    { value: 'vue', label: 'Vue'},
                  ]} />

                </Grid.Col>
                <Grid.Col xs={12} sm={6} lg={3} >
                  <Flex  align="center" sx={() => ({ "@media (min-width: 1px)": { justify: "flex-start" }, "@media (min-width: 450px)":{ justify: "flex-start"},"@media (min-width: 768px)":{backgroundColor:"", position:'relative', marginLeft:'130px'}, justify: "center"})}>
                    <Button radius="md"  h="52px" w="52px" mt={18} opacity="none"> {<IconSearch size={16} />} </Button>
                  </Flex>
                </Grid.Col>
              </Grid>
            </Paper>
           </div>
          
        </div>
        </BackgroundImage>
      </Grid.Col>
    </Grid>
  )
}

export default HeroContentLeft;


//   hero: {
//     position: 'relative',
//     backgroundImage:
//       'url(https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/banner-image.jpg)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     marginLeft: 80,
//     marginRight: 80,
//     borderRadius: 40,
//     marginTop: 100,
    
//   },

//   container: {
//     height: 700,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     alignItems: 'flex-start',
//     paddingBottom: theme.spacing.xl * 6,
//     zIndex: 1,
//     position: 'relative',
    

//     [theme.fn.smallerThan('sm')]: {
//       height: 500,
//       paddingBottom: theme.spacing.xl * 3,
//     },
    
//   },

//   title: {
//     color: theme.black,
//     fontSize: 56,
//     maxWidth: 650,
//     // fontWeight: 600,
//     // marginBottom: "120px",
//     marginRight: theme.spacing.xl * 3,
    
//     lineHeight: 1.1,
//     [theme.fn.smallerThan('sm')]: {
//       fontSize: 40,
//       lineHeight: 1,

//     },

//     [theme.fn.smallerThan('xs')]: {
//       fontSize: 28,
//       lineHeight: 1.3,
//     },
//   },

//   description: {
//     color: theme.black,
//     maxWidth: 600,
//     fontWeight: 450,
//     marginRight: theme.spacing.xl * 10,

//     [theme.fn.smallerThan('sm')]: {
//       maxWidth: '100%',
//       fontSize: theme.fontSizes.sm,
//     },
//   },

//   // control: {
//   //   marginTop: theme.spacing.xl * 5,

//   //   [theme.fn.smallerThan('sm')]: {
//   //     width: '100%',
//   //   },
//   // },
// }));

// export function HeroContentLeft() {
//   const { classes } = useStyles();

//   return (
    
//     <div className={classes.hero}>    
//       <div style={{padding:'6vw'}}>
//         <div style={{marginBottom:'90px', }}>
//         <Title className={classes.title} style={{fontFamily:'Lufga,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontWeight:'700', fontSize:'', maxWidth:'490px'}} >Easy Way to find a perfect property</Title>
//         <Text className={classes.description} size="xl" mt="xl" style={{fontFamily:'', fontSize:'22px', color:'#585981', lineHeight:'36px', maxWidth:'470px', marginTop:'38px'}}>
//           We provide a complete service for the sale, purchase or rental of real estate
//         </Text>

//         </div>

//         <Flex>
//           <Paper ml='md' radius='sm'>
//           <Text style={{fontSize:'14px', lineHeight:'24px', fontWeight:'500', letterSpacing:'.2em', padding:'8px 29px', border:'0', WebkitBorderRadius: '15px 15px 0 0', WebkitTransition:'all .3s ease-in-out', cursor:'pointer',}}>RENT</Text>
//           </Paper>
            
//             <Button style={{fontSize:'14px', lineHeight:'24px', fontWeight:'500', letterSpacing:'.2em', color:'#8f90a6', padding:'8px 29px', border:'0', background:'0 0', WebkitBorderRadius:'15px 15px 0 0', WebkitTransition:'all .3s ease-in-out'}}>BUY</Button>
//             <Button style={{fontSize:'14px', lineHeight:'24px', fontWeight:'500', letterSpacing:'.2em', color:'#8f90a6', padding:'8px 29px', border:'0', background:'0 0', WebkitBorderRadius:'15px 15px 0 0', WebkitTransition:'all .3s ease-in-out'}}>SELL</Button>
//           </Flex>

//          <Card style={{background:'rgba(255,255,255,.8)', boxShadow :'0 30px 60px -15px rgb(143 144 188 /', backdropFilter:'blur(3px', padding:'20px 30px', WebkitBorderRadius:'20px 20px 20px 20px', boxSizing:'border-box', margin:'0', maxWidth:'60vw', display:'block'}}>
         
//          <Flex >
//           <Grid>
//           <Grid.Col md={6} lg={3}>
//           <Select m={10} 
//       label="Location"
//       placeholder="Select Your City"
//       style={{height:'52px', width:'50%', padding:'0 20px', fontSize:'14px', fontWeight:'400', color:'#8f90a6', WebkitBorderRadius:'15px', WebkitTransition:'all .3s ease-in-out'}}
      
      
//       data={[
//         { value: 'react', label: 'React' },
//         { value: 'ng', label: 'Angular' },
//         { value: 'svelte', label: 'Svelte' },
//         { value: 'vue', label: 'Vue' },
//       ]}
//     />
//             </Grid.Col>
//       <Grid.Col md={6} lg={3}>
//       <Select m={10}
//     label="Property Type"
//     placeholder="Choose Property Type"
//     style={{height:'52px', width:'50%', padding:'0 20px', fontSize:'14px', fontWeight:'400', color:'#8f90a6', WebkitBorderRadius:'15px', WebkitTransition:'all .3s ease-in-out'}}
//     data={[
//       { value: 'react', label: 'React' },
//       { value: 'ng', label: 'Angular' },
//       { value: 'svelte', label: 'Svelte' },
//       { value: 'vue', label: 'Vue' },
//     ]}
//   />
//         </Grid.Col>
//       <Grid.Col md={6} lg={3}>
//       <Select m={10}
//   label="Price Range"
//   placeholder="Choose Price Range"
//   style={{height:'52px', width:'50%', padding:'0 20px', fontSize:'14px', fontWeight:'400', color:'#8f90a6', WebkitBorderRadius:'15px', WebkitTransition:'all .3s ease-in-out'}}
//   data={[
//     { value: 'react', label: 'React' },
//     { value: 'ng', label: 'Angular' },
//     { value: 'svelte', label: 'Svelte' },
//     { value: 'vue', label: 'Vue' },
//   ]}
// />
//         </Grid.Col>
//       <Grid.Col md={6} lg={3}>
//       <Button style={{marginTop:'21px', marginLeft:'8px', height:'52px', width:'52px', padding:'20' }}><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
//   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
//   <circle cx="10" cy="10" r="7" />
//   <line x1="21" y1="21" x2="15" y2="15" />
// </svg></Button>
//         </Grid.Col>
// {/* <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
//           Get started
//          </Button> */}   
// </Grid>
//          </Flex>
//          </Card>
//       </div>
//     </div>
//   );
// }