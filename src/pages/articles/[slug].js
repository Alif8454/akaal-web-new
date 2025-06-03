import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../../styles/article.css';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      try {
        console.log('Searching for slug:', slug); 

        const { data, error: queryError } = await supabase
          .from('articles')
          .select(`
            id,
            title,
            content,
            author,
            date,
            slug
          `)
          .ilike('slug', `%${slug}%`);

        if (queryError) throw queryError;
        
        console.log('Query results:', data); 

        if (data.length === 0) {
          throw new Error('No article found with this slug');
        } else if (data.length > 1) {
          throw new Error('Multiple articles found with this slug');
        }

        setArticle(data[0]);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-container">
      <h1>{article.title}</h1>
      <div className="article-meta">
        {article.author && <p>Author: {article.author}</p>}
        {article.date && <p>Date: {new Date(article.date).toLocaleDateString()}</p>}
      </div>
      <div className="article-content">
        {article.content}
      </div>
    </div>
  );
}
