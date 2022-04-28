import React from 'react';
import HomeHeader from './components/HomeHeader';
import { Container, createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import FeaturedPost from './components/FeaturedPost';
import MainFeaturedPost from './components/MainFeaturedPost';
import { sections, title } from './constants/HeaderConstants'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Demar from './resources/Demar_Long_Blank.png';
import SadJokic from './resources/Sad_Jokic.png';
import NicClaxton from './resources/Nic_Claxton.png';
import post1 from './posts/blog-post.1.md';
import post2 from './posts/blog-post.2.md';
import post3 from './posts/blog-post.3.md';


const mainFeaturedPost = {
  title: 'Demar DeMVP Fed Up',
  description:
    "Bulls star is beside himself after series loss to the Bucks. He is begging the team to play better next year, but for now, he is off to Cancun.",
  image: Demar,
  imageText: 'Demar DeRozan',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Jokic Bewildered',
    date: 'April 22',
    description:
      '"I am very thankful none of my teammates speak Serbian, then those bums would know how untalented I think they are."',
    image: SadJokic,
    imageLabel: 'Sad Jokic',
  },
  {
    title: 'Nic Claxton Breaks Long Standing Record',
    date: 'April 24',
    description:
      '"I do not take anything for free. I grind for everything I have."',
    image: NicClaxton,
    imageLabel: 'Nic Claxton',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'Instagram', icon: InstagramIcon, url: 'https://twitter.com/PBsportsnews' },
    { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com/PBsportsnews' },
    { name: 'Facebook', icon: FacebookIcon, url: 'https://twitter.com/PBsportsnews' },
  ],
};

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <HomeHeader title={title} sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Power Bottom Sports"
        description="Sports news by the people, for the people."
      />
    </ThemeProvider>
  );
}

export default App;
