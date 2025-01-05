import ClientBlogPost from '@/components/clientblog'
import { notFound } from 'next/navigation'

const posts = [
  {
    id: 1,
    title: "Mastering CSS Grid Layout",
    content: `
      <p>CSS Grid Layout is a powerful tool for creating complex web layouts. In this post, we'll explore some key concepts and provide examples to help you master CSS Grid.</p>
      
      <h2>1. Creating a Basic Grid</h2>
      <p>To create a grid container, use the <code>display: grid</code> property. Then, define your columns and rows using <code>grid-template-columns</code> and <code>grid-template-rows</code>.</p>
      
      <pre><code class="language-css">
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}
      </code></pre>
      
      <h2>2. Placing Items on the Grid</h2>
      <p>You can place items on the grid using the <code>grid-column</code> and <code>grid-row</code> properties.</p>
      
      <pre><code class="language-css">
.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

.item2 {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}
      </code></pre>
      
      <h2>3. Using Grid Areas</h2>
      <p>Grid areas allow you to name sections of your grid and place items using these names.</p>
      
      <pre><code class="language-css">
.grid-container {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
      </code></pre>
      
      <p>By mastering these concepts, you'll be able to create flexible and responsive layouts with ease using CSS Grid.</p>
    `,
    date: "2023-05-20",
    slug: "mastering-css-grid-layout",
    readingTime: "8 min read"
  },
  {
    id: 2,
    title: "Async/Await in JavaScript",
    content: `
      <p>Async/await is a powerful feature in JavaScript that simplifies working with asynchronous code. Let's explore how to use it effectively.</p>
      
      <h2>1. Basic Syntax</h2>
      <p>The <code>async</code> keyword is used to define an asynchronous function, and <code>await</code> is used to wait for a Promise to resolve.</p>
      
      <pre><code class="language-javascript">
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
      </code></pre>
      
      <h2>2. Parallel Execution</h2>
      <p>You can use <code>Promise.all()</code> to run multiple async operations in parallel.</p>
      
      <pre><code class="language-javascript">
async function fetchMultipleData() {
  try {
    const [users, posts] = await Promise.all([
      fetch('https://api.example.com/users').then(res => res.json()),
      fetch('https://api.example.com/posts').then(res => res.json())
    ]);
    console.log('Users:', users);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMultipleData();
      </code></pre>
      
      <h2>3. Async Arrow Functions</h2>
      <p>You can also use async/await with arrow functions.</p>
      
      <pre><code class="language-javascript">
const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
};

fetchData().then(data => console.log(data));
      </code></pre>
      
      <p>By using async/await, you can write asynchronous code that looks and behaves more like synchronous code, making it easier to read and maintain.</p>
    `,
    date: "2023-05-18",
    slug: "async-await-in-javascript",
    readingTime: "6 min read"
  },
  {
    id: 3,
    title: "React Hooks: useState and useEffect",
    content: `
      <p>React Hooks have revolutionized the way we write React components. Let's explore two of the most commonly used hooks: useState and useEffect.</p>
      
      <h2>1. useState</h2>
      <p>The useState hook allows you to add state to functional components.</p>
      
      <pre><code class="language-jsx">
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>
      
      <h2>2. useEffect</h2>
      <p>The useEffect hook lets you perform side effects in functional components.</p>
      
      <pre><code class="language-jsx">
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>
      
      <h2>3. Cleaning Up Effects</h2>
      <p>You can return a function from useEffect to clean up side effects.</p>
      
      <pre><code class="language-jsx">
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(timer); // This function runs when the component unmounts
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return <div>Seconds: {seconds}</div>;
}
      </code></pre>
      
      <p>By mastering these hooks, you can write more concise and easier-to-understand React components.</p>
    `,
    date: "2023-05-15",
    slug: "react-hooks-usestate-and-useeffect",
    readingTime: "7 min read"
  },
  {
    id: 4,
    title: "The Future of Web Development",
    content: `
      <p>The world of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we look to the future, several key trends are shaping the landscape of web development:</p>
      
      <h2>1. JAMstack and Static Site Generators</h2>
      <p>The JAMstack (JavaScript, APIs, and Markup) architecture is gaining popularity due to its focus on performance, scalability, and developer experience. Static site generators like Next.js, Gatsby, and Hugo are at the forefront of this movement, allowing developers to create fast, secure websites with ease.</p>
      
      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences. As browser support improves, we can expect to see more businesses adopting PWAs to engage users across all devices.</p>
      
      <h2>3. WebAssembly</h2>
      <p>WebAssembly (Wasm) is opening up new possibilities for web applications, allowing developers to run high-performance code in the browser. This technology enables the creation of complex web applications that were previously only possible with native apps.</p>
      
      <h2>4. AI and Machine Learning Integration</h2>
      <p>As AI and machine learning become more accessible, we'll see increased integration of these technologies in web applications. From personalized user experiences to intelligent chatbots, AI will play a significant role in shaping the future of web development.</p>
      
      <h2>5. Improved Accessibility and Inclusivity</h2>
      <p>There's a growing emphasis on creating web experiences that are accessible to all users, regardless of their abilities or devices. We can expect to see more tools and frameworks that prioritize accessibility and help developers create inclusive web applications.</p>
      
      <p>As web developers, it's crucial to stay informed about these trends and continuously adapt our skills to meet the evolving demands of the industry. By embracing these technologies and methodologies, we can create more powerful, efficient, and user-friendly web experiences for the future.</p>
    `,
    date: "2023-05-12",
    slug: "future-of-web-development",
    readingTime: "5 min read"
  },
  {
    id: 5,
    title: "Mastering Next.js: Tips and Tricks",
    content: `
      <p>Next.js has become one of the most popular React frameworks for building modern web applications. Here are some tips and tricks to help you master Next.js and take your applications to the next level:</p>
      
      <h2>1. Leverage Server Components</h2>
      <p>With the introduction of React Server Components, Next.js now offers a powerful way to render components on the server. This can significantly improve performance and reduce the amount of JavaScript sent to the client. Use server components for data fetching and rendering static content.</p>
      
      <h2>2. Optimize Images with next/image</h2>
      <p>The next/image component provides automatic image optimization, including resizing, lazy loading, and serving images in modern formats like WebP. Always use this component instead of the standard img tag to improve your site's performance.</p>
      
      <h2>3. Use Incremental Static Regeneration (ISR)</h2>
      <p>ISR allows you to update static pages without rebuilding your entire site. This is perfect for content that changes infrequently. Set a revalidation time in your getStaticProps function to keep your content fresh while maintaining the benefits of static generation.</p>
      
      <h2>4. Implement API Routes</h2>
      <p>Next.js API routes provide an easy way to build your API within your Next.js app. Use these for handling form submissions, interacting with databases, or creating serverless functions.</p>
      
      <h2>5. Optimize Font Loading</h2>
      <p>Use the next/font module to automatically optimize and load custom fonts. This ensures your fonts are loaded efficiently and prevents layout shift, improving your Core Web Vitals scores.</p>
      
      <h2>6. Implement Dynamic Imports</h2>
      <p>Use dynamic imports to split your code and load components or modules only when they're needed. This can significantly improve initial page load times, especially for large applications.</p>
      
      <p>By implementing these tips and tricks, you can create faster, more efficient Next.js applications that provide excellent user experiences. Remember to always stay updated with the latest Next.js features and best practices to keep your skills sharp and your applications cutting-edge.</p>
    `,
    date: "2023-05-10",
    slug: "mastering-nextjs-tips-and-tricks",
    readingTime: "7 min read"
  },
  {
    id: 6,
    title: "The Power of Server-Side Rendering",
    content: `
      <p>Server-Side Rendering (SSR) has become an essential technique in modern web development, offering significant benefits for both users and developers. Let's explore why SSR is powerful and how it can improve your web applications:</p>
      
      <h2>1. Improved Initial Load Time</h2>
      <p>With SSR, the initial HTML content is generated on the server and sent to the client. This means users can see and interact with the content faster, especially on slower devices or networks. The perceived performance of your application improves dramatically.</p>
      
      <h2>2. Better SEO</h2>
      <p>Search engines can easily crawl and index server-rendered pages, as the content is available in the initial HTML. This can lead to better search engine rankings compared to client-side rendered applications where content is loaded dynamically.</p>
      
      <h2>3. Enhanced User Experience</h2>
      <p>SSR reduces the time-to-interactive for your web applications. Users don't have to wait for JavaScript to load and execute before seeing and interacting with the content, resulting in a smoother, more responsive experience.</p>
      
      <h2>4. Improved Accessibility</h2>
      <p>Server-rendered content is more accessible to users who might have JavaScript disabled or use assistive technologies. This ensures your content is available to a wider audience.</p>
      
      <h2>5. Efficient Caching</h2>
      <p>With SSR, you can implement efficient caching strategies on the server-side. This can further improve performance and reduce the load on your servers.</p>
      
      <h2>6. Simplified Development</h2>
      <p>Frameworks like Next.js make it easy to implement SSR in your React applications. You can focus on building your components and let the framework handle the complexities of server-side rendering.</p>
      
      <p>While SSR offers many benefits, it's important to note that it's not always the best solution for every application. Consider your specific use case, target audience, and performance requirements when deciding between client-side rendering, server-side rendering, or a hybrid approach.</p>
      
      <p>By leveraging the power of server-side rendering, you can create web applications that are fast, SEO-friendly, and provide excellent user experiences across a wide range of devices and network conditions.</p>
    `,
    date: "2023-05-05",
    slug: "power-of-server-side-rendering",
    readingTime: "6 min read"
  }
]

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
  // Await the params themselves
  const { slug } = await params
  
  // Find post after awaiting slug
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <ClientBlogPost post={post} />
}