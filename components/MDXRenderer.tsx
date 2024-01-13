
import { MDXRemote } from 'next-mdx-remote';


const MDXRendererComponent = ({ mdxSource }: {mdxSource: any}) => (
  <div>
    <MDXRemote {...mdxSource} />
  </div>
);

export default MDXRendererComponent;
