import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

const news = [
  {
    id: 1,
    title: "Jon Jones Successfully Defends Heavyweight Title",
    snippet:
      "In a dominant performance, Jon Jones retained his UFC Heavyweight Championship with a third-round TKO victory over Stipe Miocic at UFC 309.",
    date: "November 16, 2024",
    image: "/placeholder.svg?height=200&width=400",
    category: "Fight Results",
  },
  {
    id: 2,
    title: "Islam Makhachev Set to Face Arman Tsarukyan at UFC 311",
    snippet:
      "The lightweight champion will defend his title in a highly anticipated rematch against the surging contender in Las Vegas.",
    date: "December 10, 2024",
    image: "/placeholder.svg?height=200&width=400",
    category: "Upcoming Fights",
  },
  {
    id: 3,
    title: "Alex Pereira Moves to Light Heavyweight Division",
    snippet:
      "The former middleweight champion announces his move up in weight, targeting a title shot in his new division.",
    date: "December 5, 2024",
    image: "/placeholder.svg?height=200&width=400",
    category: "News",
  },
  {
    id: 4,
    title: "Conor McGregor Injury Update: Return Timeline Announced",
    snippet: "The former two-division champion provides an update on his recovery and potential return to the octagon.",
    date: "November 28, 2024",
    image: "/placeholder.svg?height=200&width=400",
    category: "Fighter News",
  },
  {
    id: 5,
    title: "UFC Announces New Performance Institute in Asia",
    snippet:
      "The organization continues its global expansion with a state-of-the-art training facility opening in 2025.",
    date: "November 20, 2024",
    image: "/placeholder.svg?height=200&width=400",
    category: "Industry News",
  },
  {
    id: 6,
    title: "Rankings Update: New Contenders Emerge in Multiple Divisions",
    snippet: "Following recent fight results, several fighters make significant moves in the official UFC rankings.",
    date: "November 18, 2024",
    image: "/placeholder.svg?height=200&width=400",
    category: "Rankings",
  },
]

export function NewsFeed() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((article) => (
        <Card
          key={article.id}
          className="bg-slate-900 border-slate-800 overflow-hidden hover:border-red-600 transition-colors group cursor-pointer"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2 text-slate-500 text-xs mb-2">
              <Calendar className="h-3 w-3" />
              {article.date}
            </div>
            <CardTitle className="text-white text-lg leading-tight group-hover:text-red-400 transition-colors">
              {article.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-400 leading-relaxed">{article.snippet}</p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{article.category}</span>
              <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-slate-800">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
