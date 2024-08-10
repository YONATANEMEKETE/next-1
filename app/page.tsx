import Allproducts from '@/components/Allproducts';
import Categories from '@/components/Categories';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="bg-text">
      <Header />
      <Categories />
      <Allproducts />
    </main>
  );
}
