import { NewsFeed } from "@/components/news/news-feed"

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">News Feed</h1>
        <p className="text-slate-400">Latest MMA news and updates</p>
      </div>

      <NewsFeed />
    </div>
  )
}
