import Allproducts from '@/components/Allproducts';
import Categories from '@/components/Categories';
import Header from '@/components/Header';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <main className="bg-text lg:flex items-start gap-4">
      <Sidebar />
      <div className="">
        <Header />
        <Categories />
        <Allproducts />
      </div>
    </main>
  );
}
