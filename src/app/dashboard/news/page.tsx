import { getAllNews } from '@/dal/news';
import { NewsManager } from '@/components/news/news-manager';

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="p-4">
      <NewsManager news={news} />
    </div>
  );
}