import { component$ } from '@builder.io/qwik';
import stylus from './index.module.css';
export default component$(() => {
    const articles  =   [
        {
          "title": "The Power of Data Visualization: A Comprehensive Guide",
          "author": "Sarah Johnson",
          "publication": "Data Insights",
          "date": "2022-05-15",
          "url": "https://medium.com/data-insights/the-power-of-data-visualization-123456789"
        },
        {
          "title": "Demystifying Machine Learning: An Introduction for Beginners",
          "author": "Michael Smith",
          "publication": "AI and Beyond",
          "date": "2022-09-03",
          "url": "https://medium.com/ai-and-beyond/demystifying-machine-learning-987654321"
        },
        {
          "title": "Data Governance Best Practices for Ensuring Data Quality",
          "author": "Emily Anderson",
          "publication": "Data Management Weekly",
          "date": "2022-11-20",
          "url": "https://medium.com/data-management-weekly/data-governance-best-practices-456789123"
        },
        {
          "title": "The Role of Artificial Intelligence in Predictive Analytics",
          "author": "John Davis",
          "publication": "Analytics Today",
          "date": "2022-07-10",
          "url": "https://medium.com/analytics-today/the-role-of-artificial-intelligence-789123456"
        },
        {
          "title": "Data Privacy Regulations: A Global Perspective",
          "author": "Michelle Thompson",
          "publication": "Privacy Matters",
          "date": "2022-12-05",
          "url": "https://medium.com/privacy-matters/data-privacy-regulations-987654321"
        }
      ]
    return (
        <div class={stylus.articles} >
            <div class={stylus.content}>
            {articles.map((article,index) => (
                <div key={index} class={stylus.article}>
                    <div class={stylus.articleContainer}>
                        <div class={stylus.header}>
                            <h4 class={stylus.author}>{ article.author}</h4>
                            <div class={stylus.source}> source</div>
                        </div>
                        <a class={stylus.link}>
                            <h2>{ article.title}</h2>
                            <h3>description</h3>
                            <div class={stylus.footer}>
                                <span>Jun 14</span>
                                <span>3 min read</span>
                                <spa>data</spa>
                            </div>
                        </a>
                    </div>
                    <div class={stylus.img}>
                        <img class={stylus.img} src="https://miro.medium.com/v2/resize:fill:400:268/1*8xYBjRNG3xP71HMtL5113g.jpeg" alt="" />
                    </div>
                </div>
            ))}
            </div>
            <div class={stylus.sidebar}>
              <div class={stylus.sidebarSlider}>
                <h1>Category</h1>
                <p>useful articles</p>
              </div>
            </div>
        </div>
  );
}); 