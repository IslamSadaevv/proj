import { getDashboardStats } from '@/dal/dashboard';
import { StatCard } from '@/components/dashboard/stat-card';
import { Users, Dumbbell, Calendar, Newspaper, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
        <p className="text-slate-400">Overzicht van de database status.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Totaal Vechters" value={stats.counts.fighters} icon={Users} description="Geregistreerde atleten"/>
        <StatCard title="Sportscholen" value={stats.counts.gyms} icon={Dumbbell} description="Actieve locaties"/>
        <StatCard title="Evenementen" value={stats.counts.events} icon={Calendar} description="Gepland & Afgerond"/>
        <StatCard title="Nieuwsberichten" value={stats.counts.news} icon={Newspaper} description="Laatste updates"/>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Calendar className="h-5 w-5 text-red-500" /> Volgend Event
            </h3>
            <Link href="/dashboard/events"><Button variant="link" className="text-red-400 p-0 h-auto">Bekijk alles <ArrowRight className="ml-1 h-4 w-4"/></Button></Link>
          </div>
          {stats.featured.nextEvent ? (
            <div>
              <p className="text-xl font-bold text-white">{stats.featured.nextEvent.name}</p>
              <p className="text-slate-400">{format(new Date(stats.featured.nextEvent.date), 'dd MMMM yyyy')}</p>
              <p className="text-slate-500 text-sm mt-1">{stats.featured.nextEvent.location || 'Locatie TBD'}</p>
            </div>
          ) : <p className="text-slate-500">Geen aankomende evenementen gepland.</p>}
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Newspaper className="h-5 w-5 text-red-500" /> Laatste Nieuws
            </h3>
            <Link href="/dashboard/news"><Button variant="link" className="text-red-400 p-0 h-auto">Lees meer <ArrowRight className="ml-1 h-4 w-4"/></Button></Link>
          </div>
          {stats.featured.latestNews ? (
            <div>
              <p className="text-xl font-bold text-white truncate">{stats.featured.latestNews.title}</p>
              <p className="text-slate-400 text-sm mt-1 line-clamp-2">{stats.featured.latestNews.snippet}</p>
              <p className="text-slate-600 text-xs mt-2">Gepubliceerd op {format(new Date(stats.featured.latestNews.publishedAt), 'dd/MM/yyyy')}</p>
            </div>
          ) : <p className="text-slate-500">Nog geen nieuwsberichten.</p>}
        </div>
      </div>
    </div>
  );
}