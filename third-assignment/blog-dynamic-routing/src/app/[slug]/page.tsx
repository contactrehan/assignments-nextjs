

const blog_data = [
  {
    id: 1,
    slug: "blog-1",
    description: "Blog 1 with Multi Page dynamic Routing",
  },
  {
    id: 2,
    slug: "blog-2",
    description: "Blog 2 with Multi Page dynamic Routing",
  },
];

export default function SlugPage({ params }: { params: { slug: string } }) {
 ;

 
 

  const selectblog = blog_data.filter((items) => items.slug === params?.slug);


  if (selectblog.length === 0) {
    return <div>Blog not found</div>;
  }

  
  return <div>{selectblog[0].description}</div>;
}
