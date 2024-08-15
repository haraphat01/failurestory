import Link from 'next/link';

const FeaturedStories = ({ stories }) => {
    return (
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Stories</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="p-6 bg-white text-black rounded shadow">
                <h3 className="text-xl font-semibold">{story.title}</h3>
                <p className="mt-4">{story.overview}</p>
                <Link
                  href={`/stories/story-${story.id}`}
                  className="mt-4 inline-block text-black underline"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FeaturedStories;