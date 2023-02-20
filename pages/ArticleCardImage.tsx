import { createStyles, Paper, Text, Title, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    width: 280,
    marginTop: '30px',
    marginLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 700,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    marginLeft: '50px',
  },

//   category: {
//     color: theme.white,
//     opacity: 0.7,
//     fontWeight: 700,
//     textTransform: 'uppercase',
//   },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
//   category: string;
}

export function ArticleCardImage({ image, title }: ArticleCardImageProps) {
  const { classes } = useStyles();
let data=[1,2,3,4]
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        {/* <Text className={classes.category} size="xs">
          {category}
        </Text> */}
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      
    </Paper>
  );
}