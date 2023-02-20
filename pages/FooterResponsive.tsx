// import React from 'react'
import {
  Grid, Skeleton,Title, Image, Text,Flex, Group, Button, TextInput, TextInputProps, ActionIcon, useMantineTheme, createStyles


} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram ,IconBrandFacebook , IconBrandLinkedin } from '@tabler/icons';
// const child = <Skeleton height={140} radius="md" animate={false} />;
const useStyles = createStyles((theme) => ({
  footer_media_link: {
    [`@media (min-width: ${850}px)`]:{
      position: "relative",
      top: -40
    },
  }
}));
const FooterResponsive = () => {
  const { classes } = useStyles();
  return (
    
    <Group sx={() => ({ marginTop:110,
       "@media (min-width: 1px)": { 
        padding:'0px 15px' },
        "@media (min-width: 450px)":{ padding:'0px 15px' }, 
        "@media (min-width: 768px)":{padding:'0px 15px'},
        "@media (min-width: 1030px)":{ padding:'0px 70px', marginRight:'25px' },})}
    grow 
    >
      <Grid m="auto" justify="space-between"  >
        <Grid.Col md={4} order={1} sm={12} style={{minHeight: 80, }}>
       <div   style={{width:220 , height:50, paddingLeft:'30px'   }}
       
       >
       <Image
        radius="md"
        src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/logo.svg"
        alt="Random unsplash image"
      //  px={15}
      />
       </div>
          <Text py={20} style={{fontSize:14.4 , color:'grey' , paddingBottom:'1rem' , padding: 20, maxWidth: 400, lineHeight:'26px', fontFamily:'Lufga,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"', fontWeight:'400', WebkitFontSmoothing:'antiliased', paddingLeft:'30px' }} mr={30}  
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </Text>
        
         
        </Grid.Col>
      
      
      <Grid.Col md={7} sm={12} order={2} orderSm={1} orderLg={2} style={{ minHeight: 80}}>
      <Grid justify="space-between">
        <Grid.Col xs={7}>
          <Flex 
          sx={() => ({
            "@media (min-width: 1px)": { display:'flex', justifyContent:'space-between', },
             "@media (min-width: 450px)":{ display:'flex', justifyContent:'space-between', marginRight:'50'}, 
             "@media (min-width: 768px)":{display:'flex', justifyContent:'space-around', marginRight:'-50'},
            })}
          >
        <div>
             <Title order={4} weight={650} size="20px" lh="1.2" mr={3} pb="1rem" color='#110229'  > Take a tour </Title>
              <Text weight={400} size={18}  pt={15}  color="#11022">Features</Text>
              <Text weight={400} size={18}  pt={15} color="#11022">Partners</Text>
              <Text weight={400} size={18}  pt={15} color="#11022">Pricing</Text>
              <Text weight={400} size={18}  pt={15} color="#11022">Product</Text>
              <Text weight={400} size={18}  pt={15} color="#11022">Support</Text>
             </div>

             <div>  <Title order={4} weight={650} size={18} mr={3} pb="1rem" > Our Company </Title>
              <Text weight={400} size={18}  pt={15} color="#11022" >About Us</Text>
              <Text weight={400} size={18}  pt={15} color="#11022" >Agents</Text>
              <Text weight={400} size={18}  pt={15} color="#11022" >Blog</Text>
              <Text weight={400} size={18}  pt={15} color="#11022" >Media</Text>
              <Text weight={400} size={18}  pt={15} color="#11022" >Contact Us</Text>
              </div>
         
           </Flex>
           
        </Grid.Col>
        <Grid.Col xs={4} ml="auto" > 
            <Title order={4} weight={650} size={18} mr={3} pb='1rem' > Subscribe </Title>
<Text weight={400}  color='#8f90a6'size={14} lh="26px" pt={15}  lts=".1em" style={{maxWidth: 250}}> Subscribe to get latest property, blog news from us </Text>
<TextInput
  // icon={<IconSearch size={18} stroke={1.5} />}
  radius="lg"
  size="lg"
  // mt="13px"
  // py={10}
  
  rightSection={
    <ActionIcon size={40} radius="xl" variant="filled" color={"blue"} mr={12} >
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="13" y1="18" x2="19" y2="12" />
  <line x1="13" y1="6" x2="19" y2="12" />
</svg>
    </ActionIcon>
  }
  placeholder="Email Address"
  rightSectionWidth={42}
  lh="1.55"

/> 
            </Grid.Col>
       </Grid>
      </Grid.Col >
      <Grid.Col ml={-10} className={classes.footer_media_link} sm={4} order={2} orderSm={2} orderLg={2}  style={{minHeight: 80, marginTop:'-70px'}}>
        
        <Group  spacing={0} className=""  sx={() => ({ "@media (min-width: 1px)": { backgroundColor:"" , justify:'flex-start' ,marginTop:'60px'}, "@media (min-width: 450px)":{backgroundColor:"", justify:'flex-start', marginTop:'30px'},"@media (min-width: 768px)":{  
         marginTop:'60px',marginLeft:'30px' , justify:'flex-start'
           
        },})}>
      <ActionIcon size="lg"  color={"blue"}>
        <IconBrandFacebook size={25} stroke={1.5} />
      </ActionIcon>
      <ActionIcon size="lg"  color={"blue"}>
        <IconBrandTwitter size={25} stroke={1.5} />
      </ActionIcon>
     
      <ActionIcon size="lg"  color={"pink"}>
        <IconBrandInstagram size={25} stroke={1.5} />
      </ActionIcon>
      <ActionIcon size="lg" >
        <IconBrandLinkedin size={25} stroke={1.5} color={"blue"}/>
      </ActionIcon>
    </Group>
  
   <Text size="sm" py={12} 
   sx={() => ({
    "@media (min-width: 1px)": {  },
     "@media (min-width: 450px)":{ }, 
     "@media (min-width: 768px)":{marginLeft:'40px'},
    })}
   > © 2021 . All rights reserved.</Text>
  
    </Grid.Col>
      </Grid>
    </Group>
  )
}

export default FooterResponsive;