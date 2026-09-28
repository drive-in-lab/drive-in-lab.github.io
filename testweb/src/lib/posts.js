const modules = import.meta.glob('../content/posts/*.mdx', { eager: true })

export const posts = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.mdx$/, '')
    return {
      slug,
      Component: mod.default,
      ...mod.frontmatter,
    }
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}
