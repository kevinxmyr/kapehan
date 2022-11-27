import { BookATable } from '../components/BookATable';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Recipes from '../components/Recipes';
import Wecare from '../components/Wecare';
import Gallery from '../components/Gallery'
import Smallbites from './Smallbites';

export const Index = () => {
  return (
    <>
      <Hero />
      <Hero2 />
      <Smallbites />
      <Wecare />
      <Recipes />
      <Gallery />
      <BookATable />
    </>
  );
}