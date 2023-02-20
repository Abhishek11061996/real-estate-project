import React ,{ useState } from 'react';
import { createStyles, Image, Header, Button, Flex, Title, Group, Burger, Paper } from '@mantine/core';
import { MediaQuery } from '@mantine/core';

// import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  header_right: {
    [`@media (max-width: ${760}px)`]: {
      display:"none"
    },
  },
  header_burger:{
    [`@media (min-width: ${768}px)`]: {
      display:"none",
    },
    [`@media (max-width: ${760}px)`]: {
      visiblity:"visible",
    },
  },
  
}));

export const HeaderResponsive = () => {
  const { classes } = useStyles();
  const [open_burger, setopen_burger] = useState(false)
  return (
    <div>
      <Header
      height={100}
      style={{
        position:'fixed',
        top:0,
        left: 0,
      }}
      sx={() => ({
         "@media (min-width: 1px)": {
           padding:'0px 20px' 
        }, 
        "@media (min-width: 450px)":
        {padding:'0px 20px' },
        "@media (min-width: 998px)":
        {padding:'0px 80px', paddingLeft:'120px', paddingRight:'120px' },
       })}
       >
        <Flex justify="space-between" py={20}>
          <Group grow>
            <Image
            radius="md"
            src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/logo.svg"
            alt="logo image"
            />
          </Group>
          <Group grow >
            <Flex justify="space-between" mt={10}
            sx={() => ({
              "@media (min-width: 1px)": {
                width: '70vw' 
             }, 
             "@media (min-width: 450px)":
             {width:'60vw' },
             "@media (min-width: 998px)":
             {width: '50vw' },
            })}
            className={classes.header_right} >
              <Title weight={500} order={1} size={16} lts=".2em" my="auto">HOME</Title>
              <Title weight={500} order={1} size={16} lts=".2em" my="auto">PROPERTIES</Title>
              <Title weight={500} order={1} size={16} lts=".2em" my="auto">AGENT</Title>
              <Title weight={500} order={1} size={16} lts=".2em" my="auto">BLOG</Title>
              {/* <Title
              color="#1daeff"
              order={1}
              styles={{
                border: "2px solid #1daeff",
                fontWeight:600,
                borderRadius:'10px',
                fontSize: 14,
                padding: "10px 20px"

              }}
              my="auto"
              lts=".1em">LOG IN</Title> */}
              <Button variant="outline"  radius='lg' lts='.1em'  size="lg" uppercase style={{border:"2px solid #1daeff", fontSize:'16px'}}> Log In </Button>
            </Flex>
          </Group>
          <Group className={classes.header_burger}>
            <Paper shadow="xs" p="sm" onClick={() => setopen_burger(!open_burger)}>
              <Burger opened={open_burger} size="sm"/>
            </Paper>
          </Group>
        </Flex>
        </Header>
        <div>
       {
          open_burger ? <Group style={{
           position: 'fixed',
           left: '20vw'
         }} mt={30}>
           <Paper style={{width:'100vw', height:'100vh', backgroundColor:'white'}} p={20} shadow="md" pl={20}>
            <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>HOME</Title>
           <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>PROPERTY</Title>
              <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>AGENTS</Title>
              <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>BLOG</Title>
              <Group pb={38} pl={25} >
                 <Button variant="outline" px={50} radius='lg' lts='.2em' size="md" uppercase > Log In </Button>
             </Group>
           </Paper>
         </Group> :null
       }
      </div>
      </div>

  )
}



// const useStyles = createStyles((theme) => ({
//   header_right: {
//     [`@media (max-width: ${850})px`]:{
//       // visiblity:'hidden',
//       display:'none',
//       // backgroundColour:'blue'
//     },
//   },
//   header_burger:{
//     [`@media (min-width: ${850}px)`]: {
//       display:'none',
//       // backgroundColour:'red'
//     },
//     [`@media (max-width: ${768}px)`]: {
//       backgroundColor:"white",
//       visiblity: "visible",
//       // backgroundColour:'green'
//     },
//   },
// }));
// export const HeaderResponsive =() => {
//   const { classes } = useStyles();
//   const [open_burger, setopen_burger] = useState(false)
//   return(
//     <div> 
//       <Header height={100} style={{
//         // marginTop:'10px',
//         padding: "20px 5vw",
//         position: 'fixed',
//         top: 0,
//         left: 0,
//        paddingLeft:'95px',
//        paddingRight:'95px'
        
     
//       }}>

//         <Flex justify="space-between">
//           <Group style={{marginLeft:'35px'}}    sx={() => ({  "@media (min-width: 1px)": { backgroundColor:"", }, "@media (min-width: 450px)":{backgroundColor:"", },"@media (min-width: 768px)":{backgroundColor:"",},})}>
//             <Image
            
//             radius="md"
//             src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/logo.svg"
//             alt="logo image" />
//           </Group>
//           <Group  style={{marginRight:'35px',}} sx={() => ({ maxWidth: 550, fontWeight: 700, color:"#1daeff" , "@media (min-width: 1px)": { visibility:'hidden' }, "@media (min-width: 450px)":{ visibility:'hidden' }, "@media (min-width: 850px)":{ visibility:"visible",},})}>
//             <Flex justify="space-between" mt={10}  style={{width: '50vw', }} className={classes.header_right}>
//               <Title weight={500} order={1} size={16} lts='.2em' lh="20px" m="auto"  color="#110229"> HOME</Title>
//               <Title weight={500} order={1} size={16} lts='.2em' lh="20px" m="auto" color="#110229"> PROPERTIES</Title>
//               <Title weight={500} order={1} size={16} lts='.2em' lh="20px" m="auto" color="#110229"> AGENTS</Title>
//               <Title weight={500} order={1} size={16} lts='.2em' lh="20px" m="auto" color="#110229"> BLOG</Title>
//               {/* <Title 
//               // color="#1daeff"
             
//               style={{
//                 border:"2px solid #1daeff",
//                 fontWeight:'600',
//                 borderRadius:'14px',
//                 fontSize:'16px',
//                 lineHeight:'20px',
//                 padding: '13px 30px',
//                 letterSpacing:'.1em',
//                 marginLeft:'14px',
//                 cursor:'pointer',
//               }}
//               lts=".1em">LOG IN</Title> */}
//                <Button variant="outline"  radius='lg' lts='.1em'  size="lg" uppercase style={{border:"2px solid #1daeff",}}> Log In </Button>
//             </Flex>
//           </Group>
//           <Group className={classes.header_burger}>
//             <Paper shadow="xs" p='sm' onClick={()=>setopen_burger(!open_burger)}>
//               <Burger opened={open_burger} size='sm' />
//             </Paper>
//             </Group>       
//            </Flex>
//       </Header>
//       <div>
//         {
//           open_burger ? <Group style={{
//             // position: 'fixed',
//             left: '20vw'
//           }} mt={30}>
//             <Paper style={{width:'100vw', height:'100vh', backgroundColor:'white'}} p={20} shadow="md" pl={20}>
//               <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>HOME</Title>
//               <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>PROPERTY</Title>
//               <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>AGENTS</Title>
//               <Title weight={500} order={1} size={14} lts=".2em" pl={25} pb={38} m='auto'>BLOG</Title>
//               <Group pb={38} pl={25} >
//                 <Button variant="outline" px={50} radius='lg' lts='.2em' size="md" uppercase > Log In </Button>
//               </Group>
//             </Paper>
//           </Group> :null
//         }
//       </div>
//     </div>
    
//   )
// }