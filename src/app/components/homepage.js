import Head from "next/head";
import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold">Failurestory.tech</h1>
      </div>

      <main className="container mx-auto py-6 px-4">
        {/* Hero Section */}
        <section className="bg-black text-white text-center py-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Welcome to Failurestory.tech</h2>
          <p className="text-xl mb-8">Embrace the lessons learned from failures. Discover, share, and grow with real stories from founders who faced setbacks and emerged stronger.</p>
          <a href="https://failurestory.substack.com/" className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200">Subscribe Now</a>
        </section>

        {/* Vision Statement */}
        <section className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">At Failurestory.tech, we believe that every failure is a stepping stone to success. Our platform is dedicated to shedding light on the stories that often go untold—the stories of failure. By sharing these narratives, we aim to create a community where entrepreneurs and innovators can learn from each other, find inspiration in adversity, and build a more resilient future.</p>
        </section>

        {/* Why Share Your Story */}
        <section className="bg-gray-100 py-12 rounded-lg my-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Share Your Story?</h2>
          <p className="text-lg text-center mb-8">Every failure has a unique story that holds valuable lessons. By sharing your experiences, you can:</p>
          <ul className="list-disc list-inside text-lg text-center">
            <li>Help others avoid similar mistakes</li>
            <li>Gain new perspectives and insights</li>
            <li>Join a supportive community of like-minded individuals</li>
          </ul>
          <div className="text-center mt-8">
            <a href="/submit-story" className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800">Submit Your Story</a>
          </div>
        </section>

        {/* Subscribe to Our Newsletter */}
        <section className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Failurestory.tech</h2>
          <p className="text-lg mb-8">Subscribe to our newsletter and receive the latest failure stories, insights, and lessons directly in your inbox. Join our community and learn from the best and worst moments in entrepreneurship.</p>
          <a href="/subscribe" className="bg-black text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800">Subscribe Now</a>
        </section>

        {/* Featured Stories */}
        <section className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Stories</h2>
            <p className="mt-4">A brief overview of a failed product or project.</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded shadow">
                <h3 className="text-xl font-semibold">Story Title 1</h3>
                <p className="mt-4">A brief overview of a failed product or project.</p>
                <Link href="/stories/story-1" passHref className="mt-4 inline-block text-black underline">
                  Read More
                </Link>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow">
                <h3 className="text-xl font-semibold">Story Title 2</h3>
                <p className="mt-4">A brief overview of another failed product or project.</p>
                <Link href="/stories/story-2" passHref className="mt-4 inline-block text-black underline">
                  Read More
                </Link>
              </div>
              <div className="p-6 bg-gray-100 rounded shadow">
                <h3 className="text-xl font-semibold">Story Title 3</h3>
                <p className="mt-4">A brief overview of yet another failed product or project.</p>
                <Link href="/stories/story-3" passHref className="mt-4 inline-block text-black underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section className="my-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Failurestory.tech</h2>
          <p className="text-lg">Failurestory.tech was founded with the belief that failure is not the end, but a vital part of the journey towards success. Our mission is to build a platform where entrepreneurs can share their failures openly, learn from one another, and ultimately become stronger and more resilient.</p>
          <p className="text-lg mt-4">Whether you're an aspiring entrepreneur, a seasoned founder, or someone who simply enjoys inspiring stories, we welcome you to join us on this journey. Together, we can transform failures into powerful lessons and drive innovation forward.</p>
        </section>
      </main>

      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Failurestory.tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
