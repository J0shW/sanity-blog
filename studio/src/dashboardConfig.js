export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eac3864c03268e1065a53ee',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-ezethvx7',
                  apiId: '3c1df9ff-c974-4738-847c-2a3ffcef070f'
                },
                {
                  buildHookId: '5eac38657b6cc3f7f671ef71',
                  title: 'Blog Website',
                  name: 'sanity-blog-web-iyaqz3y6',
                  apiId: '5b49eda7-fc49-4761-a7c8-caa9709ab205'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/J0shW/sanity-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-blog-web-iyaqz3y6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
