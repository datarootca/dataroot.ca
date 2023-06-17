import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
    <h1>Welcome to the Data Platform Community!</h1>
    <p>We are thrilled to introduce you to a unified platform that connects data enthusiasts across Canada. Whether you're in Vancouver, Toronto, Montreal, or any other city in this beautiful country, our community is here to help you easily find and connect with like-minded individuals who share your passion for data.</p>



<p>Our platform provides a standardized approach to discovering and joining data groups and communities nationwide. No matter where you are in Canada, you can easily explore local data groups, events, and resources tailored to your interests. By fostering collaboration and knowledge sharing, we aim to create a strong and supportive community for all data enthusiasts.</p>

<p>Here's what you can expect from our Canadian Data Platform Community:</p>

<ul>
<li>Discover Data Groups: Find data groups in your city or province and connect with individuals who are passionate about data platforms. Discover local meetups, workshops, and networking events where you can share ideas, learn from industry experts, and build lasting relationships.</li>
</ul>
<li>Stay Updated: Access a centralized hub for the latest news, blog posts, articles, and resources related to data platforms. Stay informed about emerging trends, best practices, and new technologies. Our platform ensures that you don't miss out on valuable insights from across the country.</li>
<li>Networking Opportunities: Engage with professionals, practitioners, and experts in the field through our networking features. Connect with fellow data enthusiasts, exchange knowledge, and expand your professional network. Collaborate on projects, share experiences, and find mentorship opportunities within our supportive community.
We are committed to making your journey in the Canadian data community an enriching one. By providing a standardized platform, we aim to streamline your experience and facilitate connections with individuals who share your interests and goals.</li>

<p>Join us today and be a part of the Canadian Data Platform Community. Let's explore, learn, and grow together!</p>

    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
