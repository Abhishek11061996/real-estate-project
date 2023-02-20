// import image from "/next/image";
// import React, { useRef } from "react";

// import {
//   createStyles, Box, BackgroundImage, Button, Grid, Paper, Divider, Center, Flex, Group, Title
// } from '@mantine/core';
// import banner_image from './images/banner-image-2.jpg'
// const HeroImageRight = () => {

//   return (
//     <Group
//     sx={() => ({
//       marginTop:110,
//       "@media (min-width: 1px)": {
//        padding:'0px 10px'
//      }, 
//      "@media (min-width: 450px)":
//      {padding:'0px 15px' },
//      "@media (min-width: 998px)":
//      {padding:'0px 40px' },
//     })}
//     >
//       <BackgroundImage
//       src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/banner-image-2.jpg"
//       radius={25}
//       sx={() => ({
//         marginTop:110,
//         "@media (min-width: 1px)": {
//          height:450
//        }, 
//        "@media (min-width: 770px)":{
//         height:550,
//        }
//       })}
//       >
//         <Flex
//          sx={() => ({
//           marginTop:110,
//           "@media (min-width: 1px)": {
//            padding:'7vw 20px'
//          }, 
//          "@media (min-width: 450px)":
//          { padding:'7vw 20px' },
//          "@media (min-width: 770px)":
//          {height:550 },
//         })}
//         >
//           <div >
//             <Title order={1} style={{
//               maxWidth: 400,
//               paddingBottom: 38,
//               fontSize:50,
//               fontWeight: 650,
//               color:'#110229',
//             }}>Find your best Real Estate</Title>
//             <div
//             style={{
//               color:'#585981',
//               maxWidth: 470,
//               paddingBottom: 60,
//               fontSize: 22,
//             }}>We provide a complete service for the sale, purchase or rental of real estate</div>
//             <Button size="xl" radius="lg" uppercase>
//               CONTACT US
//             </Button>
//           </div>
//         </Flex>
//       </BackgroundImage>
//     </Group>
//   )
// }
// export default HeroImageRight




import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({

  


  hero: {
    
    
    position: 'relative',
    backgroundImage:
      'url(https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/banner-image-2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 40,
    marginRight: 70,
    marginLeft: 70,
    marginTop:'80px'
    // width:'100%',
    // height:'80',
    // marginTop:''
  },

  container: {
    height: 600,
    marginTop:'',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.black,
    fontSize: 60,
    fontWeight: 500,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.black,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero} 
    // sx={() => ({ marginTop:110,
    //   "@media (min-width: 1px)": { 
    //     backgrounColor:'aqua'},
    //    "@media (min-width: 450px)":{ backgrounColor:'red' }, 
    //    "@media (min-width: 768px)":{backgrounColor:'green'},
    //    "@media (min-width: 1030px)":{ backgrounColor:'blue'  },})}
    
    >
      
      <div style={{padding:"5vw 5vw"}}

>
        <Title className={classes.title} style={{maxWidth:"490px", paddingBottom:'33px', fontSize:'56px', fontWeight:'700',}}
       
        
        >Find your best Real Estate</Title>
        <Text  className={classes.description} size="xl" mt="xl" style={{fontWeight:'450', fontSize:'22px', lineHeight:'36px', color:'#585981', maxWidth:'470px', paddingBottom:'30px'}} >
        We provide a complete service for the sale, purchase or rental of real estate.
        </Text>

        <Button  size="xl" radius="md" className={classes.control} >
        CONTACT US 
        </Button>
      </div>
    </div>
  );
}