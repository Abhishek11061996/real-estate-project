import { Grid, Title, useMantineTheme } from '@mantine/core';
import { Card, Image,  BackgroundImage, Center, Space, Paper, Text, Box } from '@mantine/core';

export const Cards= () => {

  const theme = useMantineTheme();
  return (
    <div style={{ padding:'5vw', marginTop:''}}>
      <Center p={20}>
        <Title order={2} style={{textAlign:'center', maxWidth:600, fontWeight:'700', fontSize:38, lineHeight:'1.2'}}>We are available in many well-known countries</Title>
      </Center>
      {/* <Text style={{marginTop: 70, marginBottom: 40, }}> 
        <h1 style={{textAlign:'center' }}>We are Available in Many</h1>
        <h1 style={{textAlign:'center'}}>Well-known countries</h1>
      </Text> */}
    <Grid  grow gutter={30}  style={{padding:'3vh 2vw'}}>
      <Grid.Col  xs={3} pb={30} >

        
      <BackgroundImage
        src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/countrie-img-1.jpg"
       radius={30}
      //  w={237}
       h="424px"       
       w="100%"
       

      //  m="55"
       
      >
        <Center p="md">
          <Text color="black" mt='lg' style={{letterSpacing:'.2em', color:'#110229', fontSize:'24px', fontWeight:'700' }}>
          AMERICA
          </Text>
        </Center>
      </BackgroundImage>
      {/* </Card.Section>

    </Card> */}
        </Grid.Col>
       
        <Grid.Col  xs={3} pb={30} >
      {/* <Card shadow="sm" p="lg" radius="lg" withBorder>
      <Card.Section> */}
      <BackgroundImage
        src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/countrie-img-2.jpg"
        radius={30}
        h="424px"       
        w="100%"
      >
        <Center p="md">
          <Text color="black" mt='lg'  style={{letterSpacing:'.2em', color:'#110229', fontSize:'24px', fontWeight:'700' }}>
          <Text>SPAIN</Text> 
          </Text>
        </Center>
      </BackgroundImage>
      {/* </Card.Section>

     
    </Card> */}
        </Grid.Col>
        
        <Grid.Col  xs={3} pb={30}>
      {/* <Card shadow="sm" p="lg" radius="lg" withBorder>
      <Card.Section> */}
      <BackgroundImage
        src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/countrie-img-3.jpg"
        radius={30}
        h="424px"       
        w="100%"
      >
        <Center p="md">
          <Text color="black" mt='lg'  style={{letterSpacing:'.2em', color:'#110229', fontSize:'24px', fontWeight:'700' }}>
          <Text>LONDON</Text> 
          </Text>
        </Center>
      </BackgroundImage>
      {/* </Card.Section>

    </Card> */}
        </Grid.Col>
        
        <Grid.Col  xs={3} pb={30} >
      {/* <Card shadow="sm" p="lg" radius="lg" withBorder>
      <Card.Section> */}
      <BackgroundImage
        src="https://dropways.github.io/Real-Estate-Property-Landing-Webpage/vendors/images/countrie-img-4.jpg"
        radius={30}
        h="424px"       
        w="100%"
      >
        <Center p="md">
          <Text color="black" mt='lg'  style={{letterSpacing:'.2em', color:'#110229', fontSize:'24px', fontWeight:'700'}}>
           <Text>FRANCE</Text>
          </Text>
        </Center>
      </BackgroundImage>
      {/* </Card.Section>

     
    </Card> */}
        </Grid.Col>
    </Grid>
    </div>
    
  );  
}

export default Cards;