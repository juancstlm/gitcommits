import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
});

export const getCommits = async (user: String, repo: String) => {
  try {
    const response = await instance.get(`repos/${user}/${repo}/commits`, {
      params: {per_page: 12},
    });
    return response;
    // const mockData = [
    //   {
    //     sha: '47edbe7890aa3058f8f60a5600ffb224a40143d2',
    //     node_id:
    //       'MDY6Q29tbWl0MTMzODgwNDc1OjQ3ZWRiZTc4OTBhYTMwNThmOGY2MGE1NjAwZmZiMjI0YTQwMTQzZDI=',
    //     commit: {
    //       author: {
    //         name: 'Juan Castillo',
    //         email: 'juancstl@protonmail.com',
    //         date: '2020-12-23T06:51:35Z',
    //       },
    //       committer: {
    //         name: 'Juan Castillo',
    //         email: 'juancstl@protonmail.com',
    //         date: '2020-12-23T06:51:35Z',
    //       },
    //       message: 'Update Atlas project',
    //       tree: {
    //         sha: 'c4d89aa3fb308d825a02debb3d7ee8de185a4af0',
    //         url:
    //           'https://api.github.com/repos/juancstlm/portfolio/git/trees/c4d89aa3fb308d825a02debb3d7ee8de185a4af0',
    //       },
    //       url:
    //         'https://api.github.com/repos/juancstlm/portfolio/git/commits/47edbe7890aa3058f8f60a5600ffb224a40143d2',
    //       comment_count: 0,
    //       verification: {
    //         verified: false,
    //         reason: 'unsigned',
    //         signature: null,
    //         payload: null,
    //       },
    //     },
    //     url:
    //       'https://api.github.com/repos/juancstlm/portfolio/commits/47edbe7890aa3058f8f60a5600ffb224a40143d2',
    //     html_url:
    //       'https://github.com/juancstlm/portfolio/commit/47edbe7890aa3058f8f60a5600ffb224a40143d2',
    //     comments_url:
    //       'https://api.github.com/repos/juancstlm/portfolio/commits/47edbe7890aa3058f8f60a5600ffb224a40143d2/comments',
    //     author: {
    //       login: 'juancstlm',
    //       id: 9149232,
    //       node_id: 'MDQ6VXNlcjkxNDkyMzI=',
    //       avatar_url: 'https://avatars0.githubusercontent.com/u/9149232?v=4',
    //       gravatar_id: '',
    //       url: 'https://api.github.com/users/juancstlm',
    //       html_url: 'https://github.com/juancstlm',
    //       followers_url: 'https://api.github.com/users/juancstlm/followers',
    //       following_url:
    //         'https://api.github.com/users/juancstlm/following{/other_user}',
    //       gists_url: 'https://api.github.com/users/juancstlm/gists{/gist_id}',
    //       starred_url:
    //         'https://api.github.com/users/juancstlm/starred{/owner}{/repo}',
    //       subscriptions_url:
    //         'https://api.github.com/users/juancstlm/subscriptions',
    //       organizations_url: 'https://api.github.com/users/juancstlm/orgs',
    //       repos_url: 'https://api.github.com/users/juancstlm/repos',
    //       events_url: 'https://api.github.com/users/juancstlm/events{/privacy}',
    //       received_events_url:
    //         'https://api.github.com/users/juancstlm/received_events',
    //       type: 'User',
    //       site_admin: false,
    //     },
    //     committer: {
    //       login: 'juancstlm',
    //       id: 9149232,
    //       node_id: 'MDQ6VXNlcjkxNDkyMzI=',
    //       avatar_url: 'https://avatars0.githubusercontent.com/u/9149232?v=4',
    //       gravatar_id: '',
    //       url: 'https://api.github.com/users/juancstlm',
    //       html_url: 'https://github.com/juancstlm',
    //       followers_url: 'https://api.github.com/users/juancstlm/followers',
    //       following_url:
    //         'https://api.github.com/users/juancstlm/following{/other_user}',
    //       gists_url: 'https://api.github.com/users/juancstlm/gists{/gist_id}',
    //       starred_url:
    //         'https://api.github.com/users/juancstlm/starred{/owner}{/repo}',
    //       subscriptions_url:
    //         'https://api.github.com/users/juancstlm/subscriptions',
    //       organizations_url: 'https://api.github.com/users/juancstlm/orgs',
    //       repos_url: 'https://api.github.com/users/juancstlm/repos',
    //       events_url: 'https://api.github.com/users/juancstlm/events{/privacy}',
    //       received_events_url:
    //         'https://api.github.com/users/juancstlm/received_events',
    //       type: 'User',
    //       site_admin: false,
    //     },
    //     parents: [
    //       {
    //         sha: '0e72a6207233b9fe24f26f173ed62c5b57cd9edb',
    //         url:
    //           'https://api.github.com/repos/juancstlm/portfolio/commits/0e72a6207233b9fe24f26f173ed62c5b57cd9edb',
    //         html_url:
    //           'https://github.com/juancstlm/portfolio/commit/0e72a6207233b9fe24f26f173ed62c5b57cd9edb',
    //       },
    //     ],
    //   },
    //   {
    //     sha: '0e72a6207233b9fe24f26f173ed62c5b57cd9edb',
    //     node_id:
    //       'MDY6Q29tbWl0MTMzODgwNDc1OjBlNzJhNjIwNzIzM2I5ZmUyNGYyNmYxNzNlZDYyYzViNTdjZDllZGI=',
    //     commit: {
    //       author: {
    //         name: 'Juan Castillo',
    //         email: 'juancstl@protonmail.com',
    //         date: '2020-11-07T04:11:21Z',
    //       },
    //       committer: {
    //         name: 'GitHub',
    //         email: 'noreply@github.com',
    //         date: '2020-11-07T04:11:21Z',
    //       },
    //       message:
    //         'Upgrade base (#26)\n\n* Update project\r\n\r\n* change node version in yaml\r\n\r\n* add missing packages\r\n\r\n* remove unused imports\r\n\r\n* update tests\r\n\r\n* Fix warnings\r\n\r\n* Add App Store Icon',
    //       tree: {
    //         sha: 'ed2d33ecaccf6eed6522637850ebc8caa8207dd3',
    //         url:
    //           'https://api.github.com/repos/juancstlm/portfolio/git/trees/ed2d33ecaccf6eed6522637850ebc8caa8207dd3',
    //       },
    //       url:
    //         'https://api.github.com/repos/juancstlm/portfolio/git/commits/0e72a6207233b9fe24f26f173ed62c5b57cd9edb',
    //       comment_count: 0,
    //       verification: {
    //         verified: true,
    //         reason: 'valid',
    //         signature:
    //           '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJfph5pCRBK7hj4Ov3rIwAAdHIIAKdLDIjPzykcXYcw+W7J2yGF\ncexqJ9X6T75A6oRfbjqobRV0rZtgayQaxG9+UMm/X01Kw9JCKmy/g+Afeu8s+pB2\n4V0AnKtzIusgNbZXA1wm2Q0rCEWPkNMBecI+MhHc4HSUmJ1SIE35mPQuYt9is+Wq\nCoU5b3f8hjFiGX2QxK7/dIpB9G4ICzGpWYw8qWwr75Ue8/ytS/UvoOc5GZIR6bF0\nS40B6Sw9YuRlq1JEOQNN41Mtjp70ToGtrxWiUs1piLB6+JdxbpBQ7QSofnwUR1Tb\nUTsBgxHhD0bUylUVTRf5R6yPrxE0LBLCixeRuS8qzU7i1nN1Vvphd1Qo/GZPP+4=\n=JhMr\n-----END PGP SIGNATURE-----\n',
    //         payload:
    //           'tree ed2d33ecaccf6eed6522637850ebc8caa8207dd3\nparent a9bf397a80ffe4da983ded8b08d9226994610551\nauthor Juan Castillo <juancstl@protonmail.com> 1604722281 -0800\ncommitter GitHub <noreply@github.com> 1604722281 -0800\n\nUpgrade base (#26)\n\n* Update project\r\n\r\n* change node version in yaml\r\n\r\n* add missing packages\r\n\r\n* remove unused imports\r\n\r\n* update tests\r\n\r\n* Fix warnings\r\n\r\n* Add App Store Icon',
    //       },
    //     },
    //     url:
    //       'https://api.github.com/repos/juancstlm/portfolio/commits/0e72a6207233b9fe24f26f173ed62c5b57cd9edb',
    //     html_url:
    //       'https://github.com/juancstlm/portfolio/commit/0e72a6207233b9fe24f26f173ed62c5b57cd9edb',
    //     comments_url:
    //       'https://api.github.com/repos/juancstlm/portfolio/commits/0e72a6207233b9fe24f26f173ed62c5b57cd9edb/comments',
    //     author: {
    //       login: 'juancstlm',
    //       id: 9149232,
    //       node_id: 'MDQ6VXNlcjkxNDkyMzI=',
    //       avatar_url: 'https://avatars0.githubusercontent.com/u/9149232?v=4',
    //       gravatar_id: '',
    //       url: 'https://api.github.com/users/juancstlm',
    //       html_url: 'https://github.com/juancstlm',
    //       followers_url: 'https://api.github.com/users/juancstlm/followers',
    //       following_url:
    //         'https://api.github.com/users/juancstlm/following{/other_user}',
    //       gists_url: 'https://api.github.com/users/juancstlm/gists{/gist_id}',
    //       starred_url:
    //         'https://api.github.com/users/juancstlm/starred{/owner}{/repo}',
    //       subscriptions_url:
    //         'https://api.github.com/users/juancstlm/subscriptions',
    //       organizations_url: 'https://api.github.com/users/juancstlm/orgs',
    //       repos_url: 'https://api.github.com/users/juancstlm/repos',
    //       events_url: 'https://api.github.com/users/juancstlm/events{/privacy}',
    //       received_events_url:
    //         'https://api.github.com/users/juancstlm/received_events',
    //       type: 'User',
    //       site_admin: false,
    //     },
    //     committer: {
    //       login: 'web-flow',
    //       id: 19864447,
    //       node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
    //       avatar_url: 'https://avatars3.githubusercontent.com/u/19864447?v=4',
    //       gravatar_id: '',
    //       url: 'https://api.github.com/users/web-flow',
    //       html_url: 'https://github.com/web-flow',
    //       followers_url: 'https://api.github.com/users/web-flow/followers',
    //       following_url:
    //         'https://api.github.com/users/web-flow/following{/other_user}',
    //       gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
    //       starred_url:
    //         'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
    //       subscriptions_url:
    //         'https://api.github.com/users/web-flow/subscriptions',
    //       organizations_url: 'https://api.github.com/users/web-flow/orgs',
    //       repos_url: 'https://api.github.com/users/web-flow/repos',
    //       events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
    //       received_events_url:
    //         'https://api.github.com/users/web-flow/received_events',
    //       type: 'User',
    //       site_admin: false,
    //     },
    //     parents: [
    //       {
    //         sha: 'a9bf397a80ffe4da983ded8b08d9226994610551',
    //         url:
    //           'https://api.github.com/repos/juancstlm/portfolio/commits/a9bf397a80ffe4da983ded8b08d9226994610551',
    //         html_url:
    //           'https://github.com/juancstlm/portfolio/commit/a9bf397a80ffe4da983ded8b08d9226994610551',
    //       },
    //     ],
    //   },
    // ];
    // return mockData;
  } catch (error) {
    console.error(error);
    return error;
  }
};
