import Image from 'next/image';

export default function SnowSportsPage() {
  // Put your photos under /public/snowSports/
  const photos = [
    '/snowSports/ski1.jpg',
    '/snowSports/ski2.jpg',
    '/snowSports/ski3.jpg',
    '/snowSports/ski4.jpg',
    '/snowSports/ski5.jpg',
    '/snowSports/ski6.jpg',
    '/snowSports/ski7.jpg',
    '/snowSports/ski8.jpg',
    '/snowSports/ski9.jpg',
    '/snowSports/ski10.jpg',
    '/snowSports/ski11.jpg'
  ];

  return (
    <main className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-serif font-bold text-primary mb-3">Snow Sports</h1>

      <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2 mb-6 leading-relaxed">
        <p>
          A small gallery of my skiing and snowboarding moments.
        </p>
        <p>
          If you are interested, please check back for my new advantures in the next winter.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {photos.map((src, i) => (
          <div
            key={src}
            className="relative w-full aspect-square overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900"
          >
            <Image
              src={src}
              alt={`Snow sports photo ${i + 1}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-contain"
              priority={i < 6}
            />
          </div>
        ))}
      </div>
    </main>
  );
}